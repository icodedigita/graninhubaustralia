import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

type Db = ReturnType<typeof drizzle>;

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsDb?: Db;
};

function getDb(): Db {
  if (globalForDb.__arenaNextJsDb) {
    return globalForDb.__arenaNextJsDb;
  }

  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is required");
  }

  const instance = drizzle(postgres(databaseUrl));
  if (process.env.NODE_ENV !== "production") {
    globalForDb.__arenaNextJsDb = instance;
  }
  return instance;
}

// Defers connecting/configuring the real drizzle+postgres client until the
// database is actually used, so pages/routes that don't touch it can still
// be statically analyzed/built without DATABASE_URL set.
export const db = new Proxy({} as Db, {
  get(_target, prop) {
    return Reflect.get(getDb() as object, prop);
  },
});

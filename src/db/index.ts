import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is required");
}

const globalForDb = globalThis as typeof globalThis & {
  __arenaNextJsPostgresqlClient?: ReturnType<typeof postgres>;
};

export const client =
  globalForDb.__arenaNextJsPostgresqlClient ?? postgres(databaseUrl);

if (process.env.NODE_ENV !== "production") {
  globalForDb.__arenaNextJsPostgresqlClient = client;
}

export const db = drizzle(client);

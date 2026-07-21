export type Product = {
  slug: string;
  name: string;
  shortDesc: string;
  fullDescription: string;
  image: string;
  tags: string[];
  accent: string;
  filter?: string;
  nutrition: { label: string; value: string }[];
  uses: string[];
  origins: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "lentils",
    name: "Lentils",
    shortDesc:
      "Nutritious legumes rich in protein and fibre — a versatile staple for soups, curries and salads.",
    fullDescription:
      "Our premium Australian-grown lentils are carefully cleaned, graded and packed to meet the strictest international standards. Available in red, green and brown varieties, our lentils are celebrated for their consistent size, clean colour and excellent cooking quality. A powerhouse of plant-based protein, they cook quickly and absorb flavours beautifully — making them a kitchen staple across the Middle East, South Asia and Europe.",
    image: "/images/lentils.jpg",
    tags: ["High Protein", "High Fibre", "Non-GMO"],
    accent: "from-red-100 to-orange-50",
    nutrition: [
      { label: "Protein", value: "~25g / 100g" },
      { label: "Fibre", value: "~30g / 100g" },
      { label: "Iron", value: "Excellent source" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Dhal, curries and stews",
      "Mediterranean salads and bowls",
      "Soups and purees",
      "Vegetarian patties and snacks",
    ],
    origins:
      "Sourced from regional Australian farms across Victoria, South Australia and New South Wales.",
  },
  {
    slug: "kabuli-chickpeas",
    name: "Kabuli Chickpeas",
    shortDesc:
      "Creamy, nutty chickpeas with a smooth texture — perfect for hummus, curries and roasted snacks.",
    fullDescription:
      "Kabuli chickpeas — the larger, cream-coloured variety — are the gold standard for hummus, Mediterranean dishes and premium culinary markets. Our Australian Kabuli chickpeas are known for their uniform size, light colour and clean taste. They hold their shape beautifully during cooking and deliver a buttery texture that's ideal for both traditional and modern recipes.",
    image: "/images/chickpeas.jpg",
    tags: ["Vegan", "Gluten-Free", "Premium"],
    accent: "from-amber-100 to-yellow-50",
    nutrition: [
      { label: "Protein", value: "~20g / 100g" },
      { label: "Fibre", value: "~17g / 100g" },
      { label: "Folate", value: "Rich source" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Hummus and dips",
      "Falafel and street food",
      "Curries and tagines",
      "Roasted snack chickpeas",
    ],
    origins: "Grown in the fertile grain belts of northern Victoria and southern NSW.",
  },
  {
    slug: "desi-chickpeas",
    name: "Desi Chickpeas",
    shortDesc:
      "Small, dark chickpeas with a robust nutty flavour — a favourite in traditional curries and stews.",
    fullDescription:
      "Desi chickpeas are the smaller, darker cousin of the Kabuli variety — prized across South Asia, the Middle East and East Africa for their deep, earthy flavour and firm texture. Our Australian-grown Desi chickpeas are non-GMO and naturally high in protein and fibre. Their robust structure means they hold up beautifully in long-cooked dishes like chana masala, dhal and hearty stews.",
    image: "/images/chickpeas.jpg",
    tags: ["High Protein", "Traditional", "Non-GMO"],
    accent: "from-stone-200 to-amber-50",
    filter: "sepia(0.3) saturate(1.1)",
    nutrition: [
      { label: "Protein", value: "~22g / 100g" },
      { label: "Fibre", value: "~18g / 100g" },
      { label: "Iron", value: "High" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Chana masala and curries",
      "Sprouted salads",
      "Snacks and roasted preparations",
      "Flour for besan / chickpea flour",
    ],
    origins: "Harvested from Australian farms with a long track record of Desi pulse production.",
  },
  {
    slug: "mung-beans",
    name: "Mung Beans",
    shortDesc:
      "Small green legumes with a sweet, nutty flavour — ideal for soups, sprouts and Asian cuisine.",
    fullDescription:
      "Mung beans are one of the most versatile pulses in the world. Small, bright green and naturally sweet, they sprout easily, cook quickly and feature prominently in Asian, Indian and Middle Eastern cuisines. Our Australian mung beans are grown in the ideal climate of northern NSW and southern Queensland, delivering excellent germination rates and clean, uniform grain for premium food and sprout markets.",
    image: "/images/mungbeans.jpg",
    tags: ["Antioxidant Rich", "Versatile", "Sproutable"],
    accent: "from-lime-100 to-green-50",
    nutrition: [
      { label: "Protein", value: "~24g / 100g" },
      { label: "Fibre", value: "~16g / 100g" },
      { label: "Folate", value: "Excellent source" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Sprouts and fresh salads",
      "Asian sweet soups (chè)",
      "Indian moong dal and snacks",
      "Noodles and vermicelli",
    ],
    origins: "Grown primarily in the grain regions of northern New South Wales.",
  },
  {
    slug: "yellow-split-peas",
    name: "Yellow Split Peas",
    shortDesc:
      "Mild, soft-textured legumes — a classic ingredient for hearty soups, dhal and stews.",
    fullDescription:
      "Yellow split peas are the heart and soul of classic comfort food — from Indian dhal to Western split pea soup. Grown, cleaned and split in Australia, our yellow split peas cook down to a creamy, velvety texture in under 30 minutes. Their mild, slightly sweet flavour pairs beautifully with spices, herbs and aromatics, making them a kitchen workhorse for chefs and home cooks alike.",
    image: "/images/splitpeas.jpg",
    tags: ["High Fibre", "Mild Flavour", "Quick Cooking"],
    accent: "from-yellow-100 to-amber-50",
    nutrition: [
      { label: "Protein", value: "~23g / 100g" },
      { label: "Fibre", value: "~26g / 100g" },
      { label: "Potassium", value: "Good source" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Dhal and curry bases",
      "Western split pea soup",
      "Hummus variations",
      "Vegetable patties and falafel",
    ],
    origins: "Australian-grown field peas, processed domestically for consistent quality.",
  },
  {
    slug: "kaspa-peas",
    name: "Kaspa Peas",
    shortDesc:
      "Sweet, smooth-textured field peas — widely used in soups, salads and casseroles.",
    fullDescription:
      "Kaspa peas (also called dun field peas) are a versatile Australian specialty with a distinctive creamy texture and mildly sweet flavour. Popular across the Middle East, Mediterranean and parts of Asia, they are prized for their ability to hold shape in salads while also breaking down beautifully in slow-cooked dishes. Our Kaspa peas are carefully graded for uniform size and clean colour.",
    image: "/images/splitpeas.jpg",
    tags: ["Sweet", "Versatile", "Non-GMO"],
    accent: "from-teal-100 to-emerald-50",
    filter: "hue-rotate(140deg) saturate(1.2)",
    nutrition: [
      { label: "Protein", value: "~22g / 100g" },
      { label: "Fibre", value: "~25g / 100g" },
      { label: "Iron", value: "Good source" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Soups and casseroles",
      "Mediterranean salads",
      "Stews with lamb or chicken",
      "Traditional Middle Eastern dishes",
    ],
    origins: "Sourced from South Australian and Victorian grain-growing regions.",
  },
  {
    slug: "wheat-grain",
    name: "Wheat Grain",
    shortDesc:
      "Nutritious cereal grain with a mild nutty flavour — the foundation for breads and cereals.",
    fullDescription:
      "Australian wheat is globally recognised for its premium quality, high protein content and outstanding baking performance. Our wheat grain is selected for consistent test weight, low moisture and excellent milling quality. From bread flour to breakfast cereals, pasta and wholegrain products — Australian wheat delivers the consistent performance that millers and food manufacturers rely on.",
    image: "/images/wheat.jpg",
    tags: ["High Fibre", "Whole Grain", "Premium"],
    accent: "from-amber-100 to-orange-50",
    nutrition: [
      { label: "Protein", value: "~12g / 100g" },
      { label: "Fibre", value: "~12g / 100g" },
      { label: "B Vitamins", value: "Rich source" },
      { label: "Gluten", value: "Contains gluten" },
    ],
    uses: [
      "Bread and baking flours",
      "Breakfast cereals",
      "Pasta and noodles",
      "Wholegrain bowls and salads",
    ],
    origins: "Grown across the Australian wheatbelt — NSW, Victoria, SA and WA.",
  },
  {
    slug: "red-sorghum",
    name: "Red Sorghum",
    shortDesc:
      "Gluten-free cereal rich in antioxidants, fibre and protein — ideal for porridge and baked goods.",
    fullDescription:
      "Red sorghum is an ancient grain making a modern comeback. Naturally gluten-free and packed with antioxidants, fibre and plant protein, it's a favourite among health-conscious consumers and specialty food manufacturers. Australian red sorghum is grown in northern regions where the climate produces grain with excellent colour, clean flavour and outstanding nutritional profile.",
    image: "/images/sorghum.jpg",
    tags: ["Gluten-Free", "Antioxidant", "Ancient Grain"],
    accent: "from-rose-100 to-red-50",
    nutrition: [
      { label: "Protein", value: "~11g / 100g" },
      { label: "Fibre", value: "~7g / 100g" },
      { label: "Antioxidants", value: "Very high" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Gluten-free porridges",
      "Baked goods and breads",
      "Salads and grain bowls",
      "Brewing and fermented foods",
    ],
    origins: "Cultivated in the warm grain regions of Queensland and northern NSW.",
  },
  {
    slug: "faba-beans",
    name: "Faba Beans",
    shortDesc:
      "Protein-rich legumes with a buttery texture — great in stews, soups and Mediterranean dishes.",
    fullDescription:
      "Faba beans (also known as broad beans or field beans) are one of the highest-protein pulses available — and one of the most versatile. Our Australian-grown faba beans feature a creamy, buttery texture and nutty flavour that shines in both traditional Mediterranean cooking and modern plant-based recipes. They're also a leading ingredient in the booming plant-protein isolate market.",
    image: "/images/fababeans.jpg",
    tags: ["High Protein", "Buttery", "Non-GMO"],
    accent: "from-stone-100 to-amber-50",
    nutrition: [
      { label: "Protein", value: "~26g / 100g" },
      { label: "Fibre", value: "~25g / 100g" },
      { label: "Folate", value: "Excellent source" },
      { label: "Gluten", value: "Naturally free" },
    ],
    uses: [
      "Mediterranean ful medames",
      "Falafel and dips",
      "Plant-protein isolates",
      "Soups and hearty stews",
    ],
    origins: "Grown across southern Australian grain regions — a staple rotation crop.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

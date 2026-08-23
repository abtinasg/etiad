export const treatableSubstances = [
  "تریاک و شیره",
  "هروئین",
  "کریستال (کراک)",
  "ترامادول",
  "متادون",
  "بوپرنورفین (B2)",
  "شیشه",
  "حشیش و گل (ماری‌جوانا)",
  "کمیکال",
] as const;

export const treatableSubstancesAnswer = [
  "ترک انواع مواد زیر در کلینیک انجام می‌شود:",
  ...treatableSubstances,
].join("\n");

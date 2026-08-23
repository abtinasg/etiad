import { treatableSubstances } from "./treatableSubstances";

export type AddictionRecoveryItem = {
  id: string;
  label: string;
  color: string;
  icon: "opium" | "heroin" | "crack" | "tramadol" | "methadone" | "buprenorphine" | "crystal" | "hashish" | "chemical";
};

const itemMeta: Record<
  typeof treatableSubstances[number],
  Omit<AddictionRecoveryItem, "label">
> = {
  "تریاک و شیره": { id: "opium", color: "#8B6914", icon: "opium" },
  "هروئین": { id: "heroin", color: "#6B7FD7", icon: "heroin" },
  "کریستال (کراک)": { id: "crack", color: "#5DADE2", icon: "crack" },
  "ترامادول": { id: "tramadol", color: "#E67E22", icon: "tramadol" },
  "متادون": { id: "methadone", color: "#C44B4B", icon: "methadone" },
  "بوپرنورفین (B2)": { id: "buprenorphine", color: "#9B59B6", icon: "buprenorphine" },
  "شیشه": { id: "crystal", color: "#4CAF50", icon: "crystal" },
  "حشیش و گل (ماری‌جوانا)": { id: "hashish", color: "#D4A843", icon: "hashish" },
  "کمیکال": { id: "chemical", color: "#7B68A6", icon: "chemical" },
};

export const addictionRecoveryItems: AddictionRecoveryItem[] = treatableSubstances.map((label) => ({
  label,
  ...itemMeta[label],
}));

export type AddictionRecoveryItem = {
  id: string;
  label: string;
  color: string;
  icon: "pill" | "crystal" | "leaf" | "opium" | "alcohol" | "hashish" | "heroin" | "psychedelic" | "powder";
};

export const addictionRecoveryItems: AddictionRecoveryItem[] = [
  { id: "methadone", label: "ترک متادون", color: "#C44B4B", icon: "pill" },
  { id: "crystal", label: "ترک شیشه", color: "#4CAF50", icon: "crystal" },
  { id: "marijuana", label: "ترک گل (ماریجوانا)", color: "#D4A843", icon: "leaf" },
  { id: "opium", label: "ترک تریاک و شیره", color: "#8B6914", icon: "opium" },
  { id: "alcohol", label: "ترک الکل", color: "#A67C52", icon: "alcohol" },
  { id: "hashish", label: "ترک حشیش", color: "#5CB85C", icon: "hashish" },
  { id: "heroin", label: "ترک هروئین", color: "#6B7FD7", icon: "heroin" },
  { id: "psychedelic", label: "ترک مواد روان‌گردان", color: "#9B59B6", icon: "psychedelic" },
  { id: "powder", label: "ترک کراک و مواد محرک", color: "#5DADE2", icon: "powder" },
];

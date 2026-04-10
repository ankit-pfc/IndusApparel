export interface Wash {
  name: string;
  stops: [string, string];
}

export const Washes: Wash[] = [
  { name: "Rinse Indigo", stops: ["#0f2134", "#1a3350"] },
  { name: "Dark Rinse", stops: ["#0a1724", "#132538"] },
  { name: "Mid Indigo (Eco)", stops: ["#1b3c66", "#325b8f"] },
  { name: "Storm Grey", stops: ["#3f4859", "#6b7280"] },
  { name: "Overdyed Black", stops: ["#0b0f13", "#1f2937"] },
  { name: "Ecru (Undyed)", stops: ["#efe9df", "#d9d2c8"] },
  { name: "Copper Rigid", stops: ["#1a2e4a", "#2f4b71"] },
];

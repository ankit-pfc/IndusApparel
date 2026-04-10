export interface Fit {
  code: string;
  name: string;
  hem: string;
  rise: string;
  desc: string;
}

export const Fits: Fit[] = [
  { code: "ST", name: "Slim Taper", hem: "14–15 cm", rise: "Mid", desc: "Clean thigh, narrow hem. Office-to-street." },
  { code: "AT", name: "Athletic Taper", hem: "15–16.5 cm", rise: "Mid", desc: "Room in seat/thigh; tapered hem." },
  { code: "SR", name: "Straight", hem: "17–18 cm", rise: "Mid", desc: "Balanced knee to hem. Classic profile." },
  { code: "RS", name: "Relaxed Straight", hem: "18–20 cm", rise: "Mid", desc: "Eased top block; straight leg." },
  { code: "SV", name: "Selvedge Slim", hem: "14–15 cm", rise: "Mid", desc: "Shuttle-loom selvedge; narrow hem." },
  { code: "CU", name: "Carpenter", hem: "18–19 cm", rise: "Mid", desc: "Utility loop + tool pocket." },
];

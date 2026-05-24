export type DosageForm =
  | "Tablet"
  | "Capsule"
  | "Injection"
  | "IV"
  | "Soap"
  | "Ointment"
  | "Syrup";

export type Molecule = {
  id: string;
  name: string;
  generic: string;
  category: string;
  dosageForm: DosageForm;
  strength: string;
  composition: string;
  indication: string;
  packSize: string;
};

export const molecules: Molecule[] = [
  {
    id: "GP-001",
    name: "Geetcef-500",
    generic: "Cefixime",
    category: "Antibiotic",
    dosageForm: "Tablet",
    strength: "500 mg",
    composition: "Cefixime Trihydrate IP equivalent to Cefixime 500 mg",
    indication: "Respiratory tract infections, urinary tract infections",
    packSize: "10 × 10 Alu-Alu",
  },
  {
    id: "GP-002",
    name: "Geetamox-CV",
    generic: "Amoxycillin + Clavulanic Acid",
    category: "Antibiotic",
    dosageForm: "Capsule",
    strength: "625 mg",
    composition: "Amoxycillin Trihydrate IP 500 mg + Clavulanic Acid 125 mg",
    indication: "Broad-spectrum bacterial infections",
    packSize: "10 × 10 Alu-Alu",
  },
  {
    id: "GP-003",
    name: "Geetcef Inj",
    generic: "Ceftriaxone",
    category: "Life-Saving Injectable",
    dosageForm: "Injection",
    strength: "1 g",
    composition: "Ceftriaxone Sodium IP 1 g",
    indication: "Severe bacterial infections, sepsis, meningitis",
    packSize: "1 Vial + WFI",
  },
  {
    id: "GP-004",
    name: "Geetdrip-NS",
    generic: "Sodium Chloride",
    category: "IV Fluids",
    dosageForm: "IV",
    strength: "0.9% w/v",
    composition: "Sodium Chloride IP 0.9% in Water for Injection",
    indication: "Fluid and electrolyte replenishment",
    packSize: "500 ml IV Bottle",
  },
  {
    id: "GP-005",
    name: "Geetkids Syr",
    generic: "Paracetamol",
    category: "Pediatric",
    dosageForm: "Syrup",
    strength: "250 mg/5 ml",
    composition: "Paracetamol IP 250 mg per 5 ml",
    indication: "Fever and mild pain in children",
    packSize: "60 ml PET Bottle",
  },
  {
    id: "GP-006",
    name: "Geetmet-G",
    generic: "Metformin + Glimepiride",
    category: "Chronic Care",
    dosageForm: "Tablet",
    strength: "500 mg + 2 mg",
    composition: "Metformin HCl IP 500 mg + Glimepiride IP 2 mg",
    indication: "Type 2 diabetes mellitus",
    packSize: "10 × 10 Blister",
  },
  {
    id: "GP-007",
    name: "Geetderm",
    generic: "Betamethasone + Neomycin",
    category: "Dermatology",
    dosageForm: "Ointment",
    strength: "0.1% + 0.5%",
    composition: "Betamethasone Valerate 0.1% + Neomycin Sulphate 0.5%",
    indication: "Inflammatory and infected skin conditions",
    packSize: "15 g Tube",
  },
  {
    id: "GP-008",
    name: "Geetpure Soap",
    generic: "Triclosan + Aloe Vera",
    category: "Personal Care",
    dosageForm: "Soap",
    strength: "1% w/w",
    composition: "Triclosan IP 1% with Aloe Vera extract",
    indication: "Antibacterial cleansing and skin hygiene",
    packSize: "75 g Cake",
  },
  {
    id: "GP-009",
    name: "Geetazith",
    generic: "Azithromycin",
    category: "Antibiotic",
    dosageForm: "Tablet",
    strength: "500 mg",
    composition: "Azithromycin IP 500 mg",
    indication: "Respiratory, skin and soft tissue infections",
    packSize: "3 × 10 Alu-Alu",
  },
  {
    id: "GP-010",
    name: "Geetpant Inj",
    generic: "Pantoprazole",
    category: "Acute Care",
    dosageForm: "Injection",
    strength: "40 mg",
    composition: "Pantoprazole Sodium IP 40 mg",
    indication: "Gastroesophageal reflux, peptic ulcer disease",
    packSize: "1 Vial + Diluent",
  },
];

export const dosageForms: DosageForm[] = [
  "Tablet",
  "Capsule",
  "Injection",
  "IV",
  "Soap",
  "Ointment",
  "Syrup",
];

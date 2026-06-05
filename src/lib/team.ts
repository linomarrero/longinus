export type TeamMember = {
  id: string;
  name: string;
  credentials: string[];
  initials: string;
  gradient: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "amari",
    name: "Amari Luu",
    credentials: [
      "President of ASES",
      "Hoover Fellow",
      "Department of Commerce Analyst",
      "Published Author",
    ],
    initials: "AL",
    gradient: "from-[#2a2a2a] to-[#4a2030]",
  },
  {
    id: "lino",
    name: "Lino Marrero",
    credentials: [
      "VP of ASES",
      "Stanford Engineering AI Researcher",
      "Award-winning Public Speaker",
      "Patent-pending Inventor",
    ],
    initials: "LM",
    gradient: "from-[#1a1a2e] to-[#3d1a28]",
  },
  {
    id: "patrick",
    name: "Patrick Latterell",
    credentials: ["Director of Partnerships", "Investor"],
    initials: "PL",
    gradient: "from-[#252525] to-[#452530]",
  },
  {
    id: "walker",
    name: "Walker Coley",
    credentials: ["CFO"],
    initials: "WC",
    gradient: "from-[#1f1f1f] to-[#3a2530]",
  },
];

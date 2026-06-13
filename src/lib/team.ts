export type TeamMember = {
  id: string;
  name: string;
  credentials: string[];
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: "amari",
    name: "Amari Luu",
    credentials: [
      "President of ASES",
      "Hoover Student Fellow",
      "Department of Commerce Analyst",
      "Published Author",
    ],
    image: "/team/amari-luu.jpg",
  },
  {
    id: "lino",
    name: "Lino Marrero",
    credentials: [
      "VP of ASES",
      "Stanford Engineering AI Researcher",
      "Award Winning Public Speaker",
      "Patent-pending Inventor",
    ],
    image: "/team/lino-marrero.jpg",
  },
  {
    id: "patrick",
    name: "Patrick Latterell",
    credentials: [
      "ASES Director of Partnerships",
      "Stanford Management Group VP",
      "Stanford Electrical Engineering",
    ],
    image: "/team/patrick-latterell.jpg",
  },
  {
    id: "walker",
    name: "Walker Coley",
    credentials: [
      "CFO of ASES",
      "Stanford Finance VP",
      "Private Equity Investor",
    ],
    image: "/team/walker-coley.jpg",
  },
];

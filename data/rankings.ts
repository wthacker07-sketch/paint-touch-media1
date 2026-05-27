export type RankingItem = {
  rank: number;
  movement: "up" | "down" | "same" | "new";
  name: string;
  meta: string;
  note: string;
};

export const teamRankings: RankingItem[] = [
  { rank: 1, movement: "same", name: "Houston", meta: "Big 12", note: "Still the sport's best pressure machine." },
  { rank: 2, movement: "up", name: "Duke", meta: "ACC", note: "More creation, better spacing, scary ceiling." },
  { rank: 3, movement: "down", name: "Kansas", meta: "Big 12", note: "Frontcourt answers will decide the top seed case." },
  { rank: 4, movement: "new", name: "UConn", meta: "Big East", note: "Different roster, same ruthlessly clean structure." },
  { rank: 5, movement: "up", name: "Alabama", meta: "SEC", note: "Pace and shot volume create a nightly math problem." }
];

export const playerRankings: RankingItem[] = [
  { rank: 1, movement: "same", name: "Marcus Vale", meta: "G, Duke", note: "Elite first step with real passing feel." },
  { rank: 2, movement: "up", name: "Treyon Moss", meta: "F, Kansas", note: "Switchable defender with improving touch." },
  { rank: 3, movement: "same", name: "Caleb Stone", meta: "G, Kentucky", note: "Three-level scorer with late-clock comfort." },
  { rank: 4, movement: "down", name: "Andre Bell", meta: "C, UConn", note: "Rim pressure and screen craft keep him high." },
  { rank: 5, movement: "new", name: "Jalen Cross", meta: "Wing, Houston", note: "The kind of two-way connector winning teams need." }
];

export const prospectRankings: RankingItem[] = [
  { rank: 1, movement: "same", name: "Marcus Vale", meta: "Freshman guard", note: "Best advantage creator on the board." },
  { rank: 2, movement: "up", name: "Noah Keene", meta: "International wing", note: "Size, touch, and defensive range travel." },
  { rank: 3, movement: "new", name: "Eli Hart", meta: "Sophomore guard", note: "Shot-making profile keeps rising." },
  { rank: 4, movement: "down", name: "Treyon Moss", meta: "Freshman forward", note: "Modern tools, still proving self-created offense." },
  { rank: 5, movement: "same", name: "Caleb Stone", meta: "Freshman guard", note: "Scoring polish gives him a steady floor." }
];

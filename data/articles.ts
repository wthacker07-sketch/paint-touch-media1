export type ArticleCategory = "College Basketball" | "NBA" | "Rankings" | "Draft" | "Opinion" | "News";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: ArticleCategory;
  imageTone: "blue" | "orange" | "red" | "green" | "black" | "purple";
  featured?: boolean;
  trending?: boolean;
  body: string[];
};

export const categories: ArticleCategory[] = [
  "College Basketball",
  "NBA",
  "Rankings",
  "Draft",
  "Opinion",
  "News"
];

export const articles: Article[] = [
  {
    slug: "preseason-top-25-pressure-points",
    title: "The Top 25 Pressure Points That Will Decide the College Season",
    dek: "Every contender has a question. The best teams answer it by February.",
    excerpt:
      "From guard play to frontcourt depth, these are the pressure points shaping the national title race.",
    author: "Paint Touch Staff",
    date: "May 27, 2026",
    readTime: "7 min read",
    category: "College Basketball",
    imageTone: "blue",
    featured: true,
    trending: true,
    body: [
      "College basketball is usually decided by the boring things that become impossible to ignore: defensive rebounding, second-side creation, late-clock shot quality, and whether the third guard can survive real minutes in March.",
      "The top tier is loaded with familiar brands, but the shape of the race is less about logos and more about pressure points. Who has a second creator? Who can punish switches? Who has enough shooting to keep the lane clean?",
      "Paint Touch Media will track those answers all season with weekly rankings, film notes, and draft context. The goal is simple: explain what matters before it becomes obvious."
    ]
  },
  {
    slug: "freshman-guards-changing-draft-board",
    title: "Five Freshman Guards Already Changing the Draft Board",
    dek: "Speed is loud. Decision-making is louder.",
    excerpt:
      "A first look at the guards whose advantage creation could bend both college defenses and NBA scouting rooms.",
    author: "Maya Ellis",
    date: "May 25, 2026",
    readTime: "5 min read",
    category: "Draft",
    imageTone: "orange",
    trending: true,
    body: [
      "The freshman guard evaluation always starts with burst, but it rarely ends there. The real separator is how quickly a player can process help, manipulate the low man, and make the next pass before the window closes.",
      "This group has real speed, but the most interesting names are already showing craft. They change pace, reject screens, and know when the possession needs a paint touch instead of a highlight.",
      "NBA teams will keep asking the same question: does the advantage translate when the floor gets longer, the athletes get bigger, and the scouting report gets meaner?"
    ]
  },
  {
    slug: "nba-playoff-lessons-for-college-coaches",
    title: "What College Coaches Should Steal From the NBA Playoffs",
    dek: "Spacing is not a luxury. It is a survival plan.",
    excerpt:
      "The NBA keeps revealing ideas that college teams can borrow, simplify, and weaponize by conference play.",
    author: "Jon Reed",
    date: "May 22, 2026",
    readTime: "6 min read",
    category: "NBA",
    imageTone: "red",
    body: [
      "The NBA playoffs are a live laboratory for problem solving. Every series becomes a public argument about spacing, matchups, weakside decisions, and the value of forcing defenses to guard the whole floor.",
      "College coaches do not need to copy the complexity. They need to copy the principle: make the help defender choose, then punish the choice quickly.",
      "The best college offenses next season will not just run prettier actions. They will create cleaner decisions."
    ]
  },
  {
    slug: "mid-major-watch-list",
    title: "The Mid-Major Watch List Built for Upset Hunters",
    dek: "Every March story starts months earlier in a quiet gym.",
    excerpt:
      "These programs have the shooting, continuity, or matchup weirdness to become bracket problems.",
    author: "Paint Touch Staff",
    date: "May 20, 2026",
    readTime: "4 min read",
    category: "Rankings",
    imageTone: "green",
    trending: true,
    body: [
      "Upsets are rarely random. They are built on continuity, guard play, shooting variance, and one or two matchup edges that become impossible to solve on short prep.",
      "The mid-major teams worth tracking now are the ones with repeatable offense and enough defensive identity to survive a bad shooting half.",
      "A true upset candidate needs more than vibes. It needs a path to quality shots when the favorite finally locks in."
    ]
  },
  {
    slug: "why-paint-touches-still-matter",
    title: "Why Paint Touches Still Tell the Truth",
    dek: "The modern game loves threes. The best threes are usually born inside.",
    excerpt:
      "Paint touches remain one of the cleanest ways to understand pressure, spacing, and shot quality.",
    author: "Will Carter",
    date: "May 18, 2026",
    readTime: "8 min read",
    category: "Opinion",
    imageTone: "black",
    body: [
      "A paint touch is not always a shot. Sometimes it is the moment a defense has to reveal its priorities. Help or stay home? Tag the roller or stunt at the corner? Switch late or give up the angle?",
      "That is why Paint Touch Media is built around the phrase. The paint is where theories get tested. It is where spacing either matters or disappears.",
      "The smartest analysis starts there and works outward."
    ]
  },
  {
    slug: "transfer-portal-fit-notes",
    title: "Transfer Portal Fit Notes: The Moves That Actually Make Sense",
    dek: "Not every splash is a solution.",
    excerpt:
      "A smarter look at portal additions by role, fit, and how quickly the tape should translate.",
    author: "Maya Ellis",
    date: "May 15, 2026",
    readTime: "6 min read",
    category: "News",
    imageTone: "purple",
    body: [
      "Portal analysis gets noisy because production is easier to measure than fit. A 17-point scorer can be a ceiling raiser or a possession sponge depending on the roster around him.",
      "The best moves solve a specific problem. They add shooting to a cramped lineup, rim protection to an aggressive defense, or secondary creation to a team that relied too heavily on one star.",
      "Context is the story. The box score is only the first clue."
    ]
  }
];

export const featuredArticle = articles.find((article) => article.featured) ?? articles[0];
export const trendingArticles = articles.filter((article) => article.trending);

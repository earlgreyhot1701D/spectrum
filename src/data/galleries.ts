export type Question = {
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
  sourceUrl: string;
};

export type Gallery = {
  id: string;
  title: string;
  theme: string;
  introText: string;
  artworkPath: string;
  questions: Question[];
  lessonText: string;
  lessonCredit: string;
  nextGallery: string | null;
};

export const galleries: Gallery[] = [
  {
    id: "1",
    title: "Identity",
    theme: "Sunrise",
    introText:
      "Sunrise was created in the spirit of the Transgender Pride Flag — pink, blue, and white rising together like light at the start of a new day. This gallery celebrates identity: the courage it takes to know yourself, and the beauty of living as who you truly are.",
    artworkPath: "/artwork/gallery-1-sunrise.png",
    questions: [
      {
        question: "What do the colors of the Transgender Pride Flag represent?",
        options: [
          "Pink for girls, blue for boys, and white for those who exist outside or between those definitions",
          "The three stages of a medical transition",
          "The colors worn at the first Pride march in 1969",
          "Red, white, and blue reinterpreted for the trans community",
        ],
        correctIndex: 0,
        explanation:
          "The pink stripes represent girls, the blue stripes represent boys, and the white stripe in the center represents people who are transitioning, who are non-binary, or who exist outside traditional gender definitions. The flag was designed by Monica Helms in 1999 and first flown at a Pride parade in Phoenix, Arizona in 2000. The original flag is now part of the Smithsonian's permanent collection.",
        sourceUrl: "https://si.edu/stories/who-designed-transgender-flag",
      },
      {
        question: "Who designed the Transgender Pride Flag?",
        options: ["Gilbert Baker", "Monica Helms", "Marsha P. Johnson", "Harvey Milk"],
        correctIndex: 1,
        explanation:
          "Monica Helms, a transgender woman and U.S. Navy veteran, designed the Transgender Pride Flag in 1999. She founded the Transgender American Veterans Association in 2003 and donated the original flag to the Smithsonian National Museum of American History in 2014. All four people listed here made significant contributions to LGBTQIA+ history — each with a story worth knowing.",
        sourceUrl: "https://nationalvmm.org/the-woman-behind-the-flag-honoring-monica-helms/",
      },
      {
        question:
          'Transgender people have existed across many cultures and throughout history. Which of these best describes what "transgender" means today?',
        options: [
          "Someone who has had gender-affirming surgery",
          "Someone whose gender identity differs from the sex they were assigned at birth",
          "Someone who identifies as both male and female at the same time",
          "Someone who does not experience romantic attraction",
        ],
        correctIndex: 1,
        explanation:
          "Transgender is an umbrella term for people whose gender identity differs from the sex they were assigned at birth. It does not require any medical procedures — it is about how a person knows and understands themselves. Transgender people have been part of every culture and every era of human history.",
        sourceUrl: "https://www.loc.gov/lgbt",
      },
      {
        question:
          "Which of these is a well-known transgender activist, author, and actress who has spoken widely about transgender visibility and rights?",
        options: ["Janet Mock", "Laverne Cox", "Jazz Jennings", "Sylvia Rivera"],
        correctIndex: 1,
        explanation:
          "Laverne Cox became the first openly transgender person to appear on the cover of Time magazine in June 2014. Known for her role in Orange Is the New Black, she has been a prominent voice for transgender rights and visibility. All four people listed here are important figures in transgender history and advocacy — each with a remarkable story worth knowing.",
        sourceUrl: "https://www.loc.gov/lgbt",
      },
    ],
    lessonText:
      "The Transgender Pride Flag is a symbol of something simple and profound: the right to be exactly who you are. Transgender people have always been part of human history — from Two-Spirit people honored in many Indigenous cultures, to the activists who stood at the center of the modern LGBTQIA+ rights movement. Today, transgender artists, athletes, scientists, and storytellers continue to shape our world in every field imaginable. Sunrise honors that journey — not just the courage it takes, but the joy that waits on the other side.",
    lessonCredit: "AI Assisted. Human Approved. Powered by NLP.",
    nextGallery: "2",
  },
  {
    id: "2",
    title: "Community",
    theme: "The Gathering",
    introText:
      "The Gathering was inspired by the warm reds, oranges, and pinks of the Lesbian Pride Flag — colors of fire, warmth, and connection. This gallery celebrates community: the power of people finding each other, building chosen families, and creating spaces where everyone belongs.",
    artworkPath: "/artwork/gallery-2-gathering.png",
    questions: [
      {
        question:
          "The modern Lesbian Pride Flag features shades of orange, pink, red, and white. What does the orange represent?",
        options: [
          "Courage and activism",
          "Gender nonconformity",
          "Warmth and community",
          "Love and partnership",
        ],
        correctIndex: 1,
        explanation:
          "On the modern Lesbian Pride Flag designed by Emily Gwen in 2018, the shades of orange represent gender nonconformity — celebrating lesbians who express their gender in ways that go beyond traditional expectations. The flag was designed to be more inclusive and to honor the full diversity of lesbian identity and expression.",
        sourceUrl: "https://www.glbthistory.org",
      },
      {
        question: "What is a chosen family?",
        options: [
          "A legal adoption arrangement",
          "A close-knit group of friends who provide love and support like family",
          "A community center for LGBTQIA+ youth",
          "A term for households with same-sex parents",
        ],
        correctIndex: 1,
        explanation:
          "Chosen family refers to close networks of friends and community members who offer the belonging and support that family traditionally provides. For many LGBTQIA+ people, chosen families have been a profound source of love, stability, and joy. These bonds are real, deep, and often lifelong — a reminder that family is also something we build.",
        sourceUrl: "https://pflag.org",
      },
      {
        question:
          "Lesbian bars and community spaces have played an important role in LGBTQIA+ history. What made these spaces significant?",
        options: [
          "They were the first spaces legally protected under civil rights law",
          "They were places where lesbian women could gather, find community, and simply be themselves",
          "They were created exclusively for political organizing",
          "They replaced religious community spaces in major cities",
        ],
        correctIndex: 1,
        explanation:
          "Lesbian bars and community spaces became vital gathering places where women could socialize, find support, fall in love, and build culture. These spaces nurtured friendships, art, activism, and identity. Many communities are now working to preserve and celebrate this history as part of the broader story of LGBTQIA+ life.",
        sourceUrl: "https://www.glbthistory.org",
      },
      {
        question: "Pride Month is celebrated every June. What event does it commemorate?",
        options: [
          "The signing of the Civil Rights Act",
          "The first same-sex marriage in the United States",
          "The Stonewall Uprising of 1969",
          "The founding of the first LGBTQIA+ community center",
        ],
        correctIndex: 2,
        explanation:
          "Pride Month honors the anniversary of the Stonewall Uprising of June 1969, a pivotal moment when community members in New York City stood up against police harassment. The first Pride march took place the following year. What began as an act of resistance has grown into a global celebration of community, joy, and visibility.",
        sourceUrl: "https://www.loc.gov/item/today-in-history/june-28/",
      },
    ],
    lessonText:
      "Community is one of the most powerful things human beings create together. For LGBTQIA+ people throughout history, finding community — in bars, bookstores, living rooms, marches, and online spaces — has been both an act of survival and an expression of joy. Lesbian women have been at the center of this work: organizing, creating, sheltering each other, and building spaces where people could arrive as strangers and leave as family. The Gathering honors every person who has ever opened a door and said: there is room for you here.",
    lessonCredit: "AI Assisted. Human Approved. Powered by NLP.",
    nextGallery: "3",
  },
  {
    id: "3",
    title: "Expression",
    theme: "Many Selves",
    introText:
      "Many Selves was created in the spirit of the Non-Binary Pride Flag — yellow, white, purple, and black layered together like fragments of a whole picture. This gallery celebrates expression: the many ways people show the world who they are, and the freedom that comes from living outside a single label.",
    artworkPath: "/artwork/gallery-3-many-selves.png",
    questions: [
      {
        question:
          "The Non-Binary Pride Flag has four colors. What does the yellow stripe represent?",
        options: [
          "Gender that exists completely outside the male/female binary",
          "Mixed or multiple genders",
          "The absence of gender",
          "Joy and nonconformity",
        ],
        correctIndex: 0,
        explanation:
          "On the Non-Binary Pride Flag, designed by Kye Rowan in 2014, yellow represents gender that exists completely outside the male/female binary. White represents all genders, purple represents mixed or multiple genders, and black represents agender identity. Together the colors reflect the wide, rich spectrum of non-binary experience.",
        sourceUrl: "https://pflag.org/resource/LGBTQ-glossary/",
      },
      {
        question: "Which pronoun set is commonly used by many non-binary people in English?",
        options: ["He/him only", "She/her only", "They/them", "One/one"],
        correctIndex: 2,
        explanation:
          "Many non-binary people use they/them pronouns, though others use he/him, she/her, neopronouns like xe/xem, or a combination. The singular they has been used in English for centuries — it appears in Shakespeare and Jane Austen. Using someone's correct pronouns is a simple and meaningful way to show respect for who they are.",
        sourceUrl: "https://pflag.org/resource/LGBTQ-glossary/",
      },
      {
        question:
          "Many cultures around the world have long recognized gender identities beyond male and female. Which of these is an example?",
        options: [
          "Two-Spirit identity in many Indigenous North American cultures",
          "The Samurai tradition in Japan",
          "The guild system in medieval Europe",
          "The philosopher tradition in ancient Greece",
        ],
        correctIndex: 0,
        explanation:
          "Two-Spirit is a term used by some Indigenous North American peoples to describe individuals who hold distinct gender roles and spiritual responsibilities within their communities. Many Indigenous cultures recognized and honored these identities long before European colonization. Two-Spirit is a specific cultural identity rooted in Indigenous traditions and is not a general synonym for non-binary.",
        sourceUrl: "https://www.loc.gov/lgbt",
      },
      {
        question: "What does gender expression mean?",
        options: [
          "Legally changing your gender on official documents",
          "The way a person outwardly presents their gender through clothing, hair, and behavior",
          "The gender someone was assigned at birth",
          "A step in a medical transition process",
        ],
        correctIndex: 1,
        explanation:
          "Gender expression is how a person outwardly presents their gender to the world — through choices like clothing, hairstyle, and mannerisms. It is different from gender identity (how you feel inside) and from biological sex. Gender expression can shift over time and belongs to everyone — there is no wrong way to show up as yourself.",
        sourceUrl: "https://pflag.org/resource/LGBTQ-glossary/",
      },
    ],
    lessonText:
      "Human beings have always found ways to express who they are — through art, clothing, language, and the stories we tell. The Non-Binary Pride Flag celebrates the truth that gender is not a binary switch but a wide, living landscape full of color. Many Selves honors every person who has ever mixed the categories, stepped outside the expected, and created something truer than what they were handed. You do not have to fit one shape to be whole. You never did.",
    lessonCredit: "AI Assisted. Human Approved. Powered by NLP.",
    nextGallery: "4",
  },
  {
    id: "4",
    title: "Progress",
    theme: "The Tapestry",
    introText:
      "The Tapestry was woven in the colors of the Progress Pride Flag — a rainbow expanded to include stripes of black, brown, pink, light blue, and white. This gallery celebrates progress: the hard-won victories of the LGBTQIA+ rights movement, and the understanding that progress must include everyone.",
    artworkPath: "/artwork/gallery-4-tapestry.png",
    questions: [
      {
        question:
          "The Progress Pride Flag adds a chevron of colors to the original rainbow. What do the black and brown stripes represent?",
        options: [
          "The leather community and Bear community",
          "LGBTQIA+ people of color and those lost to HIV/AIDS",
          "Night and the underground history of queer culture",
          "The original flag before colors were added",
        ],
        correctIndex: 1,
        explanation:
          "The black and brown stripes on the Progress Pride Flag, designed by Daniel Quasar in 2018, represent LGBTQIA+ people of color and those lost to HIV/AIDS. Quasar added these stripes to acknowledge that the LGBTQIA+ community includes people of all races and backgrounds, and to honor those who have been disproportionately affected and historically centered least.",
        sourceUrl: "https://www.glbthistory.org",
      },
      {
        question:
          "In what year did the United States Supreme Court rule that same-sex couples have a constitutional right to marry?",
        options: ["2003", "2010", "2015", "2020"],
        correctIndex: 2,
        explanation:
          "In Obergefell v. Hodges, decided on June 26, 2015, the U.S. Supreme Court ruled that same-sex couples have a fundamental right to marry under the Fourteenth Amendment. The decision made same-sex marriage legal in all 50 states. The date falls during Pride Month — and for many people it remains one of the most significant moments in LGBTQIA+ civil rights history.",
        sourceUrl: "https://www.supremecourt.gov/opinions/14pdf/14-556_3204.pdf",
      },
      {
        question:
          "The Stonewall Uprising of 1969 is considered a turning point in LGBTQIA+ rights history. What sparked it?",
        options: [
          "A peaceful march on Washington",
          "A police raid on a bar in New York City",
          "The assassination of Harvey Milk",
          "The publication of a landmark civil rights report",
        ],
        correctIndex: 1,
        explanation:
          "In the early morning hours of June 28, 1969, police raided the Stonewall Inn, a gay bar in Greenwich Village, New York City. Rather than dispersing, patrons and community members resisted — and the resistance continued for several days. The Stonewall Uprising galvanized the modern LGBTQIA+ rights movement. The following year, the first Pride march took place on its anniversary.",
        sourceUrl: "https://guides.loc.gov/lgbtq-studies/stonewall-era",
      },
      {
        question:
          "Gilbert Baker created the original Rainbow Pride Flag in 1978. How many stripes did the original version have?",
        options: ["5", "6", "8", "10"],
        correctIndex: 2,
        explanation:
          "Gilbert Baker's original Rainbow Pride Flag, debuted at the San Francisco Gay Freedom Day Parade in 1978, had eight stripes. Each color carried a meaning: hot pink for sexuality, red for life, orange for healing, yellow for sunlight, green for nature, turquoise for magic, indigo for harmony, and violet for spirit. The flag was later simplified to the six-stripe version most recognized today. The original is held by the GLBT Historical Society in San Francisco.",
        sourceUrl: "https://www.glbthistory.org/rainbow-flag",
      },
    ],
    lessonText:
      "Progress is not a straight line — and it belongs to everyone. The Progress Pride Flag was designed as a reminder that the work of inclusion is ongoing, and that visibility must extend to LGBTQIA+ people of color, transgender people, and all those whose stories have been least told. The Tapestry honors the activists, organizers, and everyday people who showed up across generations — not because the path was easy, but because they believed in something worth building. Their work made more joy possible. That is what progress looks like.",
    lessonCredit: "AI Assisted. Human Approved. Powered by NLP.",
    nextGallery: null,
  },
];

export function getGallery(id: string) {
  return galleries.find((gallery) => gallery.id === id);
}

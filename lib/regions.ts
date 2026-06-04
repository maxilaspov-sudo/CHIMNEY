/**
 * California regions with their associated county slugs and city slugs.
 * County slugs map to /areas/[slug]/ county pages.
 * City slugs map to /areas/[slug]/ city pages.
 * Add new entries here when creating new county or city pages.
 */

export interface County {
  name: string;
  slug: string; // maps to /areas/[slug]/ — ends with -county-ca if page exists, or empty if future
  hasPage: boolean; // true = page exists at /areas/[slug]/
  cities: string[]; // city slugs from areas.ts
}

export interface Region {
  name: string;
  description: string;
  counties: County[];
}

export const californiaRegions: Region[] = [
  {
    name: "Southern California",
    description:
      "California's largest metro region. Mild coastal winters, high wildfire risk inland, and a massive inventory of pre-1970 brick chimneys that have never been camera-inspected.",
    counties: [
      {
        name: "Los Angeles County",
        slug: "los-angeles-county-ca",
        hasPage: true,
        cities: [
          "los-angeles", "long-beach", "santa-monica", "pasadena", "glendale",
          "torrance", "pomona", "santa-clarita", "lancaster", "palmdale",
          "el-monte", "downey", "inglewood", "burbank", "west-covina",
          "norwalk", "compton", "south-gate", "carson", "whittier",
          "hawthorne", "alhambra", "lakewood", "bellflower", "baldwin-park",
        ],
      },
      {
        name: "Orange County",
        slug: "orange-county-ca",
        hasPage: true,
        cities: [
          "anaheim", "irvine", "santa-ana", "huntington-beach", "garden-grove",
          "orange", "fullerton", "costa-mesa", "mission-viejo",
          "westminster", "newport-beach", "buena-park", "lake-forest", "tustin",
        ],
      },
      {
        name: "Riverside County",
        slug: "riverside-county-ca",
        hasPage: true,
        cities: ["riverside", "moreno-valley", "corona", "murrieta", "temecula", "jurupa-valley", "menifee", "hemet", "indio"],
      },
      {
        name: "San Bernardino County",
        slug: "san-bernardino-county-ca",
        hasPage: true,
        cities: ["san-bernardino", "fontana", "ontario", "rancho-cucamonga", "victorville", "rialto", "hesperia", "chino", "chino-hills", "upland", "apple-valley", "redlands"],
      },
      {
        name: "San Diego County",
        slug: "san-diego-county-ca",
        hasPage: true,
        cities: ["san-diego", "chula-vista", "oceanside", "escondido", "carlsbad", "el-cajon", "vista", "san-marcos"],
      },
    ],
  },
  {
    name: "Bay Area",
    description:
      "Dense Victorian and Edwardian housing stock in San Francisco, plus mid-century tract homes across the South Bay and East Bay — many with original clay-tile flues approaching the end of their service life.",
    counties: [
      {
        name: "San Francisco County",
        slug: "san-francisco-county-ca",
        hasPage: false,
        cities: ["san-francisco"],
      },
      {
        name: "Santa Clara County",
        slug: "santa-clara-county-ca",
        hasPage: true,
        cities: ["san-jose", "sunnyvale", "santa-clara", "mountain-view", "milpitas", "palo-alto"],
      },
      {
        name: "Alameda County",
        slug: "alameda-county-ca",
        hasPage: true,
        cities: ["oakland", "fremont", "hayward", "berkeley", "richmond", "san-leandro", "livermore", "alameda", "pleasanton", "union-city"],
      },
      {
        name: "Contra Costa County",
        slug: "contra-costa-county-ca",
        hasPage: true,
        cities: ["concord", "antioch", "san-ramon"],
      },
      {
        name: "Solano County",
        slug: "solano-county-ca",
        hasPage: false,
        cities: ["vallejo", "fairfield", "vacaville"],
      },
      {
        name: "San Mateo County",
        slug: "san-mateo-county-ca",
        hasPage: true,
        cities: ["daly-city", "san-mateo", "redwood-city"],
      },
    ],
  },
  {
    name: "Central Valley",
    description:
      "California's longest burning season outside the mountains. Cold Tule fog winters, extreme summer heat, and widespread wood-burning use make annual chimney maintenance essential.",
    counties: [
      {
        name: "Sacramento County",
        slug: "sacramento-county-ca",
        hasPage: true,
        cities: ["sacramento", "elk-grove", "citrus-heights", "folsom"],
      },
      {
        name: "San Joaquin County",
        slug: "san-joaquin-county-ca",
        hasPage: true,
        cities: ["stockton", "tracy", "manteca"],
      },
      {
        name: "Stanislaus County",
        slug: "stanislaus-county-ca",
        hasPage: false,
        cities: ["modesto", "turlock"],
      },
      {
        name: "Fresno County",
        slug: "fresno-county-ca",
        hasPage: true,
        cities: ["fresno", "clovis"],
      },
      {
        name: "Merced County",
        slug: "merced-county-ca",
        hasPage: false,
        cities: ["merced"],
      },
      {
        name: "Tulare County",
        slug: "tulare-county-ca",
        hasPage: false,
        cities: ["visalia"],
      },
      {
        name: "Kern County",
        slug: "kern-county-ca",
        hasPage: true,
        cities: ["bakersfield"],
      },
    ],
  },
  {
    name: "Central Coast",
    description:
      "Distinctive Spanish Colonial and Mission Revival architecture with strict local preservation guidelines. Persistent coastal moisture and post-wildfire rebuild activity define the maintenance landscape.",
    counties: [
      {
        name: "Ventura County",
        slug: "ventura-county-ca",
        hasPage: true,
        cities: ["oxnard", "thousand-oaks", "simi-valley", "ventura"],
      },
      {
        name: "Santa Barbara County",
        slug: "santa-barbara-county-ca",
        hasPage: true,
        cities: ["santa-barbara", "santa-maria"],
      },
      {
        name: "Monterey County",
        slug: "monterey-county-ca",
        hasPage: true,
        cities: ["salinas"],
      },
    ],
  },
  {
    name: "Wine Country & North Bay",
    description:
      "A genuine four-season climate with cold, rainy winters. Post-2017 wildfire rebuilds created a large concentration of newly installed fireplace systems due for their first professional inspection.",
    counties: [
      {
        name: "Sonoma County",
        slug: "sonoma-county-ca",
        hasPage: true,
        cities: ["santa-rosa"],
      },
      {
        name: "Napa County",
        slug: "napa-county-ca",
        hasPage: false,
        cities: ["napa"],
      },
    ],
  },
  {
    name: "Sierra Foothills & Northern California",
    description:
      "The Sierra Nevada foothills combine genuine mountain winters with proximity to the Sacramento metro, producing a wide range of chimney demands from heavy mountain wood burning to suburban factory-built systems. Northern California cities like Redding and Chico experience extreme heat in summer and genuine cold winters.",
    counties: [
      {
        name: "Placer County",
        slug: "placer-county-ca",
        hasPage: true,
        cities: ["roseville"],
      },
      {
        name: "Shasta County",
        slug: "shasta-county-ca",
        hasPage: false,
        cities: ["redding"],
      },
      {
        name: "Butte County",
        slug: "butte-county-ca",
        hasPage: false,
        cities: ["chico"],
      },
    ],
  },
];

/** All counties that have a dedicated county page */
export const countiesWithPages = californiaRegions
  .flatMap((r) => r.counties)
  .filter((c) => c.hasPage);

/** All county names (for display without links) */
export const allCounties: string[] = californiaRegions.flatMap((r) =>
  r.counties.map((c) => c.name)
);

/** Total count of counties served */
export const countyCount = allCounties.length;

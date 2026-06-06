export interface CountyCity {
  name: string;
  slug?: string; // defined = existing page exists; undefined = future city
}

export interface NearbyCounty {
  name: string;
  slug: string; // existing county page slug
}

export interface CountyFAQ {
  q: string;
  a: string;
}

export interface County {
  slug: string; // e.g. los-angeles-county-ca
  name: string; // e.g. Los Angeles County
  shortName: string; // e.g. Los Angeles
  region: string;
  population: string;
  households: string;
  description: string; // unique county intro
  climateProfile: string; // unique climate context
  housingProfile: string; // unique housing stock context
  chimneyRisk: string; // dominant risk label for the badge
  cities: CountyCity[];
  nearbyCounties: NearbyCounty[];
  faqs: CountyFAQ[];
  metaTitle: string;
  metaDescription: string;
}

export const counties: County[] = [
  {
    slug: "los-angeles-county-ca",
    name: "Los Angeles County",
    shortName: "Los Angeles",
    region: "Southern California",
    population: "9.9 million",
    households: "3.3 million",
    description:
      "Los Angeles County is the most populous county in the United States, encompassing a geography that stretches from the Pacific coast through the Santa Monica Mountains and into the eastern foothills of the San Gabriel Valley. With more than 3.3 million households and a housing stock that spans pre-war Craftsman bungalows, post-war ranch homes, Spanish Colonial estates, and modern condos, the county contains one of the densest concentrations of older chimney systems in the western United States. The mild Mediterranean climate means fireplace use is seasonal and often inconsistent — which is exactly when maintenance issues develop undetected.",
    climateProfile:
      "The county spans multiple microclimates. The coastal communities of Santa Monica, Malibu, and Long Beach experience persistent marine air that accelerates corrosion of metal chimney components — stainless caps, damper plates, and chase covers oxidize significantly faster here than inland. The San Fernando Valley and San Gabriel Valley experience true heat — summer temperatures regularly exceed 100°F — which cycles metal and masonry through extreme thermal stress each year. The foothills above Pasadena, Arcadia, and Monrovia face Santa Ana wind events that can generate 60+ mph gusts, dramatically increasing ember transport risk from uncapped chimneys.",
    housingProfile:
      "The dominant chimney type in older Los Angeles County neighborhoods is the original clay-tile-lined brick firebox — common in homes built between 1920 and 1965. These systems were designed for wood burning but many have been converted to gas logs or sealed entirely. A large proportion have never had a professional camera inspection of the flue. Post-1970 construction in the eastern valley cities more commonly features factory-built zero-clearance fireplaces with proprietary liner systems that have distinct maintenance requirements. The 1994 Northridge earthquake caused widespread, often invisible, flue liner damage across the county that remains unrepaired in many homes.",
    chimneyRisk: "Seismic damage + coastal corrosion",
    cities: [
      { name: "Los Angeles", slug: "los-angeles" },
      { name: "Long Beach", slug: "long-beach" },
      { name: "Pasadena", slug: "pasadena" },
      { name: "Glendale", slug: "glendale" },
      { name: "Santa Monica", slug: "santa-monica" },
      { name: "Santa Clarita", slug: "santa-clarita" },
      { name: "Lancaster", slug: "lancaster" },
      { name: "Palmdale", slug: "palmdale" },
      { name: "Torrance", slug: "torrance" },
      { name: "Pomona", slug: "pomona" },
      { name: "Burbank", slug: "burbank" },
      { name: "West Covina", slug: "west-covina" },
      { name: "El Monte", slug: "el-monte" },
      { name: "Downey", slug: "downey" },
      { name: "Inglewood", slug: "inglewood" },
      { name: "Norwalk", slug: "norwalk" },
      { name: "Compton", slug: "compton" },
      { name: "South Gate", slug: "south-gate" },
      { name: "Carson", slug: "carson" },
      { name: "Whittier", slug: "whittier" },
      { name: "Hawthorne", slug: "hawthorne" },
      { name: "Alhambra", slug: "alhambra" },
      { name: "Lakewood", slug: "lakewood" },
      { name: "Bellflower", slug: "bellflower" },
      { name: "Baldwin Park", slug: "baldwin-park" },
    ],
    nearbyCounties: [
      { name: "Orange County", slug: "orange-county-ca" },
      { name: "Ventura County", slug: "ventura-county-ca" },
      { name: "San Bernardino County", slug: "san-bernardino-county-ca" },
      { name: "Riverside County", slug: "riverside-county-ca" },
      { name: "Kern County", slug: "kern-county-ca" },
    ],
    faqs: [
      {
        q: "How did the 1994 Northridge earthquake affect chimneys in Los Angeles County?",
        a: "The Northridge earthquake (6.7 magnitude) cracked or displaced flue liner tiles in thousands of LA County chimneys — often without visible exterior damage. Many of these cracks have never been repaired because general home inspectors cannot detect them without a camera. We recommend a Level 2 video inspection for any LA County home built before 1995 that hasn't had a professional flue scan.",
      },
      {
        q: "Are wood-burning fireplaces legal in Los Angeles County?",
        a: "Yes, but not every day. The South Coast Air Quality Management District (SCAQMD) issues wood-burning curtailment notices on high-pollution days, typically November through February. Burning on curtailment days carries a fine. Gas fireplaces and EPA-certified wood inserts are usually exempt. We can advise on whether your current appliance qualifies for curtailment exemptions.",
      },
      {
        q: "What type of chimney cap is best for homes near the LA coast?",
        a: "For properties within 3–5 miles of the Pacific Ocean — including Santa Monica, Malibu, Venice, and Redondo Beach — we recommend 316L marine-grade stainless steel rather than standard 304 alloy. Marine air causes surface pitting in 304 stainless within 5–8 years; 316L typically lasts 20+ years in coastal conditions.",
      },
      {
        q: "Do LA County Craftsman bungalows have special chimney cleaning requirements?",
        a: "Yes. Original early-20th-century soft brick used in Craftsman bungalows in Pasadena, Los Feliz, and Silver Lake can be damaged by high-pressure washing or aggressive cleaning chemicals. Our technicians use pH-appropriate chimney cleaners and reduced-pressure brushing techniques on all historic masonry to prevent surface damage.",
      },
    ],
    metaTitle: "Chimney Services in Los Angeles County, CA | Chimney Peak California",
    metaDescription:
      "Professional chimney cleaning, chimney repair, chimney inspection, chimney sweep, fireplace repair, and dryer vent cleaning across Los Angeles County. Serving Los Angeles, Long Beach, Pasadena, Glendale, Santa Monica, and more. Request a free estimate online.",
  },

  {
    slug: "orange-county-ca",
    name: "Orange County",
    shortName: "Orange",
    region: "Southern California",
    population: "3.2 million",
    households: "1.1 million",
    description:
      "Orange County sits between Los Angeles and San Diego along California's central coast, and its single-family housing boom from 1970 to 2000 produced one of the highest concentrations of factory-built zero-clearance fireplaces in the state. These systems — installed in the tens of thousands across planned communities in Anaheim, Irvine, Huntington Beach, and Costa Mesa — are now approaching and exceeding their intended 30-year service life. Unlike traditional masonry chimneys, factory-built systems have proprietary liner panels and heat shields that degrade on a fixed schedule regardless of usage, and their condition cannot be assessed without opening the firebox and running a camera.",
    climateProfile:
      "Orange County's coastal climate is mild but not corrosion-free. Cities like Newport Beach, Dana Point, and Laguna Beach see marine air year-round that accelerates deterioration of metal components. Inland communities like Anaheim Hills and Mission Viejo sit in the Santa Ana wind corridor — wind events in October and November can push embers significant distances from any uncapped chimney during fire season. Orange County's proximity to the Cleveland National Forest makes spark management a practical concern, not just a code requirement.",
    housingProfile:
      "The housing stock divides cleanly between pre-1970 older neighborhoods (Anaheim, Santa Ana, Orange) and post-1970 master-planned communities (Irvine, Aliso Viejo, Rancho Santa Margarita). Pre-1970 homes tend to have original clay-tile-lined masonry chimneys. Post-1970 construction is almost universally factory-built. The factory-built systems in the 1975–1995 vintage range — primarily Heatilator, Majestic, and Superior brands — are the most common service need in the county today.",
    chimneyRisk: "Aging factory-built systems",
    cities: [
      { name: "Anaheim", slug: "anaheim" },
      { name: "Irvine", slug: "irvine" },
      { name: "Santa Ana", slug: "santa-ana" },
      { name: "Huntington Beach", slug: "huntington-beach" },
      { name: "Garden Grove", slug: "garden-grove" },
      { name: "Orange", slug: "orange" },
      { name: "Fullerton", slug: "fullerton" },
      { name: "Costa Mesa", slug: "costa-mesa" },
      { name: "Mission Viejo", slug: "mission-viejo" },
      { name: "Westminster", slug: "westminster" },
      { name: "Newport Beach", slug: "newport-beach" },
      { name: "Buena Park", slug: "buena-park" },
      { name: "Lake Forest", slug: "lake-forest" },
      { name: "Tustin", slug: "tustin" },
    ],
    nearbyCounties: [
      { name: "Los Angeles County", slug: "los-angeles-county-ca" },
      { name: "San Diego County", slug: "san-diego-county-ca" },
      { name: "Riverside County", slug: "riverside-county-ca" },
      { name: "San Bernardino County", slug: "san-bernardino-county-ca" },
    ],
    faqs: [
      {
        q: "How do I know if my Orange County factory-built fireplace needs service?",
        a: "Factory-built fireplaces should be inspected every 1–2 years. Warning signs include cracks or gaps in the refractory panels inside the firebox, rust on the firebox walls or heat shields, a deteriorated or stuck damper, and any smoke entering the room during operation. The firebox panels are safety-critical: once cracked, combustion temperatures can reach the metal shell of the unit.",
      },
      {
        q: "My Irvine HOA requires a chimney inspection. What level do I need?",
        a: "Most Irvine HOA chimney requirements call for a Level 1 inspection at minimum. For real estate transactions or any change in appliance type, a Level 2 inspection with camera scan is required. We're familiar with the major Irvine HOA guidelines and can provide a report in the format your association requires.",
      },
      {
        q: "Are wood-burning fireplaces still allowed in Orange County?",
        a: "Yes, but the South Coast AQMD issues wood-burning curtailment notices on high-pollution days, typically October through February. Many Orange County residents have converted to gas inserts to avoid curtailment restrictions. Gas inserts still require annual inspection for carbon monoxide safety and vent integrity.",
      },
    ],
    metaTitle: "Chimney Services in Orange County, CA | Chimney Peak California",
    metaDescription:
      "Professional chimney cleaning, inspection, and factory-built fireplace service across Orange County. Anaheim, Irvine, Huntington Beach, and more. Request a free estimate online.",
  },

  {
    slug: "san-diego-county-ca",
    name: "San Diego County",
    shortName: "San Diego",
    region: "Southern California",
    population: "3.3 million",
    households: "1.1 million",
    description:
      "San Diego County stretches from the Pacific coast to the mountains and desert of the interior, creating a range of chimney maintenance conditions that many homeowners underestimate. The county seat's reputation for perfect weather leads residents to view fireplace maintenance as a low priority — a misconception that results in some of the highest rates of deferred chimney maintenance we encounter anywhere in California. The county's eastern communities, including El Cajon, Santee, Ramona, and Julian, fall in high and very-high fire-hazard severity zones where an uncapped or uncleaned chimney is both a code concern and a genuine fire risk.",
    climateProfile:
      "The coastal strip from Coronado to Del Mar experiences marine air that corrodes standard stainless components faster than inland areas. The mountain communities around Julian and Alpine see genuine winters with snow accumulation and sustained freezing temperatures that cycle masonry through freeze-thaw stress. Eastern communities in the backcountry face the full force of Santa Ana wind events. The 2003 Cedar Fire and 2007 Witch Creek Fire burned through areas where multiple investigations identified chimney emissions as contributing factors in structure-to-structure fire spread.",
    housingProfile:
      "San Diego's coastal neighborhoods feature Spanish Colonial Revival and California Ranch architecture, most with original masonry fireplaces. Mission Valley and the inland communities have a high proportion of post-1970 factory-built systems. The eastern backcountry communities — Ramona, Alpine, Descanso — contain older wood-frame farmhouses and rural homes that often have wood stoves and non-standard chimney configurations requiring specialized inspection.",
    chimneyRisk: "Wildfire ember risk + marine corrosion",
    cities: [
      { name: "San Diego", slug: "san-diego" },
      { name: "Chula Vista", slug: "chula-vista" },
      { name: "Oceanside", slug: "oceanside" },
      { name: "Escondido", slug: "escondido" },
      { name: "Carlsbad", slug: "carlsbad" },
      { name: "El Cajon", slug: "el-cajon" },
      { name: "Vista", slug: "vista" },
      { name: "San Marcos", slug: "san-marcos" },
      { name: "Santee" },
      { name: "La Mesa" },
      { name: "Poway" },
      { name: "Ramona" },
    ],
    nearbyCounties: [
      { name: "Orange County", slug: "orange-county-ca" },
      { name: "Riverside County", slug: "riverside-county-ca" },
    ],
    faqs: [
      {
        q: "Are chimneys a fire risk in San Diego County's eastern communities?",
        a: "Yes. Eastern San Diego County communities — El Cajon, Santee, Ramona, Alpine, and Descanso — sit in CAL FIRE-designated high and very-high fire-hazard severity zones. An uncapped chimney allows sparks to exit the flue and land on surrounding dry vegetation. A spark-arrestor cap with 5/8-inch mesh is required by the California Building Code in these zones and strongly recommended everywhere in the county during fire season.",
      },
      {
        q: "How does the marine climate affect chimneys in coastal San Diego?",
        a: "Coastal San Diego communities from Coronado to La Jolla experience persistent salt-laden air that accelerates oxidation of metal chimney components. Standard 304-grade stainless caps can begin surface pitting within 5 years in La Jolla or Coronado. We recommend 316L marine-grade stainless for any San Diego property within 3 miles of the ocean, and annual inspection of all metal components on coastal properties.",
      },
      {
        q: "How often should I have my San Diego chimney serviced?",
        a: "Annual inspection is the NFPA 211 minimum for any chimney in use. San Diego's mild climate means many residents use their fireplace only occasionally, which can give a false sense that maintenance isn't needed. Even a fireplace used 10–15 times per season accumulates enough creosote to warrant annual cleaning, and wildlife nesting in infrequently used chimneys is common.",
      },
    ],
    metaTitle: "Chimney Services in San Diego County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair across San Diego County. Coastal and inland specialists. Serving San Diego, El Cajon, Escondido, and more. Request a free estimate online.",
  },

  {
    slug: "riverside-county-ca",
    name: "Riverside County",
    shortName: "Riverside",
    region: "Inland Empire",
    population: "2.5 million",
    households: "820,000",
    description:
      "Riverside County covers a vast swath of Southern California's interior, from the suburban cities of the western Inland Empire through the Coachella Valley desert to the San Jacinto and Santa Rosa mountains in the east. The county's climate extremes — summer temperatures reaching 115°F in Palm Springs and winter nights dropping into the 20s in Idyllwild — create some of the most punishing thermal cycling conditions for chimney masonry and metal components found anywhere in California. The western Inland Empire cities, particularly Riverside, Corona, and Moreno Valley, experienced rapid residential expansion in the 1980s and 1990s, producing a large stock of factory-built fireplaces now reaching end-of-life.",
    climateProfile:
      "The western county lies in the Santa Ana wind corridor, where October and November wind events regularly exceed 60 mph. Homes in Riverside, Jurupa Valley, and Corona have faced multiple major wind events in the past decade that can dislodge uncapped chimney tops, accelerate creosote drying, and create dangerous draft conditions. Desert communities in the Coachella Valley see temperature swings exceeding 30°F between day and night from October through April, which is the period when fireplaces are typically in use — the same conditions that most rapidly fatigue mortar joints.",
    housingProfile:
      "Riverside's historic downtown and University neighborhood contain early-20th-century homes with original masonry chimneys — many featuring Period Revival and Craftsman architecture similar to Pasadena. The western county's 1980s–2000s suburban expansion produced predominantly factory-built systems in tract home developments. Mountain communities like Idyllwild, Big Bear (San Bernardino County border), and Lake Elsinore foothills have wood stoves and traditional masonry chimneys with genuine cold-weather burning seasons.",
    chimneyRisk: "Santa Ana wind exposure + extreme thermal cycling",
    cities: [
      { name: "Riverside", slug: "riverside" },
      { name: "Moreno Valley", slug: "moreno-valley" },
      { name: "Corona", slug: "corona" },
      { name: "Murrieta", slug: "murrieta" },
      { name: "Temecula", slug: "temecula" },
      { name: "Jurupa Valley", slug: "jurupa-valley" },
      { name: "Menifee", slug: "menifee" },
      { name: "Hemet", slug: "hemet" },
      { name: "Indio", slug: "indio" },
      { name: "Palm Springs" },
      { name: "Lake Elsinore" },
    ],
    nearbyCounties: [
      { name: "San Bernardino County", slug: "san-bernardino-county-ca" },
      { name: "Orange County", slug: "orange-county-ca" },
      { name: "San Diego County", slug: "san-diego-county-ca" },
      { name: "Los Angeles County", slug: "los-angeles-county-ca" },
      { name: "Kern County", slug: "kern-county-ca" },
    ],
    faqs: [
      {
        q: "Do Santa Ana winds damage chimneys in Riverside County?",
        a: "Yes. High-velocity Santa Ana events can loosen mortar-set chimney caps, warp or displace chase covers, and crack clay tile flue liners through extreme pressure differentials. After any significant wind event (sustained winds above 40 mph), we recommend a visual inspection of the cap and crown, and a flue check if you notice changes in draft behavior.",
      },
      {
        q: "My Palm Springs home has a rarely-used fireplace. Does it still need inspection?",
        a: "Yes. Infrequently used chimneys in desert communities accumulate dust, debris, and nesting material that can block the flue completely. The Coachella Valley's seasonal residents often return to homes where birds or rodents have colonized an unused chimney over summer. Even a fireplace used just a few times per year requires annual inspection.",
      },
    ],
    metaTitle: "Chimney Services in Riverside County, CA | Inland Empire | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Riverside County. Serving Riverside, Corona, Temecula, Palm Springs, and throughout the Inland Empire. Request a free estimate online.",
  },

  {
    slug: "san-bernardino-county-ca",
    name: "San Bernardino County",
    shortName: "San Bernardino",
    region: "Inland Empire / Mountain Communities",
    population: "2.2 million",
    households: "710,000",
    description:
      "San Bernardino County is the largest county by area in the contiguous United States, extending from the Los Angeles Basin suburbs of the western Inland Empire through the Mojave Desert to the Nevada border. Its mountain communities — Big Bear Lake, Lake Arrowhead, Running Springs, and Crestline — sit at elevations between 5,000 and 8,400 feet and burn wood heavily through a genuine four-to-five month heating season. These mountain chimneys see more wood-burning volume per season than any other California market, and the rapid elevation changes that make the mountains attractive create severe temperature inversions that trap smoke and deposit creosote unusually fast.",
    climateProfile:
      "The mountain communities of the San Bernardino Mountains experience true winter — measurable snowfall, temperatures below 20°F, and an extended heating season that begins in October and runs through April. At these elevations, creosote deposits build significantly faster than at sea level, and the wet-dry cycle of mountain precipitation accelerates mortar joint failure. The western valley communities of Fontana, Ontario, and Rancho Cucamonga sit at the edge of the LA Basin's smog field, subject to SCAQMD wood-burning curtailment. The desert communities east of I-15 see extreme heat and cold with minimal humidity, which dries and cracks mortar rapidly.",
    housingProfile:
      "The mountain communities feature a mix of original 1950s–1970s A-frame cabins, traditional wood-frame vacation homes, and newer constructed rental properties — virtually all with wood-burning fireplaces or stoves used heavily through the heating season. The valley communities (San Bernardino city, Fontana, Ontario, Rancho Cucamonga) have a broad mix of older masonry chimneys in pre-1970 homes and factory-built systems in post-1975 tract housing.",
    chimneyRisk: "Heavy mountain wood-burning + freeze-thaw masonry damage",
    cities: [
      { name: "San Bernardino", slug: "san-bernardino" },
      { name: "Fontana", slug: "fontana" },
      { name: "Ontario", slug: "ontario" },
      { name: "Rancho Cucamonga", slug: "rancho-cucamonga" },
      { name: "Victorville", slug: "victorville" },
      { name: "Rialto", slug: "rialto" },
      { name: "Hesperia", slug: "hesperia" },
      { name: "Chino", slug: "chino" },
      { name: "Chino Hills", slug: "chino-hills" },
      { name: "Upland", slug: "upland" },
      { name: "Apple Valley", slug: "apple-valley" },
      { name: "Redlands", slug: "redlands" },
      { name: "Big Bear Lake" },
      { name: "Lake Arrowhead" },
    ],
    nearbyCounties: [
      { name: "Los Angeles County", slug: "los-angeles-county-ca" },
      { name: "Riverside County", slug: "riverside-county-ca" },
      { name: "Kern County", slug: "kern-county-ca" },
    ],
    faqs: [
      {
        q: "How often should Big Bear and Lake Arrowhead cabins have their chimneys cleaned?",
        a: "Mountain vacation homes that burn wood regularly through a full heating season should be cleaned at least twice a year — once in late fall before peak use, and once in spring after the season ends. Heavy wood burning in confined, cold-air mountain environments deposits creosote at a substantially higher rate than coastal California use. If your cabin is used as a rental, annual inspection is also an insurance requirement in most policies.",
      },
      {
        q: "Does SCAQMD wood-burning curtailment apply to San Bernardino mountain communities?",
        a: "The mountain communities above 3,000 feet elevation (Big Bear, Lake Arrowhead, Crestline) are exempt from most SCAQMD curtailment rules because wood burning is the primary heat source at those elevations. Valley communities in San Bernardino County below 3,000 feet are subject to SCAQMD curtailment during Spare the Air events.",
      },
    ],
    metaTitle: "Chimney Services in San Bernardino County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and inspection in San Bernardino County. Big Bear, Lake Arrowhead, Fontana, Ontario, and Inland Empire communities. Request a free estimate online.",
  },

  {
    slug: "santa-clara-county-ca",
    name: "Santa Clara County",
    shortName: "Santa Clara",
    region: "Bay Area / Silicon Valley",
    population: "1.9 million",
    households: "660,000",
    description:
      "Santa Clara County — the heart of Silicon Valley — contains a housing stock that largely predates its tech-industry reputation. The core residential cities of San Jose, Sunnyvale, and Santa Clara were built up through the 1950s and 1970s, and the tract homes of that era typically have original clay-tile-lined masonry chimneys that now range from 50 to 70 years old. These systems are approaching or beyond the useful life of their flue liners, and the 1989 Loma Prieta earthquake — centered just south of the county — cracked or displaced clay tile in thousands of flues that may never have received a post-earthquake camera inspection.",
    climateProfile:
      "Santa Clara County experiences the Bay Area's characteristic mild, foggy winters and warm, dry summers. The BAAQMD issues Spare the Air alerts on winter days with poor air quality, restricting wood burning throughout the Bay Area including Santa Clara County. Despite the Spare the Air program, gas fireplace use is widespread, and gas appliances still require annual inspection for carbon monoxide safety — a risk that many homeowners overlook because gas produces no visible smoke.",
    housingProfile:
      "The predominant housing type is the postwar ranch home — single-story, three-bedroom properties built from 1950 to 1975, typically with a single masonry fireplace in the living room. Most have never had a professional camera inspection of the flue. Older neighborhoods in Los Gatos, Saratoga, and Willow Glen contain 1920s–1940s Craftsman and Period Revival homes with original masonry that reflects the same construction methods as pre-war homes in Pasadena or Berkeley.",
    chimneyRisk: "Post-Loma Prieta liner damage + deferred inspection",
    cities: [
      { name: "San Jose", slug: "san-jose" },
      { name: "Sunnyvale", slug: "sunnyvale" },
      { name: "Santa Clara", slug: "santa-clara" },
      { name: "Mountain View", slug: "mountain-view" },
      { name: "Milpitas", slug: "milpitas" },
      { name: "Palo Alto", slug: "palo-alto" },
      { name: "Los Gatos" },
      { name: "Saratoga" },
    ],
    nearbyCounties: [
      { name: "Alameda County", slug: "alameda-county-ca" },
      { name: "San Mateo County", slug: "san-mateo-county-ca" },
      { name: "Contra Costa County", slug: "contra-costa-county-ca" },
      { name: "Monterey County", slug: "monterey-county-ca" },
    ],
    faqs: [
      {
        q: "Did the 1989 Loma Prieta earthquake damage chimneys in Santa Clara County?",
        a: "Yes. The 6.9 magnitude Loma Prieta earthquake caused significant structural damage to chimneys throughout Santa Clara County. Hairline cracks in clay flue tile are invisible from the firebox but allow combustion gases — including carbon monoxide — to seep through the surrounding masonry. Any pre-1990 Santa Clara County home that hasn't had a Level 2 camera inspection since 1989 should schedule one before next heating season.",
      },
      {
        q: "Do BAAQMD Spare the Air rules apply in Santa Clara County?",
        a: "Yes. The Bay Area Air Quality Management District's Spare the Air program restricts wood burning throughout the nine-county Bay Area, including Santa Clara County, on designated winter Spare the Air days. Wood-burning violations carry fines. Gas fireplaces and certified wood inserts with EPA emission ratings below 2 g/hr are usually exempt. We can confirm your appliance's compliance status.",
      },
      {
        q: "My San Jose home is from 1962. Should I be concerned about the chimney?",
        a: "Yes. A 60-year-old clay tile liner in San Jose is approaching the end of its design life. Even without visible damage, the cumulative effect of thermal cycling, seismic movement, and moisture infiltration over six decades warrants a Level 2 camera inspection. Many Santa Clara County homes from this era have liners that show significant deterioration on camera despite appearing fine from the firebox.",
      },
    ],
    metaTitle: "Chimney Services in Santa Clara County, CA | Silicon Valley | Chimney Peak California",
    metaDescription:
      "Professional chimney cleaning, chimney repair, chimney inspection, chimney sweep, fireplace repair, and dryer vent cleaning across Santa Clara County. Serving San Jose, Sunnyvale, Mountain View, Los Gatos, and all of Silicon Valley. Request a free estimate online.",
  },

  {
    slug: "alameda-county-ca",
    name: "Alameda County",
    shortName: "Alameda",
    region: "Bay Area / East Bay",
    population: "1.7 million",
    households: "590,000",
    description:
      "Alameda County encompasses the East Bay's most densely populated cities — Oakland, Berkeley, Fremont, and Hayward — and contains a remarkable diversity of chimney systems, from original Victorian-era masonry in Oakland's Rockridge district to 1920s Craftsman bungalows in Berkeley's Elmwood neighborhood to post-war factory-built systems in the flatland communities of Fremont and Union City. The county carries the most significant wildfire history of any Bay Area county: the 1991 Oakland Hills firestorm destroyed 3,354 homes and killed 25 people in a fire that investigators traced in part to conditions that included uncapped chimneys emitting sparks.",
    climateProfile:
      "Alameda County's coastal strip experiences persistent marine fog from May through August — a microclimate that keeps metal chimney components in near-constant salt-air moisture exposure. The hillside communities of Oakland, Berkeley, and Piedmont are in the East Bay Hills fire hazard zone, where seasonal grassland conditions combined with Diablo wind events create conditions directly analogous to those that preceded the 1991 fire. The BAAQMD Spare the Air program applies county-wide, restricting wood burning on poor air quality days.",
    housingProfile:
      "Oakland's flatlands contain some of the densest concentrations of Victorian and Craftsman housing in California — many properties in the Temescal, Fruitvale, and Grand Lake neighborhoods have original chimneys that date to 1890–1920. The hillside communities add mid-century modern construction with its characteristic corner fireplaces and low-profile chimney designs. Fremont, Newark, and Union City are predominantly post-1960 single-family with factory-built or masonry systems in similar condition to San Jose's housing stock.",
    chimneyRisk: "Hillside wildfire risk + aging Victorian masonry",
    cities: [
      { name: "Oakland", slug: "oakland" },
      { name: "Fremont", slug: "fremont" },
      { name: "Hayward", slug: "hayward" },
      { name: "Berkeley", slug: "berkeley" },
      { name: "Richmond", slug: "richmond" },
      { name: "San Leandro", slug: "san-leandro" },
      { name: "Livermore", slug: "livermore" },
      { name: "Alameda", slug: "alameda" },
      { name: "Pleasanton", slug: "pleasanton" },
      { name: "Union City", slug: "union-city" },
      { name: "Castro Valley" },
    ],
    nearbyCounties: [
      { name: "Contra Costa County", slug: "contra-costa-county-ca" },
      { name: "Santa Clara County", slug: "santa-clara-county-ca" },
      { name: "San Mateo County", slug: "san-mateo-county-ca" },
    ],
    faqs: [
      {
        q: "Are Oakland Hills chimneys considered higher risk than flatland chimneys?",
        a: "Yes. The Oakland Hills and Berkeley Hills are in the East Bay Hills Fire Hazard Severity Zone, where the combination of dry grass, slope-driven winds, and dense residential construction creates conditions for rapid fire spread. Oakland Fire Department guidance specifically recommends annual chimney inspection and a properly installed spark-arrestor cap for all hillside properties in the high-risk zone.",
      },
      {
        q: "My Berkeley Craftsman bungalow has a decorative fireplace. Does it need inspection?",
        a: "Yes, especially if it's ever been used. Berkeley's pre-1930 bungalows often have ornate fireplace surrounds concealing original unlined masonry — there was no clay tile liner requirement before the 1940s. These fireboxes can look perfectly intact while allowing combustion gases to migrate through the surrounding brick. A Level 2 inspection determines whether the firebox can be safely operated.",
      },
      {
        q: "How do BAAQMD Spare the Air rules affect East Bay homeowners?",
        a: "Spare the Air Winter alerts prohibit wood burning in all nine Bay Area counties, including Alameda County, on designated days — typically November through February. Violations carry fines up to $500. Many East Bay homeowners have converted to gas inserts, which are exempt from most curtailment rules. Gas inserts still require annual inspection for carbon monoxide safety.",
      },
    ],
    metaTitle: "Chimney Services in Alameda County, CA | East Bay | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Alameda County. Oakland, Berkeley, Fremont, Hayward, and all East Bay communities. Request a free estimate online.",
  },

  {
    slug: "sacramento-county-ca",
    name: "Sacramento County",
    shortName: "Sacramento",
    region: "Central Valley / Sacramento Metro",
    population: "1.6 million",
    households: "560,000",
    description:
      "Sacramento County is home to California's state capital and the Central Valley's largest metro area, with a housing stock that spans Gold Rush-era Victorians in the historic Midtown grid to 1950s ranch homes in the residential neighborhoods of Elk Grove, Rancho Cordova, and Citrus Heights. Sacramento experiences California's most consistent winter fireplace-use climate: cold, foggy, and damp from November through February, with average lows regularly in the high 30s and persistent Tule fog that can reduce visibility to zero for days at a time. This cold, wet season is both when residents burn most heavily and when chimney damage from moisture infiltration progresses fastest.",
    climateProfile:
      "The county's Sacramento-San Joaquin River Delta position generates the Tule fog season — a uniquely Central Valley meteorological phenomenon where ground-level fog forms and persists for weeks, depositing moisture across every exposed surface. Masonry chimneys absorb this moisture through efflorescence cycles that gradually displace mortar joints. The SMAQMD (Sacramento Metropolitan Air Quality Management District) issues No-Burn advisories during winter inversions, restricting wood burning throughout the county.",
    housingProfile:
      "The urban core neighborhoods — Land Park, Curtis Park, East Sacramento, and Midtown — contain a high density of 1920s–1950s bungalows and Craftsman homes with original clay-tile-lined brick chimneys, many in continuous use for over 70 years. Suburban Sacramento (Elk Grove, Rancho Cordova, Folsom, Citrus Heights) is predominantly post-1975 single-family with factory-built or newer masonry systems.",
    chimneyRisk: "Tule fog moisture + heavy seasonal wood burning",
    cities: [
      { name: "Sacramento", slug: "sacramento" },
      { name: "Elk Grove", slug: "elk-grove" },
      { name: "Citrus Heights", slug: "citrus-heights" },
      { name: "Folsom", slug: "folsom" },
      { name: "Rancho Cordova" },
      { name: "Citrus Heights" },
      { name: "Folsom" },
      { name: "Arden Arcade" },
    ],
    nearbyCounties: [
      { name: "Placer County", slug: "placer-county-ca" },
      { name: "San Joaquin County", slug: "san-joaquin-county-ca" },
      { name: "Contra Costa County", slug: "contra-costa-county-ca" },
    ],
    faqs: [
      {
        q: "How does Sacramento's Tule fog season affect chimney maintenance?",
        a: "Tule fog is unique to California's Central Valley and creates weeks of near-saturated ground-level moisture that penetrates exposed masonry. Sacramento chimneys absorb this moisture through the mortar joints, and repeated wet-dry cycles gradually expand and crack the mortar. We see significantly higher rates of mortar joint failure in Sacramento County homes than in drier inland markets, and recommend inspecting mortar condition every two years.",
      },
      {
        q: "Does the Sacramento Metro Air Quality District restrict wood burning?",
        a: "Yes. The SMAQMD issues No-Burn days during winter air quality inversions, typically November through February. On No-Burn days, only EPA-certified wood inserts and pellet stoves are permitted; traditional open-hearth fireplaces must remain unused. Wood burning on No-Burn days carries a fine. We can advise on whether your appliance qualifies for exemption.",
      },
    ],
    metaTitle: "Chimney Services in Sacramento County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Sacramento County. Sacramento, Elk Grove, Folsom, and the full metro area. Request a free estimate online.",
  },

  {
    slug: "contra-costa-county-ca",
    name: "Contra Costa County",
    shortName: "Contra Costa",
    region: "Bay Area / East Bay",
    population: "1.2 million",
    households: "420,000",
    description:
      "Contra Costa County occupies the northeastern corner of the Bay Area, covering the affluent Lamorinda communities (Lafayette, Moraga, Orinda), the suburban expanse of Concord, Walnut Creek, and Pleasant Hill, and the industrial waterfront cities of Richmond and Hercules. The Lamorinda triangle and the hill communities of Danville, San Ramon, and Alamo contain a high density of 1950s–1970s custom and semi-custom homes with masonry fireplaces — many in pristine exterior condition but with clay liners that have never been camera-inspected. The Diablo wind corridor, which passes through the hills between Mount Diablo and the Carquinez Strait, creates significant fire spread risk during dry autumn conditions.",
    climateProfile:
      "Inland Contra Costa County experiences more extreme temperatures than the immediate Bay Area coast, with winter nights that regularly drop below freezing in the hills and summer highs that push past 100°F in Concord and Brentwood. This temperature range accelerates thermal cycling damage on masonry and metal components. The Diablo wind events that characterize East Bay autumns create the same dry, warm, high-velocity conditions that preceded the 1991 Oakland Hills fire — conditions that make spark-arrestor maintenance a genuine safety priority.",
    housingProfile:
      "The Lamorinda communities of Lafayette, Moraga, and Orinda are characterized by 1960s–1980s custom ranch and split-level homes, virtually all with masonry fireplaces and many with original clay liners now past their optimal service life. Walnut Creek, Concord, and Pleasant Hill offer a broader range of housing ages and types. The Richmond waterfront contains older housing stock similar to Oakland's flatlands.",
    chimneyRisk: "Diablo wind exposure + deferred hill-country inspection",
    cities: [
      { name: "Concord", slug: "concord" },
      { name: "Antioch", slug: "antioch" },
      { name: "San Ramon", slug: "san-ramon" },
      { name: "Walnut Creek" },
      { name: "Richmond" },
      { name: "San Ramon" },
      { name: "Danville" },
      { name: "Lafayette" },
      { name: "Orinda" },
    ],
    nearbyCounties: [
      { name: "Alameda County", slug: "alameda-county-ca" },
      { name: "Sacramento County", slug: "sacramento-county-ca" },
      { name: "Santa Clara County", slug: "santa-clara-county-ca" },
    ],
    faqs: [
      {
        q: "Are Lamorinda and Danville hill homes at higher wildfire risk from chimneys?",
        a: "Yes. The Lamorinda, Danville, and San Ramon communities sit in or adjacent to CAL FIRE-designated high fire hazard severity zones. Diablo wind events in autumn create the conditions for rapid fire spread. An uncapped chimney emitting sparks during red-flag conditions is a documented fire risk. We recommend spark-arrestor caps and annual cleaning for all hill-community properties in Contra Costa County.",
      },
      {
        q: "My Orinda home from 1968 has never had a chimney camera inspection. Is that a problem?",
        a: "Very likely yes. A 1960s clay tile liner in the Oakland-to-Orinda-to-Walnut Creek corridor has been through multiple significant seismic events, including the 1989 Loma Prieta earthquake. Cracks from seismic movement in clay tile are often invisible from the firebox opening but clearly visible on camera. We recommend a Level 2 inspection for any hill-area Contra Costa home that hasn't been camera-inspected in the last decade.",
      },
    ],
    metaTitle: "Chimney Services in Contra Costa County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and inspection in Contra Costa County. Concord, Walnut Creek, Danville, Orinda, and throughout the East Bay. Request a free estimate online.",
  },

  {
    slug: "san-mateo-county-ca",
    name: "San Mateo County",
    shortName: "San Mateo",
    region: "Bay Area / Peninsula",
    population: "770,000",
    households: "290,000",
    description:
      "San Mateo County occupies the San Francisco Peninsula, connecting San Francisco to the south and San Jose to the north. Its housing stock is heavily weighted toward mid-century modern and ranch construction from the postwar suburban expansion of the 1950s and 1960s — a period when masonry fireplaces were standard in tract home construction and typically installed without the professional oversight that custom builders employed. The peninsula's consistent marine fog exposure means that metal chimney components corrode at rates comparable to directly coastal communities, while the hillside neighborhoods from Pacifica to Half Moon Bay face ocean-direct wind exposure that accelerates crown and mortar joint deterioration.",
    climateProfile:
      "The San Mateo County coastside — Pacifica, Half Moon Bay, and the unincorporated coastal communities — experiences some of the most sustained marine wind exposure in the Bay Area. Inland communities like Foster City, Redwood City, and Menlo Park are sheltered from direct ocean wind but still receive daily fog flow that keeps humidity elevated throughout the summer months. BAAQMD Spare the Air restrictions apply county-wide on winter poor-air-quality days.",
    housingProfile:
      "Daly City, South San Francisco, and San Mateo contain some of the densest concentrations of postwar stucco-clad tract homes in the Bay Area — most featuring original masonry fireplaces built between 1950 and 1965. The affluent hillside communities of Hillsborough, Woodside, and Atherton have custom estate homes from the same era with more elaborate fireplace systems. Palo Alto and Menlo Park bridge the peninsula and Silicon Valley housing markets, with a mix of pre-war Craftsman, postwar ranch, and newer construction.",
    chimneyRisk: "Marine fog corrosion + postwar masonry aging",
    cities: [
      { name: "Daly City", slug: "daly-city" },
      { name: "San Mateo", slug: "san-mateo" },
      { name: "Redwood City", slug: "redwood-city" },
      { name: "South San Francisco" },
      { name: "Palo Alto" },
      { name: "Foster City" },
      { name: "Millbrae" },
      { name: "Burlingame" },
    ],
    nearbyCounties: [
      { name: "Santa Clara County", slug: "santa-clara-county-ca" },
      { name: "Alameda County", slug: "alameda-county-ca" },
    ],
    faqs: [
      {
        q: "How does the Peninsula's marine fog affect chimney maintenance intervals?",
        a: "The San Francisco Peninsula's daily fog cycle keeps metal chimney components in near-constant moisture exposure during the summer months — the season when homeowners typically don't think about their chimney. Stainless caps and dampers on Peninsula homes should be inspected annually, and chase covers on wood-frame chase enclosures should be checked for rust and seal failure every 2–3 years.",
      },
      {
        q: "My 1955 San Mateo ranch home has its original fireplace. What should I have inspected?",
        a: "A 70-year-old masonry fireplace in San Mateo should receive a Level 2 video camera inspection. We look for: clay tile liner cracks, mortar joint failure at the firebox, crown deterioration, and damper plate condition. These homes also frequently have the original asbestos-rope damper gasket, which should be noted (though not necessarily removed unless the damper is being serviced).",
      },
    ],
    metaTitle: "Chimney Services in San Mateo County, CA | Peninsula | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and inspection on the San Francisco Peninsula. San Mateo, Redwood City, Daly City, Palo Alto, and surrounding communities. Request a free estimate online.",
  },

  {
    slug: "ventura-county-ca",
    name: "Ventura County",
    shortName: "Ventura",
    region: "Southern California / Central Coast",
    population: "840,000",
    households: "285,000",
    description:
      "Ventura County lies between Los Angeles and Santa Barbara along California's southern coast, and its chimney maintenance landscape has been shaped significantly by two major wildfire events in the past decade. The 2017 Thomas Fire — the largest in California history at the time — burned 281,893 acres and destroyed more than 1,000 structures in the Ventura and Santa Paula areas. The 2018 Woolsey Fire burned through Thousand Oaks, Westlake Village, and into Malibu, destroying 1,643 structures. Many affected properties underwent chimney assessments as part of insurance claims, but adjacent unaffected homes often deferred the same inspection — creating a large backlog of homes in high-risk corridors that have no record of post-fire chimney assessment.",
    climateProfile:
      "The coastal communities of Ventura, Oxnard, and Port Hueneme experience the same marine air corrosion patterns as the Los Angeles coast. The inland Conejo Valley communities — Thousand Oaks, Westlake Village, Moorpark — face the Camarillo Gap and Malibu Creek corridor, which channels offshore Santa Ana winds at accelerated velocities during October–December wind events. The mountain communities of Oak View, Ojai, and Wheeler Springs experience genuine cold winters with sustained freezing temperatures.",
    housingProfile:
      "Post-fire reconstruction in the Thomas and Woolsey corridors has introduced thousands of newly installed fireplace systems — many in the 2–5 year range and approaching their first formal inspection. Older neighborhoods in Ventura city, Oxnard, and Camarillo contain 1950s–1970s construction with original masonry chimneys. Thousand Oaks, Simi Valley, and Moorpark feature 1970s–1990s suburban tract housing with factory-built systems.",
    chimneyRisk: "Post-wildfire rebuilds + Santa Ana corridor exposure",
    cities: [
      { name: "Oxnard", slug: "oxnard" },
      { name: "Thousand Oaks", slug: "thousand-oaks" },
      { name: "Simi Valley", slug: "simi-valley" },
      { name: "Ventura", slug: "ventura" },
      { name: "Camarillo" },
      { name: "Moorpark" },
      { name: "Ojai" },
    ],
    nearbyCounties: [
      { name: "Los Angeles County", slug: "los-angeles-county-ca" },
      { name: "Santa Barbara County", slug: "santa-barbara-county-ca" },
      { name: "Kern County", slug: "kern-county-ca" },
    ],
    faqs: [
      {
        q: "Should I have my chimney inspected if my home survived the Thomas or Woolsey Fire?",
        a: "Yes, strongly recommended. Even homes that didn't directly burn can sustain hidden chimney damage from the extreme radiant heat of nearby fire and from ember wash. We've found cracked flue liners, warped dampers, and damaged chimney caps on structures that appeared externally undamaged. Post-wildfire chimney inspection is a standard part of insurance documentation in fire-affected areas.",
      },
      {
        q: "My Thousand Oaks home is in the Woolsey Fire rebuild zone. When should the new chimney be first inspected?",
        a: "Newly built chimneys should receive a Level 1 inspection after the first full heating season — typically 12–18 months after first use. The refractory materials and mortar joints in a new chimney settle and micro-crack during initial thermal cycling. Catching these early prevents them from developing into larger issues. New construction inspection also establishes a documented baseline for future warranty and insurance purposes.",
      },
    ],
    metaTitle: "Chimney Services in Ventura County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and inspection in Ventura County. Serving Ventura, Oxnard, Thousand Oaks, Simi Valley, and post-wildfire rebuild areas. Request a free estimate online.",
  },

  {
    slug: "fresno-county-ca",
    name: "Fresno County",
    shortName: "Fresno",
    region: "Central Valley",
    population: "1.0 million",
    households: "340,000",
    description:
      "Fresno County sits at the geographic center of California's San Joaquin Valley and experiences some of the state's most extreme air quality and temperature conditions. Winter Tule fog blankets the county from December through February, and the SJVAPCD — the San Joaquin Valley Air Pollution Control District — issues among the most frequent wood-burning curtailment notices in the state, reflecting a persistent wintertime air quality problem. Despite this, wood-burning fireplace use is culturally significant in the Central Valley, and Fresno County homeowners use fireplaces heavily during the weeks between No-Burn days.",
    climateProfile:
      "Fresno County records some of the highest summer temperatures in California — 105°F+ days are common — and consistent below-40°F winter nights. This extreme thermal range cycles masonry and metal chimney components through 60+ degree temperature swings daily during shoulder seasons, accelerating mortar joint failure and metal fatigue at rates higher than coastal markets. The Tule fog season deposits persistent moisture on exposed masonry for weeks at a time, further compounding the mortar deterioration cycle.",
    housingProfile:
      "Fresno city's urban core contains a mix of 1920s–1950s Craftsman bungalows and Period Revival homes in neighborhoods like Tower District and Fig Garden, plus a large inventory of 1950s–1970s ranch homes across the flatlands. Clovis, Fresno's eastern suburb, features predominantly post-1980 construction with factory-built fireplace systems. Agricultural communities in the eastern foothills (Sanger, Reedley, Orange Cove) have older housing stock with original masonry systems and wood stoves.",
    chimneyRisk: "Extreme heat/cold cycling + SJVAPCD curtailment context",
    cities: [
      { name: "Fresno", slug: "fresno" },
      { name: "Clovis", slug: "clovis" },
      { name: "Sanger" },
      { name: "Reedley" },
      { name: "Selma" },
    ],
    nearbyCounties: [
      { name: "Kern County", slug: "kern-county-ca" },
      { name: "San Joaquin County", slug: "san-joaquin-county-ca" },
      { name: "Monterey County", slug: "monterey-county-ca" },
    ],
    faqs: [
      {
        q: "How often should I have my Fresno fireplace cleaned given SJVAPCD restrictions?",
        a: "We recommend annual cleaning regardless of how many days you actually burned, and semi-annual cleaning if your household burns more than one cord of wood per season. Even if you burn only on the SJVAPCD-permitted days, the dense air inversions of Fresno's winter season mean the smoke stays low and deposits more creosote per fire than in coastal areas with better ventilation.",
      },
      {
        q: "Does the SJVAPCD No-Burn program apply in Fresno County?",
        a: "Yes. The San Joaquin Valley Air Pollution Control District issues No-Burn advisories throughout the valley, including all of Fresno County, on days when particulate pollution reaches unhealthy levels — typically November through February. On No-Burn days, only EPA Phase 2-certified wood stoves and pellet stoves may be used; open-hearth fireplaces must not be operated.",
      },
    ],
    metaTitle: "Chimney Services in Fresno County, CA | Central Valley | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Fresno County. Fresno, Clovis, and Central Valley communities. Request a free estimate online.",
  },

  {
    slug: "kern-county-ca",
    name: "Kern County",
    shortName: "Kern",
    region: "Central Valley / Southern Foothills",
    population: "910,000",
    households: "300,000",
    description:
      "Kern County occupies the southern end of California's Central Valley and the transition zone between the valley floor and the Tehachapi and Sierra Nevada foothills. It is California's top oil-producing county, with a large blue-collar workforce employed in agriculture and the energy industry — and a housing culture that reflects the Central Valley's historic wood-burning traditions. Bakersfield, the county seat, has one of the highest per-capita fireplace-use rates in California, and the surrounding rural communities often depend on wood stoves as a supplemental or primary heat source. The SJVAPCD's strict curtailment rules apply throughout the county.",
    climateProfile:
      "Kern County's Tule fog season rivals Fresno's in density and duration. Bakersfield sits in a geographic bowl that traps cold air and fog during winter inversions. The foothills communities of Tehachapi, Frazier Park, and Lake of the Woods experience genuine mountain winters with snowfall and sustained freezing temperatures — creating the same heavy wood-burning demands and accelerated creosote-building conditions as the San Bernardino mountain communities. The desert communities around Mojave and California City see extreme heat and cold with minimal humidity.",
    housingProfile:
      "Bakersfield's older neighborhoods — Oleander, East Bakersfield, and the historic downtown — contain 1920s–1950s housing with original masonry chimneys comparable to other Central Valley urban cores. The suburban expansion of the 1970s–1990s produced factory-built fireplace systems across Northwest Bakersfield and Oildale. Tehachapi and Frazier Park have a significant proportion of rural homes with wood stoves and non-standard chimney configurations.",
    chimneyRisk: "Tule fog + heavy Central Valley burning season",
    cities: [
      { name: "Bakersfield", slug: "bakersfield" },
      { name: "Tehachapi" },
      { name: "Delano" },
      { name: "Ridgecrest" },
      { name: "McFarland" },
    ],
    nearbyCounties: [
      { name: "Los Angeles County", slug: "los-angeles-county-ca" },
      { name: "Ventura County", slug: "ventura-county-ca" },
      { name: "San Bernardino County", slug: "san-bernardino-county-ca" },
      { name: "Fresno County", slug: "fresno-county-ca" },
    ],
    faqs: [
      {
        q: "My Bakersfield home has had the same fireplace for 40 years. What should I check?",
        a: "A 40-year-old Bakersfield fireplace should receive a Level 2 camera inspection. After four decades of Tule fog winters and summer heat, clay tile liners in the Bakersfield valley commonly show mortar joint separation, hairline cracking, and spall at flue tile joints. The damper plate should be checked for warping from thermal cycling, and the crown should be inspected for frost-and-sun cycling cracks.",
      },
      {
        q: "Do SJVAPCD rules affect when I can use my Bakersfield fireplace?",
        a: "Yes. The San Joaquin Valley Air Pollution Control District's No-Burn program applies throughout Kern County, restricting wood burning on days when valley air quality drops below acceptable thresholds. In Bakersfield specifically, which sits in the valley bowl, these restrictions are among the most frequent in the state — sometimes covering 20 or more days per winter season.",
      },
    ],
    metaTitle: "Chimney Services in Kern County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Kern County. Bakersfield, Tehachapi, and surrounding communities. Free estimate. Request a free estimate online.",
  },

  {
    slug: "san-joaquin-county-ca",
    name: "San Joaquin County",
    shortName: "San Joaquin",
    region: "Central Valley",
    population: "790,000",
    households: "265,000",
    description:
      "San Joaquin County straddles the northern end of California's San Joaquin Valley and the southern Sacramento-San Joaquin Delta, where the convergence of major waterways creates a moisture-rich microclimate that is unusually challenging for exposed masonry. Stockton, the county seat, sits at the edge of the Delta and experiences persistent winter fog that is in some ways denser and wetter than the Tule fog encountered further south. This moisture environment, combined with significant temperature swings between summer heat and winter cold, creates some of the most aggressive mortar joint deterioration conditions we encounter anywhere in the Central Valley.",
    climateProfile:
      "The Delta moisture environment means that San Joaquin County homes experience a longer period of sustained chimney moisture exposure than drier valley communities. Delta breezes carry salt and mineral content that additionally stresses masonry. The SJVAPCD's curtailment program applies throughout the county on poor air quality days. Summer heat regularly exceeds 100°F, and winter inversions can push temperatures below freezing for extended periods.",
    housingProfile:
      "Stockton's Miracle Mile and Lincoln Village neighborhoods feature 1950s–1970s ranch homes and custom properties, most with original masonry fireplaces. Tracy and Lodi contain a mix of agricultural-era homes and newer suburban construction. The historic central Stockton area has some of the oldest residential housing stock in the county, dating to the 1890s–1920s.",
    chimneyRisk: "Delta moisture + SJVAPCD restrictions",
    cities: [
      { name: "Stockton", slug: "stockton" },
      { name: "Tracy", slug: "tracy" },
      { name: "Manteca", slug: "manteca" },
      { name: "Lodi" },
      { name: "Ripon" },
    ],
    nearbyCounties: [
      { name: "Sacramento County", slug: "sacramento-county-ca" },
      { name: "Alameda County", slug: "alameda-county-ca" },
      { name: "Fresno County", slug: "fresno-county-ca" },
    ],
    faqs: [
      {
        q: "Why does my Stockton chimney seem to deteriorate faster than homes I've seen in drier cities?",
        a: "Stockton's Delta position creates a wetter microclimate than most Central Valley cities. The persistent moisture from Delta breezes and winter fog accelerates mortar joint deterioration significantly. Stockton properties in the Miracle Mile and downtown historic districts typically show 30–40% more mortar joint deterioration per decade than comparable homes in drier Fresno or Bakersfield.",
      },
      {
        q: "Stockton recently required chimney inspections for real estate transactions. What does that include?",
        a: "Stockton's residential transaction inspection requirement calls for an NFPA 211 Level 2 chimney inspection — which includes a video camera scan of the full flue, a written report, and an inspection of all accessible parts of the chimney system. The inspection must be performed by a trained chimney professional to be accepted by the city.",
      },
    ],
    metaTitle: "Chimney Services in San Joaquin County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in San Joaquin County. Stockton, Tracy, Manteca, Lodi, and the Delta region. Request a free estimate online.",
  },

  {
    slug: "sonoma-county-ca",
    name: "Sonoma County",
    shortName: "Sonoma",
    region: "Wine Country / North Bay",
    population: "490,000",
    households: "195,000",
    description:
      "Sonoma County is California's wine country center and the North Bay's largest county by population, and its chimney maintenance landscape was fundamentally reshaped by the October 2017 Tubbs Fire — the most destructive wildfire in California history at the time. The Tubbs Fire destroyed more than 5,600 structures in Santa Rosa's Coffey Park and Fountaingrove neighborhoods and burned through communities from Calistoga to the urban edge of Santa Rosa. The rebuilding process that followed created the largest concentration of newly installed residential fireplace systems in Northern California — most of which are now entering the 5–8 year range and due for their first formal professional inspection.",
    climateProfile:
      "Sonoma County has a genuine four-season climate with cold, rainy winters and warm, dry summers. October and November bring the Diablo wind season — offshore hot, dry winds that create red-flag fire conditions across the county. These wind events contributed to the rapid spread of the Tubbs and Kincade fires. BAAQMD Spare the Air restrictions apply county-wide on winter poor-air-quality days.",
    housingProfile:
      "The post-Tubbs rebuild in Coffey Park and Fountaingrove introduced several thousand modern factory-built and direct-vent gas fireplace systems built to 2018+ building codes. Surviving pre-fire homes in Railroad Square, Proctor Terrace, and the historic Roseland neighborhoods contain 1920s–1960s masonry chimneys that need regular maintenance. Petaluma, Windsor, and Healdsburg feature mixed housing stocks from the postwar era forward.",
    chimneyRisk: "Post-wildfire rebuild systems + Diablo wind exposure",
    cities: [
      { name: "Santa Rosa", slug: "santa-rosa" },
      { name: "Petaluma" },
      { name: "Windsor" },
      { name: "Healdsburg" },
      { name: "Rohnert Park" },
      { name: "Cloverdale" },
    ],
    nearbyCounties: [
      { name: "Alameda County", slug: "alameda-county-ca" },
      { name: "Contra Costa County", slug: "contra-costa-county-ca" },
    ],
    faqs: [
      {
        q: "When should a Tubbs Fire rebuild home have its first chimney inspection?",
        a: "We recommend a first formal Level 1 inspection at 3–5 years of use, before the first inspection period mandated by most fireplace manufacturers at year 5. Refractory panel joints and direct-vent seals can develop micro-cracks during the initial thermal cycling years that, if caught early, are inexpensive to address. Left unaddressed, they accelerate into costlier repairs.",
      },
      {
        q: "My Santa Rosa home survived the Tubbs Fire but is in the adjacent neighborhood. Should I be concerned?",
        a: "Yes. Structures adjacent to a major wildfire perimeter are exposed to extreme radiant heat that can warp metal chimney components and crack flue liner tiles without any direct flame contact. We have found cracked liners and heat-damaged dampers on homes a full city block outside fire perimeters. An inspection is warranted for any Sonoma County home within a mile of a major fire perimeter.",
      },
    ],
    metaTitle: "Chimney Services in Sonoma County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Sonoma County. Santa Rosa, Petaluma, Healdsburg, and wine country communities. Request a free estimate online.",
  },

  {
    slug: "santa-barbara-county-ca",
    name: "Santa Barbara County",
    shortName: "Santa Barbara",
    region: "Central Coast",
    population: "445,000",
    households: "160,000",
    description:
      "Santa Barbara County is defined architecturally by its Spanish Colonial Revival heritage and physically by the Transverse Mountain Ranges that separate the coastal strip from the Santa Ynez Valley. The city of Santa Barbara enforces strict architectural review guidelines that require chimney repair work in historic districts to use materials and methods consistent with the original construction — which typically means lime-based mortars, stucco-compatible repair compounds, and decorative cap styles that match period architecture. The 2017 Thomas Fire — which burned 281,893 acres — significantly affected the county's mountain communities, and the subsequent Montecito debris flow destroyed 135 additional structures in January 2018.",
    climateProfile:
      "The coastal strip from Santa Barbara to Goleta experiences mild temperatures year-round, with marine fog that keeps humidity elevated. The Santa Ynez Valley experiences greater temperature extremes, with cold winters that support genuine fireplace-use seasons in communities like Solvang, Buellton, and Los Olivos. The December 2017 Thomas Fire burned through the hills directly above Montecito and Carpinteria, creating post-fire soil conditions that contributed to the January 2018 debris flow.",
    housingProfile:
      "Santa Barbara city's Riviera, Mesa, and historic downtown neighborhoods feature Spanish Colonial, Mission Revival, and California Bungalow housing from the 1920s–1940s with original masonry chimneys. Montecito and Hope Ranch contain high-value estate properties with elaborate custom fireplace installations. Santa Maria and Lompoc have larger proportions of postwar and modern construction.",
    chimneyRisk: "Historic preservation requirements + post-Thomas Fire context",
    cities: [
      { name: "Santa Barbara", slug: "santa-barbara" },
      { name: "Santa Maria", slug: "santa-maria" },
      { name: "Lompoc" },
      { name: "Goleta" },
      { name: "Carpinteria" },
      { name: "Solvang" },
    ],
    nearbyCounties: [
      { name: "Ventura County", slug: "ventura-county-ca" },
      { name: "Kern County", slug: "kern-county-ca" },
    ],
    faqs: [
      {
        q: "Does Santa Barbara's Architectural Board of Review have specific requirements for chimney repairs?",
        a: "Yes. Properties in Santa Barbara's architectural review districts require that chimney repairs use materials compatible with the original construction. This typically means lime-based mortars for pre-1940 masonry, stucco-finished chimney exteriors matched to existing texture and color, and cap styles that conform to the period aesthetic. We carry the appropriate materials and are familiar with the Board's published standards.",
      },
      {
        q: "Was chimney damage common in the 2017 Thomas Fire area of Santa Barbara County?",
        a: "Yes. The Thomas Fire burned through the foothills directly above Santa Barbara and Montecito, and structure assessments in the adjacent communities found a higher-than-normal rate of hidden chimney damage from radiant heat exposure — cracked flue tiles, heat-warped dampers, and deteriorated cap gaskets. Any Santa Barbara County home in or adjacent to the Thomas Fire perimeter should have received a post-fire inspection.",
      },
    ],
    metaTitle: "Chimney Services in Santa Barbara County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, repair, and inspection in Santa Barbara County. Historic and Spanish Colonial specialists. Santa Barbara, Montecito, Santa Maria, and more. Request a free estimate online.",
  },

  {
    slug: "monterey-county-ca",
    name: "Monterey County",
    shortName: "Monterey",
    region: "Central Coast",
    population: "435,000",
    households: "145,000",
    description:
      "Monterey County stretches along 99 miles of the central California coast, encompassing the Salinas Valley agricultural interior, the Big Sur coastline, and the culturally distinct communities of Monterey, Pacific Grove, and Carmel-by-the-Sea. The Monterey Peninsula's Victorian and Craftsman housing stock — much of it from the 1890s through 1930s — represents some of the oldest operating residential chimneys in California, and the persistent marine fog creates a maintenance environment that is demanding on both masonry and metal. Carmel's strict architectural design guidelines apply to exterior chimney appearance, and many Carmel homeowners are surprised to find that cap replacements or exterior masonry work require design review.",
    climateProfile:
      "The Monterey Peninsula experiences some of the most persistent marine fog in California — Point Pinos lighthouse is one of the foggiest spots on the US Pacific coast. This chronic moisture exposure accelerates moss growth on masonry, oxidation of metal components, and mortar joint erosion. The Salinas Valley interior experiences greater temperature extremes, with cold winter nights and warm summer days that accelerate thermal cycling in masonry. Big Sur's coastal slopes face direct ocean wind exposure that is among the most erosive in the state.",
    housingProfile:
      "The Monterey Peninsula's residential housing ranges from the Victorian-era cannery worker cottages of Pacific Grove to the post-WWII ranch homes of Seaside and Marina to the high-value estates of Pebble Beach and Carmel Valley. Many Peninsula Victorian homes have original unlined masonry fireboxes — built before clay tile liner requirements — that need careful assessment before any operational use. Salinas, the county seat, has a broad mix of agricultural-era worker housing and postwar construction.",
    chimneyRisk: "Chronic marine fog corrosion + historic unlined masonry",
    cities: [
      { name: "Salinas", slug: "salinas" },
      { name: "Monterey" },

      { name: "Carmel-by-the-Sea" },
      { name: "Pacific Grove" },
      { name: "Seaside" },
      { name: "Marina" },
      { name: "King City" },
    ],
    nearbyCounties: [
      { name: "Santa Clara County", slug: "santa-clara-county-ca" },
      { name: "Fresno County", slug: "fresno-county-ca" },
      { name: "Santa Barbara County", slug: "santa-barbara-county-ca" },
    ],
    faqs: [
      {
        q: "My Carmel home has architectural restrictions. Can you still replace my chimney cap?",
        a: "Yes. Carmel-by-the-Sea's design guidelines address the exterior appearance of chimney caps and any visible masonry repair. We carry period-appropriate cap styles and can provide material samples for design review if needed. We've worked with Carmel homeowners on historic restoration projects and are familiar with the city's design review expectations.",
      },
      {
        q: "How does Pacific Grove's marine fog affect my chimney maintenance schedule?",
        a: "Pacific Grove and the Monterey Peninsula experience some of the most sustained marine fog in California — often 200+ days per year. This continuous moisture exposure means masonry absorbs water year-round rather than just during rain events. We recommend annual inspection for all Peninsula properties and biennial mortar joint assessment for homes within a quarter-mile of the shore.",
      },
    ],
    metaTitle: "Chimney Services in Monterey County, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and inspection in Monterey County. Monterey, Carmel, Pacific Grove, Salinas, and the Central Coast. Request a free estimate online.",
  },

  {
    slug: "placer-county-ca",
    name: "Placer County",
    shortName: "Placer",
    region: "Sierra Foothills / Sacramento Metro",
    population: "430,000",
    households: "165,000",
    description:
      "Placer County spans an extraordinary elevation range — from the Sacramento Valley floor communities of Roseville and Rocklin at 250 feet to the Lake Tahoe basin at 6,225 feet — and the chimney maintenance needs at the two ends of that range are dramatically different. Western Placer's fast-growing suburban cities (Roseville, Rocklin, Lincoln) are predominantly post-1990 construction with factory-built fireplace systems seeing steady use in genuine cold winters. Eastern Placer's foothill and mountain communities — Auburn, Colfax, Foresthill, Tahoe City — have a mix of older ranches and vacation cabins where wood burning provides both ambiance and primary heat through a 5–6 month heating season.",
    climateProfile:
      "Eastern Placer County receives 40–60+ inches of annual precipitation, most of it as snowfall at higher elevations. The freeze-thaw cycle at Auburn (1,300 ft) and Colfax (2,400 ft) is among the most damaging to mortar joints of any California market — water penetrating masonry through the crown or cap freezes at night and expands, widening cracks with each cycle. Tahoe City and the lake basin face true alpine winter conditions. Western Placer, while technically Sacramento Valley, experiences cold foggy winters similar to Sacramento County.",
    housingProfile:
      "The foothill communities — Auburn, Lincoln, Loomis — have a significant proportion of older ranch and farmhouse properties with original masonry chimneys dating to the 1920s–1960s. Roseville and Rocklin's suburban expansion is predominantly post-1990 tract housing with factory-built systems. The mountain communities of Tahoe City, Kings Beach, and Foresthill have a large proportion of vacation rental properties where chimneys are used heavily in short intense periods and may go uninspected for years between rentals.",
    chimneyRisk: "Mountain freeze-thaw masonry damage + vacation rental use",
    cities: [
      { name: "Roseville", slug: "roseville" },
      { name: "Rocklin" },
      { name: "Auburn" },
      { name: "Lincoln" },
      { name: "Loomis" },
      { name: "Colfax" },
      { name: "Tahoe City" },
    ],
    nearbyCounties: [
      { name: "Sacramento County", slug: "sacramento-county-ca" },
    ],
    faqs: [
      {
        q: "How does the freeze-thaw cycle affect chimneys in Auburn and Colfax?",
        a: "Foothill communities like Auburn, Colfax, and Grass Valley experience enough freeze-thaw cycles each winter to meaningfully accelerate mortar joint deterioration. Water that enters the crown or through any gap in the cap freezes at night and expands, progressively widening micro-cracks in the mortar. We recommend annual crown inspection and a crown coat sealer application every 3–5 years for all foothill properties above 1,000 feet elevation.",
      },
      {
        q: "My Tahoe City vacation rental uses the fireplace heavily through ski season. What inspection does it need?",
        a: "Heavy seasonal use in a vacation rental context means the chimney accumulates significant creosote deposits in a compressed time frame — and may go uninspected between seasons. Vacation rental properties should be cleaned and inspected before each major use season. The California Department of Housing also recommends annual inspection documentation for any rental property with a working fireplace.",
      },
    ],
    metaTitle: "Chimney Services in Placer County, CA | Sierra Foothills | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and inspection in Placer County. Roseville, Auburn, Tahoe City, and Sierra foothills communities. Request a free estimate online.",
  },
];

export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}

export function isCountySlug(slug: string): boolean {
  return slug.endsWith("-county-ca");
}

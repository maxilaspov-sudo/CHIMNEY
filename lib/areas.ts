export interface CityFAQ {
  q: string;
  a: string;
}

export interface Area {
  slug: string;
  name: string;
  county: string;
  countySlug?: string; // links to /areas/[countySlug]/ when a county page exists
  region: string;
  population: string;
  description: string;
  chimneyContext: string;
  neighborhoods: string[];
  nearbyAreas: string[]; // display names; used for context
  nearbySlugs?: string[]; // actual page slugs for linking in the template
  uniqueFact: string;
  faqs?: CityFAQ[]; // 2–3 city-specific FAQs
  metaTitle: string;
  metaDescription: string;
}

export const areas: Area[] = [
  {
    slug: "california",
    name: "California",
    county: "Statewide",
    region: "California",
    population: "39 million",
    description:
      "California's diverse climate — from the foggy Bay Area coast to the dry Central Valley and the mountain communities of the Sierra Nevada — creates a wide range of fireplace and chimney maintenance needs. Coastal properties deal with salt-air corrosion of metal components. Inland valley homes experience significant temperature swings that accelerate mortar joint deterioration. Mountain communities above 3,000 feet burn wood heavily through a five-month heating season. We service residential and commercial properties throughout the state.",
    chimneyContext:
      "California homes built before 1970 typically have unlined clay tile flues in need of inspection. Post-1990 factory-built fireplaces have proprietary liner systems that require manufacturer-authorized service. The 2021 CalFire season highlighted the risk of spark emission from uncapped chimneys in fire-prone areas — a chimney cap with a 5/8\" spark arrestor screen is not optional in high-risk zones.",
    neighborhoods: ["Central Valley", "Bay Area", "Southern California", "Mountain Communities", "Coastal California"],
    nearbyAreas: ["Los Angeles", "San Francisco", "San Diego", "Sacramento"],
    uniqueFact:
      "California has more than 1.2 million wood-burning fireplaces, making it the second-largest fireplace market in the United States.",
    metaTitle: "Chimney Services in California | Statewide Coverage | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, repair, and inspection across California. Serving Los Angeles, San Diego, San Francisco, Sacramento, and all major cities. Request a free estimate online.",
  },
  {
    slug: "los-angeles",
    name: "Los Angeles",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California",
    population: "3.9 million",
    description:
      "Los Angeles sits in a Mediterranean climate with mild, wet winters and long dry summers. Despite average winter lows around 48°F, the city has an estimated 400,000 wood-burning and gas fireplaces — many in older Craftsman bungalows, Mid-Century ranches, and Spanish Colonial homes built before 1960. The 2019 SCAQMD Wood-Burning Curtailment Program means most Angelinos can only burn on designated curtailment-exempt days, which has shifted the market toward gas log inserts. We service both systems throughout the LA metro.",
    chimneyContext:
      "Earthquake activity is the primary structural concern for LA chimneys. The Northridge earthquake (1994) cracked thousands of flue liners across the region — many were patched cosmetically and never received a proper liner inspection. Homes near the coast in areas like Pacific Palisades and Malibu also experience accelerated metal corrosion from marine air.",
    neighborhoods: ["Hollywood", "Silver Lake", "Koreatown", "Westside", "San Fernando Valley", "South Bay", "East LA"],
    nearbyAreas: ["Pasadena", "Glendale", "Long Beach", "Santa Monica"],
    uniqueFact:
      "Los Angeles County has the largest concentration of pre-1960 brick chimneys in the western United States — most have never had a professional video-camera inspection.",
    metaTitle: "Chimney Services in Los Angeles, CA | Chimney Peak California",
    metaDescription:
      "Professional chimney cleaning, sweep, and repair in Los Angeles. CSIA-certified technicians. Same-week appointments available. Request a free estimate online.",
  },
  {
    slug: "san-diego",
    name: "San Diego",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California",
    population: "1.4 million",
    description:
      "San Diego enjoys arguably the most stable climate in California, with average winter temperatures rarely falling below 50°F. This mild weather leads many homeowners to underestimate chimney maintenance — they use the fireplace occasionally and assume nothing is wrong. But even occasional use deposits creosote, and marine air from the Pacific accelerates deterioration of metal components. San Diego's wildfire risk in eastern hillside communities also makes capped, inspected chimneys a code consideration.",
    chimneyContext:
      "Eastern San Diego communities — El Cajon, Santee, Ramona, and Julian — sit in fire-risk zones where the San Diego Fire Department recommends annual chimney inspection. Coastal properties in La Jolla, Del Mar, and Coronado deal with stainless cap corrosion at a higher rate than inland homes.",
    neighborhoods: ["La Jolla", "Mission Valley", "North Park", "Hillcrest", "Chula Vista", "El Cajon", "Escondido"],
    nearbyAreas: ["Riverside", "Long Beach", "Anaheim"],
    uniqueFact:
      "San Diego County's dry brush topography means a chimney fire or uncapped ember escape is statistically more dangerous here than anywhere else in Southern California.",
    metaTitle: "Chimney Services in San Diego, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in San Diego. Serving La Jolla, Chula Vista, Escondido, and surrounding areas. Request a free estimate online.",
  },
  {
    slug: "san-jose",
    name: "San Jose",
    county: "Santa Clara County",
    countySlug: "santa-clara-county-ca",
    region: "Bay Area",
    population: "1.0 million",
    description:
      "San Jose sits in the South Bay, where winter evenings regularly drop into the high 30s and residents with fireplaces use them consistently from November through March. The city's housing stock is heavily weighted toward tract homes built from 1950 to 1985 — most of which have original clay-tile-lined brick chimneys that have never received a camera inspection. The BAAQMD (Bay Area Air Quality Management District) issues Spare the Air alerts that restrict wood burning on high-pollution days, which has pushed many South Bay homeowners toward gas inserts.",
    chimneyContext:
      "Santa Clara County experiences Loma Prieta-level seismic activity periodically. The 1989 Loma Prieta earthquake caused widespread chimney damage throughout San Jose — cracks that may still be unrepaired in homes that changed hands multiple times since. We recommend a Level 2 inspection for any San Jose home built before 1990 that hasn't had a recent camera scan.",
    neighborhoods: ["Willow Glen", "Almaden Valley", "Evergreen", "Berryessa", "Alum Rock", "Rose Garden"],
    nearbyAreas: ["Oakland", "San Francisco", "Santa Rosa", "Fremont"],
    uniqueFact:
      "Approximately 60% of San Jose homes with fireplaces have never had a professional flue camera inspection — a figure consistent with industry surveys of Bay Area markets.",
    metaTitle: "Chimney Services in San Jose, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, sweep, and repair in San Jose. South Bay's CSIA-certified chimney company. Same-week scheduling. Request a free estimate online.",
  },
  {
    slug: "san-francisco",
    name: "San Francisco",
    county: "San Francisco County",
    region: "Bay Area",
    population: "874,000",
    description:
      "San Francisco's dense Victorian and Edwardian housing stock — built largely between 1880 and 1915 — contains some of the oldest operating fireplaces in California. Many of these ornate cast-iron and carved-wood mantels conceal deteriorated clay flues or, in some cases, original unlined masonry fireplace openings. The foggy, damp microclimate accelerates moss growth on masonry and rust on metal components. BAAQMD Spare the Air rules restrict wood burning city-wide on high-pollution days.",
    chimneyContext:
      "San Francisco's earthquake history — 1906 and 1989 — means structural chimney damage is common in pre-war buildings. Many SF chimneys were retrofitted with stainless liners after 1989, but those liners are now approaching the end of their 25-year service window. Any SF homeowner who hasn't had a liner inspection in the last 5 years should schedule one.",
    neighborhoods: ["Pacific Heights", "Noe Valley", "Mission District", "Richmond District", "Sunset", "Hayes Valley"],
    nearbyAreas: ["Oakland", "San Jose", "Berkeley", "Marin County"],
    uniqueFact:
      "San Francisco has more than 30,000 ornamental Victorian fireplaces — most of which were sealed or converted to gas during the 1950s energy boom and are now being restored by homeowners.",
    metaTitle: "Chimney Services in San Francisco, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and inspection in San Francisco. Victorian and Edwardian fireplace specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "sacramento",
    name: "Sacramento",
    county: "Sacramento County",
    countySlug: "sacramento-county-ca",
    region: "Central Valley",
    population: "524,000",
    description:
      "Sacramento experiences genuine four-season weather — cold, foggy winters with temperatures regularly in the 30s and hot, dry summers exceeding 100°F. Residents with wood-burning fireplaces use them heavily from November through February. The city's historic neighborhoods — Land Park, Curtis Park, Midtown — contain a high density of 1920s–1950s brick homes with original clay flue liners. Sacramento also sits in the SMAQMD air district, which issues No-Burn days during winter air quality events.",
    chimneyContext:
      "Sacramento's Central Valley location means cold inversions that trap smoke close to the ground — making a properly drafting, clean chimney more important here than in coastal cities. The summer heat (100°F+ days) also cycles metal flue components through extreme thermal ranges, accelerating fatigue and cracking.",
    neighborhoods: ["Land Park", "Curtis Park", "Midtown", "East Sacramento", "Natomas", "Elk Grove"],
    nearbyAreas: ["Stockton", "Modesto", "Fresno", "San Jose"],
    uniqueFact:
      "Sacramento has the highest proportion of wood-burning fireplace use per capita of any major California city — residents burn an average of 1.8 cords per household per winter season.",
    metaTitle: "Chimney Services in Sacramento, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Sacramento. Land Park, Curtis Park, Midtown, and beyond. Request a free estimate online.",
  },
  {
    slug: "fresno",
    name: "Fresno",
    county: "Fresno County",
    countySlug: "fresno-county-ca",
    region: "Central Valley",
    population: "542,000",
    description:
      "Fresno sits in the heart of the San Joaquin Valley, where cold winter nights routinely drop below freezing and summer temperatures can exceed 105°F. This extreme temperature range puts more thermal stress on chimney components than any other California climate zone. Fresno also has some of the poorest air quality in the state, which has led the San Joaquin Valley Air Pollution Control District to restrict wood burning on many winter days. Gas fireplace inserts are increasingly common in new Fresno construction.",
    chimneyContext:
      "Fresno's Tule fog season (December–February) produces the densest ground fog in the US, with visibility sometimes below 10 feet for days at a time. This persistent moisture accelerates deterioration of exposed masonry and mortar joints. Fresno chimneys on homes built before 1985 should be inspected every two years at minimum.",
    neighborhoods: ["Tower District", "Woodward Park", "Sunnyside", "Clovis", "Bullard", "Fig Garden"],
    nearbyAreas: ["Modesto", "Stockton", "Bakersfield", "Sacramento"],
    uniqueFact:
      "Fresno County records more SJVAPCD wood-burning violations per capita than any other valley county — meaning more residents are burning without proper inspections or on restricted days.",
    metaTitle: "Chimney Services in Fresno, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, sweep, and repair in Fresno. Central Valley specialists. CSIA-certified technicians. Request a free estimate online.",
  },
  {
    slug: "oakland",
    name: "Oakland",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area",
    population: "440,000",
    description:
      "Oakland's housing stock spans late-Victorian bungalows in Rockridge and Temescal to mid-century flats in the flatlands. The city's hillside neighborhoods — Montclair, Redwood Heights, Joaquin Miller — contain a high concentration of pre-1950 wood-frame homes with original brick chimneys and clay flue liners. Oakland sits in the BAAQMD district, subject to Spare the Air wood-burning restrictions. The 1991 Oakland Hills firestorm highlighted the danger of uncapped chimneys in fire-prone hillside neighborhoods.",
    chimneyContext:
      "Oakland Hills homes are in the highest wildfire risk zone in Alameda County. The Oakland Fire Department specifically recommends an annual chimney inspection and a properly installed spark arrestor cap for all hillside properties. Several 1991 fire origin investigations pointed to chimney spark emission as a contributing factor.",
    neighborhoods: ["Rockridge", "Temescal", "Montclair", "Fruitvale", "Jack London Square", "Lake Merritt"],
    nearbyAreas: ["San Francisco", "Berkeley", "San Jose", "Fremont"],
    uniqueFact:
      "The Oakland Hills firestorm of 1991 destroyed 3,354 homes — fire investigators identified uncapped chimneys emitting sparks as a contributing ignition factor in multiple structure fires.",
    metaTitle: "Chimney Services in Oakland, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Oakland. BAAQMD-compliant service for hillside and flatland homes. Request a free estimate online.",
  },
  {
    slug: "long-beach",
    name: "Long Beach",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California",
    population: "466,000",
    description:
      "Long Beach occupies a stretch of the LA metro coastline where marine air is a constant presence. The city's mix of Craftsman bungalows, post-war tract homes, and condos along the waterfront creates a diverse range of chimney systems. While mild coastal temperatures mean residents don't burn wood as frequently as inland communities, salt air is relentless on metal chimney components — chase covers, caps, and damper assemblies corrode faster here than anywhere else in Southern California.",
    chimneyContext:
      "Long Beach properties within three miles of the port or beach see stainless steel chimney caps last 8–12 years rather than the typical 20+ years inland. We recommend a marine-grade 316L stainless cap for all Long Beach coastal properties instead of standard 304 alloy.",
    neighborhoods: ["Belmont Shore", "Naples", "Signal Hill", "Bixby Knolls", "North Long Beach", "Downtown"],
    nearbyAreas: ["Los Angeles", "Anaheim", "Torrance", "Compton"],
    uniqueFact:
      "Long Beach has one of the highest concentrations of California Craftsman bungalows per square mile — a housing type known for ornamental brick fireplaces that require specialized cleaning to avoid surface damage.",
    metaTitle: "Chimney Services in Long Beach, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, repair, and inspection in Long Beach. Marine-grade caps for coastal homes. Request a free estimate online.",
  },
  {
    slug: "anaheim",
    name: "Anaheim",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "346,000",
    description:
      "Anaheim and the broader Orange County market have one of the highest concentrations of factory-built (zero-clearance) fireplaces in California, largely because of the single-family housing boom from 1970 to 1995. These proprietary metal fireplace systems require different maintenance than masonry chimneys — the liner is a metal or refractory panel system, and the specific servicing protocol depends on the manufacturer. We hold authorizations for the most common systems installed in this market.",
    chimneyContext:
      "Orange County's SCAQMD district has strict wood-burning curtailment rules, so many Anaheim homeowners have converted their factory-built fireplaces to gas log inserts. Gas inserts still require annual inspection — the burner assembly and ignition system need to be checked, and the liner must be clear of spider webs and debris.",
    neighborhoods: ["Anaheim Hills", "Platinum Triangle", "Colony Historic District", "Brookhurst", "West Anaheim"],
    nearbyAreas: ["Long Beach", "Los Angeles", "Riverside", "Irvine"],
    uniqueFact:
      "More factory-built fireplaces were installed in Orange County from 1975 to 1995 than in any other California county — many are now reaching the end of their 30-year design life.",
    metaTitle: "Chimney Services in Anaheim, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and factory-built fireplace service in Anaheim. Orange County specialists. Request a free estimate online.",
  },
  {
    slug: "irvine",
    name: "Irvine",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "308,000",
    description:
      "Irvine is a master-planned community with a housing stock that skews newer than most California cities — a significant portion of its homes were built after 1990. This means factory-built fireplace systems are extremely common here, and older brick chimneys are comparatively rare. Irvine HOA communities also have specific requirements around chimney maintenance and appearance that homeowners must comply with. We're familiar with the major Irvine HOA guidelines and ensure our work meets those standards.",
    chimneyContext:
      "Newer Irvine homes with gas fireplaces often have direct-vent systems that vent through the exterior wall rather than a traditional chimney. These systems still require annual inspection of the vent termination, seals, and burner assembly. We service direct-vent gas fireplaces in addition to traditional chimney systems.",
    neighborhoods: ["Turtle Ridge", "Shady Canyon", "Woodbury", "Northwood", "University Park", "Westpark"],
    nearbyAreas: ["Anaheim", "Santa Ana", "Newport Beach", "Laguna Beach"],
    uniqueFact:
      "Irvine has the highest median home value of any California city above 100,000 population — which correlates with a large number of premium fireplace installations requiring specialized maintenance.",
    metaTitle: "Chimney Services in Irvine, CA | Chimney Peak California",
    metaDescription:
      "Chimney and fireplace service in Irvine. Factory-built systems, gas inserts, and direct-vent inspections. Request a free estimate online.",
  },
  {
    slug: "riverside",
    name: "Riverside",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire",
    population: "314,000",
    description:
      "Riverside and the Inland Empire experience some of the largest temperature swings in Southern California — summer highs above 100°F and winter nights in the low 30s. This thermal cycling is hard on masonry mortar joints, chimney crowns, and metal components. Riverside's older neighborhoods — Wood Streets, Historic Mission Inn area, Hawarden Hills — contain many original 1920s–1950s brick fireplaces in need of inspection and service. SCAQMD wood-burning curtailment applies here as well.",
    chimneyContext:
      "The Santa Ana wind events that affect Riverside annually create high-velocity hot winds that can draft unusual amounts of air through chimneys — this accelerates creosote drying and increases the risk of chimney fires in neglected flues. We recommend annual cleaning for any Riverside property that burns wood, even occasionally.",
    neighborhoods: ["Wood Streets", "University", "Arlington", "La Sierra", "Canyon Crest", "Victoria"],
    nearbyAreas: ["San Diego", "Anaheim", "San Bernardino", "Los Angeles"],
    uniqueFact:
      "Riverside County records more uncapped chimney violations per fire inspection than any other Inland Empire county, reflecting the large proportion of older homes with no spark arrestor.",
    metaTitle: "Chimney Services in Riverside, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, repair, and inspection in Riverside. Inland Empire specialists. Free estimate. Request a free estimate online.",
  },
  {
    slug: "pasadena",
    name: "Pasadena",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Gabriel Valley",
    population: "137,000",
    description:
      "Pasadena is home to one of the highest concentrations of Craftsman-style homes in the United States. The Arroyo Seco district, Bungalow Heaven, and surrounding historic neighborhoods were built largely from 1905 to 1930, featuring brick chimneys and ornate cast-iron fireplace surrounds. These historic systems require careful, specialized cleaning to avoid damaging original brick and mortar. Pasadena's Rose Bowl and historic preservation district status also means many chimney repairs must conform to the Secretary of the Interior's Standards for Rehabilitation.",
    chimneyContext:
      "Pasadena's Craftsman bungalows typically have inglenook fireplaces with wide, low brick openings — a design that requires specialized brush sizing and technique. The brick is often a soft, early-20th-century variety that can be damaged by high-pressure washing or overly aggressive cleaning chemicals.",
    neighborhoods: ["Bungalow Heaven", "Arroyo Seco", "Historic Highland Park", "Madison Heights", "Old Pasadena"],
    nearbyAreas: ["Glendale", "Los Angeles", "Arcadia", "Monrovia"],
    uniqueFact:
      "Pasadena's Bungalow Heaven neighborhood has more Craftsman bungalows per block than any other neighborhood in California — most contain original brick chimneys that have never been professionally camera-inspected.",
    metaTitle: "Chimney Services in Pasadena, CA | Craftsman Specialists | Chimney Peak California",
    metaDescription:
      "Chimney cleaning and repair in Pasadena. Craftsman bungalow specialists. Historic preservation-compliant work. Request a free estimate online.",
  },
  {
    slug: "glendale",
    name: "Glendale",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Fernando Valley / Foothills",
    population: "196,000",
    description:
      "Glendale sits at the eastern end of the San Fernando Valley, backed by the Verdugo Mountains. Its residential neighborhoods — ranging from 1920s hillside Colonials in Montecito Heights to post-war ranches in the flatlands — have a mix of masonry and factory-built fireplace systems. The city's elevation and proximity to the foothills means cooler winters than central LA, with more frequent fireplace use. SCAQMD wood-burning restrictions apply, but gas insert use is high.",
    chimneyContext:
      "Glendale's hillside properties face the same earthquake-related chimney damage concerns as the broader LA Basin. The 1994 Northridge quake affected chimney liners in hillside Glendale neighborhoods significantly. We recommend a camera inspection for any Glendale home that hasn't had one since 1994.",
    neighborhoods: ["Adams Hill", "Montecito Heights", "Grandview", "Verdugo Viejo", "La Crescenta"],
    nearbyAreas: ["Pasadena", "Burbank", "Los Angeles", "Alhambra"],
    uniqueFact:
      "Glendale has more Armenian-American homeowners per capita than any US city outside Armenia — a demographic associated with high fireplace use during winter holidays.",
    metaTitle: "Chimney Services in Glendale, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Glendale. Serving Adams Hill, La Crescenta, and surrounding neighborhoods. Request a free estimate online.",
  },
  {
    slug: "santa-barbara",
    name: "Santa Barbara",
    county: "Santa Barbara County",
    countySlug: "santa-barbara-county-ca",
    region: "Central Coast",
    population: "88,000",
    description:
      "Santa Barbara's Spanish Colonial Revival architecture is among the most distinctive in California, and many of its most valuable homes feature elaborate stucco-finished fireplaces and exterior chimneys that must be maintained with materials consistent with the city's architectural guidelines. The coastal climate — cool, foggy mornings with warm afternoons — creates persistent moisture conditions that accelerate mortar deterioration. The Thomas Fire (2017) burned through Montecito and the foothills, and many affected chimneys received only temporary repairs.",
    chimneyContext:
      "Santa Barbara County's Architectural Board of Review requires that chimney repairs in historic districts use materials and methods consistent with existing construction. We are familiar with the Board's requirements and carry the appropriate materials for stucco-finished chimney repair work.",
    neighborhoods: ["Montecito", "Hope Ranch", "Mesa", "Riviera", "Eastside", "Mission Canyon"],
    nearbyAreas: ["Ventura", "Santa Maria", "San Luis Obispo"],
    uniqueFact:
      "Santa Barbara's building codes require chimney caps in all new construction and major renovations — making it one of the few California cities where cap installation is a code requirement rather than a recommendation.",
    metaTitle: "Chimney Services in Santa Barbara, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, repair, and inspection in Santa Barbara. Historic and Spanish Colonial specialists. Request a free estimate online.",
  },
  {
    slug: "santa-monica",
    name: "Santa Monica",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Westside / Coastal",
    population: "92,000",
    description:
      "Santa Monica's prime oceanfront location means chimneys are constantly exposed to salt-laden marine air that accelerates corrosion of any unprotected metal component. Chase covers, damper assemblies, and standard stainless caps all corrode faster here than in inland communities. Santa Monica also has a large inventory of pre-1940 Spanish Revival and Streamline Moderne homes with masonry fireplaces that have never received a professional camera inspection. SCAQMD restrictions limit wood burning on curtailment days.",
    chimneyContext:
      "We recommend marine-grade 316L stainless steel for all Santa Monica cap and liner installations — the same alloy used in marine hardware. Standard 304 stainless can begin surface pitting within 5 years in heavy marine exposure. We also apply a clear masonry sealer to exposed chimney exteriors on coastal properties after any repair work.",
    neighborhoods: ["Ocean Park", "Pico Neighborhood", "Wilshire Montana", "North of Montana", "Mid-City"],
    nearbyAreas: ["Los Angeles", "Venice", "Malibu", "Culver City"],
    uniqueFact:
      "Santa Monica's coastal wind exposure means chimney cap mesh screens require twice-annual inspection — salt buildup can clog mesh and restrict draft within a single season.",
    metaTitle: "Chimney Services in Santa Monica, CA | Coastal Specialists | Chimney Peak California",
    metaDescription:
      "Chimney service in Santa Monica. Marine-grade materials for coastal homes. Spanish Revival and historic fireplace specialists. Request a free estimate online.",
  },
  {
    slug: "bakersfield",
    name: "Bakersfield",
    county: "Kern County",
    countySlug: "kern-county-ca",
    region: "Central Valley",
    population: "407,000",
    description:
      "Bakersfield sits at the southern end of the San Joaquin Valley, where winter temperature inversions create persistent cold fog for weeks at a time. Despite average winter lows that rarely go below 35°F, residents burn wood and gas fireplaces heavily in this region. Bakersfield also has a significant oil and gas industry presence, and many older homes were built with non-standard chimney configurations during the mid-20th-century energy boom. The SJVAPCD's strict wood-burning rules apply here.",
    chimneyContext:
      "Bakersfield's persistent Tule fog season — typically December through February — deposits significant moisture on exposed masonry. We recommend annual inspection and a crown coat application every five years for Bakersfield chimneys to prevent water infiltration during fog season.",
    neighborhoods: ["Oleander Sunset", "Seven Oaks", "Haggin Oaks", "Southwest Bakersfield", "Mill Creek"],
    nearbyAreas: ["Fresno", "Modesto", "Riverside", "Los Angeles"],
    uniqueFact:
      "Bakersfield has more oil and gas industry workers per capita than any other California city, and their homes tend to have older, higher-BTU heating systems with chimneys that see heavier-than-average use.",
    metaTitle: "Chimney Services in Bakersfield, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Bakersfield. Kern County specialists. Free estimate. Request a free estimate online.",
  },
  {
    slug: "stockton",
    name: "Stockton",
    county: "San Joaquin County",
    countySlug: "san-joaquin-county-ca",
    region: "Central Valley",
    population: "322,000",
    description:
      "Stockton's position in the northern San Joaquin Valley gives it cold, damp winters that drive consistent fireplace use from October through March. The city has a large inventory of pre-1970 ranch-style homes and Victorian-era buildings in the downtown core, most with original masonry chimney systems. San Joaquin County falls under SJVAPCD jurisdiction for wood-burning curtailment. Delta breezes from the Sacramento–San Joaquin Delta bring significant moisture into the region, increasing the rate of mortar joint deterioration.",
    chimneyContext:
      "Stockton's delta moisture environment is similar to Sacramento in its effect on masonry. We've observed higher-than-average rates of spalled brick and failed mortar joints in Stockton properties compared to drier inland cities. Annual inspection is particularly important here.",
    neighborhoods: ["Miracle Mile", "Lincoln Village", "Brookside", "Country Club", "Weston Ranch"],
    nearbyAreas: ["Sacramento", "Modesto", "Fresno", "Oakland"],
    uniqueFact:
      "Stockton was one of the first California cities to adopt mandatory chimney inspection requirements for real estate transactions — a policy that's been in place since 2015.",
    metaTitle: "Chimney Services in Stockton, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Stockton. San Joaquin County specialists. Request a free estimate online.",
  },
  {
    slug: "modesto",
    name: "Modesto",
    county: "Stanislaus County",
    region: "Central Valley",
    population: "218,000",
    description:
      "Modesto experiences cold, damp winters with significant Tule fog influence, and residents with fireplaces use them regularly from November through February. The city's housing stock includes a mix of 1950s–1970s ranch homes and older agricultural-era housing in the downtown core. Stanislaus County falls under SJVAPCD jurisdiction. Modesto's agricultural economy means many properties also have outbuildings and barns with wood-burning stoves that require separate inspection.",
    chimneyContext:
      "Modesto's agricultural setting means wood-burning is more culturally common here than in coastal cities, and many residents burn unseasoned wood — which deposits creosote at a higher rate. We recommend semi-annual cleaning for Modesto properties that burn green or mixed wood.",
    neighborhoods: ["Sylvan", "Dry Creek", "College", "Downtown Modesto", "Village One"],
    nearbyAreas: ["Stockton", "Fresno", "Sacramento", "Turlock"],
    uniqueFact:
      "Modesto has the highest rate of creosote buildup per cord burned of any market we service — reflecting the prevalence of unseasoned wood from local orchards and vineyards.",
    metaTitle: "Chimney Services in Modesto, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Modesto. Stanislaus County specialists. Request a free estimate online.",
  },
  {
    slug: "santa-rosa",
    name: "Santa Rosa",
    county: "Sonoma County",
    countySlug: "sonoma-county-ca",
    region: "Wine Country / North Bay",
    population: "178,000",
    description:
      "Santa Rosa sits at the gateway to Sonoma wine country and experiences genuine four-season weather, with cold, rainy winters and warm, dry summers. The city was severely affected by the Tubbs Fire in 2017, which destroyed more than 5,600 structures in the Coffey Park and Fountaingrove neighborhoods. Rebuilt homes in those areas have modern fireplace systems, while surviving older homes in the Proctor Terrace, McDonald, and Railroad Square historic districts have original masonry systems that require ongoing maintenance. BAAQMD Spare the Air rules apply.",
    chimneyContext:
      "Santa Rosa's post-fire rebuild created one of the largest concentrations of newly installed factory-built fireplaces in Northern California. These systems require their first formal inspection at 3–5 years of use, as refractory panels and liner joints settle and may develop cracks. We service both the post-fire rebuilds and the surviving historic homes.",
    neighborhoods: ["Proctor Terrace", "Railroad Square", "Fountaingrove", "Coffey Park", "Junior College"],
    nearbyAreas: ["San Francisco", "Oakland", "Napa", "Petaluma"],
    uniqueFact:
      "Santa Rosa's post-Tubbs Fire reconstruction placed it among the top 10 building permit cities in California for five consecutive years — meaning thousands of new fireplace systems installed that will need their first professional inspection soon.",
    metaTitle: "Chimney Services in Santa Rosa, CA | Chimney Peak California",
    metaDescription:
      "Chimney cleaning, inspection, and repair in Santa Rosa. Post-fire rebuild and historic fireplace specialists. Request a free estimate online.",
  },

  // ─── Step 3: 33 new cities ────────────────────────────────────────────────

  // ── Los Angeles County ─────────────────────────────────────────────────
  {
    slug: "santa-clarita",
    name: "Santa Clarita",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California",
    population: "228,000",
    description: "Santa Clarita is the third-largest city in Los Angeles County, a master-planned community in the Santa Clarita Valley built primarily between 1980 and 2010. Its housing stock is largely factory-built fireplace systems installed during the city's rapid suburban expansion — many now reaching the 25–35-year mark where manufacturer-recommended service and inspections are essential. The 2019 Saddle Ridge Fire burned through Sylmar and the northern Santa Clarita hills, reminding residents in the city's hillside tracts of the importance of spark-arrestor chimney caps.",
    chimneyContext: "Santa Clarita homes built in the 1990s — the bulk of the city — typically have factory-built zero-clearance fireplaces by Heatilator or Superior, now 25–30 years old. Refractory panels in these systems degrade on a schedule independent of use, and many are cracked or gap-separated without visible warning. Santa Ana wind exposure in the Newhall Pass corridor means spark control is a genuine fire-season priority.",
    neighborhoods: ["Canyon Country", "Newhall", "Saugus", "Stevenson Ranch", "Valencia", "Castaic"],
    nearbyAreas: ["Los Angeles", "Palmdale", "San Fernando", "Burbank"],
    nearbySlugs: ["los-angeles", "palmdale", "glendale"],
    uniqueFact: "Santa Clarita was incorporated in 1987 from four existing communities, and its housing uniformity means a significant proportion of all fireplaces in the city share the same original installation date — creating a synchronized service wave now hitting many properties simultaneously.",
    faqs: [
      { q: "My Santa Clarita home is from 1995. Should I have the factory-built fireplace inspected?", a: "Yes. A 1995 factory-built system is around 30 years old — past the service life of the original refractory panels and within the window where manufacturer safety recalls and panel replacements become necessary. We inspect the panels, liner, and heat shield and provide a written assessment." },
      { q: "Do Santa Ana winds affect chimneys in Santa Clarita?", a: "Yes. The Newhall Pass corridor channels Santa Ana winds at accelerated velocities during autumn events. High-velocity hot winds can dislodge poorly secured caps, back-draft creosote odors into living areas, and significantly increase the risk of ember escape from uncapped or inadequately screened flues during red-flag fire conditions." },
    ],
    metaTitle: "Chimney Services in Santa Clarita, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and factory-built fireplace service in Santa Clarita. Valencia, Canyon Country, and Newhall. Request a free estimate online.",
  },
  {
    slug: "lancaster",
    name: "Lancaster",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Antelope Valley / High Desert",
    population: "173,000",
    description: "Lancaster sits in the Antelope Valley at 2,355 feet elevation, where the high desert climate produces temperature extremes that few other LA County cities experience — summer highs above 105°F and winter nights regularly below freezing, with occasional snow. This thermal cycling is among the most damaging to masonry mortar joints of any LA County location, and the dry desert air means evaporative cooling keeps chimney moisture levels unpredictable. Lancaster's housing stock spans 1950s agricultural-era homes in the west end to 1990s–2000s planned communities along the eastern corridors.",
    chimneyContext: "Lancaster's high-desert location means freeze-thaw cycling in winter and extreme heat expansion in summer create a pattern of accelerated mortar joint failure compared to valley communities. The SCAQMD curtailment rules technically apply here, but high-desert communities often see more enforcement variance. Many Lancaster homes use gas fireplace inserts specifically to avoid curtailment restrictions.",
    neighborhoods: ["West Lancaster", "East Lancaster", "Del Sur", "Quartz Hill", "Sun Village"],
    nearbyAreas: ["Palmdale", "Santa Clarita", "Victorville", "Bakersfield"],
    nearbySlugs: ["palmdale", "santa-clarita", "victorville"],
    uniqueFact: "Lancaster and Palmdale together form the Antelope Valley's 'high desert' corridor, where temperature swings exceeding 40°F between day and night are common in winter — creating more aggressive freeze-thaw mortar damage than any other LA County market.",
    faqs: [
      { q: "Does cold weather in Lancaster damage chimneys differently than in coastal LA?", a: "Yes. Lancaster's high-desert winters bring freezing temperatures and occasional snow — conditions rare in the LA basin. Water penetrating mortar joints freezes overnight, expanding micro-cracks with each cycle. We recommend annual crown inspection and a crown coat sealer every 3–4 years for Lancaster properties exposed to freezing weather." },
      { q: "My Lancaster home has both a wood fireplace and a gas insert. Which needs inspection first?", a: "Both need annual inspection, but if one hasn't been inspected recently, start with the wood-burning fireplace — it accumulates creosote and poses a higher fire risk from deferred maintenance. Gas inserts should be inspected for carbon monoxide safety and vent integrity on the same schedule." },
    ],
    metaTitle: "Chimney Services in Lancaster, CA | Antelope Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Lancaster. Antelope Valley and high desert specialists. Request a free estimate online.",
  },
  {
    slug: "palmdale",
    name: "Palmdale",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Antelope Valley / High Desert",
    population: "169,000",
    description: "Palmdale shares the Antelope Valley high desert with Lancaster and faces the same extreme thermal cycling conditions — freezing winter nights, summer triple-digit heat, and low humidity that accelerates mortar drying and cracking. The city's residential expansion has been continuous since the 1980s, driven by the Edwards Air Force Base and aerospace economy, producing large tracts of 1980s–2000s single-family homes with factory-built fireplaces that are now in their key maintenance window. Palmdale's newer Rancho Vista and Anaverde neighborhoods represent the youngest housing stock in the Antelope Valley.",
    chimneyContext: "Palmdale's factory-built fireplace inventory from the 1985–2005 construction era is the primary service demand in the market. These systems need refractory panel checks, liner inspection, and damper assessment at the 20–30-year mark regardless of usage frequency. The SCAQMD applies to Palmdale, so residents with gas inserts can burn on more days per year than those with traditional wood fireplaces.",
    neighborhoods: ["Rancho Vista", "Anaverde", "West Palmdale", "East Palmdale", "Sun Village"],
    nearbyAreas: ["Lancaster", "Santa Clarita", "Victorville", "San Bernardino"],
    nearbySlugs: ["lancaster", "santa-clarita", "victorville"],
    uniqueFact: "Palmdale's aerospace industry heritage means a higher-than-average proportion of homeowners are technically employed professionals who often research chimney maintenance online but still defer action — making it one of the markets with the largest gap between chimney awareness and action.",
    faqs: [
      { q: "How often should I clean my Palmdale fireplace if I only use it a few times a year?", a: "Annual inspection is recommended regardless of use frequency. Even a rarely used chimney in the Antelope Valley collects dust, debris, and sometimes nesting material from spring to fall. More importantly, inspection catches structural issues — crown cracks, liner damage, cap deterioration — that progress with the local thermal cycling regardless of burn frequency." },
    ],
    metaTitle: "Chimney Services in Palmdale, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Palmdale. Antelope Valley specialists. Free estimate. Request a free estimate online.",
  },
  {
    slug: "pomona",
    name: "Pomona",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Gabriel Valley / Inland",
    population: "151,000",
    description: "Pomona is one of the oldest cities in Los Angeles County, incorporated in 1888, and its housing stock reflects that age — many residential neighborhoods south and west of the Cal Poly Pomona campus contain original 1910s–1940s brick bungalows with clay-tile-lined masonry chimneys that represent some of the oldest operating fireplace systems in the county. The Pomona Valley experiences genuine seasonal temperature swings between cold, damp winters and hot, dry summers, and the city's industrial heritage means air quality concerns are more pronounced than in purely residential communities.",
    chimneyContext: "Pre-1940 homes in Pomona's historic core are common along Garey Avenue and in the Lincoln Park neighborhood — properties with original masonry that often includes soft early-century brick and lime-based mortar that can be damaged by aggressive cleaning methods. Many Pomona chimneys have never had a camera inspection, and we have found collapsed flue sections, animal nesting, and stage 3 creosote in systems that appeared functional from the firebox.",
    neighborhoods: ["Lincoln Park", "Westmont", "Phillips Ranch", "Village Green", "Ganesha Hills"],
    nearbyAreas: ["Ontario", "San Bernardino", "Los Angeles", "Riverside"],
    nearbySlugs: ["ontario", "san-bernardino", "los-angeles", "riverside"],
    uniqueFact: "Pomona's Antique Row on Garey Avenue is a designated California Historic District, and the adjacent residential blocks contain some of the only surviving Craftsman four-squares with original cast-iron fireplace surrounds in the eastern San Gabriel Valley.",
    faqs: [
      { q: "My 1926 Pomona bungalow has the original fireplace. Is it safe to use?", a: "Possibly, but only after a Level 2 camera inspection. Pre-1940 masonry in the San Gabriel Valley often has either no clay tile liner or deteriorated original liner from the era before modern standards. We've found entirely unlined flues in Pomona homes that have been in use for decades — a serious carbon monoxide risk. A camera scan is the only definitive way to assess the flue condition." },
    ],
    metaTitle: "Chimney Services in Pomona, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Pomona. Historic bungalow specialists. San Gabriel Valley. Request a free estimate online.",
  },
  {
    slug: "torrance",
    name: "Torrance",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / South Bay",
    population: "144,000",
    description: "Torrance is one of the South Bay's most complete cities — with residential neighborhoods, a strong industrial base including the Toyota North America campus, and proximity to the Pacific Ocean that gives the city a consistent marine influence. The residential areas of Old Torrance and North Torrance contain 1940s–1960s homes with original masonry fireplaces, while the newer eastern and southern neighborhoods feature factory-built systems from the 1970s–1990s. Japanese-American homeowners make up a significant portion of Torrance residents, and cultural traditions of thorough home maintenance correlate with above-average chimney inspection rates compared to neighboring South Bay cities.",
    chimneyContext: "Torrance's South Bay proximity means marine air accelerates corrosion of metal chimney components faster than inland LA communities. The SCAQMD curtailment rules apply, but Torrance's mild coastal climate means many residents burn wood relatively infrequently — which creates a false sense that maintenance isn't needed. Infrequent use still accumulates enough creosote for annual inspection to be warranted.",
    neighborhoods: ["Old Torrance", "North Torrance", "Hollywood Riviera", "Southwood", "Southeast Torrance"],
    nearbyAreas: ["Lomita", "Redondo Beach", "Carson", "Gardena"],
    nearbySlugs: ["los-angeles", "long-beach"],
    uniqueFact: "Torrance's Hollywood Riviera neighborhood — a master-planned 1930s development on the Palos Verdes bluffs — has an unusually high concentration of original pre-war Mediterranean Revival homes with decorative masonry fireplaces that require specialized cleaning to preserve the original tile and brick.",
    faqs: [
      { q: "How does South Bay marine air affect my Torrance chimney?", a: "Torrance's proximity to Redondo Beach and the Palos Verdes shoreline means year-round salt-laden air exposure that corrodes standard 304 stainless steel chimney caps and dampers significantly faster than inland LA communities. We recommend annual inspection of all metal components and marine-grade 316L stainless for cap replacements in Torrance properties within 2 miles of the coast." },
    ],
    metaTitle: "Chimney Services in Torrance, CA | South Bay | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Torrance. South Bay specialists — Old Torrance, Hollywood Riviera, and North Torrance. Request a free estimate online.",
  },

  // ── Orange County ──────────────────────────────────────────────────────
  {
    slug: "santa-ana",
    name: "Santa Ana",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "310,000",
    description: "Santa Ana is Orange County's county seat and most densely populated city, with a predominantly Latino community and a housing stock that spans 1920s Craftsman bungalows and Period Revival homes near the historic downtown to postwar bungalows and 1960s apartments across the flatlands. The Floral Park and Park Santiago historic districts contain some of the oldest residential structures in Orange County, many with original masonry fireplaces installed before modern liner standards. Santa Ana's dense urban character makes chimney work here require more careful debris management than in suburban communities.",
    chimneyContext: "Santa Ana's older neighborhoods have a high proportion of pre-1940 masonry systems that predate clay tile liner requirements. Many have been converted to gas logs but were never inspected after conversion — a process that can affect how combustion gases draft through the system. SCAQMD curtailment rules apply, and many Santa Ana residents have shifted to gas inserts specifically to gain more burn-day flexibility.",
    neighborhoods: ["Floral Park", "Park Santiago", "Country Club Manor", "Logan", "Wilshire Square"],
    nearbyAreas: ["Anaheim", "Garden Grove", "Orange", "Irvine"],
    nearbySlugs: ["anaheim", "garden-grove", "orange", "irvine", "fullerton"],
    uniqueFact: "Floral Park in Santa Ana is Orange County's largest historic district by number of contributing structures, with more than 400 homes built between 1920 and 1940 — virtually all containing original masonry fireplaces that have never been camera-inspected.",
    faqs: [
      { q: "My 1932 Santa Ana home has the original fireplace. What does a full inspection include?", a: "A Level 2 inspection for a pre-war Santa Ana property covers the firebox, damper, smoke shelf, and a full video camera scan of the flue from top to bottom. We provide a written report with photos noting the liner condition, any cracks or joint separations, and recommendations. These reports are accepted by lenders, insurers, and historic preservation offices." },
      { q: "Does SCAQMD wood-burning curtailment affect Santa Ana?", a: "Yes. The South Coast AQMD issues curtailment notices for all of Orange County on high-pollution days, typically between November and February. Traditional open-hearth fireplaces must remain unused on curtailment days. Gas inserts that meet SCAQMD emission standards are typically exempt, which is why we see a high conversion rate in Santa Ana's older neighborhoods." },
    ],
    metaTitle: "Chimney Services in Santa Ana, CA | Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and historic fireplace service in Santa Ana. Floral Park, Park Santiago, and throughout Orange County. Request a free estimate online.",
  },
  {
    slug: "huntington-beach",
    name: "Huntington Beach",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California / Coastal",
    population: "200,000",
    description: "Huntington Beach — Surf City USA — stretches 10 miles along the Pacific Coast Highway with residential neighborhoods that range from older oil-field bungalows near downtown to 1970s tract homes in the mid-city and newer developments in Huntington Harbour. The city's coastal position gives it one of the most consistent marine air environments in Southern California, accelerating corrosion of exposed metal chimney components year-round. Huntington Beach's oil production history means some older properties have non-standard site conditions that occasionally affect chimney installation quality.",
    chimneyContext: "Huntington Beach's marine climate puts stainless chimney caps and dampers under constant salt-air stress — we recommend annual inspection of all metal components and marine-grade 316L stainless for any cap within 3 miles of the ocean. The city's 1970s–1980s suburban tracts are dominated by factory-built fireplaces now past their recommended inspection intervals. SCAQMD wood-burning curtailment applies on high-pollution days.",
    neighborhoods: ["Downtown HB", "Huntington Harbour", "Bolsa Chica", "South Huntington", "Surf City USA District"],
    nearbyAreas: ["Long Beach", "Fountain Valley", "Westminster", "Costa Mesa"],
    nearbySlugs: ["long-beach", "anaheim", "santa-ana", "irvine"],
    uniqueFact: "Huntington Beach's proximity to the Pacific means sea-salt particulates are deposited on exterior chimney surfaces year-round — a corrosive environment that shortens the lifespan of standard 304-grade stainless components to roughly half their inland service life.",
    faqs: [
      { q: "How often should Huntington Beach coastal homes have their chimneys checked?", a: "Annual inspection is our recommendation for all properties, but coastal Huntington Beach homes within 2 miles of the beach should also have a brief spring check of metal components — caps, chase covers, and damper plates — for early corrosion signs. Catching surface pitting before it becomes perforation prevents much costlier repairs later." },
    ],
    metaTitle: "Chimney Services in Huntington Beach, CA | Coastal Specialists | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Huntington Beach. Coastal and marine-grade specialists. Surf City and surrounding neighborhoods. Request a free estimate online.",
  },
  {
    slug: "garden-grove",
    name: "Garden Grove",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "172,000",
    description: "Garden Grove is a dense suburban city at the center of Orange County, closely associated with the Vietnamese-American community of Little Saigon, one of the largest Vietnamese populations outside of Vietnam. The city's residential housing is predominantly 1960s–1970s suburban tract construction — single-story ranch homes with original masonry chimneys or early factory-built systems, the majority of which have never received a professional inspection. The community's strong cultural emphasis on home maintenance and property ownership correlates with a growing demand for professional chimney services.",
    chimneyContext: "Garden Grove's 1960s–1970s masonry chimneys are approaching 50–60 years of age, placing many flue liners at or past their typical service window. Factory-built systems installed in early 1970s construction are at the far end of their design life. Many Garden Grove properties also have gas log inserts installed in older masonry fireboxes — a conversion that requires verification that the gas combustion can draft safely through the original masonry flue.",
    neighborhoods: ["Little Saigon", "West Garden Grove", "Central Garden Grove", "Eastgate", "South Garden Grove"],
    nearbyAreas: ["Anaheim", "Santa Ana", "Westminster", "Stanton"],
    nearbySlugs: ["anaheim", "santa-ana", "orange", "fullerton"],
    uniqueFact: "Garden Grove has one of the densest concentrations of 1960s-era original masonry chimneys of any Orange County city — a period of construction before rigorous chimney liner inspection standards, when many systems were built that don't meet current code.",
    faqs: [
      { q: "My Garden Grove home was built in 1967. What chimney service does it need?", a: "A Level 2 camera inspection is the right starting point for a 1967 home. By this age, clay tile liner joints commonly show mortar deterioration, cracking, or misalignment. We also check the damper, crown, and cap condition. If the chimney has been converted to gas, we verify that the flue dimensions support safe gas combustion draft." },
    ],
    metaTitle: "Chimney Services in Garden Grove, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Garden Grove. Orange County specialists serving older ranch homes and factory-built systems. Request a free estimate online.",
  },
  {
    slug: "orange",
    name: "Orange",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "140,000",
    description: "The city of Orange — not to be confused with Orange County — has one of the most distinctive historical cores in Southern California. Old Towne Orange, centered on Plaza Square, contains the largest concentration of Victorian, Craftsman, and Bungalow-era homes in Orange County, many listed on the National Register of Historic Places. These pre-1940 properties feature original masonry fireplaces with decorative tile surrounds, cast-iron fronts, and ornamental mantels that require specialized cleaning and repair techniques to avoid damaging irreplaceable historic materials.",
    chimneyContext: "Old Towne Orange's historic homes present the same specialized chimney maintenance requirements as Pasadena's Craftsman district — original soft brick, lime-based mortar, and unlined or early-lined flues that need careful assessment. Outside the historic core, Orange's 1960s–1990s residential neighborhoods are typical Orange County suburban housing with factory-built systems. SCAQMD rules apply throughout the city.",
    neighborhoods: ["Old Towne Orange", "Orange Hills", "Serrano Heights", "Riverdale", "Uptown Orange"],
    nearbyAreas: ["Anaheim", "Santa Ana", "Tustin", "Villa Park"],
    nearbySlugs: ["anaheim", "santa-ana", "fullerton", "garden-grove"],
    uniqueFact: "Old Towne Orange has the second-largest concentration of Victorian-era commercial buildings in California (after San Francisco's commercial district) — the adjacent residential neighborhoods share the same pre-1900 to 1930 construction era and chimney heritage.",
    faqs: [
      { q: "Do chimneys in Old Towne Orange need special handling?", a: "Yes. The historic soft brick and original lime mortar in Old Towne Orange homes require pH-appropriate cleaning chemicals and gentle brushing techniques — the same approach we use in Pasadena's historic Craftsman district and San Francisco's Victorian neighborhoods. Using modern high-pressure or alkaline cleaners on pre-1940 masonry can cause permanent surface damage." },
    ],
    metaTitle: "Chimney Services in Orange, CA | Historic District Specialists | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Orange, CA. Old Towne historic fireplace specialists. Orange County certified. Request a free estimate online.",
  },
  {
    slug: "fullerton",
    name: "Fullerton",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "136,000",
    description: "Fullerton is Orange County's college town, home to Cal State Fullerton and a vibrant downtown arts district built around one of the largest surviving clusters of 1920s–1940s commercial and residential architecture in the county. The Fullerton Historic District encompasses several residential neighborhoods with original Period Revival homes — Spanish Colonial, Tudor, and Craftsman designs — featuring masonry chimneys that in many cases have been operating continuously for 80+ years. The city's residential neighborhoods outside the historic core contain a typical Orange County mix of 1960s–1990s construction with both masonry and factory-built systems.",
    chimneyContext: "Heritage Square in downtown Fullerton and the adjacent residential blocks contain many homes where original masonry chimneys have been converted to gas logs without professional assessment of whether the gas combustion can safely draft through the existing masonry. This is a common source of carbon monoxide concern in 1920s–1930s homes throughout Orange County's older cities. SCAQMD curtailment applies to the full city.",
    neighborhoods: ["Heritage Square", "Amerige Heights", "Hillcrest Park", "Downtown Fullerton", "Raymond Hills"],
    nearbyAreas: ["Anaheim", "Buena Park", "Placentia", "Brea"],
    nearbySlugs: ["anaheim", "orange", "santa-ana", "garden-grove"],
    uniqueFact: "Fullerton's Heritage Square is a designated California Point of Historical Interest containing 12 structures moved from throughout Orange County for preservation — including two Victorian-era fireplaces that represent the only surviving examples of original 1890s hearth construction in the county.",
    faqs: [
      { q: "My Fullerton craftsman from 1928 was converted to gas logs. Does it need inspection?", a: "Yes, especially for a gas conversion. Converting a wood-burning fireplace to gas changes the combustion characteristics and flue draft requirements. If the conversion was done without a licensed inspection verifying the flue dimensions support gas combustion, there's a carbon monoxide risk. We inspect the conversion and provide documentation for insurance purposes." },
    ],
    metaTitle: "Chimney Services in Fullerton, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Fullerton. Historic Craftsman and Period Revival fireplace specialists. Request a free estimate online.",
  },

  // ── San Diego County ───────────────────────────────────────────────────
  {
    slug: "chula-vista",
    name: "Chula Vista",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California",
    population: "275,000",
    description: "Chula Vista is San Diego County's second-largest city, stretching from the older neighborhoods near downtown to the master-planned Eastlake and Otay Ranch communities built between 1990 and 2010. The city's diverse housing stock reflects its rapid growth — north Chula Vista contains 1950s–1970s single-family homes with masonry chimneys, while the newer eastern communities are predominantly factory-built systems in tract homes. Chula Vista's coastal position south of San Diego Bay means the western portions experience persistent marine air, while the inland eastern communities face greater temperature variation.",
    chimneyContext: "Western Chula Vista's older neighborhoods near National City have masonry systems comparable in age and condition to downtown San Diego's housing stock — clay tile liners now 50–70 years old that warrant camera inspection. Eastern Chula Vista's 1990s–2000s factory-built systems are entering the key maintenance window. The city's proximity to Mexico creates some unique housing stock characteristics in the southern neighborhoods, including wood-burning outdoor structures that occasionally connect to indoor flues.",
    neighborhoods: ["Eastlake", "Otay Ranch", "Rancho Del Rey", "Southwest Chula Vista", "Montevista"],
    nearbyAreas: ["San Diego", "National City", "El Cajon", "Tijuana adjacent"],
    nearbySlugs: ["san-diego", "escondido"],
    uniqueFact: "Chula Vista's Otay Ranch master-planned community is one of the 10 largest planned community developments in California history, and its fireplace systems from the late 1990s build-out are now experiencing the synchronized maintenance demands typical of planned communities.",
    faqs: [
      { q: "Does the wildfire risk near Chula Vista's eastern communities affect my chimney?", a: "Yes. Chula Vista's Otay Ranch and Eastlake communities border open wildland and sit in a high fire-hazard severity zone. The San Diego Fire Department recommends spark-arrestor chimney caps for all properties near open brush, and annual inspection to ensure the cap screen is intact and the flue is clear of debris that could ignite." },
    ],
    metaTitle: "Chimney Services in Chula Vista, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Chula Vista. Eastlake, Otay Ranch, and South Bay specialists. Request a free estimate online.",
  },
  {
    slug: "oceanside",
    name: "Oceanside",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California / Coastal",
    population: "175,000",
    description: "Oceanside is San Diego County's third-largest city and one of its most genuinely coastal — the city stretches along 3.5 miles of Pacific beachfront, and the adjacent Camp Pendleton Marine Corps Base creates a unique civic character. Oceanside's residential housing ranges from original 1950s beach cottages and bungalows near the pier to newer inland developments in the Rancho del Oro and El Camino Real corridors. The persistent marine environment here is among the most aggressive in San Diego County for corrosion of exposed metal chimney components.",
    chimneyContext: "Properties within a mile of Oceanside Pier experience the highest salt-air density in the city — we recommend 316L marine-grade stainless for all cap and component replacements in this zone. The Camp Pendleton adjacency means a significant proportion of Oceanside's population turns over with military rotations, creating a pattern of deferred maintenance in rental properties that are typically not inspected between tenants.",
    neighborhoods: ["Downtown Oceanside", "South Oceanside", "Rancho del Oro", "Fire Mountain", "Ivey Ranch"],
    nearbyAreas: ["Carlsbad", "Vista", "San Marcos", "Camp Pendleton"],
    nearbySlugs: ["san-diego", "escondido", "chula-vista"],
    uniqueFact: "Oceanside has one of the highest concentrations of military-family rental homes in California, and rental properties in the city are significantly more likely to have deferred chimney maintenance than owner-occupied properties — a pattern we observe consistently in military-adjacent markets.",
    faqs: [
      { q: "My Oceanside rental property has a fireplace. What inspection am I required to provide to tenants?", a: "California law requires landlords to ensure rental property fireplaces are safe and operable. An annual Level 1 inspection with a written report satisfies this requirement and provides liability protection. We provide signed reports suitable for rental property documentation and can work with property management companies for multi-unit scheduling." },
    ],
    metaTitle: "Chimney Services in Oceanside, CA | Coastal | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Oceanside. Marine-grade specialists for coastal and Camp Pendleton area homes. Request a free estimate online.",
  },
  {
    slug: "escondido",
    name: "Escondido",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California / Inland",
    population: "153,000",
    description: "Escondido is San Diego County's largest inland city, situated in the coastal foothills north of the main San Diego metro. The city's central valley location gives it more pronounced seasonal temperature swings than coastal San Diego — genuinely cold winter nights and hot summer days that drive meaningful fireplace use between October and March. Escondido's residential areas range from a historic downtown district with 1920s–1940s homes to suburban tracts built through the 1990s and the wine-country-adjacent North Broadway corridor.",
    chimneyContext: "Escondido's eastern communities — Harmony Grove, Felicita, and the Rincon del Diablo water district area — border high fire-hazard severity zone open land. The San Diego County Fire Department specifically recommends annual chimney inspection and spark-arrestor cap installation for properties in these eastern hillside locations. Western Escondido's older neighborhoods have masonry systems comparable to the 1940s–1960s housing stock found in North Park, San Diego.",
    neighborhoods: ["Harmony Grove", "Hidden Trails", "Old Escondido", "Felicita", "Lake Wohlford"],
    nearbyAreas: ["San Diego", "Vista", "San Marcos", "Valley Center"],
    nearbySlugs: ["san-diego", "chula-vista", "oceanside"],
    uniqueFact: "Escondido's position at the inland edge of San Diego County's coastal climate means it sits precisely in the zone where marine moisture and desert dryness alternate seasonally — creating more variable mortar joint expansion-contraction cycles than purely coastal or purely inland markets.",
    faqs: [
      { q: "Does Escondido have wildfire risk concerns for chimneys?", a: "Yes. Eastern Escondido borders open chaparral land in a designated high fire-hazard area. The San Diego Fire Department recommends spark-arrestor caps with 5/8-inch mesh, annual inspection, and clean flues for all properties near open brush. We also recommend clearing any debris from the crown area and around the base of the chimney as part of routine defensible-space maintenance." },
    ],
    metaTitle: "Chimney Services in Escondido, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Escondido. Inland San Diego County specialists. Request a free estimate online.",
  },

  // ── Riverside County ───────────────────────────────────────────────────
  {
    slug: "moreno-valley",
    name: "Moreno Valley",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire",
    population: "213,000",
    description: "Moreno Valley experienced one of the fastest residential growth rates in California history between 1980 and 1995, transforming from a small community to one of the Inland Empire's largest cities. That rapid expansion was fueled predominantly by affordable tract housing with factory-built fireplaces, and today's Moreno Valley has an unusually homogeneous housing inventory — the bulk of its residential stock dates from a single 15-year window, meaning the fireplace systems are reaching end-of-life maintenance demands simultaneously across the city. Summer temperatures regularly exceed 105°F, and hot Santa Ana winds in autumn create wildfire risk on the city's eastern hillsides.",
    chimneyContext: "Moreno Valley's factory-built fireplaces from the 1985–2000 era are the primary service demand. These systems — typically Heatilator, Majestic, or Superior units — have refractory panels that deteriorate on a schedule, and many have not been inspected since installation. The eastern communities along the Badlands border sit in high fire-hazard zones where spark-arrestor maintenance is directly relevant to wildfire risk.",
    neighborhoods: ["Sunnymead Ranch", "Sunnymead", "Perris Hill", "Rancho Belago", "Valley College District"],
    nearbyAreas: ["Riverside", "Perris", "Hemet", "San Bernardino"],
    nearbySlugs: ["riverside", "san-bernardino", "corona"],
    uniqueFact: "Moreno Valley's single-era housing explosion means more factory-built fireplace systems of the same vintage are reaching the 30-year inspection threshold simultaneously here than in any other Riverside County city.",
    faqs: [
      { q: "My Moreno Valley home was built in 1992. Is the factory-built fireplace still safe?", a: "It may be — but a 30-year-old factory-built system should be inspected. Refractory panels crumble or gap with age and thermal cycling; heat shields can warp; dampers can corrode. We inspect the full system and give you a written assessment of whether repairs are needed or the system can continue in service as-is." },
    ],
    metaTitle: "Chimney Services in Moreno Valley, CA | Inland Empire | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Moreno Valley. Inland Empire specialists for 1980s–2000s factory-built fireplaces. Request a free estimate online.",
  },
  {
    slug: "corona",
    name: "Corona",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire",
    population: "168,000",
    description: "Corona — historically called the Circle City for its circular Main Street — sits at the western gateway of the Inland Empire where Riverside County meets Orange County. The city's housing stock is one of the most diverse in the region: a pre-war historic downtown core with 1920s–1940s masonry chimneys, postwar residential development in the central flatlands, and rapid 1990s–2010s expansion in the eastern and northern hillside communities of South Corona and Dos Lagos. The I-15 corridor position makes Corona one of the most commuter-accessible Inland Empire cities, and its population has grown continuously for 30 years.",
    chimneyContext: "Corona's wide range of housing eras means no single chimney type dominates the market — we service original 1930s brick masonry, 1970s factory-built systems, and 2000s direct-vent gas fireplaces in the same week. The hillside communities of South Corona sit in a designated high fire-hazard zone. Santa Ana wind events regularly affect the city through the Temescal Canyon and Santa Ana Canyon corridors.",
    neighborhoods: ["Historic Downtown", "South Corona", "Dos Lagos", "Eastvale", "Norco border"],
    nearbyAreas: ["Riverside", "Norco", "Anaheim Hills", "Ontario"],
    nearbySlugs: ["riverside", "moreno-valley", "ontario", "anaheim"],
    uniqueFact: "Corona's original Main Street follows a perfect 1-mile circle — a unique civic planning feature from 1886 that also ensured the historic downtown's residential blocks were developed in a single unified period, producing an unusually consistent 1920s–1930s housing inventory.",
    faqs: [
      { q: "Does the Santa Ana wind corridor near Corona create higher wildfire risk for uncapped chimneys?", a: "Yes. The Temescal and Santa Ana canyons channel Santa Ana winds directly into Corona, and the southern hillside communities border open brush that is in a designated high fire-hazard severity zone. Uncapped chimneys in wind-exposed locations emit sparks during fires; they can also backdraft debris into the firebox. We recommend spark-arrestor caps for all Corona hillside properties." },
    ],
    metaTitle: "Chimney Services in Corona, CA | Riverside County | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Corona. Riverside County Inland Empire specialists. Request a free estimate online.",
  },

  // ── San Bernardino County ──────────────────────────────────────────────
  {
    slug: "san-bernardino",
    name: "San Bernardino",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "216,000",
    description: "San Bernardino is the Inland Empire's original urban core and the county seat of the largest county by area in the contiguous United States. The city's historic neighborhoods — Arrowhead Springs, Muscupiabe, and the residential blocks around Cal State San Bernardino — contain early-20th-century housing that predates much of the surrounding suburban development. San Bernardino has faced significant economic challenges, but its housing stock contains some of the oldest masonry fireplaces in the Inland Empire, many of which remain in operation and have never been professionally inspected.",
    chimneyContext: "San Bernardino's pre-1950 housing stock dominates the central and western residential neighborhoods — clay tile liner systems now 60–75 years old, many installed before modern standards and never camera-inspected. The city's position at the base of the San Bernardino Mountains means it sits directly in the path of mountain cold-air drainage flows that keep winter nights colder than surrounding valley communities. SCAQMD curtailment rules apply to wood-burning.",
    neighborhoods: ["Arrowhead Springs", "Muscupiabe", "North San Bernardino", "Del Rosa", "Verdemont"],
    nearbyAreas: ["Fontana", "Redlands", "Rialto", "Riverside"],
    nearbySlugs: ["fontana", "ontario", "rancho-cucamonga", "riverside"],
    uniqueFact: "San Bernardino's Route 66 corridor contains the largest concentration of original 1940s–1950s motor lodge and Craftsman bungalow residential properties in the Inland Empire — many with original fireplaces that reflect the architectural ambitions of the post-war housing boom.",
    faqs: [
      { q: "How are San Bernardino's mountain cold-air flows different from standard valley weather for chimney purposes?", a: "Cold air drainage from the San Bernardino Mountains flows into the valley floor on cold clear nights, making San Bernardino city considerably colder than Riverside or Ontario at the same time. This accelerates freeze-thaw mortar cycling in winter and increases the condensation that contributes to chimney moisture damage. We recommend annual inspection and crown coat sealer for properties in the northern city areas closest to the mountains." },
    ],
    metaTitle: "Chimney Services in San Bernardino, CA | Inland Empire | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in San Bernardino. Inland Empire specialists for historic and modern fireplace systems. Request a free estimate online.",
  },
  {
    slug: "fontana",
    name: "Fontana",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "213,000",
    description: "Fontana grew from a Kaiser Steel mill town into one of the Inland Empire's most populous cities over the second half of the 20th century. The city's residential neighborhoods reflect that industrial and postwar suburban heritage — working-class bungalows and ranch homes from the 1940s–1970s in the central and southern areas, transitioning to 1980s–2000s suburban tract developments in the northern communities. Fontana's auto racing heritage (home of NASCAR's Auto Club Speedway) gives it a blue-collar community identity, and its housing stock's age means a large inventory of older masonry chimneys that have seen decades of continuous use.",
    chimneyContext: "Fontana's central neighborhoods contain 1950s–1970s ranch homes with original clay tile masonry chimneys that represent typical Inland Empire postwar construction — systems that need camera inspection and often have stage 2 creosote from decades of wood burning. The newer North Fontana communities (Citrus Heights, Summit Heights) have factory-built systems from the 1990s–2000s now reaching the 25–30-year maintenance window.",
    neighborhoods: ["North Fontana", "Citrus Heights", "Summit Heights", "South Fontana", "Southridge"],
    nearbyAreas: ["San Bernardino", "Ontario", "Rancho Cucamonga", "Rialto"],
    nearbySlugs: ["san-bernardino", "ontario", "rancho-cucamonga"],
    uniqueFact: "Fontana was home to the Kaiser Steel plant — once the largest steel mill west of the Mississippi — and the surrounding working-class neighborhoods developed around that industrial core contain some of the most consistently well-maintained older masonry fireplaces in the Inland Empire.",
    faqs: [
      { q: "My 1958 Fontana ranch home has used the same fireplace for decades. Is that a concern?", a: "Extended use without inspection is the most common scenario we encounter in Fontana's older neighborhoods. After decades of burning, clay tile liners accumulate significant creosote in joints and may have multiple cracks from thermal cycling. We recommend a Level 2 camera inspection as the starting point — it's the only way to know the actual condition of a long-used, never-inspected flue." },
    ],
    metaTitle: "Chimney Services in Fontana, CA | San Bernardino County | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Fontana. Inland Empire specialists for older ranch homes and modern tract housing. Request a free estimate online.",
  },
  {
    slug: "ontario",
    name: "Ontario",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "185,000",
    description: "Ontario — the Inland Empire's logistics capital, home to one of the busiest cargo airports in the US — has a downtown residential core that predates much of the surrounding suburban development. Ontario's Euclid Avenue corridor and the adjacent blocks contain 1920s–1940s homes with original masonry chimneys built during the city's citrus-farming era. The Ontario International Airport and the surrounding industrial districts are separated from residential areas by parks and buffers, and the residential neighborhoods of North Ontario and the Ontario Ranch master-planned community represent both the city's historic character and its 21st-century growth.",
    chimneyContext: "Ontario's historic downtown neighborhoods west of Euclid Avenue contain pre-war masonry comparable to Pomona's older residential stock — homes that were built during the citrus boom and have original clay tile liners and ornamental fireplace surrounds. The newer Ontario Ranch community (built 2010+) features modern direct-vent and factory-built gas fireplace systems that require entirely different maintenance protocols than the historic properties. SCAQMD applies throughout the city.",
    neighborhoods: ["Ontario Ranch", "Creekside", "Gramercy", "Euclid Corridor", "Parkside"],
    nearbyAreas: ["Fontana", "San Bernardino", "Rancho Cucamonga", "Pomona"],
    nearbySlugs: ["fontana", "san-bernardino", "rancho-cucamonga", "pomona"],
    uniqueFact: "Ontario's Euclid Avenue was once dubbed 'the most beautiful street in California' by the Pacific Electric Railway — the boulevard palms lining it also line some of the oldest surviving residential blocks in the Inland Empire, most with original masonry fireplaces.",
    faqs: [
      { q: "My Ontario home is in the Ontario Ranch development (built 2015). Does the new fireplace need inspection?", a: "New construction fireplaces should receive their first inspection at 3–5 years of use. The refractory materials, mortar joints, and liner connections in a new system settle during the initial thermal cycling years. Early inspections document baseline condition and catch small issues before they develop into larger repairs. We also verify that the installation meets current Title 24 requirements." },
    ],
    metaTitle: "Chimney Services in Ontario, CA | Inland Empire | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Ontario, CA. Inland Empire specialists. Downtown historic and Ontario Ranch modern systems. Request a free estimate online.",
  },
  {
    slug: "rancho-cucamonga",
    name: "Rancho Cucamonga",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "177,000",
    description: "Rancho Cucamonga is the Inland Empire's most affluent established city, developed primarily between 1985 and 2005 in the alluvial fan at the base of the San Gabriel Mountains' eastern end. The city's residential character is consistently upscale suburban — custom and semi-custom homes in the Etiwanda and Victoria neighborhoods, with newer developments along the mountain corridor. Winery-adjacent neighborhoods like Etiwanda Estates and the Victoria Gardens district reflect the city's heritage in the California wine country tradition. Factory-built fireplace systems dominate, and many are now reaching the 20–35-year inspection milestone.",
    chimneyContext: "Rancho Cucamonga's housing uniformity means the 1990s–2000s factory-built systems across the city share similar aging patterns — cracked refractory panels, corroded heat shields, and deteriorated damper plates are the most common service needs. The city's proximity to the San Bernardino Mountain front means cold-air drainage and Santa Ana wind events affect the northern communities (Deer Creek, Red Hill) more directly than the flatter southern neighborhoods.",
    neighborhoods: ["Etiwanda Estates", "Victoria", "Deer Creek", "Red Hill", "Northtown"],
    nearbyAreas: ["Fontana", "Ontario", "Upland", "San Bernardino"],
    nearbySlugs: ["fontana", "ontario", "san-bernardino"],
    uniqueFact: "Rancho Cucamonga's Etiwanda district was one of the first planned agricultural communities in California (1882), and the original Etiwanda Colony-era homes that survived development are among the oldest surviving residential structures in San Bernardino County — several with intact 19th-century masonry fireplaces.",
    faqs: [
      { q: "How do I know if my Rancho Cucamonga factory-built fireplace needs service?", a: "Key warning signs: visible cracks or missing sections in the refractory panels (the panels inside the firebox), rust staining on the firebox walls, a stuck or difficult damper, and any smoke entering the room during use. For systems over 20 years old, we recommend inspection regardless of visible symptoms — deterioration in the liner and heat shield areas isn't visible without opening access panels." },
    ],
    metaTitle: "Chimney Services in Rancho Cucamonga, CA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Rancho Cucamonga. Inland Empire specialists for Etiwanda, Victoria, and mountain-adjacent homes. Request a free estimate online.",
  },
  {
    slug: "victorville",
    name: "Victorville",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "High Desert",
    population: "134,000",
    description: "Victorville occupies the floor of the Victor Valley at 2,700 feet elevation in the Mojave Desert, where extreme temperature swings are the defining feature of the climate — summer highs above 108°F and winter lows regularly in the 20s and 30s. This 80°F+ daily temperature range in winter is among the most aggressive mortar-cycling conditions in California, and the combination of freezing winters, intense desert sun, and low humidity creates a uniquely punishing environment for masonry. Victorville grew rapidly as an affordable Inland Empire alternative, and its housing stock is largely factory-built from the 1990s–2010s era.",
    chimneyContext: "Victorville's high-desert winters produce freeze-thaw cycles that damage masonry mortar joints at rates comparable to Sierra Nevada foothill communities. We recommend annual inspection and crown coat sealer application every 3–4 years for all Victorville masonry systems. Factory-built systems from the 1990s expansion are reaching 30-year maintenance windows. The former George Air Force Base site (now Southern California Logistics Airport) means a portion of the housing stock near the airport is older military-era construction.",
    neighborhoods: ["Spring Valley Lake", "Mojave Ranch Estates", "Green Tree", "Baldy Mesa", "Bear Valley Road Corridor"],
    nearbyAreas: ["Hesperia", "Apple Valley", "Adelanto", "San Bernardino"],
    nearbySlugs: ["san-bernardino", "fontana"],
    uniqueFact: "Victorville's Victor Valley sits in a geographic bowl that traps cold air on winter nights — temperatures in the valley floor can be 10–15°F colder than the surrounding desert plateau, creating more severe freeze-thaw conditions than the elevation alone would suggest.",
    faqs: [
      { q: "How does the high desert climate affect chimney maintenance in Victorville?", a: "The Mojave Desert's extreme temperature swings — 30°F nights and 100°F+ days in summer — cycle masonry and metal components through thermal expansion and contraction far more aggressively than coastal California climates. Mortar joints in Victorville chimneys typically show deterioration at rates 50–75% faster than the same age system in a coastal climate. Annual inspection and preventive sealing are the most cost-effective approach." },
    ],
    metaTitle: "Chimney Services in Victorville, CA | High Desert | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Victorville. High desert specialists — Spring Valley Lake and surrounding communities. Request a free estimate online.",
  },

  // ── Santa Clara County ─────────────────────────────────────────────────
  {
    slug: "sunnyvale",
    name: "Sunnyvale",
    county: "Santa Clara County",
    countySlug: "santa-clara-county-ca",
    region: "Bay Area / Silicon Valley",
    population: "155,000",
    description: "Sunnyvale is at the geographic center of Silicon Valley, surrounded by the major tech campuses of the southern Bay Area. Its residential housing stock is dominated by 1950s–1975 ranch homes — the classic Santa Clara Valley tract housing built during the postwar aerospace and technology boom. Nearly all of these homes have original clay-tile-lined masonry chimneys, and the 1989 Loma Prieta earthquake cracked or displaced liner tiles in thousands of Santa Clara County homes, including Sunnyvale. Many of these post-earthquake cracks have never been detected because they require a camera to see.",
    chimneyContext: "Sunnyvale's postwar ranch homes represent the canonical chimney maintenance challenge of Silicon Valley: 50–70-year-old clay tile liners that have never been camera-inspected, in a seismically active region where the 1989 Loma Prieta earthquake caused widespread invisible liner damage. BAAQMD Spare the Air rules restrict wood burning on poor air quality days. Many Sunnyvale homeowners have converted to gas inserts or closed their chimneys entirely.",
    neighborhoods: ["Downtown Sunnyvale", "Raynor Park", "Columbia", "Bishop Avenue", "Cherry Chase"],
    nearbyAreas: ["Santa Clara", "San Jose", "Mountain View", "Cupertino"],
    nearbySlugs: ["san-jose", "santa-clara", "fremont"],
    uniqueFact: "Sunnyvale has one of the highest concentrations of 1960s-era ranch homes per square mile of any California city — virtually all of them built with a single masonry fireplace as the living room focal point, and very few having ever received a professional flue camera inspection.",
    faqs: [
      { q: "My Sunnyvale ranch home was built in 1963. What's the most likely chimney issue to find?", a: "The most common findings in 1960s Sunnyvale homes are: hairline cracks in clay tile liner joints from Loma Prieta and subsequent seismic events; deteriorated damper plates (often the original cast-iron units, now rusted or warped); and stage 2 creosote if the fireplace has been used regularly. A Level 2 camera inspection documents all three and guides any needed repair decisions." },
    ],
    metaTitle: "Chimney Services in Sunnyvale, CA | Silicon Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Sunnyvale. Silicon Valley postwar ranch home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "santa-clara",
    name: "Santa Clara",
    county: "Santa Clara County",
    countySlug: "santa-clara-county-ca",
    region: "Bay Area / Silicon Valley",
    population: "130,000",
    description: "Santa Clara is the geographic and historical heart of Silicon Valley — the Mission Santa Clara de Asís was established here in 1777 — and the city's residential neighborhoods reflect a layered history of development from pre-war Craftsman bungalows near the campus of Santa Clara University to 1950s–1970s ranch homes across the flatlands and newer townhome developments near Levi's Stadium. The city's diverse housing stock includes some of the oldest residential properties in the Bay Area alongside modern construction, creating a wide range of chimney service needs within a compact urban area.",
    chimneyContext: "The historic neighborhoods around Santa Clara University contain pre-1940 homes with original masonry chimneys that require careful, preservation-appropriate cleaning. The 1950s–1970s ranch home majority has classic postwar clay tile liner systems now showing age-related deterioration. BAAQMD Spare the Air restrictions apply, and gas fireplace conversions are common throughout the city. The 1989 Loma Prieta earthquake was centered only 15 miles from Santa Clara, and its effect on clay tile liners in the area was significant.",
    neighborhoods: ["University District", "Old Quad", "Central Santa Clara", "Agnew District", "Mission District"],
    nearbyAreas: ["San Jose", "Sunnyvale", "Cupertino", "Campbell"],
    nearbySlugs: ["san-jose", "sunnyvale"],
    uniqueFact: "Santa Clara's Mission Santa Clara de Asís, founded in 1777, is one of the oldest continuously operating religious structures in California — and the historic residential blocks surrounding the mission campus are among the Bay Area's most architecturally significant neighborhoods, with chimneys that date to the 1890s.",
    faqs: [
      { q: "Do older Santa Clara University neighborhood homes have special chimney requirements?", a: "The pre-1940 homes in the university district often have original masonry with lime-based mortar and, in some cases, unlined fireplace openings — a pre-standards era construction method. Before using any fireplace in these homes, a Level 2 inspection is essential. We have found completely unlined flues in early-20th-century Santa Clara homes that had been in use for decades without issue — until they weren't." },
    ],
    metaTitle: "Chimney Services in Santa Clara, CA | Silicon Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Santa Clara. University district historic and postwar ranch home specialists. Request a free estimate online.",
  },

  // ── Alameda County ─────────────────────────────────────────────────────
  {
    slug: "fremont",
    name: "Fremont",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / East Bay",
    population: "234,000",
    description: "Fremont is Alameda County's largest city, assembled in 1956 from five formerly separate communities — Niles, Mission San Jose, Centerville, Irvington, and Warm Springs. Each of these former communities retained its original character and housing stock, and today Fremont has one of the most architecturally diverse inventories of any East Bay city: original 1920s bungalows in Niles, 1940s–1950s ranch homes in Centerville and Irvington, and newer suburban and technology-industry development in Warm Springs. The 1989 Loma Prieta earthquake, centered in nearby Aptos, affected chimney liners throughout Fremont.",
    chimneyContext: "Fremont's diverse housing eras mean the city contains everything from original Craftsman-era chimneys in the Niles district to 1960s masonry systems in Centerville to 1990s factory-built fireplaces in Warm Springs. The Loma Prieta earthquake specifically affected the Mission San Jose hills, where crack patterns in clay tile liners remain common. BAAQMD Spare the Air rules apply throughout Fremont.",
    neighborhoods: ["Niles", "Mission San Jose", "Centerville", "Irvington", "Warm Springs"],
    nearbyAreas: ["Newark", "Union City", "Milpitas", "San Jose"],
    nearbySlugs: ["oakland", "hayward", "san-jose"],
    uniqueFact: "Fremont's Niles District was the birthplace of American silent film — Charlie Chaplin filmed some of his earliest work in the Niles Canyon hills — and the surviving 1910s–1920s bungalows in Niles represent the oldest residential neighborhood in what is now Fremont.",
    faqs: [
      { q: "My Fremont home is in the Mission San Jose hills. Was it affected by the 1989 earthquake?", a: "Possibly. The Mission San Jose hills sit close to the Hayward Fault and the Loma Prieta epicenter zone. Clay tile chimney liners in hill areas frequently show hairline cracks from seismic events that are invisible without a camera. If your home has not had a Level 2 inspection since 1989, we recommend scheduling one — particularly if the property has changed hands since the earthquake." },
    ],
    metaTitle: "Chimney Services in Fremont, CA | Alameda County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Fremont. Niles, Mission San Jose, and Warm Springs specialists. East Bay CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "hayward",
    name: "Hayward",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / East Bay",
    population: "162,000",
    description: "Hayward sits along the East Bay's industrial and residential corridor between Oakland and Fremont, and its housing stock reflects that working-class character — dense 1940s–1960s single-family neighborhoods on the flatlands, hillside communities rising toward Castro Valley in the east, and the bayside marshes to the west. Hayward lies directly on the Hayward Fault, one of the most seismically hazardous fault zones in California, and the combination of its older housing stock and direct fault proximity means chimney liner inspection is particularly important here. BAAQMD Spare the Air rules apply.",
    chimneyContext: "The Hayward Fault runs directly through the city's residential hillside neighborhoods — communities like Tennyson Hills and the Upper B Street area sit within a few hundred meters of fault trace segments. Microseismic events on the Hayward Fault cause cumulative clay tile liner damage that accumulates over decades without visible surface signs. We treat any Hayward property within the hill zone as high-priority for Level 2 camera inspection.",
    neighborhoods: ["Tennyson Hills", "South Hayward", "Downtown Hayward", "Mission Hills", "Harder Olmsted"],
    nearbyAreas: ["Oakland", "Fremont", "Castro Valley", "San Leandro"],
    nearbySlugs: ["oakland", "fremont", "concord"],
    uniqueFact: "Hayward sits directly above the most seismically active segment of the Hayward Fault — USGS estimates there is a 32% probability of a magnitude 6.7+ earthquake on this fault before 2043, making chimney inspection here a genuine safety priority rather than routine maintenance.",
    faqs: [
      { q: "Does living near the Hayward Fault affect my chimney safety?", a: "Yes. The Hayward Fault's microseismic activity causes gradual clay tile liner deterioration that accumulates over years without surface evidence. Unlike a single large event, this cumulative damage is only detectable with a camera. We recommend a Level 2 inspection for any Hayward hill property that hasn't been camera-inspected in the last 5 years, and annual inspection thereafter." },
    ],
    metaTitle: "Chimney Services in Hayward, CA | East Bay | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Hayward. Hayward Fault zone specialists. Tennyson Hills and East Bay communities. Request a free estimate online.",
  },

  // ── Sacramento County ──────────────────────────────────────────────────
  {
    slug: "elk-grove",
    name: "Elk Grove",
    county: "Sacramento County",
    countySlug: "sacramento-county-ca",
    region: "Central Valley / Sacramento Metro",
    population: "174,000",
    description: "Elk Grove is Sacramento County's fastest-growing city and one of California's newest major cities, incorporated in 2000 from a rapidly expanding suburban community south of Sacramento. Nearly all of Elk Grove's residential housing was built between 1985 and 2015, and the overwhelming majority of its fireplace inventory is factory-built systems installed in master-planned communities. Elk Grove's warm, dry summers and cool, foggy winters create genuine seasonal fireplace use that drives consistent demand for annual maintenance. The city's rapid growth means many homeowners are first-time fireplace owners with limited maintenance experience.",
    chimneyContext: "Elk Grove's factory-built systems are predominantly from the 1990s–2010s era — a compact window of construction that means much of the city's fireplace inventory is reaching its first major inspection milestone simultaneously. The Laguna West, Lakeside, and Stonelake communities have among the newest systems; older Elk Grove Ranch neighborhoods have the oldest stock. Sacramento's SMAQMD No-Burn days apply, restricting wood burning on poor air quality winter days.",
    neighborhoods: ["Laguna West", "Lakeside", "Stonelake", "Elk Grove Ranch", "Harbour Pointe"],
    nearbyAreas: ["Sacramento", "Folsom", "Rancho Cordova", "Galt"],
    nearbySlugs: ["sacramento"],
    uniqueFact: "Elk Grove became California's fastest-growing city by population between 2000 and 2010, and that growth rate produced a fireplace inventory that is among the most temporally concentrated of any major California city — most systems are within a 15-year installation window.",
    faqs: [
      { q: "My Elk Grove home was built in 2001. When does the factory-built fireplace need its first inspection?", a: "We recommend the first formal inspection at 15–20 years of use, which puts 2001-built homes right in the inspection window now. Factory-built systems at this age commonly show the first signs of refractory panel deterioration and damper plate oxidation. A written Level 1 inspection gives you the current condition and a maintenance baseline." },
    ],
    metaTitle: "Chimney Services in Elk Grove, CA | Sacramento County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Elk Grove. Sacramento suburb specialists for 1990s–2010s factory-built systems. Request a free estimate online.",
  },

  // ── Contra Costa County ────────────────────────────────────────────────
  {
    slug: "concord",
    name: "Concord",
    county: "Contra Costa County",
    countySlug: "contra-costa-county-ca",
    region: "Bay Area / East Bay",
    population: "129,000",
    description: "Concord is Contra Costa County's largest city, a central East Bay community with a housing stock that spans 1950s–1970s ranch homes in the central flatlands to custom homes in the Concord Hills and Diablo foothills to the north. The city's residential neighborhoods are established and affordable by Bay Area standards, attracting families who commute to San Francisco or Oakland via BART. Concord sits east of the Diablo Range where the inland heat is more pronounced than coastal Bay Area communities, and the city's winter fog and cold nights drive meaningful fireplace use from November through March.",
    chimneyContext: "Concord's postwar ranch home core — built largely between 1950 and 1975 — contains clay tile liner systems approaching 50–70 years of age. The Hayward Fault and Concord Fault system run through the hills north and east of the city, and their microseismic activity cumulatively damages clay tile liners in hill-adjacent properties. BAAQMD Spare the Air restrictions apply on poor air quality winter days.",
    neighborhoods: ["Concord Hills", "Clayton Valley", "Monument Corridor", "Ygnacio Valley", "Sun Terrace"],
    nearbyAreas: ["Walnut Creek", "Antioch", "Pleasant Hill", "Martinez"],
    nearbySlugs: ["hayward", "fremont"],
    uniqueFact: "Concord's Monument Boulevard corridor — one of the East Bay's most distinctive mid-century commercial strips — is flanked by the residential neighborhoods with the highest concentration of 1960s original masonry chimneys in Contra Costa County.",
    faqs: [
      { q: "Does the Concord Fault affect chimney liners in the city?", a: "The Concord Fault and its associated microseismic activity create gradual, cumulative clay tile liner damage in properties near the fault trace — primarily in the Concord Hills and Clayton Valley areas. This damage is only detectable with a camera inspection. We recommend Level 2 inspections for Concord hill properties within 2 miles of any mapped fault trace." },
    ],
    metaTitle: "Chimney Services in Concord, CA | Contra Costa County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Concord. East Bay Contra Costa County specialists. Request a free estimate online.",
  },

  // ── Ventura County ─────────────────────────────────────────────────────
  {
    slug: "oxnard",
    name: "Oxnard",
    county: "Ventura County",
    countySlug: "ventura-county-ca",
    region: "Southern California / Central Coast",
    population: "204,000",
    description: "Oxnard is Ventura County's most populous city, an agricultural and industrial community on California's southern Central Coast with a residential housing stock as diverse as its economy. The city's harbor district and Silver Strand communities have direct Pacific Ocean exposure, while inland Oxnard neighborhoods experience the warmer temperatures typical of the Oxnard Plain agricultural zone. Oxnard's housing ranges from 1950s–1970s suburban construction in central neighborhoods to newer developments along the north Patterson Road corridor, with a significant proportion of working-class and multi-family housing throughout.",
    chimneyContext: "Oxnard's coastal communities — particularly those near Channel Islands Harbor and Hollywood Beach — experience marine air exposure that accelerates metal chimney component corrosion at a rate comparable to the most exposed LA coastal neighborhoods. The SCAQMD curtailment program applies to Ventura County. Older Oxnard neighborhoods near downtown have 1950s–1970s masonry systems that are in the prime inspection window for their age.",
    neighborhoods: ["Silver Strand", "Hollywood Beach", "River Ridge", "Camarillo border corridor", "North Oxnard"],
    nearbyAreas: ["Ventura", "Camarillo", "Port Hueneme", "Santa Paula"],
    nearbySlugs: ["thousand-oaks", "simi-valley"],
    uniqueFact: "Oxnard's Channel Islands Harbor is California's largest man-made harbor for recreational boating, and the residential communities surrounding it experience some of the highest salt-air corrosion rates in Ventura County — comparable to Marina del Rey or Newport Beach.",
    faqs: [
      { q: "How does Oxnard's coastal exposure affect my chimney compared to inland Ventura County?", a: "Coastal Oxnard's proximity to Channel Islands Harbor and the Pacific Ocean creates marine-grade salt-air conditions that corrode standard stainless components at double the rate of inland communities like Thousand Oaks. Chimney caps, chase covers, and damper assemblies in harbor-adjacent Oxnard properties should be inspected annually, and we recommend marine-grade 316L stainless for any replacement components." },
    ],
    metaTitle: "Chimney Services in Oxnard, CA | Ventura County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Oxnard. Coastal and agricultural community specialists. Ventura County. Request a free estimate online.",
  },
  {
    slug: "thousand-oaks",
    name: "Thousand Oaks",
    county: "Ventura County",
    countySlug: "ventura-county-ca",
    region: "Southern California / Conejo Valley",
    population: "127,000",
    description: "Thousand Oaks is one of the most consistent high-quality suburban communities in Southern California, a planned city in the Conejo Valley at the border of LA and Ventura counties. Its housing stock is primarily 1970s–1990s custom and semi-custom single-family homes on generous lots, with more recent hillside estates in the northern reaches of the city toward Moorpark. The 2018 Woolsey Fire burned through the eastern portion of the city, destroying hundreds of homes in the neighborhoods along Potrero Road and in Conejo Valley's interface with the Santa Monica Mountains National Recreation Area.",
    chimneyContext: "Thousand Oaks properties along the Woolsey Fire perimeter — particularly in the eastern Conejo Valley, East Hills, and Wildwood communities — were either directly affected or sit adjacent to fire-impact zones. Many post-fire rebuilds in these areas installed new fireplace systems that are now 5–6 years old and due for their first formal inspection. The Camarillo Gap wind corridor between the Conejo and Santa Rosa Hills channels Santa Ana winds into the city at elevated velocities during autumn events.",
    neighborhoods: ["Wildwood", "East Hills", "Conejo Valley Estates", "Newbury Park", "North Ranch"],
    nearbyAreas: ["Simi Valley", "Camarillo", "Agoura Hills", "Westlake Village"],
    nearbySlugs: ["simi-valley", "oxnard"],
    uniqueFact: "The 2018 Woolsey Fire destroyed 1,643 structures in LA and Ventura counties, with a significant concentration in the Thousand Oaks–Westlake Village corridor. Post-fire rebuilds in this area now represent the largest cluster of new fireplace installations in a single area in Southern California.",
    faqs: [
      { q: "My Thousand Oaks home was rebuilt after Woolsey. When should I first inspect the new chimney?", a: "First inspection at 3–5 years of active use. New construction chimney systems go through an initial thermal cycling period where refractory mortar, liner joints, and refractory panels micro-settle. Inspecting at this window catches any issues before they develop — and establishes a documented baseline for the new system, which is important for insurance documentation in a fire-history zone." },
      { q: "Does the Camarillo Gap wind affect chimneys in Thousand Oaks?", a: "Yes. The Camarillo Gap is a known wind acceleration corridor between the Santa Rosa Hills and the Santa Monica Mountains. During Santa Ana events, winds through this gap reach speeds that can dislodge poorly secured caps and significantly increase ember transport risk from uncapped or inadequately screened flues. We recommend spark-arrestor caps with proper set-screw attachment for all Thousand Oaks properties." },
    ],
    metaTitle: "Chimney Services in Thousand Oaks, CA | Conejo Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Thousand Oaks. Post-Woolsey Fire rebuild specialists. Conejo Valley CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "simi-valley",
    name: "Simi Valley",
    county: "Ventura County",
    countySlug: "ventura-county-ca",
    region: "Southern California",
    population: "126,000",
    description: "Simi Valley is a predominantly suburban community in Ventura County at the western end of the San Fernando Valley, best known as the home of the Ronald Reagan Presidential Library. The city's residential development was rapid between 1965 and 1990, and the resulting housing stock is mostly 1970s–1990s single-family tract homes with factory-built fireplaces — systems now in the 25–50-year range. Simi Valley's inland location gives it more pronounced temperature swings than coastal Ventura communities, and the city sits at the western end of the Santa Ana wind corridor from the Simi Hills.",
    chimneyContext: "Simi Valley's dominant housing era (1975–1990) makes factory-built fireplace inspection the primary service need — particularly refractory panel assessment, damper condition, and heat shield integrity for systems that are 30–50 years old. The Simi Hills and Rocky Peak area north of the city are in a high fire-hazard severity zone, and the annual Santa Ana events that affect this corridor make spark-arrestor cap maintenance directly relevant to wildfire risk.",
    neighborhoods: ["Wood Ranch", "Berylwood", "Country Club Estates", "Sycamore Estates", "Tapo Canyon"],
    nearbyAreas: ["Moorpark", "Thousand Oaks", "Los Angeles", "Chatsworth"],
    nearbySlugs: ["thousand-oaks", "oxnard", "los-angeles"],
    uniqueFact: "Simi Valley holds the distinction of having one of California's most visited presidential libraries — the Reagan Library receives over 300,000 visitors annually — but the surrounding residential neighborhoods are less distinguished for their chimney maintenance rates, with factory-built systems commonly running past recommended inspection intervals.",
    faqs: [
      { q: "My 1978 Simi Valley home has the original fireplace. Is the factory-built system still serviceable?", a: "Possibly — but at 45+ years old, a factory-built system is significantly past its original design life. The primary concerns at this age are: cracked or missing refractory panels, corroded heat shield, seized or broken damper, and degraded liner materials. We inspect and assess whether repair is feasible or whether the system has reached end-of-life and needs replacement." },
    ],
    metaTitle: "Chimney Services in Simi Valley, CA | Ventura County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Simi Valley. Ventura County specialists for 1970s–1990s factory-built systems. Request a free estimate online.",
  },

  // ── Monterey County ────────────────────────────────────────────────────
  {
    slug: "salinas",
    name: "Salinas",
    county: "Monterey County",
    countySlug: "monterey-county-ca",
    region: "Central Coast",
    population: "166,000",
    description: "Salinas is Monterey County's largest city and the heart of one of the most productive agricultural valleys in the world. The Salinas Valley's unique marine-cooled climate produces consistent fog and low overcast that keeps average temperatures mild year-round — and Salinas experiences some of the coolest summer temperatures of any California Valley city. This reliable coolness means fireplace use is consistent throughout the heating season from October through April, and the agricultural economy means many Salinas homeowners have working-class backgrounds with a pragmatic approach to home maintenance.",
    chimneyContext: "Salinas's older neighborhoods — Alisal, East Salinas, and the historic downtown district — contain 1940s–1960s housing with original clay tile masonry chimneys that in many cases have been in continuous use for 60+ years. The city's agricultural setting means a higher proportion of wood-burning use than comparable coastal cities, and the persistent Salinas Valley fog deposits moisture on masonry year-round rather than seasonally.",
    neighborhoods: ["Alisal", "East Salinas", "Creekbridge", "North Salinas", "Intergarrison"],
    nearbyAreas: ["Monterey", "Santa Cruz", "Watsonville", "Carmel"],
    nearbySlugs: [],
    uniqueFact: "Salinas is the birthplace of Nobel laureate John Steinbeck, whose family home on Central Avenue contains one of the best-preserved original early-20th-century Craftsman fireplace surrounds in the Central Coast region.",
    faqs: [
      { q: "Does Salinas's agricultural setting affect chimney maintenance differently than suburban California?", a: "Yes. The Salinas Valley's persistent marine fog creates year-round moisture exposure for masonry, not just during rain events. Agricultural workers and local residents also burn wood at higher rates than coastal urban communities, meaning creosote deposits accumulate faster. We recommend annual cleaning for Salinas properties that burn wood regularly and semi-annual cleaning for households burning more than one cord per season." },
    ],
    metaTitle: "Chimney Services in Salinas, CA | Monterey County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Salinas. Monterey County and Central Coast specialists. Request a free estimate online.",
  },

  // ── Placer County ──────────────────────────────────────────────────────
  {
    slug: "roseville",
    name: "Roseville",
    county: "Placer County",
    countySlug: "placer-county-ca",
    region: "Sierra Foothills / Sacramento Metro",
    population: "148,000",
    description: "Roseville is the largest city in Placer County and one of the fastest-growing cities in California over the past 20 years, driven by its position as Sacramento's most desirable suburban destination. The city's housing stock is overwhelmingly post-1990 master-planned development — Westpark, Morgan Creek, and Sierra Vista communities built during the 2000s–2010s growth wave — with factory-built fireplace systems that are now reaching their first major maintenance milestone. Roseville sits at the foothills edge of the Sacramento Valley where winters are colder than Sacramento proper and where genuine frost and occasional snow make fireplaces a comfort-heating fixture rather than decorative.",
    chimneyContext: "Roseville's concentrated post-1990 construction era means the city has a synchronized factory-built fireplace inventory — a large proportion of systems installed within the same 15-year window, now all approaching the 20–30-year inspection threshold together. Foothill winters include genuine frost cycles that, while less severe than the higher Sierra elevations, accelerate mortar deterioration at rates above the Sacramento Valley floor. The SMAQMD No-Burn program applies on poor air quality days.",
    neighborhoods: ["Westpark", "Morgan Creek", "Sierra Vista", "Diamond Oaks", "Sun Valley"],
    nearbyAreas: ["Sacramento", "Folsom", "Auburn", "Lincoln"],
    nearbySlugs: ["sacramento"],
    uniqueFact: "Roseville's Westpark community — one of the largest planned community developments in Northern California — had more than 3,000 homes built between 2006 and 2012, creating one of the most concentrated single-vintage factory-built fireplace inventories in the state.",
    faqs: [
      { q: "My Roseville home was built in 2008. Is it too early to have the chimney inspected?", a: "Not at all. A 2008 factory-built system is 17 years old — the appropriate window for a first formal inspection. Refractory panels in systems this age can show early cracking; damper plates can begin to pit; and gas fireplaces may develop small draft issues as the appliance connections age. An inspection now establishes a baseline and catches any issues before they become expensive." },
    ],
    metaTitle: "Chimney Services in Roseville, CA | Placer County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Roseville. Placer County Sierra foothills specialists. Request a free estimate online.",
  },

  // ── No county page yet: Tulare County ─────────────────────────────────
  {
    slug: "visalia",
    name: "Visalia",
    county: "Tulare County",
    region: "Central Valley",
    population: "141,000",
    description: "Visalia is the county seat of Tulare County and the cultural hub of California's southern San Joaquin Valley, an agricultural city that serves the surrounding almond, citrus, and grape farming communities. The city's residential housing spans the Central Valley's characteristic mix — older downtown neighborhoods with 1920s–1950s Craftsman and Period Revival bungalows along the College of the Sequoias corridor, and postwar suburban expansion filling in the surrounding flatlands. Visalia experiences the Central Valley's full thermal range: genuine winter cold (lows in the 30s), persistent Tule fog from December through February, and summer heat exceeding 105°F.",
    chimneyContext: "Visalia's Tule fog season creates the same persistent masonry moisture exposure seen in Fresno and Bakersfield — weeks of saturated ground-level fog that infiltrates mortar joints and accelerates deterioration. The SJVAPCD No-Burn program applies on high-pollution days during the winter fog inversions. Downtown Visalia's older neighborhoods have clay tile masonry chimneys that in many cases have never been camera-inspected despite 60–80 years of continuous use.",
    neighborhoods: ["College of the Sequoias District", "West Visalia", "Riverway", "Ben Maddox", "Mooney Grove"],
    nearbyAreas: ["Fresno", "Tulare", "Hanford", "Porterville"],
    nearbySlugs: ["fresno", "bakersfield"],
    uniqueFact: "Visalia has the distinction of being the only major California city not in a coastal county that is also the gateway to a national park — Sequoia National Park begins 45 minutes east, and many Visalia residents have secondary properties in the nearby foothill communities where wood-burning is the primary heat source.",
    faqs: [
      { q: "Does the SJVAPCD restrict wood burning in Visalia?", a: "Yes. The San Joaquin Valley Air Pollution Control District issues No-Burn advisories throughout Tulare County, including Visalia, on winter high-pollution days — typically from October through February. The dense winter fog inversions that give Visalia some of the state's worst winter air quality are the direct reason for these restrictions. Gas fireplace inserts that meet SJVAPCD emission standards are generally exempt." },
    ],
    metaTitle: "Chimney Services in Visalia, CA | Tulare County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Visalia. Central Valley and Tulare County specialists. Request a free estimate online.",
  },

  // ── No county page yet: Solano County ─────────────────────────────────
  {
    slug: "vallejo",
    name: "Vallejo",
    county: "Solano County",
    region: "Bay Area / North Bay",
    population: "122,000",
    description: "Vallejo sits at the northern tip of San Pablo Bay in Solano County, a historically significant naval city that was twice the capital of California (1852 and 1853) and later home to Mare Island Naval Shipyard — one of the US Navy's most important Pacific facilities until its closure in 1996. The city's residential neighborhoods reflect this long history: Victorian-era homes in the Stony Point and downtown corridors from the 1880s–1910s; Navy-built housing on and around the former Mare Island complex; and postwar suburban development throughout the north and west. Vallejo's Bay position provides marine air moderation, keeping temperatures milder than the inland Solano County communities.",
    chimneyContext: "Vallejo's Victorian and early-20th-century housing stock — one of the most historically significant collections in the North Bay — contains original masonry chimneys that in many cases predate clay tile liner requirements. The former Mare Island housing (now private) contains 1940s–1950s military-built chimneys with construction standards from that era. BAAQMD Spare the Air rules apply on winter high-pollution days.",
    neighborhoods: ["Downtown Vallejo", "Stony Point", "Mare Island", "Hidden Valley", "Curtola Parkway"],
    nearbyAreas: ["Benicia", "Napa", "Fairfield", "American Canyon"],
    nearbySlugs: [],
    uniqueFact: "Vallejo's downtown contains the largest concentration of Italianate Victorian commercial and residential architecture remaining intact in the North Bay — a legacy of its two stints as California state capital that gives it a historical chimney inventory rivaling much larger Bay Area cities.",
    faqs: [
      { q: "My Vallejo Victorian from 1895 has been converted to gas logs. Is it safe to use?", a: "A gas conversion in a pre-1900 masonry fireplace requires verification that the existing flue dimensions and draft characteristics support gas combustion safely. Victorian-era chimneys were designed for wood combustion, and gas produces different draft patterns and moisture levels. We inspect the conversion and provide a written assessment of whether the existing masonry flue can safely serve the gas appliance." },
    ],
    metaTitle: "Chimney Services in Vallejo, CA | Solano County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Vallejo. Victorian and historic fireplace specialists. Solano County North Bay. Request a free estimate online.",
  },

  // ─── Step 4 Part A: cities 1–25 ──────────────────────────────────────────

  // ── Alameda County ─────────────────────────────────────────────────────────
  {
    slug: "berkeley",
    name: "Berkeley",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / East Bay",
    population: "121,000",
    description:
      "Berkeley's residential neighborhoods sit at the intersection of Bay Area history and genuine wildfire risk — a combination that makes chimney maintenance here more consequential than in most California cities. The flatlands below Telegraph Avenue contain dense Victorian and Craftsman housing from the 1890s through 1920s, built rapidly after the 1906 San Francisco earthquake brought an influx of displaced residents. The Berkeley Hills rise sharply above, with hillside homes that sit directly in the East Bay Hills Fire Hazard Severity Zone — the same terrain that saw catastrophic fires in 1923 and 1991. The BAAQMD's Spare the Air program restricts wood burning county-wide on poor air-quality days.",
    chimneyContext:
      "Berkeley's pre-1930 flatland homes frequently have original masonry fireplaces with lime-based mortar and, in some cases, unlined flues built before clay tile liner requirements. The hillside homes above Grizzly Peak Boulevard face the combined risk of Hayward Fault proximity and direct wildfire exposure — both of which require annual chimney inspection and a properly installed spark-arrestor cap. The 1991 Tunnel Fire, which started in Oakland Hills just south of Berkeley, burned structures within Berkeley's jurisdiction as well.",
    neighborhoods: ["Elmwood", "Rockridge", "Claremont", "North Berkeley Hills", "Southside", "Albany Border"],
    nearbyAreas: ["Oakland", "Albany", "Richmond", "El Cerrito"],
    nearbySlugs: ["oakland", "richmond", "fremont", "hayward"],
    uniqueFact:
      "The Berkeley Hills sit in the same East Bay ridge-and-canyon terrain that channeled the 1991 fire — fire behavior in this geography is well-documented, and chimney spark emission from uncapped flues is specifically cited in post-fire analysis as a structure-to-structure ignition mechanism.",
    faqs: [
      { q: "My Berkeley Craftsman from 1912 has an ornamental fireplace. Do I need to inspect it before use?", a: "Yes — and we'd recommend it even if you don't plan to use it. Pre-1920 Berkeley homes often have unlined masonry fireboxes built before clay tile liner standards existed. Using these without inspection is a carbon monoxide risk. We perform a Level 2 camera inspection and provide a written assessment of whether the system can safely be operated, and what would be required to bring it into code-compliant condition." },
      { q: "Does living in the Berkeley Hills mean I need more frequent chimney service?", a: "Annual inspection is the minimum for all properties, but Berkeley Hills homes in the high fire-hazard zone benefit from a brief spring check of the spark-arrestor cap mesh — to verify the screen is intact and the cap is secured. Diablo wind events that affect the hills in autumn create the conditions most dangerous for chimney spark emission, so entering fire season with a confirmed, intact cap matters here more than in flatland neighborhoods." },
    ],
    metaTitle: "Chimney Services in Berkeley, CA | East Bay | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Berkeley. Victorian flatland and Berkeley Hills wildfire-zone specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "fairfield",
    name: "Fairfield",
    county: "Solano County",
    region: "Bay Area / North Bay",
    population: "120,000",
    description:
      "Fairfield is the seat of Solano County and home to Travis Air Force Base — the largest air mobility wing in the US Air Force — which has shaped the city's housing stock and community character for nearly 80 years. The residential areas surrounding the base include 1940s–1960s military-era housing alongside civilian suburban development that expanded through the 1990s. Fairfield sits in the inland Solano County corridor between the Bay Area and Sacramento, where summers are genuinely hot (100°F+ days are common) and winters are cold enough for consistent fireplace use from November through March. The delta breezes that funnel through the Carquinez Strait cool the city in evenings but add moisture to exposed masonry.",
    chimneyContext:
      "Fairfield's military housing stock from the 1950s–1960s includes a significant number of original masonry chimney systems built to federal construction standards of that era — which predate modern liner requirements. Many of these homes have changed hands multiple times as military families rotated through, and deferred chimney maintenance is common in the rental market. Civilian neighborhoods from the 1980s–1990s have factory-built systems now reaching their key inspection window. No Solano County county page exists — city pages here link to the California hub.",
    neighborhoods: ["Travis Base adjacency", "Cordelia", "Green Valley", "Rancho Solano", "Suisun Valley"],
    nearbyAreas: ["Vacaville", "Napa", "Vallejo", "Sacramento"],
    nearbySlugs: ["vallejo", "sacramento"],
    uniqueFact:
      "Travis Air Force Base processes more cargo tonnage than any other military installation on the West Coast, and the adjacent residential communities have a higher-than-average proportion of rental homes — where chimney maintenance tends to be deferred between military-family tenants.",
    faqs: [
      { q: "My Fairfield home was built in 1958 as military housing. What chimney service does it need?", a: "Federal construction-era chimneys from the 1950s typically have original clay tile liner systems, cast-iron damper plates, and no spark-arrestor caps — all of which should be inspected and assessed. We perform a Level 2 camera inspection of the full flue and provide a written report. These older systems often have deteriorated damper seals that allow cold air infiltration and occasional animal nesting." },
    ],
    metaTitle: "Chimney Services in Fairfield, CA | Solano County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Fairfield. Solano County specialists serving Travis AFB communities and civilian neighborhoods. Request a free estimate online.",
  },

  // ── San Diego County ───────────────────────────────────────────────────────
  {
    slug: "carlsbad",
    name: "Carlsbad",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California / Coastal",
    population: "115,000",
    description:
      "Carlsbad occupies five miles of Pacific coastline in northern San Diego County — a coastal community defined by flowers (the Carlsbad Flower Fields), Legoland, and a housing stock that ranges from 1960s beach bungalows near Carlsbad Village to newer master-planned communities like Aviara, La Costa, and Bressi Ranch. The city's consistent marine air makes it one of the more pleasant climates in California, but that same ocean exposure creates year-round salt-air corrosion of exposed metal chimney components. Newer Carlsbad developments from the 1990s–2010s are almost exclusively factory-built fireplace systems, while the older coastal neighborhoods near the lagoons have masonry systems from the 1960s–1970s.",
    chimneyContext:
      "Carlsbad's coastal communities within two miles of Batiquitos Lagoon, Agua Hedionda Lagoon, and the Pacific consistently show accelerated corrosion of standard 304-grade stainless chimney components. We recommend marine-grade 316L stainless for any cap or chase cover replacement in these zones. The city's newer HOA communities in Aviara and La Costa also have specific architectural standards for chimney appearance that we work within.",
    neighborhoods: ["Carlsbad Village", "Aviara", "La Costa", "Bressi Ranch", "Calavera Hills", "Barrio"],
    nearbyAreas: ["Oceanside", "Vista", "San Marcos", "Encinitas"],
    nearbySlugs: ["oceanside", "vista", "san-marcos", "escondido"],
    uniqueFact:
      "Carlsbad's Flower Fields — 50 acres of Giant Tecolote Ranunculus that bloom each spring — attract 250,000+ visitors annually, but the adjacent residential communities along Palomar Airport Road experience an elevated marine moisture environment year-round that measurably shortens the service life of standard chimney hardware.",
    faqs: [
      { q: "How often should I inspect my chimney in Carlsbad given the ocean air?", a: "Annual inspection is the standard recommendation, but Carlsbad properties within a mile of the coast or any lagoon should also have metal components — cap, damper plate, and chase cover — checked in the spring for early corrosion. Salt-air pitting on 304 stainless can begin within 3–5 years. Catching surface corrosion before it perforates a cap or chase cover prevents water infiltration and costlier repairs." },
      { q: "My Carlsbad home is in an HOA. Can you meet their chimney cap appearance requirements?", a: "Yes. We carry period-appropriate and profile-neutral cap styles that conform to most San Diego County HOA architectural standards. For communities with specific manufacturer requirements, we can source approved parts. We provide the inspection report in the format most HOAs require for annual compliance documentation." },
    ],
    metaTitle: "Chimney Services in Carlsbad, CA | North San Diego County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Carlsbad. Coastal and HOA community specialists. Aviara, La Costa, and Carlsbad Village. Request a free estimate online.",
  },
  {
    slug: "el-cajon",
    name: "El Cajon",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California / Inland",
    population: "102,000",
    description:
      "El Cajon sits in a basin-shaped valley in San Diego's East County, hemmed in by hills and mesas that amplify summer heat and create one of the warmer inland microclimates in the county. The city has a large Middle Eastern immigrant community — particularly Chaldean and Iraqi — and a diverse residential stock that spans downtown-adjacent 1940s–1960s single-family homes to newer suburban development in the Fletcher Hills and Bostonia neighborhoods. El Cajon and the surrounding East County communities sit in a designated high fire-hazard area — the Cedar Fire of 2003, which killed 15 people and destroyed 2,820 homes across East County, burned through communities directly adjacent to El Cajon.",
    chimneyContext:
      "El Cajon's inland basin position means it receives less marine moderation than coastal San Diego, with genuine summer heat exceeding 100°F and cold-enough winters to drive fireplace use regularly. The fire-hazard designation throughout East County makes spark-arrestor caps not just recommended but specifically cited in San Diego County Fire Authority guidelines for any property near open brush or hillside terrain. Older El Cajon neighborhoods have 1950s–1970s masonry chimneys in similar condition to comparable-era homes in Riverside or Pomona.",
    neighborhoods: ["Fletcher Hills", "Bostonia", "Rancho San Diego", "Crest", "Harbison Canyon"],
    nearbyAreas: ["Santee", "La Mesa", "San Diego", "Lakeside"],
    nearbySlugs: ["san-diego", "escondido", "chula-vista", "carlsbad"],
    uniqueFact:
      "El Cajon's valley geography creates a natural bowl that traps heat in summer — the city regularly records temperatures 15–20°F higher than coastal San Diego on hot days, making it one of the warmest inhabited locations in San Diego County and the most thermally stressed environment for masonry mortar joints in the region.",
    faqs: [
      { q: "My El Cajon home is near open hills. What chimney precautions apply?", a: "Properties in El Cajon adjacent to hillside brush — particularly in Bostonia, Crest, and Harbison Canyon — are in or near the San Diego County Fire Authority's designated high fire-hazard zone. A 5/8-inch mesh spark-arrestor cap is required under the California Building Code for these locations, and annual inspection to verify the mesh is intact and the flue is clear of creosote and debris is the standard recommendation. We provide written documentation of cap compliance that satisfies the county's fire safety requirements." },
    ],
    metaTitle: "Chimney Services in El Cajon, CA | East County San Diego | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in El Cajon. East San Diego County wildfire-zone specialists. Fire-compliant spark-arrestor caps. Request a free estimate online.",
  },
  {
    slug: "vista",
    name: "Vista",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California / North County",
    population: "101,000",
    description:
      "Vista occupies rolling inland hills in northern San Diego County, between the coastal communities of Carlsbad and Oceanside and the inland cities of San Marcos and Escondido. The city's residential character is predominantly 1960s–1980s single-family suburban, with agricultural heritage visible in the avocado groves and flower farms that still dot the eastern areas. Vista's inland position gives it more temperature variation than coastal North County — hot, dry summers that occasionally see triple-digit heat and winters cold enough for consistent fireplace use. The city's lower elevation compared to Escondido's foothills means it falls between the marine-influence zone and the full inland heat zone.",
    chimneyContext:
      "Vista's 1960s–1970s masonry chimneys are typical of North County suburban construction from that era — clay tile liner systems now approaching 50–60 years old, many never camera-inspected. The city's avocado and citrus agricultural heritage means a higher-than-average proportion of residents who burn wood from their own pruning and agricultural waste, which produces creosote at a higher rate than seasoned commercial firewood. SJVAPCD rules don't apply here — Vista falls under SDAPCD, which has its own curtailment protocols.",
    neighborhoods: ["Shadowridge", "Rancho Minerva", "Buena Creek", "East Vista", "South Vista"],
    nearbyAreas: ["San Marcos", "Oceanside", "Carlsbad", "Escondido"],
    nearbySlugs: ["oceanside", "carlsbad", "escondido", "san-marcos"],
    uniqueFact:
      "Vista's agricultural roots mean a significant portion of residents have access to on-site wood from avocado, citrus, and ornamental pruning — wood that is typically green and deposits creosote at substantially higher rates than kiln-dried firewood.",
    faqs: [
      { q: "Is burning wood from our avocado trees safe in our Vista fireplace?", a: "Avocado wood is dense and burns reasonably well when properly seasoned — but 'properly seasoned' means a minimum of 12 months of split, stacked, covered drying. Fresh-cut avocado wood has a very high moisture content that produces heavy creosote deposits. If you've been burning green or partially seasoned agricultural wood, a creosote inspection and cleaning is warranted regardless of how recently you last cleaned." },
    ],
    metaTitle: "Chimney Services in Vista, CA | North San Diego County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Vista. North County inland specialists serving Shadowridge and surrounding neighborhoods. Request a free estimate online.",
  },

  // ── Los Angeles County ─────────────────────────────────────────────────────
  {
    slug: "el-monte",
    name: "El Monte",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Gabriel Valley",
    population: "113,000",
    description:
      "El Monte occupies the eastern end of the San Gabriel Valley where the 10 and 605 freeways converge, a densely settled industrial and residential city that has served as a gateway community for successive waves of California immigrants since the 1920s. The residential neighborhoods south and west of the civic center contain a high proportion of 1930s–1950s working-class bungalows and ranch homes — some of the oldest continuously occupied housing stock in the San Gabriel Valley. These properties carry original masonry chimneys from a period when liner inspection was not standard and construction quality varied widely. El Monte also has significant 1960s–1970s residential development, including factory-built fireplace systems now well past their first maintenance milestone.",
    chimneyContext:
      "Pre-1950 masonry in El Monte's older residential blocks frequently includes soft brick and lime-based mortar that requires careful handling during cleaning — aggressive wire brush techniques or high-pressure washing can cause permanent surface damage. The 1994 Northridge earthquake affected clay tile liners throughout the San Gabriel Valley, and many El Monte homes have never received a post-earthquake camera inspection. SCAQMD wood-burning curtailment applies on Spare the Air days.",
    neighborhoods: ["South El Monte", "North El Monte", "Garvey Corridor", "Potrero Heights", "Norwood"],
    nearbyAreas: ["Rosemead", "Baldwin Park", "West Covina", "Alhambra"],
    nearbySlugs: ["west-covina", "alhambra", "pomona", "los-angeles"],
    uniqueFact:
      "El Monte was the western terminus of the Santa Fe Trail — the original 'End of the Trail' settlement — and its oldest residential neighborhoods in the Cooke School and Lower Azusa Road corridors contain some of the earliest surviving residential construction in the San Gabriel Valley.",
    faqs: [
      { q: "My 1940s El Monte home has never had a chimney camera inspection. What should I expect?", a: "In El Monte's older bungalow stock, a Level 2 camera inspection typically finds one or more of: deteriorated mortar joints in the clay tile liner, a corroded or failed original cast-iron damper, animal nesting material in an unused flue, and — in roughly a third of pre-1940 properties — sections of unlined masonry that don't meet any post-1950 standard. The inspection takes about 90 minutes and includes a written report with photos." },
    ],
    metaTitle: "Chimney Services in El Monte, CA | San Gabriel Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in El Monte. Older San Gabriel Valley bungalow specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "downey",
    name: "Downey",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / Southeast LA",
    population: "111,000",
    description:
      "Downey is one of the most well-maintained postwar suburban cities in Los Angeles County — a community that prided itself on civic investment even as surrounding Southeast LA cities faced economic pressure. The residential neighborhoods along Paramount Boulevard and Florence Avenue are predominantly 1950s–1960s single-family homes with original masonry chimneys, kept in above-average condition by a homeowner base that values property maintenance. Downey was the birthplace of the Space Shuttle program at North American Aviation's facility on Lakewood Boulevard, and the city's working- and middle-class aerospace heritage runs through its residential character. The oldest surviving McDonald's restaurant in the world (from 1953) still operates on Lakewood Boulevard.",
    chimneyContext:
      "Downey's 1950s–1960s residential stock has clay tile liner systems now approaching 60–70 years old — the natural end of many liners' service life. The 1994 Northridge earthquake caused liner cracking throughout Southeast LA County that remains unrepaired in many properties. Downey is also home to a significant proportion of homeowners who have lived in the same property for decades, which correlates with both high maintenance standards and, occasionally, very long periods of use without a formal camera inspection.",
    neighborhoods: ["Downey Landing", "Stonewood", "Old Town Downey", "North Downey", "South Downey"],
    nearbyAreas: ["Norwalk", "Bellflower", "Paramount", "South Gate"],
    nearbySlugs: ["norwalk", "bellflower", "compton", "los-angeles"],
    uniqueFact:
      "Downey's civic identity as 'the city that built the space shuttle' — North American Rockwell manufactured the original fleet at the Lakewood/Imperial intersection — correlates with a homeowner culture that tends toward technical diligence, including above-average rates of scheduled chimney maintenance compared to neighboring Southeast LA communities.",
    faqs: [
      { q: "My 1957 Downey home has had the same fireplace since it was built. What's the inspection process?", a: "For a 70-year-old system, we begin with a visual assessment of the firebox, damper, and crown from ground level, then perform a full camera scan of the flue from the top down. In Downey's 1950s stock, we commonly find: clay tile joints with deteriorated mortar, a corroded original damper plate, and hairline cracks from the 1994 Northridge earthquake. The written report documents all findings with photos and prioritizes any safety-critical repairs." },
    ],
    metaTitle: "Chimney Services in Downey, CA | Southeast LA County | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Downey. Southeast LA postwar home specialists. CSIA-certified technicians. Request a free estimate online.",
  },
  {
    slug: "inglewood",
    name: "Inglewood",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / South Bay",
    population: "109,000",
    description:
      "Inglewood has undergone a significant transformation with the opening of SoFi Stadium and the Intuit Dome, but its residential neighborhoods retain the character of one of LA County's most established postwar working-class communities. The areas north of Manchester Boulevard and throughout Morningside Park contain 1940s–1950s California bungalows and ranch homes — many in original condition with clay-tile-lined masonry chimneys that have been in continuous operation for 70+ years. Inglewood's proximity to LAX creates a unique acoustic environment, but its inland-of-the-coast position gives it slightly warmer winters than directly coastal South Bay cities, driving more consistent fireplace use.",
    chimneyContext:
      "Inglewood's 1940s–1950s housing stock represents the same era as central Los Angeles neighborhoods, with the same typical findings: lime-mortar masonry, original cast-iron dampers, and clay tile liners that have never been camera-inspected. The 1994 Northridge earthquake affected chimney liners throughout South LA County. SCAQMD Spare the Air restrictions apply. Properties near the flight paths have experienced vibration effects over decades that can accelerate mortar joint micro-cracking.",
    neighborhoods: ["Morningside Park", "Inglewood Park", "Century Heights", "Fairview Heights", "SoFi District"],
    nearbyAreas: ["Hawthorne", "Gardena", "Compton", "Los Angeles"],
    nearbySlugs: ["hawthorne", "compton", "los-angeles", "torrance"],
    uniqueFact:
      "Inglewood's Morningside Park neighborhood — immediately west of SoFi Stadium — contains one of the highest concentrations of original 1940s California bungalows in South LA County, a housing type specifically associated with clay-tile-lined brick masonry chimneys that are now entering the critical late-service inspection window.",
    faqs: [
      { q: "Does LAX flight path vibration damage chimneys in Inglewood?", a: "Decades of cumulative low-frequency vibration from aircraft can accelerate micro-cracking in clay tile liner joints and masonry mortar — the same mechanism as distant seismic events, but slower and more chronic. Properties directly under the flight path, particularly north of Manchester, should treat this as an additional reason for regular camera inspection. We have found liner joint separation in Inglewood homes that is consistent with vibration stress rather than earthquake damage." },
    ],
    metaTitle: "Chimney Services in Inglewood, CA | South LA County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Inglewood. Morningside Park and South Bay postwar home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "burbank",
    name: "Burbank",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Fernando Valley / Foothills",
    population: "103,000",
    description:
      "Burbank — the self-described 'Media Capital of the World' — is home to the Disney, Warner Bros., and NBC studio lots, and its residential neighborhoods have a distinctly middle-class, well-maintained character that reflects a community where studio employees and entertainment industry workers have settled for generations. The older residential areas north of Olive Avenue and in the Rancho District contain 1930s–1950s California bungalows and ranch homes with original masonry chimneys, while the hillside communities along the Verdugo Mountains have custom homes with more elaborate fireplace installations. Burbank sits at the eastern end of the San Fernando Valley and gets warmer and drier than coastal LA, driving consistent winter fireplace use.",
    chimneyContext:
      "Burbank's position at the base of the Verdugo Mountains means its hillside neighborhoods face the same earthquake-related chimney damage concerns as nearby Glendale — the 1994 Northridge earthquake cracked or displaced clay tile liners throughout the valley, and hillside properties have additional seismic vulnerability due to slope effects. The studio district's flat residential blocks have older masonry systems with the typical postwar maintenance history. SCAQMD curtailment applies on Spare the Air days.",
    neighborhoods: ["Magnolia Park", "Rancho District", "Chandler Estates", "Burbank Hills", "Empire Center"],
    nearbyAreas: ["Glendale", "North Hollywood", "Pasadena", "San Fernando"],
    nearbySlugs: ["glendale", "pasadena", "los-angeles"],
    uniqueFact:
      "Burbank's Magnolia Park neighborhood — a 1920s–1940s residential district along Magnolia Boulevard — is one of the last surviving concentrations of original mid-century residential architecture in the San Fernando Valley, with a chimney inventory that reflects continuous residential occupation since the golden age of Hollywood.",
    faqs: [
      { q: "My Burbank home backs up to the Verdugo foothills. Is there wildfire risk for my chimney?", a: "Yes. The Verdugo Mountains bordering Burbank's northern residential edge are a designated high fire-hazard zone. During autumn wind events, the foothills directly above La Tuna Canyon and Olive Hills can generate ember transport toward residential properties. A spark-arrestor cap with intact 5/8-inch mesh is the primary protection, and we verify cap condition and secure attachment during every annual inspection for hillside-adjacent Burbank properties." },
    ],
    metaTitle: "Chimney Services in Burbank, CA | San Fernando Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Burbank. Magnolia Park, Rancho District, and hillside home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "west-covina",
    name: "West Covina",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Gabriel Valley",
    population: "106,000",
    description:
      "West Covina grew explosively in the 1950s and 1960s as the automobile suburb reached the eastern San Gabriel Valley — its population jumped from 4,499 in 1950 to over 68,000 in 1960, one of the fastest growth rates in California history. That rapid postwar expansion produced a remarkably consistent housing stock: the dominant chimney type across West Covina is the original clay-tile-lined masonry fireplace installed in 1955–1965 ranch homes, most of which have been in continuous residential occupation since. West Covina's inland position gives it genuine seasonal temperature variation — summers push past 100°F and winter nights drop into the 40s — with residents burning their fireplaces regularly from November through February.",
    chimneyContext:
      "West Covina's synchronized 1955–1965 housing boom means much of the city's masonry chimney inventory is nearly the same age — which creates a corresponding synchronized maintenance wave now hitting many properties simultaneously. Clay tile liners at 60–70 years show predictable patterns of mortar joint separation and section cracking that a camera inspection reliably identifies. The 1994 Northridge earthquake cracked liners across the San Gabriel Valley, and West Covina is no exception. SCAQMD curtailment applies.",
    neighborhoods: ["South Hills", "Sunset Hills", "Cortez", "Eastland", "West Covina Hills"],
    nearbyAreas: ["Covina", "Baldwin Park", "El Monte", "Pomona"],
    nearbySlugs: ["pomona", "el-monte", "baldwin-park", "los-angeles"],
    uniqueFact:
      "West Covina's 1950s growth wave was so rapid that the city appears in planning textbooks as a case study in postwar suburban automobile dependency — and the residential blocks built during this era all share the same original chimney construction era, creating one of the most temporally uniform masonry chimney inventories in the San Gabriel Valley.",
    faqs: [
      { q: "How do I know if my 1960 West Covina ranch home chimney needs inspection?", a: "The honest answer is: it almost certainly does, if it hasn't had a camera inspection in the last 5 years. A 60+ year-old clay tile liner in the San Gabriel Valley has been through the 1987 Whittier Narrows earthquake, the 1994 Northridge earthquake, and decades of thermal cycling in a hot inland climate. We frequently find stage 2 or 3 creosote, cracked liner sections, and failed damper plates in West Covina homes that appear functional from the firebox opening." },
    ],
    metaTitle: "Chimney Services in West Covina, CA | San Gabriel Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in West Covina. San Gabriel Valley postwar ranch home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "norwalk",
    name: "Norwalk",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / Southeast LA",
    population: "103,000",
    description:
      "Norwalk is one of Southeast Los Angeles County's most densely populated cities — a postwar suburb that absorbed thousands of working-class families during the 1940s–1960s expansion along the Artesia corridor. The residential neighborhoods along Rosecrans and Imperial Highways contain a high proportion of original 1950s ranch homes and California bungalows, most with brick masonry chimneys that have been in continuous residential use since Eisenhower-era construction. Norwalk's Metro Green Line connection to downtown LA and its position between Downey and Cerritos gives it a transit-accessible urban character, but the housing stock remains predominantly single-family postwar — which means a large inventory of aging masonry chimneys.",
    chimneyContext:
      "Norwalk's 1950s–1960s masonry systems are approaching or exceeding the typical clay tile liner service life. Many properties in the older residential blocks have original damper plates — now 60+ years old — that corrode or seize shut over time, reducing draft efficiency before they fail completely. SCAQMD curtailment applies on Spare the Air days. The 1987 Whittier Narrows earthquake, centered just 5 miles north of Norwalk, caused chimney liner damage throughout this part of Southeast LA County.",
    neighborhoods: ["Little Lake", "Pio Pico", "Studebaker", "Norwalk Village", "East Norwalk"],
    nearbyAreas: ["Downey", "Cerritos", "Bellflower", "Whittier"],
    nearbySlugs: ["downey", "bellflower", "norwalk", "los-angeles"],
    uniqueFact:
      "The 1987 Whittier Narrows earthquake (5.9 magnitude) was centered in the unincorporated area directly north of Norwalk — closer to Norwalk's residential neighborhoods than the Northridge earthquake (1994) was to the San Fernando Valley — and caused chimney liner damage in Norwalk that remains uninspected in many homes that have changed hands since.",
    faqs: [
      { q: "Should I be concerned about earthquake damage to my Norwalk chimney?", a: "Yes. Norwalk was one of the more heavily affected communities in the 1987 Whittier Narrows earthquake — the closest major LA Basin quake to this part of Southeast LA County. Clay tile liner cracks from that event, combined with cumulative Northridge damage, mean a significant number of Norwalk chimneys have hidden liner damage. A Level 2 camera inspection is the only way to assess flue condition accurately." },
    ],
    metaTitle: "Chimney Services in Norwalk, CA | Southeast LA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Norwalk. Southeast LA County postwar home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "compton",
    name: "Compton",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / Southeast LA",
    population: "97,000",
    description:
      "Compton is one of the older incorporated cities in Los Angeles County, with a residential history dating to the 1880s and a housing stock that reflects that longevity — some of the oldest surviving residential structures in unincorporated Southeast LA are found in Compton's historic neighborhoods. The residential areas north of Rosecrans and along Long Beach Boulevard contain 1920s–1950s California bungalows, Spanish Revival cottages, and ranch homes that represent six or more decades of continuous residential occupation. Many of these chimneys have been in service for the entirety of their original homes' existence and have accumulated deferred maintenance that a Level 2 inspection consistently identifies.",
    chimneyContext:
      "Compton's pre-1950 housing stock includes masonry chimneys built without modern liner standards — original unlined masonry openings in the oldest properties, and early clay tile installations in 1930s–1940s construction. Both the Whittier Narrows (1987) and Northridge (1994) earthquakes affected this part of the county. SCAQMD Spare the Air restrictions apply. Rental properties in Compton have among the highest rates of deferred chimney maintenance we encounter in Southeast LA County.",
    neighborhoods: ["Sunny Cove", "Richland Farms", "East Compton", "Leland", "Willowbrook adjacency"],
    nearbyAreas: ["Lynwood", "South Gate", "Paramount", "Carson"],
    nearbySlugs: ["inglewood", "south-gate", "los-angeles", "torrance"],
    uniqueFact:
      "Compton's Richland Farms neighborhood is one of the last surviving areas in an LA County city where residents are legally permitted to keep agricultural livestock on residential lots — a legacy of the city's original farm town identity that also means some properties have outbuilding chimneys and wood stoves that require separate inspection from the main house.",
    faqs: [
      { q: "My Compton home was built in 1938. Is the original fireplace safe to use?", a: "Not without a Level 2 inspection first. Pre-1940 Compton homes frequently have fireplaces built without clay tile liner requirements — the actual flue may be unlined masonry, which allows combustion gases to penetrate surrounding brick. We perform a camera inspection of the full flue and provide a written assessment. If the system needs liner installation to meet current safety standards, we provide a detailed repair estimate." },
    ],
    metaTitle: "Chimney Services in Compton, CA | Los Angeles County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Compton. Southeast LA older home specialists. CSIA-certified. Request a free estimate online.",
  },

  // ── Riverside County ───────────────────────────────────────────────────────
  {
    slug: "murrieta",
    name: "Murrieta",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire / Southwest Riverside County",
    population: "115,000",
    description:
      "Murrieta was one of the fastest-growing cities in the United States throughout the 2000s, transitioning from a small community of 33,000 in 2000 to over 100,000 by 2010 through rapid master-planned residential development. That growth wave produced a housing stock that is almost entirely factory-built fireplace systems — Heatilator, Majestic, and Superior units installed in planned communities like Murrieta Oaks, Copper Canyon, and Bear Creek. These systems are now 15–25 years old, placing a large portion of the city's fireplace inventory at the key first-inspection milestone. Murrieta sits at approximately 1,000 feet elevation in the Santa Rosa Hills, adjacent to Temecula wine country, with cool winters that drive genuine fireplace use.",
    chimneyContext:
      "Murrieta's factory-built fireplace inventory from the 2000s master-planned build-out is reaching the point where refractory panel assessment, damper plate inspection, and liner verification are recommended. The Bear Creek and Copper Canyon hillside communities border open brush in a designated high fire-hazard zone. Santa Ana wind events reach the Santa Rosa Hills corridor, making spark-arrestor cap maintenance relevant during fire season.",
    neighborhoods: ["Murrieta Oaks", "Copper Canyon", "Bear Creek", "La Cresta", "Warm Springs Creek"],
    nearbyAreas: ["Temecula", "Menifee", "Wildomar", "Lake Elsinore"],
    nearbySlugs: ["temecula", "menifee", "riverside", "corona"],
    uniqueFact:
      "Murrieta was named the 'Best Place to Live' in California by multiple national surveys between 2004 and 2008 — during the exact period when the bulk of its residential construction occurred, meaning the city's entire fireplace inventory dates from a single compressed window now reaching the 15–25-year first-major-inspection threshold.",
    faqs: [
      { q: "My 2006 Murrieta home has a factory-built fireplace. When does it need its first inspection?", a: "At 19 years old, your system is right in the window for a first comprehensive inspection. Factory-built fireplaces at this age commonly show early refractory panel surface cracking, minor damper corrosion, and the first signs of heat shield degradation — all of which are catch-early repairs that remain inexpensive. Letting them develop another 5–10 years without inspection typically turns minor panel issues into full panel replacement needs." },
    ],
    metaTitle: "Chimney Services in Murrieta, CA | Southwest Riverside County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Murrieta. Southwest Riverside County factory-built fireplace specialists. Request a free estimate online.",
  },
  {
    slug: "temecula",
    name: "Temecula",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire / Wine Country",
    population: "110,000",
    description:
      "Temecula sits at approximately 1,000 feet elevation in the Santa Rosa Mountains' foothills, in the Temecula Valley that has become one of Southern California's premier wine-growing regions. The city's character divides between Old Town Temecula — a historic district with 1880s–1920s commercial and residential architecture — and the master-planned communities of Wolf Creek, Redhawk, and Harveston that were built between 1995 and 2010. The wine country setting means cool, sometimes foggy mornings that warm to pleasant afternoons, with winter evenings cold enough that residents use fireplaces regularly from October through March. The surrounding hillsides and vineyards create a wildfire interface that makes spark-arrestor chimney caps a genuine safety requirement.",
    chimneyContext:
      "Temecula's Old Town properties — concentrated along Old Town Front Street and the surrounding blocks — contain some of the oldest surviving residential structures in Riverside County, with masonry systems predating modern liner standards. The wine country master-planned communities have factory-built fireplace systems from the late 1990s–2000s build-out, now approaching 20–25 years of age and entering the key refractory panel inspection window. The annual Temecula Valley Balloon & Wine Festival draws attention to the valley's fire ecology — the dry chaparral surrounding the vineyards is exactly the terrain where chimney spark emission creates risk.",
    neighborhoods: ["Old Town Temecula", "Redhawk", "Wolf Creek", "Harveston", "Paloma del Sol"],
    nearbyAreas: ["Murrieta", "Menifee", "Fallbrook", "Hemet"],
    nearbySlugs: ["murrieta", "menifee", "hemet", "riverside"],
    uniqueFact:
      "Temecula's wine country setting means the surrounding Chaparral and coastal sage scrub are designated high fire-hazard fuel types — the same plant communities responsible for California's most destructive wildland fires. Properties on the eastern edge of Temecula near the Santa Rosa Hills interface have specific spark-arrestor requirements under the Riverside County fire code.",
    faqs: [
      { q: "My Temecula home is near the vineyards. Does that affect my chimney inspection needs?", a: "Properties in Temecula near the wine country hills — particularly along Rancho California Road east of Redhawk Parkway and the hillside communities near De Portola Road — are in or adjacent to high fire-hazard zones. Annual inspection and a functioning spark-arrestor cap are the minimum requirements. We also check the cap screen for debris accumulation, which is more common in agricultural areas where airborne particles from harvest season and vine debris can partially obstruct mesh." },
      { q: "Does the Temecula Valley's elevation affect my fireplace?", a: "Yes. At 1,000+ feet elevation, Temecula experiences meaningfully colder winters than the Riverside or San Diego coastal zones — winter lows in the high 30s are common, and residents use their fireplaces more regularly here than in lower-elevation Southern California communities. More frequent use means faster creosote accumulation and a stronger case for annual professional cleaning rather than every other year." },
    ],
    metaTitle: "Chimney Services in Temecula, CA | Wine Country | Chimney Peak California",
    metaDescription: "Chimney cleaning, inspection, and repair in Temecula. Wine country and Old Town fireplace specialists. Riverside County. Request a free estimate online.",
  },
  {
    slug: "jurupa-valley",
    name: "Jurupa Valley",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire",
    population: "107,000",
    description:
      "Jurupa Valley is California's youngest city, incorporated in 2011 from formerly unincorporated Riverside County land along the Santa Ana River. The city encompasses several formerly distinct communities — Rubidoux, Pedley, Glen Avon, Mira Loma, and Sunnyslope — each with their own residential character and housing age profile. Rubidoux's older neighborhoods date to the 1940s–1950s and contain the oldest housing in what is now Jurupa Valley, while Mira Loma and Eastvale-adjacent areas have significant 1990s–2000s suburban development. The Santa Ana River corridor position means some flood-plain influence on properties, and the industrial character of the Mira Loma area has shaped land use throughout the city.",
    chimneyContext:
      "Jurupa Valley's Rubidoux neighborhoods contain 1940s–1960s masonry chimneys comparable to those in neighboring Riverside city and Fontana — systems approaching the end of their design life that warrant camera inspection. The newer Mira Loma and Pedley residential areas have factory-built systems from the 1980s–2000s at various maintenance stages. SCAQMD curtailment applies to wood burning throughout the city. Santa Ana wind events affect the Santa Ana River corridor directly.",
    neighborhoods: ["Rubidoux", "Pedley", "Glen Avon", "Mira Loma", "Sunnyslope"],
    nearbyAreas: ["Riverside", "Ontario", "Fontana", "Corona"],
    nearbySlugs: ["riverside", "ontario", "fontana", "corona"],
    uniqueFact:
      "Jurupa Valley's incorporation in 2011 made it California's newest city, but the Rubidoux community it includes predates most of Riverside County's postwar suburban development — its 1940s-era residential blocks represent a pre-war agricultural settlement pattern that produced a distinctive chimney inventory now among the oldest in the Inland Empire.",
    faqs: [
      { q: "My home is in the Rubidoux area of Jurupa Valley. How old is the typical chimney here?", a: "Rubidoux's core residential neighborhoods were developed between 1935 and 1955 — which puts most original masonry chimneys in the 70–90-year age range. At this age, clay tile liner sections commonly show significant mortar joint deterioration and partial section collapse in the worst cases. We recommend a Level 2 camera inspection for any Rubidoux property that hasn't been inspected in the last 5 years, regardless of whether the fireplace appears to be drafting normally." },
    ],
    metaTitle: "Chimney Services in Jurupa Valley, CA | Riverside County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Jurupa Valley. Rubidoux, Mira Loma, and Pedley specialists. Inland Empire CSIA-certified. Request a free estimate online.",
  },

  // ── Orange County ──────────────────────────────────────────────────────────
  {
    slug: "costa-mesa",
    name: "Costa Mesa",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California / South Orange County",
    population: "113,000",
    description:
      "Costa Mesa occupies the inland edge of Orange County's coastal strip, adjacent to Newport Beach and just inland from the Pacific. The city is best known for South Coast Plaza — one of the highest-grossing retail centers in the world — and for its arts district, but its residential neighborhoods reflect the full spectrum of Orange County's housing history: 1950s–1960s ranch homes in the Mesa Verde and College Park areas, 1970s–1980s development in Eastside Costa Mesa, and newer construction near the 55 Freeway corridor. Costa Mesa's position between the coastal marine zone and the warmer inland areas gives it a moderate climate that drives occasional but meaningful fireplace use.",
    chimneyContext:
      "Costa Mesa's older residential neighborhoods in Mesa Verde and the College Park area have masonry chimneys from the 1960s–1970s era — original clay tile systems now approaching 50–60 years old. The coastal proximity of Newport Beach and the Pacific Ocean brings marine air influence into Costa Mesa's western neighborhoods, affecting metal chimney component corrosion rates. SCAQMD curtailment applies to wood burning on Spare the Air days throughout the city.",
    neighborhoods: ["Mesa Verde", "College Park", "Eastside Costa Mesa", "Westside Costa Mesa", "Newport Mesa"],
    nearbyAreas: ["Newport Beach", "Irvine", "Santa Ana", "Huntington Beach"],
    nearbySlugs: ["newport-beach", "irvine", "santa-ana", "huntington-beach"],
    uniqueFact:
      "Costa Mesa's Segerstrom Center for the Arts is the largest performing arts complex between Los Angeles and San Diego, but the adjacent Mesa Verde residential neighborhood — developed in the 1960s — contains one of the highest concentrations of original 60-year-old masonry chimneys in Orange County's coastal communities.",
    faqs: [
      { q: "My 1968 Costa Mesa home has had the original fireplace since it was built. What should I check?", a: "A 1968 system is now 57 years old — at or past the optimal service life for original clay tile liner joints in Orange County's coastal climate. We perform a Level 2 camera inspection of the full flue, assess the firebox, damper condition, and crown integrity, and provide a written report. The marine air proximity in Costa Mesa's western neighborhoods also means we pay particular attention to the chimney cap and chase cover for early corrosion signs." },
    ],
    metaTitle: "Chimney Services in Costa Mesa, CA | Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Costa Mesa. Mesa Verde and Eastside coastal-influenced specialists. Orange County CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "mission-viejo",
    name: "Mission Viejo",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California / South Orange County",
    population: "96,000",
    description:
      "Mission Viejo is one of the largest master-planned communities in United States history — developed by Mission Viejo Company from 1965 onward, the city was largely built out by 1980 and served as the template for subsequent planned communities throughout Southern California. The residential housing is almost exclusively 1970s single-family tract homes on curvilinear streets around Lake Mission Viejo, with factory-built fireplace systems that were standard in Southern California residential construction during this period. These systems — predominantly Heatilator and Majestic units installed between 1970 and 1985 — are now 40–55 years old, well past their original design life.",
    chimneyContext:
      "Mission Viejo's 1970s factory-built fireplaces represent one of the oldest intact factory-built inventories in Southern California. At 40–55 years, refractory panels are frequently at or past their failure point, heat shields may be warped or corroded, and damper assemblies commonly seize or fail to seal completely. The SCAQMD's curtailment rules mean many Mission Viejo residents have converted to gas logs — a conversion that still requires verification that the gas combustion drafts safely through the original factory-built liner.",
    neighborhoods: ["Lake Mission Viejo", "Aegean Hills", "Olympiad", "Pacific Hills", "Alicia Viejo border"],
    nearbyAreas: ["Lake Forest", "Laguna Niguel", "Aliso Viejo", "Irvine"],
    nearbySlugs: ["irvine", "lake-forest", "orange", "fullerton"],
    uniqueFact:
      "Mission Viejo's 1970s master-plan build-out created one of the most concentrated inventories of same-vintage factory-built fireplaces in the US — the community's planning uniformity that made it a model for suburban development also means its fireplace inventory reached end-of-life simultaneously, creating a synchronized maintenance demand that our South County dispatch addresses consistently.",
    faqs: [
      { q: "My Mission Viejo home was built in 1974 and still has the original factory fireplace. Is that safe?", a: "A 1974 factory-built system is 51 years old — significantly past the 30-year design life most manufacturers specify. Before using it, we'd recommend a full assessment: refractory panel condition, heat shield integrity, damper operation, and liner inspection. At this age, it's not uncommon to find panels that are crumbling rather than cracked, or a heat shield that's completely detached. In some cases, the system is beyond economical repair and replacement is the safer option." },
    ],
    metaTitle: "Chimney Services in Mission Viejo, CA | South Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Mission Viejo. 1970s factory-built fireplace specialists. South Orange County CSIA-certified. Request a free estimate online.",
  },

  // ── Alameda County ─────────────────────────────────────────────────────────
  {
    slug: "richmond",
    name: "Richmond",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / East Bay",
    population: "116,000",
    description:
      "Richmond's identity was forged during World War II, when the Kaiser Shipyards employed 100,000 workers and transformed the city from a small town into an industrial powerhouse almost overnight. The residential neighborhoods built to house that workforce — particularly the Richmond Annex, Point Richmond, and El Sobrante corridor — contain 1940s–1950s housing stock with original masonry chimneys that have been in continuous occupation for 75+ years. Point Richmond, the city's original Victorian-era neighborhood adjacent to the Inner Harbor, has homes dating to the 1880s–1910s with masonry systems that predate clay tile liner standards. The San Francisco Bay's proximity keeps Richmond's climate cool and marine-influenced year-round.",
    chimneyContext:
      "Richmond's Point Richmond Victorian-era homes represent some of the oldest residential chimneys in Contra Costa–Alameda Bay Area shoreline communities. Pre-1915 masonry here, as in San Francisco and Oakland, often uses original unlined fireplace openings that require camera inspection before any operational use. The 1940s–1950s Richmond Annex housing stock has clay tile liners now in the critical 75+ year window. Hayward Fault proximity affects the city's hillside areas. BAAQMD Spare the Air restrictions apply.",
    neighborhoods: ["Point Richmond", "Richmond Annex", "Atchison Village", "North Richmond", "Iron Triangle"],
    nearbyAreas: ["San Pablo", "El Cerrito", "Berkeley", "Hercules"],
    nearbySlugs: ["berkeley", "oakland", "fremont", "hayward"],
    uniqueFact:
      "Richmond's Kaiser Shipyard No. 3 produced Liberty Ships faster than any shipyard in history — a ship every 4 days at peak production — and the residential workers' housing built to support that workforce represents the largest concentration of 1940s-era masonry chimneys in the East Bay's industrial corridor.",
    faqs: [
      { q: "My Point Richmond Victorian from 1904 has an original fireplace. Is it usable?", a: "Not without inspection first. Pre-1915 masonry in Point Richmond frequently has unlined fireplace openings — the flue may be raw brick without any clay tile liner. We perform a full Level 2 camera inspection and provide a written assessment of liner condition, mortar integrity, and any structural concerns from the 100+ years of marine air exposure. Restoration of a Victorian fireplace to operational status is feasible but requires the right material choices for the era." },
    ],
    metaTitle: "Chimney Services in Richmond, CA | Alameda County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Richmond. Point Richmond Victorian and WWII-era home specialists. East Bay CSIA-certified. Request a free estimate online.",
  },

  // ── Contra Costa County ────────────────────────────────────────────────────
  {
    slug: "antioch",
    name: "Antioch",
    county: "Contra Costa County",
    countySlug: "contra-costa-county-ca",
    region: "Bay Area / East Contra Costa",
    population: "115,000",
    description:
      "Antioch sits at the eastern end of Contra Costa County where the San Joaquin–Sacramento Delta meets the Bay Area's suburban frontier. The city has an older downtown core along the waterfront — some of its original late-19th-century commercial buildings still stand along Second Street — and residential neighborhoods that range from 1940s–1960s working-class housing to the newer master-planned communities of Lone Tree, Deer Valley, and Black Diamond Mines Road corridor. Antioch's inland position past the Diablo Range means it gets hot in summer and cold in winter, with residents burning their fireplaces regularly. Delta moisture from the adjacent sloughs affects masonry at elevated rates compared to drier inland communities.",
    chimneyContext:
      "Antioch's older downtown-adjacent residential blocks have 1940s–1960s masonry chimneys with clay tile liners now in the critical late-service window. Delta moisture is a year-round factor here — the San Joaquin Delta creates a persistently humid microclimate that accelerates mortar joint deterioration faster than comparable-age homes in Concord or Walnut Creek. The Diablo wind events that affect Contra Costa County's hills reach Antioch's eastern developments, and the adjacent open land and Black Diamond Mines Regional Preserve create a wildfire interface for hillside properties.",
    neighborhoods: ["Lone Tree", "Deer Valley", "Hillcrest", "downtown Antioch", "Sand Creek"],
    nearbyAreas: ["Brentwood", "Pittsburg", "Concord", "Oakley"],
    nearbySlugs: ["concord", "antioch", "hayward", "fremont"],
    uniqueFact:
      "Antioch's position at the confluence of the Sacramento and San Joaquin rivers means it sits at the intersection of Northern California's two largest river systems — creating a delta moisture environment that is measurably more aggressive on exposed masonry mortar than any other Contra Costa County community at the same elevation.",
    faqs: [
      { q: "Does living near the Delta affect my Antioch chimney differently than other Bay Area homes?", a: "Yes. The Delta creates a year-round elevated humidity environment that accelerates mortar joint deterioration at rates we observe consistently in Antioch compared to Concord or Walnut Creek. We see 20–30% more mortar joint failure in same-age chimneys in Delta-adjacent communities than in drier East Bay locations. Annual inspection and a crown sealer application every 3–4 years are specifically recommended for Antioch's delta-fronting neighborhoods." },
    ],
    metaTitle: "Chimney Services in Antioch, CA | Contra Costa County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Antioch. Delta waterfront and East Contra Costa County specialists. Request a free estimate online.",
  },

  // ── San Mateo County ───────────────────────────────────────────────────────
  {
    slug: "daly-city",
    name: "Daly City",
    county: "San Mateo County",
    countySlug: "san-mateo-county-ca",
    region: "Bay Area / Peninsula",
    population: "108,000",
    description:
      "Daly City is the most densely populated city in Northern California and immediately south of San Francisco — a community famously described in Malvina Reynolds' 1962 song 'Little Boxes,' which was inspired by the Westlake District's rows of similar pastel-colored Doelger-built homes. That housing stock — constructed between 1948 and 1960 — still dominates Daly City's residential character, and it contains one of the highest concentrations of same-vintage masonry chimneys in the Bay Area. The city has the largest Filipino-American population of any US city, and its working-class ownership culture has maintained these postwar homes in generally good condition — but chimney inspection remains consistently deferred in the dense urban rental market. Daly City's San Francisco Bay Peninsula position means persistent fog, wind, and marine air exposure virtually year-round.",
    chimneyContext:
      "Daly City's Doelger-built homes all share the same original chimney construction era (1948–1960), making this one of the most temporally uniform chimney inventory sets in the Bay Area. Original clay tile liner systems in these homes are now 65–78 years old. The persistent marine fog from the Pacific-facing hills keeps masonry in near-constant moisture exposure during summer months when most owners are not thinking about chimney maintenance. BAAQMD Spare the Air restrictions apply.",
    neighborhoods: ["Westlake", "Serramonte", "Crocker", "St. Francis Heights", "Bayshore"],
    nearbyAreas: ["San Francisco", "South San Francisco", "Colma", "Brisbane"],
    nearbySlugs: ["san-francisco", "san-mateo", "redwood-city"],
    uniqueFact:
      "The Westlake District's Doelger homes — the 'Little Boxes' of the Malvina Reynolds song — were built identically enough that every chimney in the original Doelger developments shares the same flue dimensions, liner specifications, and damper type, making inspection findings from one Westlake home highly predictive of what we find in adjacent properties of the same vintage.",
    faqs: [
      { q: "My Daly City Doelger home was built in 1954. Does the original chimney need replacing?", a: "Not necessarily replacing, but absolutely inspecting. A 1954 Doelger chimney is 71 years old and has been through the full range of Bay Area weather, the 1989 Loma Prieta earthquake, and decades of marine fog. We perform a Level 2 camera inspection to assess the clay tile liner condition and mortar integrity. Many Doelger chimneys are repairable with liner restoration — full replacement is only warranted when the liner is structurally compromised or when the owner wants to upgrade the heating capacity." },
    ],
    metaTitle: "Chimney Services in Daly City, CA | San Mateo County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Daly City. Westlake Doelger home specialists. San Mateo County CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "san-mateo",
    name: "San Mateo",
    county: "San Mateo County",
    countySlug: "san-mateo-county-ca",
    region: "Bay Area / Peninsula",
    population: "103,000",
    description:
      "San Mateo is the largest city and commercial center of San Mateo County, occupying a mid-Peninsula location between San Francisco and San Jose. Its residential neighborhoods reflect the Bay Area's postwar suburban expansion — older homes in the Baywood, Beresford, and Hillsdale neighborhoods date to the 1930s–1950s, while newer development fills the Fiesta Gardens and Foster City border areas. San Mateo has a significant Filipino-American and Asian-American population, and its housing market tends toward long-term homeownership — which correlates with maintained properties but, in many cases, long intervals since the last chimney camera inspection. The proximity to San Francisco Bay creates consistent marine air exposure that affects metal chimney component longevity.",
    chimneyContext:
      "San Mateo's Baywood and Beresford neighborhoods contain 1940s–1950s masonry chimneys in typical mid-Peninsula condition — clay tile liners approaching the end of their design life, original damper plates, and varying degrees of post-1989 earthquake repair. The Hillsdale neighborhood's 1960s–1970s construction has factory-built systems now past their first major maintenance milestone. BAAQMD Spare the Air restrictions apply. Bay-side marine air accelerates corrosion of exposed metal components throughout the city.",
    neighborhoods: ["Baywood", "Beresford", "Hillsdale", "Fiesta Gardens", "Downtown San Mateo"],
    nearbyAreas: ["Burlingame", "Redwood City", "Foster City", "Belmont"],
    nearbySlugs: ["daly-city", "redwood-city", "san-francisco"],
    uniqueFact:
      "San Mateo's Baywood neighborhood — developed primarily between 1940 and 1958 — has one of the highest concentrations of original postwar masonry chimneys in mid-Peninsula San Mateo County, most of which have never received a professional video-camera inspection of the full flue.",
    faqs: [
      { q: "How does San Mateo's bay proximity affect metal chimney components?", a: "San Mateo's location between San Francisco Bay and the Pacific coast fog belt means year-round elevated humidity and occasional direct bay air exposure. Standard 304-grade stainless chimney caps and chase covers corrode noticeably faster here than in inland Peninsula communities like San Carlos or Redwood City. We inspect metal components annually and recommend 316L marine-grade stainless for any cap replacement in properties within a mile of the bay or any tidal slough." },
    ],
    metaTitle: "Chimney Services in San Mateo, CA | Peninsula | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in San Mateo. Mid-Peninsula specialists for Baywood, Hillsdale, and surrounding neighborhoods. Request a free estimate online.",
  },

  // ── Ventura County ─────────────────────────────────────────────────────────
  {
    slug: "ventura",
    name: "Ventura",
    county: "Ventura County",
    countySlug: "ventura-county-ca",
    region: "Southern California / Central Coast",
    population: "110,000",
    description:
      "Ventura — formally San Buenaventura — is one of California's oldest cities, founded as a Spanish mission in 1782 and carrying that historical depth in its built environment. The historic downtown district along Main Street contains some of the oldest surviving residential and commercial structures in Southern California, and the Midtown and East Ventura neighborhoods include Victorian-era and early-20th-century housing that reflects the city's century of growth. Ventura's Pacific Ocean frontage gives it a genuine marine climate — cool, foggy mornings warming to pleasant afternoons, with consistent westerly winds that accelerate salt-air corrosion of exposed metal. The 2017 Thomas Fire, which started near Highway 150 north of Santa Paula, burned toward Ventura and required evacuations of hillside neighborhoods before being contained.",
    chimneyContext:
      "Ventura's historic downtown and Midtown neighborhoods contain masonry chimneys from multiple eras — original Mission Revival and Victorian construction from the 1880s–1910s, plus significant 1920s–1940s Craftsman and Spanish Colonial bungalow stock. Marine air accelerates corrosion of metal chimney components throughout the city, particularly in the beach district west of the pier. Thomas Fire proximity affected hillside properties in the Foothill Road and Telegraph Road corridors, where post-fire chimney inspection is still warranted for homes near the perimeter.",
    neighborhoods: ["Downtown Ventura", "Midtown", "East Ventura", "Westside", "Foothill area"],
    nearbyAreas: ["Oxnard", "Camarillo", "Ojai", "Santa Paula"],
    nearbySlugs: ["oxnard", "thousand-oaks", "simi-valley"],
    uniqueFact:
      "The Mission San Buenaventura, founded in 1782, is the only mission in California that originally had two mission churches — and the surrounding residential district contains some of the only continuously occupied residential land in Southern California with an architectural history spanning more than 200 years, including chimney structures from multiple distinct eras of California construction.",
    faqs: [
      { q: "My Ventura home is near the hills that burned during the Thomas Fire. Should I have my chimney inspected even if the house wasn't damaged?", a: "Yes. Properties within a mile of the Thomas Fire perimeter — including many homes along Foothill Road, Telegraph Road, and the Ventura hillside neighborhoods — experienced radiant heat exposure that can warp metal chimney components and crack clay tile liner sections without visible exterior damage. We've found damaged damper plates and cracked liner tiles in homes a full half-mile outside direct fire perimeters. An inspection is warranted regardless of whether the structure shows visible fire effects." },
    ],
    metaTitle: "Chimney Services in Ventura, CA | Ventura County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Ventura. Historic downtown and coastal specialists. Post-Thomas Fire area service. Request a free estimate online.",
  },

  // ── Santa Barbara County ───────────────────────────────────────────────────
  {
    slug: "santa-maria",
    name: "Santa Maria",
    county: "Santa Barbara County",
    countySlug: "santa-barbara-county-ca",
    region: "Central Coast",
    population: "108,000",
    description:
      "Santa Maria is Santa Barbara County's largest city by population — a fact that often surprises visitors who know the county primarily through its famous southern city. Santa Maria's character is distinctly different from Santa Barbara's resort-town identity: it is an agricultural hub surrounded by strawberry fields, broccoli farms, and the Santa Maria Valley wine region. The city's residential stock is predominantly working- and middle-class, with 1940s–1960s housing in the central neighborhoods and significant suburban expansion from the 1970s–1990s in the south and east. Santa Maria sits in a natural wind funnel created by the Santa Ynez Mountains and Transverse Range, which channels persistent cool onshore breezes through the valley — temperatures here are significantly cooler than inland Central Valley cities at the same latitude.",
    chimneyContext:
      "Santa Maria's older residential neighborhoods contain masonry chimneys from the 1940s–1960s agricultural-expansion era — systems built during the period when the city served as a center for the Vandenberg Air Force Base economy and surrounding farmworker community. The persistent onshore winds keep humidity elevated year-round, creating mortar joint deterioration conditions more comparable to coastal than inland Central Valley cities. Factory-built systems from the 1980s–1990s suburban expansion in south Santa Maria are reaching the key inspection window.",
    neighborhoods: ["Orcutt", "Town Center", "Battles Road Corridor", "Santa Maria Fairpark", "Bradley Road"],
    nearbyAreas: ["Lompoc", "San Luis Obispo", "Orcutt", "Vandenberg Village"],
    nearbySlugs: ["santa-barbara"],
    uniqueFact:
      "Santa Maria lends its name to a regional barbecue style — Santa Maria-style BBQ — that is distinct to this region and involves open-pit cooking over red oak. The same red oak produces excellent firewood when properly seasoned, and Santa Maria's agricultural community has a higher rate of wood-burning fireplace use than the county average.",
    faqs: [
      { q: "Does Santa Maria's coastal wind affect my chimney maintenance needs?", a: "Yes. Santa Maria's position in the coastal wind funnel means persistent onshore flow that keeps humidity elevated year-round — different from the dry hot Central Valley communities to the east. This elevated moisture environment accelerates mortar joint deterioration in exposed masonry and contributes to efflorescence on chimney exteriors. We recommend a crown coat sealer every 3–4 years for Santa Maria masonry chimneys and annual inspection of cap and damper condition." },
    ],
    metaTitle: "Chimney Services in Santa Maria, CA | Santa Barbara County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Santa Maria. Santa Barbara County agricultural community specialists. Request a free estimate online.",
  },

  // ── Fresno County ──────────────────────────────────────────────────────────
  {
    slug: "clovis",
    name: "Clovis",
    county: "Fresno County",
    countySlug: "fresno-county-ca",
    region: "Central Valley",
    population: "117,000",
    description:
      "Clovis sits immediately east of Fresno, separated from its neighbor by a boundary that residents often cross without noticing — yet Clovis maintains a distinct identity as the 'All-American City' with a strong civic pride, well-regarded schools, and a housing stock that skews newer and more uniformly suburban than Fresno proper. The Clovis Unified School District's reputation has driven significant 1980s–2010s residential development in the Shaw Meadows, Nees Avenue, and Copper River communities, producing a housing inventory dominated by factory-built fireplace systems rather than the older masonry systems more common in Fresno's historic neighborhoods. The city's Clovis Rodeo heritage and equestrian community in north Clovis gives it a more rural California character in its northern reaches.",
    chimneyContext:
      "Clovis's post-1980 factory-built fireplace inventory is reaching the 20–40-year maintenance window — an era where refractory panel assessment, damper condition, and liner inspection become essential. The older neighborhoods near downtown Clovis along 4th Street have 1950s–1960s masonry systems. The SJVAPCD No-Burn program applies throughout Fresno County, and Clovis residents with gas fireplace inserts can operate on more days per year than those with traditional wood-burning systems. Summer heat in Clovis regularly exceeds 105°F, cycling masonry and metal components through extreme thermal stress.",
    neighborhoods: ["Old Town Clovis", "Copper River", "Shaw Meadows", "Harlan Ranch", "Fancher Creek"],
    nearbyAreas: ["Fresno", "Sanger", "Reedley", "Madera"],
    nearbySlugs: ["fresno", "visalia", "bakersfield"],
    uniqueFact:
      "Clovis's Clovis Rodeo — established in 1914 — is one of the oldest rodeos in California, and the equestrian tradition in the north Clovis hills has produced a community with a higher rate of wood-burning stove use in outbuildings and barns than most suburban California cities, creating chimney service demands beyond the standard residential fireplace.",
    faqs: [
      { q: "My Clovis home from 1998 has a factory fireplace. Has it been too long between inspections if I haven't had one yet?", a: "At 27 years old, yes — it's overdue. Factory-built systems in the San Joaquin Valley's extreme thermal climate age faster than the same system in a coastal city. The 105°F+ summers and 30s-degree winter nights in Clovis cycle refractory panels and damper metal through greater expansion-contraction stress than manufacturers tested at. We find meaningful refractory panel deterioration in Central Valley factory systems 20–30% earlier than in coastal California systems." },
    ],
    metaTitle: "Chimney Services in Clovis, CA | Fresno County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Clovis. Fresno County suburban specialists. Factory-built and masonry systems. Request a free estimate online.",
  },

  // ── San Bernardino County ──────────────────────────────────────────────────
  {
    slug: "rialto",
    name: "Rialto",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "103,000",
    description:
      "Rialto occupies the flat industrial corridor west of San Bernardino, historically defined by its Route 66 heritage and the former Norton Air Force Base (now San Bernardino International Airport). The residential neighborhoods north of Baseline Road and along Riverside Avenue contain 1940s–1960s working-class single-family homes with original masonry chimneys built during Rialto's postwar expansion as a bedroom community for the military base and Inland Empire industrial economy. Southern Rialto's newer development from the 1980s–2000s near the 210 Freeway has factory-built systems at various stages of their maintenance life. Rialto's valley position means genuine winter cold and summer heat exceeding 100°F.",
    chimneyContext:
      "Rialto's older residential stock along the Route 66 corridor and in the historic neighborhoods north of Foothill Boulevard has masonry chimneys comparable in age and condition to San Bernardino and Fontana — systems approaching 60–75 years old that have experienced the thermal cycling of the Inland Empire climate without professional inspection in many cases. SCAQMD curtailment applies on Spare the Air days. The former Norton AFB area has some military-construction-era housing similar to what we encounter in Fairfield and other base-adjacent communities.",
    neighborhoods: ["Rialto Heights", "Willow Avenue Corridor", "Historic Route 66", "Linden", "Renaissance"],
    nearbyAreas: ["Fontana", "San Bernardino", "Colton", "Bloomington"],
    nearbySlugs: ["fontana", "san-bernardino", "ontario", "rancho-cucamonga"],
    uniqueFact:
      "Rialto sits along the original Route 66 alignment, and its historic Baseline Road and Foothill Boulevard corridors retain several original mid-century motor lodge and motel properties alongside the residential neighborhoods — a heritage that gives the city one of the most intact Route 66-era architectural streetscapes in the Inland Empire.",
    faqs: [
      { q: "My 1955 Rialto ranch home has the original brick fireplace. What's the risk of using it without inspection?", a: "The primary risks in a 70-year-old Inland Empire masonry system are: a deteriorated clay tile liner that allows combustion gases to seep into the surrounding masonry (carbon monoxide risk), a corroded or seized damper plate that restricts draft, and stage 2–3 creosote if the chimney has been regularly used. Any of these conditions makes operation unsafe. A Level 2 camera inspection identifies all of them and gives you a clear maintenance roadmap." },
    ],
    metaTitle: "Chimney Services in Rialto, CA | San Bernardino County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Rialto. Inland Empire postwar home specialists. San Bernardino County CSIA-certified. Request a free estimate online.",
  },

  // ─── Step 4 Part B: cities 26–70 ─────────────────────────────────────────

  // ── Los Angeles County (8 new) ────────────────────────────────────────────
  {
    slug: "south-gate",
    name: "South Gate",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / Southeast LA",
    population: "94,000",
    description:
      "South Gate sits along the Los Angeles River in the industrial heart of Southeast LA County, one of the oldest incorporated cities in this corridor with a residential history stretching back to the 1920s. Its neighborhoods — Hollydale, the area around Tweedy Mile, and the residential blocks east of Long Beach Boulevard — contain a high proportion of original 1930s–1950s working-class bungalows and California ranch homes, many never professionally inspected for chimney condition. South Gate has a large Latino community and a strong homeownership culture in its quieter residential pockets, separated from the industrial corridors along the river.",
    chimneyContext:
      "South Gate's pre-1950 masonry stock is among the oldest in Southeast LA County — original lime-mortar construction, early clay tile liners installed before modern standards, and many systems that were converted from coal to gas decades ago without a formal flue assessment. The 1987 Whittier Narrows and 1994 Northridge earthquakes both affected liner integrity in this area. SCAQMD Spare the Air restrictions apply.",
    neighborhoods: ["Hollydale", "Tweedy Mile", "South Gate Park", "Independence", "Loma Vista"],
    nearbyAreas: ["Lynwood", "Compton", "Downey", "Huntington Park"],
    nearbySlugs: ["compton", "downey", "norwalk", "los-angeles"],
    uniqueFact:
      "South Gate's Hollydale neighborhood — developed in the early 1920s as a planned working-class residential community — is one of the earliest examples of deed-restricted residential planning in Los Angeles County, producing a concentrated block of original 1920s bungalows with masonry chimneys now over a century old.",
    faqs: [
      { q: "My 1938 South Gate bungalow still has the original fireplace. Is it safe?", a: "Not without inspection. Pre-1940 SE LA bungalows commonly have either unlined masonry or early clay tile liners that predate modern standards. We perform a Level 2 camera inspection and provide a written report on liner condition, damper function, and any structural concerns. Carbon monoxide from a degraded liner is the primary safety risk in systems this age." },
    ],
    metaTitle: "Chimney Services in South Gate, CA | Southeast LA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in South Gate. Southeast LA older bungalow and ranch home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "carson",
    name: "Carson",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / South Bay",
    population: "92,000",
    description:
      "Carson occupies the South Bay between Torrance, Compton, and Long Beach — a community defined by its industrial corridors along the 405 Freeway and its stable residential neighborhoods that grew up around the former Dominguez Ranch in the 1960s and 1970s. Cal State Dominguez Hills anchors the city's educational identity, and the surrounding residential areas contain predominantly 1965–1985 single-family homes with factory-built fireplace systems now approaching or past their first major maintenance milestone. Carson's inland-of-the-coast position gives it more temperature variation than Torrance or Long Beach, driving consistent winter fireplace use.",
    chimneyContext:
      "Carson's 1960s–1980s factory-built fireplace inventory is in the key inspection window — systems at 40–60 years need refractory panel assessment, damper check, and liner verification. The city's industrial proximity means some residential properties experience elevated particulate settling in chimney flues. SCAQMD curtailment applies. Metal components are less aggressively corroded here than in directly coastal South Bay communities.",
    neighborhoods: ["Dominguez Hills", "South Carson", "Rancho Dominguez", "North Carson", "Avalon Corridor"],
    nearbyAreas: ["Torrance", "Long Beach", "Compton", "Gardena"],
    nearbySlugs: ["torrance", "long-beach", "compton", "inglewood"],
    uniqueFact:
      "The Dominguez Rancho — a 75,000-acre Mexican land grant from 1784 — once covered what is now Carson, Torrance, Gardena, and parts of Long Beach. The residential communities built on that land grant territory in the 1960s–1970s represent one of the most unified suburban development eras in the South Bay.",
    faqs: [
      { q: "My 1972 Carson tract home has a factory-built fireplace. Does it need inspection?", a: "At 53 years old, yes — well past the 30-year design life. Factory-built systems from the early 1970s used refractory materials that are now past their reliable service window. We inspect the full system and assess whether repair or replacement is the appropriate path." },
    ],
    metaTitle: "Chimney Services in Carson, CA | South Bay LA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Carson. South Bay LA factory-built fireplace specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "whittier",
    name: "Whittier",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Gabriel Valley / Southeast LA",
    population: "85,000",
    description:
      "Whittier is one of the most historically layered cities in Los Angeles County — founded by Quakers in 1887, birthplace of Richard Nixon, and home to one of the best-preserved historic downtown districts in the San Gabriel Valley. Uptown Whittier along Greenleaf Avenue contains 1890s–1920s commercial and residential architecture, and the surrounding residential neighborhoods extend through 1920s–1950s bungalows and ranch homes into the Whittier Hills communities above. The city experienced the 1987 Whittier Narrows earthquake — a 5.9 magnitude event centered just three miles north — which caused the most concentrated chimney liner damage of any LA County city relative to its size.",
    chimneyContext:
      "Whittier's proximity to the 1987 Whittier Narrows earthquake epicenter makes it one of the highest-priority markets in LA County for earthquake-related chimney liner inspection. Many homes here sustained liner cracks from the 1987 event that were never assessed, then experienced additional damage in 1994. The Whittier Hills communities above Colima Road have older custom homes with masonry systems and hillside exposure. SCAQMD curtailment applies.",
    neighborhoods: ["Uptown Whittier", "Whittier Hills", "Mar Vista", "Friendly Hills", "Penn Park"],
    nearbyAreas: ["La Habra", "Norwalk", "Pico Rivera", "La Mirada"],
    nearbySlugs: ["norwalk", "downey", "west-covina", "los-angeles"],
    uniqueFact:
      "The 1987 Whittier Narrows earthquake was centered at a depth of only 9 miles directly beneath the city — shallower and therefore more destructive to surface structures than the 1994 Northridge quake. Post-event surveys identified chimney damage in more than 40% of pre-1960 Whittier homes inspected.",
    faqs: [
      { q: "My Whittier home was built in 1952 and has never had a chimney inspection. What should I expect?", a: "In a 1952 Whittier home, we typically find the combined effects of both major local earthquakes — the 1987 Whittier Narrows and 1994 Northridge events — in the form of hairline cracks and joint separations in the clay tile liner. The Level 2 camera inspection documents all of this with photos and a written report. Catching these cracks before they widen further is far less expensive than waiting for them to require full liner replacement." },
    ],
    metaTitle: "Chimney Services in Whittier, CA | San Gabriel Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Whittier. Post-earthquake liner specialists. Uptown and Whittier Hills homes. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "hawthorne",
    name: "Hawthorne",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / South Bay",
    population: "86,000",
    description:
      "Hawthorne is a South Bay city with an outsized place in California history — birthplace of the Beach Boys, former home of Northrop Corporation's aircraft development facilities, and now headquarters of SpaceX. Its residential neighborhoods reflect the postwar aerospace industry boom: dense 1940s–1960s single-family homes between El Segundo and Inglewood, many in good condition from long-term homeownership but with chimney systems well into their service-life window. Hawthorne's proximity to LAX means persistent aircraft noise and the same vibration-related liner micro-cracking concerns we observe in Inglewood.",
    chimneyContext:
      "Hawthorne's 1940s–1960s masonry chimneys are at 65–85 years old — the stage where clay tile liner joint mortar commonly shows separation and section cracking, particularly following the 1994 Northridge earthquake. The city's South Bay position means moderate marine influence that accelerates corrosion of metal components faster than inland LA communities. SCAQMD Spare the Air rules apply.",
    neighborhoods: ["Bodger Park", "Holly Glen", "Ramona", "Prairie", "Hollyglen"],
    nearbyAreas: ["Inglewood", "El Segundo", "Lawndale", "Gardena"],
    nearbySlugs: ["inglewood", "torrance", "compton", "los-angeles"],
    uniqueFact:
      "Hawthorne's Holly Glen neighborhood — developed in the late 1940s specifically for returning World War II veterans through FHA financing — is one of the most intact examples of immediate postwar residential planning in the South Bay, with a chimney inventory almost entirely from a single 1946–1952 construction window.",
    faqs: [
      { q: "Does SpaceX's rocket testing at the Hawthorne facility cause any vibration effects on chimneys nearby?", a: "SpaceX's Hawthorne campus conducts engine testing under controlled conditions, but sustained low-frequency vibration from any proximate industrial operation can contribute to micro-cracking in clay tile liner joints over time — the same mechanism as aircraft vibration near LAX. We recommend annual inspection for properties within a half-mile of any sustained industrial vibration source." },
    ],
    metaTitle: "Chimney Services in Hawthorne, CA | South Bay | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Hawthorne. South Bay postwar home specialists. Holly Glen and surrounding neighborhoods. Request a free estimate online.",
  },
  {
    slug: "alhambra",
    name: "Alhambra",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Gabriel Valley",
    population: "83,000",
    description:
      "Alhambra sits at the western gateway of the San Gabriel Valley — bordered by Los Angeles, Monterey Park, and Pasadena — and contains one of the most significant concentrations of 1920s–1940s Period Revival residential architecture in the county. The residential blocks along Main Street, the Meridian Iron Works district, and the north Alhambra neighborhoods feature Spanish Colonial, Mission Revival, and Craftsman bungalows that represent some of the best-preserved early-20th-century housing in the region. Alhambra has a large Chinese-American and Asian-American population, and the community's strong emphasis on property maintenance correlates with above-average chimney inspection rates compared to neighboring cities.",
    chimneyContext:
      "Alhambra's 1920s–1940s masonry stock shares the same construction characteristics as Pasadena's historic districts — original soft brick, lime-based mortar, and in some pre-1940 properties, unlined or early-lined flues that predate modern standards. The Northridge earthquake (1994) affected clay tile liners throughout this part of the San Gabriel Valley. SCAQMD Spare the Air rules apply on high-pollution winter days.",
    neighborhoods: ["North Alhambra", "Midwick Tract", "Emery Park", "Alhambra Highlands", "Granada Park"],
    nearbyAreas: ["Monterey Park", "San Gabriel", "Pasadena", "El Monte"],
    nearbySlugs: ["pasadena", "el-monte", "west-covina", "los-angeles"],
    uniqueFact:
      "Alhambra's Midwick Tract neighborhood — a 1920s residential development around the former Midwick Country Club polo grounds — contains one of the most intact concentrations of 1920s Spanish Colonial Revival homes in the San Gabriel Valley, with chimneys that reflect both the architectural ambition and the construction limitations of the pre-Depression era.",
    faqs: [
      { q: "My 1928 Alhambra Spanish Colonial has the original fireplace with decorative tile. Can it be cleaned without damaging the tile?", a: "Yes, with the right technique. Original 1920s decorative tile surrounds in Alhambra homes require pH-appropriate cleaning chemicals and hand-brushing — not high-pressure washing or alkaline cleaners, which can permanently damage glazed tile and original grout. We use the same approach as in Pasadena's historic districts and San Francisco's Victorian neighborhoods." },
    ],
    metaTitle: "Chimney Services in Alhambra, CA | San Gabriel Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Alhambra. Period Revival and Spanish Colonial specialists. San Gabriel Valley CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "lakewood",
    name: "Lakewood",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / Southeast LA",
    population: "80,000",
    description:
      "Lakewood holds a unique place in American suburban history — when it was built between 1950 and 1953, it was the largest single planned residential development ever constructed, with 17,500 homes completed at a rate of more than 40 houses per day. That extraordinary construction pace produced a perfectly uniform housing inventory: virtually every home in the original Lakewood development was built within a three-year window, with identical or near-identical floor plans and chimney systems. Today those chimneys are 72–75 years old, placing the entire city's original masonry inventory at a synchronized late-service maintenance stage.",
    chimneyContext:
      "Lakewood's construction uniformity means its chimney inspection findings are among the most predictable in Los Angeles County — we know before arriving what era the system is from. Original 1950–1953 masonry chimneys here have clay tile liners in the critical late-service window: mortar joint separation and hairline cracking are the norm, not the exception. Many have been modified with gas log inserts that were never formally assessed for draft compatibility. SCAQMD curtailment applies.",
    neighborhoods: ["North Lakewood", "South Lakewood", "Lakewood Village", "Lakewood Mutual", "Carson Park"],
    nearbyAreas: ["Long Beach", "Downey", "Bellflower", "Cerritos"],
    nearbySlugs: ["long-beach", "downey", "bellflower", "norwalk"],
    uniqueFact:
      "Lakewood's 1950–1953 construction wave is documented in the architectural history 'Lakewood Story' — the mass-production homebuilding here directly inspired William Levitt's East Coast Levittowns, and the synchronized chimney aging it created produces a city-wide maintenance demand unlike any other community in California.",
    faqs: [
      { q: "My Lakewood home was built in 1952. Is the original chimney still serviceable?", a: "Possibly — but a Level 2 inspection is essential before continuing use. At 73 years old, the clay tile liner in a Lakewood original will typically show mortar joint separation in at least some sections. Many are still repairable with liner restoration rather than full replacement. The inspection gives you a definitive answer and a repair cost estimate if needed." },
    ],
    metaTitle: "Chimney Services in Lakewood, CA | Los Angeles County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Lakewood. Postwar planned community specialists. Los Angeles County CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "bellflower",
    name: "Bellflower",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "Southern California / Southeast LA",
    population: "78,000",
    description:
      "Bellflower occupies a compact residential corridor between Downey, Lakewood, and Long Beach in Southeast LA County. The city's residential character is predominantly 1950s–1970s single-family suburban — standard postwar Southern California construction with masonry chimneys in the older western neighborhoods and factory-built systems in the newer eastern areas along the 91 Freeway corridor. Bellflower's density and working-class residential identity have kept turnover high, which often correlates with deferred chimney maintenance as properties change hands without formal inspection.",
    chimneyContext:
      "Bellflower's postwar masonry chimneys are in the same late-service window as neighboring Downey and Lakewood — 60–75-year-old clay tile systems with predictable patterns of mortar joint separation and damper deterioration. The 1987 Whittier Narrows earthquake, centered just 10 miles north, affected liner integrity throughout this part of SE LA County. SCAQMD curtailment applies on Spare the Air days.",
    neighborhoods: ["North Bellflower", "South Bellflower", "Woodruff Corridor", "East Bellflower"],
    nearbyAreas: ["Downey", "Lakewood", "Norwalk", "Compton"],
    nearbySlugs: ["downey", "lakewood", "norwalk", "long-beach"],
    uniqueFact:
      "Bellflower's original identity as a dairy farming community before World War II is reflected in its street grid — the wide agricultural roads that served dairy operations were converted to residential streets in the 1950s building boom, producing unusually wide lots with deeper back yards than typical SE LA subdivision housing.",
    faqs: [
      { q: "How often should I have my Bellflower chimney inspected?", a: "Annually, per NFPA 211 — and for Bellflower homes built before 1965, a Level 2 camera inspection is overdue if it hasn't been done in the last 5 years. Post-1987 earthquake liner damage in this part of SE LA County remains the most common finding we document in uninspected homes." },
    ],
    metaTitle: "Chimney Services in Bellflower, CA | Southeast LA | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Bellflower. Southeast LA County postwar specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "baldwin-park",
    name: "Baldwin Park",
    county: "Los Angeles County",
    countySlug: "los-angeles-county-ca",
    region: "San Gabriel Valley",
    population: "75,000",
    description:
      "Baldwin Park is a dense, working-class San Gabriel Valley city at the 10/605 Freeway interchange, notable as the site of the original In-N-Out Burger (1948) and as one of the more industrially integrated residential communities in the eastern valley. The residential neighborhoods between Arrow Highway and the 10 Freeway contain 1940s–1960s single-family homes with masonry chimneys from the postwar suburban expansion. The city has a predominantly Latino community with a strong homeownership culture in its quieter residential pockets.",
    chimneyContext:
      "Baldwin Park's 1940s–1960s masonry chimneys are in the same critical inspection window as El Monte, West Covina, and neighboring San Gabriel Valley communities — clay tile liners at 65–85 years old, many never camera-inspected. SCAQMD curtailment applies. The 1987 Whittier Narrows and 1994 Northridge earthquakes both affected liner integrity in this part of the San Gabriel Valley.",
    neighborhoods: ["North Baldwin Park", "Maine Corridor", "Ramona Boulevard", "Baldwin Park Heights"],
    nearbyAreas: ["West Covina", "Covina", "El Monte", "Irwindale"],
    nearbySlugs: ["west-covina", "el-monte", "pomona", "los-angeles"],
    uniqueFact:
      "The first In-N-Out Burger drive-through opened on Francisquito Avenue in Baldwin Park in 1948 — and the surrounding residential blocks from that same era represent the oldest surviving postwar suburban housing in the central San Gabriel Valley.",
    faqs: [
      { q: "My Baldwin Park home is from 1948. What chimney services does it need?", a: "A Level 2 camera inspection is the right starting point. A 77-year-old system has been through both major San Gabriel Valley earthquakes and decades of thermal cycling in the inland heat. We inspect the full flue, firebox, damper, crown, and cap, and provide a written report with photos. This age category consistently shows mortar joint separation and damper deterioration." },
    ],
    metaTitle: "Chimney Services in Baldwin Park, CA | San Gabriel Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Baldwin Park. San Gabriel Valley postwar home specialists. CSIA-certified. Request a free estimate online.",
  },

  // ── Orange County (5 new) ─────────────────────────────────────────────────
  {
    slug: "westminster",
    name: "Westminster",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "91,000",
    description:
      "Westminster is the heart of Little Saigon — home to the largest Vietnamese-American community outside of Vietnam and one of the most culturally distinct cities in Orange County. The residential housing stock is predominantly 1960s–1970s suburban tract construction, with original masonry chimneys in the older western neighborhoods and factory-built systems in the eastern areas closer to Huntington Beach. Westminster's community culture places a high value on homeownership and property maintenance, which correlates with relatively attentive chimney upkeep — but the age of the underlying masonry still warrants regular professional assessment.",
    chimneyContext:
      "Westminster's 1960s–1970s masonry chimneys are now 50–65 years old, reaching the point where clay tile liner mortar joint separation and section cracking are common findings on camera inspection. Factory-built systems from the 1975–1985 era are past their 30-year design life. SCAQMD wood-burning curtailment applies throughout the city.",
    neighborhoods: ["Little Saigon", "West Westminster", "Midway City", "East Westminster", "Bolsa Chica adjacent"],
    nearbyAreas: ["Garden Grove", "Huntington Beach", "Anaheim", "Santa Ana"],
    nearbySlugs: ["garden-grove", "huntington-beach", "anaheim", "santa-ana"],
    uniqueFact:
      "Westminster's Bolsa Avenue corridor is the commercial and cultural spine of Little Saigon — one of the most economically vibrant ethnic commercial districts in California — and the adjacent residential blocks represent a community where nearly all original 1960s tract homes remain in active family ownership.",
    faqs: [
      { q: "My 1967 Westminster home has the original brick fireplace. What inspection level do I need?", a: "A Level 2 camera inspection is the appropriate standard for a 58-year-old system. In Westminster's 1960s housing stock we commonly find clay tile liner joints with mortar separation in 2–3 sections, original cast-iron damper plates that are corroded or warped, and evidence of gas log conversion without a formal flue assessment. The inspection report covers all of this." },
    ],
    metaTitle: "Chimney Services in Westminster, CA | Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Westminster. Little Saigon and Orange County postwar home specialists. Request a free estimate online.",
  },
  {
    slug: "newport-beach",
    name: "Newport Beach",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California / Coastal",
    population: "86,000",
    description:
      "Newport Beach is among the wealthiest coastal communities in California — a waterfront city of Balboa Island Victorians, Corona del Mar custom homes, and Newport Hills estates that has one of the most expensive residential real estate markets in the country. The diversity of housing eras mirrors the city's development history: original early-20th-century beach cottages on Balboa Peninsula, mid-century estates in the Newport Hills, and 1980s–2000s custom homes in Crystal Cove and Newport Coast. The Pacific Ocean's direct exposure along the entire city coastline creates one of the most aggressive marine air environments for chimney hardware in Southern California.",
    chimneyContext:
      "Newport Beach properties within a mile of the bay or ocean — particularly Balboa Peninsula, Lido Isle, and Corona del Mar — require marine-grade 316L stainless for all cap and metal component replacements. The historic beach cottages on Balboa Peninsula contain some of the oldest residential chimneys in Orange County. HOA communities in Newport Ridge and Newport Coast have specific architectural standards for chimney appearance. SCAQMD curtailment applies on high-pollution days.",
    neighborhoods: ["Balboa Peninsula", "Lido Isle", "Corona del Mar", "Newport Hills", "Newport Coast"],
    nearbyAreas: ["Costa Mesa", "Laguna Beach", "Irvine", "Huntington Beach"],
    nearbySlugs: ["costa-mesa", "irvine", "huntington-beach", "mission-viejo"],
    uniqueFact:
      "Balboa Island — Newport Beach's most densely developed residential area — has the highest property value per square foot of any island community in California outside of Coronado, and its beach cottages built between 1905 and 1935 contain some of the oldest continuously occupied residential chimneys in Orange County, all in a maximum marine corrosion environment.",
    faqs: [
      { q: "What chimney cap material do you recommend for my Newport Beach home near the water?", a: "For any Newport Beach property within a mile of the bay or ocean, we specify 316L marine-grade stainless exclusively — the same alloy used in marine hardware and boat fittings. Standard 304 stainless begins surface pitting within 3–5 years in Newport's salt-air environment. The 316L upgrade costs roughly 30–40% more than standard stainless but lasts 3–4 times longer in coastal conditions." },
    ],
    metaTitle: "Chimney Services in Newport Beach, CA | Coastal Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Newport Beach. Balboa Island, Corona del Mar, and marine-grade coastal specialists. Request a free estimate online.",
  },
  {
    slug: "buena-park",
    name: "Buena Park",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "82,000",
    description:
      "Buena Park is Northern Orange County's entertainment destination — home to Knott's Berry Farm, the original California theme park founded in 1920 — but its residential character is predominantly working-class suburban, with neighborhoods built during the 1950s–1970s expansion along Beach Boulevard. The residential housing stock has a higher proportion of original masonry chimneys than southern OC communities, reflecting the older construction era. Buena Park sits at the boundary of LA and Orange Counties, sharing the same SCAQMD air district and similar housing heritage as neighboring Fullerton and Anaheim.",
    chimneyContext:
      "Buena Park's 1950s–1970s residential stock has masonry chimneys now 50–75 years old — the same inspection window as comparable-era communities in Fullerton, Anaheim, and Norwalk. Factory-built systems from the 1975–1985 Knott's-area suburban expansion are past their design life. SCAQMD curtailment applies, and the city's proximity to the LA County border means many residents are familiar with both county's air quality programs.",
    neighborhoods: ["Los Coyotes", "Buena Park downtown", "Knott's area", "North Buena Park", "Whitaker-Jaynes"],
    nearbyAreas: ["Fullerton", "Anaheim", "La Palma", "Cerritos"],
    nearbySlugs: ["fullerton", "anaheim", "garden-grove", "orange"],
    uniqueFact:
      "Knott's Berry Farm began as a roadside berry stand in 1920 and grew into California's first theme park — the Ghost Town attraction built in the 1940s used original historic Western building materials, including masonry chimneys from actual ghost towns, that are preserved as functional architectural elements on the property.",
    faqs: [
      { q: "My 1963 Buena Park home has the original masonry fireplace. How urgent is inspection?", a: "At 62 years old, inspection is overdue if it hasn't been done in the last 5 years. Orange County's 1960s-era masonry chimneys consistently show clay tile liner mortar separation and cracking from thermal cycling and the 1994 Northridge seismic effects. Annual inspection is the NFPA 211 standard; a Level 2 camera scan is specifically recommended for any pre-1975 system." },
    ],
    metaTitle: "Chimney Services in Buena Park, CA | North Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Buena Park. North OC postwar home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "lake-forest",
    name: "Lake Forest",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California / South Orange County",
    population: "84,000",
    description:
      "Lake Forest developed along the Foothill Ranch and Portola Hills corridors of South Orange County, transitioning from the former Marine Corps Air Station El Toro (closed 2003) into a mixed residential and commercial community. The city's housing stock spans 1970s tract homes in the older El Toro areas to 1990s–2000s master-planned developments in Foothill Ranch and Portola Hills. Factory-built fireplaces are the dominant chimney type throughout, with the oldest systems now approaching 50 years old and the newest 1990s–2000s era installations reaching their first major inspection milestone.",
    chimneyContext:
      "Lake Forest's factory-built fireplace inventory ranges from 1970s Heatilator and Majestic units in the original El Toro residential neighborhoods — now past their design life — to 1990s–2000s systems in Foothill Ranch that are entering the 20–30-year inspection window. The foothill communities of Portola Hills border open wildland in the Cleveland National Forest, making spark-arrestor cap maintenance a genuine fire-season safety issue. SCAQMD curtailment applies.",
    neighborhoods: ["Foothill Ranch", "Portola Hills", "El Toro", "Lake Forest II", "Serrano"],
    nearbyAreas: ["Mission Viejo", "Irvine", "Laguna Hills", "Trabuco Canyon"],
    nearbySlugs: ["mission-viejo", "irvine", "tustin", "orange"],
    uniqueFact:
      "The former MCAS El Toro — one of the largest military airfields on the West Coast before its 2003 closure — occupied the center of what is now Lake Forest, and the residential communities built around its perimeter in the 1970s share a unique development character: all tract homes oriented away from the flight path, with chimneys designed to exhaust away from the prevailing runway approach direction.",
    faqs: [
      { q: "My Portola Hills home borders the Cleveland National Forest. What chimney precautions apply?", a: "Foothill Ranch and Portola Hills properties adjacent to the Cleveland National Forest are in or near a high fire-hazard severity zone. A 5/8-inch mesh spark-arrestor cap is required under California Building Code for these locations. We verify cap condition, mesh integrity, and secure attachment at every annual inspection for wildland-interface properties in Lake Forest." },
    ],
    metaTitle: "Chimney Services in Lake Forest, CA | South Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Lake Forest. Foothill Ranch, Portola Hills, and El Toro specialists. SCAQMD-compliant. Request a free estimate online.",
  },
  {
    slug: "tustin",
    name: "Tustin",
    county: "Orange County",
    countySlug: "orange-county-ca",
    region: "Southern California",
    population: "80,000",
    description:
      "Tustin has two distinct identities: the historic Old Town district along El Camino Real, with Victorian-era and early California Craftsman buildings dating to the 1880s–1920s, and the newer Tustin Legacy master-planned community developed on the former Marine Corps Air Station Tustin — recognizable by the two enormous concrete blimp hangars that remain as landmarks. The residential housing spans from original Old Town bungalows with masonry chimneys from the turn of the century through 1950s–1970s suburban development in central Tustin to newer Tustin Legacy construction from the 2000s–2020s with modern fireplace systems.",
    chimneyContext:
      "Old Town Tustin's pre-1940 residential properties have masonry systems that predate modern liner standards, comparable in age and condition to Old Towne Orange's historic core. Central Tustin's 1950s–1970s housing has clay tile masonry in the critical inspection window. Tustin Legacy's newer construction (2005–2020) has direct-vent and factory-built systems requiring their first formal inspections. SCAQMD curtailment applies throughout the city.",
    neighborhoods: ["Old Town Tustin", "Tustin Legacy", "North Tustin adjacent", "Columbus Square", "Rancho Santiago"],
    nearbyAreas: ["Santa Ana", "Irvine", "Orange", "Villa Park"],
    nearbySlugs: ["santa-ana", "irvine", "orange", "fullerton"],
    uniqueFact:
      "The two MCAS Tustin blimp hangars — built in 1942 to house K-Class blimps for Pacific coastal patrol — are among the largest wooden structures ever constructed and remain the most recognizable architectural landmarks in central Orange County; the residential communities now growing around their footprint represent the newest housing inventory in the city.",
    faqs: [
      { q: "My Old Town Tustin home from 1910 has the original fireplace. Is it safe to use?", a: "Not without a Level 2 inspection first. Pre-1920 Tustin homes often have unlined or early-lined masonry fireboxes — the same condition we encounter in Old Towne Orange and historic Pasadena. We camera-inspect the full flue and provide a written assessment. Restoration to operational status requires appropriate era-compatible materials." },
    ],
    metaTitle: "Chimney Services in Tustin, CA | Orange County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Tustin. Old Town historic and Tustin Legacy modern fireplace specialists. Orange County. Request a free estimate online.",
  },

  // ── Alameda County (5 new) ────────────────────────────────────────────────
  {
    slug: "san-leandro",
    name: "San Leandro",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / East Bay",
    population: "90,000",
    description:
      "San Leandro is Oakland's immediate southern neighbor — a community that developed its own identity as a working-class East Bay suburb in the 1940s–1960s, with a residential character defined by 1950s–1970s single-family homes and a strong Portuguese-American heritage. The city's residential neighborhoods between East 14th Street and the 580 Freeway contain a broad inventory of postwar masonry chimneys, and the hillside communities in the upper Washington Manor and Estudillo Estates areas have custom homes with more elaborate fireplace installations. BAAQMD Spare the Air restrictions apply.",
    chimneyContext:
      "San Leandro's postwar residential stock has clay tile masonry chimneys now 50–75 years old — in the same critical inspection window as Oakland's flatlands and Hayward's working-class neighborhoods. The 1989 Loma Prieta earthquake cracked liners in many East Bay cities, and San Leandro's proximity to the Hayward Fault means ongoing microseismic accumulation of liner damage. Hillside properties in the Estudillo Estates area face the same East Bay Hills wildfire interface concerns as Oakland and Berkeley.",
    neighborhoods: ["Washington Manor", "Estudillo Estates", "Castro Valley adjacent", "Bay-O-Vista", "Broadmoor"],
    nearbyAreas: ["Oakland", "Hayward", "Castro Valley", "San Lorenzo"],
    nearbySlugs: ["oakland", "hayward", "fremont", "berkeley"],
    uniqueFact:
      "San Leandro's Washington Manor neighborhood — developed in the early 1950s as a planned community for returning veterans — was one of the first suburban developments in the East Bay to include gas fireplaces as a standard feature, making it an early adopter of factory-built fireplace technology that is now reaching the end of its service life.",
    faqs: [
      { q: "Does the Hayward Fault affect chimney safety in San Leandro?", a: "Yes. San Leandro sits between the Hayward Fault and the Oakland Hills, in an area where microseismic activity from the fault contributes to cumulative clay tile liner damage over years. We treat any San Leandro hill-area property that hasn't been camera-inspected in the last 5 years as a priority for Level 2 inspection." },
    ],
    metaTitle: "Chimney Services in San Leandro, CA | Alameda County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in San Leandro. East Bay postwar home and hillside specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "livermore",
    name: "Livermore",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / Tri-Valley",
    population: "92,000",
    description:
      "Livermore occupies the eastern end of the Tri-Valley, where the Alameda Creek watershed opens into wine country vineyards and the Lawrence Livermore National Laboratory campus anchors a research and technology economy. The city's residential character is split between an older downtown core with early-20th-century residential architecture along First and Second Streets, and the 1970s–1990s suburban expansion of South Livermore, Springtown, and the Garaventa Hills communities. Livermore's inland position in the Livermore Valley gives it genuine four-season weather — summer highs routinely exceed 100°F and winter nights drop below freezing, creating more aggressive thermal cycling for masonry and metal components than coastal Bay Area cities.",
    chimneyContext:
      "Livermore's inland thermal extreme is measurably more damaging to masonry mortar joints than the Bay Area average — 100°F+ summer days and freezing winter nights create an expansion-contraction range comparable to the Central Valley rather than the coast. The 1980s–1990s suburban tracts have factory-built systems now in the 35–45-year inspection window. BAAQMD Spare the Air restrictions apply, and Livermore's wine country adjacency means the Diablo wind events that affect the Tri-Valley create fire-season spark exposure from any uncapped chimney.",
    neighborhoods: ["South Livermore", "Springtown", "Garaventa Hills", "Sunset West", "Downtown Livermore"],
    nearbyAreas: ["Pleasanton", "Dublin", "San Ramon", "Tracy"],
    nearbySlugs: ["pleasanton", "san-ramon", "fremont", "hayward"],
    uniqueFact:
      "Lawrence Livermore National Laboratory — one of the US's premier nuclear research facilities — sits on Livermore's eastern border, and the adjacent residential communities contain a higher-than-average proportion of technical professionals whose occupational precision correlates with more systematic home maintenance approaches, including above-average chimney inspection rates.",
    faqs: [
      { q: "My Livermore home gets very hot in summer and cold in winter. Does that affect my chimney faster?", a: "Yes — significantly. Livermore's temperature range between summer peaks (105°F+) and winter lows (below freezing) is among the widest in the Bay Area, creating thermal cycling in masonry mortar and metal components that we observe accelerating mortar joint failure at rates 30–40% faster than in coastal communities at the same age. Annual inspection and a crown coat sealer every 3–4 years are specifically recommended for Livermore properties." },
    ],
    metaTitle: "Chimney Services in Livermore, CA | Tri-Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Livermore. Tri-Valley and wine country specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "alameda",
    name: "Alameda",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / East Bay",
    population: "77,000",
    description:
      "The city of Alameda occupies a 10-square-mile island in San Francisco Bay, connected to Oakland by three bridges and a tube — a geographic isolation that has preserved an extraordinary collection of Victorian-era residential architecture. The 'Gold Coast' district along Central Avenue contains one of the most intact concentrations of late-Victorian and Edwardian homes in California, built between 1880 and 1915 when Alameda served as the San Francisco Bay Area's premier resort destination. The island's complete bay-water exposure means metal chimney components face marine corrosion from all directions, and the persistent bay fog keeps masonry in near-constant moisture contact year-round.",
    chimneyContext:
      "Alameda's Gold Coast Victorian homes have masonry chimneys from the 1880s–1915 era — some of the oldest in the Bay Area still in active residential use. Pre-1920 construction here frequently has unlined masonry fireboxes or early clay tile liners that predate modern standards. The island's marine exposure is extreme — 360-degree bay water proximity creates salt-air conditions more aggressive than any mainland East Bay community. BAAQMD Spare the Air restrictions apply.",
    neighborhoods: ["Gold Coast", "West End", "East End", "Bay Farm Island", "Harbor Bay"],
    nearbyAreas: ["Oakland", "San Leandro", "Bay Farm", "Emeryville"],
    nearbySlugs: ["oakland", "san-leandro", "berkeley", "hayward"],
    uniqueFact:
      "Alameda's Gold Coast is home to more original Queen Anne and Colonial Revival residences per block than any other neighborhood in Northern California — a distinction that makes it both a historic preservation landmark and the East Bay's most concentrated inventory of late-19th-century masonry chimneys requiring specialized heritage-appropriate maintenance.",
    faqs: [
      { q: "My 1898 Alameda Victorian has an ornate fireplace with original tile. Can you service it?", a: "Yes — this is exactly the type of work we specialize in for the Bay Area's Victorian housing stock. Pre-1900 Alameda homes often have unlined masonry flues and original cast-iron or glazed tile surrounds requiring careful, chemistry-appropriate cleaning. We inspect the flue with a camera, assess liner condition, and provide a written restoration report. The sea air around Alameda Island also means metal hardware needs annual inspection for early corrosion." },
    ],
    metaTitle: "Chimney Services in Alameda, CA | Victorian Island Specialists | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Alameda. Gold Coast Victorian and Edwardian fireplace specialists. Island marine-air experts. Request a free estimate online.",
  },
  {
    slug: "pleasanton",
    name: "Pleasanton",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / Tri-Valley",
    population: "82,000",
    description:
      "Pleasanton is the most affluent city in Alameda County — a Tri-Valley community with a historic downtown that predates its suburban growth and residential neighborhoods that reflect the 1970s–1990s prosperity of the Bay Area tech and professional corridor. The older Kottinger Ranch and Val Vista neighborhoods have 1970s–1980s custom homes with masonry fireplaces; newer communities like Birdland and Golden Eagle have 1990s–2000s factory-built systems. Pleasanton's inland Livermore Valley position gives it warmer summers and colder winters than coastal Bay Area communities, with genuine fireplace use from October through March.",
    chimneyContext:
      "Pleasanton's 1970s–1980s custom home masonry chimneys are now in the 40–55-year inspection window — older than many owners expect for a community that feels contemporary. The factory-built systems in 1990s developments are approaching their first major maintenance milestone. The Diablo wind events that affect the Tri-Valley create fire-season spark emission risk for any uncapped flue near the open grassland east of Pleasanton. BAAQMD Spare the Air applies.",
    neighborhoods: ["Kottinger Ranch", "Val Vista", "Birdland", "Golden Eagle", "Vintage Hills"],
    nearbyAreas: ["Livermore", "Dublin", "San Ramon", "Sunol"],
    nearbySlugs: ["livermore", "san-ramon", "fremont", "hayward"],
    uniqueFact:
      "Pleasanton's Alameda County Fairgrounds hosts the oldest county fair in California (established 1912) — the horse racing tradition and the surrounding historic downtown give the city an older civic identity than its 1970s–1990s residential expansion would suggest, and the original turn-of-the-century homes along First Street contain masonry chimneys that predate the city's modern development by 60+ years.",
    faqs: [
      { q: "My Pleasanton home from 1984 has a masonry fireplace. Is that unusual for this era?", a: "Not unusual in Pleasanton's custom home tracts from the early 1980s — the Tri-Valley's higher-income market continued to install traditional masonry chimneys through the 1980s, even as factory-built became standard in more affordable markets. A 1984 masonry system is now 41 years old, well within the window for a first comprehensive Level 2 camera inspection." },
    ],
    metaTitle: "Chimney Services in Pleasanton, CA | Tri-Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Pleasanton. Tri-Valley specialists for custom and tract homes. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "union-city",
    name: "Union City",
    county: "Alameda County",
    countySlug: "alameda-county-ca",
    region: "Bay Area / East Bay",
    population: "72,000",
    description:
      "Union City sits between Hayward and Fremont along the East Bay's industrial and residential corridor, with a significant Filipino-American, South Asian, and Latino community that reflects the broad diversity of the Bay Area's working-class homeowner base. The residential neighborhoods from the 1960s–1980s Decoto Road and Alvarado Boulevard corridors contain masonry chimneys approaching the end of their clay tile liner service life, and the city's newer Mission Foothills and Alvarado Niles communities have factory-built systems from the 1990s–2000s. The Hayward Fault runs through the eastern edge of Union City, with the same cumulative liner damage concerns as neighboring Hayward and Fremont.",
    chimneyContext:
      "Union City's 1960s–1980s residential stock has clay tile masonry systems now 45–65 years old — a maintenance window consistent with what we encounter throughout the southern East Bay. The Hayward Fault proximity in the eastern foothills means cumulative seismic microcracking is a factor for hillside-adjacent properties. BAAQMD Spare the Air rules apply county-wide.",
    neighborhoods: ["Decoto", "Alvarado", "Mission Foothills", "Alvarado Niles", "Dyer"],
    nearbyAreas: ["Hayward", "Fremont", "Newark", "San Leandro"],
    nearbySlugs: ["hayward", "fremont", "san-leandro", "oakland"],
    uniqueFact:
      "Union City's Decoto neighborhood — incorporated into Union City in 1959 along with Alvarado and Decoto townships — has an agricultural heritage dating to the 1870s, and the original farmhouse-era residential blocks on the eastern hillside contain some of the oldest surviving residential masonry chimneys in southern Alameda County.",
    faqs: [
      { q: "How do I know if the Hayward Fault has affected my Union City chimney?", a: "Hayward Fault microseismic activity causes cumulative clay tile liner cracking that is invisible from the firebox opening. The only reliable assessment method is a video camera inspection of the full flue. For Union City properties within a mile of the fault trace — particularly in the foothills east of Dyer Street — we recommend Level 2 inspection every 3–5 years as the minimum standard." },
    ],
    metaTitle: "Chimney Services in Union City, CA | Alameda County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Union City. East Bay specialists for postwar and hillside homes. CSIA-certified. Request a free estimate online.",
  },

  // ── San Diego County (1 new) ───────────────────────────────────────────────
  {
    slug: "san-marcos",
    name: "San Marcos",
    county: "San Diego County",
    countySlug: "san-diego-county-ca",
    region: "Southern California / North County",
    population: "96,000",
    description:
      "San Marcos has transformed over the past three decades from an agricultural North County community into one of San Diego's fastest-growing inland cities, anchored by Cal State San Marcos (opened 2002) and Palomar College. The residential housing stock reflects two distinct eras: older 1960s–1980s ranch homes in the San Marcos Road and Twin Oaks Valley corridors, and newer master-planned communities built throughout the 1990s–2010s in communities like San Elijo Hills and La Costa Meadows. San Marcos's inland position gives it more temperature variation than coastal North County, with hot summers that occasionally exceed 100°F and winter evenings cold enough for consistent fireplace use.",
    chimneyContext:
      "San Marcos's older residential stock from the 1960s–1980s has masonry chimneys in the same inspection window as comparable-era communities in Vista and Escondido — clay tile systems 45–65 years old, many never camera-inspected. The newer master-planned communities have factory-built systems from the 1990s–2000s reaching their first major maintenance milestone. San Marcos borders open hillsides in several residential zones, making spark-arrestor cap maintenance relevant during San Diego County's fire season.",
    neighborhoods: ["San Elijo Hills", "Twin Oaks Valley", "Richmar", "La Costa Meadows", "Old San Marcos"],
    nearbyAreas: ["Vista", "Carlsbad", "Escondido", "Oceanside"],
    nearbySlugs: ["vista", "carlsbad", "escondido", "oceanside"],
    uniqueFact:
      "San Marcos's rapid growth — from 17,000 residents in 1980 to nearly 100,000 today — mirrors Murrieta's trajectory in Riverside County and produced a similarly synchronized factory-built fireplace inventory across the 1990s–2000s master-planned communities that is now reaching the key first-inspection milestone.",
    faqs: [
      { q: "My San Marcos home in San Elijo Hills was built in 2004. When does the fireplace need inspection?", a: "At 21 years old, your system is right in the appropriate first-inspection window. Factory-built fireplaces in this age range commonly show early refractory panel surface cracking, minor damper oxidation, and the first signs of cap mesh debris accumulation — all inexpensive to address now and significantly costlier if left unaddressed through the next inspection cycle." },
    ],
    metaTitle: "Chimney Services in San Marcos, CA | North San Diego County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in San Marcos. San Elijo Hills and North County inland specialists. Request a free estimate online.",
  },

  // ── San Bernardino County (6 new) ─────────────────────────────────────────
  {
    slug: "hesperia",
    name: "Hesperia",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "High Desert",
    population: "100,000",
    description:
      "Hesperia occupies the Victor Valley in San Bernardino County's High Desert at an elevation of approximately 3,200 feet — higher than Lancaster and Palmdale and significantly colder in winter. The city experienced rapid residential growth in the 1990s–2000s as an affordable alternative to the Inland Empire valley communities, and its housing stock is predominantly factory-built fireplace systems from that era now reaching the 20–35-year first-major-inspection window. Hesperia's high desert winters are genuinely cold, with overnight lows regularly below 25°F, and the freeze-thaw mortar cycling is among the most aggressive in California for any community at this elevation.",
    chimneyContext:
      "Hesperia's combination of high elevation, genuine freezing winters, and summer temperatures exceeding 105°F creates a thermal cycling range that degrades masonry mortar joints and metal components faster than any other San Bernardino County community except the San Bernardino Mountain communities above 5,000 feet. Factory-built systems from the 1990s build-out are the dominant service need; older Hesperia homes from the 1960s–1970s agricultural era have masonry systems with visible freeze-thaw spall damage.",
    neighborhoods: ["Hesperia Heights", "Oak Hills", "Sultana", "Joshua Hills", "Hesperia Ranches"],
    nearbyAreas: ["Victorville", "Apple Valley", "Adelanto", "Phelan"],
    nearbySlugs: ["victorville", "apple-valley", "san-bernardino"],
    uniqueFact:
      "Hesperia sits 700 feet higher than Victorville — a difference that translates to 5–8 more freeze-thaw cycles per winter than the valley floor, making its masonry mortar deterioration rate measurably faster than its High Desert neighbors at the same construction age.",
    faqs: [
      { q: "How does Hesperia's freezing winter affect my chimney differently from valley communities?", a: "At 3,200 feet, Hesperia regularly sees overnight lows below 25°F — temperatures that produce genuine freeze-thaw mortar expansion cycles that are rare in the Inland Empire valley. Water that enters through a cracked crown or gap in the cap freezes overnight and expands, progressively widening micro-cracks. We recommend annual crown inspection and a crown coat sealer every 3 years for Hesperia masonry systems." },
    ],
    metaTitle: "Chimney Services in Hesperia, CA | High Desert | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Hesperia. High desert freeze-thaw specialists. San Bernardino County CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "chino",
    name: "Chino",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "91,000",
    description:
      "Chino sits on the flat dairy-farming plain at the western edge of San Bernardino County, historically California's most productive dairy region — though most of the dairies have now relocated east as residential development has spread from the Los Angeles Basin into the Chino Valley. The residential housing spans original 1960s–1980s suburban development in central Chino to the newer planned communities of College Park and Chino Spectrum from the 2000s–2010s. Chino's flat geography and dry climate moderate seasonal extremes somewhat compared to the mountains and high desert, but its inland position still produces hot summers and cold winter nights that drive meaningful fireplace use.",
    chimneyContext:
      "Chino's older residential neighborhoods have masonry chimneys in the 40–65-year inspection window. The newer planned communities have factory-built systems from the 2000s–2010s approaching their first formal inspection milestone. SCAQMD curtailment applies throughout the city. Chino's position downwind of the former dairy corridor means historically elevated particulate settling in chimney flues in some areas.",
    neighborhoods: ["College Park", "Chino Hills border", "El Prado", "Chino Spectrum", "Downtown Chino"],
    nearbyAreas: ["Chino Hills", "Ontario", "Pomona", "Corona"],
    nearbySlugs: ["chino-hills", "ontario", "pomona", "rancho-cucamonga"],
    uniqueFact:
      "Chino's dairy heritage earned it the nickname 'Dairy Capital of the World' in the mid-20th century, and the conversion of former dairy land into residential subdivisions has produced one of the most consistent post-agricultural suburban housing inventories in the Inland Empire — with a chimney age distribution that closely mirrors the conversion timeline of specific dairy parcels.",
    faqs: [
      { q: "My 2008 Chino home in College Park has a gas fireplace. Does it need inspection?", a: "Yes — gas fireplaces need annual inspection for carbon monoxide safety and vent integrity, regardless of whether visible smoke is produced. At 17 years old, the vent connections, burner assembly, and pilot system should be checked. Gas appliances that haven't been inspected in 5+ years commonly show debris accumulation in the burner tray and early corrosion in the vent connection joints." },
    ],
    metaTitle: "Chimney Services in Chino, CA | San Bernardino County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Chino. Inland Empire specialists for all fireplace types. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "chino-hills",
    name: "Chino Hills",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire / Tri-county",
    population: "83,000",
    description:
      "Chino Hills sits at the geographic convergence of Los Angeles, Orange, and San Bernardino counties — a rolling, hilly community developed almost entirely between 1985 and 2005 as one of the Inland Empire's most upscale planned communities. The residential character throughout is large-lot custom and semi-custom homes on ridges and canyon-adjacent lots, with sweeping views of the surrounding counties and the Santa Ana Mountains. The hilly terrain and abundant open space create direct wildland-urban interface conditions across much of the city, and factory-built fireplace systems — the dominant chimney type in Chino Hills — are now in their 20–40-year key inspection window.",
    chimneyContext:
      "Chino Hills's ridgeline and canyon-side residential properties border open chaparral that is regularly classified as high fire-hazard severity zone. Santa Ana wind events funnel through the canyon terrain, making spark-arrestor caps a genuine fire-season safety requirement. The 1990s–2000s factory-built systems throughout Chino Hills are reaching the refractory panel and damper assessment stage. SCAQMD curtailment applies.",
    neighborhoods: ["The Preserve", "Butterfield Ranch", "Ridgeline Estates", "Carbon Canyon", "Eagle Ridge"],
    nearbyAreas: ["Chino", "Pomona", "Diamond Bar", "Brea"],
    nearbySlugs: ["chino", "pomona", "ontario", "rancho-cucamonga"],
    uniqueFact:
      "Chino Hills State Park — 14,000 acres of preserved coastal sage scrub and grassland entirely within the city boundaries — means that Chino Hills has a higher ratio of adjacent wildland to residential development than any other incorporated city in San Bernardino County, directly elevating the fire-season chimney maintenance priority for all adjacent properties.",
    faqs: [
      { q: "My Chino Hills home overlooks the canyon. How does that affect my chimney risk?", a: "Canyon-adjacent properties in Chino Hills experience channeled Santa Ana winds that accelerate significantly through terrain features — conditions that increase ember transport distance from an uncapped or inadequately screened chimney. We also inspect the exterior crown and cap attachment points for wind-loosening on hillside properties, since sustained high-velocity wind events can shift poorly secured caps." },
    ],
    metaTitle: "Chimney Services in Chino Hills, CA | San Bernardino County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Chino Hills. Hillside wildland-interface and factory-built specialists. Request a free estimate online.",
  },
  {
    slug: "upland",
    name: "Upland",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "78,000",
    description:
      "Upland calls itself the 'City of Gracious Living' — a designation earned through the early-20th-century residential development along Euclid Avenue's landmark divided boulevard, which features towering palm trees flanking a landscaped median. The historic central neighborhoods north of Foothill Boulevard contain 1900s–1930s Victorian and Craftsman homes that represent some of the oldest residential masonry chimneys in San Bernardino County. The city's residential character transitions from these historic areas through 1950s–1970s postwar development to newer communities in north Upland near the San Gabriel Mountain foothills.",
    chimneyContext:
      "Upland's historic core along Euclid Avenue and the north-south residential streets behind it contains early-20th-century masonry chimneys comparable to those in Pasadena and Redlands — original soft brick with lime mortar, and in some pre-1930 properties, flues that predate clay tile liner requirements. The foothill communities above the 210 Freeway sit in a designated high fire-hazard zone. Mountain cold-air drainage keeps Upland's northern neighborhoods colder on winter nights than the valley floor communities to the south. SCAQMD applies.",
    neighborhoods: ["Historic Upland", "Euclid Avenue Corridor", "North Upland", "UplandCity Limits", "San Antonio Heights"],
    nearbyAreas: ["Ontario", "Rancho Cucamonga", "Claremont", "Fontana"],
    nearbySlugs: ["ontario", "rancho-cucamonga", "pomona", "fontana"],
    uniqueFact:
      "Upland's Euclid Avenue was planted with Washington palms in 1906 — the same year as the San Francisco earthquake — and the historic residential blocks that flank this boulevard contain the second-highest concentration of intact Craftsman and Victorian homes in San Bernardino County, after Redlands.",
    faqs: [
      { q: "My 1924 Upland Craftsman is in the historic district. Are there special chimney service requirements?", a: "Upland's historic neighborhoods don't have the same formal architectural review requirements as Santa Barbara or Old Towne Orange, but the materials and methods still matter for preservation. Original soft brick and lime mortar can be damaged by alkaline cleaners or high-pressure washing. We use pH-appropriate chemistry and gentle brushing techniques for all historic masonry work in Upland's early-20th-century neighborhoods." },
    ],
    metaTitle: "Chimney Services in Upland, CA | Inland Empire | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Upland. Historic Craftsman and Euclid Avenue home specialists. San Bernardino County. Request a free estimate online.",
  },
  {
    slug: "apple-valley",
    name: "Apple Valley",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "High Desert",
    population: "73,000",
    description:
      "Apple Valley sits on the High Desert's Victor Valley floor at approximately 2,900 feet elevation — long associated with Roy Rogers and Dale Evans, who made their home here. The community retains a rural character with large lots, equestrian properties, and a housing stock that ranges from original 1950s–1970s desert ranch homes to 1990s–2000s suburban expansion along Bear Valley Road. Apple Valley's extreme high-desert climate — summer highs above 108°F and winter lows in the low 20s — creates severe thermal cycling conditions for masonry and metal components, comparable to Victorville to the north.",
    chimneyContext:
      "Apple Valley's thermal extremes produce masonry mortar deterioration at rates among the highest in California for occupied residential communities. The 80°F+ seasonal swing between summer peak and winter low cycles components through expansion and contraction far more aggressively than coastal California climates. Older desert ranch homes from the 1960s–1970s have masonry systems that reflect the informal construction standards of that era in the Victor Valley. The town has no county page but links to the San Bernardino County page.",
    neighborhoods: ["Apple Valley Ranchos", "Sitting Bull", "Winding Road", "Jess Ranch", "Mariana Hills"],
    nearbyAreas: ["Victorville", "Hesperia", "Adelanto", "Barstow"],
    nearbySlugs: ["victorville", "hesperia", "san-bernardino"],
    uniqueFact:
      "Apple Valley's Roy Rogers–Dale Evans Museum (now relocated) was one of the most visited tourist attractions in the High Desert, and Roy Rogers Ranch on Happy Trails Highway contained the personal residence where the famous entertainers kept their home fireplaces burning through the desert winter — a property that now serves as a neighborhood landmark in the broader Apple Valley community.",
    faqs: [
      { q: "My Apple Valley home from 1972 has never been inspected. What's likely wrong with the chimney?", a: "In a 53-year-old High Desert masonry system, the most common findings are: significant mortar joint separation in clay tile liner sections from 50+ years of thermal cycling, a corroded or seized cast-iron damper plate, crown cracking from freeze-thaw cycles, and accumulated debris in the flue from seasonal non-use. We document all of these with a camera and provide a prioritized repair assessment." },
    ],
    metaTitle: "Chimney Services in Apple Valley, CA | High Desert | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Apple Valley. High desert thermal-cycling specialists. San Bernardino County CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "redlands",
    name: "Redlands",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county-ca",
    region: "Inland Empire",
    population: "72,000",
    description:
      "Redlands is the most architecturally distinguished city in the Inland Empire — a Victorian-era citrus-farming town that accumulated significant wealth in the late 19th century from the Washington navel orange industry and invested it in grand residential architecture. The downtown historic district and the Smiley Heights neighborhood contain an extraordinary collection of 1880s–1920s Victorian, Craftsman, and Mission Revival homes, many on substantial lots with elaborate masonry chimney systems. The University of Redlands anchors the city's educational identity, and the community's historic preservation ethic has kept the downtown residential neighborhoods exceptionally well-maintained.",
    chimneyContext:
      "Redlands's historic residential district has masonry chimneys from the 1880s–1920s era that require the same specialized handling as Pasadena's Craftsman district — original soft brick, lime-based mortar, and in some properties, unlined masonry fireboxes from the pre-liner era. These systems must be inspected with a camera before use and cleaned with pH-appropriate chemistry to avoid surface damage. The mountain cold-air drainage from the San Bernardino Mountains keeps Redlands's northern neighborhoods significantly colder on winter nights than Riverside or San Bernardino. SCAQMD applies.",
    neighborhoods: ["Smiley Heights", "Prospect Park", "East Redlands", "The Highlands", "University District"],
    nearbyAreas: ["San Bernardino", "Loma Linda", "Colton", "Yucaipa"],
    nearbySlugs: ["san-bernardino", "fontana", "rialto", "riverside"],
    uniqueFact:
      "Redlands was home to more millionaires per capita than any California city outside of San Francisco during the 1890s orange-boom era — the ornate Victorian homes built with that citrus wealth represent the finest residential architecture in the Inland Empire, and their masonry chimneys are among the oldest continuously occupied in the region.",
    faqs: [
      { q: "My 1905 Redlands Victorian is in the historic district. Does chimney repair require special approval?", a: "Redlands's historic districts have architectural review guidelines for exterior changes, and chimney repair or cap replacement on historically contributing properties should use period-appropriate materials — lime-based mortars for masonry repair, profile-neutral cap styles, and historically compatible finishes. We carry appropriate materials and can provide documentation for the architectural review process." },
    ],
    metaTitle: "Chimney Services in Redlands, CA | Victorian Inland Empire | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Redlands. Victorian historic district and citrus-era home specialists. Inland Empire CSIA-certified. Request a free estimate online.",
  },

  // ── Riverside County (3 new) ──────────────────────────────────────────────
  {
    slug: "menifee",
    name: "Menifee",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire / Southwest Riverside County",
    population: "102,000",
    description:
      "Menifee is one of California's fastest-growing cities of the 2010s–2020s, incorporated in 2008 from formerly unincorporated Riverside County land in the Sun City/Menifee Valley corridor. The city's residential character is almost entirely 2000s–2020s master-planned development — newer factory-built and direct-vent gas fireplace systems that are entering their first professional inspection window. Menifee attracts a mix of retirees in the Sun City communities and younger families in the newer Audie Murphy Ranch and Copper Canyon developments, with a housing stock that is among the newest in Riverside County.",
    chimneyContext:
      "Menifee's near-entirely post-2000 housing inventory means its fireplace systems are younger than most California cities — the oldest are now 20–25 years old, and first inspections for refractory panel condition and damper assessment are the primary service need. The Sun City retirement communities have somewhat older homes (1980s–1990s) with factory-built systems in the 35–45-year range. Southwest Riverside County's Santa Ana wind corridor affects Menifee during autumn events, and hillside-adjacent properties in the Audie Murphy Ranch area are in a high fire-hazard zone.",
    neighborhoods: ["Sun City", "Audie Murphy Ranch", "Copper Canyon", "Heritage Lakes", "Romoland"],
    nearbyAreas: ["Murrieta", "Perris", "Lake Elsinore", "Hemet"],
    nearbySlugs: ["murrieta", "temecula", "hemet", "riverside"],
    uniqueFact:
      "Menifee incorporated in 2008 as California was experiencing the housing market crash — making it one of the few cities in state history to incorporate during a major residential downturn, and giving it a housing inventory that skews heavily toward pre-2008 construction that has since aged into the first-inspection window.",
    faqs: [
      { q: "My Menifee home was built in 2003. Has the fireplace ever needed service?", a: "At 22 years old, yes — this is the right time for a first comprehensive inspection. Factory-built systems at this age commonly show early refractory panel surface cracking, minor damper oxidation, and the first signs of heat shield joint separation. Catching these in the early stage keeps repair costs low. We inspect the full system and provide a written baseline report." },
    ],
    metaTitle: "Chimney Services in Menifee, CA | Southwest Riverside County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Menifee. Sun City and new-build fireplace specialists. Riverside County CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "hemet",
    name: "Hemet",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire / San Jacinto Valley",
    population: "84,000",
    description:
      "Hemet sits in the San Jacinto Valley — a broad inland basin at approximately 1,500 feet elevation, surrounded by the San Jacinto Mountains to the east and the Santa Rosa Mountains to the south. The city has historically been a retirement and agricultural community, and its residential housing stock reflects that heritage: a high proportion of 1950s–1980s single-family homes, many owned by long-term residents who have occupied the same property for decades. Hemet's elevation and valley position produce genuine four-season weather — winter nights regularly drop below freezing, summer temperatures exceed 105°F, and the Santa Ana wind events that funnel through the San Jacinto Pass create high fire-risk conditions for eastern hillside properties.",
    chimneyContext:
      "Hemet's older residential inventory has masonry chimneys in the 45–75-year inspection window — the same era as comparable communities in Riverside and the San Bernardino Valley. Long-term homeownership in Hemet correlates with properties where the fireplace has been used continuously for decades without a camera inspection. The San Jacinto Mountains border creates a genuine freeze-thaw mortar cycling concern for properties in the eastern foothills near Idyllwild Road. SCAQMD curtailment applies.",
    neighborhoods: ["West Hemet", "East Hemet", "Valle Vista", "Mystic Lake", "Soboba Springs"],
    nearbyAreas: ["San Jacinto", "Perris", "Menifee", "Beaumont"],
    nearbySlugs: ["menifee", "riverside", "murrieta", "temecula"],
    uniqueFact:
      "Hemet's Ramona Bowl — a natural amphitheater in the Ramona Hills — hosts the Ramona Pageant, California's official outdoor drama, performed annually since 1923. The surrounding residential properties in the Ramona Hills community sit at the base of steep chaparral hillsides that are designated high fire-hazard, making spark-arrestor maintenance directly relevant for eastern Hemet homeowners.",
    faqs: [
      { q: "My Hemet home has been in the family since 1965. The fireplace has always worked fine — does it still need inspection?", a: "Yes — a fireplace that 'works fine' from the hearth opening can still have significant liner damage, creosote buildup, or structural issues that only a camera reveals. In 60-year-old Hemet masonry systems, we consistently find clay tile joints with significant mortar separation and damper plates that are no longer sealing properly. The inspection is the only definitive way to know what's actually happening inside the flue." },
    ],
    metaTitle: "Chimney Services in Hemet, CA | San Jacinto Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Hemet. San Jacinto Valley retirement and long-term homeowner specialists. Request a free estimate online.",
  },
  {
    slug: "indio",
    name: "Indio",
    county: "Riverside County",
    countySlug: "riverside-county-ca",
    region: "Inland Empire / Coachella Valley",
    population: "90,000",
    description:
      "Indio anchors the eastern end of the Coachella Valley — the date palm capital of the United States and the site of the Coachella and Stagecoach music festivals. The desert climate here is extreme by any measure: summer highs regularly reach 115°F+, making it one of the hottest inhabited cities in the US, while winter evenings drop into the mid-30s — a 75°F+ seasonal swing that is among the most thermally aggressive conditions for chimney masonry in California. Indio's residential population is a mix of year-round residents and seasonal 'snowbirds' who use their homes primarily in the October–April period, which happens to coincide with fireplace season.",
    chimneyContext:
      "Indio's Coachella Valley position creates a uniquely challenging chimney maintenance environment: extreme summer heat cycles metal components through expansion ranges that accelerate fatigue, and the desert's low humidity causes mortar to dry and crack faster than in coastal or valley communities. Chimneys in infrequently-occupied seasonal homes accumulate significant debris, bird nesting, and wasp colony activity during the summer months when the home is empty. Annual inspection is essential before first-of-season use for seasonal residents.",
    neighborhoods: ["Indian Springs", "Eldorado", "Shadow Hills", "Desert Country Club", "Northside"],
    nearbyAreas: ["Coachella", "La Quinta", "Palm Desert", "Cathedral City"],
    nearbySlugs: ["riverside", "hemet", "menifee", "corona"],
    uniqueFact:
      "Indio holds the annual National Date Festival — celebrating the Coachella Valley's date palm agriculture since 1921 — and the date palm-lined residential boulevards of the city's historic neighborhoods contain some of the oldest continuously occupied desert residential properties in Riverside County, with masonry chimneys reflecting the construction standards of the 1930s–1950s California desert homebuilding era.",
    faqs: [
      { q: "We use our Indio home only October through April. Should we inspect the chimney before each season?", a: "Yes — pre-season inspection is essential for Indio seasonal properties. Summer vacancies allow birds, rodents, and large wasp colonies to establish nests in unoccupied chimneys. The extreme summer heat (115°F+) also cycles metal components through thermal ranges that can warp damper plates and deteriorate cap gaskets. We offer pre-season inspection scheduling specifically for Coachella Valley seasonal residents." },
    ],
    metaTitle: "Chimney Services in Indio, CA | Coachella Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Indio. Coachella Valley desert and seasonal home specialists. Riverside County. Request a free estimate online.",
  },

  // ── San Mateo County (1 new) ──────────────────────────────────────────────
  {
    slug: "redwood-city",
    name: "Redwood City",
    county: "San Mateo County",
    countySlug: "san-mateo-county-ca",
    region: "Bay Area / Peninsula",
    population: "84,000",
    description:
      "Redwood City carries the slogan 'Climate Best by Government Test' — a reference to a NOAA ranking from the early 20th century that cited the city's consistently mild temperatures as among the finest in the United States. That mild climate reflects Redwood City's position on the mid-Peninsula where San Francisco Bay meets the Santa Cruz Mountain foothills, sheltered from direct ocean fog while still benefiting from marine moderation. The city is now a major tech hub (Oracle's long-term home), but its residential neighborhoods in the Friendly Acres, Farm Hill, and Edgewood areas retain the character of postwar Bay Area suburban development — with 1950s–1970s ranch homes and masonry chimneys in the same critical inspection window as comparable communities across the Peninsula.",
    chimneyContext:
      "Redwood City's postwar residential stock has clay tile masonry chimneys now 50–75 years old — approaching the late-service window. The Farm Hill and Edgewood neighborhoods on the eastern foothills above Edgewood Road border open grassland in a designated high fire-hazard zone. BAAQMD Spare the Air restrictions apply. The city's mild climate means residents use fireplaces for ambiance as much as heat, which can give a false sense that maintenance is less critical than in colder climates — but even infrequent use warrants annual inspection.",
    neighborhoods: ["Farm Hill", "Friendly Acres", "Edgewood", "Stambaugh Heller", "Woodside Plaza"],
    nearbyAreas: ["Menlo Park", "San Mateo", "Belmont", "Woodside"],
    nearbySlugs: ["san-mateo", "daly-city", "san-francisco"],
    uniqueFact:
      "Redwood City's Farm Hill neighborhood — developed on former dairy land in the 1950s–1960s — contains one of the mid-Peninsula's most intact collections of original postwar ranch homes, most with single masonry chimneys built to the same Doelger-era specifications as Daly City's Westlake District, placed on hillside lots that trade the ocean-fog exposure for ridge-wind exposure.",
    faqs: [
      { q: "My Redwood City home is on the Farm Hill slope. Does the hillside location affect my chimney?", a: "Hillside properties in Farm Hill and Edgewood face two concerns beyond those of flat Redwood City homes: elevated wind exposure that can loosen poorly secured caps, and proximity to the open grassland of Edgewood Park (a designated fire-hazard zone) where spark-arrestor cap integrity is directly relevant to wildfire risk. We verify cap attachment security and mesh condition at every annual inspection for hillside-adjacent properties." },
    ],
    metaTitle: "Chimney Services in Redwood City, CA | San Mateo County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Redwood City. Peninsula and hillside specialists. CSIA-certified. Request a free estimate online.",
  },

  // ── Santa Clara County (3 new) ────────────────────────────────────────────
  {
    slug: "mountain-view",
    name: "Mountain View",
    county: "Santa Clara County",
    countySlug: "santa-clara-county-ca",
    region: "Bay Area / Silicon Valley",
    population: "82,000",
    description:
      "Mountain View sits at the geographic center of Silicon Valley — the Googleplex occupies its northern waterfront, and the Castro Street pedestrian mall anchors a vibrant downtown. Its residential neighborhoods are dominated by 1950s–1970s ranch homes built during the postwar aerospace and technology boom, nearly all of which have original clay-tile-lined masonry chimneys installed when single fireplaces were standard in tract home construction. The 1989 Loma Prieta earthquake cracked or displaced liner tiles in thousands of Santa Clara County homes including Mountain View; many of those cracks remain uninspected in homes that changed hands multiple times since.",
    chimneyContext:
      "Mountain View's postwar ranch home inventory is in the same late-service chimney inspection window as Sunnyvale and Santa Clara — 50–75-year-old clay tile liners, many with post-Loma Prieta earthquake damage that has never been formally assessed. The BAAQMD Spare the Air program restricts wood burning on poor air-quality winter days. Many Mountain View homeowners have converted to gas inserts, but gas appliances still require annual carbon monoxide safety inspection.",
    neighborhoods: ["Old Mountain View", "Moffett Field area", "Rex Manor", "Cuernavaca", "North Whisman"],
    nearbyAreas: ["Sunnyvale", "Palo Alto", "Los Altos", "Santa Clara"],
    nearbySlugs: ["sunnyvale", "santa-clara", "palo-alto", "milpitas"],
    uniqueFact:
      "Mountain View's NASA Ames Research Center — the facility that houses the world's largest wind tunnel and pioneered much of the Bay Area's aerospace research economy — sits directly adjacent to residential neighborhoods where the postwar aerospace workers once lived, and whose original ranch homes contain the same era chimney systems as every other Silicon Valley postwar tract.",
    faqs: [
      { q: "My 1961 Mountain View home was inspected after the Loma Prieta earthquake but not since. Is another inspection needed?", a: "Yes. A 1989 post-earthquake inspection cleared the immediate damage concerns, but a 36-year gap since then represents significant additional thermal cycling and potential ongoing seismic microcracking from subsequent Bay Area events. The clay tile liner in your 64-year-old system has aged considerably since that inspection. We recommend a current Level 2 camera scan to document today's actual condition." },
    ],
    metaTitle: "Chimney Services in Mountain View, CA | Silicon Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Mountain View. Silicon Valley ranch home specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "milpitas",
    name: "Milpitas",
    county: "Santa Clara County",
    countySlug: "santa-clara-county-ca",
    region: "Bay Area / Silicon Valley",
    population: "80,000",
    description:
      "Milpitas sits at the northeastern corner of Santa Clara County — a South Bay community between San Jose and Fremont with a significant South Asian, Vietnamese, and Chinese-American population that reflects the Bay Area's tech-industry immigrant community. The city's residential stock spans 1960s–1980s single-family homes in the established Great Mall-adjacent neighborhoods to newer condominium and townhome development near the BART extension. The older single-family areas have masonry chimneys in the critical late-service inspection window, and many have been converted to gas inserts that require annual carbon monoxide safety inspection.",
    chimneyContext:
      "Milpitas's 1960s–1980s masonry chimneys are approaching or past the 50–65-year mark — the expected service window for clay tile liner assessment. The city sits in the seismically active zone between the Hayward Fault to the north and the Calaveras Fault to the east, and cumulative seismic microcracking is a factor for older properties in both the flatland and hillside neighborhoods. BAAQMD Spare the Air restrictions apply.",
    neighborhoods: ["Sunnyhills", "Berryessa adjacent", "Great Mall area", "Townsend", "Alviso border"],
    nearbyAreas: ["San Jose", "Fremont", "Newark", "Santa Clara"],
    nearbySlugs: ["san-jose", "fremont", "sunnyvale", "mountain-view"],
    uniqueFact:
      "Milpitas's proximity to two active fault systems — the Hayward and Calaveras — places it in the highest cumulative seismic-damage risk zone for clay tile chimney liners of any Santa Clara County city, a fact that underscores the importance of regular camera inspection for any pre-1990 masonry system here.",
    faqs: [
      { q: "My 1974 Milpitas home is between two fault lines. How often should I inspect the chimney?", a: "Annual inspection is the NFPA 211 minimum, and for Milpitas properties between the Hayward and Calaveras faults we specifically recommend a Level 2 camera scan at least every 3 years rather than relying on visual inspection alone. Microseismic events on both faults contribute to cumulative liner cracking that standard visual assessment cannot detect." },
    ],
    metaTitle: "Chimney Services in Milpitas, CA | Santa Clara County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Milpitas. Fault-zone specialists. Santa Clara County CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "palo-alto",
    name: "Palo Alto",
    county: "Santa Clara County",
    countySlug: "santa-clara-county-ca",
    region: "Bay Area / Silicon Valley",
    population: "68,000",
    description:
      "Palo Alto is the intellectual center of Silicon Valley — home to Stanford University, the venture capital firms of Sand Hill Road, and more tech company founding stories than perhaps any other city its size on earth. Its residential neighborhoods reflect the full arc of Bay Area architectural history: Professorville contains 1890s–1910s Queen Anne Victorians and Craftsman homes built for Stanford faculty; Midtown and South Palo Alto have 1950s–1970s ranch homes from the postwar engineering boom; and Crescent Park has 1920s–1940s Period Revival estates. This span of construction eras means Palo Alto's chimney inventory includes some of the oldest and most historically significant residential masonry systems in Silicon Valley.",
    chimneyContext:
      "Palo Alto's Professorville and Old Palo Alto neighborhoods have masonry chimneys from the 1890s–1920s era — some of the oldest in Santa Clara County still in residential use. Pre-1920 construction here, as in Berkeley and San Francisco, frequently has unlined or early-lined masonry that requires camera inspection before use. The postwar ranch homes of Midtown and South Palo Alto have clay tile liners now approaching 60–75 years old. The 1989 Loma Prieta earthquake affected liner integrity throughout the Peninsula; BAAQMD Spare the Air applies.",
    neighborhoods: ["Professorville", "Old Palo Alto", "Midtown", "South Palo Alto", "Crescent Park"],
    nearbyAreas: ["Menlo Park", "Mountain View", "Los Altos", "Stanford"],
    nearbySlugs: ["mountain-view", "sunnyvale", "santa-clara", "milpitas"],
    uniqueFact:
      "Palo Alto's Professorville Historic District — designated a California Historical Landmark — contains the highest concentration of pre-1920 faculty residences of any American university town, and many of these Craftsman and Victorian homes have never had a professional video camera inspection of their original masonry flue systems despite continuous residential occupation for over a century.",
    faqs: [
      { q: "My Professorville Craftsman from 1908 has an original brick fireplace. What's the inspection process?", a: "We start with a visual assessment of the firebox, damper, smoke shelf, and exterior crown, then run a full video camera scan from the flue top. Pre-1920 Palo Alto masonry is typically soft brick with lime mortar — some properties have the original unlined masonry opening without clay tile, built before liner standards existed. The written report includes photos and recommends whether the system needs liner installation to meet current safety standards." },
    ],
    metaTitle: "Chimney Services in Palo Alto, CA | Silicon Valley | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Palo Alto. Stanford-area historic and postwar ranch home specialists. CSIA-certified. Request a free estimate online.",
  },

  // ── Contra Costa County (1 new) ───────────────────────────────────────────
  {
    slug: "san-ramon",
    name: "San Ramon",
    county: "Contra Costa County",
    countySlug: "contra-costa-county-ca",
    region: "Bay Area / Tri-Valley",
    population: "84,000",
    description:
      "San Ramon is the Tri-Valley's corporate hub — home to the Bishop Ranch Business Park, which houses major California offices for AT&T, Chevron, and numerous tech companies — and one of the wealthiest communities in the East Bay. Its residential development occurred almost entirely in the 1980s–2000s, producing a uniformly upscale suburban housing inventory of custom and semi-custom homes in communities like Bent Creek, Twin Creeks, and Gale Ranch. Factory-built fireplaces dominate throughout, with the oldest systems now 40–45 years old and the newest 2000s construction approaching its first major inspection milestone.",
    chimneyContext:
      "San Ramon's 1980s–2000s factory-built fireplace inventory is in the key inspection window for refractory panel assessment, damper condition, and heat shield verification. The Tri-Valley's Diablo wind events affect San Ramon's eastern communities near the Bishop Ranch and Gale Ranch open space corridors — areas where spark-arrestor cap maintenance is relevant to fire-season safety. BAAQMD Spare the Air applies, and San Ramon's warmer inland climate means more consistent fireplace use than the immediately coastal Bay Area communities.",
    neighborhoods: ["Twin Creeks", "Bent Creek", "Gale Ranch", "Dougherty Valley", "Bishop Ranch adjacent"],
    nearbyAreas: ["Pleasanton", "Danville", "Dublin", "Livermore"],
    nearbySlugs: ["pleasanton", "livermore", "concord", "antioch"],
    uniqueFact:
      "San Ramon's Dougherty Valley — one of the largest master-planned communities ever built in the Bay Area — added approximately 11,000 homes between 1998 and 2010, creating one of the most concentrated same-vintage factory-built fireplace inventories in Contra Costa County, all now within the 15–27-year first-inspection window.",
    faqs: [
      { q: "My San Ramon home in Dougherty Valley was built in 2005. When should the fireplace be professionally inspected?", a: "At 20 years old, now is the right time. Dougherty Valley factory-built systems at this age commonly show early refractory panel surface cracking, the first signs of damper plate oxidation, and cap mesh beginning to accumulate debris. A Level 1 inspection establishes the system's current condition and baseline for future maintenance scheduling." },
    ],
    metaTitle: "Chimney Services in San Ramon, CA | Contra Costa County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in San Ramon. Tri-Valley and Dougherty Valley specialists. Contra Costa County CSIA-certified. Request a free estimate online.",
  },

  // ── Sacramento County (2 new) ─────────────────────────────────────────────
  {
    slug: "citrus-heights",
    name: "Citrus Heights",
    county: "Sacramento County",
    countySlug: "sacramento-county-ca",
    region: "Central Valley / Sacramento Metro",
    population: "87,000",
    description:
      "Citrus Heights was one of California's largest unincorporated communities before it became a city in 1997 — a Sacramento suburb that grew rapidly from the 1950s onward as the Sacramento metropolitan area expanded northeast. The residential neighborhoods in Citrus Heights reflect that postwar suburban growth: 1955–1975 single-family tract homes with original masonry chimneys in the Greenback Lane and Auburn Boulevard corridors, and 1980s–1990s suburban development in the Sunrise and Rusch Park areas with factory-built systems now well past their design life. Citrus Heights's Sacramento Valley position means cold, foggy winters with SMAQMD No-Burn days and warm summers that make the heating season genuinely productive for fireplace use.",
    chimneyContext:
      "Citrus Heights's postwar masonry stock from the 1950s–1970s is in the critical late-service window — clay tile liners at 50–70 years showing the predictable Sacramento Valley pattern of mortar joint deterioration accelerated by Tule fog moisture. Factory-built systems from the 1980s–1990s are past their design life. The SMAQMD No-Burn program applies on poor air-quality winter days, limiting wood burning during inversions.",
    neighborhoods: ["Auburn Boulevard Corridor", "Sunrise", "Rusch Park", "Fair Oaks adjacent", "Sylvan"],
    nearbyAreas: ["Sacramento", "Folsom", "Roseville", "Fair Oaks"],
    nearbySlugs: ["sacramento", "elk-grove", "roseville", "folsom"],
    uniqueFact:
      "Citrus Heights's incorporation in 1997 — after three failed ballot attempts over the preceding two decades — made it the largest city to incorporate in California history at the time of its founding, and its housing stock reflects the full arc of Sacramento suburban development from the Eisenhower era through the Clinton era.",
    faqs: [
      { q: "My 1962 Citrus Heights home has had the same fireplace since it was built. What should I expect at inspection?", a: "A 63-year-old Sacramento-area masonry system typically shows: clay tile liner mortar joint separation in 2–4 sections (very common in Tule fog climates), a corroded original cast-iron damper plate, crown hairline cracking, and in many cases stage 2 creosote if the fireplace has been used regularly. The Level 2 camera inspection documents all of this with photos and a prioritized maintenance plan." },
    ],
    metaTitle: "Chimney Services in Citrus Heights, CA | Sacramento County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Citrus Heights. Sacramento suburb specialists. SMAQMD-aware CSIA-certified service. Request a free estimate online.",
  },
  {
    slug: "folsom",
    name: "Folsom",
    county: "Sacramento County",
    countySlug: "sacramento-county-ca",
    region: "Central Valley / Sacramento Metro",
    population: "82,000",
    description:
      "Folsom occupies a unique position in California history — a gold rush supply city from 1848, the terminus of California's first railroad, and home to Folsom State Prison (made famous by Johnny Cash's 1968 live album). Today it is simultaneously a tech suburb (Intel's major Sacramento campus employs thousands) and a historic preservation community, with a downtown Gold Rush district along Sutter Street that contains some of the oldest commercial and residential buildings in Sacramento County. The residential character divides between the historic areas and the 1990s–2010s master-planned communities of Empire Ranch, American River Canyon, and Broadstone that represent some of the newest housing stock in the county.",
    chimneyContext:
      "Folsom's dual character creates a chimney service landscape spanning the oldest and newest ends of the Sacramento area spectrum. Historic Folsom's pre-1900 residential properties have masonry from the gold rush era — requiring the same preservation-appropriate approach as any historic district. The Empire Ranch and American River Canyon master-planned communities have 1995–2015 factory-built systems entering the 10–30-year inspection window. The American River Canyon communities border open woodland in a designated high fire-hazard zone. SMAQMD No-Burn days apply.",
    neighborhoods: ["Historic Folsom", "Empire Ranch", "American River Canyon", "Broadstone", "Willow Creek"],
    nearbyAreas: ["El Dorado Hills", "Rancho Cordova", "Sacramento", "Granite Bay"],
    nearbySlugs: ["sacramento", "elk-grove", "citrus-heights", "roseville"],
    uniqueFact:
      "Folsom Dam — built in 1956 to control Sacramento Valley flooding — created Lake Folsom and fundamentally changed Folsom's character from a railroad town to a recreation and residential destination, driving the suburban growth wave that produced the Empire Ranch and American River Canyon communities now reaching their chimney inspection milestones.",
    faqs: [
      { q: "My Folsom home in American River Canyon backs up to the American River Parkway open space. Does that affect my chimney?", a: "Yes. Properties backing the American River Parkway corridor — particularly on the canyon rim above the river — are adjacent to riparian woodland designated as a high fire-hazard zone during dry months. A spark-arrestor cap with intact 5/8-inch mesh is strongly recommended, and annual inspection to verify cap integrity and flue cleanliness is the appropriate maintenance standard." },
    ],
    metaTitle: "Chimney Services in Folsom, CA | Sacramento County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Folsom. Historic district and new-build specialists. Sacramento County CSIA-certified. Request a free estimate online.",
  },

  // ── San Joaquin County (2 new) ────────────────────────────────────────────
  {
    slug: "tracy",
    name: "Tracy",
    county: "San Joaquin County",
    countySlug: "san-joaquin-county-ca",
    region: "Central Valley",
    population: "98,000",
    description:
      "Tracy has become one of California's leading logistics hubs — the massive distribution centers for Amazon, Walmart, FedEx, and dozens of other companies that line the I-205 corridor have transformed this San Joaquin Valley community into a warehouse economy anchored city. Its residential character, however, is decidedly suburban: a downtown core with 1890s–1940s Victorian and Craftsman homes, surrounded by waves of 1980s–2010s suburban development in the Covell Gardens, Edgewood, and Sundance communities. Tracy's San Joaquin Valley position means cold, foggy winters and hot summers, with residents burning fireplaces regularly from October through February.",
    chimneyContext:
      "Tracy's historic downtown residential blocks have masonry chimneys from the 1890s–1940s era — some of the oldest in San Joaquin County. The 1980s–2000s suburban tracts have factory-built systems now in the 25–45-year inspection window. The SJVAPCD No-Burn program applies on poor air-quality winter days. Delta moisture influence from the Sacramento-San Joaquin confluence west of Tracy creates elevated masonry moisture exposure compared to drier valley communities.",
    neighborhoods: ["Downtown Tracy", "Covell Gardens", "Edgewood", "Sundance", "Lincoln Village adjacent"],
    nearbyAreas: ["Stockton", "Manteca", "Modesto", "Livermore"],
    nearbySlugs: ["stockton", "manteca", "modesto", "livermore"],
    uniqueFact:
      "Tracy's position at the junction of I-580 and I-205 — where the Bay Area meets the San Joaquin Valley — makes it the primary logistics gateway for the entire Northern California distribution network, and the city's rapid residential growth to house distribution center workers has produced one of the fastest-expanding suburban fireplace inventories in the Central Valley.",
    faqs: [
      { q: "My 1998 Tracy home has a factory-built fireplace. Is this the right time for inspection?", a: "Yes — at 27 years old, your system is in the appropriate inspection window. Factory-built fireplaces from the late 1990s in the Central Valley's thermal climate age at a rate consistent with 25–35 year systems in coastal areas. Refractory panel assessment and damper condition check are the primary inspection priorities at this age." },
    ],
    metaTitle: "Chimney Services in Tracy, CA | San Joaquin County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Tracy. Central Valley specialists for historic and suburban homes. Request a free estimate online.",
  },
  {
    slug: "manteca",
    name: "Manteca",
    county: "San Joaquin County",
    countySlug: "san-joaquin-county-ca",
    region: "Central Valley",
    population: "90,000",
    description:
      "Manteca's name derives from the Spanish word for lard — a legacy of the stockyards and meatpacking operations that defined its early-20th-century economy. Today the city is a growing San Joaquin County suburb between Stockton and Modesto, with a residential housing stock that spans a 1920s–1950s agricultural-era downtown core and extensive 1980s–2010s suburban expansion in the Del Webb, Woodward Park, and Lathrop Road corridor communities. Manteca's valley position produces the Central Valley's characteristic climate: persistent Tule fog from December through February, summer heat exceeding 100°F, and a genuine fireplace season from late October through March.",
    chimneyContext:
      "Manteca's older residential stock has masonry chimneys in the 70–100-year range — original agricultural-era construction from the 1920s–1940s in the downtown-adjacent neighborhoods. The 1980s–2000s suburban tracts have factory-built systems approaching end-of-life. The SJVAPCD No-Burn program applies throughout San Joaquin County. Tule fog moisture accelerates mortar deterioration in older Manteca properties at rates comparable to Stockton's Delta-adjacent neighborhoods.",
    neighborhoods: ["Downtown Manteca", "Del Webb", "Woodward Park", "Lathrop border", "French Camp Road"],
    nearbyAreas: ["Stockton", "Tracy", "Modesto", "Lathrop"],
    nearbySlugs: ["stockton", "tracy", "modesto"],
    uniqueFact:
      "Manteca's annual Pumpkin Fair — one of the largest agricultural festivals in the San Joaquin Valley — reflects the city's enduring connection to the surrounding farmland, and the agricultural heritage that gave rise to wood-burning as the primary residential heating method here persists in above-average fireplace use rates compared to the California coastal average.",
    faqs: [
      { q: "Does Tule fog really damage chimneys in Manteca?", a: "Yes — it's one of the primary reasons we recommend annual inspection in the Central Valley. Tule fog doesn't produce rain, but its sustained ground-level saturation deposits significant moisture into exposed masonry over weeks or months at a time. In Manteca's older neighborhoods, we observe mortar joint deterioration rates 25–35% faster than in drier inland communities at the same construction age." },
    ],
    metaTitle: "Chimney Services in Manteca, CA | San Joaquin County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Manteca. San Joaquin Valley Tule fog and Central Valley specialists. Request a free estimate online.",
  },

  // ── No county page cities ─────────────────────────────────────────────────
  {
    slug: "vacaville",
    name: "Vacaville",
    county: "Solano County",
    region: "Bay Area / North Bay",
    population: "103,000",
    description:
      "Vacaville sits on I-80 between the Bay Area and Sacramento — a Solano County city that grew rapidly as an affordable alternative to both metro areas. Its residential character reflects two growth waves: a 1950s–1970s suburban core around the downtown and Buck Avenue corridor, and extensive 1980s–2000s master-planned development in the Alamo Drive and Cement Hill communities. Vacaville's inland valley position gives it hot, dry summers and cold winter nights — more extreme than the immediately bay-influenced Solano County cities to the south, which drives meaningful fireplace use from October through March.",
    chimneyContext:
      "Vacaville's postwar residential stock from the 1950s–1970s has masonry chimneys in the 50–75-year critical inspection window. The 1980s–2000s factory-built systems are in the 25–45-year range. No Solano County page currently exists — Vacaville links to the California hub. The SMAQMD's No-Burn program may apply on the worst air-quality days; residents should check current district guidance.",
    neighborhoods: ["Downtown Vacaville", "Alamo Drive", "Cement Hill", "Nut Tree area", "Foxboro"],
    nearbyAreas: ["Fairfield", "Davis", "Sacramento", "Napa"],
    nearbySlugs: ["fairfield", "vallejo", "sacramento"],
    uniqueFact:
      "Vacaville's Nut Tree was once one of the most famous roadside attractions in California — a walnut tree that grew into a restaurant, airstrip, and shopping complex along Highway 40/80 — and the surrounding residential neighborhoods developed around that I-80 commercial corridor represent the earliest postwar suburban growth in Solano County's interior.",
    faqs: [
      { q: "My Vacaville home from 1968 hasn't had a chimney inspection in over a decade. What's at risk?", a: "A 57-year-old Central Valley masonry system with 10+ years since last inspection has likely accumulated: stage 2 creosote from regular use, mortar joint separation in clay tile liner sections, a corroded or stiffened damper plate, and potential crown cracking. Any one of these individually warrants a service call; finding all four — which is common at this age — requires a prioritized repair plan." },
    ],
    metaTitle: "Chimney Services in Vacaville, CA | Solano County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Vacaville. Solano County and I-80 corridor specialists. Request a free estimate online.",
  },
  {
    slug: "redding",
    name: "Redding",
    county: "Shasta County",
    region: "Northern California",
    population: "94,000",
    description:
      "Redding is Northern California's largest city north of Sacramento — the regional hub of the upper Sacramento Valley where I-5 intersects the Sacramento River. The city's climate is distinctly Mediterranean, with summer temperatures regularly reaching 110°F+ (making it one of the hottest cities in California) and mild winters that still produce consistent fireplace use from November through February. The residential housing spans a historic 1920s–1950s downtown core, postwar suburban development throughout the Cypress and Benton areas, and newer growth in south Redding and the Shasta Lake City direction. The surrounding Shasta County landscape is defined by wildfire risk — the 2018 Carr Fire burned into Redding's western neighborhoods and destroyed more than 1,000 homes.",
    chimneyContext:
      "Redding's Carr Fire (2018) burned through the Keswick and Westside communities, creating post-fire chimney inspection needs across a wide zone around the fire perimeter. Adjacent unaffected homes exposed to extreme radiant heat should have been inspected after the fire. The city's older residential stock has masonry chimneys in the 50–100-year range. Shasta County has no dedicated county page — Redding links to the California hub.",
    neighborhoods: ["Keswick", "Shasta Heights", "Benton", "Cypress", "South Redding"],
    nearbyAreas: ["Anderson", "Shasta Lake City", "Red Bluff", "Chico"],
    nearbySlugs: ["chico", "sacramento"],
    uniqueFact:
      "The 2018 Carr Fire generated a fire tornado — an extremely rare meteorological phenomenon — that achieved wind speeds of 143 mph and contributed to the destruction of structures in Redding's western neighborhoods, including chimney systems that sustained damage from radiant heat and direct fire exposure far faster than any standard inspection protocol had anticipated.",
    faqs: [
      { q: "My Redding home is near the Carr Fire perimeter but wasn't directly burned. Should I still inspect the chimney?", a: "Yes. Structures within a half-mile of the Carr Fire perimeter — and in some cases up to a mile — experienced radiant heat exposure that warps metal chimney components and can crack clay tile liner sections without visible exterior flame damage. We have documented damper and liner damage in homes a full block outside direct fire perimeters from the 2018 event. Post-fire inspection is warranted for any Redding property in the Carr perimeter zone." },
    ],
    metaTitle: "Chimney Services in Redding, CA | Shasta County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Redding. Post-Carr Fire specialists and Northern California CSIA-certified service. Request a free estimate online.",
  },
  {
    slug: "chico",
    name: "Chico",
    county: "Butte County",
    region: "Northern California",
    population: "101,000",
    description:
      "Chico is the cultural and economic capital of the northern Sacramento Valley — home to California State University, Chico and a downtown district with well-preserved late-Victorian and early-Craftsman residential architecture along streets like Flume and Vallombrosa. The city is surrounded by almond orchards and sits 12 miles west of the Town of Paradise — community destroyed entirely by the 2018 Camp Fire, the deadliest and most destructive wildfire in California history. That fire deposited ash across Chico and drove approximately 20,000 Paradise survivors into the city, accelerating a housing market that was already constrained by limited inventory. Chico's climate is similar to Sacramento's — cold foggy winters and hot summers.",
    chimneyContext:
      "Chico's historic residential neighborhoods around CSUC and the downtown core contain 1890s–1930s Victorian and Craftsman homes with original masonry chimneys. These systems require the same careful, heritage-appropriate service approach as any California historic district. The Camp Fire ash and particulate that blanketed Chico in November 2018 settled in chimney flues throughout the city, and any Chico property that was occupied during that event should have had its chimney inspected and cleaned. Butte County has no dedicated county page — Chico links to the California hub.",
    neighborhoods: ["Barber Neighborhood", "Chapman neighborhood", "Vallombrosa Corridor", "South Chico", "Sierra Nevada Brewing area"],
    nearbyAreas: ["Paradise", "Oroville", "Red Bluff", "Sacramento"],
    nearbySlugs: ["redding", "sacramento"],
    uniqueFact:
      "Chico's historic Barber Neighborhood — designated a California Historic District — contains one of the most intact collections of Victorian-era residential architecture in Northern California, including homes whose masonry chimneys predate the city's first fire code by 30 or more years.",
    faqs: [
      { q: "My Chico home was covered in ash during the Camp Fire. Do I need to clean the chimney?", a: "Yes, if you haven't done so since 2018. Camp Fire ash is a fine particulate that settles into chimney flues and, when mixed with moisture, can form a hardened deposit that restricts draft. Any Chico home that was occupied in November 2018 and hasn't had a post-fire chimney cleaning should schedule one before the next fireplace season. We also inspect the liner and cap for any heat damage from the event's extreme radiant exposure." },
    ],
    metaTitle: "Chimney Services in Chico, CA | Butte County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Chico. Northern California and post-Camp Fire specialists. CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "merced",
    name: "Merced",
    county: "Merced County",
    region: "Central Valley",
    population: "86,000",
    description:
      "Merced is the gateway to Yosemite National Park and home to UC Merced — the newest campus of the University of California system, opened in 2005 — bringing a college-town energy to what had been a purely agricultural Central Valley community. The residential housing spans a historic downtown core with 1900s–1940s Victorian and bungalow homes, postwar suburban development throughout the G and M Street corridors, and newer student-oriented housing near the UC campus. Merced's San Joaquin Valley position produces persistent Tule fog in winter — some of the densest in the valley — and summer heat exceeding 105°F, with meaningful fireplace use from November through February.",
    chimneyContext:
      "Merced's older residential neighborhoods have masonry chimneys in the 80–120-year range — some of the oldest in the San Joaquin Valley. The downtown-adjacent blocks on Canal and M Streets contain early-20th-century bungalows with clay tile liners that have never been camera-inspected. The SJVAPCD No-Burn program applies on poor air-quality winter days. Merced County has no dedicated county page — Merced links to the California hub.",
    neighborhoods: ["Downtown Merced", "West Side", "Bellevue Ranch", "UC Merced area", "Fahrens Park"],
    nearbyAreas: ["Turlock", "Modesto", "Fresno", "Los Banos"],
    nearbySlugs: ["modesto", "turlock", "fresno", "stockton"],
    uniqueFact:
      "Merced's position as the last major city before Yosemite on Highway 140 means a significant portion of its tourism economy is oriented toward visitors to the valley, and the historic residential neighborhoods that house the permanent community — many unchanged since the 1920s — contain chimney systems reflecting an uninterrupted residential occupation of nearly a century.",
    faqs: [
      { q: "My Merced Victorian from 1915 has the original fireplace. Is it usable?", a: "Possibly, but only after a Level 2 inspection. Pre-1920 Central Valley masonry often has either no clay tile liner or early-installed tile that has deteriorated significantly over 100+ years of thermal cycling in the valley's extreme climate. We camera-inspect the full flue and provide a written assessment of whether the system can be safely operated and what liner work, if any, is needed." },
    ],
    metaTitle: "Chimney Services in Merced, CA | Merced County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Merced. Central Valley and historic home specialists. SJVAPCD-aware CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "napa",
    name: "Napa",
    county: "Napa County",
    region: "Wine Country / North Bay",
    population: "80,000",
    description:
      "Napa is the commercial center of the world's most famous wine region — a city that has transformed from a blue-collar cannery and rail town into a destination for culinary tourism, while retaining a significant working population of vineyard workers and local service industry residents. The residential neighborhoods in Fuller Park, Old Town, and the Brown Street Historic District contain well-preserved Victorian-era homes from the 1870s–1910s, while the Napa River flood plain areas were significantly redeveloped after the 2006 flood project. The South Napa earthquake of August 2014 — a 6.0 magnitude event, the largest Bay Area earthquake since 1989 — caused widespread chimney damage throughout the city.",
    chimneyContext:
      "The 2014 South Napa earthquake was the single most consequential recent seismic event for chimney safety in the North Bay. The 6.0 earthquake damaged chimneys in more than 70% of the historic masonry structures inspected by Napa's building department in the weeks following. Many of those repairs were cosmetic rather than structural, and residual liner cracking may remain in properties that weren't professionally camera-inspected after the event. Napa County has no dedicated county page — Napa links to the California hub. BAAQMD Spare the Air applies.",
    neighborhoods: ["Fuller Park", "Old Town Napa", "Brown Street Historic District", "Alta Heights", "Carneros adjacent"],
    nearbyAreas: ["Vallejo", "Fairfield", "Santa Rosa", "American Canyon"],
    nearbySlugs: ["vallejo", "fairfield", "santa-rosa"],
    uniqueFact:
      "The 2014 South Napa earthquake caused an estimated $1 billion in property damage — the costliest natural disaster in Bay Area history since the 1989 Loma Prieta earthquake — and chimney damage was documented in the majority of historic masonry structures in Old Town Napa, many of which received only temporary cosmetic repair.",
    faqs: [
      { q: "My Napa Victorian wasn't obviously damaged in the 2014 earthquake. Do I still need a chimney inspection?", a: "Yes — this is exactly the scenario where camera inspection is most important. External chimney appearance is a very poor predictor of internal liner condition after a seismic event. The 2014 South Napa earthquake cracked clay tile liner sections in homes throughout Old Town and Fuller Park that showed no visible exterior damage. If your system hasn't been camera-inspected since August 2014, we recommend scheduling one before next heating season." },
    ],
    metaTitle: "Chimney Services in Napa, CA | Wine Country | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Napa. Post-2014 earthquake and Victorian specialists. North Bay CSIA-certified. Request a free estimate online.",
  },
  {
    slug: "turlock",
    name: "Turlock",
    county: "Stanislaus County",
    region: "Central Valley",
    population: "74,000",
    description:
      "Turlock is Stanislaus County's largest city — a Central Valley agricultural hub with California State University Stanislaus on its eastern edge, giving the city a mix of college-town energy and agricultural economy character. The residential housing spans early-20th-century bungalows and Craftsman homes in the historic neighborhoods along East Avenue and Monte Vista Avenue to postwar suburban development throughout the West Side and the newer Countryside community. Turlock's valley position produces the full Central Valley climate: Tule fog winters, summer heat exceeding 105°F, and meaningful fireplace use from October through February.",
    chimneyContext:
      "Turlock's historic residential core along East Avenue and Monte Vista contains masonry chimneys in the 80–100-year range — systems requiring preservation-appropriate inspection and cleaning. The postwar suburban stock has clay tile masonry at 50–75 years. The SJVAPCD No-Burn program applies throughout Stanislaus County. Stanislaus County has no dedicated county page — Turlock links to the California hub.",
    neighborhoods: ["East Ave Corridor", "Monte Vista", "Countryside", "West Side", "CSU Stanislaus area"],
    nearbyAreas: ["Modesto", "Merced", "Ceres", "Atwater"],
    nearbySlugs: ["modesto", "merced", "stockton", "fresno"],
    uniqueFact:
      "Turlock's Central Valley Dutch community — established by immigrant dairy farmers in the early 20th century — created one of the most distinctive agricultural residential landscapes in California, with farmstead-style homes along the east side of the city that often have wood-burning stoves and non-standard chimney configurations in outbuildings alongside the main residential fireplace.",
    faqs: [
      { q: "Does the SJVAPCD restrict wood burning in Turlock?", a: "Yes. The San Joaquin Valley Air Pollution Control District issues No-Burn advisories throughout Stanislaus County on days when winter air quality drops to unhealthy levels — typically from October through February. On No-Burn days, traditional open-hearth fireplaces must not be operated. EPA Phase 2-certified wood stoves and pellet stoves are generally exempt. Gas fireplace inserts are exempt from wood-burning curtailment." },
    ],
    metaTitle: "Chimney Services in Turlock, CA | Stanislaus County | Chimney Peak California",
    metaDescription: "Chimney cleaning and inspection in Turlock. Central Valley and CSU Stanislaus area specialists. Request a free estimate online.",
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

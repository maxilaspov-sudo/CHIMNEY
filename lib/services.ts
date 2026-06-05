export interface FAQ {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  heroImage: string;
  heroImageMedium: string;
  heroAlt: string;
  price: string;
  duration: string;
  benefits: string[];
  processSteps: { title: string; desc: string }[];
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  relatedServiceLinks?: { name: string; href: string }[];
}

export const services: Service[] = [
  {
    slug: "chimney-cleaning",
    name: "Chimney Cleaning",
    tagline: "Remove creosote buildup before it becomes a fire hazard",
    shortDesc:
      "Professional chimney cleaning removes dangerous creosote, soot, and debris from your flue — protecting your family from chimney fires and carbon monoxide.",
    longDesc:
      "Creosote is the byproduct of burning wood. Every fire deposits a thin layer inside your flue. After a season of regular use, that layer can reach dangerous levels. Stage 3 creosote — a tar-like glaze — won't brush off and requires chemical treatment. Our certified technicians inspect the full flue system, remove all deposits using industry-grade rotary brushes and HEPA-filtered vacuums, and leave no mess behind. The NFPA 211 standard recommends annual cleaning for wood-burning appliances. We follow that standard on every job.",
    heroImage: "/images/service-chimney-cleaning.jpg",
    heroImageMedium: "/images/service-chimney-cleaning.jpg",
    heroAlt: "Technician cleaning a residential chimney with chimney sweep equipment",
    price: "Free estimate",
    duration: "1–2 hours",
    benefits: [
      "Removes creosote and soot that cause chimney fires",
      "Improves draft and reduces smoke backdraft into living areas",
      "Extends the life of your flue liner",
      "Satisfies insurance and home-sale inspection requirements",
      "Reduces carbon monoxide risk from blocked flues",
    ],
    processSteps: [
      {
        title: "Full system inspection",
        desc: "We inspect the firebox, damper, smoke shelf, flue, and cap before touching a brush.",
      },
      {
        title: "Drop cloths and prep",
        desc: "We seal the firebox opening and lay drop cloths to keep your home clean.",
      },
      {
        title: "Rotary brush cleaning",
        desc: "Industry-grade spinning brushes clear creosote and soot from the full flue length.",
      },
      {
        title: "HEPA vacuum removal",
        desc: "All loosened debris is captured with a commercial HEPA vacuum — no ash clouds.",
      },
      {
        title: "Final inspection and report",
        desc: "You get a written condition report with photos and any repair recommendations.",
      },
    ],
    faqs: [
      {
        q: "How often should I have my chimney cleaned?",
        a: "The NFPA 211 standard recommends annual inspection and cleaning for any chimney in use. If you burn more than two cords of wood per season, twice a year is safer.",
      },
      {
        q: "What is creosote and why is it dangerous?",
        a: "Creosote is a flammable tar-like residue from burning wood. It coats the inside of your flue. At stage 3 it can ignite at temperatures exceeding 1,100°F and burn for hours, damaging your liner and risking a house fire.",
      },
      {
        q: "Can I clean my own chimney?",
        a: "Consumer brush kits exist, but they don't remove stage 2 or 3 creosote, miss damage that a trained eye catches, and don't include a written inspection report — which insurers and home buyers require.",
      },
      {
        q: "How long does chimney cleaning take?",
        a: "A standard single-flue cleaning takes 60–90 minutes. Multi-flue systems or heavy deposits take longer.",
      },
    ],
    metaTitle: "Chimney Cleaning Service in California | Chimney Peak California",
    metaDescription:
      "Professional chimney cleaning across California. CSIA-certified technicians remove creosote, soot, and debris. Request a free estimate online for a free estimate.",
  },
  {
    slug: "chimney-sweep",
    name: "Chimney Sweep",
    tagline: "Certified chimney sweeps serving California homes since 2009",
    shortDesc:
      "Our CSIA-certified chimney sweeps inspect and clean wood-burning fireplaces, gas inserts, and factory-built fireplaces to current NFPA 211 standards.",
    longDesc:
      "A chimney sweep covers more ground than a cleaning alone. We check for cracks in the flue liner, deteriorated mortar joints, a faulty damper, missing spark arrestors, and animal nesting material. The inspection portion follows NFPA 211 Level 1 protocol, which is the minimum standard for any chimney in regular use. We document every finding with notes and, when possible, camera images, then walk you through any repairs before we leave.",
    heroImage:
      "https://images.pexels.com/photos/20181619/pexels-photo-20181619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageMedium:
      "https://images.pexels.com/photos/20181619/pexels-photo-20181619.jpeg?auto=compress&cs=tinysrgb&h=350",
    heroAlt:
      "Close-up of red brick chimneys on a residential rooftop — California chimney sweep inspection",
    price: "Free estimate",
    duration: "1.5–2.5 hours",
    benefits: [
      "CSIA-certified technicians on every job",
      "Written Level 1 inspection report included",
      "Catches damage early before it becomes expensive",
      "Verifies damper, cap, and spark arrestor function",
      "Clears nesting material from birds and squirrels",
    ],
    processSteps: [
      {
        title: "Exterior assessment",
        desc: "We check the crown, cap, flashing, and visible masonry for weather damage before going inside.",
      },
      {
        title: "Damper and smoke shelf inspection",
        desc: "We check damper operation and the smoke shelf for debris that blocks draft.",
      },
      {
        title: "Level 1 flue inspection",
        desc: "We inspect all accessible areas of the flue with a flashlight and mirror — upgrading to camera if needed.",
      },
      {
        title: "Cleaning",
        desc: "Certified rotary brushes and a HEPA vacuum remove all deposits from flue to firebox.",
      },
      {
        title: "Written report",
        desc: "You receive a signed inspection report noting the condition and any recommended service.",
      },
    ],
    faqs: [
      {
        q: "What is the difference between a chimney sweep and a chimney cleaning?",
        a: "A cleaning removes deposits. A sweep includes a formal NFPA Level 1 inspection with a written report. We include both in our sweep service.",
      },
      {
        q: "Do I need a sweep if I use gas logs?",
        a: "Yes. Gas appliances produce moisture and can allow wildlife to nest. An annual inspection catches carbon monoxide risks and verifies the liner is intact.",
      },
      {
        q: "Are your technicians CSIA certified?",
        a: "Yes. Every field technician carries a current CSIA (Chimney Safety Institute of America) certification.",
      },
    ],
    metaTitle: "Chimney Sweep in California | CSIA-Certified | Chimney Peak California",
    metaDescription:
      "CSIA-certified chimney sweep service across California. Level 1 inspection + full cleaning. Request a free estimate online for a same-week appointment.",
  },
  {
    slug: "chimney-inspection",
    name: "Chimney Inspection",
    tagline: "Protect your home with a proper NFPA 211 chimney inspection",
    shortDesc:
      "Level 1, Level 2, and Level 3 chimney inspections by certified technicians. Required for home sales, insurance claims, and post-storm assessments.",
    longDesc:
      "The NFPA 211 standard defines three levels of chimney inspection. Level 1 is for chimneys in regular use with no changes in service. Level 2 is required when you buy or sell a home, change fuel types, or add a new appliance — it includes a video scan of the full flue. Level 3 is reserved for serious structural concerns and may require removing portions of the chimney to assess internal damage. We perform all three levels and provide a detailed written report accepted by insurers, home buyers, and real estate attorneys.",
    heroImage: "/images/service-chimney-inspection.jpg",
    heroImageMedium: "/images/service-chimney-inspection.jpg",
    heroAlt: "Technician inspecting an indoor fireplace and chimney system in a California home",
    price: "Free estimate",
    duration: "1–3 hours depending on level",
    benefits: [
      "NFPA 211 Level 1, 2, and 3 inspection capability",
      "Video scan of flue included in Level 2",
      "Written report accepted by lenders and insurers",
      "Satisfies real estate transaction requirements",
      "Identifies cracks, obstructions, and liner damage",
    ],
    processSteps: [
      {
        title: "Confirm inspection level",
        desc: "We confirm which NFPA 211 level applies to your situation before the appointment.",
      },
      {
        title: "Exterior and roof-line check",
        desc: "Crown, cap, flashing, mortar, and masonry are assessed from outside and the rooftop.",
      },
      {
        title: "Interior firebox inspection",
        desc: "We check the firebox walls, lintel, damper, and smoke shelf for cracks and deterioration.",
      },
      {
        title: "Flue video scan (Level 2+)",
        desc: "A high-resolution camera traverses the full flue length, recording every crack and deposit.",
      },
      {
        title: "Written report delivery",
        desc: "You receive a typed report with photos, condition rating, and repair recommendations — same day.",
      },
    ],
    faqs: [
      {
        q: "Do I need an inspection when buying a home?",
        a: "Yes. A Level 2 inspection is required whenever a home changes ownership under NFPA 211. General home inspectors do not have the equipment or certification to perform this.",
      },
      {
        q: "How long does a Level 2 inspection take?",
        a: "Typically 2–2.5 hours for a single-flue system. Multi-flue systems take longer.",
      },
      {
        q: "Will my insurance company accept your report?",
        a: "Yes. Our reports include the technician's CSIA certification number, which all major California insurers accept.",
      },
    ],
    metaTitle: "Chimney Inspection in California | Level 1, 2 & 3 | Chimney Peak California",
    metaDescription:
      "NFPA 211 Level 1, 2, and 3 chimney inspections across California. Video scan included in Level 2. Reports accepted by insurers and lenders. Request a free estimate online.",
  },
  {
    slug: "chimney-repair",
    name: "Chimney Repair",
    tagline: "Masonry chimney repair done right — no shortcuts",
    shortDesc:
      "Spalled brick, cracked crowns, failing mortar, and damaged flashing repaired by licensed masons. We match existing brick and mortar so repairs are invisible.",
    longDesc:
      "Water is the leading cause of chimney damage in California. Rain and freeze-thaw cycles erode mortar joints, crack crowns, and allow moisture to penetrate brick. Left unaddressed, a cracked crown allows water to enter the flue and saturate the masonry from the inside — leading to spalled brick, rusted dampers, and eventual structural failure. Our repairs address the root cause, not just the symptom. We use Type S mortar matched to your existing joint profile and color-matched brick when replacement is needed.",
    heroImage: "/images/service-chimney-repair.jpg",
    heroImageMedium: "/images/service-chimney-repair.jpg",
    heroAlt: "Technician repairing brick masonry on a residential chimney",
    price: "Free estimate",
    duration: "Varies by scope",
    benefits: [
      "Licensed masonry contractor — fully insured",
      "Type S mortar matched to existing joint profile",
      "Waterproofing treatment included on all masonry work",
      "Photographic before-and-after documentation",
      "Prevents water intrusion that causes structural damage",
    ],
    processSteps: [
      {
        title: "Damage assessment",
        desc: "We photograph and document all damage — spalling, cracks, failing mortar — before quoting.",
      },
      {
        title: "Written repair scope",
        desc: "You receive a line-item quote with photos, no vague 'labor and materials' estimates.",
      },
      {
        title: "Tuckpointing or brick replacement",
        desc: "Failed mortar is ground out to 3/4\" depth and replaced with Type S, color-matched to existing joints.",
      },
      {
        title: "Crown repair or replacement",
        desc: "Cracked crowns are cut back to sound concrete and rebuilt with a proper 2\" overhang to shed water.",
      },
      {
        title: "Waterproofing application",
        desc: "A vapor-permeable masonry sealer is applied to protect the repair and surrounding brick.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my chimney needs repair?",
        a: "Visible signs include white staining (efflorescence), spalled or missing brick, crumbling mortar joints, a cracked crown, and rust stains on the chase cover or cap.",
      },
      {
        q: "Can you match my existing brick color?",
        a: "In most cases, yes. We source from regional brick suppliers and bring samples before starting work.",
      },
      {
        q: "Is chimney repair covered by homeowner's insurance?",
        a: "Sudden storm or impact damage is typically covered. Gradual deterioration from deferred maintenance is not. We provide documentation for insurance claims.",
      },
    ],
    metaTitle: "Chimney Repair in California | Masonry & Tuckpointing | Chimney Peak California",
    metaDescription:
      "Licensed chimney repair across California. Brick, mortar, crown, and flashing repairs by certified masons. Free estimate. Request a free estimate online.",
    relatedServiceLinks: [
      { name: "Chimney Crown Repair", href: "/services/chimney-crown-repair/" },
      { name: "Chimney Flashing Repair", href: "/services/chimney-flashing-repair/" },
    ],
  },
  {
    slug: "fireplace-cleaning",
    name: "Fireplace Cleaning",
    tagline: "A clean firebox means a safer, more efficient fire every time",
    shortDesc:
      "Deep cleaning of fireplace fireboxes, glass doors, gas logs, and surrounding tile or stone. Removes ash, soot, and built-up residue for safe operation.",
    longDesc:
      "The firebox is the most visible part of your chimney system, but it's also the most overlooked for deep cleaning. Ash buildup on the firebox floor raises the flame bed, which reduces combustion efficiency and deposits more creosote higher in the flue. Soot-stained glass doors reduce the aesthetic appeal of the fire. We clean every surface of the firebox — floor, back wall, side walls, lintel, and glass — and inspect the damper plate for proper operation.",
    heroImage: "/images/service-fireplace-cleaning.jpg",
    heroImageMedium: "/images/service-fireplace-cleaning.jpg",
    heroAlt: "Technician cleaning a residential fireplace with basic fireplace cleaning tools",
    price: "Free estimate",
    duration: "1–2 hours",
    benefits: [
      "Removes ash, soot, and hardened deposits from all firebox surfaces",
      "Cleans glass doors to like-new clarity",
      "Inspects damper plate for warping or corrosion",
      "Improves combustion efficiency",
      "Eliminates ash odor in the living room",
    ],
    processSteps: [
      {
        title: "Ash and debris removal",
        desc: "All loose ash is removed from the floor and smoke shelf with a HEPA-filter vacuum.",
      },
      {
        title: "Soot removal from firebox walls",
        desc: "Brick and masonry walls are scrubbed with pH-appropriate chimney cleaner to remove soot without damaging the surface.",
      },
      {
        title: "Glass door cleaning",
        desc: "Fireplace glass is cleaned with a ceramic-safe cleaner to restore transparency.",
      },
      {
        title: "Damper plate check",
        desc: "We verify the damper opens, closes, and seals fully.",
      },
      {
        title: "Final wipe-down",
        desc: "Surrounding hearth, mantel face, and flooring protection are cleaned before we leave.",
      },
    ],
    faqs: [
      {
        q: "How often should a fireplace be cleaned?",
        a: "The firebox should be cleaned when ash buildup exceeds 1 inch, typically two to three times per burning season.",
      },
      {
        q: "Can you clean a gas fireplace?",
        a: "Yes. Gas fireplaces accumulate dust and debris in the burner tray and on ceramic logs. We clean the burner assembly and inspect the igniter.",
      },
    ],
    metaTitle: "Fireplace Cleaning in California | Gas & Wood | Chimney Peak California",
    metaDescription:
      "Professional fireplace cleaning in California — wood-burning and gas. Deep clean of firebox, glass doors, gas logs, and burner tray. Request a free estimate online.",
    relatedServiceLinks: [
      { name: "Gas Fireplace Repair", href: "/services/gas-fireplace-repair/" },
    ],
  },
  {
    slug: "chimney-cap-installation",
    name: "Chimney Cap Installation",
    tagline: "The simplest way to stop 90% of chimney water damage",
    shortDesc:
      "Stainless steel and copper chimney cap installation. Keeps rain, wildlife, and debris out of your flue — and sparks off your roof.",
    longDesc:
      "A chimney without a cap is an open pipe to the sky. Rain falls straight down the flue, saturating the liner, rusting the damper, and soaking the firebox masonry. Birds and squirrels nest in uncapped chimneys — blocking the flue and creating fire hazards. Sparks from fires can exit the flue and land on the roof or surrounding vegetation. A properly sized, stainless-steel chimney cap addresses all three problems and typically lasts 20+ years. We measure the flue, select the correct fit, and install with stainless screws into the flue tile.",
    heroImage: "/images/service-chimney-caps.jpg",
    heroImageMedium: "/images/service-chimney-caps.jpg",
    heroAlt: "Brick chimney with black metal chimney cap installed on a tile roof",
    price: "Free estimate",
    duration: "1–2 hours",
    benefits: [
      "Blocks rain from entering the flue — extends liner life",
      "Excludes birds, squirrels, and raccoons",
      "Spark arrestor mesh prevents roof fires",
      "Stainless steel resists rust for 20+ years",
      "Custom-fit to any flue shape or size",
    ],
    processSteps: [
      {
        title: "Flue measurement",
        desc: "We measure the exact flue opening size and select or order the correct cap.",
      },
      {
        title: "Old cap removal",
        desc: "Existing deteriorated caps are removed and the flue tile is checked for damage.",
      },
      {
        title: "Cap installation",
        desc: "The new cap is seated on the flue tile and secured with stainless-steel set screws.",
      },
      {
        title: "Mesh screen check",
        desc: "We verify the spark arrestor mesh is 5/8\" openings per NFPA 211 requirements.",
      },
      {
        title: "Seal inspection",
        desc: "We confirm the cap overhangs the crown by at least 2\" on all sides for proper water shedding.",
      },
    ],
    faqs: [
      {
        q: "What size chimney cap do I need?",
        a: "Cap size is determined by your flue tile interior dimensions. We measure on-site and bring the correct size.",
      },
      {
        q: "How long does chimney cap installation take?",
        a: "Single-flue cap installation takes 30–60 minutes once we're on the roof.",
      },
      {
        q: "Do chimney caps require maintenance?",
        a: "Inspect annually. Clear any debris from the mesh screen and verify the set screws are snug. Stainless caps typically need no replacement for 15–20 years.",
      },
    ],
    metaTitle: "Chimney Cap Installation in California | Stainless & Copper | Chimney Peak California",
    metaDescription:
      "Professional chimney cap installation and replacement across California. Stainless steel, copper, and spark arrestor caps. Free estimate. Request a free estimate online.",
  },
  {
    slug: "chimney-liner-repair",
    name: "Chimney Liner Repair",
    tagline: "A cracked liner is a house fire waiting to happen",
    shortDesc:
      "Stainless steel liner installation and HeatShield ceramic liner repair. Restores safe draft and prevents combustible gases from reaching your home structure.",
    longDesc:
      "The flue liner is the most critical safety component of your chimney. It contains combustion gases and heat, preventing them from contacting the wood framing around your chase. Clay tile liners develop cracks from thermal cycling, earthquake movement, or chimney fires. Once cracked, combustion gases — including carbon monoxide — can seep through the masonry and enter your home. We repair clay liners using HeatShield CeCure, a castable ceramic resurfacer, or install a new continuous stainless-steel liner when damage is severe. Both solutions are approved by the NFPA 211 standard.",
    heroImage:
      "https://images.pexels.com/photos/4394224/pexels-photo-4394224.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    heroImageMedium:
      "https://images.pexels.com/photos/4394224/pexels-photo-4394224.jpeg?auto=compress&cs=tinysrgb&h=350",
    heroAlt:
      "Chimney flue opening on a residential roof — chimney liner repair and replacement service in California",
    price: "Free estimate — varies by liner type and flue length",
    duration: "Half day to full day",
    benefits: [
      "Restores proper draft and combustion gas containment",
      "Prevents carbon monoxide from entering living areas",
      "Stainless liner carries manufacturer warranty",
      "HeatShield ceramic repair lasts 20+ years",
      "Required before reactivating any chimney after a chimney fire",
    ],
    processSteps: [
      {
        title: "Video camera flue inspection",
        desc: "A full-flue video scan maps every crack, spall, and joint separation before we quote.",
      },
      {
        title: "Repair vs. replace recommendation",
        desc: "We provide a written recommendation with photos explaining the scope and cost of each option.",
      },
      {
        title: "HeatShield application (repair option)",
        desc: "Ceramic resurfacer is applied to the interior of the clay tile liner, bridging cracks and restoring a smooth surface.",
      },
      {
        title: "Stainless liner installation (replacement option)",
        desc: "A continuous corrugated stainless liner is pulled through the flue from top to bottom and connected at both ends.",
      },
      {
        title: "Insulation and top connection",
        desc: "The liner is insulated per code and fitted with an appropriate top plate and cap.",
      },
    ],
    faqs: [
      {
        q: "How do I know if my liner is cracked?",
        a: "Symptoms include a smoke odor in rooms adjacent to the chimney, evidence of a past chimney fire (puffy creosote), or a failed Level 2 inspection. The only definitive answer is a video scan.",
      },
      {
        q: "Can I use a cracked liner?",
        a: "No. A cracked liner is a fire hazard and a carbon monoxide risk. The chimney must be taken out of service until repaired.",
      },
      {
        q: "What liner material should I choose?",
        a: "For wood-burning applications, 316L alloy stainless steel is the correct choice. Gas appliances can use 304 alloy. We specify the correct alloy for your fuel type.",
      },
    ],
    metaTitle: "Chimney Liner Repair in California | Stainless & HeatShield | Chimney Peak California",
    metaDescription:
      "Chimney liner repair and replacement across California. HeatShield ceramic relining and stainless steel liner installation. Free estimate. Request a free estimate online.",
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    tagline: "Clogged dryer vents cause 2,900 house fires per year in the US",
    shortDesc:
      "Professional dryer vent cleaning removes lint buildup that restricts airflow, wastes energy, and creates a serious fire hazard in California homes.",
    longDesc:
      "The US Fire Administration reports that failure to clean is the leading cause of dryer fires — accounting for 34% of all dryer-related fires. Lint accumulates in the dryer duct over time, restricting airflow and forcing the dryer to run longer and hotter to dry the same load. Warning signs include clothes taking two cycles to dry, the exterior of the dryer being hot to the touch, and a burning smell during operation. We use flexible brush systems and high-velocity air to clear the full vent run — from the dryer connection to the exterior termination cap.",
    heroImage: "/images/service-dryer-vent-cleaning.jpg",
    heroImageMedium: "/images/service-dryer-vent-cleaning.jpg",
    heroAlt: "Technician cleaning an exterior dryer vent and aluminum vent hose",
    price: "Free estimate",
    duration: "45–90 minutes",
    benefits: [
      "Eliminates the #1 cause of residential dryer fires",
      "Reduces drying time and energy consumption",
      "Extends the life of your dryer motor and heating element",
      "Verifies exterior termination cap is functional",
      "Checks for crushed or improper duct routing",
    ],
    processSteps: [
      {
        title: "Dryer disconnect and exterior cap check",
        desc: "We disconnect the dryer, inspect the duct connection, and assess the exterior vent cap for damage.",
      },
      {
        title: "Flexible brush cleaning",
        desc: "A lint brush system is run through the full duct length, loosening compacted lint from the walls.",
      },
      {
        title: "High-velocity air flush",
        desc: "All loosened lint is blown to the exterior termination with compressed air.",
      },
      {
        title: "Duct integrity check",
        desc: "We check for kinks, sags, and improper transitions that restrict airflow.",
      },
      {
        title: "Reconnection and test run",
        desc: "We reconnect the dryer and run a short cycle to confirm adequate airflow at the exterior cap.",
      },
    ],
    faqs: [
      {
        q: "How often should I have my dryer vent cleaned?",
        a: "Annual cleaning is recommended for most households. Families that do 5+ loads per week should clean every 6 months.",
      },
      {
        q: "Can I clean my dryer vent myself?",
        a: "Short vents (under 6 feet) can be brushed out. But most California homes have runs of 15–25 feet that require flexible brush systems and air equipment to fully clear.",
      },
      {
        q: "My dryer takes two cycles to dry clothes. Is that a sign of a clogged vent?",
        a: "Almost certainly, yes. Restricted airflow is the most common cause of extended drying time. A clogged vent also shortens appliance life significantly.",
      },
    ],
    metaTitle: "Dryer Vent Cleaning in California | Fire Prevention | Chimney Peak California",
    metaDescription:
      "Professional dryer vent cleaning across California. Removes lint buildup that causes 2,900 house fires per year. Request a free estimate online.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

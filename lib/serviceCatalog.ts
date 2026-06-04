export interface CatalogService {
  slug: string;
  name: string;
  shortDesc: string;
  /** URL of the existing parent service page this entry links to */
  parentHref: string;
  /** true = a full page exists at /services/[slug]/ */
  isMajor: boolean;
}

export interface ServiceCategory {
  slug: string;
  name: string;
  description: string;
  services: CatalogService[];
}
export const serviceCategories: ServiceCategory[] = [
  // в"Ђв"Ђв"Ђ 1. Chimney Cleaning & Maintenance в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "chimney-cleaning-maintenance",
    name: "Chimney Cleaning & Maintenance",
    description:
      "Regular cleaning and upkeep services that keep your chimney safe and drawing properly throughout the year.",
    services: [
      {
        slug: "chimney-sweep",
        name: "Chimney Sweep",
        shortDesc:
          "CSIA-certified chimney sweep including NFPA 211 Level 1 inspection and full flue cleaning.",
        parentHref: "/services/chimney-sweep/",
        isMajor: true,
      },
      {
        slug: "chimney-cleaning",
        name: "Chimney Cleaning",
        shortDesc:
          "Removes creosote, soot, and debris from your flue using industry-grade rotary brushes and HEPA vacuums.",
        parentHref: "/services/chimney-cleaning/",
        isMajor: true,
      },
      {
        slug: "chimney-service",
        name: "Chimney Service",
        shortDesc:
          "General chimney maintenance call covering inspection, cleaning, and minor adjustments in one visit.",
        parentHref: "/services/chimney-sweep/",
        isMajor: false,
      },
      {
        slug: "chimney-inspection",
        name: "Chimney Inspection",
        shortDesc:
          "NFPA 211 Level 1, 2, and 3 inspections with written reports accepted by insurers and lenders.",
        parentHref: "/services/chimney-inspection/",
        isMajor: true,
      },
      {
        slug: "flue-cleaning",
        name: "Flue Cleaning",
        shortDesc:
          "Deep cleaning of the flue liner from firebox to cap, clearing all creosote deposits and debris.",
        parentHref: "/services/chimney-cleaning/",
        isMajor: false,
      },
      {
        slug: "creosote-removal",
        name: "Creosote Removal",
        shortDesc:
          "Removes stage 1, 2, and 3 creosote buildup вЂ” including the tar-like glaze that requires chemical treatment.",
        parentHref: "/services/chimney-cleaning/",
        isMajor: false,
      },
      {
        slug: "soot-removal",
        name: "Soot Removal",
        shortDesc:
          "Complete removal of soot deposits from firebox walls, the smoke shelf, and the full flue interior.",
        parentHref: "/services/chimney-cleaning/",
        isMajor: false,
      },
      {
        slug: "chimney-soot-cleaning",
        name: "Chimney Soot Cleaning",
        shortDesc:
          "Thorough cleaning of soot from the chimney system вЂ” firebox, smoke shelf, and flue вЂ” with a HEPA vacuum finish.",
        parentHref: "/services/chimney-cleaning/",
        isMajor: false,
      },
      {
        slug: "chimney-creosote-cleaning",
        name: "Chimney Creosote Cleaning",
        shortDesc:
          "Specialized cleaning targeting creosote at all three stages, including chemical application for glazed buildup.",
        parentHref: "/services/chimney-cleaning/",
        isMajor: false,
      },
      {
        slug: "chimney-blockage-removal",
        name: "Chimney Blockage Removal",
        shortDesc:
          "Clears animal nesting, fallen debris, and structural obstructions that prevent safe chimney operation.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      // Dryer vent services
      {
        slug: "dryer-vent-cleaning",
        name: "Dryer Vent Cleaning",
        shortDesc:
          "Removes lint buildup that restricts airflow and causes dryer fires вЂ” full vent run cleaned from connection to exterior cap.",
        parentHref: "/services/dryer-vent-cleaning/",
        isMajor: true,
      },
      {
        slug: "dryer-vent-inspection",
        name: "Dryer Vent Inspection",
        shortDesc:
          "Checks dryer duct routing, connection integrity, and airflow at the exterior cap вЂ” identifies blockages and code violations.",
        parentHref: "/services/dryer-vent-cleaning/",
        isMajor: false,
      },
      {
        slug: "dryer-vent-blockage-removal",
        name: "Dryer Vent Blockage Removal",
        shortDesc:
          "Clears compacted lint, bird nesting, and debris from dryer ducts вЂ” restores proper airflow and safe operation.",
        parentHref: "/services/dryer-vent-cleaning/",
        isMajor: false,
      },
      {
        slug: "dryer-vent-lint-removal",
        name: "Dryer Vent Lint Removal",
        shortDesc:
          "Professional lint removal from the full dryer duct run using flexible brush systems and high-velocity air.",
        parentHref: "/services/dryer-vent-cleaning/",
        isMajor: false,
      },
      {
        slug: "dryer-vent-maintenance",
        name: "Dryer Vent Maintenance",
        shortDesc:
          "Annual maintenance covering cleaning, connection check, and exterior cap inspection вЂ” recommended for households running five or more loads per week.",
        parentHref: "/services/dryer-vent-cleaning/",
        isMajor: false,
      },
      {
        slug: "dryer-vent-airflow-check",
        name: "Dryer Vent Airflow Check",
        shortDesc:
          "Measures airflow at the exterior cap after cleaning to confirm the duct is clear and the dryer is operating within safe parameters.",
        parentHref: "/services/dryer-vent-cleaning/",
        isMajor: false,
      },
    ],
  },

  // в"Ђв"Ђв"Ђ 2. Chimney Repair & Restoration в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "chimney-repair-restoration",
    name: "Chimney Repair & Restoration",
    description:
      "Structural repairs, masonry restoration, and waterproofing for damaged or deteriorating chimneys вЂ” done right the first time.",
    services: [
      {
        slug: "chimney-repair",
        name: "Chimney Repair",
        shortDesc:
          "Licensed masonry repair for spalled brick, cracked crowns, failing mortar joints, and damaged flashing.",
        parentHref: "/services/chimney-repair/",
        isMajor: true,
      },
      {
        slug: "chimney-tuckpointing",
        name: "Chimney Tuckpointing",
        shortDesc:
          "Deteriorated mortar joints ground to 3/4\" depth and replaced with Type S mortar matched to existing profiles.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-restoration",
        name: "Chimney Restoration",
        shortDesc:
          "Full masonry restoration combining tuckpointing, spalled brick replacement, crown repair, and waterproofing.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-installation",
        name: "Chimney Installation",
        shortDesc:
          "New chimney construction for wood-burning, gas, and factory-built fireplace systems built to current code.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "brick-chimney-installation",
        name: "Brick Chimney Installation",
        shortDesc:
          "Traditional brick chimney construction using proper mortar ratios and flue sizing per NFPA 211.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "metal-chimney-installation",
        name: "Metal Chimney Installation",
        shortDesc:
          "Factory-built metal chimney systems installed for wood-burning and gas appliances in new and existing homes.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-spark-arrestor-repair-installation",
        name: "Chimney Spark Arrestor Repair and Installation",
        shortDesc:
          "Repairs and installs spark arrestor mesh screens that prevent embers from igniting roofs and dry vegetation.",
        parentHref: "/services/chimney-cap-installation/",
        isMajor: false,
      },
      {
        slug: "chimney-animal-screen-repair-installation",
        name: "Chimney Animal Screen Repair and Installation",
        shortDesc:
          "Installs and repairs animal exclusion screens to keep birds, squirrels, and raccoons out of flues.",
        parentHref: "/services/chimney-cap-installation/",
        isMajor: false,
      },
      {
        slug: "chimney-saver",
        name: "Chimney Saver",
        shortDesc:
          "Vapor-permeable masonry waterproofing applied to the chimney exterior to stop water intrusion and spalling.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fix-blocked-chimney",
        name: "Fix Blocked Chimney",
        shortDesc:
          "Same-day diagnosis and clearance of chimney blockages causing smoke backdraft, poor draw, or carbon monoxide risk.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "leaking-chimney-repair-replacement",
        name: "Leaking Chimney Repair and Replacement",
        shortDesc:
          "Locates and repairs the source of chimney leaks вЂ” crown cracks, failed flashing, or deteriorated mortar вЂ” before water causes structural damage.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-bricks-rotten-repair",
        name: "Chimney Bricks Rotten Repair",
        shortDesc:
          "Replaces spalled, saturated, or structurally compromised brick with color-matched replacements and a proper waterproofing finish.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "cracked-chimney-bricks-repair",
        name: "Cracked Chimney Bricks Repair",
        shortDesc:
          "Repairs hairline and structural cracks in chimney brick to prevent water penetration and further spalling.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-odor-removal",
        name: "Chimney Odor Removal",
        shortDesc:
          "Eliminates musty, smoky, and creosote odors originating from the chimney system вЂ” especially common in summer and after rain.",
        parentHref: "/services/chimney-cleaning/",
        isMajor: false,
      },
      {
        slug: "flue-tiles-cracked-repair",
        name: "Flue Tiles Cracked Repair",
        shortDesc:
          "Repairs cracked clay flue tiles using HeatShield ceramic resurfacer or replaces damaged tile sections before gases infiltrate the masonry.",
        parentHref: "/services/chimney-liner-repair/",
        isMajor: false,
      },
    ],
  },

  // в"Ђв"Ђв"Ђ 3. Fireplace Cleaning & Repair в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "fireplace-cleaning-repair",
    name: "Fireplace Cleaning & Repair",
    description:
      "Cleaning, inspection, and repair services for wood-burning, gas, and prefabricated fireplaces.",
    services: [
      {
        slug: "fireplace-cleaning",
        name: "Fireplace Cleaning",
        shortDesc:
          "Deep cleaning of the firebox, glass doors, gas logs, and surrounding tile вЂ” removes ash, soot, and built-up residue.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: true,
      },
      {
        slug: "fireplace-repair",
        name: "Fireplace Repair",
        shortDesc:
          "Repairs firebox walls, dampers, firebacks, and gas components to restore safe, reliable fireplace operation.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-restoration",
        name: "Fireplace Restoration",
        shortDesc:
          "Full restoration of aged fireplaces вЂ” firebox relining, surround repair, and cosmetic refinishing.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fix-non-working-fireplace",
        name: "Fix Non-Working Fireplace",
        shortDesc:
          "Diagnoses and repairs fireplaces that won't draw, won't ignite, or smoke back into the living space.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-smoke-shaft-repair",
        name: "Fireplace Smoke Shaft Repair",
        shortDesc:
          "Repairs damaged smoke shafts that cause smoke backdraft and poor draft performance.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-smoke-chamber-repair",
        name: "Fireplace Smoke Chamber Repair",
        shortDesc:
          "Parging and repair of the smoke chamber to improve draft efficiency and seal against gas infiltration.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-inspection",
        name: "Fireplace Inspection",
        shortDesc:
          "Detailed inspection of the firebox, damper, smoke shelf, and liner for safe operation and code compliance.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "old-fireplace-repair-replacement",
        name: "Old Fireplace Repair and Replacement",
        shortDesc:
          "Restores or replaces aging fireplaces that no longer meet current safety codes or efficiency standards.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-smell-removal",
        name: "Fireplace Smell Removal",
        shortDesc:
          "Eliminates smoke, ash, and creosote odors coming from an unused or improperly sealed fireplace.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "repairing-cracked-fireplace-tiles",
        name: "Repairing Cracked Fireplace Tiles",
        shortDesc:
          "Replaces and repoints cracked firebox tiles and hearth tiles to restore a safe, watertight firebox interior.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
    ],
  },

  // в"Ђв"Ђв"Ђ 4. Fireplace Installation & Design в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "fireplace-installation-design",
    name: "Fireplace Installation & Design",
    description:
      "New fireplace installations, surround design, and facade work for new builds, additions, and remodels.",
    services: [
      {
        slug: "fireplace-installation",
        name: "Fireplace Installation",
        shortDesc:
          "Factory-built and masonry fireplace installation for both new construction and remodel projects.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "new-fireplace-installation",
        name: "New Fireplace Installation",
        shortDesc:
          "Complete installation of a new fireplace system including firebox, liner, and chimney chase.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "fireplace-refacing",
        name: "Fireplace Refacing",
        shortDesc:
          "Updates the visible surround of an existing fireplace with new stone, tile, brick, or a custom mantel.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "old-fireplace-redesign",
        name: "Old Fireplace Redesign",
        shortDesc:
          "Modernizes an outdated fireplace with a new surround, updated tile, and refreshed mantelpiece.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "classic-fireplace-design",
        name: "Classic Fireplace Design",
        shortDesc:
          "Traditional masonry fireplace design with brick surround, carved mantel, and period-appropriate hearth materials.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "modern-fireplace-design",
        name: "Modern Fireplace Design",
        shortDesc:
          "Sleek, contemporary fireplace designs вЂ” linear burners, flush surrounds, and minimalist mantels.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "custom-fireplace-design",
        name: "Custom Fireplace Design",
        shortDesc:
          "Bespoke fireplace design built to your specifications вЂ” size, fuel type, surround material, and finish all custom.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
    ],
  },

  // в"Ђв"Ђв"Ђ 5. Chimney Parts & Components в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "chimney-parts-components",
    name: "Chimney Parts & Components",
    description:
      "Installation, repair, and replacement of chimney caps, crowns, liners, dampers, and all essential system components.",
    services: [
      {
        slug: "chimney-crown-services",
        name: "Chimney Crown Services",
        shortDesc:
          "Repairs and replaces the concrete crown that seals the chimney top вЂ” the first line of defense against water intrusion.",
        parentHref: "/services/chimney-crown-repair/",
        isMajor: true,
      },
      {
        slug: "chimney-cap-services",
        name: "Chimney Cap Services",
        shortDesc:
          "Installation, repair, and replacement of stainless steel and copper chimney caps to keep rain and animals out.",
        parentHref: "/services/chimney-cap-installation/",
        isMajor: false,
      },
      {
        slug: "chimney-chase-services",
        name: "Chimney Chase Services",
        shortDesc:
          "Repairs and rebuilds the chimney chase вЂ” the framed enclosure around a factory-built metal fireplace system.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-cover-services",
        name: "Chimney Cover Services",
        shortDesc:
          "Supplies and fits chase covers and top-mount covers to protect factory-built chimney systems from rain and debris.",
        parentHref: "/services/chimney-cap-installation/",
        isMajor: false,
      },
      {
        slug: "chimney-flue-services",
        name: "Chimney Flue Services",
        shortDesc:
          "Inspection, cleaning, repair, and relining of chimney flues to maintain safe draft and combustion gas containment.",
        parentHref: "/services/chimney-liner-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-liner-services",
        name: "Chimney Liner Services",
        shortDesc:
          "Full range of liner services вЂ” stainless steel installation, HeatShield ceramic repair, and clay tile assessment.",
        parentHref: "/services/chimney-liner-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-damper-services",
        name: "Chimney Damper Services",
        shortDesc:
          "Repairs, replaces, and adjusts chimney dampers вЂ” including top-mount and throat-mount styles.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "chimney-ash-dump-services",
        name: "Chimney Ash Dump Services",
        shortDesc:
          "Cleans, repairs, and replaces the ash dump door and pit at the base of the firebox.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "chimney-pot-services",
        name: "Chimney Pot Services",
        shortDesc:
          "Installs and replaces decorative chimney pots that improve draft, add height, and protect the flue opening.",
        parentHref: "/services/chimney-cap-installation/",
        isMajor: false,
      },
      {
        slug: "chimney-fan-services",
        name: "Chimney Fan Services",
        shortDesc:
          "Installs and services powered chimney fans that improve draw in chimneys with persistent draft problems.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "chimney-flashing-services",
        name: "Chimney Flashing Services",
        shortDesc:
          "Repairs and replaces step flashing, counter flashing, and saddle flashing to stop water from entering where the chimney meets the roof.",
        parentHref: "/services/chimney-flashing-repair/",
        isMajor: true,
      },
      {
        slug: "chimney-masonry-services",
        name: "Chimney Masonry Services",
        shortDesc:
          "Full-range masonry services for chimneys вЂ” brick replacement, mortar repair, crown rebuilding, and waterproofing.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-damper-services",
        name: "Fireplace Damper Services",
        shortDesc:
          "Inspects, repairs, and replaces fireplace damper plates and frames to ensure a proper seal when the fireplace is not in use.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-metal-services",
        name: "Fireplace Metal Services",
        shortDesc:
          "Repairs and replaces metal fireplace components вЂ” firebacks, lintel bars, damper plates, and ash doors.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-grate-services",
        name: "Fireplace Repair and Replacement Grate Services",
        shortDesc:
          "Supplies and fits the correct cast-iron grate size to improve airflow under logs and protect the firebox floor.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "fireplace-firebox-services",
        name: "Fireplace Firebox Services",
        shortDesc:
          "Repairs, repoints, and resurfaces firebox walls using refractory cement rated for high-heat fireplace environments.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-throat-services",
        name: "Fireplace Throat Services",
        shortDesc:
          "Cleans and repairs the fireplace throat вЂ” the narrow passage between the firebox and smoke chamber вЂ” to fix draft problems.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-ashtray-services",
        name: "Fireplace Ashtray Repair and Replacement",
        shortDesc:
          "Repairs and replaces the ash tray and access door in the ash pit below the firebox.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "fireplace-glass-installation-replacement",
        name: "Fireplace Glass Installation and Replacement",
        shortDesc:
          "Installs and replaces tempered ceramic fireplace glass panels and door assemblies for all fireplace models.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-door-installation",
        name: "Fireplace Door Installation",
        shortDesc:
          "Fits and installs fireplace doors that improve efficiency, reduce heat loss, and prevent sparks from entering the room.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "fireplace-door-handle-services",
        name: "Fireplace Door Handle Repair and Installation",
        shortDesc:
          "Repairs or replaces broken, loose, or missing fireplace door handles and latching hardware.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "chimney-air-vent-services",
        name: "Chimney Air Vent Services",
        shortDesc:
          "Inspects, clears, and repairs chimney air intake vents for gas appliances to ensure correct combustion air supply.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
    ],
  },

  // в"Ђв"Ђв"Ђ 6. Specialty Fireplace & Stove Services в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "specialty-fireplace-stove-services",
    name: "Specialty Fireplace & Stove Services",
    description:
      "Installation, repair, and maintenance for all fireplace fuel types and specialty heating appliances.",
    services: [
      {
        slug: "fireplace-sweep",
        name: "Fireplace Sweep",
        shortDesc:
          "Complete fireplace sweep вЂ” firebox cleaning, glass cleaning, gas log inspection, and damper check in one visit.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "fireplace-vent-cleaning",
        name: "Fireplace Vent Cleaning",
        shortDesc:
          "Cleans the vent pipes and combustion air passages on direct-vent and B-vent gas fireplaces.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "fireplace-contractors",
        name: "Fireplace Contractors",
        shortDesc:
          "Licensed fireplace contractor services for installation, structural modification, code compliance, and permit work.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "fireplace-rebuild",
        name: "Fireplace Rebuild",
        shortDesc:
          "Tears down and rebuilds a structurally compromised or code-deficient fireplace from the firebox up.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "wood-fireplace-repair",
        name: "Wood Fireplace Repair",
        shortDesc:
          "Repairs to wood-burning fireplaces вЂ” cracked firebacks, deteriorated refractory brick, and damaged damper assemblies.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "gas-fireplace-repair",
        name: "Gas Fireplace Repair",
        shortDesc:
          "Diagnoses and repairs gas fireplaces that won't ignite, have weak flames, or produce odors вЂ” including valve, pilot, and burner service.",
        parentHref: "/services/gas-fireplace-repair/",
        isMajor: true,
      },
      {
        slug: "electric-fireplace-repair",
        name: "Electric Fireplace Repair",
        shortDesc:
          "Repairs electric fireplaces with heater failures, flickering flame effects, or control board issues.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "wood-fireplace-installation",
        name: "Wood Fireplace Installation",
        shortDesc:
          "Installs masonry and factory-built wood-burning fireplaces with all required flue, liner, and hearth components.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "gas-fireplace-installation",
        name: "Gas Fireplace Installation",
        shortDesc:
          "Installs direct-vent, B-vent, and ventless gas fireplaces with proper gas line and venting connections.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "electric-fireplace-installation",
        name: "Electric Fireplace Installation",
        shortDesc:
          "Installs plug-in and hardwired electric fireplaces вЂ” including built-in wall units and media console models.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "wood-furnace-repair-installation",
        name: "Wood Furnace Repair and Installation",
        shortDesc:
          "Services wood-burning furnaces and outdoor wood boilers, including flue connections, heat exchanger checks, and safety inspections.",
        parentHref: "/services/chimney-repair/",
        isMajor: false,
      },
      {
        slug: "ethanol-fireplace-repair-installation",
        name: "Ethanol Fireplace Repair and Installation",
        shortDesc:
          "Installs and services bio-ethanol fireplaces вЂ” ventless, clean-burning units that require no chimney or gas line.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "prefabricated-fireplace-installation",
        name: "Prefabricated Fireplace Installation",
        shortDesc:
          "Installs factory-built prefabricated fireplace systems with matching metal chimney and chase cover.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "propane-fireplace-repair-installation",
        name: "Propane Fireplace Repair and Installation",
        shortDesc:
          "Installs and services propane-fueled fireplace inserts and freestanding units, including tank connection and regulator setup.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "gas-fireplace-logs",
        name: "Gas Fireplace Logs",
        shortDesc:
          "Supplies, installs, and services ceramic gas log sets for natural gas and propane fireplaces.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "electric-fireplace-logs",
        name: "Electric Fireplace Logs",
        shortDesc:
          "Installs realistic log sets inside electric fireplaces to improve the visual effect and warmth ambiance.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "electric-fireplace-embers",
        name: "Electric Fireplace Embers",
        shortDesc:
          "Replaces or upgrades the ember bed in electric fireplaces for a more realistic glowing fire effect.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "gas-fireplace-embers",
        name: "Gas Fireplace Embers",
        shortDesc:
          "Adds or replaces glowing ember material in gas fireplace log sets for a more realistic appearance.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "fireplace-crystals",
        name: "Fireplace Crystals",
        shortDesc:
          "Installs reflective glass crystal media in gas fireplaces for a modern, colorful alternative to traditional logs.",
        parentHref: "/services/fireplace-cleaning/",
        isMajor: false,
      },
      {
        slug: "multi-color-fireplace-installation",
        name: "Multi-Color Fireplace Installation",
        shortDesc:
          "Installs gas or electric fireplaces with color-changing flame effects вЂ” LED or colored glass media options.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
      {
        slug: "pellet-stove-chimney-installation",
        name: "Pellet Stove Chimney Installation",
        shortDesc:
          "Installs the correct listed pellet vent or class A chimney system required for pellet stove appliances.",
        parentHref: "/services/chimney-liner-repair/",
        isMajor: false,
      },
      {
        slug: "pellet-fireplace-installation-repair",
        name: "Pellet Fireplace Installation and Repair",
        shortDesc:
          "Installs and services pellet-burning fireplace inserts and freestanding units, including auger, hopper, and venting.",
        parentHref: "/services/fireplace-installation/",
        isMajor: false,
      },
    ],
  },

  // в"Ђв"Ђв"Ђ 7. Residential, Commercial & Industrial Services в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "residential-commercial-industrial",
    name: "Residential, Commercial & Industrial Services",
    description:
      "Full-service chimney and fireplace maintenance for homes, multi-family buildings, restaurants, and industrial facilities.",
    services: [
      {
        slug: "residential-chimney-services",
        name: "Residential Chimney Services",
        shortDesc:
          "Full-service chimney and fireplace care for single-family homes вЂ” cleaning, inspection, repair, and installation.",
        parentHref: "/services/chimney-sweep/",
        isMajor: false,
      },
      {
        slug: "commercial-chimney-services",
        name: "Commercial Chimney Services",
        shortDesc:
          "Chimney inspection, cleaning, and repair for restaurants, apartment complexes, hotels, and commercial properties.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "industrial-chimney-services",
        name: "Industrial Chimney Services",
        shortDesc:
          "Inspection, lining, and structural assessment for industrial smokestacks and high-temperature exhaust systems.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
    ],
  },

  // в"Ђв"Ђв"Ђ 8. Fireplace Brands & Products в"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђв"Ђ
  {
    slug: "fireplace-brands-products",
    name: "Fireplace Brands & Products",
    description:
      "Authorized service, installation, and parts for leading fireplace and chimney system brands.",
    services: [
      {
        slug: "regency-fireplace-products",
        name: "Regency Fireplace Products",
        shortDesc:
          "Service and installation for Regency gas, wood, and pellet fireplace inserts and freestanding stoves.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "superior-fireplaces",
        name: "Superior Fireplaces",
        shortDesc:
          "Service and parts for Superior factory-built wood-burning and gas fireplace systems.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "valor-fireplaces",
        name: "Valor Fireplaces",
        shortDesc:
          "Service and installation for Valor radiant gas fireplace inserts and built-in gas fireplaces.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "town-country-luxury-fireplaces",
        name: "Town & Country Luxury Fireplaces",
        shortDesc:
          "Service and installation for Town & Country luxury gas fireplace systems and custom built-in models.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "kingsman-fireplaces",
        name: "Kingsman Fireplaces",
        shortDesc:
          "Service and parts for Kingsman gas fireplace inserts, zero-clearance fireplaces, and outdoor units.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "astria-fireplaces",
        name: "Astria Fireplaces",
        shortDesc:
          "Service and installation for Astria wood-burning, gas, and electric fireplace systems.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "rsf-fireplaces",
        name: "RSF Fireplaces",
        shortDesc:
          "Service and installation for RSF high-efficiency wood-burning fireplaces and fireplace inserts.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "heatilator-fireplace",
        name: "Heatilator Fireplace",
        shortDesc:
          "Service, parts, and installation for Heatilator gas and wood fireplace systems вЂ” one of the most widely installed brands in California.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "napoleon-fireplace",
        name: "Napoleon Fireplace",
        shortDesc:
          "Service and installation for Napoleon gas, wood, and electric fireplaces, fireplace inserts, and outdoor units.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "majestic-fireplace",
        name: "Majestic Fireplace",
        shortDesc:
          "Service, parts, and installation for Majestic gas and wood fireplace systems and fireplace inserts.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
      {
        slug: "vermont-castings-fireplace",
        name: "Vermont Castings Fireplace",
        shortDesc:
          "Service and parts for Vermont Castings wood stoves, gas stoves, and fireplace inserts known for high heat output and cast-iron construction.",
        parentHref: "/services/chimney-inspection/",
        isMajor: false,
      },
    ],
  },
];

export function getAllCatalogServices(): CatalogService[] {
  return serviceCategories.flatMap((cat) => cat.services);
}

export function getCatalogService(slug: string): CatalogService | undefined {
  return getAllCatalogServices().find((s) => s.slug === slug);
}

export function getServiceCategory(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}



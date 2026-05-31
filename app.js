const destinations = {
  kyoto: {
    name: "Kyoto",
    country: "Japan",
    days: 6,
    season: "Late spring shoulder season",
    image: "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80')",
    visual: "Temple mornings, market lunches, quiet rail hops.",
    currency: "JPY",
    carbonBase: 138,
    routes: [
      {
        summary: "Arrive Osaka, rail to Kyoto, depart Tokyo after a one-night stop.",
        tags: ["Rail-first", "1 transfer", "Lowest disruption"],
        transit: 4.2,
        carbon: 42,
      },
      {
        summary: "Arrive Tokyo, shinkansen to Kyoto, fly home from Kansai.",
        tags: ["Open jaw", "Fewer hotel moves", "Higher fare"],
        transit: 5.1,
        carbon: 29,
      },
    ],
    baseCost: 1880,
    experiences: ["Machiya tea host", "Fushimi sake makers", "Nishiki back lanes"],
    activities: {
      culture: ["Fushimi Inari before crowds", "Gion craft walk", "Nijo Castle and tea ceremony"],
      food: ["Nishiki Market crawl", "Obanzai counter dinner", "Sake tasting in Fushimi"],
      nature: ["Arashiyama bamboo route", "Philosopher's Path", "Kurama forest bath"],
      adventure: ["Kurama to Kibune hike", "E-bike east Kyoto", "Lake Biwa paddle day"],
      luxury: ["Private temple access", "Kaiseki chef table", "Ryokan onsen night"],
      work: ["Riverside coworking block", "Late temple visit", "Quiet machiya dinner"],
    },
  },
  lisbon: {
    name: "Lisbon",
    country: "Portugal",
    days: 5,
    season: "Warm evenings and Atlantic breeze",
    image: "url('https://images.unsplash.com/photo-1548707309-dcebeab9ea9b?auto=format&fit=crop&w=1600&q=80')",
    visual: "Viewpoints, tiled streets, seafood, and easy day trips.",
    currency: "EUR",
    carbonBase: 96,
    routes: [
      {
        summary: "Base in Baixa, tram and rail day trips to Belem, Sintra, and Cascais.",
        tags: ["Single base", "Walkable", "Coastal day trip"],
        transit: 3.1,
        carbon: 36,
      },
      {
        summary: "Split Lisbon and Porto with a fast train north and open-jaw return.",
        tags: ["Two cities", "Fast rail", "More hotel moves"],
        transit: 4.8,
        carbon: 24,
      },
    ],
    baseCost: 1520,
    experiences: ["Fado rehearsal room", "Cacilhas seafood pier", "Azulejo studio"],
    activities: {
      culture: ["Alfama morning walk", "MAAT and Belem", "Fado night in Mouraria"],
      food: ["Seafood lunch in Cacilhas", "Pasteis tasting", "Natural wine bars"],
      nature: ["Sintra ridge walk", "Cascais bike path", "Tagus sunset sail"],
      adventure: ["Arrabida kayak day", "Coastal bike route", "Surf lesson in Carcavelos"],
      luxury: ["Private tile atelier", "Helicopter coastline hop", "Chef-led market dinner"],
      work: ["Chiado coworking block", "Late museum slot", "Rooftop dinner"],
    },
  },
  reykjavik: {
    name: "Reykjavik",
    country: "Iceland",
    days: 7,
    season: "Long daylight and volatile weather",
    image: "url('https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1600&q=80')",
    visual: "Geothermal pools, ring-road segments, and weather-aware routing.",
    currency: "ISK",
    carbonBase: 184,
    routes: [
      {
        summary: "Base in Reykjavik with Golden Circle, south coast, and lagoon days.",
        tags: ["Weather flexible", "No long drive", "Premium stays"],
        transit: 5.5,
        carbon: 18,
      },
      {
        summary: "Self-drive south coast to Vik with two nights outside the city.",
        tags: ["Scenic drive", "Rental car", "Higher weather risk"],
        transit: 6.4,
        carbon: 9,
      },
    ],
    baseCost: 2980,
    experiences: ["Geothermal bakery", "Harbor design walk", "Local pool etiquette host"],
    activities: {
      culture: ["Harpa and harbor dinner", "Settlement Exhibition", "Design shops in Laugavegur"],
      food: ["Nordic tasting menu", "Bakery crawl", "Seafood soup stop"],
      nature: ["Thingvellir and geysers", "Skogafoss and black sand beach", "Sky Lagoon recovery"],
      adventure: ["Glacier walk briefing", "ATV lava field route", "Ice cave backup slot"],
      luxury: ["Private lagoon cabin", "Heli-view over lava fields", "Chef's Nordic counter"],
      work: ["Morning focus block", "Afternoon geothermal reset", "Early dinner near harbor"],
    },
  },
  marrakesh: {
    name: "Marrakesh",
    country: "Morocco",
    days: 6,
    season: "Dry heat, vivid markets, cool courtyards",
    image: "url('https://images.unsplash.com/photo-1548018560-c7196548e84d?auto=format&fit=crop&w=1600&q=80')",
    visual: "Riads, gardens, souks, and desert-edge excursions.",
    currency: "MAD",
    carbonBase: 104,
    routes: [
      {
        summary: "Stay inside the medina, private transfer from RAK, day trip to Atlas villages.",
        tags: ["Medina base", "Private transfer", "Guided souks"],
        transit: 3.7,
        carbon: 22,
      },
      {
        summary: "Pair Marrakesh with Agafay overnight camp and a late return flight.",
        tags: ["Desert night", "More movement", "Sunset focus"],
        transit: 5.3,
        carbon: 12,
      },
    ],
    baseCost: 1360,
    experiences: ["Riad cook school", "Artisan metalwork cooperative", "Garden sunrise access"],
    activities: {
      culture: ["Ben Youssef Madrasa", "Medina artisan circuit", "Bahia Palace"],
      food: ["Tagine workshop", "Spice market tasting", "Rooftop dinner near Jemaa el-Fnaa"],
      nature: ["Majorelle Garden", "Atlas foothills day", "Agafay sunset ride"],
      adventure: ["Atlas village trek", "Agafay quad sunset", "Hot-air balloon sunrise"],
      luxury: ["Private hammam", "Desert camp suite", "Riad tasting menu"],
      work: ["Riad focus morning", "Garden lunch", "Late souk visit"],
    },
  },
  delhi: {
    name: "Delhi",
    country: "India",
    days: 3,
    season: "Weekend food, heritage, and neighborhood hopping",
    image: "url('https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80')",
    visual: "Short-haul planning for culture, food, shopping, and low-friction transfers.",
    currency: "INR",
    carbonBase: 48,
    routes: [
      {
        summary: "Arrive by train or short flight, stay near central metro access, use guided local transfers.",
        tags: ["Weekend", "Metro-aware", "Low transfer risk"],
        transit: 2.8,
        carbon: 31,
      },
      {
        summary: "Pair Delhi with Agra by early rail and a late return with hotel day room.",
        tags: ["Two cities", "Early rail", "Higher pace"],
        transit: 4.5,
        carbon: 19,
      },
    ],
    baseCost: 720,
    experiences: ["Old Delhi breakfast walk", "Sunder Nursery picnic", "Textile market scout"],
    activities: {
      culture: ["Humayun's Tomb at opening", "Mehrauli archaeology walk", "National Crafts Museum"],
      food: ["Old Delhi tasting route", "Khan Market cafe crawl", "Regional thali dinner"],
      nature: ["Lodhi Garden slow morning", "Yamuna biodiversity walk", "Sunder Nursery sunset"],
      adventure: ["Cycle tour at dawn", "Agra rail day", "Street-photo challenge"],
      luxury: ["Spa day pass", "Private heritage guide", "Fine-dining Indian tasting"],
      work: ["Aerocity focus block", "Late museum visit", "Quiet dinner near hotel"],
    },
  },
  alps: {
    name: "Swiss Alps",
    country: "Switzerland",
    days: 6,
    season: "Clear trails, lake towns, and mountain rail connections",
    image: "url('https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=80')",
    visual: "Mountain rail, scenic bases, weather-aware hikes, and premium recovery time.",
    currency: "CHF",
    carbonBase: 128,
    routes: [
      {
        summary: "Fly into Zurich, rail to Interlaken, base near accessible mountain lifts.",
        tags: ["Rail pass", "Lift access", "Weather backups"],
        transit: 4.7,
        carbon: 44,
      },
      {
        summary: "Split Lucerne and Zermatt with Glacier Express seat hold and lake recovery day.",
        tags: ["Scenic rail", "Two bases", "Premium view"],
        transit: 5.9,
        carbon: 39,
      },
    ],
    baseCost: 3420,
    experiences: ["Alpine dairy visit", "Lake steamer locals route", "Panoramic rail reservation"],
    activities: {
      culture: ["Lucerne old town", "Alpine cheese village", "Mountain museum"],
      food: ["Fondue hut lunch", "Chocolate atelier", "Lake fish dinner"],
      nature: ["Jungfrau viewpoint", "Murren ridge walk", "Lake Brienz cruise"],
      adventure: ["Via ferrata intro", "Paragliding weather slot", "Glacier trail"],
      luxury: ["Spa lodge suite", "Private panorama coach", "Chef's alpine table"],
      work: ["Lake-view focus block", "Afternoon lift ride", "Quiet rail transfer"],
    },
  },
};

const personaRules = {
  solo: { label: "Solo traveler", travelers: 1, risk: 6, budget: -80, focus: "safer neighborhoods and social, bookable experiences" },
  couple: { label: "Couple", travelers: 2, risk: 0, budget: 0, focus: "shared pacing, memorable meals, and flexible reservations" },
  family: { label: "Family with kids", travelers: 4, risk: 4, budget: 240, focus: "short transfers, child-friendly stops, and rest windows" },
  friends: { label: "Friend group", travelers: 5, risk: 2, budget: 120, focus: "voting, group budget balancing, and split interests" },
  business: { label: "Business traveler", travelers: 1, risk: 1, budget: 180, focus: "meeting buffers, expenses, transfers, and productivity blocks" },
  luxury: { label: "Luxury traveler", travelers: 2, risk: -2, budget: 900, focus: "premium stays, private guides, and upgrade moments" },
  backpacker: { label: "Backpacker", travelers: 1, risk: 3, budget: -420, focus: "hostels, transit value, and low-cost local discovery" },
  nomad: { label: "Digital nomad", travelers: 1, risk: 1, budget: -100, focus: "Wi-Fi reliability, longer stays, coworking, and errands" },
  senior: { label: "Senior citizens", travelers: 2, risk: 5, budget: 160, focus: "lower walking load, medical readiness, and accessible transfers" },
  accessibility: { label: "Accessibility-focused", travelers: 2, risk: 7, budget: 220, focus: "step-free routes, verified lifts, and support contacts" },
};

const stayModifiers = {
  boutique: 1.05,
  hotel: 1,
  hostel: 0.72,
  resort: 1.32,
  villa: 1.24,
  homestay: 0.84,
};

const liveSignals = [
  {
    title: "Weather shift",
    body: "Afternoon rain probability moved up. Outdoor slots were pulled into the morning.",
    meta: ["Weather", "Auto-adjusted"],
    severity: "watch",
  },
  {
    title: "Fare movement",
    body: "Preferred rail cabin is down 8%. Hold window expires in 42 minutes.",
    meta: ["Transport", "Price drop"],
    severity: "ok",
  },
  {
    title: "Crowd forecast",
    body: "Peak demand expected near the old town. The plan now starts 40 minutes earlier.",
    meta: ["Crowds", "Timing"],
    severity: "watch",
  },
  {
    title: "Booking risk",
    body: "One dinner option has limited availability for the current party size.",
    meta: ["Dining", "Action needed"],
    severity: "urgent",
  },
  {
    title: "Local disruption",
    body: "A transit delay was detected on a secondary route. Primary route is unchanged.",
    meta: ["Transit", "Monitored"],
    severity: "ok",
  },
  {
    title: "Safety advisory",
    body: "Late-night transfer was moved to a verified operator and shared with emergency contacts.",
    meta: ["Safety", "Proactive"],
    severity: "watch",
  },
];

const bookings = [
  ["Transport", "Flight, rail, local transit, or route pass", 0.34],
  ["Stay", "Accommodation matched to traveler profile", 0.36],
  ["Experiences", "Guided activities, tickets, and reservations", 0.18],
  ["Food", "Meal planning with dietary constraints", 0.12],
];

const disruptionScenarios = [
  {
    event: "Flight delayed",
    steps: [
      ["Detect", "Inbound flight status changed and arrival buffer dropped below 45 minutes."],
      ["Protect", "Dinner deposit moved to later slot and hotel check-in note sent."],
      ["Reroute", "Airport transfer shifted to the next verified pickup window."],
      ["Notify", "Traveler receives revised timeline, offline backup, and support contact."],
    ],
  },
  {
    event: "Attraction closure",
    steps: [
      ["Detect", "Venue API reports a temporary closure during the reserved window."],
      ["Replace", "Backup experience with the same interest score is inserted nearby."],
      ["Reprice", "Ticket refund and new booking delta are added to budget forecast."],
      ["Learn", "Future plans weight this venue lower for reliability in peak season."],
    ],
  },
  {
    event: "Transportation strike",
    steps: [
      ["Detect", "Local mobility feed flags strike risk across the planned corridor."],
      ["Solve", "Route optimizer chooses walkable clusters and private transfer fallback."],
      ["Compress", "Lower-priority stop is moved to optional evening slot."],
      ["Notify", "Group receives vote-ready alternatives with cost and time tradeoffs."],
    ],
  },
  {
    event: "Lost luggage",
    steps: [
      ["Assist", "Airline baggage desk details and claim checklist are surfaced."],
      ["Recover", "Nearby essentials stop inserted before the first planned activity."],
      ["Budget", "Emergency reserve tracks replacement spend and insurance notes."],
      ["Resume", "Low-energy evening plan protects the rest of the itinerary."],
    ],
  },
];

const architectureNodes = [
  ["Experience UI", "Conversational intake, structured controls, itinerary, concierge, offline pack."],
  ["AI Orchestrator", "Intent parser, preference memory, constraint solver, replanning agents."],
  ["Travel Graph", "Destinations, routes, providers, events, safety, accessibility, inventory."],
  ["Event Stream", "Flights, trains, traffic, weather, closures, crowding, advisories."],
  ["Trust Layer", "OAuth2, RBAC, MFA, encryption, rate limits, audit logs, GDPR controls."],
];

const paceLabels = ["Very light", "Easy", "Balanced", "Active", "Packed"];

let routeIndex = 0;
let signalCursor = 0;
let rebalanceOffset = 0;
let disruptionIndex = 0;
let learningLikes = 2;

const form = document.querySelector("#plannerForm");
const destinationSelect = document.querySelector("#destination");
const personaSelect = document.querySelector("#persona");
const budgetInput = document.querySelector("#budget");
const reserveInput = document.querySelector("#reserve");
const paceInput = document.querySelector("#pace");
const budgetValue = document.querySelector("#budgetValue");
const reserveValue = document.querySelector("#reserveValue");
const paceValue = document.querySelector("#paceValue");
const optimizeBtn = document.querySelector("#optimizeBtn");
const parsePromptBtn = document.querySelector("#parsePromptBtn");
const swapRouteBtn = document.querySelector("#swapRouteBtn");
const rebalanceBtn = document.querySelector("#rebalanceBtn");
const simulateDisruptionBtn = document.querySelector("#simulateDisruptionBtn");
const askConciergeBtn = document.querySelector("#askConciergeBtn");
const likePlanBtn = document.querySelector("#likePlanBtn");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function checkbox(id) {
  return document.querySelector(`#${id}`).checked;
}

function checkedValues(ids) {
  return ids.filter((id) => checkbox(id));
}

function setRadio(name, value) {
  const radio = document.querySelector(`input[name="${name}"][value="${value}"]`);
  if (radio) {
    radio.checked = true;
  }
}

function getState() {
  const data = new FormData(form);
  return {
    destination: data.get("destination"),
    persona: data.get("persona"),
    dates: data.get("dates") || "Flexible dates",
    travelers: Number(data.get("travelers")) || 1,
    budget: Number(data.get("budget")),
    reserve: Number(data.get("reserve")),
    pace: Number(data.get("pace")),
    style: data.get("style"),
    stay: data.get("stay"),
    noRedEye: checkbox("noRedEye"),
    accessible: checkbox("accessible"),
    lowCarbon: checkbox("lowCarbon"),
    foodLimits: checkbox("foodLimits"),
    lowRisk: checkbox("lowRisk"),
    offlinePack: checkbox("offlinePack"),
    vegetarian: checkbox("vegetarian"),
    vegan: checkbox("vegan"),
    halal: checkbox("halal"),
    glutenFree: checkbox("glutenFree"),
  };
}

function inferPrompt() {
  const prompt = document.querySelector("#tripPrompt").value.toLowerCase();
  const destinationMap = [
    ["japan", "kyoto"],
    ["kyoto", "kyoto"],
    ["portugal", "lisbon"],
    ["lisbon", "lisbon"],
    ["iceland", "reykjavik"],
    ["reykjavik", "reykjavik"],
    ["morocco", "marrakesh"],
    ["marrakesh", "marrakesh"],
    ["delhi", "delhi"],
    ["india", "delhi"],
    ["swiss", "alps"],
    ["alps", "alps"],
    ["switzerland", "alps"],
  ];
  const personaMap = [
    ["solo", "solo"],
    ["honeymoon", "couple"],
    ["couple", "couple"],
    ["family", "family"],
    ["kids", "family"],
    ["friends", "friends"],
    ["group", "friends"],
    ["business", "business"],
    ["luxury", "luxury"],
    ["backpacker", "backpacker"],
    ["nomad", "nomad"],
    ["senior", "senior"],
    ["wheelchair", "accessibility"],
    ["accessible", "accessibility"],
  ];
  const styleMap = [
    ["food", "food"],
    ["vegan", "food"],
    ["adventure", "adventure"],
    ["nature", "nature"],
    ["luxury", "luxury"],
    ["work", "work"],
    ["business", "work"],
    ["culture", "culture"],
    ["cultural", "culture"],
    ["photography", "nature"],
    ["shopping", "culture"],
  ];
  const stayMap = [
    ["hostel", "hostel"],
    ["resort", "resort"],
    ["villa", "villa"],
    ["homestay", "homestay"],
    ["airbnb", "homestay"],
    ["hotel", "hotel"],
    ["boutique", "boutique"],
  ];

  const destination = destinationMap.find(([key]) => prompt.includes(key))?.[1];
  const persona = personaMap.find(([key]) => prompt.includes(key))?.[1];
  const style = styleMap.find(([key]) => prompt.includes(key))?.[1];
  const stay = stayMap.find(([key]) => prompt.includes(key))?.[1];
  const budget = prompt.match(/(?:under|budget|below|within)\s*\$?([0-9,]+)/)?.[1] || prompt.match(/\$([0-9,]+)/)?.[1];
  const days = prompt.match(/([0-9]+)\s*-\s*day/)?.[1] || prompt.match(/([0-9]+)\s*day/)?.[1];

  if (destination) destinationSelect.value = destination;
  if (persona) personaSelect.value = persona;
  if (style) setRadio("style", style);
  if (stay) setRadio("stay", stay);
  if (budget) budgetInput.value = Math.min(9000, Math.max(600, Number(budget.replaceAll(",", ""))));
  if (days) document.querySelector("#dates").value = `${days} flexible days`;

  document.querySelector("#vegan").checked = prompt.includes("vegan") || document.querySelector("#vegan").checked;
  document.querySelector("#vegetarian").checked = prompt.includes("vegetarian") || document.querySelector("#vegetarian").checked;
  document.querySelector("#halal").checked = prompt.includes("halal") || document.querySelector("#halal").checked;
  document.querySelector("#glutenFree").checked = prompt.includes("gluten") || document.querySelector("#glutenFree").checked;
  document.querySelector("#accessible").checked = prompt.includes("wheelchair") || prompt.includes("accessible");
  document.querySelector("#lowCarbon").checked = prompt.includes("carbon") || prompt.includes("train") || prompt.includes("rail");
  document.querySelector("#noRedEye").checked = !prompt.includes("red-eye") || prompt.includes("no red-eye") || prompt.includes("avoid red-eye");
  document.querySelector("#lowRisk").checked = prompt.includes("female") || prompt.includes("safe") || document.querySelector("#lowRisk").checked;

  const personaRule = personaRules[personaSelect.value];
  document.querySelector("#travelers").value = personaRule.travelers;
  if (personaSelect.value === "family") document.querySelector("#travelers").value = 4;
  if (personaSelect.value === "friends") document.querySelector("#travelers").value = 5;

  routeIndex = 0;
  rebalanceOffset = 0;
  showStatus("Prompt converted to plan");
  render();
}

function calculatePlan(state, destination) {
  const route = destination.routes[routeIndex % destination.routes.length];
  const persona = personaRules[state.persona];
  const styleModifier = {
    culture: 1.02,
    food: 1.08,
    nature: 1.04,
    adventure: 1.13,
    luxury: 1.42,
    work: 1.01,
  }[state.style];
  const stayModifier = stayModifiers[state.stay] || 1;
  const constraintCost =
    (state.noRedEye ? 120 : 0) +
    (state.accessible ? 220 : 0) +
    (state.lowCarbon ? 90 : 0) +
    (state.foodLimits ? 70 : 0) +
    (state.lowRisk ? 60 : 0) +
    (state.offlinePack ? 45 : 0);
  const foodCost = checkedValues(["vegetarian", "vegan", "halal", "glutenFree"]).length * 25;
  const paceCost = (state.pace - 3) * 105;
  const estimate = Math.round(destination.baseCost * styleModifier * stayModifier + constraintCost + foodCost + paceCost + persona.budget);
  const actual = Math.round(estimate * (0.84 + signalCursor * 0.012) + learningLikes * 18);
  const forecast = Math.round(estimate + Math.max(0, actual - estimate) * 0.45 + (disruptionIndex % 2 === 0 ? 40 : 110));
  const budgetDelta = state.budget - forecast - state.reserve;
  const transit = Math.max(1.8, route.transit + (state.pace - 3) * 0.28 - (state.lowCarbon ? 0.25 : 0) + (state.accessible ? 0.18 : 0));
  const riskPoints =
    persona.risk +
    (budgetDelta < -250 ? 6 : budgetDelta < 0 ? 3 : 0) +
    (state.noRedEye ? -1 : 2) +
    (state.accessible ? -1 : 1) +
    (state.lowRisk ? -2 : 1) +
    (route.transit > 5.6 ? 3 : 0) +
    (state.pace > 4 ? 2 : 0);
  const risk = riskPoints >= 9 ? "High" : riskPoints >= 4 ? "Medium" : "Low";
  const fit = Math.max(
    52,
    Math.min(
      98,
      91 + Math.floor(budgetDelta / 180) - Math.abs(state.pace - 3) * 3 - (risk === "High" ? 12 : risk === "Medium" ? 5 : 0) + learningLikes,
    ),
  );

  return {
    route,
    estimate,
    actual,
    forecast,
    transit,
    risk,
    fit,
    pressure: budgetDelta >= 450 ? "Comfortable" : budgetDelta >= 0 ? "Tight but workable" : "Over budget",
    daily: Math.round(forecast / destination.days),
    budgetDelta,
    carbonSaved: destination.carbonBase - route.carbon + (state.lowCarbon ? 16 : 0),
  };
}

function buildItinerary(state, destination, plan) {
  const activities = [...destination.activities[state.style]];
  const fallback = destination.activities.culture;
  const dayCount = Math.min(8, Math.max(2, destination.days + (state.pace > 4 ? 1 : 0) - (state.pace <= 2 ? 1 : 0)));
  const days = [];

  for (let index = 0; index < dayCount; index += 1) {
    const activity = activities[(index + rebalanceOffset) % activities.length] || fallback[index % fallback.length];
    const recovery = state.pace <= 2 && index % 2 === 1 ? "Rest window protected." : "Backup nearby.";
    const access = state.accessible ? "Step-free route verified." : "Walking load optimized.";
    const food = state.foodLimits ? "Dietary-safe meal pinned." : "Local food option nearby.";
    const safety = state.lowRisk ? "Risk score checked before late movements." : "Neighborhood timing monitored.";
    const cost = Math.round(plan.forecast / dayCount + (index % 3) * 28 - (state.pace <= 2 ? 20 : 0));
    const time = index === 0 ? "Arrival-aware" : index === dayCount - 1 ? "Departure-safe" : `${8 + index}:30 start`;

    days.push({
      title: activity,
      body: [access, food, recovery, safety].join(" "),
      time,
      cost,
    });
  }

  return days;
}

function renderRouteTags(tags, state) {
  const constraints = [
    state.lowCarbon ? "Carbon-aware" : "Fastest available",
    state.noRedEye ? "No red-eye" : "Flexible timing",
    state.accessible ? "Step-free" : "Standard access",
    state.lowRisk ? "Safety-first" : "Standard safety",
  ];
  document.querySelector("#routeTags").innerHTML = [...tags, ...constraints]
    .map((tag) => `<span>${escapeHtml(tag)}</span>`)
    .join("");
}

function renderTimeline(days) {
  document.querySelector("#timeline").innerHTML = days
    .map(
      (day, index) => `
        <section class="day-card">
          <div class="day-index"><span>Day</span><strong>${index + 1}</strong></div>
          <div>
            <h4>${escapeHtml(day.title)}</h4>
            <p>${escapeHtml(day.body)}</p>
            <small>${escapeHtml(day.time)}</small>
          </div>
          <div class="day-cost"><span>Forecast</span>${currency(day.cost)}</div>
        </section>
      `,
    )
    .join("");
}

function renderBookings(plan, state) {
  const total = plan.forecast;
  const budgetRatio = Math.min(100, Math.round((total / Math.max(1, state.budget)) * 100));
  document.querySelector("#bookingTotal").textContent = currency(total);
  document.querySelector("#budgetMeter").style.width = `${budgetRatio}%`;
  document.querySelector("#budgetMeter").style.background =
    budgetRatio > 96 ? "var(--danger)" : budgetRatio > 82 ? "var(--gold)" : "var(--ok)";
  document.querySelector("#bookingList").innerHTML = bookings
    .map(([label, detail, share]) => {
      const adjusted = Math.max(80, Math.round(total * share));
      return `
        <div class="booking-row">
          <strong>${escapeHtml(label)}</strong>
          <span>${currency(adjusted)}</span>
          <p>${escapeHtml(detail)}</p>
        </div>
      `;
    })
    .join("");
}

function renderSignals() {
  const stack = [0, 1, 2].map((offset) => liveSignals[(signalCursor + offset) % liveSignals.length]);
  document.querySelector("#signalStack").innerHTML = stack
    .map(
      (signal) => `
        <section class="alert-card" data-severity="${signal.severity}">
          <h4>${escapeHtml(signal.title)}</h4>
          <p>${escapeHtml(signal.body)}</p>
          <div class="signal-meta">${signal.meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>
        </section>
      `,
    )
    .join("");
  document.querySelector("#lastUpdated").textContent = signalCursor === 0 ? "just now" : `${signalCursor * 12}s ago`;
}

function renderPreferences(state, destination) {
  const persona = personaRules[state.persona];
  const food = checkedValues(["vegetarian", "vegan", "halal", "glutenFree"]).map((id) => ({
    vegetarian: "Vegetarian",
    vegan: "Vegan",
    halal: "Halal",
    glutenFree: "Gluten-free",
  })[id]);
  const chips = [
    persona.label,
    `${state.travelers} traveler${state.travelers > 1 ? "s" : ""}`,
    `${paceLabels[state.pace - 1]} pace`,
    `${state.stay} stay`,
    ...food,
    destination.currency,
  ];
  document.querySelector("#preferenceChips").innerHTML = chips.map((chip) => `<span>${escapeHtml(chip)}</span>`).join("");
}

function renderConstraints(state, plan) {
  const constraints = [
    [state.budget >= plan.forecast + state.reserve, "Budget and reserve"],
    [state.noRedEye, "Flight fatigue"],
    [state.accessible, "Accessibility"],
    [state.lowRisk, "Safety layer"],
    [state.foodLimits, "Food constraints"],
    [state.offlinePack, "Network outage"],
  ];
  document.querySelector("#constraintList").innerHTML = constraints
    .map(
      ([met, label]) => `
        <div>
          <b>${met ? "OK" : "!"}</b>
          <span>${escapeHtml(label)} ${met ? "handled" : "needs fallback"}</span>
        </div>
      `,
    )
    .join("");
}

function renderExperiences(state, destination, plan) {
  const cards = [
    ["Hidden gem", destination.experiences[rebalanceOffset % destination.experiences.length], "Local discovery"],
    ["Meal intelligence", state.vegan ? "Vegan-safe route with reservation notes and allergy prompts." : "Meal windows are pinned near activity clusters.", "Food"],
    ["Backup option", plan.risk === "High" ? "Lower-risk indoor alternative held for the most exposed day." : "Weather and crowd backup is ready without changing hotel base.", "Resilience"],
    ["Group consensus", personaRules[state.persona].focus, "Personalization"],
    ["Offline pack", state.offlinePack ? "Maps, vouchers, contacts, and itinerary are staged for download." : "Enable offline pack for outages and border crossings.", "Preparedness"],
    ["Post-trip", "Expense summary, memory prompts, photo grouping, and future recommendations.", "Learning"],
  ];
  document.querySelector("#experienceGrid").innerHTML = cards
    .map(
      ([title, body, tag]) => `
        <section class="experience-card">
          <h4>${escapeHtml(title)}</h4>
          <p>${escapeHtml(body)}</p>
          <span>${escapeHtml(tag)}</span>
        </section>
      `,
    )
    .join("");
}

function renderReplan() {
  const scenario = disruptionScenarios[disruptionIndex % disruptionScenarios.length];
  document.querySelector("#replanFlow").innerHTML = scenario.steps
    .map(
      ([label, body], index) => `
        <div class="replan-step">
          <b>${index + 1}</b>
          <div>
            <strong>${escapeHtml(label)}</strong>
            <p>${escapeHtml(body)}</p>
          </div>
        </div>
      `,
    )
    .join("");
}

function renderArchitecture() {
  document.querySelector("#architectureFlow").innerHTML = architectureNodes
    .map(
      ([title, body]) => `
        <section class="architecture-node">
          <h4>${escapeHtml(title)}</h4>
          <p>${escapeHtml(body)}</p>
        </section>
      `,
    )
    .join("");
}

function renderLearning(state, plan) {
  const learningScore = Math.min(99, 71 + learningLikes * 5 + (state.foodLimits ? 4 : 0) + (state.lowRisk ? 3 : 0));
  document.querySelector("#learningScore").textContent = `${learningScore}%`;
  const items = [
    ["Preference memory", `Weighted ${state.style} experiences and ${state.stay} stays higher after feedback.`],
    ["Behavior signal", `${learningLikes} positive signal${learningLikes === 1 ? "" : "s"} improved future ranking.`],
    ["Cost model", `${plan.pressure} forecast drives ${plan.budgetDelta < 0 ? "saving alternatives" : "upgrade suggestions"}.`],
  ];
  document.querySelector("#learningList").innerHTML = items
    .map(
      ([label, body]) => `
        <div class="learning-item">
          <b>AI</b>
          <span><strong>${escapeHtml(label)}</strong><br />${escapeHtml(body)}</span>
        </div>
      `,
    )
    .join("");
}

function renderChat(state, destination, plan) {
  const question = document.querySelector("#conciergeInput").value || "What should I know?";
  const answer =
    question.toLowerCase().includes("flight") || question.toLowerCase().includes("delay")
      ? `If the flight is delayed, I will move the first timed booking, update check-in, protect ${currency(state.reserve)} reserve, and send an offline arrival plan.`
      : `For ${destination.name}, I recommend keeping ${paceLabels[state.pace - 1].toLowerCase()} pace, ${plan.pressure.toLowerCase()} spend, and a verified backup near each high-priority stop.`;
  document.querySelector("#chatLog").innerHTML = `
    <div class="chat-message">
      <strong>You</strong>
      <p>${escapeHtml(question)}</p>
    </div>
    <div class="chat-message">
      <strong>VoyageOS</strong>
      <p>${escapeHtml(answer)}</p>
    </div>
  `;
}

function showStatus(message) {
  document.querySelector("#syncStatus").innerHTML = `<span></span> ${escapeHtml(message)}`;
  window.setTimeout(() => {
    document.querySelector("#syncStatus").innerHTML = "<span></span> Live intelligence on";
  }, 1800);
}

function render() {
  const state = getState();
  const destination = destinations[state.destination];
  const plan = calculatePlan(state, destination);
  const days = buildItinerary(state, destination, plan);
  const persona = personaRules[state.persona];

  budgetValue.textContent = currency(state.budget);
  reserveValue.textContent = currency(state.reserve);
  paceValue.textContent = paceLabels[state.pace - 1];
  document.documentElement.style.setProperty("--destination-image", destination.image);

  document.querySelector("#tripTitle").textContent = `${destination.name} for ${persona.label.toLowerCase()}`;
  document.querySelector("#seasonTag").textContent = destination.season;
  document.querySelector("#visualTitle").textContent = destination.visual;
  document.querySelector("#visualTags").innerHTML = [
    `${destination.days} day template`,
    `${destination.country}`,
    `${currency(plan.daily)}/day forecast`,
    `${plan.carbonSaved} kg CO2e saved`,
  ]
    .map((tag) => `<span>${escapeHtml(tag)}</span>`)
    .join("");
  document.querySelector("#fitScore").textContent = `${plan.fit}%`;
  document.querySelector("#fitMeter").style.width = `${plan.fit}%`;
  document.querySelector("#budgetPressure").textContent = plan.pressure;
  document.querySelector("#transitLoad").textContent = `${plan.transit.toFixed(1)} hrs/day`;
  document.querySelector("#riskLevel").textContent = plan.risk;
  document.querySelector("#routeSummary").textContent = plan.route.summary;
  document.querySelector("#itineraryMeta").textContent =
    `Optimized for ${state.style}, ${paceLabels[state.pace - 1].toLowerCase()} pace, ${persona.focus}.`;
  document.querySelector("#carbonScore").textContent = `${plan.carbonSaved} kg CO2e saved`;
  document.querySelector("#carbonDetail").textContent = state.lowCarbon
    ? "Lower-carbon routing and clustered activities selected"
    : "Fastest route selected with emissions tracked";

  renderRouteTags(plan.route.tags, state);
  renderTimeline(days);
  renderBookings(plan, state);
  renderSignals();
  renderPreferences(state, destination);
  renderConstraints(state, plan);
  renderExperiences(state, destination, plan);
  renderReplan();
  renderArchitecture();
  renderLearning(state, plan);
  renderChat(state, destination, plan);
}

form.addEventListener("input", render);

destinationSelect.addEventListener("change", () => {
  routeIndex = 0;
  rebalanceOffset = 0;
  render();
});

personaSelect.addEventListener("change", () => {
  const persona = personaRules[personaSelect.value];
  document.querySelector("#travelers").value = persona.travelers;
  if (personaSelect.value === "accessibility") document.querySelector("#accessible").checked = true;
  if (personaSelect.value === "solo") document.querySelector("#lowRisk").checked = true;
  if (personaSelect.value === "business") setRadio("style", "work");
  if (personaSelect.value === "luxury") setRadio("style", "luxury");
  if (personaSelect.value === "backpacker") setRadio("stay", "hostel");
  render();
});

parsePromptBtn.addEventListener("click", inferPrompt);

optimizeBtn.addEventListener("click", () => {
  rebalanceOffset = (rebalanceOffset + 1) % 3;
  showStatus("Plan optimized");
  render();
});

swapRouteBtn.addEventListener("click", () => {
  routeIndex += 1;
  showStatus("Route swapped");
  render();
});

rebalanceBtn.addEventListener("click", () => {
  rebalanceOffset += 1;
  showStatus("Itinerary rebalanced");
  render();
});

simulateDisruptionBtn.addEventListener("click", () => {
  disruptionIndex += 1;
  signalCursor = (signalCursor + 1) % liveSignals.length;
  showStatus(`${disruptionScenarios[disruptionIndex % disruptionScenarios.length].event} handled`);
  render();
});

askConciergeBtn.addEventListener("click", () => {
  showStatus("Concierge answered");
  render();
});

likePlanBtn.addEventListener("click", () => {
  learningLikes += 1;
  showStatus("Preference learned");
  render();
});

window.setInterval(() => {
  signalCursor = (signalCursor + 1) % liveSignals.length;
  renderSignals();
}, 12000);

render();

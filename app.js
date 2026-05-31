const destinations = {
  kyoto: {
    name: "Kyoto",
    country: "Japan",
    days: 6,
    season: "Late spring shoulder season",
    image: "url('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80')",
    visual: "Temple mornings, market lunches, quiet rail hops.",
    routes: [
      {
        summary: "Arrive Osaka, rail to Kyoto, depart Tokyo after a one-night stop.",
        tags: ["Rail-first", "1 transfer", "Lowest disruption"],
        transit: 4.2,
      },
      {
        summary: "Arrive Tokyo, shinkansen to Kyoto, fly home from Kansai.",
        tags: ["Open jaw", "Fewer hotel moves", "Higher fare"],
        transit: 5.1,
      },
    ],
    baseCost: 1920,
    activities: {
      culture: ["Fushimi Inari before crowds", "Gion craft walk", "Nijo Castle and tea ceremony"],
      food: ["Nishiki Market crawl", "Obanzai counter dinner", "Sake tasting in Fushimi"],
      nature: ["Arashiyama bamboo route", "Philosopher's Path", "Kurama forest bath"],
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
    routes: [
      {
        summary: "Base in Baixa, tram and rail day trips to Belem, Sintra, and Cascais.",
        tags: ["Single base", "Walkable", "Coastal day trip"],
        transit: 3.1,
      },
      {
        summary: "Split Lisbon and Porto with a fast train north and open-jaw return.",
        tags: ["Two cities", "Fast rail", "More hotel moves"],
        transit: 4.8,
      },
    ],
    baseCost: 1640,
    activities: {
      culture: ["Alfama morning walk", "MAAT and Belem", "Fado night in Mouraria"],
      food: ["Seafood lunch in Cacilhas", "Pasteis tasting", "Natural wine bars"],
      nature: ["Sintra ridge walk", "Cascais bike path", "Tagus sunset sail"],
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
    routes: [
      {
        summary: "Base in Reykjavik with Golden Circle, south coast, and lagoon days.",
        tags: ["Weather flexible", "No long drive", "Premium stays"],
        transit: 5.5,
      },
      {
        summary: "Self-drive south coast to Vik with two nights outside the city.",
        tags: ["Scenic drive", "Rental car", "Higher weather risk"],
        transit: 6.4,
      },
    ],
    baseCost: 2880,
    activities: {
      culture: ["Harpa and harbor dinner", "Settlement Exhibition", "Design shops in Laugavegur"],
      food: ["Nordic tasting menu", "Bakery crawl", "Seafood soup stop"],
      nature: ["Thingvellir and geysers", "Skogafoss and black sand beach", "Sky Lagoon recovery"],
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
    routes: [
      {
        summary: "Stay inside the medina, private transfer from RAK, day trip to Atlas villages.",
        tags: ["Medina base", "Private transfer", "Guided souks"],
        transit: 3.7,
      },
      {
        summary: "Pair Marrakesh with Agafay overnight camp and a late return flight.",
        tags: ["Desert night", "More movement", "Sunset focus"],
        transit: 5.3,
      },
    ],
    baseCost: 1380,
    activities: {
      culture: ["Ben Youssef Madrasa", "Medina artisan circuit", "Bahia Palace"],
      food: ["Tagine workshop", "Spice market tasting", "Rooftop dinner near Jemaa el-Fnaa"],
      nature: ["Majorelle Garden", "Atlas foothills day", "Agafay sunset ride"],
      work: ["Riad focus morning", "Garden lunch", "Late souk visit"],
    },
  },
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
];

const bookings = [
  ["Flights", "Flexible fare with no red-eye segment", 1240],
  ["Stay", "Central boutique hotel, breakfast included", 1480],
  ["Experiences", "Guided activities and local reservations", 620],
  ["Transit", "Airport rail, intercity route, local passes", 500],
];

let routeIndex = 0;
let signalCursor = 0;
let rebalanceOffset = 0;

const form = document.querySelector("#plannerForm");
const destinationSelect = document.querySelector("#destination");
const budgetInput = document.querySelector("#budget");
const paceInput = document.querySelector("#pace");
const budgetValue = document.querySelector("#budgetValue");
const paceValue = document.querySelector("#paceValue");
const optimizeBtn = document.querySelector("#optimizeBtn");
const swapRouteBtn = document.querySelector("#swapRouteBtn");
const rebalanceBtn = document.querySelector("#rebalanceBtn");

const paceLabels = ["Very light", "Easy", "Balanced", "Active", "Packed"];

function currency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function getState() {
  const data = new FormData(form);
  return {
    destination: data.get("destination"),
    dates: data.get("dates") || "Flexible dates",
    travelers: Number(data.get("travelers")) || 1,
    budget: Number(data.get("budget")),
    pace: Number(data.get("pace")),
    style: data.get("style"),
    noRedEye: document.querySelector("#noRedEye").checked,
    accessible: document.querySelector("#accessible").checked,
    lowCarbon: document.querySelector("#lowCarbon").checked,
    foodLimits: document.querySelector("#foodLimits").checked,
  };
}

function calculatePlan(state, destination) {
  const route = destination.routes[routeIndex % destination.routes.length];
  const styleModifier = { culture: 1.02, food: 1.08, nature: 1.04, work: 0.98 }[state.style];
  const constraintCost =
    (state.noRedEye ? 120 : 0) +
    (state.accessible ? 180 : 0) +
    (state.lowCarbon ? 80 : 0) +
    (state.foodLimits ? 70 : 0);
  const paceCost = (state.pace - 3) * 95;
  const estimate = Math.round(destination.baseCost * styleModifier + constraintCost + paceCost);
  const budgetDelta = state.budget - estimate;
  const transit = Math.max(2.1, route.transit + (state.pace - 3) * 0.28 - (state.lowCarbon ? 0.25 : 0));
  const risk =
    budgetDelta < -350 || (!state.noRedEye && state.pace > 4) || (!state.accessible && route.transit > 5.8)
      ? "High"
      : budgetDelta < 100 || route.transit > 5
        ? "Medium"
        : "Low";
  const fit = Math.max(
    58,
    Math.min(
      98,
      92 + Math.floor(budgetDelta / 140) - Math.abs(state.pace - 3) * 3 - (risk === "High" ? 10 : risk === "Medium" ? 5 : 0),
    ),
  );

  return {
    route,
    estimate,
    transit,
    risk,
    fit,
    pressure: budgetDelta >= 350 ? "Comfortable" : budgetDelta >= 0 ? "Tight but workable" : "Over budget",
  };
}

function buildItinerary(state, destination, plan) {
  const activities = [...destination.activities[state.style]];
  const fallback = destination.activities.culture;
  const dayCount = Math.min(destination.days, state.pace > 4 ? destination.days + 1 : destination.days);
  const days = [];

  for (let index = 0; index < dayCount; index += 1) {
    const activity = activities[(index + rebalanceOffset) % activities.length] || fallback[index % fallback.length];
    const recovery = state.pace <= 2 && index % 2 === 1 ? "Recovery window and unplanned neighborhood time." : "";
    const access = state.accessible ? "Step-free route checked." : "Walking route optimized.";
    const food = state.foodLimits ? "Dietary-safe reservation attached." : "Local dining option nearby.";
    const cost = Math.round(plan.estimate / dayCount + (index % 3) * 28 - (state.pace <= 2 ? 20 : 0));

    days.push({
      title: activity,
      body: [access, food, recovery].filter(Boolean).join(" "),
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
  ];
  document.querySelector("#routeTags").innerHTML = [...tags, ...constraints]
    .map((tag) => `<span>${tag}</span>`)
    .join("");
}

function renderTimeline(days) {
  document.querySelector("#timeline").innerHTML = days
    .map(
      (day, index) => `
        <section class="day-card">
          <div class="day-index"><span>Day</span><strong>${index + 1}</strong></div>
          <div>
            <h4>${day.title}</h4>
            <p>${day.body}</p>
          </div>
          <div class="day-cost"><span>Est.</span>${currency(day.cost)}</div>
        </section>
      `,
    )
    .join("");
}

function renderBookings(plan, state) {
  const travelerFactor = Math.max(1, state.travelers);
  const total = bookings.reduce((sum, item) => sum + item[2], 0) + (plan.estimate - destinations[state.destination].baseCost);
  document.querySelector("#bookingTotal").textContent = currency(total * travelerFactor);
  document.querySelector("#bookingList").innerHTML = bookings
    .map(([label, detail, amount]) => {
      const adjusted = Math.max(120, amount + (plan.estimate - destinations[state.destination].baseCost) / bookings.length);
      return `
        <div class="booking-row">
          <strong>${label}</strong>
          <span>${currency(adjusted * travelerFactor)}</span>
          <p>${detail}</p>
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
          <h4>${signal.title}</h4>
          <p>${signal.body}</p>
          <div class="signal-meta">${signal.meta.map((item) => `<span>${item}</span>`).join("")}</div>
        </section>
      `,
    )
    .join("");
  document.querySelector("#lastUpdated").textContent = signalCursor === 0 ? "just now" : `${signalCursor * 12}s ago`;
}

function render() {
  const state = getState();
  const destination = destinations[state.destination];
  const plan = calculatePlan(state, destination);
  const days = buildItinerary(state, destination, plan);

  budgetValue.textContent = currency(state.budget);
  paceValue.textContent = paceLabels[state.pace - 1];
  document.documentElement.style.setProperty("--destination-image", destination.image);

  document.querySelector("#tripTitle").textContent = `${destination.name} in ${destination.days} days`;
  document.querySelector("#seasonTag").textContent = destination.season;
  document.querySelector("#visualTitle").textContent = destination.visual;
  document.querySelector("#fitScore").textContent = `${plan.fit}%`;
  document.querySelector("#fitMeter").style.width = `${plan.fit}%`;
  document.querySelector("#budgetPressure").textContent = plan.pressure;
  document.querySelector("#transitLoad").textContent = `${plan.transit.toFixed(1)} hrs/day`;
  document.querySelector("#riskLevel").textContent = plan.risk;
  document.querySelector("#routeSummary").textContent = plan.route.summary;
  document.querySelector("#itineraryMeta").textContent =
    `Built around ${state.style.replace("-", " ")}, ${paceLabels[state.pace - 1].toLowerCase()} pace, and ${state.lowCarbon ? "lower-carbon" : "fastest"} routing.`;

  renderRouteTags(plan.route.tags, state);
  renderTimeline(days);
  renderBookings(plan, state);
  renderSignals();
}

form.addEventListener("input", render);
destinationSelect.addEventListener("change", () => {
  routeIndex = 0;
  rebalanceOffset = 0;
  render();
});

optimizeBtn.addEventListener("click", () => {
  rebalanceOffset = (rebalanceOffset + 1) % 3;
  document.querySelector("#syncStatus").innerHTML = "<span></span> Plan optimized";
  render();
  window.setTimeout(() => {
    document.querySelector("#syncStatus").innerHTML = "<span></span> Live updates on";
  }, 1800);
});

swapRouteBtn.addEventListener("click", () => {
  routeIndex += 1;
  render();
});

rebalanceBtn.addEventListener("click", () => {
  rebalanceOffset += 1;
  render();
});

window.setInterval(() => {
  signalCursor = (signalCursor + 1) % liveSignals.length;
  renderSignals();
}, 12000);

render();

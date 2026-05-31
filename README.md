# VoyageOS Travel Planner

A self-contained travel planning web app for exploring destinations, traveler preferences, trip constraints, adaptive itineraries, booking estimates, route choices, and live trip-operation signals.

## Run locally

```bash
python3 -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

The current live updates are simulated in the browser so the experience works without API keys. The UI is structured so weather, transit, fare, and booking feeds can be wired into `app.js` later.

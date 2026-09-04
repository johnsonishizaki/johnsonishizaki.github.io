# Projects & Systems Directory

This directory contains architectural specifications, system diagrams, and technical case studies for projects developed by **Johnson Bediako Ametsitsi**.

## Current Projects

1. **OlagAir** (`olagair`)
   - **Status:** In Development
   - **Description:** Educational communication platform connecting students, educators, parents, and administrative groups.
   - **Architecture:** Role-Based Access Control ⇄ REST / WebSocket Gateway ⇄ PostgreSQL.

2. **Button Galaxy** (`button-galaxy`)
   - **Status:** Research / In Development
   - **Description:** Structured AI orchestration pipeline exploring multi-agent routing, context injection, and response formatting.
   - **Architecture:** `Router → Context → Agents → Provider → Formatter`.

3. **Campfire** (`campfire`)
   - **Status:** In Development
   - **Description:** Communication and collaborative chat platform with integrated contextual AI tooling.

4. **Certified Moi** (`certified-moi`)
   - **Status:** In Development
   - **Description:** Ghana-focused campus retail and student boutique concept tailored for local hostel fulfillment.

5. **EV3 Robotics** (`ev3-robotics`)
   - **Status:** Research / Experimental
   - **Description:** Closed-loop control systems, PID line tracking, and optical sensor calibration on LEGO Mindstorms EV3.

6. **Passive Hub** (`passive-hub`)
   - **Status:** Research
   - **Description:** Centralized telemetry dashboard for distributed computing node health and monitoring.

## Adding New Projects

To add a new project to the website:
1. Open `src/data/portfolioData.ts`.
2. Append a new `Project` object to the `PROJECTS` array following the interface in `src/types.ts`.
3. Provide honest status indicators (`In Development`, `Prototype`, `Research`, `Experimental`, `Live`, or `Archived`).
4. Avoid any fabricated client numbers, revenue, or unverified claims.

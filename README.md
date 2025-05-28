# Activity Ranker Based on Weather

This project is a fullstack application that ranks how desirable a location is for different activities over the next 7 days, based on real-time weather data from the Open-Meteo API.

## Overview

You Input a city or town, and the system returns a ranked list of scores for the following avivities:

- Skiing  
- Surfing  
- Outdoor sightseeing  
- Indoor sightseeing

Scores are based on 7 day weather forcasts which are mapped to relevant conditions.

## Tech Stack

- **Frontend**: React (TypeScript), Apollo Client  
- **Backend**: Node.js (TypeScript), Apollo Server (GraphQL)  
- **Data Source**: [Open-Meteo API](https://open-meteo.com/)  
- **Tooling**: Axios, dotenv, nodemon, ts-node  

## Architecture
Client (React + Apollo) `>` GraphQL Server (Node + Apollo Server) `>` Open-Meteo API (Grocoding + Forecast)

- **Modular Backend**: Separates concerns for geocoding, weather fetching, and scoring logic  
- **GraphQL API**: `rankActivities(city: String!): [ActivityScore!]!`  
- **Frontend**: Minimal form UI + score display  

## Running Locally

**Backend**

Create an env file in `backend/.env` 

```
OPEN_METEO_GEOCODE_URL=https://geocoding-api.open-meteo.com/v1/search
OPEN_METEO_FORECAST_URL=https://api.open-meteo.com/v1/forecast
```

To start the backend server run:
```
cd backend
npm install
npm run dev
```

Open http://localhost:4000 to access the GraphQL playground.

**Frontend**

Create an env file in `frontend/.env` 

```
VITE_GRAPHQL_API_URL=http://localhost:4000
```

To start the frontend run:
```
cd frontend
npm install
npm start
```

## Technical Decisions

- GraphQL over REST: For clean frontend integration and future extensibility
- Env vars for URLs: Makes it easier to swap endpoints or mock for testing
- Manual weather scoring: Transparent manual scoring for simplicity and clarity
- No Lambda/EKS: Deliberately avoided overengineering; would move to Lambda or containerised deployment in a real-world scalable scenario

## AI Usage

Used ChatGPT to:

- Brainstorm scoring logic based on weather conditions
- Generate a basic folder structure with TypeScript + Apollo
- Draft README sections
  
Used outputs as scaffolding only, and reviewed/refactored every piece.
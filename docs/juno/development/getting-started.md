---
sidebar_position: 0
---

# Getting Started

There are two ways to get started. With installer or without installer.

## With installer

1. Fork the juno-core repository
2. Run `npx create-juno-dev-env` in the same parent folder as where you forked the repository
3. When using cloud backend request to be added to the Google Test users via [Discord](https://discord.gg/peRDGMn9xa), if you want to run local follow the steps [here](https://github.com/Elysium-Labs-EU/juno-backend-service/blob/main/README.md)

## Without installer

1.  Download the code to your local machine - and run `yarn` to install all packages
2.  Create a file called `.env` in the root of the project
3.  If you want to run the backend on your local - set up the backend server via the steps [here](https://github.com/Elysium-Labs-EU/juno-backend-service/blob/main/README.md), else continue to the next step.
4.  Add `VITE_BACKEND_URL=YOUR_BACKEND_URL` to the `.env` file - the current default is `http://localhost:5001`- If you wish to work with our hosted cloud backend, so you don't have to manage the backend you have to set: `VITE_USE_LOCAL_FRONTEND_CLOUD_BACKEND=true` and `VITE_BACKEND_URL=https://juno-api.elysiumlabs.io`. And request to be added to the Google Test users via [Discord](https://discord.gg/peRDGMn9xa)
5.  All the other values given as an example in `.env.example` are optional.
6.  Run the app via `yarn start`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

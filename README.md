# TourCamp

TourCamp is a lightweight travel destination app built with Express.js, MongoDB, and EJS templates. It lets users browse, add, edit, and delete travel destinations, making it a simple CRUD-based trip planner for showcasing places to visit.

## Overview

The application stores travel records in MongoDB and renders pages with EJS templates using a shared layout. Each destination includes a name, location, description, date, and image reference, allowing users to manage an itinerary or travel inspiration board.

## Features

- Browse all destinations in a card-based listing
- View details for a single destination
- Create a new destination entry
- Edit destination details
- Delete destinations
- Flexible EJS layout and reusable templates
- Seed script for populating MongoDB with sample data

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- EJS templating
- EJS Mate layouts
- Method override for PUT and DELETE requests

## Project Structure

```
TourCamp/
├── app.js                 # Express server and route definitions
├── models/
│   └── tourdest.js        # Mongoose schema for destinations
├── seeds/
│   ├── dest.js           # Sample destination data
│   └── index.js          # Database seeding script
├── views/
│   ├── destinations/     # Destination CRUD template pages
│   ├── layouts/          # Shared EJS layouts
│   ├── partials/         # Reusable partials
│   ├── home.ejs          # Landing page
│   └── error.ejs         # 404 error page 
├── scripts/
|   └── errorHandler.js   # AppError + wrapAsync
├── Public
|   └── scripts/
|          └──textarea.js 
|
├── package.json
├── package-lock.json 
├──.gitignore
└── README.md
```

## Installation

1. Clone the repository.
```bash
git clone 'https://github.com/im-aftab/TourCamp'
```
2. Install dependencies:

```bash
npm install
```

3. Make sure MongoDB is running locally on:

```text
mongodb://localhost:27017/seedDB
```

## Running the App

Start the server:

```bash
node app.js
```

Then open:

```text
http://localhost:3000
```

## Seed Data

To populate the database with sample destinations:

```bash
node seeds/index.js
```

This script clears existing destination records and inserts starter travel entries.

## Routes

| Method | Route | Description |
|---|---|---|
| GET | `/` | Home page |
| GET | `/destinations` | Show all destinations |
| GET | `/destinations/new` | Create destination form |
| POST | `/destinations` | Save a new destination |
| GET | `/destinations/:id` | Show a single destination |
| GET | `/destinations/:id/edit` | Edit form for a destination |
| PUT | `/destinations/:id` | Update destination |
| DELETE | `/destinations/:id` | Delete destination |

## Model

The destination model is defined in `models/tourdest.js` and contains:

- `name` — required destination name
- `date` — required travel date
- `description` — trip description
- `location` — destination location
- `image` — image URL

## Notes

This project is a simple CRUD application intended for learning and demonstration purposes. It is not yet configured for production deployment, authentication, or advanced travel planning features.

## License

This project is licensed under the ISC License.

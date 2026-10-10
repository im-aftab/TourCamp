

<p align="center">
  <img src="https://github.com/im-aftab/TourCamp/blob/main/Public/logos/tourDest.svg" alt="TourCamp Banner" width="100%" />
</p>



# TourCamp


**TourCamp** is a lightweight travel destination app built with **Express.js**, **MongoDB**, and **EJS templates**. It enables users to browse, add, edit, and delete travel destinations — a simple CRUD‑based trip planner for showcasing places to visit.

---

## 📖 Overview
TourCamp stores travel records in MongoDB and renders pages with EJS templates using a shared layout. Each destination includes:
- Name
- Location
- Description
- Date
- Image reference  

This makes it easy to manage an itinerary or build a travel inspiration board.

---

## ✨ Features
- Card‑based listing of all destinations
- Detailed view for a single destination
- Create new destination entries
- Edit existing destinations
- Delete destinations
- Flexible EJS layout with reusable templates
- Seed script to populate MongoDB with sample data
- Error handling middleware and basic form validation

---

## 🛠 Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge&logo=ejs&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

---

## 📂 Project Structure
```text
TourCamp/
├── app.js                 # Express server & routes
├── models/
│   └── tourdest.js        # Mongoose schema
├── seeds/
│   ├── dest.js            # Sample data
│   └── index.js           # Seeding script
├── views/
│   ├── destinations/      # CRUD template pages
│   ├── layouts/           # Shared layouts
│   ├── partials/          # Navbar & footer partials
│   ├── home.ejs           # Landing page
│   └── error.ejs          # Error page
├── scripts/
│   └── errorHandler.js    # AppError + wrapAsync
├── Public/
│   └── scripts/
│       └── textarea.js    # Form validator
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/im-aftab/TourCamp
```

2. Install dependencies:

```bash
npm install
```
3. Ensure MongoDB is running locally:

```text
mongodb://localhost:27017/seedDB
```

---

## 🚀 Running the App
Start the server:
```bash
node app.js
```
Open in browser:
```text
http://localhost:3000
```

---

## 🌱 Seed Data
Populate the database with sample destinations:
```bash
node seeds/index.js
```
This clears existing records and inserts starter entries.

---

## 🔗 Routes
| Method | Route | Description |
|--------|-------|-------------|
| GET    | `/` | Home page |
| GET    | `/destinations` | Show all destinations |
| GET    | `/destinations/new` | New destination form |
| POST   | `/destinations` | Save new destination |
| GET    | `/destinations/:id` | Show single destination |
| GET    | `/destinations/:id/edit` | Edit destination form |
| PUT    | `/destinations/:id` | Update destination |
| DELETE | `/destinations/:id` | Delete destination |

---

## 🗃 Model
Defined in `models/tourdest.js`:
- `name` — required destination name  
- `date` — required travel date  
- `description` — trip description  
- `location` — destination location  
- `image` — image URL  

---

## 📌 Project Updates
### October 10, 2026
- Added Express error handling & basic form validator

### October 07, 2026
- Applied Bootstrap styles to Home, Edit, View, and Add pages

### October 05, 2026
- Created reusable partials for navigation bar and footer
- Integrated partials into layout with ejsMate boilerplate
- Styled Home page ("All Destinations") with Bootstrap
- Added responsive form design for "New Destination" page

### October 04, 2026
- Completed CRUD with Delete functionality
- Setup EJS‑Mate layouts

### October 03, 2026
- Implemented Create, Read, Update routes

### September 30, 2026
- Added project files and database schema

### September 29, 2026
- Initial Express app setup with basic routing

---

## 📜 Notes
TourCamp is a **learning/demo project** showcasing CRUD operations with Express and MongoDB.  
It is not yet configured for production deployment, authentication, or advanced travel planning features.

---

## 📄 License
Licensed under the **ISC License**.

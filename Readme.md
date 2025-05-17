# 🔗 Short URL Generator

A simple and efficient URL shortening service built using **Node.js**, **Express**, **MongoDB**, and **EJS**.

## 📌 About the Project

This application allows users to:

- 🔗 Shortens long URLs into compact, shareable links.

- 📥 Generates custom short links that redirect to original URLs.

- 📈 Tracks total clicks on each short URL using MongoDB.

- 🕒 Logs detailed visit history in the MongoDB database, storing timestamps for every click.

- 🖥️ Displays all URLs and stats on a clean, server-rendered dashboard.

It's a mini clone of services like Bit.ly, built for learning and practical use.

## ⚙️ Tech Stack Used

### 1. **MongoDB**

- Used as the database to store:
  - Original long URL, Shortened `shortId`,Visit history (`timestamp` array)
- Key MongoDB methods used:
  - `findOneAndUpdate()` – to update visit history while fetching the URL.
  - `create()` – to add new short URLs.
  - `find()` – to list all stored URLs.
  - `findOne()` – to check if a shortId exists.

### 2. **Express.js**

- Handles routing and middleware.
- Organizes API and view routes cleanly using:
  - `/url` → URL creation routes
  - `/` → Static/view routes
  - `/:shortId` → Redirection logic

### 3. **EJS (Embedded JavaScript)**

- Used for rendering dynamic server-side HTML.
- Displays:
  - Form to submit new long URLs
  - Table of existing short URLs and their analytics

## 📁 Project Directory Structure

short-url/
│
├── controllers/
│ └── url.js # Controller logic for URL generation
│
├── models/
│ └── url.js # Mongoose schema for short URL data
│
├── routes/
│ ├── url.js # API routes for URL handling (/url)
│ └── staticRouter.js # Static and view routes (/, etc.)
│
├── views/
│ └── home.ejs # EJS template for the homepage
│
├── connect.js # MongoDB connection file
├── index.js # Entry point – main Express app
├── package.json
└── Readme.md

---

---

## 🌐 Localhost Routes Explained

| Route                                | Description                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| **`http://localhost:8001/`**         | Homepage – Shows a list of all shortened URLs and how many times each has been clicked.      |
| **`http://localhost:8001/url`**      | Page to **create new short URLs**. You can input a long URL and get a short one in response. |
| **`http://localhost:8001/:shortId`** | Redirect route – Automatically redirects to the original long URL and logs the visit.        |

---

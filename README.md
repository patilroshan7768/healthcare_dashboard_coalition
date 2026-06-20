# Healthcare Dashboard

A responsive Healthcare Dashboard built with React.js, Vite, Chart.js, and Axios for the Coalition Technologies Front-End Developer Assessment.

## Features

- Patient Dashboard UI based on Adobe XD design
- Patient list sidebar
- Diagnosis History with Chart.js line chart
- Blood Pressure summary
- Vital Cards (Respiratory Rate, Temperature, Heart Rate)
- Diagnostic List
- Lab Results
- Patient Profile Information
- API Integration using Axios
- Responsive Layout

---

## Tech Stack

- React.js
- Vite
- Axios
- Chart.js
- React ChartJS 2
- CSS3

---

## Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── ProfileCard.jsx
│   ├── DiagnosisHistory.jsx
│   ├── VitalCards.jsx
│   ├── DiagnosticList.jsx
│   ├── LabResults.jsx
│   └── Icons.jsx
│
├── pages/
│   └── Dashboard.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   └── dashboard.css
│
├── App.jsx
├── main.jsx
```

---

## Installation

### 1. Clone Repository

```bash
git clone https://github.com/patilroshan7768/healthcare_dashboard_coalition
```

### 2. Navigate to Project

```bash
cd healthcare_dashboard_coalition
```

### 3. Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=YourURL
VITE_API_USERNAME=USERNAME
VITE_API_PASSWORD=PASSWORD
```

Project structure:

```text
healthcare_dashboard_coalition/
├── src/
├── public/
├── .env
├── package.json
└── vite.config.js
```

---

## Running the Project

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

---

## Preview Production Build

```bash
npm run preview
```

---

## API Integration

Patient data is fetched from:
```

Authentication uses Basic Authorization.

Example:

```javascript
const auth = btoa(
  `${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`
);
```

---

## Chart.js

The Diagnosis History section uses:

- Chart.js
- react-chartjs-2

Features:

- Responsive Line Chart
- Last 6 Months Data
- Custom Colors
- Smooth Curves
- Blood Pressure Visualization

---

## Available Scripts

### Development

```bash
npm run dev
```


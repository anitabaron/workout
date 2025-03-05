import "./style.css";
import { setupCounter } from "./counter.ts";
import { Clock } from "./clock.ts";
import Stopwatch from "./stopwatch.ts";
import { logo } from "./logo.ts";

// Main app container
const app = document.querySelector<HTMLDivElement>("#app")!;
if (!app) throw new Error("App container not found");

// Logo container
const logoContainer = document.createElement("div");
logoContainer.className = "logo-container";
const logoGo = logo;
logoContainer.appendChild(logoGo);

// Create elements dynamically
const title = document.createElement("h1");
title.className = "title";
// title.textContent = "Go girl workout app!";

const description = document.createElement("h1");
description.className = "info";
description.textContent =
  "Workout app designed to help you stay on track with your goals - stay tuned";

// Stopwatch container
const stopwatchContainer = document.createElement("div");
const stopwatchTitle = document.createElement("h2");
stopwatchTitle.textContent =
  "Workout planner and timer built with Vite + TypeScript";

const stoperDisplay = document.createElement("div");
stoperDisplay.id = "stoper-display";
stoperDisplay.textContent = "00:00:00";

const startButton = document.createElement("button");
startButton.id = "start-button";
startButton.textContent = "Start";

const stopButton = document.createElement("button");
stopButton.id = "stop-button";
stopButton.textContent = "Stop";

const resetButton = document.createElement("button");
resetButton.id = "reset-button";
resetButton.textContent = "Reset";

// Append elements to stopwatch container
stopwatchContainer.append(
  logoContainer,
  stopwatchTitle,
  stoperDisplay,
  startButton,
  stopButton,
  resetButton
);

// Clock container
const clockContainer = document.createElement("div");
clockContainer.id = "clock";

// Palette container
const paletteContainer = document.createElement("div");
paletteContainer.innerHTML = `
     <h3>Colour palette</h3>
    <div class="palette">
      <div class="box-color My-Color-Theme-1-hex"></div>
      <div class="box-color My-Color-Theme-2-hex"></div>
      <div class="box-color My-Color-Theme-3-hex"></div>
      <div class="box-color My-Color-Theme-4-hex"></div>
      <div class="box-color My-Color-Theme-5-hex"></div>
      <div class="box-color My-Color-Theme-6-hex"></div>
      <div class="box-color My-Color-Theme-7-hex"></div>
      <div class="box-color My-Color-Theme-8-hex"></div>
      <div class="box-color My-Color-Theme-9-hex"></div>
      <div class="box-color My-Color-Theme-10-hex"></div>
    </div>`;

// Counter container
const counterContainer = document.createElement("div");
counterContainer.className = "card";

const counterButton = document.createElement("button");
counterButton.id = "counter";
counterButton.type = "button";

counterContainer.append(counterButton);

// Add everything to the app
app.append(
  title,
  description,
  stopwatchContainer,
  clockContainer,
  paletteContainer,
  counterContainer
);

// Initialize Stopwatch instance
const stopwatch = new Stopwatch("stoper-display");

// Event listeners
startButton.addEventListener("click", () => {
  stopwatch.start();
});
stopButton.addEventListener("click", () => {
  stopwatch.pause();
});
resetButton.addEventListener("click", () => {
  stopwatch.reset();
});

// Initialize Clock
new Clock("clock").start();

// Counter setup
setupCounter(counterButton);

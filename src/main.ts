import "./style.css";
import { setupCounter } from "./counter.ts";
import { Clock } from "./clock.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1 class="title"> Go girl workout app! </h1>
    
    <h1 class="read-the-docs">
      Here will appear a workout adjustable plan with time counter - stay tuned
    </h1>
    <h2>Vite + TypeScript</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div id="clock"></div>
    <h3>Colour palette</h3>
    <div class="palette">
      <div class="box-color My-Color-Theme-1-hex"></div>
      <div class="box-color My-Color-Theme-2-hex"></div>
      <div class="box-color My-Color-Theme-3-hex"></div>
      <div class="box-color My-Color-Theme-4-hex"></div>
      <div class="box-color My-Color-Theme-5-hex"></div>
      <div class="box-color My-Color-Theme-6-hex"></div>
    </div>

  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
new Clock("clock").start();

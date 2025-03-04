import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    
    <h1 class="read-the-docs">
    Here will apear a workout time counter - stay tunned
    </h1>
    <h2>Vite + TypeScript</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
   
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

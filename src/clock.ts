export class Clock {
  private element: HTMLElement;
  private timerId: number | null = null;

  constructor(elementId: string) {
    this.element = document.getElementById(elementId) as HTMLElement;
    if (!this.element) {
      throw new Error(`Element with id ${elementId} not found`);
    }
  }

  private updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");
    this.element.innerText = `${hours}:${minutes}:${seconds}`;
  }

  public start() {
    this.updateClock();
    this.timerId = window.setInterval(() => this.updateClock(), 1000);
  }

  public stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}

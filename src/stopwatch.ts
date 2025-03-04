export class Stopwatch {
  private startTime: number | null = null;
  private elapsedTime: number = 0;
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private displayElement: HTMLElement;
  private isRunning: boolean = false;

  constructor(displayElementId: string) {
    const element = document.getElementById(displayElementId);
    if (!element)
      throw new Error(`Element with ID "${displayElementId}" not found`);
    this.displayElement = element;
    this.updateDisplay();
  }

  private formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  private updateDisplay() {
    if (this.displayElement) {
      this.displayElement.textContent = this.formatTime(this.elapsedTime);
    }
  }

  public start() {
    if (this.isRunning) {
      console.log("Stopwatch is already running!");
      return;
    }
    console.log("Stopwatch started");
    this.startTime = Date.now() - this.elapsedTime;
    this.isRunning = true;

    this.timerInterval = setInterval(() => {
      if (this.startTime !== null) {
        this.elapsedTime = Date.now() - this.startTime;
        this.updateDisplay();
      }
    }, 1000);
  }

  public pause() {
    if (!this.isRunning) {
      console.log("Stopwatch is not running!");
      return;
    }
    console.log("Stopwatch paused");
    this.isRunning = false;
    if (this.timerInterval !== null) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  public reset() {
    console.log("Stopwatch reset");
    this.pause();
    this.elapsedTime = 0;
    this.updateDisplay();
  }
}

export default Stopwatch;

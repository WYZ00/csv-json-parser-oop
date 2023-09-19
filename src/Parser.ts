import fs from "fs";

export abstract class Parser {
  protected data = "";

  public constructor(private path: string) {
    this.load();
  }

  private load() {
    const data = fs.readFileSync(this.path, "utf-8");
    this.data = data;
  }
  abstract parse(): void;
}

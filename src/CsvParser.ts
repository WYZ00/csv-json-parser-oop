import { Parser } from "./Parser";

export class CsvParser extends Parser {
  public super(path: string) {}

  protected parsedData: string[] = [];

  parse(): void {
    this.data.split("\n").map((entry: string) => this.parsedData.push(entry));
    console.log(this.parsedData);
  }
}

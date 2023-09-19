import { Parser } from "./Parser";

export interface Entry {
  title: string;
  description: string;
  author: string;
}

export class JsonParser extends Parser {
  public super(path: string) {}

  protected parsedData: Entry[] = [];

  parse(): void {
    (
      JSON.parse(this.data) as [
        {
          title: string;
          description: string;
          author: string;
          pages: string;
        }
      ]
    ).map((entry) =>
      this.parsedData.push({
        title: entry.title,
        author: entry.author,
        description: entry.description,
      })
    );
    console.log(this.parsedData);
  }
}

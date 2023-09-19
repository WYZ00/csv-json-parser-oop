import path from "path";
import { CsvParser } from "./CsvParser";
import { JsonParser } from "./JsonParser";

const csvPath = path.join(__dirname + "\\..\\" + "books.csv");

const jsonpath = path.join(__dirname + "\\..\\" + "books.json");

type Parser = CsvParser | JsonParser;

class Data {
  static fromCSV(csvpath: string) {
    return new Data(new CsvParser(csvpath));
  }

  static fromJson(jsonpath: string) {
    return new Data(new JsonParser(jsonpath));
  }

  public constructor(public parser: Parser) {}
}

const data = Data.fromCSV(csvPath);
data.parser.parse();

const data2 = Data.fromJson(jsonpath);
data2.parser.parse();

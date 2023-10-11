import {Analyzer} from "./analyzer_interface.js";

export class SomeAnalyzer implements Analyzer {
  analyze(html: string, filePath: string): string {
    return html + filePath;
  }

}

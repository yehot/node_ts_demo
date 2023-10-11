
export interface Analyzer {
  analyze(html: string, filePath: string): string;
}

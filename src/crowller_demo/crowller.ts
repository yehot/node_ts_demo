import fs from 'fs';
import path from 'path';
import superagent from 'superagent';
import * as cheerio from "cheerio";
import {Analyzer} from "./analyzer_interface.js";
import {SomeAnalyzer} from "./someAnalyzer.js";


class Crawler {
  private secret = 'secretKey';
  private url = '';
  
  
  async getRawHtml() {
    const result = await superagent.get(this.url);
    console.log(result.text);
    
    this.getInfo(result.text);
  }
  
  // cheerio: 使用 jquery 的语法
  getInfo(html: string) {
    const $ = cheerio.load(html);
    const item = $('.course-item');
    console.log(item.length);
  }
  
  test() {
    const filePath = path.resolve('./data/demo.json');
    
    let content = {};
    if (fs.existsSync(filePath)) {
      const str = fs.readFileSync(filePath, 'utf-8');
      content = JSON.parse(str);
    } else {
      content = { "1": 2};
    }
    fs.writeFileSync(filePath, JSON.stringify(content));
  }
  
  constructor(private analyzer: Analyzer) {
    // this.test();
    this.analyzer.analyze("1", "2");
    // this.getRawHtml().then(() => {
    // });
  }
}

export default function test() {
  const a1 = new SomeAnalyzer();
  const c1 = new Crawler(a1);
  
  
}

import superagent from 'superagent'
import * as cheerio from "cheerio";

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
  
  
  constructor() {
    this.getRawHtml().then(() => {
    });
  }
}

const c1 = new Crawler();

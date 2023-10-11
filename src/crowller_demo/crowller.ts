import superagent from 'superagent'

class Crawler {
  private secret = 'secretKey';
  private url = '';
  
  private rawHtml = '';
  
  async getRawHtml() {
    const result = await superagent.get(this.url);
    console.log(result.text);
    
  }
  
  constructor() {
    this.getRawHtml().then(() => {
    });
  }
}

const c1 = new Crawler();

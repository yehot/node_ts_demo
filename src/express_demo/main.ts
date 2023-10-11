import express from 'express';
import router from "./router.js";

const app = express();
app.use(router);

app.listen(7001, ()=> {
  console.log('server running');
  console.log('http://localhost:7001');
})

export default function express_demo() {};

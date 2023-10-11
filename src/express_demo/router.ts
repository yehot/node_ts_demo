import {Router, Request, Response} from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send("hello 1");
})


// 定义一个 url path
//
// url 是什么？可以是一个网页的 url，也可以是一个请求的 url
// 在浏览器输入一个 url，既可以是发送一个 url请求； 也可以是访问一个 url 页面
router.get('/data', (req: Request, res: Response) => {
  res.send("hello data 2");
})

export default router;


// 使用 declare 声明一个全局变量
// declare var $: (param: ()=>void) => void;

// declare 可以声明多个同名函数 $
// - 重载
// 正常命名 function 不可以
// declare function $(param: ()=>void): void;
// declare function $(param: string): void;


// interface 中的 html 参数，是个 function 类型
interface JqueryInstance {
  html: (html: string) => JqueryInstance;
}

// interface 中没有命名的参数，也是重载
interface JQuery {
  (readyFunc: ()=> void): void;
  (selector: string): JqueryInstance;
}

declare var $: JQuery;


// $ 也可以是一个 命名空间
declare namespace $j {
  // 命名空间的嵌套
  namespace fn {
    class init {
    
    }
  }
}

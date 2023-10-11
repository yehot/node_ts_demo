
// 使用 declare 声明一个全局变量
// declare var $: (param: ()=>void) => void;

// declare 可以声明多个同名函数 $
// - 重载
// 正常命名 function 不可以
declare function $(param: ()=>void): void;
declare function $(param: string): void;

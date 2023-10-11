
// 能使用 .d.ts 中声明的全局变量 $

// 由于 $ 是个 interface 类型，内部有多个重载的方法
// 传对应类型，就会类型推断为 interface 的对应方法
$(function () {})

$('body');


// 命名空间的用法
new $j.fn.init();

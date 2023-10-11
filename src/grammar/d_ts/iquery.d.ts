

// Es6 模块化的写法，declare 一个 module
// 外部可以 import
declare module '$query' {
  // 混合类型的
  declare function $$(param: ()=>void): void;
  declare function $$(param: string): void;
  
  // export 用的是 =
  export = $$;
}

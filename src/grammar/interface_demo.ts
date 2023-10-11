// 定义一个类型

type Cat = {
  name: string,
  eat(): void;
}

function test(dog: Cat) {
  dog.eat();
  console.log(dog.name);
}

test({
  name: "1",
  eat() {
  }
})

const d1 = {
  name: "1",
  eat() {
  
  }
}
d1.eat();
test(d1)

// 定义一个接口
interface Person {
  name: string;
  // 可选
  // age: number;
  // 只读属性
  readonly height: number;
  
  /// 可以有任意 string 类型的参数名
  [propName: string]: any;
  
  say(): string;
}

// 接口继承
interface Teacher extends Person {
  teach(): void;
}

console.log(p1)

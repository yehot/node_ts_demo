class Person {
  // 默认是 public
  name = '1';
  
  getName() {
    return this.name;
  }
  
  constructor() {
    this.age = 1;
    this.color = 2;
  }
  
  // 私有属性
  private age: number;
  // 内部、子类可用
  protected color: number;
}

// 继承
class Teacher extends Person {
  // 重载函数
  getName(): string {
    return super.getName() + "1";
  }
}

// interface 不能 new
const p1 = new Person();
const t1: Teacher = new Teacher();


class Dog {
  
  private _name: string;
  
  // 构造方法
  constructor(name: string) {
    this._name = name;
  }
  
  // get 、set 方法
  get name() {
    return this._name;
  }
  
  set name(n: string) {
    this._name = n;
  }
}

const d2 = new Dog("123");
d2.name = "1";
console.log(d2.name);

// 抽象类
abstract class Geom {
  abstract getArea(): number;
}

class Cycle extends Geom {
  getArea(): number {
    return 1;
  }
}

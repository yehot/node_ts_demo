
class Person {
    name = '1';
    getName() {
        return this.name;
    }
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


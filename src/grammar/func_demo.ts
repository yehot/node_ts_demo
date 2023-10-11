
// 泛型 T, P
function test<T, P>(first: T, second: P): string {
  return `${first} - ${second}`;
}

interface Item {
  name: string;
}

// 泛型 T extends
class Data<T extends Item> {
  constructor(private data: T) {
  }
}

test(1, 2);

export interface Istack<T> {
  push(element: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

abstract class abstractStack<T> {
  abstract push(element: T): void;
  abstract pop(): T | undefined;
  abstract peek(): T | undefined;
  abstract isEmpty(): boolean;
  abstract size(): number;
}

export class Stack<T> implements Istack<T> {
  tab: Array<T>;
  constructor() {
    this.tab = [];
  }

  push(element: T): void {
    this.tab.push(element);
  }
  pop(): T | undefined {
    return this.tab.pop();
  }
  peek(): T | undefined {
    return this.tab[this.tab.length - 1];
  }
  isEmpty(): boolean {
    if (this.isEmpty()) return true;
    else return false;
  }
  size(): number {}
}

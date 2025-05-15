function LogClass(target: Function) {
    console.log(`${target.name} is instantiated`);
}

@LogClass
class MyClass {
    constructor() { console.log("MyClass instance created"); }
}

const myClassInstance = new MyClass();


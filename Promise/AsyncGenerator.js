//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function*

async function* foo() {
    yield await Promise.resolve('a');
    yield await Promise.resolve('b');
    yield await Promise.resolve('c');
  }
  
  let str = '';
  
  async function generate() {
    for await (const val of foo()) {
      str = str + val;
    }
    console.log(str);
  }
  
  generate();
  // Expected output: "abc"
const foo = {
  bar: Promise.resolve({
    baz: Promise.resolve({
      name: 'hi'
    })
  })
};

(await (await foo.bar).baz).name;

export {};

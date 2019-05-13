const enhancer = require("./enhancer.js");
// test away!

describe("succeed", () => {
  it("should add 1 to enhancement if it is not max", () => {
    const item = {
      enhancement: 14
    };

    const newItem = enhancer.succeed(item);

    expect(newItem.enhancement).toBe(15);
  });
  it("should not add one if at level 20", () => {
    const item = {
      enhancement: 20
    };

    const newItemAbove = enhancer.succeed(item);

    expect(newItemAbove.enhancement).toBe(20);
  });
});

describe("repair", () => {
  it("should increase durability to 100", () => {
    const item = {
      name: "item",
      durability: 50,
      enhancement: 12
    };
    const repairedItem = enhancer.repair(item);

    expect(repairedItem.durability).toBe(100);
  });
});

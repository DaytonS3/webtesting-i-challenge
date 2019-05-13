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

describe("fail", () => {
  it("should decrease the durability of the item is decreased by 5 if less than 15", () => {
    const item = {
      name: "item",
      durability: 50,
      enhancement: 12
    };
    const failedItemUnder15 = enhancer.fail(item);

    expect(failedItemUnder15.durability).toBe(45);
  });

  it("should decrease durability by 10 if 15 or greater", () => {
    const item = {
      name: "item",
      durability: 50,
      enhancement: 16
    };
    const failedItemOver15 = enhancer.fail(item);

    expect(failedItemOver15.durability).toBe(40);
  });
  it("should decrease enchantment by 1 if 16 or greater", () => {
    const item = {
      name: "item",
      durability: 50,
      enhancement: 17
    };
    const failedItemOver16 = enhancer.fail(item);

    expect(failedItemOver16.enhancement).toBe(16);
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

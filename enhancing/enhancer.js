module.exports = {
  succeed,
  fail,
  repair,
  get
};

let item = {
  name: "item",
  enhancement: 0,
  durability: 100
};

function succeed(item) {
  if (item.enhancement === 20) {
    item.enhancement = 20;
  } else {
    item.enhancement += 1;
  }
  return { ...item };
}

function fail(item) {
  if (item.enhancement < 15) {
    item.enhancement - 5;
  } else if (item.enhancement >= 15) {
    item.enhancement - 10;
  } else if (item.enhancement > 16) {
    item.enhancement - 1;
  }
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}

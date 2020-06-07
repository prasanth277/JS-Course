class Entity {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }

  getAgeOfEntity() {
    return new Date().getFullYear() - this.buildYear;
  }
}

class Park extends Entity {
  constructor(name, buildYear, noOfTrees, area) {
    super(name, buildYear);
    this.noOfTrees = noOfTrees;
    this.area = area;
  }

  getTreeDensity() {
    return this.noOfTrees / this.area;
  }
}

class Street extends Entity {
  constructor(name, buildYear, length, size = "normal") {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }
}

const parks = [
  new Park("Gandhi park", 1990, 2000, 1000),
  new Park("Daimond park", 1995, 2000, 1200),
  new Park("Shivaji park", 1998, 2000, 2000),
];

const streets = [
  new Street("Gandhi street", 1980, 10000, "huge"),
  new Street("Nehru street", 1990, 8000),
  new Street("Bankers street", 2000, 6000, "small"),
  new Street("Old nawab street", 1960, 8000, "big"),
];

function report(parks, streets) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const getParksReport = () => {
    console.log("---Parks report---");
    console.log(
      `Each park tree density => ${parks.map((park) => park.getTreeDensity())}`
    );
    console.log(
      `Average age of all parks ${parks
        .map((park) => park.getAgeOfEntity())
        .reduce(reducer)}`
    );

    console.log(`Parks that has more than 1000 trees => 
      ${parks
        .filter((park) => park.noOfTrees >= 1000)
        .map((park) => park.name)}`);
  };

  const getStreetsReport = () => {
    console.log("---Streets report---");
    const totalLength = streets
      .map((street) => street.getAgeOfEntity())
      .reduce(reducer);
    console.log(`Total area of the street ${totalLength}`);
    console.log(`Average area of the street ${totalLength / streets.length}`);
  };

  getParksReport();
  getStreetsReport();
}
report(parks, streets);

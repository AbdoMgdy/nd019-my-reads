const { produce } = require("immer");
const initState = {
  pets: ["dog", "cat"],
  packages: [
    { name: "react", installed: true },
    { name: "redux", installed: true },
  ],
};

// to add a new package
const newPackage = { name: "immer", installed: false };

const nextState = (state = {}, action) =>
  produce(state, (draft) => {
    return action;
  });


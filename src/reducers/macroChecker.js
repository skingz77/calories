let initial_state = {
  age: null,
  gender: null,
  weight: null,
  height: null,
  activity: null,
  isDone: false
};
const calculator = stats => {
  let total = 0;
  let fat, protein, carbs, pCal, fCal;
  let wk = stats.weight / 2.2046;
  let hc = stats.height / 0.3937;
  if (stats.gender === "female") {
    total = 655 + 9.6 * wk + 1.8 * hc - 4.7 * stats.age;
  } else if (stats.gender === "male") {
    total = 66 + 13.7 * wk + 5 * hc - 6.8 * stats.age;
  }
  if (stats.activity === "Sedentary") {
    total = (total * 1.2).toFixed(2);
  } else if (stats.activity === "Light") {
    total = (total * 1.375).toFixed(2);
  } else if (stats.activity === "Moderate") {
    total = (total * 1.55).toFixed(2);
  } else if (stats.activity === "Very") {
    total = (total * 1.725).toFixed(2);
  } else if (stats.activity === "Extreme") {
    total = (total * 1.9).toFixed(2);
  }
  total = Number(total);
  protein = (wk * 1.815).toFixed(2);
  protein = Number(protein);
  pCal = protein * 4;
  fat = ((total * 0.25) / 9).toFixed(2);
  fat = Number(fat);
  fCal = fat * 9;
  carbs = (pCal + fCal) / 4;
  carbs = Number(carbs);
  const macros = {
    calories: total,
    protein,
    fat,
    carbs,
    isDone: true
  };
  return macros;
};
const macroChecker = (state = initial_state, action) => {
  switch (action.type) {
    case "CREATE_MACROS":
    let a = calculator(action.payload);
      return a;

    default:
      return state;
  }
};

export default macroChecker;




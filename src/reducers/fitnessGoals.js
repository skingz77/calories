const initial_state = {
  calories: null,
  protein: null,
  fat: null,
  carbs: null,
  customMacDone: false
};

const calculator = (macros, state) => {
  let { calories, protein, fat, carbs } = macros;
  if (state === "maintain") {
    return {...macros, customMacDone: true};
  } else if (state === "lose") {
    calories = (calories - calories * 0.2).toFixed(2);
    protein = (protein - protein * 0.2).toFixed(2);
    fat = (fat - fat * 0.2).toFixed(2);
    carbs = (carbs - carbs * 0.2).toFixed(2);
    return {
      calories,
      protein,
      fat,
      carbs,
      customMacDone: true
    };
  } else if (state === "gain") {
    calories = (calories + calories * 0.2).toFixed(2);
    protein = (protein + protein * 0.2).toFixed(2);
    fat = (fat + fat * 0.2).toFixed(2);
    carbs = (carbs + carbs * 0.2).toFixed(2);
    return {
      calories,
      protein,
      fat,
      carbs,
      customMacDone: true
    };
  }
};
const fitnessGoals = (state = initial_state, action) => {
  switch (action.type) {
    case "CUSTOM_MACROS":
      return calculator(action.payload[0],action.payload[1]);

    default:
      return state;
  }
};

export default fitnessGoals;

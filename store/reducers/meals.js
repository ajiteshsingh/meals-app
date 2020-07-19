import { MEALS } from '../../data/dummy-data';

const initialeState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialeState, actions) => {
    return state;
}

export default mealsReducer;
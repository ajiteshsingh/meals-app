import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVOURITE, SET_FILTERS } from '../actions/meals';

const initialeState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favouriteMeals: []
}

const mealsReducer = (state = initialeState, actions) => {
    switch (actions.type) {
        case TOGGLE_FAVOURITE:
            const exisitingIndex = state.favouriteMeals.findIndex(meal => meal.id === actions.mealId);
            if (exisitingIndex >= 0) {
                const updatedFavMeals = [...state.favouriteMeals];
                updatedFavMeals.splice(exisitingIndex, 1);
                return { ...state, favouriteMeals: updatedFavMeals };
            } else {
                const meal = state.meals.find(meal => meal.id === actions.mealId);
                return { ...state, favouriteMeals: state.favouriteMeals.concat(meal) };
            }
        case SET_FILTERS:
            const appliedFilters = actions.filters;
            const filteredMeals = state.meals.filter(meal => {
                if (appliedFilters.glutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.vegetarian && !meal.isVegetarian) {
                    return false;
                }
                if (appliedFilters.vegan && !meal.isVegan) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: filteredMeals }
        default:
            return state;
    }
    return state;
}

export default mealsReducer;
export const food = (state: any = [], action) => {
    switch (action.type) {
        case 'LOAD_FOODS_SUCCESS': {
            return { ...state, data: action.payload }
        }
        case 'RATE_FOOD_SUCCESS': {
            return {
                data: state.data.sort((a, b) => b.rating - a.rating)
            };
        }
        default: {
            return state;
        }
    }
};

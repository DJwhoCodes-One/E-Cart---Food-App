const INITIAL_STATE = {
    cart: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_CART':
            // console.log(action.payload);
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);

            if (itemIndex >= 0) {
                state.cart[itemIndex].qnty += 1;
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            else {
                const temp = { ...action.payload, qnty: 1 };
                return {
                    ...state,
                    cart: [...state.cart, temp]
                }
            }

        case 'REMOVE_ONE':
            // console.log(action.payload);
            const itemIndexToRemove = state.cart.findIndex((item) => item.id === action.payload.id);

            if (state.cart[itemIndexToRemove].qnty > 1) {
                state.cart[itemIndexToRemove].qnty -= 1;
                return {
                    ...state,
                    cart: [...state.cart]
                }
            }
            else if (state.cart[itemIndexToRemove].qnty === 1) {
                const dataAfterRemoval = state.cart.filter((e) => {
                    return e.id !== action.payload.id;
                })
                return {
                    ...state,
                    cart: dataAfterRemoval
                }

            }

        case 'REMOVE_CART':
            const data = state.cart.filter((e) => {
                return e.id !== action.payload.id;
            })
            return {
                ...state,
                cart: data
            }

        case 'UPDATE_CART':
            return {
                ...state,
                cart: action.payload
            }

        default:
            return state
    }
}
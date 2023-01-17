const initialState = {
    products: []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':
            let productInfavorites = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInfavorites = true;
                    // return {
                    //     ...product,
                    //     quantity: product.quantity + 1
                    // }
                } else {
                    return product;
                }
                return product;
            })

            if (!productInfavorites) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product
                            // quantity: 1
                        }
                    ]
                })
            } else {
                //DO NOTHING
            }
        case 'REMOVE_FROM_FAVORITES':
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        default:
            return state;
    }
}


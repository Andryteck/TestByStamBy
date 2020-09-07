let initialState = {
    productItem: 0
}


export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'card/ADD-PRODUCT-ITEM' :
            return {
                ...state, productItem: action.value
            }
        default:
            return state
    }
}
export const addProductAC = (productItem) => {
    return {type: 'card/ADD-PRODUCT-ITEM', value: productItem}
}

export const addProductTC = (productItem) => (dispatch) => {
    dispatch(addProductAC(productItem))
}
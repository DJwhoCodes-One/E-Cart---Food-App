export const ADD = (item) => {
    return {
        type: 'ADD_CART',
        payload: item
    }
}

export const UPDATE = (savedArray) => {
    return {
        type: 'UPDATE_CART',
        payload: savedArray
    }
}

export const DEC = (item) => {
    return {
        type: 'REMOVE_ONE',
        payload: item
    }
}

export const DLT = (item) => {
    return {
        type: 'REMOVE_CART',
        payload: item
    }
}
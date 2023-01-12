export const plus = (index) => {
    return {
        type: 'PLUS',
        payload: {
            index: index
        }
    }
}
export const minus = (index) => {
    return {
        type: 'MINUS',
        payload: {
            index: index
        }
    }
}
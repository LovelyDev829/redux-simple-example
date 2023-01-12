
let initState = {
    totalCount: 0,
    list: [
        {
            title: 'rice',
            description: 'This is rice',
            price: 20,
            count: 0,
        },
        {
            title: 'soup',
            description: 'This is soup',
            price: 30,
            count: 0,
        }
    ]    
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'PLUS': {
            console.log("first", action.payload.index)
            return {
                totalCount : state.totalCount+1,
                list:[
                    ...state.list.slice(0, action.payload.index),
                    {
                        title: state.list[action.payload.index].title,
                        description: state.list[action.payload.index].description,
                        price: state.list[action.payload.index].price,
                        count: state.list[action.payload.index].count+1
                    },
                    ...state.list.slice(action.payload.index+1)
                ]
            }
        }
        case 'MINUS': {
            console.log("first", action.payload.index)
            return {
                totalCount : Math.max(state.totalCount-1,0),
                list:[
                    ...state.list.slice(0, action.payload.index),
                    {
                        title: state.list[action.payload.index].title,
                        description: state.list[action.payload.index].description,
                        price: state.list[action.payload.index].price,
                        count: Math.max(state.list[action.payload.index].count-1, 0)
                    },
                    ...state.list.slice(action.payload.index+1)
                ]
            }
        }
        default: return state
    }

}

export default reducer;
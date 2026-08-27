const initialState = {
    postsData: [],
    status: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POSTS': {
            console.log('action > ', action);

            return {
                ...state,
                postsData: action.payload,
                status: 'success'
            };
        }
        case 'LOADING':
            return {
                ...state,
                status: 'loading'
            };
        default:
            return state;
    }
};


// slice

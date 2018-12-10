import {INCREMENT, DECREMENT, REST, RESET} from '../actions/counter';

/** */
const initState = {
    count: 0
}

/** */
export default function reducer (state = initState, action) {
    switch (action.type){
        case INCREMENT:
            //TODO
            return {
                count: state.count+1
            };
        case DECREMENT:
            //TODO
            return {
                count: state.count-1
            };
        case RESET:
            //TODO
            return {
                count: 0
            };
        default:
            return state;
    }
}
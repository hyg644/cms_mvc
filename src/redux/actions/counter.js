//demo +
export const INCREMENT = 'counter/INCREMENT';
//demo -
export const DECREMENT = 'counter/DECREMENT';
export const RESET = 'counter/RESET';

//TODO
export function increment(){
    return { type : INCREMENT};
}

//TODO
export function decrement(){
    return { type : DECREMENT};
}

//TODO
export function reset(){
    return { type : RESET};
}
 
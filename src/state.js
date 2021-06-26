function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}
export const swipesRandomArr = Array(20).fill()
    .map(() => Math.round(randomInteger(1, 4)))
export const tiles = [
    {id: 1, x: '0px', y: '100px'},
    {id: 2, x: '100px', y: '0px'},
    {id: 3, x: '200px', y: '100px'},
    {id: 4, x: '100px', y: '200px'},
]

export const state = {
    swipesArr: swipesRandomArr,
    swipesCopyArr: [...swipesRandomArr],
    counter: 0,
    time: 10,
}
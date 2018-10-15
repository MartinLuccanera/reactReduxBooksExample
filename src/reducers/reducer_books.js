/* A reducer is a function that returns a piece of app's state. Because our app can have many pieces of state, we can many
reducers.
This process has 2 steps:
1) Writing the reducer.
2) Wiring it into the app.
 */

export default function() {
    return [
        {title: 'JavaScript: The Good Parts'},
        {title: 'Harry Potter'},
        {title: 'The Dark Tower'},
        {title: 'Eloquent Ruby'}
    ]
}
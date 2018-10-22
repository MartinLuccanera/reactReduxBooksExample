/* Reducers are only ever gonna be called when an action occurs. That is the 'action' param.
 * State argument is not application state, only the state this reducer is responsible for.
 * The reducer is gonna be called whenever an action is dispatched by our app. This means, it is gonna get called all
 * the time. When we don't care about the action being dispatched, we need a base-case where we return our current state.
 */
export default function(state = null, action) {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    }
    //Redux doesn't allow us to return undefined. We must return a not-undefined object. That is why we use the ES6 syntax
    //that we see at the top "state = null". Which means that if state === undefined then set it to null. This is for the case
    //when the app is just booting up and nothing is selected and no state is set.

    //It is important not to mutate the state. We should always return a fresh end clean one. So, don't do this
    // state.title = book.title
    // return state
    return state;
}
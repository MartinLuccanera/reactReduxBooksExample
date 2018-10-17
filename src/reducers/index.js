import { combineReducers } from 'redux';
//Constructs the application's state
import BooksReducer from './reducer_books';

/*When we pass this object to CombinedReducers we are essentially telling redux how to create our app's state.
* We would have a single piece of state called 'books' where the value is whatever gets returned from the BooksReducer function.
*
*/
const rootReducer = combineReducers({
    /*key: value (it's the reducer itself)*/
    books: BooksReducer
});

export default rootReducer;

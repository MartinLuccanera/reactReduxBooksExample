import React, { Component } from 'react';
import { connect } from 'react-redux';

/* NOTE: Remember that redux state (or application state) is different from container state.
 * They are not connected in any way. I could do this.setState({asd: 123}) and that would not interfere with app's state.
 * Our application state is formed by the reducers. All of the reducers get tied together by the combineReducers method
 * (which is inside index.js in reducers folder).
 * For each key, we assign one reducer. The reducer is responsible for creating a piece of state. This means that
 * (for example ActiveBook -> check reducers.index.js) whatever the reducer returns will be available as our (activeBook)
 * piece of application state.
 * Our reducers change app's state over time, and they do that through the use of 'actions'. Whenever an action is dispatched
 * it flows through all the different reducers in our application and each reducer has the option to return a different
 * piece of state than the usual, based on the type of action that it received.
 * Action creators are just simple functions that return an action and an action is just a plain JS object. Actions must
 * always have a TYPE defined and they can optionally have a payload or any other number of properties (usually we call
 * payload to whatever is returned together with the type in an action).
 */
class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            //If book is null (at boot-up time there is no selected book).
            return <div>Select a book to get started.</div>
        }
        return (
            <div>
                <h3>Details for: </h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
/* NOTE: React and Redux are 2 separate libraries. In order to connect them we use react-redux. In order to do that,
 * we need to promote our component to a container. A container it's a react component that has a direct connection to
 * the state managed by redux. We usually place the containers in a new package.
 * How do we make the decision to convert one into the other? It varies. In general we want the most parent component
 * that cares about a particular piece of state to be a container. It could be the App, but in reality, the app, doesn't
 * care about the list of books. Only BookList does. For another example, only BookDetails cares about the details of the book.
 * The only thing that App is here for is to say "Hey render this to the page and that to the page".
 * Hence, BookDetails and BookList should be containers (or smart components) and have access to redux.
 * Remember: A container is just a component that has direct access to the state produced by Redux. React and Redux are separate libraries
 * and it's only through a third library (react-redux) that we can meld the 2 of them together and get a component that is actually aware
 * of the state that is contained within redux.
 */

import React, { Component } from 'react';

export default class BookList extends Component {
    renderList() {
        //We are gonna wire up the list of books to be on this.props for the book list.
        //We are gonna map over that array and for each element in the array we'll return an <li> with the title and a key.
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    className="list-group-item"> {book.title}
                </li>
            )
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}
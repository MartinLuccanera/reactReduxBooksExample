import React, { Component } from 'react';

/* NOTE: React and Redux are 2 separate libraries. In order to connect them we use react-redux. In order to do that,
 * we need to promote our component to a container. A container it's a react component that has a direct connection to
 * the state managed by redux. We usually place the containers in a new package.
 */


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
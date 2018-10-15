import React from 'react'

const Books = (props) => {
    var books = props.books.map(book => {
        return (
            <div key={book.id}>{book.title}</div>

        )
    })
    return (
        <>
            {books}
        </>
    )
}
export default Books
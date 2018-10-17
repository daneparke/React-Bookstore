import React from 'react'

const Books = (props) => {
    var books = props.filtered.map(book => {
        return (
            <div className='row' value={book.id} style={{ marginTop: '5px' }}>
                <div className='col-10'>{book.title}</div>
                <button className='col-2 btn btn-primary addCartButton' value={[book.title, 'split', book.price]} onClick={props.addButton}>+</button>
            </div>
        )
    })
    return (
        <>
            <div className='container col-4 bookList'>
                {books}
            </div>
        </>
    )
}
export default Books
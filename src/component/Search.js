import React from 'react'

const Search = (props) => {
    return (
        <>
            <form className='container' onSubmit={props.filter}>
                <div className="form-group row">
                    <label style={{ display: 'flex', alignSelf: 'center', justifyContent: 'flex-end' }} className='col-2' for="exampleFormControlInput1">Search for Books</label>
                    <input className='col-9'
                        onChange={(e) => props.filter(e)}
                        style={{ width: '40vw' }}
                        type="text" className="form-control" placeholder="Author or Book Title">
                    </input>
                </div>
            </form>
        </>
    )
}
export default Search
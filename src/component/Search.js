import React from 'react'

const Search = (props) => {
    return (
        <>
            <form class='container'>
                <div class="form-group row">
                    <label style={{ display: 'flex', alignSelf: 'center', justifyContent: 'flex-end' }} class='col-3' for="exampleFormControlInput1">Search for Books</label>
                    <input class='col-4'
                        // onChange={this.props.updateQuantity}
                        style={{ width: '40vw' }}
                        type="number" min='0' class="form-control" placeholder="Author or Book Title">
                    </input>
                    <button
                        // onClick={this.props.addItems}
                        style={{ marginLeft: '80px' }}
                        type="button" class="btn btn-primary col-2">Search
                    </button>

                </div>
            </form>
        </>
    )
}
export default Search
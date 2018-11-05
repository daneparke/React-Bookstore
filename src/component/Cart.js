import React from 'react'

const Cart = (props) => {
    var cartItems = props.cart.map(item => {
        return (
            <div className='row cartItem' style={{ marginTop: '2px', marginBottom: '2px' }}>
                <div className='col-8'>{item.split(',split,')[0]}</div>
                <div className='col-4'>{item.split(',split,')[1]}</div>
            </div>
        )
    })
    return (
        <>
            <div className='container col-4 cartItems'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>Cart Items</div>
                <div className='yourCart'>
                    {cartItems}
                </div>
                <h2 className='row totalRow'>Total:${props.total}</h2>
            </div>
        </>
    )
}
export default Cart
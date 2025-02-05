import React from 'react'

const CartPage = ({cartItems, setCartItems}) => {
    const totalPrice = cartItems.reduce(
        (total, item)=> total + parseFloat(item.price.slice(1))*item.quantity,0
    )

    const handleRemoveItem =(itemId)=>{
        setCartItems(cartItems.filter(item => item.id !== itemId))
    }
    const handleQ= (itemId, newQuantity)=>{
        if(newQuantity<1) return;
        setCartItems(cartItems.map(item=>
            item.id === item.Id ? {...item,quantity:newQuantity} : item
        ))
    }

  return (
    <div className='p-8 max-w-4xl mx-auto bg-white'>
        <h2>Your Cart</h2>
        {cartItems.length ===0 ? (
            <p>Your Cart Is Empty!</p>
        ):(

            <div >
                {cartItems.map((item)=>(
                    <div key ={item.id} className='flex justify-between items-center border-b border-gray-300 py-4 '>
                        <div className='flex items-center space-x-4'>
                        <img src ={item.image}  className='w-24 h-24 object-cover'/>
                        <div>
                            <p className='font-semibold text-xl'>{item.name}</p>
                            <p className=' text=gray-500'>{item.price}</p>
                        </div>
                        </div>
                        <div>
                            <div>
                                <button className='bg-gray-300 p-1 rounded text-sm' onClick={()=> handleQ(item.id,item.quantity -1)}>-</button>
                                <input
                                value ={item.quantity}
                                onChange={(e)=> handleQ(item.id,parseInt(e.target.value))}
                                type="number" className='w-12 text-center border rounded'></input>
                                <button className='bg-gray-300 p-1 rounded text-sm' onClick={()=> handleQ(item.id,item.quantity +1)}>+</button>
                            </div>
                            <span className='font-bold text-xl'>{item.price}</span>
                           
                        </div>
                        <button className='text-red-700 font-semibold hover:text-red-900'
                            onClick={()=> handleRemoveItem(item.id)}
                            >Remove</button>
                    </div>
                ))}
                <div className='flex justify-between mt-6 font-bold text-2xl'>
                    <span>Total Price:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className='flex justify-center mt-6'>
                    <button className='bg-green-500 text-white px-6 py-2 rounded-full text-xl'>Order</button>
                    </div>
            </div>
        )}
    </div>
  )
}

export default CartPage
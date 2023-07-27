import { useEffect, useState } from 'react';
import '../App.css'

const CartList =({cartSrc})=>{

    console.log('cart')
    // console.log(cartSrc)
    // console.log(cartSrc[0].price)
    // const items =cartSrc;
    // console.log(items[0].price)

    const  [CART , setCART ] = useState([])  // joh cartSrc hmare paas aya hai use  ab hm save krenge  or isme difference itna hoga ki isme updated value rehgi
  
    useEffect(()=>{  //isme kya hm cartSection me ate hi jitni bhi chij hai use add kr denge
        setCART(cartSrc)
    },[cartSrc])

    // console.log(CART)

    const plsBtn =(cardIndex)=>{
        console.log('plsBtn')
        console.log(cardIndex+1)

        setCART((oldItems)=>{
            return CART.map((ele,Index)=>{
                return cardIndex===Index?{...ele,quantity:ele.quantity+1} : ele  //yha pr old items work nhi krega thik see
              
            })
        })

    }

    const TotalPrice = CART.reduce((total,item)=>total+(item.price*item.quantity),0)   //es item me pure selected/ add to cart wale object hai
  

    return<>
    <h1>Shopping Cart</h1>
    <div className='flex'>
            {
                CART?.map((itemVel,cardIndex)=>{
                    return(
                        <>
                        <div className='cartDiv'>
                          <div > <img src={itemVel.url} width='100%' alt="img" /> </div>
                          <span> {itemVel.name}</span>
                          <div>MRP {itemVel.price}</div>

                          <div> Total Rs. {itemVel.price * itemVel.quantity}</div>
                          <div>
                                 <button onClick={()=>{
                                    const _CART = CART.map((ele,Index)=>{
                                        return cardIndex === Index?{...ele, quantity: ele.quantity> 0? ele.quantity-1 : 0}:ele
                                    })

                                    setCART(_CART)
                                 }}> ➖ </button> 

                                    <span> {itemVel.quantity} </span> 
                                 <button onClick={()=>{plsBtn(cardIndex)}}> ➕ </button>              
                          </div>
                       </div>

                        </>
                    )
                })
            }

        {/* <div> CartList</div> */}
    </div>
             <h1>
                Total: {CART?.map((ele)=>
                //{return ele.price}).reduce((total,value,initial)=>{return console.log(total+value,"total ="+total, "Value ="+value ,"initial:"+initial)})}
                //{return ele.price}).reduce((total,value)=>{return total+value})}
                ele.price * ele.quantity).reduce((total,value)=>total+value,0)}  
            </h1>

            <div style={{boder:"2px solid red"}}>
                NewTotal:{TotalPrice}
            </div>

    </>
} 

export default CartList;

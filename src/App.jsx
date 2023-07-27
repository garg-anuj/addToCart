import React, { useState } from "react";
// import { useE } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import Materials from "./Materials1";





const App = () =>{
  const [product, setProduct] = useState(Materials)
  // setProduct(Materials)
  // console.log(product)

  const [cart, setCart] = useState([]);

  const addToCart =(data)=>{
    // console.log('working')
    // console.log(data)
  
    // setCart([...cart,data])
    setCart([...cart,{...data,quantity:1}])
    // console.log(cart.length)
   
    
  }
  // console.log(cart)
 const[shoping, setShoping ] =useState(true);


 const getResult=(item)=>{
  console.log('getinng Result')
//  console.log(item)
 setShoping(item)
 }

  return<>
    {/* <h1> hello </h1> */}
    <Header length={cart.length}  handleShow={getResult}/>

    {shoping?<ProductList dataSrc={product} addToCart1={addToCart}/>:
            <CartList cartSrc={cart}/>
    }
   
    
  </>
}


export default App;





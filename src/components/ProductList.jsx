import '../App.css'


// const ProductList =(props,{addToCart1})=>{
//     // console.log(props)
//     // console.log(props.dataSrc[1])  // dtaSrc hai wo ek array hai

//     const items= props.dataSrc  // isme abh  dtaSrc ke  ek array hai
//     // console.log(items[0].price)
//     return<>
//     <div className='flex'>

//     {items.map((itemVel)=>{
//         return<>
//         <div style={{width:'50%',padding:"2rem",margin:"2rem", border: "5px solid red" }}>
//              <div > <img src={itemVel.url} width='100%'/> </div>
//              <p>{itemVel.name} | {itemVel.category}</p>
//              <p>{itemVel.seller}</p>
//              <p>{itemVel.price}</p>
//              <button  onClick={() => addToCart1(itemVel)}>Add To Cart</button>
            
//         </div>
        
//         </>
        
//     })}
           
//     </div>

//     </>
// } 


// ============================================================================================

const ProductList =({dataSrc,addToCart1})=>{
    // console.log(props)
    // console.log(props.dataSrc[1])  // dtaSrc hai wo ek array hai

    const items= dataSrc  // isme abh  dtaSrc ke  ek array hai
    // console.log(items[0].price)
    return<>
    <div className='flex'>

    {items.map((itemVel)=>{
        return<>
        <div className='cartDiv'>
             <div > <img src={itemVel.url} width='100%' alt="img" /> </div>
             <p>{itemVel.name} | {itemVel.category}</p>
             <p>{itemVel.seller}</p>
             <p>{itemVel.price}</p>
             <button  onClick={() => addToCart1(itemVel)}>Add To Cart</button>
            
        </div>
        
        </>
        
    })}
           
    </div>

    </>
} 


export default ProductList;

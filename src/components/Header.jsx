import '../App.css'

const Header =(props)=>{

    // console.log('header')
    // console.log(props.length)

    // console.log(props.handleShow)
    // console.log(props.handleShow())
    
    return<>
    <div className='flex shopping-card'>
        <div onClick={()=>props.handleShow(true)}> Shopping Cart </div>
        <div onClick={()=>props.handleShow(false)}> Cart <sup>{props.length}</sup> </div>
    </div>

    </>
} 

export default Header;

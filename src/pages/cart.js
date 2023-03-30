import React,{useState} from 'react';
import Productcard from '../component/product';
import Addcartlist from '../component/Addcartlist';

const data = [
    {
        label:"samsung",
        price:18000,
    },
    {
        label:"Lenovo",
        price:21000,
    },
    {
        label:"One+",
        price:25000,
    },
    {
        label:"Realme",
        price:16000,
    },
    {
        label:"pocco",
        price:19000,
    },
]

function Cart(){
    const [cart,setCart] = useState([])
    function handleChange(item={}){
        let cartcopy = [...cart]
        if(item.label){
            cartcopy.push(item)
        }
        setCart(cartcopy)
    }
    function checkCartStatus(item={}){
        let status = false
        if(item.label){
            status = cart.filter((_data)=> _data.label===item.label).length>0 ? true : false;

        }
        return status
    }
    function handleAddcartlist(item={}){
        let cartcopy = [...cart]
        if(item.label){
            cartcopy = cartcopy.filter((_data)=> _data.label!==item.label);
        }
        setCart(cartcopy)
    }
    return(
        <section className="pricing py-5">
        <div className="container">
             <div className='container-fluid'>
             <div className='row'>
                <div className='col-lg-8'>
                  {data.map((element,index)=> <Productcard 
                  disabled={checkCartStatus(element)} data={element} onChange={handleChange}/>)}
                   
                   
                </div>
                <div className='col-lg-4'>
                {cart.map((e,i)=> <Addcartlist data={e} onRemove={handleAddcartlist}/> )} 
                </div>
             </div>
             </div>
        
        </div>
        </section>
       

    )
}
export default Cart;
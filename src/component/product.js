import React from "react";

function Productcard(props){
    const {data={},onChange=(item)=>{},disabled=false} = props
    return(
        <div className='card mb-3'>
        <div className='card-body'>
        <div className='row'>
         <div className='col-8'>
         <div className='d-fle flex-column justify-content-center'>
         <h5>{data.label}</h5>
         <p>{data.price}</p>
         </div>
        
         </div>
         <div className='col-4'>
         <div className='d-fle flex-column justify-content-center'>
         </div> <button disabled={disabled} className='btn-btn-primary a1'onClick={()=>onChange(data)}>
            {disabled ? 'Added' :'Add to Cart'}</button></div>
        
        </div>
        </div> 
         </div>
    )
}
export default Productcard;
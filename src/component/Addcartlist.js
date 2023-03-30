import React from 'react';

export default function Addcartlist(props){
    const {data={},onRemove=(item)=>{}} = props
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
         </div> <button  className='btn-danger a2'onClick={()=>onRemove(data)}>
           Delete</button></div>
        
        </div>
        </div> 
         </div>
    )
}
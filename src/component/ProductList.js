import React from 'react'

const ProductList = ({filterProducts ,setProducts}) => {

    const deleteProduct= (id)=>{
        const filterProduct= filterProducts.filter((item)=> item.id !== parseInt(id))
        setProducts(filterProduct)
    }
  return (
    
    <div className='overflow-x-auto'>
        {filterProducts.map((product)=>{
            return(
                 <div class="flex items-center justify-between mb-2 min-w-[400]" >
                <span class="text-slate-400"> {product.title}</span>
                <div class="flex items-center gap-x-3">
                    <span class="text-slate-400">{new Date(product.createAt).toLocaleDateString('fa-IR')}</span>
                    <span class="block px-3 py-0.5 text-slate-400 boder border-slate-400 text-sm rounded-2xl">{product.category}</span>
                    <span class="flex item-center justify-center w-7 h-7 rounded-full bg-slate-500 text-slate-300 border-2 border-slate-300 ">{product.quantity}</span>
                    <button class="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400" onClick={()=>deleteProduct(product.id)} >delete</button>
                </div>
            </div>
            )
        })}
    </div>
    
     
  )
}

export default ProductList

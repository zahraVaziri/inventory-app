import React from 'react'
import { useState } from 'react'

const Products = ({category,setProducts}) => {
    const [productsForm,setProductsForm] = useState({title:'',quantity:0,category:''})
    
    const changeHandler = ({target})=>{
        const {name, value} = target
        setProductsForm({...productsForm,[name]: value})
    }
    const addProductForm = (e)=>{
        e.preventDefault();
        setProducts((prevstate)=>[...prevstate,{...productsForm,createAt:new Date().toISOString(),id:new Date().getTime()}])
        setProductsForm({title:"",quantity:"",category:""})
    }
  return (
    <>
     <div className="mb-6">
                <h2 className="text-xl text-slate-300 font-bold mb-2">Add new product</h2>
                <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
                    <div>
                        <label htmlFor="title" className="block mb-1 text-slate-400"> title</label>
                        <input type="text" name="title" id="title"
                        
                        onChange={changeHandler}
                            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
                    </div>
                    <div>
                        <label htmlFor="quantity" className="block mb-1 text-slate-400"> quantity</label>
                        <input type="number" name="quantity" id="quantity"
                        onChange={changeHandler}
                            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 "/>
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-1 text-slate-400"> category</label>
                        <select name="category" id="category"
                        onChange={changeHandler}
                            className="bg-transparent text-slate-400 rounded-xl w-full">
                           <option class="bg-slate-500 text-slate-300" value="">select a category</option>
                           {
                            category.map((item)=>{
                                return(
                                    <option class="bg-slate-500 text-slate-300" value={item.title}>{item.title}</option>
                                )
                            })
                           }
                        </select>
                    </div>
                    <div className="flex items-center justify-between gap-x-4">
                        <button id="add-new-product" className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2" onClick={addProductForm}>Add new product </button>
                    </div>
                </form>
            </div>
            {/* <div className="flex items-center justify-between mb-6">
                        <label htmlFor="sort-products" className="text-slate-500 text-lg"> sort</label>
                        <select name="sort-products" id="sort-products"
                            className="bg-transparent text-slate-400 rounded-xl">
                           <option className="bg-slate-500 text-slate-300" value="">select a category</option>
                           <option className="bg-slate-500 text-slate-300" selected value="newest">newest</option>
                           <option className="bg-slate-500 text-slate-300" value="oldest">oldest</option>
                        </select>
                    </div> */}
                    </>
  )
}

export default Products

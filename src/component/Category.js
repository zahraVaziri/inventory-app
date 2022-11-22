import React, { useState } from 'react'

const Category = ({category,setCategory}) => {
    const [isShow,setIsShow] = useState(false);
    const [categoryForm,setCategoryForm] = useState({title:"",description:""})
    
    const changeHandler = ({target})=>{
        const {name, value} = target
        setCategoryForm({...categoryForm,[name]: value})
    }
    const addCategoryForm = (e)=>{
        e.preventDefault();
        setCategory([...category,{...categoryForm,createAt:new Date().toISOString()}])
        setCategoryForm({title:"",description:""})
    }
  return (
    <>
     <div className={`mb-6 ${isShow ? '' : "hidden"}`}>
                <h2 className="text-xl text-slate-300 font-bold mb-2">Add new category</h2>
                <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
                    <div>
                        <label htmlFor="title" className="block mb-1 text-slate-400"> title</label>
                        <input type="text" name="title" id="title"
                            className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
                            onChange={changeHandler}
                            />
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-1 text-slate-400"> description</label>
                        <textarea type="text" name="description" id="description"
                            onChange={changeHandler}
                            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"></textarea>
                    </div>
                    <div className="flex items-center justify-between gap-x-4">
                        <button className="flex-1 border border-slate-400 text-slate-500 rounded-xl py-2"
                            onClick={(e)=>{
                                e.preventDefault()
                                setIsShow(false)
                            }}
                        >cancel</button>
                        <button onClick={addCategoryForm} id="add-new-category" className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2">Add new Category </button>
                    </div>
                </form>
               
            </div>
             <button className={`block mb-1 text-slate-400 mt-3 ${isShow? "hidden" : ''}`} onClick={()=> setIsShow(prevState=> !prevState)} >Add new Category?</button>
             </>
  )
}

export default Category

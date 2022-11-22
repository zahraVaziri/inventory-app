
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Category from './component/Category';
import Filter from './component/Filter';
import NavBar from './component/NavBar';
import ProductList from './component/ProductList';
import Products from './component/Products';

// const products =[
//   {
//     id:1,
//     title:"React.js",
//     category: "frontend",
//     createAt:"2021-10-31T15:03:23.556Z"
//   },
//   {
//     id:2,
//     title:"Vue.js",
//     category: "frontend",
//     createAt:"2021-11-01T10:44:26.889Z"
//   },
//   {
//     id:3,
//     title:"Node.js",
//     category: "backend",
//     createAt:"2021-10-31T15:03:23.556Z"
//   }
// ]
// const categories = [
//   {
//     id:1,
//     title: "frontend",
//     description:"front of applications",
//     createAt:"2021-11-01T10:44:26.889Z"
//   },
//   {
//     id:2,
//     title: "backend",
//     description:"the backend of applications",
//     createAt:"2021-11-01T10:44:26.889Z"
//   }
//]
function App() {
  const [category,setCategory] = useState([])
  const [products,setProducts]= useState([])
  const [filterProducts,setFilterProducts]= useState([])
  const [sort,setSort]= useState("")
  const [search,setSearch]= useState("")


  useEffect(()=>{
    let result = products
    result= filterSearchTitle(result)
    result= sortData(result)
    setFilterProducts(result)
  },[products,sort,search])
   const searchHandler =(e)=>{
    setSearch(e.target.value)
        setSearch(e.target.value.trim().toLowerCase()) 
         
    }

    
    const sortedHandler = (e)=>{
      setSort(e.target.value)
        
    } 
    const filterSearchTitle = (array)=>{
      return array.filter((p) => p.title.toLowerCase().includes(search));
    }
    const sortData= (array)=>{
      let sortProduct = [...array]
        return sortProduct.sort((a,b)=>{
        if(sort === 'newest'){
            return new Date(a.createAt) > new Date(b.createA) ? -1 : 1
        }else if(sort === 'oldest'){
            return new Date(a.createAt) > new Date(b.createA) ? 1 : -1   
        }
       
      })
    }
     useEffect(()=>{
      const saveProducts = JSON.parse(localStorage.getItem("products")) || []
       const savecategory = JSON.parse(localStorage.getItem("category")) || []
       setProducts(saveProducts)
       setCategory(savecategory)
     },[])
     useEffect(()=>{
      if(products.length){
        localStorage.setItem("products",JSON.stringify(products))
      }
     },[products])
     useEffect(()=>{
      if(category.length){
        localStorage.setItem("category",JSON.stringify(category))
      }
     },[category])
  return (
    <div>
     <div className="bg-slate-800 min-h-screen">
      <NavBar/>
       <div className="container max-w-screen-sm mx-auto">
        <Category category={category} setCategory={setCategory}/>
        <Products category={category} setProducts={setProducts}/>
        <Filter onSort={sortedHandler} onSearch={searchHandler} sort={sort} search={search} />
        <ProductList filterProducts={filterProducts} setProducts={setProducts}/>
       </div>
     </div>

    </div>
  );
}

export default App;

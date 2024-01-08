import { useState } from "react";
import ProductCard from '../components/product-card';

const Search = () => {
  // const prev=1;
 
  const addtoCartHandler =()=>{}; //handler
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState("");
  const [maxPrice, setmaxPrice] = useState(1000000);
  const [category, setcategory] = useState("");
  const [page, setpage] = useState(1)
  const isNextPage=page<4;
  const isPrevPage=page>1;
  return (
    <div className="product-search-page">
      <aside>
        <h2>filters</h2>
        <div>
          <h4>{sort}</h4>
          <select value={sort} onChange={(e)=>setSort(e.target.value)}>
            <option value="">None</option>
            <option value="asc">Price(Low to high)</option>
            <option value="desc">Price (high to low)</option>
          </select>
          </div>
          <div>
          <h4>Max Price : {maxPrice|| ""}</h4>
          <input type="range"
          min={100}
          value={maxPrice}
          onChange={(e)=>setmaxPrice(Number(e.target.value))}
          max={1000000} />
          </div>

          <div>
          <h4>Category</h4>
          <select value={category} onChange={(e)=>setcategory(e.target.value)}>
            <option value="">All</option>
            <option value="asc">Sample1 </option>
            <option value="desc">Sample2</option>
          </select>
          </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input type="text" placeholder="Search-by-name"
        value={search} onChange={(e)=>setSearch(e.target.value)}/>
        
        <div className="search-product-list">
          <ProductCard  productId='asdsad' name="macbook" 
       price={2424}
       stock={244}
       handler={addtoCartHandler}
       photo="https://m.media-amazon.com/images/I/71TPda7cwUL._SX522_.jpg"/>
           </div>
           <article>
            <button disabled={!isPrevPage} 
            onClick={()=>setpage((prev)=>prev-1)}>
              Prev</button>
            <span>
              {page} of {4}
            </span>
            <button disabled={!isNextPage} 
            onClick={()=>setpage((prev)=>prev+1)}
            >Next</button>
           </article>
      </main>
    </div>

  )
}

export default Search
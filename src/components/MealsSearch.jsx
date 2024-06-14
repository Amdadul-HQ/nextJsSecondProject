"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MealsSearch = () => {
  const [meals,setMeals] = useState([])
  const [search, setSearch] = useState("a");

  const loadMeals = async () =>{
   try{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
    const data = await res.json()
    setMeals(data.meals)
   }
   catch(err){
    setMeals([])
    console.log(err.message);
   }
  }
  const handleSearch = (e) => {
    setSearch(e.target.value)
  };

  useEffect(()=>{
    loadMeals()
  },[search])
  return (
    <section>
      <div className="flex justify-center mt-4">
        <form className="bg-gray-300 w-fit rounded-lg">
          <input
            onChange={handleSearch}
            className="px-5 py-2 bg-transparent outline-none"
            placeholder="Search by Name.."
            type="search"
            name="search"
            id=""
          />
          <button className="px-5 py-2 bg-teal-400 rounded-lg text-white hover:bg-teal-700 transition-all duration-300">
            Search
          </button>
        </form>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-4">
        {
            meals.length>0 && meals.map(item => <div key={item.idMeal} className="p-5 border rounded-lg flex  flex-col">
                <h3>Meals Name: {item.strMeal}</h3>
                <p>Category: {item.strCategory}</p>
                <Image src={item.strMealThumb} className="rounded-lg my-3" width={500} height={200} />
                <p>Description: {item.strInstructions.slice(0,200)}...</p>
            </div>)
        }
        {
            meals.length === 0 && <p>No meals Found</p>
        }
      </div>
    </section>
  );
};

export default MealsSearch;

import { useState } from 'react'
import { AddCategory, GifGrid } from './components/index.js'

export const GiftExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  // Functions
  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories])
  }

  return (
    <>
      { /* Title */ }
      <h1>GiftExpertApp</h1>

      { /* Input for finding by category */ }
      <AddCategory 
        //setCategories={ setCategories }
        onAddCategory={onAddCategory}
      />

      { /* Gifs List */ }
      { 
        categories.map((category) => (
          <GifGrid key={category} category={category}/>
        )) 
      }

    </>    
  )
}

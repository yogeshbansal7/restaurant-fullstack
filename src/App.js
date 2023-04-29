import React, { useEffect, useState } from 'react'
import { Header, CreateContainer, MainContainer } from './components'
import { Route, Routes } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useStateValue } from './context/StateProvider'
import { getAllFoodItems } from './utils/firebaseFuntions'
import { actionType } from './context/reducer'


const App = () => {

  const [{foodItems}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data
      })
    })
  }

  useEffect(() => {fetchData()}, [])

  return (
    <AnimatePresence >
      <div className='w-screen h-auto flex flex-col bg-primary ' >
        <Header />
        <main className='mt-14 px-4 md:mt-20  md:px-16 w-full py-4 ' >
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App

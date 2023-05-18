import React, { useState } from 'react'

const Counter = () => {

  const [value, setValue] = useState (0);
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)



    const handlerIncrement = () => {

      setValue((prevState) => ++prevState)
    }
    const handlerDecrement = () => {
      setValue((prevState) => --prevState )
    }


    const handleToggleVisibility = () => setIsOpen (!isOpen)

    if(isLoading){
      return(
      <h1>Loading ...</h1>
      )
    }

   return (
    <>
    <div>Counter:{value}</div>

    <button onClick={handlerIncrement}>Increment</button>
    <button onClick={handlerDecrement}>Decrement</button>

    {/* { isOpen ? <h1>Toggle Visibility</h1>: null} */}
    { isOpen && <h1>Toggle Visibility</h1>}

    <button onClick={handleToggleVisibility}>Toggle</button>

    </>
  )
}

export default Counter
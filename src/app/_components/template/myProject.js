import React from 'react'
import Cart from '../modules/cart'
import Title from './title'

const MyProject = () => {
  return (
    <div className="w-full">
    <Title title={"پروژه های من"} />

    <div className="w-full flex justify-center">
      <div className="grid grid-cols-1 lgg:grid-cols-2  2xl:grid-cols-3 gap-8">
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  </div>
  )
}

export default MyProject
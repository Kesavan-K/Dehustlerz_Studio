import React from 'react'
import FactItem from './components/FactItem'
import Banner from './components/Banner'
import TopImages from './components/TopImages'
import BentoGrid from './components/BentoGrid'
import MyImageGallery from './components/Courosel'

const page = () => {
  return (
    <div>
      <MyImageGallery/>
      <FactItem/>
      <Banner/>
      <TopImages/>
      <BentoGrid/>
    </div>
  )
}

export default page
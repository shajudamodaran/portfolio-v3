import React from 'react'
import Seo from '../components/layouts/Seo/Seo'
import IndexPageHeader from '../components/Header/IndexPageHeader/IndexPageHeader'
import HomePage from '../components/HomePage/HomePage'

function index() {
  return (
     <Seo>
      <IndexPageHeader/>
      <HomePage/>
    </Seo>
  )
}

export default index
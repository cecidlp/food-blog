import React from 'react'
import IntroDesserts from './IntroDesserts'
import TopDessert from './TopDessert'
import BrowserType from '../../components/BrowserType'
import CakeTypes from '../../components/cakeTypes'
import Cookies from './Cookies'
import Scones from './Scones'
import AllPosts from './AllPosts'
import CupcakesMuffins from './CupcakesMuffins'

function DessertsBaking() {
  return (
    <>
        <IntroDesserts/>
        <TopDessert/>
        <BrowserType/>
        <Cookies/>
        <CakeTypes/>
        <Scones/>
        <CupcakesMuffins/>
        <AllPosts/>
    </>
  )
}

export default DessertsBaking
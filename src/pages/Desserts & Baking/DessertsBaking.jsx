import React from 'react'
import IntroDesserts from './IntroDesserts'
import TopDessert from './TopDessert'
import BrowserType from '../../components/BrowserType'
import CakeTypes from '../../components/cakeTypes'
import Cookies from './Cookies'
import Scones from './Scones'
import LatestsPosts from './LatestsPosts'

function DessertsBaking() {
  return (
    <>
        <IntroDesserts/>
        <TopDessert/>
        <BrowserType/>
        <Cookies/>
        <CakeTypes/>
        <Scones/>
        <LatestsPosts/>
    </>
  )
}

export default DessertsBaking
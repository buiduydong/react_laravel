import React, { Component } from 'react'
import FeatureProducts from '../components/home/FeatureProducts'
import Categories from '../components/home/Categories'
import PromotionProduct from '../components/home/PromotionProduct'
import NewProduct from '../components/home/NewProduct'
// import {Link} from "react-router-dom";

export class HomePage extends Component {
  render() {
    return (
      <>
        <FeatureProducts /> 
        <PromotionProduct />
        <NewProduct />
        <Categories />
      </>
    )
  }
}

export default HomePage

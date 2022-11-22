import React, { Component } from 'react'
import BlackCar from '../asset/products/black-car.jpg'
import RedCar from '../asset/products/red-car.jpg'
import SliveCar from '../asset/products/silver-car.jpg'
import SteelCar from '../asset/products/steel-car.jpg'
import IconBlack from '../asset/icons/icon-black.jpg'
import IconRed from '../asset/icons/icon-red.jpg'
import IconSlive from '../asset/icons/icon-silver.jpg'
import IconSteet from '../asset/icons/icon-steel.jpg'
import  "./car.scss"
export default class Car extends Component {
  state={
    image: BlackCar,
  }
  handelImg = (image)=>{
    this.setState({
      image:image
    })
  }
  render() {
    return (
      <div className='containers'>
        <div className='blackcar'>
        <img src={this.state.image}/>
        </div>
        <div className='iconcar'>
            <div onClick={()=>{this.handelImg(BlackCar)}} className='divv'>
            <img  src ={IconBlack}/>
            </div>
            <div className='divv' onClick={()=>{this.handelImg(RedCar)}}>
            <img src ={IconRed}/>
            </div>
            <div className='divv' onClick={()=>{this.handelImg(SliveCar)}}>
            <img src ={IconSlive}/>
            </div>
            <div className='divv' onClick={()=>{this.handelImg(SteelCar)}}>
            <img src ={IconSteet}/>
            </div>
        </div>
        
      </div>
    )
  }
}

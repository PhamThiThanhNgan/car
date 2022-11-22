import React, { Component } from 'react'
import "./MovieList.scss"
import data from "../DataFilms.json"

export default class MovieList extends Component {

renderMove =()=>{
  return data.map((item,index) =>{
    return (
          <div key={item.maPhim} className='col'>
          <div className='roww'>
                <img src={item.hinhAnh} alt=""/>
                <h3>{item.tenPhim}</h3>
                <p>{item.moTa}</p>
            </div>
          </div>
    )
  })
}
  render() {
    return (
      <div className='bg-body'>
        <div className='row'>
          {this.renderMove()}
        </div>
      </div>
    )
  }
}

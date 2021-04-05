
import styles from './Friend.module.css'
import ava from './../../../img/ava.jpg'
import WindowMassage from './windowMassage/WindowMassage'
import React, { Component } from 'react'
export default class Friend extends Component {
    constructor(props){
        super(props)
         this.state={
            value: false
        }
        this.open=this.open.bind(this)
        this.open=this.open.bind(this)
    }
    
    open=()=> {
        console.log(this.state)

         this.setState({value: true,})
    }
    close=()=>{
         this.setState({value: !true,})
    }
    render() {
        return (
            <div  className={styles.contact}>
              <img src={ava} alt="jpg"/>
              <p>{this.props.name}</p>
              <div  onPointerMove={this.open}  className={styles.wap}>
                  <div></div>
                  <div></div>
                  <div></div>
              </div>
              { this.state.value===true? <WindowMassage close={this.close}/>: false}
              
        </div>    
        )
    }
}


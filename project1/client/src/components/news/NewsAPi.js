import React, { Component } from 'react'
import News from './News'
import axios from 'axios'

export default class NewsAPi extends Component {
    
    componentDidMount(){
        if(this.props.valueApi===false){
            this.props.load(true)
            axios.get('/news',{responseType: 'json' })
            
            .then(response=>response.data)
            .then(data=>{
                this.props.load(false)
                 data.forEach(el=>{
                    let date=el.date;
                    let img=el.img;
                    let title=el.title;
                    let text=el.text;
                    let id =el._id;
                    console.log(id)
                    this.props.all(id,date,img,title,text);
                
                }
                
            )})
            
        }
       
    }
  
    
    
    render() {
        return <News allNews={this.props.allNews} value={this.props.value} open={this.props.open} close={this.props.close} loadingValue={this.props.loading}/>
    }
}

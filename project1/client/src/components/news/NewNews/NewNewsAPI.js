import React, { Component } from 'react'
import NewNews from './NewNews'

export default class NewNewsAPI extends Component {

    componentDidMount(){
       
    }
    render() {
        return <NewNews titleChange={this.props.titleChange } textChange={this.props.textChange} close={this.props.close}
        titleNewChange={this.props.titleNewChange}  textNewChange={this.props.textNewChange} changeFile={this.props.changeFile}
        file={this.props.file} click={this.props.click}/>
           
    }
}

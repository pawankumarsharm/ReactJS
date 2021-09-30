import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message: 'Hello'
         }
         /* this.clickHandler=this.clickHandler.bind(this) */
     }
     /* clickHandler(){
         this.setState({
             message: 'good bye!'
         })
         console.log(this) //result will be undefined due to javascript not by react
     } */
     clickHandler=()=>{
        this.setState({
            message: 'Good Bye!'
        })
     }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
              {/*  <button onClick={this.clickHandler.bind(this)}>Click Bind</button>   */}
             {/*  <button onClick={()=>this.clickHandler()}>Click Bind</button> */}
             <button onClick={this.clickHandler}>Click Bind</button>
            </div>
        )
    }
}

export default EventBind

import React, { Component } from 'react'

class UserGreeting extends Component {
constructor(props){
    super(props)
    this.state={
        isLoggedIn: false
    }
}
    
    render(){
        return this.state.isLoggedIn && <div>Welcome Pawan</div> //Short circuit operator

        /* return this.state.isLoggedIn ?( //Ternary conditional operator
            <div>Welcome Pawan</div>
            ):(
            <div>Welcome Guest</div>
        ) */
        /* let message //Element variables
        if(this.state.isLoggedIn){
            message= <div>Welcome Pawan</div>
        }
        else{
            message= <div>Welcome Guest</div>
        }

        return <div>{message}</div> */
       /*  if(this.state.isLoggedIn){ //if-else condition
            return <div>Welcome Pawan</div>
            
        }
        else{
            return <div>Welcome Guest</div>
        } */
        /* return (
            <div>
                <div>Welcome Pawan</div>
                <div>Welcome Guest</div>
            </div>
        ) */
    }
}

export default UserGreeting

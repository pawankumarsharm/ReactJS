import React, { Component } from 'react'
import LifecycleB from './LifecycleB'


 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'viswas'
           
         }
         console.log('lifecycleA constructor')
     }

     static getDrivedStateFromProps(props,state){
         console.log('lifecycleA get derivedstate fromprops')
         return null
     }
     componentDidMount(){
         console.log('lifecycle A component did mount')
     }
     shouldComponentUpdate(){
         console.log('LifecycleA should component update')
         return true
     }
     getSnapshotBeforeUpdate(prevProps, prevState){
         console.log('lifecycleA getsnapshotbeforeupdate')
         return null
     }
     componentDidUpdate(){
        console.log('lifecycleA component did update')
    }
    changeState = () =>{
        this.setState({
            name:'CodeEvolution'
        })
    }
    render() {
        console.log('Lifecycle render')
        return (
<div>
            <div>
                LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <LifecycleB />
            
            </div>       
        )
    }
}

export default LifecycleA

import React, { Component } from 'react'



 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'viswas'
           
         }
         console.log('LifecycleB constructor')
     }

     static getDrivedStateFromProps(props,state){
         console.log('LifecycleB get derivedstate fromprops')
         return null
     }
     componentDidMount(){
         console.log('lifecycleB  component did mount')
     }
     shouldComponentUpdate(){
        console.log('LifecycleB should component update')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycleB getsnapshotbeforeupdate')
        return null
    }
    componentDidUpdate(){
       console.log('LifecycleB component did update')
   }
    render() {
        console.log('LifecycleB render')
        return (

            <div>
                LifeCycle B
            </div>
            
        )
    }
}

export default LifecycleB

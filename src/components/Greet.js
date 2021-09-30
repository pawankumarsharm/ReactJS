import React from 'react'

//function Greet(){
  //  return <h1>Hello pawan</h1>

//}

/* const Greet = props => {
  console.log(props)
return(
  <div>
    <h1>
      Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
      </div>
)
} */

/* const Greet = ({name,heroName}) => {
return(
  <div>
    <h1>
      Hello {name} a.k.a {heroName}
      </h1>
      {props.children}
      </div>
)
} */
const Greet = props => {
  const{name,heroName} =props
return(
  <div>
    <h1>
      Hello {name} a.k.a {heroName}
      </h1>
      {props.children}
      </div>
)
}
//export const Greet =() => <h1>Hello pawan kumar singh</h1>
export default Greet
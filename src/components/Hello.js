import React from 'react'

const Hello = () =>{
  //  return(
    //    <div  classname='dummyclass'>
      //      <h1>Hello PK</h1>
        //</div>
    //)
//}

return React.createElement(
    'div',
    {id: 'hello', className: 'dummyClasses'},
    React.createElement('h1',null,'Hello ps')
)
}
export default Hello
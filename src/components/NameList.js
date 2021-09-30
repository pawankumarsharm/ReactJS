import React from 'react'
import Person from './Person'

function NameList() {
    const names=['abcd','efgh','ijkl']
    const persons=[
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'react'
        },
        {
            id:2,
            name:'Clarrk',
            age:20,
            skill:'Angular'
        },
        {
            id:3,
            name:'Diana',
            age:25,
            skill:'html'
        }
    ]
    const namelist=names.map((name,index) =>  <h2 key={index}>{index}{name}</h2> )
    return <div>{namelist}</div>
    /* const personlist=persons.map(person => <Person key={person.name} person={person} /> )
    return <div>{personlist}</div> */

}
     
    /* const names=['abcd','efgh','ijkl']
    const namelist=names.map(listname =><h2>{listname}</h2>)
    return <div>{namelist}</div>   */


export default NameList

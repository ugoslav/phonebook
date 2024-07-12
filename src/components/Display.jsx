import { useState } from 'react'
import peopleService from '../services/notes'

const NewUpdateDiv = ({person, setUpdateExpand, setPeople, peopleToBeShown}) => {

  const [updateText , setUpdateText] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const newPerson = {
      ...person,
      number: updateText
    }
    peopleService
      .update(person.id, newPerson)
      .then(reponse => {
        setUpdateText('')
        setPeople(peopleToBeShown.map(item => item.id !== person.id ? item : newPerson))
        setUpdateExpand(false)
      })
  }

  return(
    <>
      <form onSubmit={submitHandler}>
        <input type="number" placeholder='Enter the new number' value={updateText} onChange={(e) => setUpdateText(e.target.value)}></input>
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

const Person = ({person, peopleToBeShown, setPeople}) => {

  const [updateExpand , setUpdateExpand] = useState(false)

  const deleteHandler = id => {
    peopleService
      .remove(id)
      .then(response => {
        setPeople(peopleToBeShown.filter(person => person.id !== id))
      })
      .catch(err => console.log(err))
  }

  return(
    <div id='person'>
      <p>{person.name} {person.number}</p>
      {updateExpand === false 
                            ? <button id="updateButton" onClick={() => setUpdateExpand(true)}>update</button> 
                            : <NewUpdateDiv person={person} setUpdateExpand={setUpdateExpand} setPeople={setPeople} peopleToBeShown={peopleToBeShown}/>
      }
      <button onClick={() => deleteHandler(person.id)}>delete</button>
    </div>
  )
}

const Display = ({peopleToBeShown , setPeople}) => {

  return(
    <>
      {peopleToBeShown.map(person => <Person key={person.id} person={person} peopleToBeShown={peopleToBeShown} setPeople={setPeople}/>)
      }
    </>
  )
}

export default Display
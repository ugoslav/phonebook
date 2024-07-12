import Heading from "./Heading"
import { useState } from "react"
import peopleService from '../services/notes'

const InputForm = ({people , setPeople}) => {
  const [nameValue , setNameValue] = useState('')
  const [numberValue , setNumberValue] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const matches = people.filter(person => person.number === numberValue)
    if (matches.length !== 0){
      window.alert("Someone with the same number already exists.")
    }
    else{
      const newPerson = {
        name: nameValue,
        number: numberValue,
        id: (Math.floor(Math.random() * 1000)).toString()
      }
      peopleService
        .createPerson(newPerson)
        .then(response => {
          setPeople(people.concat(newPerson))
          setNameValue('')
          setNumberValue('')
        })
        .catch(err => console.log(`Oops!!There was an error :- ${err}`))
    }
  }
  return(
    <>
      <Heading text="add a new" />
      <form onSubmit={submitHandler}>
        name:<input type="text" value={nameValue} onChange={(e) => setNameValue(e.target.value)}></input><br />
        number:<input type="number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)}></input><br />
        <button>add</button>
      </form>
    </>
  )
}

export default InputForm
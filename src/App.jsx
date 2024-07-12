import React, { useState , useEffect} from 'react'
import FilterInput from './components/FilterInput'
import InputForm from './components/Inputform'
import Directory from './components/Directory'
import peopleService from './services/notes'
import './assets/styles.css'

const App = () => {
  const [people, setPeople] = useState([])
  const [filterValue , setFilterValue] = useState('')

  useEffect(() => {
    peopleService
      .getPeople()
      .then(people => {
        setPeople(people)
      })
      .catch(err => console.log(`Sorry,there was an error :- ${err}`))
  },[])

  return (
    <div id="main">
      <h1 id="main-heading">Phonebook</h1>
      <FilterInput filterValue={filterValue} setFilterValue={setFilterValue}/>
      <InputForm people={people} setPeople={setPeople}/>
      <Directory people={people} filterSearch={filterValue} setPeople={setPeople}/>
    </div>
  )
}

export default App
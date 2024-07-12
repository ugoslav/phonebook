import Heading from "./Heading"
import Display from "./Display"

const Directory = ({people , filterSearch, setPeople}) => {
  return(
    <>
      <Heading text="Numbers" />
      <Display peopleToBeShown={people.filter(person => person.name.toLowerCase().includes(filterSearch.toLowerCase()))} setPeople={setPeople}/>
    </>
  )
}

export default Directory
const FilterInput = ({filterValue ,setFilterValue}) => {

  const filterChangeHandler = (e) => setFilterValue(e.target.value)

  return(
    <>
      filter shown with<input value={filterValue} onChange={filterChangeHandler}></input>
    </>
  )
}

export default FilterInput
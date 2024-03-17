import { useState } from 'react'
import Persons from './components/Persons'

const App = ({entries}) => {
  const [persons, setPersons] = useState([  
    { id: 1, name: 'Arto Hellas', number: '040-123456' },
    { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
    { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
    { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()

    if (!persons.some(person => person.name == newName)) {

      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      console.log("addPerson ", personObject)
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    } else {
      var alertMsg = `${newName} is already added to phonebook`
      alert(alertMsg)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }  

  const handleFilterChange = (event) => {
    console.log("filter ", event.target.value)
    setFilter(event.target.value)
  } 

  const filteredPersons = persons.filter(p => p.name.toLowerCase().startsWith(filter.toLowerCase()));
  console.log("filteredPersons ", filteredPersons)
  return (
    <div>
        <div>
          filter: <input value={filter} onChange={handleFilterChange} />
        </div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>        
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <Persons persons={filteredPersons} />
    </div>
  )

}

export default App

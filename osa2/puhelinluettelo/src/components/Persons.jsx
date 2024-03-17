import Person from './Person'

const Persons = ({ persons }) => {
    console.log("persons ", persons)
    return (
        <div>
            <h2>Numbers</h2>
            <ul>
                {persons.map(person =>
                    <Person key={person.id} person={person} />
                )}
            </ul>
        </div>
    )
}

export default Persons
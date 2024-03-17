const Person = ({ person }) => {
    console.log("person ", person)
    return (
        <div>
            <li>{person.name} {person.number}</li>
        </div>
    )
}

export default Person
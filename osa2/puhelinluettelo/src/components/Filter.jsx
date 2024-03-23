const Filter = ({ filter, handleFilterChange }) => {
    console.log("filter ", filter)
    return (
        <div>
            <h2>Filter:</h2>
          filter: <input value={filter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter
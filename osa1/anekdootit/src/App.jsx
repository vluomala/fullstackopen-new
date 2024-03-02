import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'Eka ane',
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
    'Vika Ane'
  ]  

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const Anecdote = (props) => {
    return(
    <div>
      <p>Anecdote: {props.text}</p>
      <p>has {props.numofvotes}  votes</p>
    </div>
    )
  }  

  const AnecdoteWithMostVotes = (props) => {
    const [mostvotes, setMostvotes] = useState(0)
    const [mostvotesindex, setMostvotesindex] = useState(0)
  
    props.votes.forEach(setIndexWithMostVotes)
  
    function setIndexWithMostVotes(value, index, array) {
      if (value > mostvotes) {
        console.log('new most votes found! Index: ', index, 'value: ' ,value)
        setMostvotes(value)
        setMostvotesindex(index)
      }
    }
  
  
    return(
    <div>
      <p>Anecdote with most votes</p>
      <p>{props.anecdotes[mostvotesindex]}</p>
      <p>has {mostvotes}  votes</p>
    </div>
    )
  }  

  const handleVote = () => {
    console.log('voted for current anecdote index:',selected)
    const copy = [...votes]
    // kasvatetaan taulukon paikan 2 arvoa yhdellä
    copy[selected] += 1         
    setVotes(copy)
    console.log('newest votes', copy)
  }  

  const handleClick = () => {
    const random = Math.floor(Math.random() * 10)%anecdotes.length;
    console.log('clicked, next anecdote is: ', random)
    setSelected(random)
  }  

  console.log("anecdote ", selected);
  console.log("votes ", votes);
  return (    
    <div>      
       <Anecdote text={anecdotes[selected]} numofvotes={votes[selected]} />
      <button onClick={handleVote}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <AnecdoteWithMostVotes anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
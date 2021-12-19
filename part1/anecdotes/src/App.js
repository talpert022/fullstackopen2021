import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    {key : 'If it hurts, do it more often', value : 0},
    {key : 'Adding manpower to a late software project makes it later!', value : 0},
    {key : 'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.', value : 0},
    {key : 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.', value : 0},
    {key : 'Premature optimization is the root of all evil.', value : 0},
    {key : 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.', value : 0},
    {key : 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients', value : 0}
  ]
   
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [mostVotedAnecdote, setMostVotedAnecdote] = useState("No Votes Cast Yet")

  const generateRandomNum = () => {
    const newNum = Math.floor(Math.random() * anecdotes.length)
    setSelected(newNum)
  }

  const incrementVoteCount = () => {
    const newAnecdotes = [...anecdotes]
    newAnecdotes[selected].value += 1
    if (newAnecdotes[selected].value > mostVotes) {
        setMostVotes(newAnecdotes[selected].value)
        setMostVotedAnecdote(newAnecdotes[selected].key)
    }
    anecdotes = newAnecdotes
  }

  return (
    
    <div>
      {anecdotes[selected].key}
      <div>
        <button onClick={() => generateRandomNum()}>
            {"next anecdote"}
        </button>
        <button onClick={() => incrementVoteCount()}>
            {"vote"}
        </button>
      </div>
      {"Anecdote with most votes: "}
      <div>
        {mostVotedAnecdote}
      </div>
    </div>
  )
}

export default App

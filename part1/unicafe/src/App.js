import React, { useState } from 'react'

const ReactionButton = ({ text, func }) => {
    return (
        <button onClick = {func}>
            {text}
        </button>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td> 
            <td>{value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    if (props.good + props.neutral + props.bad > 0) {
        return (
        <div>
        <table>
            <StatisticLine text = "good" value = {props.good} />
            <StatisticLine text = "neutral" value = {props.neutral} />
            <StatisticLine text = "bad" value = {props.bad} />
            <StatisticLine text = "all" value = {props.good + props.neutral + props.bad} />
            <StatisticLine text = "average" value = {(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
            <StatisticLine text = "positive" value = {props.good / (props.good + props.neutral + props.bad)} />
        </table>
        </div>
        )
    } else {
        return(
            <text> No data entered yet :(</text>
        )
    }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1> give feedback </h1>
      <ReactionButton text = {"good"} func = {() => setGood(good + 1)} />
      <ReactionButton text = {"neutral"} func = {() => setNeutral(neutral + 1)} />
      <ReactionButton text = {"bad"} func = {() => setBad(bad + 1)} />
      <h1> statistics </h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Spinner from './components/Spinner'
import Candidates from './components/Candidates'

export default function App () {
  const [candidates, setCandidates] = useState([])
  const [previousVotes, setPreviousVotes] = useState([])
  const [previousPercentage, setPreviousPercentage] = useState([])

  //   this.interval = null
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('http://localhost:8080/votes')
        .then((res) => {
          return res.json()
        })
        .then((json) => {
          const localPreviousVotes = candidates.map(({ id, votes }) => {
            return { id, votes }
          })
          const localPreviousPercentage = candidates.map(({ id, percentage }) => {
            return { id, percentage }
          })
          setCandidates(json.candidates)
          setPreviousPercentage(localPreviousPercentage)
          setPreviousVotes(localPreviousVotes)
        })
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [candidates, previousVotes])

  if (candidates.length === 0) {
    return <Spinner description='Carregando...' />
  }

  return (
    <div className='container'>
      <Header>Votacão</Header>
      <Candidates
        previousPercentage={previousPercentage}
        previousVotes={previousVotes}
        candidates={candidates}
      />
    </div>
  )
}

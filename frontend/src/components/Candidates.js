import React from 'react'
import Card from './Card'
import Candidate from './Candidate'
import FlipMove from 'react-flip-move'
export default function Candidates ({ candidates, previousVotes }) {
  return (
    <div>
      <FlipMove>
        {
          candidates.map((candidate, index) => {
            const { id } = candidate
            const previousVoteObject = previousVotes.find(({ id }) => id === candidate.id)
            const previousVote = previousVoteObject ? previousVoteObject.votes : 0
            return (
              <div key={id}>
                <Card>
                  <Candidate
                    position={index + 1}
                    candidate={candidate}
                    previousVote={previousVote}
                  />
                </Card>
              </div>
            )
          })
        }
      </FlipMove>
    </div>
  )
}

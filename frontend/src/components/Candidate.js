import React from 'react'
import Position from './Position'
import Picture from './Picture'
import Info from './Info'
import Name from './Name'
import Votes from './Votes'
import Percentage from './Percentage'
import Popularity from './Popularity'
import css from './candidate.module.css'
import { formatNumber, formatPercentage } from '../helpers/formatHelper'

export default function Candidate ({ previousVote, candidate, position }) {
  const {
    id,
    name,
    votes,
    percentage,
    popularity
  } = candidate

  const imageSource = `${id}.jpg`

  return (
    <div className={css.flexRow}>
      <Position>{position}</Position>
      <Picture description={name} imageSource={imageSource} />
      <Info>
        <Name>{name}</Name>
        {/* <Votes>{formatNumber(votes)}</Votes> */}
        <Votes value={votes} previous={previousVote} />
        <Percentage>{formatPercentage(percentage)}</Percentage>
        <Popularity value={popularity} />
      </Info>
    </div>
  )
}

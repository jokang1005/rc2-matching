import React from 'react'
import _ from 'lodash'

const MatchingBox = () => {
    const card = []
    const words = ["hello", "I", "wonder", "if", "this", "math", "formula", "will", "work"]
    _.times(9, () => {
        card.push(<div className="smallsquare">{words.[Math.floor(Math.random()*words.length)]}</div>)
    })
    console.log(card)
    return (
        <>
            <h1>Reporting Category 2</h1>
            <div className="main">
                <div className="square">{card}</div>
            </div>
        </>
        
    )
}

export default MatchingBox
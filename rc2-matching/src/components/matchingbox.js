import React from 'react'
// import _ from 'lodash'

const MatchingBox = (props) => {
    // const card = []
    // const newWord = []
    const words = ["a", "apple", "b", "bapple", "c", "capple", "d", "dapple", "e", "eapple", "f", "fapple"]


    //fischer-yates modern shuffle algorithm
    let i = words.length
        while (--i > 0) {
            let j = Math.floor(Math.random()* words.length)
            let temp = words[j]
            words[j] = words[i]
            words[i] = temp
        }
        
        return (
            <>
            <h1>Reporting Category 2</h1>
            {/* <ul>
                {words.map((word, index) => (
                    <li key={index}>{word}</li>
                ))}
            </ul> */}
            <div className="main">
                <div className="square">
                {words.map((word, index) => (
                <div className="smallsquare" key={index}>{word}</div>
                ))}
                </div>
            </div> 
  
        </>
        
    )
}

export default MatchingBox
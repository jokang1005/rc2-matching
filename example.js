const words = [1,2,3,4,5,6,7,8,9]

const scramble = () => {
    let i = words.length
    while (i-- > 0) {
        let j = Math.floor(Math.random() * words.length)
        let temp = words[j]
        words[j] = words[i]
        words[i] = temp
    }
    return(
        console.log(words)
    )
}

scramble()


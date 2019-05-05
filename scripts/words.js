const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

let sentence = words.reduce((currentWord, nextWord) => {
    return `${currentWord} ${nextWord}`
})
sentence += '.'

console.log(sentence)
const capitalise = (text) => {
    if (text.length === 0) {
        return text
    } else {
        return text[0].toUpperCase() + text.slice(1)
    }   
}

module.exports = capitalise;
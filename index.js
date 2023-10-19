class Formatter {
  //add static methods here
  static capitalize(strng) {
    return strng[0].toUpperCase() + strng.slice(1)
  }

  static sanitize(strng) {
    let builder = ''
    const validCharacters = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890-' "
    for (let i = 0; i < strng.length; i++) {
      if (validCharacters.includes(strng[i])){
        builder = builder + strng[i]
      }
    }
    return builder

  }

  static titleize(strng) {
    const lowerCaseWords = [' The ', ' A ', ' An ', ' But ',' Of ', ' And ', ' For ', ' At ', ' By ', ' From ', ' A.', ' An.', ' But.',' Of.', ' And.', ' For.', ' At.', ' By.', ' From.']
    
    const letters = 'qwertyuiopasdfghjklzxcvbnm'
    let wordStarts = []
    for (let i = 0; i < 26; i++){
      wordStarts.push(' ' + letters[i])
    }
    for (let start of wordStarts) {
      strng = strng.replaceAll(start, start.toUpperCase())
    }
    
    for (let word of lowerCaseWords) {
      strng = strng.replace(word, word.toLowerCase())
    }
    return this.capitalize(strng)
  }

}
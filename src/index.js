module.exports = function check(str, bracketsConfig) {
  const strToArray = str.split('') 
  const openBrackets = bracketsConfig.flat().filter((bracket, i) => i%2 === 0);
  const closeBrackets =bracketsConfig.flat().filter((bracket, i) => i%2 === 1);
  const array = []
  let result = true
  if(strToArray.length%2 !== 0){
    result = false
  }else{
    strToArray.forEach(element => {
      if (closeBrackets.includes(element)){
        if (openBrackets.includes(element)&&!array.includes(element)){
          array.push(element)
        }else {
        let lastElement = array.pop()
        if(openBrackets.indexOf(lastElement)===closeBrackets.indexOf(element)){
          result = true
        }else{
          result = false
        }
      }
      }else if (openBrackets.includes(element)){
        array.push(element)
      }
    });
  }
if (array.length > 0){
  result = false
}
  return result
}

const findMaxLength = (string1, string2) => {
  return string1.length >= string2.length ? string1.length : string2.length
}

const normalizeLength = (array, length) => {
  if(array.length === length)
    return array
  
  const lengthDifference = length - array.length

  for(let index = 0; index < lengthDifference; index++) {
    array.push('0')
  }
  
  return array
}



const versionCompare = (string1, string2) => {
  let result = 'equal'
  const split1 = string1.split('.')
  const split2 = string2.split('.')
  
  const maxLength = findMaxLength(split1, split2)

  const normalized1 = normalizeLength(split1, maxLength)
  const normalized2 = normalizeLength(split2, maxLength)

  for(let index = 0; index < maxLength; index++) {
    if(normalized1[index] > normalized2[index]){
      result = 'after'
      break
    } else if (normalized1[index] < normalized2[index]) {
      result = 'before'
      break
    } else {
      continue
    }
  }
  
  return result
}

module.exports = versionCompare
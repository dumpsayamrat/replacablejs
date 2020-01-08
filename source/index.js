import R from 'ramda'

function isString(str) {
  return R.equals('string', typeof str)
}

function convertStringToRegEx(str) {
  return new RegExp(str, 'g')
}

export const replace = R.curry(function replace(text, replaceWith, search) {
  const replaceFn = R.partialRight(R.replace, [replaceWith, text])
  const replaceByString = R.compose(
    replaceFn,
    convertStringToRegEx,
  )
  return R.ifElse(
    isString,
    replaceByString,
    replaceFn,
  )(search)
})

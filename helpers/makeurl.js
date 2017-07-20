// prettier-ignore
const nodiac = { á: 'a', č: 'c', ď: 'd', é: 'e', ě: 'e', í: 'i', ň: 'n', ó: 'o', ř: 'r', š: 's', ť: 't', ú: 'u', ů: 'u', ý: 'y', ž: 'z' }

const makeUrl = s => {
  s = s.toLowerCase()
  let s2 = ''

  for (let i = 0; i < s.length; i++) {
    s2 += typeof nodiac[s.charAt(i)] !== 'undefined' ? nodiac[s.charAt(i)] : s.charAt(i)
  }

  let buffer = s2.replace(/[^a-z0-9_]+/g, '-').replace(/^-|-$/g, '')

  if (buffer.length > 4 && buffer.indexOf('-s-r-o') === buffer.length - 6) {
    buffer = buffer.slice(0, -6)
  }
  if (buffer.length > 4 && buffer.indexOf('-a-s') === buffer.length - 4) {
    buffer = buffer.slice(0, -4)
  }
  return buffer
}

export default makeUrl

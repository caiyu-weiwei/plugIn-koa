exports.a = function() {
  console.log('a')
}

module.exports = {
  a: 2
}
exports.a = 1
console.log('exports', exports)
console.log('module exports', module.exports)

console.log('exports === module.exports', exports === module.exports)
var properties = require("./lib/properties")

module.exports = function(object) {
  var result = []
  var index = -1
  var length = arguments.length
  if(object == null) {
    return "none"
  }
  while(++index < length) {
    var key
    var item = arguments[index]
    if(typeof item == "string") {
      result.push(item)
      continue
    }
    if(item == null) {
      continue
    }
    for(key in item) {
      if(properties[key] !== true) {
        continue
      }
      result.push(
        key + "(" + String(item[key]) + ")"
      )
    }
  }
  return result.join(" ")
}

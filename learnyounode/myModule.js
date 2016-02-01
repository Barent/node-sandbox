var fs = require('fs')

module.exports = function (dir, filter, cb) {

  var extFilter = new RegExp('\\.' + filter + '$')

  var result = []

  fs.readdir(dir, function (err, list) {
    if (err){
      return cb(err)
    }
    list.forEach(function (item) {
      if (extFilter.test(item)){
        result.push(item)
      }
    })
    cb(null, result);
  })
};
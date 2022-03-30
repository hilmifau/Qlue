const fs = require('fs')

const obj = {
  h : [],
  d : []
}

const data = JSON.parse(fs.readFileSync('./Javascript1.json', 'utf8'))
let temp = []
for ( let i = 0; i < data.length; i++) {
  let obj1 = data[i]
  let arr = []
  for (let key in obj1) {
    if (!temp.includes(key)) {
      temp.push(key)
    }
    arr.push(obj1[key])
  }
  obj.d.push(arr)
  arr = []
  
}
obj.h = temp

fs.writeFileSync('./Javascript2.json', JSON.stringify(obj, null, 2), 'utf-8')


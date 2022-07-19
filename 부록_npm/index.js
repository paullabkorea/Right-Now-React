let moment = require('moment');

console.log(`moment : ${moment()}`)
console.log(`포맷 지정 : ${moment().format("MM월DD일YYYY연")}`)

console.log(`연 : ${moment().year()}`)
console.log(`월 : ${moment().month()}`) // 0〜11의 값
console.log(`일 : ${moment().date()}`)
console.log(`요일 : ${moment().day()}`)
console.log(`시 : ${moment().hours()}`)
console.log(`분 : ${moment().minutes()}`)
console.log(`초 : ${moment().seconds()}`)
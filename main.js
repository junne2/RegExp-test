let str = ` 
010-1234-5678
therofhns@gmail.com
https://fastcampus.co.kr/courses/203720/clips/
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost;1234
`

// const regexp = new RegExp('the','gi')
// const regexp = /the/gi
// console.log(str.match(regexp))

// const regexp = /fox/gi
// console.log(regexp.test(str))
// -------------------------------------

// // console.log(str.replace(regexp, 'AAA'))
// str = str.replace(regexp, 'AAA')
// console.log(str)
// --------------------------------------

// const regexp = /the/gi
// console.log(str.match(regexp))
// ==console.log(str.match(/the/gi))
// console.log(str.match(/\.$/gim))
// -------------------------------------

// console.log(
// 	str.match(/^t/gim)
// )

// -----------------------------------

// console.log(
// 	str.match(/h..p/g)
// )
// console.log(
// 	str.match(/fox|dog/g)
// )
// console.log(
// 	str.match(/https?/g)
// )

// ------------------------------------

// console.log(
// 	str.match(/d{2,}/)
// )
// console.log(
// 	str.match(/\b\w{2,3}\b/g) //두-세글자의 단어찾기
// )

// -------------------------------------

// console.log(
//  	str.match(/[fox]/g)
// )
// console.log(
// 	str.match(/[0-9]/g)
// )
// console.log(
// 	str.match(/[0-9]{1,}/g)
// )
// console.log(
// 	str.match(/[가-힣]{1,}/g)
// )

// --------------------------------------

// console.log(
// 	str.match(/\w/g)
// )
// console.log(
// 	str.match(/\b/g)
// )
// console.log(
// 	str.match(/\bf\w{1,}\b/g)
// )
// console.log(
// 	str.match(/\d{1,}/g)
// )
// console.log(
// 	str.match(/\s/g)
// )


// const h = `   the hello world    ! 

// `

// console.log(
// 	h.replace(/\s/g,'')
// )

//----------------------------

console.log(
	str.match(/.{1,}(?=@)/g)
)
console.log(
	str.match(/(?<=@).{1,}/g)
)
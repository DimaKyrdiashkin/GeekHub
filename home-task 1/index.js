const n = 3000


function myFunc1(n = null){
	if(n === null){
		return null
	}

	let i, str = `if(n === ${1}){
		console.log(${1});
	}
	`
  	
  	for(i = 2	; i <= n; i++){

  		str += `
else if(n === ${i}){
	console.log(${i});
}
`;
  	}
  	
  	return str
}
let str1 = myFunc1(n)
let f1time = Date.now()
eval(str1);
console.log(Date.now() - f1time + " mlsec for if")




function myFunc2(n = null){
	if(n === null){
		return null
	}

	let i, str = `switch(n){`
	for (i = 1; i <= n; i++){
		str += `
	case ${i}:
		console.log(${i});
		break;`
		if(i === n){
			str+=`
	default:
		console.log("don't");
		break;
	}`
		}
	}
	
	return str
}

let str2 = myFunc2(n)
let f2time = Date.now()
eval(str2);
console.log(Date.now() - f2time + " mlsec for switch")
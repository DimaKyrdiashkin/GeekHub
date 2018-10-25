const n = 3000
let f1time = Date.now()

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
  	console.log(Date.now() - f1time + " mlsec for if")
  	return str
}

eval(myFunc1(n));
let f2time = Date.now()
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
	console.log(Date.now() - f2time + " mlsec for switch")
	return str
}

  
eval(myFunc2(n));
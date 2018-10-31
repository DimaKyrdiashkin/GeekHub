let str = "()()()[[]]]";

function checkScript(string){
	let strArr = str.split('');
	const er = strArr.length
	let quotes = ['(',')','{','}','[',']'];
	strArr.forEach( (item, i, arr) => {
		quotes.forEach(e =>{
		 	e ==  item ? strArr.push(item) : null
		})
	});
	strArr.splice(0, er)
	let counter = 0
	let clener = function rec(strArr){
		console.log(strArr)
	  	strArr.forEach(function(item, i, arr){
			if (item == "(" && arr[i+1] == ")") {
				arr.splice(i,2)
			}else if (item == "{" && arr[i+1] == "}"){
				arr.splice(i,2)
			}else if (item == "[" && arr[i+1] == "]"){
				arr.splice(i,2)
			}
	})

	  	if (strArr.length == 0){
	  		alert("Все вірно")
	  	}else if(counter == strArr.length){
	  		alert("Не все закрито")
	  	}else{
	  		counter = strArr.length
	  		rec(strArr)
	  	}
	}
	return clener(strArr)
}

console.log(checkScript(str));
// Q1.Print odd numbers in an array
// anonymous function:
var main = [];
var a = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      main.push(arr[i]);
    }
  }
  return main;
};
console.log(a([67, 45, 22, 24, 78, 99]));


// IIFE function
// var main1 = []
//     (function (arr) {
//     for(var i =0; i<arr.length; i++){
// 		if(arr[i]%2!==0){
// 			main1.push(arr[i])
// 		}
// 	}
// 	console.log (main1);
// })([67,45,22,24,78,99])


// Arrow Function
var main3 = [];
var odd = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      main3.push(arr[i]);
    }
  }
  return main3;
};
console.log(odd([67, 45, 22, 24, 78, 99]));



/*----------------------------------------------------- */



// Q2.Convert all the strings to title caps in a string array
// Anonymous function:
var e = function (char){
	var chara = char.toString()
	var data = chara.toLowerCase().split(" ")
	for (var i =0; i<data.length; i++){
		data[i] = data[i].charAt(0).toUpperCase()+ data[i].slice(1)
		
	}
	return data.join(" ");
};
console.log(e(["hello how are you"]))


//Arrow Function
var e =  (char) => {
	var chara = char.toString()
	var data = chara.toLowerCase().split(" ")
	for (var i =0; i<data.length; i++){
		data[i] = data[i].charAt(0).toUpperCase()+ data[i].slice(1)
		
	}
	return data.join(" ");
};
console.log(e([" i learn a language"]))



/*----------------------------------------------------- */



//   3.Sum of all numbers in an array
// Anonymous function:
var sum = function (arr) {
  var total = arr.reduce(function(acc, curr) {
      return acc + curr;
  }, 0);

  return total;
}

console.log(sum([1 , 3 , 3]))


//Arrow Function
var sum =  (arr) => {
  var total = arr.reduce(function(acc, curr) {
      return acc + curr;
  }, 0);

  return total;
}

console.log(sum([2, 34 , 5 ,6]))



/*----------------------------------------------------- */



// Q5.Return all the palindromes in an array
// Anonymous function:
var d = function (arra) {
  var a = [];
  for (var i = 0; i < arra.length; i++) {
    var dat = arra[i].split("").reverse().join("");
    if (dat === arra[i]) {
      a.push(arra[i]);
    }
  }
  return a;
};

console.log(d(["mom", "dad", "data"]));
  

// IIFE function
(function (arra) {
	var a = [];
	for (var i = 0; i < arra.length; i++) {
	  var dat = arra[i].split("").reverse().join("");
	  if (dat === arra[i]) {
		a.push(arra[i]);
	  }
	}
	console.log (a);
  });
  
  ((["mom", "dad", "data"]));
  

//Arrow Function
var d =  (arra) => {
	var a = [];
	for (var i = 0; i < arra.length; i++) {
	  var dat = arra[i].split("").reverse().join("");
	  if (dat === arra[i]) {
		a.push(arra[i]);
	  }
	}
	return a;
  };
  
  console.log(d(["MadaM", "MalayalaM", "Hindhi"]));



  /*----------------------------------------------------- */




// 6.Return median of two sorted arrays of the same size.




// Arrow function:
const arr4 = [1, 3, 5, 7,10  ]
const arr5 = [2 , 4, 6, 8 , 12]
let medians = (arr4,arr5)=> {
  let arr6 = [...arr4,...arr5]
  arr6.sort((a,b) => a-b)
  let form = arr6.length;
  if(form %2 === 0){
    return ((arr6[form/2] + arr6[form/2 - 1])/2)
  }
  else{
    return arr6[Math.floor(form/2)]
  }

}
console.log(medians(arr4,arr5))




/*----------------------------------------------------- */




// 7.Remove duplicates from an array
// Arrow function:
const duplicate = (arr6) => {
  const element = []
  for (var i =0; i < arr6.length ; i++){
    if (element.indexOf(arr6[i]) === -1){
      element.push(arr6[i])
    }
  }
  return element
}

console.log(duplicate([5,3,5,7,1,9,2,8,9]))




// Anonymous function:
const duplicates = function (arr6) {
  const element = []
  for (var i =0; i < arr6.length ; i++){
    if (element.indexOf(arr6[i]) === -1){
      element.push(arr6[i])
    }
  }
  return element
}

console.log(duplicates([5,3,5,7,1,9,2,8,9]))
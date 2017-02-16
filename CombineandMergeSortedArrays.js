function comboSortArr(arr1,arr2){
	var newArr = [];
	while (arr1.length >0 || arr2.length >0){
		if (arr1.length == 0){
			newArr.push(arr2.shift());
		}
		else if (arr2.length == 0){
			newArr.push(arr1.shift());
		}
		else if(arr1[0] < arr2[0]){
			newArr.push(arr1.shift());
		}
		else{
			newArr.push(arr2.shift());
		}
	}
	return newArr;
}

// Test comboSortArr
// var newList = comboSortArr([1,3,5],[2,4,6,7]);
// console.log(newList)


function mergeSort(arr){
	var arrSorted = [arr[0]];
	if (arr.length <= 1) {
		return arr;
	} 
	else{
		console.log('started else',arrSorted);
		for(var i = 1; i < arr.length; i++) {
			console.log(i)
			if (arr[i]> arr[i-1]){
				arrSorted.push(arr[i]);
				console.log("sorted arr", arrSorted)
			} 
			else{
				arr.splice(0,i);
				console.log("the new arr", arr)
				return comboSortArr(mergeSort(arr), arrSorted)
			}
		};
		return arrSorted;
	};
}

// Test mergeSort array
// theList = mergeSort([3,1,4,9,8,5,6,7,2])
// console.log(theList);

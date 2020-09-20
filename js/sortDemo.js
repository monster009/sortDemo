// 冒泡排序
let arr01 = new Array("10","20","61","9","88","1","0");
function bubbleSort(arr){
	let temp;
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j+1]-arr[j]<0){   //注：这里不能直接对比大小，不然效果是0,1,10,20,~,9
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
document.getElementById("result01").innerText = bubbleSort(arr01);
// 冒泡排序

//选择排序
let arr02=[8,94,15,88,55,76,21,39];
function selectSort(arr){
    let minIndex,temp;
    for(let i=0;i<arr.length-1;i++){
        minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]-arr[minIndex]<0){
                minIndex=j;
            }
        }
		temp=arr[i];
		arr[i]=arr[minIndex];
		arr[minIndex]=temp;
    }
    return arr;
}
document.getElementById("result02").innerText = selectSort(arr02);
//选择排序

//归并排序
let arr03 = [-11,17,12,19,9,0,-222];
function mergeSort(arr,s,e){
	if(s>e){   //起始位置大于终点位置，返回空数组
		return [];
	}else if(s==e){
		return [arr[s]]; //起始位置等于终点位置，说明数组里只有一个数字，返回只含一个数字的数组    
	}

	let mIndex = Math.floor((s+e)/2); //中间位置的Index
	let arrL = mergeSort(arr,s,mIndex); //将左边的数组排序
	let arrR = mergeSort(arr,mIndex+1,e); //将右边的数组排序
	 
	let resultArr = []; //结果数组
	while(arrL.length>0 || arrR.length>0){ //当左右两个数组都不为空时
		if(arrL[0]<arrR[0]){
			resultArr.push(arrL.shift());
		}else{
			resultArr.push(arrR.shift());
		}

		if(arrL.length==0){  //当左边的数组为空时
			resultArr = resultArr.concat(arrR);
			break;
		}else if(arrR.length==0){
			resultArr = resultArr.concat(arrL);
			break;
		}
	}
	return resultArr;
}
document.getElementById("result03").innerText = mergeSort(arr03,0,arr03.length-1);
//归并排序

//快速排序
var arr04 = [77,-33,22,36,0,2,11,4];
    function quickSort(arr){
        if(arr.length<=1){ //如果数组中只有一位数，返回数组
            return arr;
        }
        var mNumIndex = Math.floor(arr.length/2); //取基准值的下标
        var mNum = arr.splice([mNumIndex],1)[0];  //取基准值
        var left = [];  //左边数组
        var right = []; //右边数组
        
        for(var i=0;i<arr.length;i++){
            if(arr[i]<mNum){  //如果数组小于基准值，放在左边数组
                left.push(arr[i]);
            }else{            ///否则
                right.push(arr[i]);
            }
        }        
        return quickSort(left).concat([mNum],quickSort(right)); //返回左边数组+基准值+右边数组
    }
document.getElementById("result04").innerText = quickSort(arr04);
//快速排序
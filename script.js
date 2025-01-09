// fibonacci recursive
function fibsRec(n) {
    if (n===0) {
        return []
    } else if (n===1){
        return [0]
    } else if (n===2){
        return [0,1]
    }
    prevArr=fibsRec(n-1)
    nextNum=prevArr[n-2]+prevArr[n-3]
    return prevArr.concat(nextNum)
};


//function to merge sort recursevely
function sortRec(array){
    //base case, array is one and therefore is sorted
    if (array.length<=1){
        return array
    }
    let mid=Math.floor(array.length/2)
    let left=array.slice(0,mid)
    let right=array.slice(mid)
    
    return merge(
        sortRec(left),
        sortRec(right)
        )
    
}

// function to merge 2 sorted array
function merge(left,right){
    let mergedList=[]
    let leftIndex=0
    let rightIndex=0
    while (leftIndex<left.length&&rightIndex<right.length){
        if (left[leftIndex]<right[rightIndex]){
            mergedList.push(left[leftIndex])
            leftIndex++
        } else {
            mergedList.push(right[rightIndex])
            rightIndex++
        }
    }
    // remaining elements
    return mergedList
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}

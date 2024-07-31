function mergeSort(array) {
    let arrayLength = array.length;
    let leftHalf = array.slice(0, arrayLength/2);
    let rightHalf = array.slice(arrayLength/2, arrayLength);

    //Base case
    if (array.length === 1) {
        return array;
    }

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);

}

function merge(leftHalf, rightHalf) {
    let leftCounter = 0;
    let rightCounter = 0;
    let mergedArray = [];

    while(leftCounter < leftHalf.length && rightCounter < rightHalf.length) {
        if (leftHalf[leftCounter] < rightHalf[rightCounter]) {
            mergedArray.push(leftHalf[leftCounter]);
            leftCounter++;
        }
        else {
            mergedArray.push(rightHalf[rightCounter]);
            rightCounter++;
        }
    }

    while(leftCounter < leftHalf.length) {
        mergedArray.push(leftHalf[leftCounter]);
        leftCounter++;
    }

    while(rightCounter < rightHalf.length) {
        mergedArray.push(rightHalf[rightCounter]);
        rightCounter++;
    }
    
    return mergedArray;
};

let testArray = [3, 2, 1, 13, 8, 5, 0, 1, 7, 9]; //[0, 1, 1, 2,  3, 5, 7, 8, 9, 13]

const mergeSortResult = mergeSort(testArray);
console.log(mergeSortResult);
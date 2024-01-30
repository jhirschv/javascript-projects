
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

function findMinValue(arr){
    let min = arr[0];
    for (i = 0; i < arr.length; i++){
      if (arr[i] < min){
        min = arr[i];
      }
    }
    return min;
  }
  
  function sortedFromGreatestToLeast(oldArray) {
    let sortedArray = []
   while (oldArray.length > 0) {
      let min = (findMinValue(oldArray))
      sortedArray.push(min)
      let index = oldArray.indexOf(min)
      oldArray.splice(index, 1)
    }
    return sortedArray.reverse()
  }

  function sortedFromLeastToGreatest(oldArray) {
    let sortedArray = []
   while (oldArray.length > 0) {
      let min = (findMinValue(oldArray))
      sortedArray.push(min)
      let index = oldArray.indexOf(min)
      oldArray.splice(index, 1)
    }
    return sortedArray
  }

  console.log(`Ascending ${sortedFromLeastToGreatest(nums2)}`)
  console.log(`Decending ${sortedFromGreatestToLeast(nums1)}`)

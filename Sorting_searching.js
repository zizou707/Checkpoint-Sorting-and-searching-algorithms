//function Insertion sort
var arr = [-1,5,8,95,36,75,12,-8,0,7]
function Insertion_sort(arr){
    for(i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i-1;
        while (j >= 0 && arr[j] > key){
           arr[j+1] = arr[j];
           j--;
        }
        arr[j+1] = key;
     }
     return arr;
   }
Insertion_sort(arr) ;  
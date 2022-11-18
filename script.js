
 // Function to print alternate sorted values
 function alternateSort(arr, n)
 {
  
   // Sorting the array
   console.log(arr);
   arr.sort(function (a, b)
   {
     return a - b;
   });
   console.log(arr);

   var i = 0,
   j = n - 1;
 while (i < j)
 {
   document.write(arr[j--] + " ");
   document.write(arr[i++] + " ");
 }

 // If the total element in array is odd
 // then print the last middle element.
 if (n % 2 != 0) document.write(arr[i]);
}
var arr = [2,4,6,8];
      var n = arr.length;
      alternateSort(arr, n);
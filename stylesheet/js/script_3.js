

  var i, j;
  var n=prompt("Enter a number for the no. of rows in a pattern");
  console.log("Enter a number for the no. of rows in a pattern")
  //outer loop
  for(i=1; i <= n; i++)
   {
    console.log(" is the numbers of stairs for the pyramid")
   //inner loop
    for(j=1; j<=i; j++)
   {
     document.write('#');
    }
     document.write('<br/>');
   }
   console.log()


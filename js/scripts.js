$(document).ready(function() {

  var re = /[0-9]+/;
  var output = [];

  function validNumbers(num1, num2){
    if ( (num1.match(re) && num2.match(re)) && (num1 >=0 && num2 >=0) && (num1 >= num2) ) {
      return true;
    } else {
      return false;
    }
  }

  $("form#counter").submit(function(e) {

    e.preventDefault();

    // Business Code
    var endNum = $("#endNum").val();
    var stepNum = $("#stepNum").val();
    if (! validNumbers(endNum, stepNum) ) {
      alert("Please enter positive numbers only, where the starting point is less than the stepping value.");
      $("#counter").trigger("reset"); // reset form to defaults;
    } else {
      endNum = parseInt(endNum);
      stepNum = parseInt(stepNum);
      for (var i=stepNum; i <= endNum; i+=stepNum) {
        //endNum1 stepNum2
        output.push(i);
        console.log("i = " +i);
        // call the output function
      }
    }

// regex = "[0-9]+";
// str.match(regexp)

    //
    // // alert("endnum = " + endNum);
    // // alert("stepnum = " + stepNum);
    // var output = [];
    // for (var i=stepNum; i <= endNum; i+=stepNum) {
    //   //endNum1 stepNum2
    //   output.push(i);
    //   console.log("i = " +i);
    // }

// Don't forget to consider how to handle any input that might be submitted:
//
// empty values (user just presses enter) X
// non-numeric values (It may be helpful to read up about the numerical value, NaN) X
// negative numbers X
//  count by number is larger than the count to numbers



  // Display Code
    //   Here is some sample input:
    // Count to: 30
    // Count by: 5
    // Output: 5, 10, 15, 20, 25, 30
    //
    // Count to: 50
    // Count by: 7
    // Output: 7, 14, 21, 28, 35, 42, 49
  var n = 0;
    output.forEach(function (element) {
        n=n+1;
        $("#results").append(output[n-1] + "<br>");
      console.log("output[n] = " + output[n-1]);
    });
          // $(myChoice).show();

      // $(myChoice+"-close").on("click", function(e){
      //   e.preventDefault();
      //   $(myChoice).hide();
      //   console.log("myChoice after hide = " + myChoice);
      // });

      $("#counter").trigger("reset"); // reset form to defaults;

    });
}); // end READY

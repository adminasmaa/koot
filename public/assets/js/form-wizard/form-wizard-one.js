"use strict";
var currentTab = 0; 
showTab(currentTab);
function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) { 
    document.getElementById("nextBtn").innerHTML = "إرسال";
  } else {
    document.getElementById("nextBtn").innerHTML = "التالي";
  }
  fixStepIndicator(n)
}
function nextPrev(n) {
  var x = document.getElementsByClassName("tab");


  if (n == 1 && !validateForm()) {
   alert('يجب التأكد من ادخال التقييم والاجابه  علي السؤال');
    return false;
  }
 

  x[currentTab].style.display = "none";
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("myform").submit();
    return false;
  }
  showTab(currentTab);
}
function validateForm() {
  var x, y, i, z,valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  z = x[currentTab].getElementsByTagName("select");

 //alert(x[currentTab].getElementsByClassName("checkeeee").value)
  // for (i = 0; i < y.length; i++) {
  //   if (y[i].value == ""|| y[0].value ==0) {
      
  //     y[i].className += " invalid";
  //     valid = false;
  //   }
  // }
  for (i = 0; i < z.length; i++) {
    
    if (z[i].value == ""|| z[0].value ==0) {
      z[i].className += " invalid";
      valid = false;
    }
  }

  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}
function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
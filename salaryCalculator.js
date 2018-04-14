var myNum = document.getElementById("salaryGross");

document.getElementById("calculate").onclick = function(){
    
    
    var x = myNum.value;
    
    if( x> 0 && x <=45000){
      var netSalary = (x - (x*0.2));
        
        document.getElementById("output").innerHTML = netSalary;
    }
    
    else {
        var netSalary = (x - (x*0.4));
        
        document.getElementById("output").innerHTML = netSalary;
    }

};

var myNum = document.getElementById("salaryGross");

document.getElementById("calculate").onclick = function(){
    
    
    var x = myNum.value;
    var netSalary = (x - (x*0.2));
    
    document.getElementById("output").innerHTML = netSalary;

};

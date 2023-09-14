function HitungLuas(){
    var sisi = document.getElementById("sisi").value;
    var area = sisi * sisi
    document.getElementById("demoRLP").innerHTML = "L &equals; s &#215; s";
    document.getElementById("demoIRLP").innerHTML = "L = "+sisi+" x "+sisi;
    document.getElementById("ResultLP").innerHTML = "L = "+area;
}
function resetFormL(){
    document.getElementById("sisi").value = "";
}
function HitungKell(){
    var sisi = document.getElementById("sisik").value;
    var perimeter = 4*sisi
    document.getElementById("demoRKP").innerHTML = "K &equals; 4 &#215; s";
    document.getElementById("demoIRKP").innerHTML = "K = 4"+" x "+perimeter;
    document.getElementById("ResultKP").innerHTML = "K = "+perimeter;
}
function resetForm(){
    document.getElementById("sisik").value = "";
}

function myfun() {
  document.getElementById("fo").style.display = "block";
  document.getElementById("for").style.display = "none";
}
function myfun1(){	
	 document.getElementById("for").style.display = "block";
	document.getElementById("fo").style.display = "none";
}
var family = document.getElementsByClassName("family");
var std = document.getElementsByClassName("std");
function filter_student() {
    for (i=0;i<family.length;i++){
        document.getElementsByClassName("family")[i].style.display="none";
    }
    for (i=0;i<std.length;i++){
        document.getElementsByClassName("std")[i].style.display="block";
    }
    $(document).ready(function(){
        $("#carouselExampleIndicators").carousel("pause");
    });
    document.getElementById('prev').style.display='none';
    document.getElementById('next').style.display='none';
    document.getElementById('ind').style.display='none';
}
function filter_family() {
    for (i=0;i<family.length;i++){
        document.getElementsByClassName("family")[i].style.display="block";
    }
    for (i=0;i<std.length;i++){
        document.getElementsByClassName("std")[i].style.display="none";
    }
    $(document).ready(function(){
        $("#carouselExampleIndicators").carousel("cycle");
    });
    document.getElementById('prev').style.display='block';
    document.getElementById('next').style.display='block';
    document.getElementById('ind').style.display='block';
}
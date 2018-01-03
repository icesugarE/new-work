 window.onload = function(){
    setInterval(changeImg(),1500);
    var index=0;
    var array = new Array("images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg");
    function changeImg(){
        var myimg = document.getElementById("obj1");
        if(index==3){
            index=0;
        } 
        else{
            index++;
        }
        myimg.src=array[index];
    }
}
function showsub(li){
    var submenu=li.getElementsByTagName("ul")[0];
    submenu.style.display="block";
}
function hidesub(li){
    var submenu=li.getElementsByTagName("ul")[0];
    submenu.style.display="none";    
}


function display(){
document.getElementById("box").style.display="block"; 
}
function disappear(){
document.getElementById("box").style.display="none"; 
}

function getphoto(x){
    if(x==1)
    {
        document.getElementById("tupian1").style.display="block";
        document.getElementById("tupian2").style.display="none";
        document.getElementById("tupian3").style.display="none";
        setInterval(changeImg(),1500);
        var array = new Array();
        var index=0;
        var array = new Array("images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg");
        function changeImg(){
            var myimg = document.getElementById("obj1");
            if(index==arrey.length-1){
                index=0;
            } 
            else{
                index++;
            }
            myimg.src=array[index];
        }
    }
    else if(x==2)
    {
        document.getElementById("tupian1").style.display="none";
        document.getElementById("tupian2").style.display="block";
        document.getElementById("tupian3").style.display="none";
        setInterval(changeImg(),1500);
        var array = new Array();
        var index=0;
        var array = new Array("images/6.jpg","images/7.jpg","images/8.jpg","images/9.jpg",
        "images/10.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg");
        function changeImg(){
            var myimg = document.getElementById("obj2");
            if(index==arrey.length-1){
                index=0;
            } 
            else{
                index++;
            }
            myimg.src=array[index];
        }
        setInterval(changeImg2(),1500);
        var array2 = new Array();
        var index2=0;
        var array2 = new Array("images/22.jpg","images/23.jpg","images/24.jpg","images/25.jpg",
        "images/26.jpg","images/27.jpg","images/28.jpg","images/29.jpg","images/30.jpg");
        function changeImg2(){
            var myimg2 = document.getElementById("obj22");
            if(index2==arrey2.length-1){
                index2=0;
            } 
            else{
                index2++;
            }
            myimg2.src=array2[index];
        }        
    }
    else
    {
        document.getElementById("tupian1").style.display="none";
        document.getElementById("tupian2").style.display="none";
        document.getElementById("tupian3").style.display="block";
        setInterval(changeImg(),1500);
        var array = new Array();
        var index=0;
        var array = new Array("images/15.jpg","images/16.jpg","images/17.jpg","images/18.jpg");
        function changeImg(){
            var myimg = document.getElementById("obj3");
            if(index==arrey.length-1){
                index=0;
            } 
            else{
                index++;
            }
            myimg.src=array[index];
        }
        setInterval(changeImg2(),1500);
        var array2 = new Array();
        var index2=0;
        var array2 = new Array("images/19.jpg","images/20.jpg","images/21.jpg");
        function changeImg2(){
            var myimg2 = document.getElementById("obj33");
            if(index2==arrey2.length-1){
                index2=0;
            } 
            else{
                index2++;
            }
            myimg2.src=array2[index];
        }  
    }
}

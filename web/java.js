<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>responsive web page 101</title>
    <style>
        h1{
            background-color: aqua;
        }
        i{
            font-size: large;
        }
        body{
            background-color: cornsilk;
        }
        div1{
            background: scroll;
        }
        i{
            background-color: gold;
        }
    </style>
</head>
<body>
<script>
   //let name = prompt("enter your name: ");
   //alert("hello "+name);
</script>

<H1>introducing my first responsive javascript embedded web page </H1>
<hr>
<img 
id="img1"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduXFjNZQlYDT_bBSJiIS_EScBlqy6EtJgig&s""
alt="image of nature"
/>
<img height="200" 
id="img2"
src="https://vgl.ucdavis.edu/sites/g/files/dgvnsk15116/files/styles/sf_landscape_4x3/public/images/marketing_highlight/Sample-Collection-Box-Cat-640px.jpg?h=52d3fcb6&itok=4r75E_w2"
alt="image of cat showing tounge"
/>
<img 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s"
alt="image of sky"
id="img3"
/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDr8n8_pzDI2FaiNBqdVChqHU8QXJuAswhAQ&s"
 alt="image4"
 id="img4"
 />
<br>
<hr>
<b>will take and display your age</b> 
<button onclick="getAge()">Enter Your Age</button>
<hr>

<b>will <i>critisize</i> and display height</b>
<button onclick="hii()">height</button>
<hr>

<b id='b'>will check your age and tell if you are minor or adult</b>
<button onclick="age_check()">Enter Your Age</button>
<hr>

<!--buttons to view photos-->
<div1>
<button onclick="compare1()">
<img 
id="img1"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRduXFjNZQlYDT_bBSJiIS_EScBlqy6EtJgig&s"
alt="image of nature">

</button>
    <button onclick="compare2()"> 
        <img height="200" 
id="img2"
src="https://vgl.ucdavis.edu/sites/g/files/dgvnsk15116/files/styles/sf_landscape_4x3/public/images/marketing_highlight/Sample-Collection-Box-Cat-640px.jpg?h=52d3fcb6&itok=4r75E_w2"
alt="image of cat showing tounge">
</button> 


<button onclick="compare3()"> <img 
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dGWQgdRtlbW5aRFnN5K5pjTRSFsVWuGf7A&s"
alt="image of sky"
id="img3">
</button>
    <button onclick="compare4()">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDr8n8_pzDI2FaiNBqdVChqHU8QXJuAswhAQ&s"
 alt="image4"
 id="img4">
</button>
<br><br>
<b> this button will do the math for you <sub>click the button</sub> and see the magic </b>
<br>
<button onclick="math()">math</button>
</div1>
<!--scripting here please -->
<script>

    function getAge() {
    var age = prompt("Please enter your age:");
    
    displayage = Number(age);

    alert("Your age is " + displayage);
    }


    function hii(){
        var height = prompt("your height in ( CM ): ");

        a = Number(height);
        let p = 168; // my heights for instance
        let final = p - height;
        if(height<p)
        {
            alert("pranav is taller than you by " +final+ " cm");
        }
        else if(height==p)
        {
            alert("pranav must be equal to your height");
        }
        else if(height>p)
        {
            alert("pranav might be shorter than you by " + final +" cm");
        }

        alert("your height is "+ a );
    }

    function age_check(){
    var check=prompt("enter your real age: ");
    check=Number(check);
    if(check>17){
        alert("adult");
    }else if(check>10  && check < 17 )
    {
        alert("teenager");
    }else{
        alert("child");
    }
        alert("your age was "+check);
    }
    
function compare1(){
    document.getElementById('img1').height="450"
    document.getElementById('img2').style.display='none'
    document.getElementById('img3').style.display='none'
    document.getElementById('img4').style.display='none'

}

function compare2(){
    document.getElementById('img1').style.display='none'
    document.getElementById('img2').height="450"
    document.getElementById('img3').style.display='none'
    document.getElementById('img4').style.display='none'

}
 
function compare3(){
    document.getElementById('img1').style.display='none'
    document.getElementById('img2').style.display='none'
    document.getElementById('img3').height="450"    
    document.getElementById('img4').style.display='none'

}

function compare4(){
    document.getElementById('img1').style.display='none'
    document.getElementById('img2').style.display='none'
    document.getElementById('img3').style.display='none'
    document.getElementById('img4').height="450"

}
function math(){
    var x = prompt("No 1 : ");
    var y = prompt("no 2 : ");
    a=Number(x);
    b=Number(y);

    add=a+b;
    sub=a-b;
    div=a/b;
    multi =a*b;

    alert("addition of "+a+" and "+b+" is "+add+"\nsubstraction of "+a+" and "+b+" is "+sub+"\ndivision of "+a+" and "+b+" is "+div+"\nmultiplication of "+a+" and "+b+" is "+multi );
    //alert("substraction of "+a+" and "+b+" is "+sub);
    //alert("division of "+a+" and "+b+" is "+div);
    //alert("multiplication of "+a+" and "+b+" is "+multi);


}
</script>
</body>

</html>


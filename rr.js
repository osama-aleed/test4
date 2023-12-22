let x , y;
x=Math.random();
y=Math.random();
x=Math.floor(x=x*10);
y=Math.floor(y=y*10);
let z=x+y;
let y1=y.toString();
let x1=x.toString();
let z1=prompt(  "أجب عن السؤال    "  +  "="  + x1 +  "+"  + y1 );
while (z !=z1) {
    window.document.write("Error  ");
}
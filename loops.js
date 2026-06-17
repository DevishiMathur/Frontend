const cars=["Ford","BMW","Mercedes","Mahindra","Maruti"];
let len=cars.length;
let text=" ";
let i=0;
// for loop
for(i=0 ; i<len;i++){
    text += cars[i]+" ";
}
console.log("Using for loop: " + text);

//while loop
while(cars[i]){
    text+= cars[i]+ " ";
    i++;
}
console.log("Using while loop: "+ text);


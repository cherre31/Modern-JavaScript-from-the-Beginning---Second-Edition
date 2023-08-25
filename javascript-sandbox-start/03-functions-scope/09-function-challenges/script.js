// Challenge 1
const getCelsius = Fah => ((Fah - 32)*5/9);

console.log(`The temperature is ${Math.round(getCelsius(100))} \xB0C`);

// Challenge 2
const minMax = arr => ({max: Math.max(...arr), min: Math.min(...arr)});

console.log(minMax([1,2,3,4,5]));

// Challenge 3
(function area(l, w){
    console.log(`The area of a rectangle with a length of ${l} and a width of ${w} is ${l*w}`);
})(10, 7);

((length, width)=>{
    const area = length*width; 
    const output = (`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`)
    console.log(output);
})(10, 5);






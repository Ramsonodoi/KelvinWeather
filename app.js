// current temperature in Kelvin 

let kelvin = 0;
console.log(`The temperature is ${kelvin} K`);


//formular for converting kelvin to  celsius 
const celsius = kelvin - 273;
console.log (`The temperature is ${celsius} °C`);



//formular for converting Celsius to  Fahrenheit
let farenheit = (celsius * (9/5) + 32);
console.log (`The exact temperature is ${farenheit} °F`);

//formular to round down Fahrenheit variable
farenheit = Math.floor(farenheit);
console.log (`The temperature is ${farenheit} °F`);

// Convert celsius to the Newton scale using this equation: Newton = Celsius * (33/100) 

let newton = celsius * (33/100);
console.log (`The exact temperature is ${newton} Newtons`);

newton = Math.floor(celsius * (33/100));
console.log (`The temperature is ${newton} Newtons`);

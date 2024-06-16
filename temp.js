
function convert(){
    var fromunit = document.getElementById('fromunit').Value;
    var tounit = document.getElementById('tounit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);
    
    var convertedvalue;
    var resultunit;

    // coversion logic

    switch (fromunit){
        case 'C':
            if(tounit === 'F'){
                convertedvalue = (temperature * 9/5)+32;
                resultunit = 'F';
            }
            else if(tounit === 'K'){
                convertedvalue = temperature +  273.15;
                resultunit = 'K';
            }
            else if(tounit === 'R'){
                convertedvalue = (temperature + 273.15);
                resultunit = 'R';
            }
            else{
                convertedvalue = temperature;
                resultunit = 'C';
            }
            break;

        case 'F':
            if (tounit === 'C'){
                convertedvalue = (temperature - 32) * 5/9;
                resultunit = 'C';
            }
            else if(tounit === 'K'){
                convertedvalue = ((temperature - 32) *5/9 + 273.15);
                resultunit = 'K';
            }
            else if(tounit === 'R'){
                convertedvalue = temperature + 459.67;
                resultunit = 'R';
            }
            else{
                convertedvalue = temperature;
                resultunit = 'F';
            }
            break;

        case 'K':
            if(tounit === 'C'){
                convertedvalue = temperature - 273.15;
                resultunit = 'C';
            }
            else if(tounit === 'K'){
                convertedvalue = (temperature - 273.15) * 9/5 + 32;
                resultunit = 'K';
            }
            else if(tounit === 'R'){
                convertedvalue = (temperature * 9/5);
                resultunit = 'R';
            }
            else{
                convertedvalue = temperature;
                resultunit = 'K';
            }
            break;

        case 'R':
            if(tounit === 'C'){
                convertedvalue = (temperature - 491.67) * 9/5;
                resultunit = 'C';
            }
            else if(tounit === 'K'){
                convertedvalue = temperature - 459.67;
                resultunit = 'K';
            }
            else if(tounit === 'R'){
                convertedvalue = temperature * 5/9;
                resultunit = 'R';
            }
            else{
                convertedvalue = temperature;
                resultunit = 'R';
            }
            break;

    }

    document.getElementById('result').value * convertedvalue.toFixed(2) + '' + resultunit;
    
}
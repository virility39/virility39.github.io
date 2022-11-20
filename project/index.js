//switch button
function exchange() {
    // var exchange = document.getElementById("exchange");
    var selectFrom = document.getElementById("from");
    var selectTo = document.getElementById("to");

    var temp = selectFrom.value;
    selectFrom.value = selectTo.value;
    selectTo.value = temp;
    temperConverter();
    areaConverter();
    lengConverter();
    massConverter();
    volumeConverter();
}

// temperature conversion
function temperConverter() {
    var inputVal = document.getElementById("input").value;
    var inputVal = parseFloat(inputVal)
    var outputVal = document.getElementById("output");

    var selectFrom = document.getElementById("from");
    var selectTo = document.getElementById("to");

    var Selection_1 = selectFrom[selectFrom.selectedIndex].value;
    var Selection_2 = selectTo[selectTo.selectedIndex].value;
    //kelvin
    if (Selection_1 == "kelvin" && Selection_2 == "kelvin") 
    {
        var result = inputVal *1;
        outputVal.value = result;
    }
    else if(Selection_1 == "kelvin" && Selection_2 == "celsius") 
    {
        var result = (inputVal -273.15).toFixed(2);
        outputVal.value = result;
    }
    else if(Selection_1 == "kelvin" && Selection_2 == "fahrenheit") 
    {
        var result = (((inputVal -273.15)*1.8)+32).toFixed(2);
        outputVal.value = result;
    }
    //celcius
    else if(Selection_1 == "celsius" && Selection_2 == "kelvin") 
    {
        var result = (inputVal +273.15).toFixed(2);
        outputVal.value = result;
    }
    else if(Selection_1 == "celsius" && Selection_2 == "celsius") 
    {
        var result = inputVal *1;
        outputVal.value = result;
    }
    else if(Selection_1 == "celsius" && Selection_2 == "fahrenheit") 
    {
        var result = ((inputVal *1.8)+32).toFixed(2);
        outputVal.value = result;
    }
    else if(Selection_1 == "fahrenheit" && Selection_2 == "kelvin") 
    {
        var result = (((inputVal -32)/1.8)+273.15).toFixed(2);
        outputVal.value = result;
    }
    else if(Selection_1 == "fahrenheit" && Selection_2 == "celsius") 
    {
        var result = ((inputVal -32)/1.8).toFixed(2);
        outputVal.value = result;
    }
    //fahrenheit
    else if(Selection_1 == "fahrenheit" && Selection_2 == "fahrenheit") 
    {
        var result = inputVal *1;
        outputVal.value = result;
    }
}
    //celcius conversion
    function celciusConversion() {
        var inputVal = document.getElementById("inputcelcius").value;
        var inputVal = parseFloat(inputVal)
        var outputVal = document.getElementById("outputcelcius");
    
        var selectTo = document.getElementById("tocelcius");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Fahrenheit") 
        {
            var result = ((inputVal * 1.8) + 32).toFixed(2);
            outputVal.value = result;
        }
        else if( Selection_2 == "kelvin") 
        {
            var result = (inputVal + 273.15).toFixed(2);
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Celcius " + " = " + outputVal.value + " " + Selection_2;
    } 

    //fahrenheit conversion
    function fahrenheitConversion() {
        var inputVal = document.getElementById("inputfahrenheit").value;
        var inputVal = parseFloat(inputVal)
        var outputVal = document.getElementById("outputfahrenheit");
    
        var selectTo = document.getElementById("tofahrenheit");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Celcius") 
        {
            var result = ((inputVal - 32)/1.8).toFixed(2);
            outputVal.value = result;
        }
        else if( Selection_2 == "kelvin") 
        {
            var result = (((inputVal - 32)/1.8)+273.15).toFixed(2);
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Fahrenheit " + " = " + outputVal.value + " " + Selection_2;
    } 

    //kelvin conversion
    function kelvinConversion() {
        var inputVal = document.getElementById("inputkelvin").value;
        var inputVal = parseFloat(inputVal)
        var outputVal = document.getElementById("outputkelvin");
    
        var selectTo = document.getElementById("tokelvin");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if (Selection_2 == "Fahrenheit") 
        {
            var result = (((inputVal -273.15)*1.8)+32).toFixed(2);
            outputVal.value = result;
        }
        else if(Selection_2 == "Celcius") 
        {
            var result = (inputVal - 273.15).toFixed(2);
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " kelvin " + " = " + outputVal.value + " " + Selection_2;
    } 

// area conversion
function areaConverter() {
    var inputVal = document.getElementById("input").value;
    var outputVal = document.getElementById("output");

    var selectFrom = document.getElementById("from");
    var selectTo = document.getElementById("to");

    var Selection_1 = selectFrom[selectFrom.selectedIndex].value;
    var Selection_2 = selectTo[selectTo.selectedIndex].value;

    // square millimeter
    if (Selection_1 == "Square Millimeter" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Millimeter" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *0.01).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Millimeter" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal /1000000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Millimeter" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal /10000000000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Millimeter" && Selection_2 == "Square Inch") 
    {
        var result = parseFloat((inputVal *0.0015500031).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Millimeter" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *1.07639104e-5).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Millimeter" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal *1.19599005e-6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Millimeter" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal *2.471053814e-10).toFixed(10));
        outputVal.value = result;
    }
    // square centimeter
    if (Selection_1 == "Square Centimeter" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *100).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Centimeter" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Centimeter" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal /10000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Centimeter" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal /100000000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Centimeter" && Selection_2 == "Square Inch") 
    {
        var result = (parseFloat(inputVal *0.15500031).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Centimeter" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *1.07639104e-3).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Centimeter" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal *1.19599005e-4).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Centimeter" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal *2.471053814e-8).toFixed(10));
        outputVal.value = result;
    }
    // square meter
    if (Selection_1 == "Square Meter" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *10000000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Meter" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *10000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Meter" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Meter" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal *0.0001).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Meter" && Selection_2 == "Square Inch") 
    {
        var result = parseFloat((inputVal *1550.0031).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Meter" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *10.7639104).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Meter" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal *1.19599005).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Meter" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal *2.471053814e-4).toFixed(10));
        outputVal.value = result;
    }
    // hectare
    if (Selection_1 == "Hectare" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *10000000000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Hectare" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *100000000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Hectare" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal *10000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Hectare" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Hectare" && Selection_2 == "Square Inch") 
    {
        var result = parseFloat((inputVal *15500031).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Hectare" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *107639.104).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Hectare" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal *11959.9005).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Hectare" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal *2.471053814).toFixed(10));
        outputVal.value = result;
    }
    // square inch
    if (Selection_1 == "Square Inch" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *645.16).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Inch" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *6.4516).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Inch" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal *0.00064516).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Inch" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal *6.4516e-8).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Inch" && Selection_2 == "Square Inch") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Inch" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *0.00694444444).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Inch" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal *0.000771604938).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Inch" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal *1.59422507907e-7).toFixed(10));
        outputVal.value = result;
    }                
    // square foot
    if (Selection_1 == "Square Foot" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *9903.04).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Foot" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *929.0304).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Foot" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal *0.09290304).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Foot" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal *9.290304e-6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Foot" && Selection_2 == "Square Inch") 
    {
        var result = parseFloat((inputVal *144).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Foot" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Foot" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal /9).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Foot" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal /43560).toFixed(10));
        outputVal.value = result;
    }
    // square yard
    if (Selection_1 == "Square Yard" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *836127.36).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Yard" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *8361.2736).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Yard" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal *0.83612736).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Yard" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal *8.3612736e-5).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Yard" && Selection_2 == "Square Inch") 
    {
        var result = parseFloat((inputVal *1296).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Yard" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *9).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Yard" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Square Yard" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal /4840).toFixed(10));
        outputVal.value = result;
    }
    // acre
    if (Selection_1 == "Acre" && Selection_2 == "Square Millimeter") 
    {
        var result = parseFloat((inputVal *4046856422.4).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Acre" && Selection_2 == "Square Centimeter") 
    {
        var result = parseFloat((inputVal *40468564.224).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Acre" && Selection_2 == "Square Meter") 
    {
        var result = parseFloat((inputVal *4046.8564224).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Acre" && Selection_2 == "Hectare") 
    {
        var result = parseFloat((inputVal *0.4046856422).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Acre" && Selection_2 == "Square Inch") 
    {
        var result = parseFloat((inputVal *6272640).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Acre" && Selection_2 == "Square Foot") 
    {
        var result = parseFloat((inputVal *43560).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Acre" && Selection_2 == "Square Yard") 
    {
        var result = parseFloat((inputVal *4840).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Acre" && Selection_2 == "Acre") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
}
    //mm2 conversion
    function mm2Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Centimeter") 
        {
            var result = parseFloat((inputVal * 0.01).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Meter") 
        {
            var result =  parseFloat((inputVal / 100000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Hectare") 
        {
            var result =  parseFloat((inputVal * 1e-10).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Inch") 
        {
            var result =  parseFloat((inputVal * 0.0015500031).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Foot") 
        {
            var result =  parseFloat((inputVal * 264.2).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Yard") 
        {
            var result =  parseFloat((inputVal / 836127.36000334).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Acre")
        {
            var result =  parseFloat((inputVal / 404685620).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Square Millimeter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //cm2 conversion
    function cm2Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Millimeter") 
        {
            var result = parseFloat((inputVal * 100).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Meter") 
        {
            var result = parseFloat((inputVal * 0.0001).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Hectare") 
        {
            var result = parseFloat((inputVal * 1e-8).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Inch") 
        {
            var result = parseFloat((inputVal * 0.15500031).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Foot") 
        {
            var result = parseFloat((inputVal * 0.00107639104).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Yard") 
        {
            var result = parseFloat((inputVal / 8361.2736).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Acre")
        {
            var result = parseFloat((inputVal / 40468564.2).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Square Centimeter " + " = " + outputVal.value + " " + Selection_2 ;
    }
    
    //m2 conversion
    function m2Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Millimeter") 
        {
            var result = parseFloat((inputVal * 1000000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Hectare") 
        {
            var result = parseFloat((inputVal * 0.0001).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Centimeter") 
        {
            var result = parseFloat((inputVal *10000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Inch") 
        {
            var result = parseFloat((inputVal * 15500031).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Foot") 
        {
            var result = parseFloat((inputVal * 10.76391042).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Yard") 
        {
            var result = parseFloat((inputVal * 1.19598993).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Acre")
        {
            var result = parseFloat((inputVal * 0.0002471054).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Square Meter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //hecta conversion
    function hectaConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Millimeter") 
        {
            var result = parseFloat((inputVal *10000000000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Meter") 
        {
            var result = parseFloat((inputVal *10000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Centimeter") 
        {
            var result = parseFloat((inputVal *100000000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Inch") 
        {
            var result = parseFloat((inputVal * 15500031).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Foot") 
        {
            var result = parseFloat((inputVal * 107639).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Yard") 
        {
            var result = parseFloat((inputVal * 11959.900463).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Acre")
        {
            var result = parseFloat((inputVal * 2.4711).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Hectare " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //square inch conversion
    function in2Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Millimeter") 
        {
            var result = (inputVal * 836127.36);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Meter") 
        {
            var result = (inputVal * 0.83612736);
            outputVal.value = result;
        }
        else if( Selection_2 == "Hectare") 
        {
            var result = (inputVal * 0.000083612736);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Yard") 
        {
            var result = (inputVal * 1296);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Foot") 
        {
            var result = (inputVal * 9);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Centimeter") 
        {
            var result = (inputVal * 8361.2736);
            outputVal.value = result;
        }
        else if( Selection_2 == "Acre")
        {
            var result = (inputVal * 0.0002066116);
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Square Inch " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //square foot conversion
    function ft2Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Millimeter") 
        {
            var result = (inputVal * 92903.04);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Centimeter")
        {
            var result = (inputVal * 929.0304);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Meter") 
        {
            var result = (inputVal * 0.09290304 );
            outputVal.value = result;
        }
        else if( Selection_2 == "Hectare") 
        {
            var result = (inputVal * 0.0000092903);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Inch") 
        {
            var result = (inputVal * 144);
            outputVal.value = result;
        }
        else if( Selection_2 == "Acre") 
        {
            var result = (inputVal / 43560);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Yard") 
        {
            var result = (inputVal / 9);
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Square Foot " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //square yard conversion
    function yd2Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Millimeter") 
        {
            var result = (inputVal * 836127.36);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Meter") 
        {
            var result = (inputVal * 0.83612736);
            outputVal.value = result;
        }
        else if( Selection_2 == "Hectare") 
        {
            var result = (inputVal * 0.00008361);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Inch") 
        {
            var result = (inputVal * 1296);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Foot") 
        {
            var result = (inputVal * 9);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Centimeter") 
        {
            var result = (inputVal * 8361.2736);
            outputVal.value = result;
        }
        else if( Selection_2 == "Acre")
        {
            var result = (inputVal *  0.0002066116);
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Square Yard " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //acre
    function acreConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Square Millimeter") 
        {
            var result = (inputVal * 4046856422.4);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Centimeter")
        {
            var result = (inputVal * 40468564.224);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Meter") 
        {
            var result = (inputVal * 4046.8564224);
            outputVal.value = result;
        }
        else if( Selection_2 == "Hectare") 
        {
            var result = (inputVal * 0.40468564224);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Inch") 
        {
            var result = (inputVal * 62726275);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Foot") 
        {
            var result = (inputVal * 43560);
            outputVal.value = result;
        }
        else if( Selection_2 == "Square Yard") 
        {
            var result = (inputVal * 4840);
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Acre " + " = " + outputVal.value + " " + Selection_2 ;
    }

//length conversion
function lengConverter() {
    var inputVal = document.getElementById("input").value;
    var outputVal = document.getElementById("output");

    var selectFrom = document.getElementById("from");
    var selectTo = document.getElementById("to");

    var Selection_1 = selectFrom[selectFrom.selectedIndex].value;
    var Selection_2 = selectTo[selectTo.selectedIndex].value;

    // millimeter
    if (Selection_1 == "Millimeter" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Millimeter" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal *0.1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Millimeter" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal *0.001).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Millimeter" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal *1e-6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Millimeter" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal *0.03937).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Millimeter" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal *0.0032808).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Millimeter" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal *0.0010936).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Millimeter" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal *0.00000062137).toFixed(10));
        outputVal.value = result;
    }

    // centimeter
    if (Selection_1 == "Centimeter" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal * 10).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Centimeter" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Centimeter" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal * 0.01).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Centimeter" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal * 1e-5).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Centimeter" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal * 0.3937).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Centimeter" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal * 0.032808).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Centimeter" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal * 0.010936).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Centimeter" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal * 0.0000062137).toFixed(10));
        outputVal.value = result;
    }
    // meter
    if (Selection_1 == "Meter" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal * 1000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Meter" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal * 100).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Meter" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Meter" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal * 0.001).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Meter" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal * 39.37).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Meter" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal * 3.2808).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Meter" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal * 1.0936).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Meter" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal * 0.00062137).toFixed(10));
        outputVal.value = result;
    }
    // kilometer
    if (Selection_1 == "Kilometer" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal * 1e+6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Kilometer" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal * 10000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Kilometer" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal * 1000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Kilometer" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Kilometer" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal * 39370).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Kilometer" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal * 3280.8).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Kilometer" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal * 1093.6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Kilometer" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal * 0.62137).toFixed(10));
        outputVal.value = result;
    }
    // inch
    if (Selection_1 == "Inch" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal / 0.039370).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Inch" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal / 0.39370).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Inch" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal / 39.370).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Inch" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal / 39370).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Inch" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Inch" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal / 12).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Inch" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal / 36).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Inch" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal / 63360).toFixed(10));
        outputVal.value = result;
    }
    // foot
    if (Selection_1 == "Foot" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal / 0.0032808).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Foot" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal / 0.032808).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Foot" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal / 3.2808).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Foot" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal / 3280.8).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Foot" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal * 12).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Foot" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Foot" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal / 3).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Foot" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal / 5280).toFixed(10));
        outputVal.value = result;
    }
    // yard
    if (Selection_1 == "Yard" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal / 0.0010936).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Yard" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal / 0.010936).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Yard" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal / 1.0936).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Yard" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal / 1093.6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Yard" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal * 36).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Yard" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal * 3).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Yard" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Yard" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal / 1760).toFixed(10));
        outputVal.value = result;
    }
    // mile
    if (Selection_1 == "Mile" && Selection_2 == "Millimeter") 
    {
        var result = parseFloat((inputVal / 0.00000062137).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Mile" && Selection_2 == "Centimeter") 
    {
        var result = parseFloat((inputVal / 0.0000062137).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Mile" && Selection_2 == "Meter") 
    {
        var result = parseFloat((inputVal / 0.00062137).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Mile" && Selection_2 == "Kilometer") 
    {
        var result = parseFloat((inputVal / 0.62137).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Mile" && Selection_2 == "Inch") 
    {
        var result = parseFloat((inputVal * 63360).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Mile" && Selection_2 == "Foot") 
    {
        var result = parseFloat((inputVal * 5280).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Mile" && Selection_2 == "Yard") 
    {
        var result = parseFloat((inputVal * 1760).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "Mile" && Selection_2 == "Mile") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
}

    //mm conversion
    function mmConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Centimeter") 
        {
            var result = parseFloat((inputVal * 0.1).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Meter") 
        {
            var result = parseFloat((inputVal * 0.001).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilometer") 
        {
            var result = parseFloat((inputVal * 1e-6).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Inch") 
        {
            var result = parseFloat((inputVal * 0.0393700787).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Foot") 
        {
            var result = parseFloat((inputVal * 0.0032808399).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Yard") 
        {
            var result = parseFloat((inputVal * 0.0010936133).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Mile")
        {
            var result = parseFloat((inputVal * 6.21371192e-7).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Millimeter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //centimeter cm conversion
    function cmConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Millimeter") 
        {
            var result = parseFloat((inputVal * 10).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Meter") 
        {
            var result = parseFloat((inputVal * 0.01).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilometer") 
        {
            var result = parseFloat((inputVal * 1e-5).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Inch") 
        {
            var result = parseFloat((inputVal * 0.393700787).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Foot") 
        {
            var result = parseFloat((inputVal * 0.032808399).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Yard") 
        {
            var result = parseFloat((inputVal * 0.010936133).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Mile")
        {
            var result = parseFloat((inputVal * 6.21371e-6).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Millimeter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //meter conversion
    function meterConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Millimeter") 
        {
            var result = parseFloat((inputVal * 1000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Centimeter") 
        {
            var result = parseFloat((inputVal * 100).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilometer") 
        {
            var result = parseFloat((inputVal * 0.001).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Inch") 
        {
            var result = parseFloat((inputVal * 39.37007874).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Foot") 
        {
            var result = parseFloat((inputVal * 3.280839895).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Yard") 
        {
            var result = parseFloat((inputVal * 1.0936132983).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Mile")
        {
            var result = parseFloat((inputVal * 0.0006213712).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Meter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //kilometer km conversion
    function kmConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Millimeter") 
        {
            var result = parseFloat((inputVal * 1e7).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Centimeter") 
        {
            var result = parseFloat((inputVal * 10000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Meter") 
        {
            var result = parseFloat((inputVal * 1000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Inch") 
        {
            var result = parseFloat((inputVal * 39370.07874).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Foot") 
        {
            var result = parseFloat((inputVal * 3280.839895).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Yard") 
        {
            var result = parseFloat((inputVal * 1093.6132983).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Mile")
        {
            var result = parseFloat((inputVal * 0.621371192).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Kilometer " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //inch in conversion
    function inConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Centimeter") 
        {
            var result = parseFloat((inputVal / 0.3937).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Meter") 
        {
            var result = parseFloat((inputVal / 39.37).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilometer") 
        {
            var result = parseFloat((inputVal / 39370).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Millimeter") 
        {
            var result = parseFloat((inputVal / 0.03937).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Foot") 
        {
            var result = parseFloat((inputVal / 12).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Yard") 
        {
            var result = parseFloat((inputVal / 36).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Mile")
        {
            var result = parseFloat((inputVal / 63360).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Inch " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //foot ft conversion
    function ftConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Centimeter") 
        {
            var result = parseFloat((inputVal * 30.48).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Meter") 
        {
            var result = parseFloat((inputVal / 3.281).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilometer") 
        {
            var result = parseFloat((inputVal / 3281).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Millimeter") 
        {
            var result = parseFloat((inputVal * 304.8).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Inch") 
        {
            var result = parseFloat((inputVal * 12).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Yard") 
        {
            var result = parseFloat((inputVal / 3).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Mile")
        {
            var result = parseFloat((inputVal / 5280).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Foot " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //yard yd conversion
    function ydConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Centimeter") 
        {
            var result = parseFloat((inputVal * 91.44).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Meter") 
        {
            var result = parseFloat((inputVal * 0.9144).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilometer") 
        {
            var result = parseFloat((inputVal * 9.144e-5).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Millimeter") 
        {
            var result = parseFloat((inputVal * 914.4).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Inch") 
        {
            var result = parseFloat((inputVal * 36).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Foot") 
        {
            var result = parseFloat((inputVal * 3).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Mile")
        {
            var result = parseFloat((inputVal / 1760).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Yard " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //mile mi conversion
    function miConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Centimeter") 
        {
            var result = parseFloat((inputVal * 160934.4).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Meter") 
        {
            var result = parseFloat((inputVal * 1609.344).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilometer") 
        {
            var result = parseFloat((inputVal * 1.609344).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Millimeter") 
        {
            var result = parseFloat((inputVal * 1609344).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Inch") 
        {
            var result = parseFloat((inputVal * 63360).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Foot") 
        {
            var result = parseFloat((inputVal * 5280).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Yard")
        {
            var result = parseFloat((inputVal * 1760).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Mile " + " = " + outputVal.value + " " + Selection_2 ;
    }

//mass conversion
function massConverter() {
    var inputVal = document.getElementById("input").value;
    var outputVal = document.getElementById("output");

    var selectFrom = document.getElementById("from");
    var selectTo = document.getElementById("to");

    var Selection_1 = selectFrom[selectFrom.selectedIndex].value;
    var Selection_2 = selectTo[selectTo.selectedIndex].value;

    // gram
    if (Selection_1 == "gram" && Selection_2 == "gram") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        var result = inputVal *1;
        outputVal.value = result;
    }
    else if(Selection_1 == "gram" && Selection_2 == "kilogram") 
    {
        var result = parseFloat((inputVal *0.001).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gram" && Selection_2 == "metricton") 
    {
        var result = parseFloat((inputVal *1e-6).toFixed(10));
        var result = (inputVal *1e-6);
        outputVal.value = result;
    }
    else if(Selection_1 == "gram" && Selection_2 == "ounce") 
    {
        var result = parseFloat((inputVal *0.0352739907).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gram" && Selection_2 == "pound") 
    {
        var result = parseFloat((inputVal *0.0022046244).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gram" && Selection_2 == "shortton") 
    {
        var result = parseFloat((inputVal *0.0000011023).toFixed(10));
        outputVal.value = result;
    }
    // kilogram
    else if(Selection_1 == "kilogram" && Selection_2 == "gram") 
    {
        var result = parseFloat((inputVal *1000).toFixed(10));
        var result = (inputVal *1000);
        outputVal.value = result;
    }
    else if(Selection_1 == "kilogram" && Selection_2 == "kilogram") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        var result = (inputVal *1);
        outputVal.value = result;
    }
    else if(Selection_1 == "kilogram" && Selection_2 == "metricton") 
    {
        var result = parseFloat((inputVal *0.001).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "kilogram" && Selection_2 == "ounce") 
    {
        var result = parseFloat((inputVal *35.273990723).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "kilogram" && Selection_2 == "pound") 
    {
        var result = parseFloat((inputVal *2.2046244202).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "kilogram" && Selection_2 == "shortton") 
    {
        var result = parseFloat((inputVal *0.0011023112987735).toFixed(10));
        outputVal.value = result;
    }
    // metricton
    else if(Selection_1 == "metricton" && Selection_2 == "gram") 
    {
        var result = parseFloat((inputVal *1e+6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "metricton" && Selection_2 == "kilogram") 
    {
        var result = parseFloat((inputVal *1000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "metricton" && Selection_2 == "metricton") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "metricton" && Selection_2 == "ounce") 
    {
        var result = parseFloat((inputVal *35273.990723).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "metricton" && Selection_2 == "pound") 
    {
        var result = parseFloat((inputVal *2204.6244202).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "metricton" && Selection_2 == "shortton") 
    {
        var result = parseFloat((inputVal /0.907184008305).toFixed(10));
        outputVal.value = result;
    }
    // ounce
    else if(Selection_1 == "ounce" && Selection_2 == "gram") 
    {
        var result = parseFloat((inputVal *28.3495).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "ounce" && Selection_2 == "kilogram") 
    {
        var result = parseFloat((inputVal *0.0283495).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "ounce" && Selection_2 == "metricton") 
    {
        var result = parseFloat((inputVal *0.0000283495).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "ounce" && Selection_2 == "ounce") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        var result = (inputVal *1);
        outputVal.value = result;
    }
    else if(Selection_1 == "ounce" && Selection_2 == "pound") 
    {
        var result = parseFloat((inputVal *0.0625).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "ounce" && Selection_2 == "shortton") 
    {
        var result = parseFloat((inputVal *0.00003125).toFixed(10));
        outputVal.value = result;
    }
    // pound
    else if(Selection_1 == "pound" && Selection_2 == "gram") 
    {
        var result = parseFloat((inputVal *453.592).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "pound" && Selection_2 == "kilogram") 
    {
        var result = parseFloat((inputVal *0.453592).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "pound" && Selection_2 == "metricton") 
    {
        var result = parseFloat((inputVal *0.000453592).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "pound" && Selection_2 == "ounce") 
    {
        var result = parseFloat((inputVal *16).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "pound" && Selection_2 == "pound") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        var result = (inputVal *1);
        outputVal.value = result;
    }
    else if(Selection_1 == "pound" && Selection_2 == "shortton") 
    {
        var result = parseFloat((inputVal *0.0005).toFixed(10));
        outputVal.value = result;
    }
    // shortton
    else if(Selection_1 == "shortton" && Selection_2 == "gram") 
    {
        var result = parseFloat((inputVal *907184).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "shortton" && Selection_2 == "kilogram") 
    {
        var result = parseFloat((inputVal *907.184).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "shortton" && Selection_2 == "metricton") 
    {
        var result = parseFloat((inputVal *0.907184).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "shortton" && Selection_2 == "ounce") 
    {
        var result = parseFloat((inputVal *453.592).toFixed(10));
        var result = (inputVal *32000);
        outputVal.value = result;
    }
    else if(Selection_1 == "shortton" && Selection_2 == "pound") 
    {
        var result = parseFloat((inputVal *2000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "shortton" && Selection_2 == "shortton") 
    {
        var result = parseFloat((inputVal *1).toFixed(10));
        outputVal.value = result;
    }
}
    //gram conversion
    function gramConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Kilogram") 
        {
            var result = parseFloat((inputVal / 1000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Metric Ton") 
        {
            var result = parseFloat((inputVal / 1000000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Ounce") 
        {
            var result = parseFloat((inputVal * 0.0352739907).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Pound") 
        {
            var result = parseFloat((inputVal * 0.0022046244).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Short Ton") 
        {
            var result = parseFloat((inputVal * 0.0000011023).toFixed(10));
            outputVal.value = result;
        } 
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Gram " + " = " + outputVal.value + " " + Selection_2;
    } 

    //kilogram conversion
    function kgConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Gram") 
        {
            var result = parseFloat((inputVal * 1000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Metric Ton") 
        {
            var result = parseFloat((inputVal * 0.001).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Ounce") 
        {
            var result = parseFloat((inputVal *  35.273990723).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Pound") 
        {
            var result = (parseFloat(inputVal * 2.2046244202).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Short Ton") 
        {
            var result = parseFloat((inputVal * 0.0011023122).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Kilogram " + " = " + outputVal.value + " " + Selection_2;
    }

    //metricton conversion
    function metrictonConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");      
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Gram") 
        {
            var result = parseFloat((inputVal *1e+6).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Kilogram") 
        {
            var result = parseFloat((inputVal * 1000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Ounce") 
        {
            var result = parseFloat((inputVal * 35273.990723).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Pound") 
        {
            var result = parseFloat((inputVal * 2204.6244202).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Short Ton") 
        {
            var result = parseFloat((inputVal / 0.907184008305).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Metric Ton " + " = " + outputVal.value + " " + Selection_2;
    }

    //ounce oz conversion
    function ozConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if( Selection_2 == "Gram") 
        {                
            var result = parseFloat((inputVal * 28.3495231).toFixed(10));
            outputVal.value = result;
        }
        else if ( Selection_2 == "Kilogram") 
        {
            var result = parseFloat((inputVal * 0.0283495231).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Metric Ton") 
        {
            var result = parseFloat((inputVal * 2.83495231e-5).toFixed(10));
            outputVal.value = result;
        }

        else if( Selection_2 == "Pound") 
        {
            var result = parseFloat((inputVal * 0.0625).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Short Ton") 
        {
            var result = parseFloat((inputVal * 3.125e-5).toFixed(10));
            outputVal.value = result;
        } 
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Ounce " + " = " + outputVal.value + " " + Selection_2;
    } 

    //pound lb conversion
    function lbConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if( Selection_2 == "Gram") 
        {                
            var result = parseFloat((inputVal * 453.59237).toFixed(10));
            outputVal.value = result;
        }
        else if ( Selection_2 == "Kilogram") 
        {
            var result = parseFloat((inputVal * 0.45359237).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Metric Ton") 
        {
            var result = parseFloat((inputVal * 0.0004535924).toFixed(10));
            outputVal.value = result;
        }

        else if( Selection_2 == "Ounce") 
        {
            var result = parseFloat((inputVal * 16).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Short Ton") 
        {
            var result = parseFloat((inputVal * 0.0005).toFixed(10));
            outputVal.value = result;
        } 
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Pound " + " = " + outputVal.value + " " + Selection_2;
    } 

    //shortton conversion
    function shorttonConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if( Selection_2 == "Gram") 
        {                
            var result = parseFloat((inputVal * 907184.74).toFixed(10));
            outputVal.value = result;
        }
        else if ( Selection_2 == "Kilogram") 
        {
            var result = parseFloat((inputVal * 907.18474).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Metric Ton") 
        {
            var result = parseFloat((inputVal * 0.90718474).toFixed(10));
            outputVal.value = result;
        }

        else if( Selection_2 == "Ounce") 
        {
            var result = parseFloat((inputVal * 32000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Pound") 
        {
            var result = parseFloat((inputVal *2000).toFixed(10));
            outputVal.value = result;
        } 
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Short Ton " + " = " + outputVal.value + " " + Selection_2;
    } 

//volume conversion
function volumeConverter() {
    var inputVal = document.getElementById("input").value;
    var outputVal = document.getElementById("output");

    var selectFrom = document.getElementById("from");
    var selectTo = document.getElementById("to");

    var Selection_1 = selectFrom[selectFrom.selectedIndex].value;
    var Selection_2 = selectTo[selectTo.selectedIndex].value;

    //milliter
    if (Selection_1 == "milliliter" && Selection_2 == "milliliter") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "milliliter" && Selection_2 == "liter") 
    {
        var result = parseFloat((inputVal * 0.001).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "milliliter" && Selection_2 == "cubic meter") 
    {
        var result = parseFloat((inputVal * 1e-6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "milliliter" && Selection_2 == "cubic foot") 
    {
        var result = parseFloat((inputVal / 28316.846592).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "milliliter" && Selection_2 == "cubic yard") 
    {
        var result = parseFloat((inputVal / 764554.85798).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "milliliter" && Selection_2 == "gallon") 
    {
        var result = parseFloat((inputVal / 3785.41178).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "milliliter" && Selection_2 == "fluid ounce") 
    {
        var result = parseFloat((inputVal / 29.5735296).toFixed(10));
        outputVal.value = result;
    }
    //liter
    else if(Selection_1 == "liter" && Selection_2 == "milliliter") 
    {
        var result = parseFloat((inputVal * 1000).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "liter" && Selection_2 == "liter") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "liter" && Selection_2 == "cubic meter") 
    {
        var result = parseFloat((inputVal * 0.001).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "liter" && Selection_2 == "cubic foot") 
    {
        var result = parseFloat((inputVal * 0.0353146667).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "liter" && Selection_2 == "cubic yard") 
    {
        var result = parseFloat((inputVal * 0.0013079506).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "liter" && Selection_2 == "gallon") 
    {
        var result = parseFloat((inputVal * 0.2641720524).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "liter" && Selection_2 == "fluid ounce") 
    {
        var result = parseFloat((inputVal * 33.81402270).toFixed(10));
        outputVal.value = result;
    }
    //cubic meter
    else if(Selection_1 == "cubic meter" && Selection_2 == "cubic meter") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        var result = inputVal * 1;
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic meter" && Selection_2 == "milliliter") 
    {
        var result = parseFloat((inputVal * 1e+6).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic meter" && Selection_2 == "liter") 
    {
        var result = parseFloat((inputVal *1000).toFixed(10));
        var result = inputVal * 1000;
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic meter" && Selection_2 == "cubic foot") 
    {
        var result = parseFloat((inputVal *35.314666721).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic meter" && Selection_2 == "cubic yard") 
    {
        var result = parseFloat((inputVal *1.3079506193).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic meter" && Selection_2 == "gallon") 
    {
        var result = parseFloat((inputVal *264.17205236).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic meter" && Selection_2 == "fluid ounce") 
    {
        var result = parseFloat((inputVal *33814.022702).toFixed(10));
        outputVal.value = result;
    }
    //cubic foot
    else if(Selection_1 == "cubic foot" && Selection_2 == "cubic foot") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic foot" && Selection_2 == "cubic meter") 
    {
        var result = parseFloat((inputVal * 0.0283168466).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic foot" && Selection_2 == "milliliter") 
    {
        var result = parseFloat((inputVal * 28316.846592).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic foot" && Selection_2 == "liter") 
    {
        var result = parseFloat((inputVal * 28.316846592).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic foot" && Selection_2 == "cubic yard") 
    {
        var result = parseFloat((inputVal / 27).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic foot" && Selection_2 == "gallon") 
    {
        var result = parseFloat((inputVal * 7.4805194805).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic foot" && Selection_2 == "fluid ounce") 
    {
        var result = parseFloat((inputVal * 957.50649351).toFixed(10));
        outputVal.value = result;
    }
    //cubic yard
    else if(Selection_1 == "cubic yard" && Selection_2 == "milliliter") 
    {
        var result = parseFloat((inputVal * 764554.85798).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic yard" && Selection_2 == "liter") 
    {
        var result = parseFloat((inputVal * 764.55485798).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic yard" && Selection_2 == "cubic meter") 
    {
        var result = parseFloat((inputVal * 0.764554858).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic yard" && Selection_2 == "cubic foot") 
    {
        var result = parseFloat((inputVal * 27).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic yard" && Selection_2 == "cubic yard") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic yard" && Selection_2 == "gallon") 
    {
        var result = parseFloat((inputVal * 201.97402597).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "cubic yard" && Selection_2 == "fluid ounce") 
    {
        var result = parseFloat((inputVal * 25852.675325).toFixed(10));
        outputVal.value = result;
    }
    //gallon
    else if(Selection_1 == "gallon" && Selection_2 == "milliliter") 
    {
        var result = parseFloat((inputVal * 3785.411784).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gallon" && Selection_2 == "liter") 
    {
        var result = parseFloat((inputVal * 3.785411784).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gallon" && Selection_2 == "cubic meter") 
    {
        var result = parseFloat((inputVal * 0.0037854118).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gallon" && Selection_2 == "cubic foot") 
    {
        var result = parseFloat((inputVal * 0.1336805556).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gallon" && Selection_2 == "cubic yard") 
    {
        var result = parseFloat((inputVal * 0.0049511317).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gallon" && Selection_2 == "gallon") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "gallon" && Selection_2 == "fluid ounce") 
    {
        var result = parseFloat((inputVal * 128).toFixed(10));
        outputVal.value = result;
    }
    //fluid ounce
    else if(Selection_1 == "fluid ounce" && Selection_2 == "milliliter") 
    {
        var result = parseFloat((inputVal * 29.573529562).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "fluid ounce" && Selection_2 == "liter") 
    {
        var result = parseFloat((inputVal * 0.0295735296).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "fluid ounce" && Selection_2 == "cubic meter") 
    {
        var result = parseFloat((inputVal * 0.0000295735).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "fluid ounce" && Selection_2 == "cubic foot") 
    {
        var result = parseFloat((inputVal * 0.0010443793).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "fluid ounce" && Selection_2 == "cubic yard") 
    {
        var result = parseFloat((inputVal * 0.0000386807).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "fluid ounce" && Selection_2 == "gallon") 
    {
        var result = parseFloat((inputVal / 128).toFixed(10));
        outputVal.value = result;
    }
    else if(Selection_1 == "fluid ounce" && Selection_2 == "fluid ounce") 
    {
        var result = parseFloat((inputVal * 1).toFixed(10));
        outputVal.value = result;
    }
}

    //milliliter ml conversion
    function mlConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");

        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;

        if ( Selection_2 == "Liter") 
        {
            var result = parseFloat((inputVal / 1000).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Meter") 
        {
            var result = parseFloat((inputVal / 1e+6).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Foot") 
        {
            var result = parseFloat((inputVal / 28320).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Yard") 
        {
            var result = parseFloat((inputVal / 764600).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Gallon") 
        {
            var result = parseFloat((inputVal / 3785).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Fluid Ounce") 
        {
            var result = parseFloat((inputVal / 29.574).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Milliliter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //liter conversion
    function literConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Milliliter") 
        {
            var result = inputVal * 1000;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Meter") 
        {
            var result = inputVal / 1000;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Foot") 
        {
            var result = (inputVal / 28.317).toFixed(10);
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Yard") 
        {
            var result = (inputVal / 764.6).toFixed(10);
            outputVal.value = result;
        }
        else if( Selection_2 == "Gallon") 
        {
            var result = (inputVal / 3.785).toFixed(10);
            outputVal.value = result;
        }
        else if( Selection_2 == "Fluid Ounce") 
        {
            var result = inputVal * 33.814;
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Liter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //cubic meter conversion
    function m3Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Milliliter") 
        {
            var result = inputVal * 1e+6;
            outputVal.value = result;
        }
        else if( Selection_2 == "Liter") 
        {
            var result = inputVal * 1000;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Foot") 
        {
            var result = inputVal * 35.315;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Yard") 
        {
            var result = (inputVal * 1.308).toFixed(3);
            outputVal.value = result;
        }
        else if( Selection_2 == "Gallon") 
        {
            var result = (inputVal * 264.2).toFixed(2);
            outputVal.value = result;
        }
        else if( Selection_2 == "Fluid Ounce") 
        {
            var result = inputVal * 33810;
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Cubic Meter " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //fluid ounce conversion
    function flozConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Milliliter") 
        {
            var result = inputVal * 29.574;
            outputVal.value = result;
        }
        else if( Selection_2 == "Liter") 
        {
            var result = inputVal / 33.814;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Meter") 
        {
            var result = inputVal / 33810;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Foot") 
        {
            var result = inputVal / 957.5;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Yard") 
        {
            var result = inputVal / 25850;
            outputVal.value = result;
        }
        else if( Selection_2 == "Gallon") 
        {
            var result = inputVal / 128;
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Fluid Ounce " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //gallon conversion
    function galConversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Milliliter") 
        {
            var result = inputVal * 3785;
            outputVal.value = result;
        }
        else if( Selection_2 == "Liter") 
        {
            var result = inputVal * 3.785;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Meter") 
        {
            var result = inputVal /  264.2;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Foot") 
        {
            var result = inputVal / 7.48;
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Yard") 
        {
            var result = inputVal / 202;
            outputVal.value = result;
        }
        else if( Selection_2 == "Fluid Ounce") 
        {
            var result = inputVal * 128;
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Gallon " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //cubic foot conversion
    function ft3Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Milliliter") 
        {
            var result = parseFloat((inputVal * 28316.8466).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Liter") 
        {
            var result = parseFloat((inputVal * 28.3168466).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Meter") 
        {
            var result = parseFloat((inputVal * 0.0283168466).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Yard") 
        {
            var result = parseFloat((inputVal / 27).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Gallon") 
        {
            var result = parseFloat((inputVal * 7.480519).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Fluid Ounce") 
        {
            var result = parseFloat((inputVal * 957.50694476).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Cubic Foot " + " = " + outputVal.value + " " + Selection_2 ;
    }

    //cubic yard conversion
    function yd3Conversion() {
        var inputVal = document.getElementById("input").value;
        var outputVal = document.getElementById("output");
    
        var selectTo = document.getElementById("to");
        var Selection_2 = selectTo[selectTo.selectedIndex].value;
    
        if ( Selection_2 == "Milliliter") 
        {
            var result = parseFloat((inputVal * 764600).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Liter") 
        {
            var result = parseFloat((inputVal * 764.6).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Meter") 
        {
            var result = parseFloat((inputVal /  1.308).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Cubic Foot") 
        {
            var result = parseFloat((inputVal * 27).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Gallon") 
        {
            var result = parseFloat((inputVal * 202).toFixed(10));
            outputVal.value = result;
        }
        else if( Selection_2 == "Fluid Ounce") 
        {
            var result = parseFloat((inputVal *  25850).toFixed(10));
            outputVal.value = result;
        }
        document.getElementById("res").innerHTML = "<b>Result: </b>" + inputVal + " Cubic Yard " + " = " + outputVal.value + " " + Selection_2 ;
    }
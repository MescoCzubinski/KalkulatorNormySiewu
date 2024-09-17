const visited = document.querySelectorAll('input, select');
visited.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value){
            this.classList.add('visited');
        }
        else{
            this.classList.remove('visited');
        }
    });
});

function textToNumber(variable) {
    variable = variable.replace(/[^0-9.,]/g, '');
    if (variable.includes(",")) {
        variable = variable.replace(",", ".");
    }
    return oneDot(variable);
}

function isPercent(variable) {
    return variable > 100 ? "" : variable;
}

function onlyInteger(variable) {
    return variable.includes(".") ? variable.replace(".", "") : variable;
}

function oneDot(variable){
    const firstDotIndex = variable.indexOf('.');

    if (firstDotIndex === -1) return variable;

    var beforeDot = variable.slice(0, firstDotIndex+1);
    var afterDot = variable.slice(firstDotIndex+1);
    afterDot = afterDot.replace(".", "");
    afterDot = afterDot.slice(0, 2);

    return beforeDot + afterDot;
}

let timeoutID;
function waiting() {
    timeoutID = setTimeout(function() {
        var sowingRateElement = document.getElementById("sowingRate");
        if (sowingRateElement.innerHTML === "") {
            sowingRateElement.classList.add("tooBig");
            sowingRateElement.innerHTML = "uzupełnij wartości";
        }
    }, 5000);
}
function resetTimeout() {
    clearTimeout(timeoutID);
    waiting();
}
window.addEventListener('input', resetTimeout);
window.addEventListener('click', resetTimeout);

function calculate() {
    const grainMassElement = document.getElementById("grainMass");
    const grainDensityElement = document.getElementById("grainDensity");
    const germinationStrengthElement = document.getElementById("germinationStrength");
    const grainPurityElement = document.getElementById("grainPurity");
    const grainOriginElement = document.getElementById("grainOrigin");
    const soilElement = document.getElementById("soil");
    const sowingTermElement = document.getElementById("sowingTerm");
    const varietyTypeElement = document.getElementById("varietyType");
    const areaElement = document.getElementById("area");
    const sowingRateElement = document.getElementById("sowingRate");
    const grainDemandElement = document.getElementById("grainDemand");

    let grainMass = textToNumber(grainMassElement.value); 
    grainMassElement.value = grainMass;

    let grainDensity = textToNumber(grainDensityElement.value);
    grainDensity = onlyInteger(grainDensity);
    grainDensityElement.value = grainDensity;

    let germinationStrength = textToNumber(germinationStrengthElement.value);
    germinationStrength = isPercent(germinationStrength);
    germinationStrengthElement.value = germinationStrength;

    let grainPurity = textToNumber(grainPurityElement.value);
    grainPurity = isPercent(grainPurity);
    grainPurityElement.value = grainPurity;
    
    let grainOrigin = textToNumber(grainOriginElement.value);
    grainOriginElement.value = grainOrigin;
    
    let soil = textToNumber(soilElement.value);
    soilElement.value = soil;
    
    let sowingTerm = textToNumber(sowingTermElement.value);
    sowingTermElement.value = sowingTerm;
    
    let varietyType = textToNumber(varietyTypeElement.value);
    varietyTypeElement.value = varietyType;
    
    let area = textToNumber(areaElement.value);
    areaElement.value = area;


    let sowingRate = (grainMass * grainDensity) / (germinationStrength * grainPurity * grainOrigin * soil * sowingTerm * varietyType);
    sowingRate = Math.round(sowingRate * 10000) / 100;

    if (isNaN(sowingRate) || sowingRate === Infinity || sowingRate === 0) {
        sowingRateElement.classList.add('incomplete');
        sowingRateElement.innerHTML = "";
    } else {
        sowingRateElement.classList.remove('incomplete');
        if (sowingRate > 99999) {
            sowingRateElement.classList.add('tooBig');
            sowingRateElement.innerHTML = "oj, nie przesadzaj!";
        } else {
            sowingRateElement.classList.remove('tooBig'); 
            sowingRateElement.innerHTML = sowingRate + " kg/ha";
        }
    }
    
    let result = sowingRate * area;
    result = Math.round(result * 100) / 100;

    if (result > 99999999) {
        grainDemandElement.classList.add('tooBig');
        grainDemandElement.innerHTML = "oj, nie przesadzaj!";
    } else {
        grainDemandElement.classList.remove('tooBig');
        if (!isNaN(result)) {
            grainDemandElement.innerHTML = result + " kg";
        }
    }
}

function reset() {
    const elements = ["grainMass", "grainDensity", "germinationStrength", "grainPurity", "grainOrigin", "soil", "sowingTerm", "varietyType", "area"];

    elements.forEach(id => {
        const element = document.getElementById(id);
        element.value = "";
        element.classList.remove('visited');
    });

    document.getElementById("sowingRate").innerHTML = "";
    document.getElementById("grainDemand").innerHTML = "";
}
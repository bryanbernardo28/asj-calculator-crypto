function calculate(){
    let direction = $("#select-direction").val();
    let entryValue = $("#input-entry-value").val();
    let pipsTarget = $("#input-pips-target").val();
    let takeProfit = $("#input-take-profit");
    pipsTarget = pipsTarget*10;

    let decimalPlaces = entryValue.split(".")[0].length;

    let intEntryValue = parseInt(entryValue.replace(".",""));

    let calculate = direction == "1" ? intEntryValue+pipsTarget : intEntryValue-pipsTarget;
    // takeProfit.attr("placeholder", calculate.toFixed(5)).focus();
    let stringCalc = calculate.toString().substr(0, decimalPlaces) + "." + calculate.toString().substr(decimalPlaces);
    takeProfit.val(stringCalc).focus();
}

function resetCalculate(){
    $("#select-direction").val("0");
    $("#input-entry-value").val("");
    $("#input-pips-target").val("");
    $("#input-take-profit").val("");
}

function compute(){
    let direction = $("#select-direction-compute").val();
    let entryValue = $("#input-entry-value-compute").val();
    let takeProfitValue = $("#input-take-profit-compute").val();
    let pips = $("#input-pips");

    let decimalPlaces = entryValue.split(".")[0].length;

    let entryValueInt = parseInt(entryValue.replace(".",""));
    let takeProfitValueInt = parseInt(takeProfitValue.replace(".",""));

    let compute = direction == "1" ? takeProfitValueInt-entryValueInt : entryValueInt-takeProfitValueInt;
    compute = compute/10;
    pips.val(compute).focus();
}

function resetCompute(){
    $("#select-direction-compute").val("0");
    $("#input-entry-value-compute").val("");
    $("#input-take-profit-compute").val("");
    $("#input-pips").val("");
}

function toFixedNoRounding(number, precision = 2){
    const factor = Math.pow(10,precision);
    return Math.floor(number * factor) / factor;
}

function computeTargets(){
    let capitalValue = parseFloat($("#input-capital").val());
    let computeLotSize = capitalValue/2130;
    // let timesLotSize = toFixedNoRounding(computeLotSize) * 10;
    let with2Decimals = computeLotSize.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    let timesLotSize = (with2Decimals*10).toFixed(2);



    console.log(with2Decimals);
    // console.log(timesLotSize);
    let commission = with2Decimals*100;
    $("#commission").val(commission).focus();

    $('#input-six-pips').val("With commission: "+(timesLotSize*20).toFixed(1)+" Without Commission: "+((timesLotSize*20).toFixed(1)-commission)).focus();
    $('#input-seven-pips').val("With commission: "+(timesLotSize*21).toFixed(1)+" Without Commission: "+((timesLotSize*21).toFixed(1)-commission)).focus();
    $('#input-eight-pips').val("With commission: "+(timesLotSize*22).toFixed(1)+" Without Commission: "+((timesLotSize*22).toFixed(1)-commission)).focus();
    $('#input-nine-pips').val("With commission: "+(timesLotSize*23).toFixed(1)+" Without Commission: "+((timesLotSize*23).toFixed(1)-commission)).focus();
    $('#input-ten-pips').val("With commission: "+(timesLotSize*24).toFixed(1)+" Without Commission: "+((timesLotSize*24).toFixed(1)-commission)).focus();
    $('#input-eleven-pips').val("With commission: "+(timesLotSize*25).toFixed(1)+" Without Commission: "+((timesLotSize*25).toFixed(1)-commission)).focus();
    $('#input-twelve-pips').val("With commission: "+(timesLotSize*26).toFixed(1)+" Without Commission: "+((timesLotSize*26).toFixed(1)-commission)).focus();
    $('#input-thirteen-pips').val("With commission: "+(timesLotSize*27).toFixed(1)+" Without Commission: "+((timesLotSize*27).toFixed(1)-commission)).focus();
    $('#input-fourteen-pips').val("With commission: "+(timesLotSize*28).toFixed(1)+" Without Commission: "+((timesLotSize*28).toFixed(1)-commission)).focus();
    $('#input-fifteen-pips').val("With commission: "+(timesLotSize*29).toFixed(1)+" Without Commission: "+((timesLotSize*29).toFixed(1)-commission)).focus();

    $('#input-sixfive-pips').val("With commission: "+(timesLotSize*20.5).toFixed(1)+" Without Commission: "+((timesLotSize*20.5).toFixed(1)-commission)).focus();
    $('#input-sevenfive-pips').val("With commission: "+(timesLotSize*21.5).toFixed(1)+" Without Commission: "+((timesLotSize*21.5).toFixed(1)-commission)).focus();
    $('#input-eightfive-pips').val("With commission: "+(timesLotSize*22.5).toFixed(1)+" Without Commission: "+((timesLotSize*22.5).toFixed(1)-commission)).focus();
    $('#input-ninefive-pips').val("With commission: "+(timesLotSize*23.5).toFixed(1)+" Without Commission: "+((timesLotSize*23.5).toFixed(1)-commission)).focus();
    $('#input-tenfive-pips').val("With commission: "+(timesLotSize*24.5).toFixed(1)+" Without Commission: "+((timesLotSize*24.5).toFixed(1)-commission)).focus();
    $('#input-elevenfive-pips').val("With commission: "+(timesLotSize*25.5).toFixed(1)+" Without Commission: "+((timesLotSize*25.5).toFixed(1)-commission)).focus();
    $('#input-twelvefive-pips').val("With commission: "+(timesLotSize*26.5).toFixed(1)+" Without Commission: "+((timesLotSize*26.5).toFixed(1)-commission)).focus();
    $('#input-thirteenfive-pips').val("With commission: "+(timesLotSize*27.5).toFixed(1)+" Without Commission: "+((timesLotSize*27.5).toFixed(1)-commission)).focus();
    $('#input-fourteenfive-pips').val("With commission: "+(timesLotSize*28.5).toFixed(1)+" Without Commission: "+((timesLotSize*28.5).toFixed(1)-commission)).focus();

    $("#lot-size").val(computeLotSize).focus();
}

function resetComputeTargets(){
    $("#lot-size").val("");
    $("#input-capital").val("");
    $('#input-six-pips').val("");
    $('#input-seven-pips').val("");
    $('#input-eight-pips').val("");
    $('#input-nine-pips').val("");
    $('#input-ten-pips').val("");
    $('#input-eleven-pips').val("");
    $('#input-twelve-pips').val("");
    $('#input-thirteen-pips').val("");
    $('#input-fourteen-pips').val("");
    $('#input-fifteen-pips').val("");

    $('#input-sixfive-pips').val("");
    $('#input-sevenfive-pips').val("");
    $('#input-eightfive-pips').val("");
    $('#input-ninefive-pips').val("");
    $('#input-tenfive-pips').val("");
    $('#input-elevenfive-pips').val("");
    $('#input-twelvefive-pips').val("");
    $('#input-thirteenfive-pips').val("");
    $('#input-fourteenfive-pips').val("");
    $("#commission").val("");
}
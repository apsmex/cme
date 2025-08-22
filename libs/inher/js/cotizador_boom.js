// LLAMA AL VALOR DEL CAMPO 
function onKeyPressMontoBoom(e,numero){              
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".")!=+1 && keychar=="."){ 
        return false;
    }else{
        return reg.test(keychar);
    }
}

// CAMBIA EL CAMPO A MONEDA SEPARADO POR COMAS
function formatToCurrency(amount) {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(amount);
}

// ******************** FORMULA ***********************

function calculaRangoIn(numero){

    // VARIABES
    let montoBoom          = document.getElementById('montoBoom').value;
    let garantiaPorcentaje = 1.25;
    let porcentaje         = 0.09;
    let diasAno            = 360;
    let diasMes            = 30;
    let errorMonto = 'El monto inicial no puede ser menor a $400 o mayor a $100,000';

    // Formula
    let garantia = montoBoom * garantiaPorcentaje;

    // FORMULA INTERES BRUTO ANTES DE IMPUESTOS
    // FORMULA RENDIMIENTO ANUAL
    let ibai = ((garantia * porcentaje)/diasAno)*diasMes;
    let resulMesUno = Number(ibai) + Number(garantia);
    // console.log(resulMesUno);
    let ibaiDos = ((resulMesUno * porcentaje)/diasAno)*diasMes;
    // console.log(ibaiDos);
    let resulMesDos = Number(ibaiDos) + Number(ibai) + Number(garantia);
    // console.log(resulMesDos);
    let ibaiTres = ((resulMesDos * porcentaje)/diasAno)*diasMes;
    let resulMesTres = Number(ibaiDos) + Number(ibaiTres) + Number(garantia);
    // console.log(resulMesTres);
    let ibaiCuatro = ((resulMesTres * porcentaje)/diasAno)*diasMes;
    let resulMesCuatro = Number(resulMesTres) + Number(ibaiCuatro);
    // console.log(resulMesCuatro);
    let ibaiCinco = ((resulMesCuatro * porcentaje)/diasAno)*diasMes;
    let resulMesCinco = Number(resulMesCuatro) + Number(ibaiCinco);
    // console.log(resulMesCinco);
    let ibaiSeis = ((resulMesCinco * porcentaje)/diasAno)*diasMes;
    let resulMesSeis = Number(resulMesCinco) + Number(ibaiSeis);
    // console.log(resulMesSeis);
    let ibaiSiete = ((resulMesSeis * porcentaje)/diasAno)*diasMes;
    let resulMesSiete = Number(resulMesSeis) + Number(ibaiSiete);
    // console.log(resulMesSiete);
    let ibaiOcho = ((resulMesSiete * porcentaje)/diasAno)*diasMes;
    let resulMesOcho = Number(resulMesSiete) + Number(ibaiOcho);
    // console.log(resulMesOcho);
    let ibaiNueve = ((resulMesOcho * porcentaje)/diasAno)*diasMes;
    let resulMesNueve = Number(resulMesOcho) + Number(ibaiNueve);
    // console.log(resulMesNueve);
    let ibaiDiez = ((resulMesNueve * porcentaje)/diasAno)*diasMes;
    let resulMesDiez = Number(resulMesNueve) + Number(ibaiDiez);
    // console.log(resulMesDiez);
    let ibaiOnce = ((resulMesDiez * porcentaje)/diasAno)*diasMes;
    let resulMesOnce = Number(resulMesDiez) + Number(ibaiOnce);
    // console.log(resulMesOnce);
    let ibaiDoce = ((resulMesOnce * porcentaje)/diasAno)*diasMes;
    // console.log(ibaiDoce);
    let resulMesDoce = Number(resulMesOnce) + Number(ibaiDoce);
    // console.log(resulMesDoce);
    let ibaiTrece = ((resulMesDoce * porcentaje)/diasAno)*diasMes;
    // console.log(ibaiTrece);
    let amortAnual =  Number(ibaiDos) + Number(ibaiTres) + Number(ibaiCuatro) + Number(ibaiCinco) + Number(ibaiSeis) + Number(ibaiSiete) + Number(ibaiOcho) + Number(ibaiNueve) + Number(ibaiDiez) + Number(ibaiOnce) + Number(ibaiDoce) + Number(ibaiTrece);
    // FORMULA RENDIMIENTO MENSUAL
    let rendimientoM = amortAnual / 12;
    // FORMULA INTERES BRUTO ANTES DE IMPUESTOS

    // let montoCap = (garantia + ibai);
    $('#garantia').html(formatToCurrency(garantia));
    $('#retiros').html(formatToCurrency(amortAnual));
    $('#rendimientoM').html(formatToCurrency(rendimientoM));

    // VCALIDACIÓN ERROR
    if(numero <= 399) {
        $('#errorM').html(errorMonto);
        document.getElementById("garantia").style.display = "none";
        document.getElementById("garantia").style.display = "none";
        document.getElementById("retiros").style.display = "none";
        document.getElementById("rendimientoM").style.display = "none";
    }

    if(numero >= 400) { 
        // document.getElementById("errorM").style.display = "none";
        $('#errorM').html("");
        document.getElementById("garantia").style.display = "";
        document.getElementById("garantia").style.display = "";
        document.getElementById("retiros").style.display = "";
        document.getElementById("rendimientoM").style.display = "";
    } else {
        return false;
    }

    if(numero >= 100001) { 
        // document.getElementById("errorM").style.display = "";
        $('#errorD').html('No puedes pedir más de $100,000');
        document.getElementById("garantia").style.display = "none";
        document.getElementById("retiros").style.display = "none";
        document.getElementById("rendimientoM").style.display = "none";
    } else {
        // return false;
        $('#errorD').html('');
        document.getElementById("garantia").style.display = "";
        document.getElementById("retiros").style.display = "";
        document.getElementById("rendimientoM").style.display = "";
    }
}
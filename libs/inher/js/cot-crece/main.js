/* **********************************************************************************

***************************************  INVERSIÓN  ********************************* */


function onKeyPressRangoOn(e,numero){              
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".")!=+1 && keychar=="."){ 
        return false;
    }else{
        return reg.test(keychar);
    }
}

function onKeyPressRangoAd(e,adicionalAd){              
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (adicionalAd.indexOf(".")!=+1 && keychar=="."){ 
        return false;
    }else{
        return reg.test(keychar);
    }
}
// CANTIDAD EN MONEDA

function formatToCurrency(amount) {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);
    return numberFormat.format(amount);
}

// window.onload = function() {
//     imprimirValor();
//   }

//   function imprimirValor(numero){
  
//     // var btnCalcular = document.getElementById('plazoMeses');
//     // btnCalcular.addEventListener('change', () => {
//     //     imprimirValor();
//     // })
//     // console.log(lop);

//     var select = document.getElementById("plazoMeses").value;
//     console.log(select);
//     var lup = document.getElementById('monAdiconalFinal').value;
//     if(lup >= 10000){
    
//         console.log("jsisji");
//     }


//     switch(select){
//         case "1":

//             var mesUno = ["Mes 1", lup, 2000];
//             anychart.onDocumentReady(function () {
//                 /* Para obtener el valor */
//                 var data = anychart.data.set([
//                     mesUno,
//                     ["February", 15000, 12000],
//                     ["March", 16000, 18000],
//                     ["April", 15000, 11000],
//                     ["May", 14000, 9000]
//                 ]);

//                 // map the data
//                 var seriesData_1 = data.mapAs({x: 0, value: 1});
//                 var seriesData_2 = data.mapAs({x: 0, value: 2});

//                 // create a chart
//                 var chart = anychart.area();

//                 // set the interactivity mode
//                 chart.interactivity().hoverMode("single");

//                 // create the first series, set the data and name
//                 var series1 = chart.area(seriesData_1);
//                 series1.name("2004");

//                 // configure the visual settings of the first series
//                 series1.normal().fill("#00cc99", 0.3);
//                 series1.hovered().fill("#00cc99", 0.1);
//                 series1.selected().fill("#00cc99", 0.5);
//                 series1.normal().stroke("#00cc99", 1, "10 5", "round");
//                 series1.hovered().stroke("#00cc99", 2, "10 5", "round");
//                 series1.selected().stroke("#00cc99", 4, "10 5", "round");

//                 // create the second series, set the data and name  
//                 var series2 = chart.area(seriesData_2);
//                 series2.name("2005");

//                 // configure the visual settings of the second series
//                 series2.normal().fill("#0066cc", 0.3);
//                 series2.hovered().fill("#0066cc", 0.1);
//                 series2.selected().fill("#0066cc", 0.5);
//                 series2.normal().hatchFill("forward-diagonal", "#0066cc", 1, 15);
//                 series2.hovered().hatchFill("forward-diagonal", "#0066cc", 1, 15);
//                 series2.selected().hatchFill("forward-diagonal", "#0066cc", 1, 15);
//                 series2.normal().stroke("#0066cc");
//                 series2.hovered().stroke("#0066cc", 2);
//                 series2.selected().stroke("#0066cc", 4);

//                 // set the chart title
//                 chart.title("Area Chart: Appearance");

//                 // set the titles of the axes
//                 chart.xAxis().title("Month");
//                 chart.yAxis().title("Sales, $");

//                 // set the container id
//                 chart.container("container");

//                 // initiate drawing the chart
//                 chart.draw();





//             });
//         break;
//     }

//   }


// grafica


// FUNCION MONTOINICIAL

function calculaRangoOn(numero){
    var btnCalcular = document.getElementById('plazoMeses');
    btnCalcular.addEventListener('change', () => {
        calculaRangoOn(numero);
    })

    var selectOpciones = document.getElementById('plazoMeses').value;
    // MONTOS DE 100 A 10,000 PESOS
    if(selectOpciones == 1 || selectOpciones == 3 || selectOpciones == 6 || selectOpciones == 12 || selectOpciones == 18 || selectOpciones == 24){
        $('#vasINver').html("Vas a invertir de $100 a $50,000");
        if (numero === 10000) {
        // TASAS PORCENTAJE
        let tasaPor = [0.050, 0.050, 0.050, 0.060, 0.0650, 0.070];
        // TASAS EN DECIMAS TASAS FIJAS
        let tasasDec = [5.00, 5.00, 5.00, 6.00, 6.50, 7.00];
        
        // SWICH
        switch (selectOpciones){
            case "1":
                // PLAZO A UN MES
                var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                var resultadoTotal = capUno;
                // FIN PLAZO A UN MES
                $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                if (numero <= 99){
                    span = document.getElementById('resuladoCero');
                    span.style.color = 'transparent';
                }else{
                    span = document.getElementById('resuladoCero');
                    span.style.color = '#00BFB2';
                }
                break;
                case "3":
                // PLAZO A TRES MESES
                var capUno = (((numero * tasaPor[1]) / 360) * 30);
                var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                var resultadoTotal = (capUno) + (capDos ) + (captres);
                // FIN PLAZO A TRES MESES
                $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                if (numero <= 99){
                    span = document.getElementById('resuladoCero');
                    span.style.color = 'transparent';
                }else{
                    span = document.getElementById('resuladoCero');
                    span.style.color = '#00BFB2';
                }
                break;
                case "6":
                // PLAZO A SEIS MESES
                var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                var resultadoTotal = capSeis + (numero * 1);
                // FIN PLAZO A SEIS MESES
                $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                if (numero <= 99){
                    span = document.getElementById('resuladoCero');
                    span.style.color = 'transparent';
                }else{
                    span = document.getElementById('resuladoCero');
                    span.style.color = '#00BFB2';
                }
                break;
                case "12":
                // PLAZO A DOCE MESES
                var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                var resultadoTotal = capDoce + (numero * 1);
                // FIN PLAZO A DOCE MESES
                $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                if (numero <= 99){
                    span = document.getElementById('resuladoCero');
                    span.style.color = 'transparent';
                }else{
                    span = document.getElementById('resuladoCero');
                    span.style.color = '#00BFB2';
                }
                break;
                case "18":
                // PLAZO A DIEZ Y OCHO MESES
                var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                var  resultadoTotal = capDieciocho + (numero * 1);
                // FIN PLAZO A DIEZ Y OCHO MESES
                $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                if (numero <= 99){
                    span = document.getElementById('resuladoCero');
                    span.style.color = 'transparent';
                }else{
                    span = document.getElementById('resuladoCero');
                    span.style.color = '#00BFB2';
                }
                break;
                case "24":
                // PLAZO A VEINTICUATRO MESES
                var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                var resultadoTotal = capVeinticuatro + (numero * 1);
                // FIN PLAZO A VEINTICUATRO MESES
                $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                if (numero <= 99){
                    span = document.getElementById('resuladoCero');
                    span.style.color = 'transparent';
                }else{
                    span = document.getElementById('resuladoCero');
                    span.style.color = '#00BFB2';
                    span.style.fontWeight = '900';
                }
                break;
            }
        // RESULTADO TOTAL
        $('#resuladoCero').html(resultadoTotal.toFixed(2));
        return resultadoTotal;
    }
    /* FIN MONTOS DE 100 A 10,000 */

    /* MONTOS DE 10,001 A 50,000 */
    if (numero >= 10001 && numero <= 50000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1050, 0.1200, 0.1250, 0.1350, 0.1360, 0.1380];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.50, 12.00, 12.50, 13.50, 13.60, 13.80];
            
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "3":
                    // PLAZO A TRES MESES
                    var capUno = (((numero * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotal = capSeis + (numero * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                    var resultadoTotal = capDoce + (numero * 1);
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                    var  resultadoTotal = capDieciocho + (numero * 1);
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                    var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                    var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                    var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                    var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                    var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                    var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                    var resultadoTotal = capVeinticuatro + (numero * 1);
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                $('#resuladoCero').html(resultadoTotal.toFixed(2));
                return resultadoTotal;
            }
            /* FIN MONTOS DE 10,001 A 50,000 */

            /* MONTOS DE 50,001 A 250,000 */
            if (numero >= 50001 && numero <= 250000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1050, 0.1200, 0.1250, 0.1350, 0.1360, 0.1380];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.50, 12.00, 12.50, 13.50, 13.60, 13.80];
            
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "3":
                    // PLAZO A TRES MESES
                    var capUno = (((numero * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotal = capSeis + (numero * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                    var resultadoTotal = capDoce + (numero * 1);
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                    var  resultadoTotal = capDieciocho + (numero * 1);
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                    var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                    var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                    var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                    var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                    var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                    var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                    var resultadoTotal = capVeinticuatro + (numero * 1);
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                $('#resuladoCero').html(resultadoTotal.toFixed(2));
                return resultadoTotal;
            }
            /* FIN MONTOS DE 50,001 A 250,000 */

            /* MONTOS DE 250,001 A 500,000 */
            if (numero >= 250000 && numero <= 500000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1050, 0.1200, 0.1250, 0.1350, 0.1360, 0.1380];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.50, 12.00, 12.50, 13.50, 13.60, 13.80];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "3":
                    // PLAZO A TRES MESES
                    var capUno = (((numero * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotal = capSeis + (numero * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                    var resultadoTotal = capDoce + (numero * 1);
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                    var  resultadoTotal = capDieciocho + (numero * 1);
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                    var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                    var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                    var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                    var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                    var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                    var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                    var resultadoTotal = capVeinticuatro + (numero * 1);
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                $('#resuladoCero').html(resultadoTotal.toFixed(2));
                return resultadoTotal;
            }
            /*  FIN MONTOS DE 250,001 A 500,000 */

            /*  MONTOS DE 500,001 A 1,000,000 */
            if (numero >= 500000 && numero <= 1000000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1140, 0.1290, 0.1340, 0.1390, 0.1400, 0.1410];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [11.40, 12.90, 13.40, 13.90, 14.00, 14.10];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "3":
                    // PLAZO A TRES MESES
                    var capUno = (((numero * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotal = capSeis + (numero * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                    var resultadoTotal = capDoce + (numero * 1);
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                    var  resultadoTotal = capDieciocho + (numero * 1);
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                    var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                    var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                    var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                    var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                    var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                    var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                    var resultadoTotal = capVeinticuatro + (numero * 1);
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                $('#resuladoCero').html(resultadoTotal.toFixed(2));
                return resultadoTotal;
            }
            /*  FIN MONTOS DE 500,001 A 1,000,000 */

            /*  MONTOS DE 1,000,001 A 2,500,000 */
            if (numero >= 1000001 && numero <= 2500000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1160, 0.1310, 0.1360, 0.1410, 0.1420, 0.1430];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [11.60, 13.10, 13.60, 14.10, 14.20, 14.30];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "3":
                    // PLAZO A TRES MESES
                    var capUno = (((numero * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotal = capSeis + (numero * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                    var resultadoTotal = capDoce + (numero * 1);
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                    var  resultadoTotal = capDieciocho + (numero * 1);
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                    var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                    var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                    var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                    var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                    var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                    var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                    var resultadoTotal = capVeinticuatro + (numero * 1);
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                $('#resuladoCero').html(resultadoTotal.toFixed(2));
                return resultadoTotal;
            }
            /*  FIN MONTOS DE 1,000,001 A 2,500,000 */

            /* MONTOS DE 2,500,001 A 5,000,000 */
            if (numero >= 2500001 && numero <= 5000000) {
                // TASAS PORCENTAJE
                let tasaPor = [0.1190, 0.1340, 0.1390, 0.1440, 0.1450, 0.1460];
                // TASAS EN DECIMAS TASAS FIJAS
                let tasasDec = [11.90, 13.40, 13.90, 14.40, 14.50, 14.60];
                switch (selectOpciones){
                    case "1":
                        // PLAZO A UN MES
                        var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                        var resultadoTotal = capUno;
                        // FIN PLAZO A UN MES
                        $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                        if (numero <= 99){
                            span = document.getElementById('resuladoCero');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('resuladoCero');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                        // PLAZO A TRES MESES
                        var capUno = (((numero * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                        var resultadoTotal = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A TRES MESES
                        $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                        if (numero <= 99){
                            span = document.getElementById('resuladoCero');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('resuladoCero');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "6":
                        // PLAZO A SEIS MESES
                        var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotal = capSeis + (numero * 1);
                        // FIN PLAZO A SEIS MESES
                        $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                        if (numero <= 99){
                            span = document.getElementById('resuladoCero');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('resuladoCero');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "12":
                        // PLAZO A DOCE MESES
                        var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotal = capDoce + (numero * 1);
                        // FIN PLAZO A DOCE MESES
                        $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                        if (numero <= 99){
                            span = document.getElementById('resuladoCero');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('resuladoCero');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "18":
                        // PLAZO A DIEZ Y OCHO MESES
                        var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotal = capDieciocho + (numero * 1);
                        // FIN PLAZO A DIEZ Y OCHO MESES
                        $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                        if (numero <= 99){
                            span = document.getElementById('resuladoCero');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('resuladoCero');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "24":
                        // PLAZO A VEINTICUATRO MESES
                        var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotal = capVeinticuatro + (numero * 1);
                        // FIN PLAZO A VEINTICUATRO MESES
                        $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                        if (numero <= 99){
                            span = document.getElementById('resuladoCero');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('resuladoCero');
                            span.style.color = '#00BFB2';
                            span.style.fontWeight = '900';
                        }
                        break;
                    }
                // RESULTADO TOTAL
                $('#resuladoCero').html(resultadoTotal.toFixed(2));
                return resultadoTotal;
            }
            /* FIN MONTOS DE 2,500,001 A 5,000,000 */

            /* MONTOS DE 5,000,001 A 30,000,000 */
            if (numero >= 5000001 && numero <= 30000000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1200, 0.1350, 0.1400, 0.1450, 0.1460, 0.1470];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [12.00, 13.50, 14.00, 14.50, 14.60, 14.70];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((numero * tasaPor[0]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCero').html(tasasDec[0] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "3":
                    // PLAZO A TRES MESES
                    var capUno = (((numero * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (numero * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (numero * 1);
                    var resultadoTotal = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCero').html(tasasDec[1] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var capUno    = (((numero * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotal = capSeis + (numero * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCero').html(tasasDec[2] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var capUno    = (((numero * tasaPor[3]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                    var resultadoTotal = capDoce + (numero * 1);
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCero').html(tasasDec[3] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var capUno    = (((numero * tasaPor[4]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                    var  resultadoTotal = capDieciocho + (numero * 1);
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCero').html(tasasDec[4] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var capUno    = (((numero * tasaPor[5]) / 360) * 30);
                    var capDos    = ((((capUno    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                    var capTres   = ((((capDos    + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                    var capCuatro = ((((capTres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                    var capCinco  = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                    var capSeis   = ((((capCinco  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                    var capSiete  = ((((capSeis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                    var capOcho   = ((((capSiete  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                    var capNueve  = ((((capOcho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                    var capDiez   = ((((capNueve  + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                    var capOnce   = ((((capDiez   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                    var capDoce   = ((((capOnce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                    var capTrece   = ((((capDoce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                    var capCatorce   = ((((capTrece   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                    var capQuince   = ((((capCatorce   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                    var capDieciseis   = ((((capQuince   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                    var capDiecisiete   = ((((capDieciseis   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                    var capDieciocho   = ((((capDiecisiete   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                    var capDiecinueve   = ((((capDieciocho   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                    var capVeinte   = ((((capDiecinueve   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                    var capVeintiuno   = ((((capVeinte   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                    var capVeintidos   = ((((capVeintiuno   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                    var capVeintitres   = ((((capVeintidos   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                    var capVeinticuatro   = ((((capVeintitres   + (numero * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                    var resultadoTotal = capVeinticuatro + (numero * 1);
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCero').html(tasasDec[5] + ' ' + "%");
                    if (numero <= 99){
                        span = document.getElementById('resuladoCero');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('resuladoCero');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
            // RESULTADO TOTAL
            $('#resuladoCero').html(resultadoTotal.toFixed(2));
            return resultadoTotal;
        }
        /* FIN MONTOS DE 2,500,001 A 5,000,000 */
    }
}

// FUNCION AGERGADO 

function calculaRangoAd(adicionalAd){
    var btnCalcularAd = document.getElementById('plazoMeses');
    btnCalcularAd.addEventListener('change', () => {
        calculaRangoAd(adicionalAd);
    })


    var selectOpciones = document.getElementById('plazoMeses').value;
    // MONTOS DE 100 A 10,000 PESOS
    if(selectOpciones == 1 || selectOpciones == 3 || selectOpciones == 6 || selectOpciones == 12 || selectOpciones == 18 || selectOpciones == 24){
        if (adicionalAd <= 10000) {
            // TASAS PORCENTAJE
            let tasaPor = [0, 0, 0, 0, 0, 0];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [5.00, 5.00, 5.00, 6.00, 6.50, 7.00];
            // var adicionalAd = (adicional * selectOpciones);
            // SWICH
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum <= 10000){
                        return ('$0');
                    }
                    
                    break;
                    case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum <= 10000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if(saldoUnoNum <= 10000){
                        return ('$0');
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum <= 10000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if(saldoUnoNum <= 10000){
                        return ('$0');
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum <= 10000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if(saldoUnoNum <= 10000){
                        return ('$0');
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum <= 10000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                       // $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                   }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if(saldoUnoNum <= 10000){
                        return ('$0');
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum <= 10000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                       // $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                   }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if(saldoUnoNum <= 10000){
                        return ('$0');
                    }
                    break;
                }
            // RESULTADO TOTAL
            // $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
            var renBruto = (resultadoTotalAd - adicionalAd);
            var saldoUno = document.getElementById('resuladoCero').value;
            var saldoUnoNum = Number(saldoUno);
            var montPrin = document.getElementById('montoIncial').value;
            var monPrinNum = Number(montPrin);
            var renPrincipal = saldoUnoNum - monPrinNum;
            var rendimiento = (renBruto * 1) + (renPrincipal * 1);
            $('#renBruto').html(formatToCurrency(rendimiento));
            var resul = document.getElementById('resuladoCero').value;
            var resuelta = (resul * 1) + (resultadoTotalAd * 1);
            $('#invTotal').html(formatToCurrency(resuelta));
            
        } 
        /* FIN MONTOS DE 100 A 10,000 */
        
        /* MONTOS DE 10,001 A 50,000 */
        if (adicionalAd <= 50000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1050, 0.1200, 0.1250, 0.1350, 0.1360, 0.1380];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.50, 12.00, 12.50, 13.50, 13.60, 13.80];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 10001 && saldoUnoNum <= 50000){
                        var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = capUno;
                            // FIN PLAZO A UN MES
                            $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        }
                        if (adicionalAd <= 10000){
                            span = document.getElementById('montoAdicional');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('montoAdicional');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 10001 && saldoUnoNum <= 50000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        console.log(capUno);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        console.log(captres);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if (adicionalAd <= 10000){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 10001 && saldoUnoNum <= 50000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if (adicionalAd <= 10000){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 10001 && saldoUnoNum <= 50000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if (adicionalAd <= 10000){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 10001 && saldoUnoNum <= 50000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if (adicionalAd <= 10000){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 10001 && saldoUnoNum <= 50000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if (adicionalAd <= 10000){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                var renBruto = (resultadoTotalAd - adicionalAd);
                var saldoUno = document.getElementById('resuladoCero').value;
                var saldoUnoNum = Number(saldoUno);
                var montPrin = document.getElementById('montoIncial').value;
                var monPrinNum = Number(montPrin);
                var renPrincipal = saldoUnoNum - monPrinNum;
                var rendimiento = (renBruto * 1) + (renPrincipal * 1);
                $('#renBruto').html(formatToCurrency(rendimiento));
                var resul = document.getElementById('resuladoCero').value;
                var resuelta = (resul * 1) + (resultadoTotalAd * 1);
                $('#invTotal').html(formatToCurrency(resuelta));
            }
            /* FIN MONTOS DE 10,001 A 50,000 */

            /* MONTOS DE 50,001 A 250,000 */
            if (adicionalAd <= 250000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1050, 0.1200, 0.1250, 0.1350, 0.1360, 0.1380];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.50, 12.00, 12.50, 13.50, 13.60, 13.80];
            
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 50001 && saldoUnoNum <= 250000){
                        var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = capUno;
                            // FIN PLAZO A UN MES
                            $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        }
                        if (adicionalAd <= 99){
                            span = document.getElementById('montoAdicional');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('montoAdicional');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 50001 && saldoUnoNum <= 250000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 50001 && saldoUnoNum <= 250000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 50001 && saldoUnoNum <= 250000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 50001 && saldoUnoNum <= 250000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 50001 && saldoUnoNum <= 250000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                var renBruto = (resultadoTotalAd - adicionalAd);
                var saldoUno = document.getElementById('resuladoCero').value;
                var saldoUnoNum = Number(saldoUno);
                var montPrin = document.getElementById('montoIncial').value;
                var monPrinNum = Number(montPrin);
                var renPrincipal = saldoUnoNum - monPrinNum;
                var rendimiento = (renBruto * 1) + (renPrincipal * 1);
                $('#renBruto').html(formatToCurrency(rendimiento));
                var resul = document.getElementById('resuladoCero').value;
                var resuelta = (resul * 1) + (resultadoTotalAd * 1);
                $('#invTotal').html(formatToCurrency(resuelta));
            }
            /* FIN MONTOS DE 50,001 A 250,000 */

            /* MONTOS DE 250,001 A 500,000 */
            if (adicionalAd <= 500000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1050, 0.1200, 0.1250, 0.1350, 0.1360, 0.1380];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.50, 12.00, 12.50, 13.50, 13.60, 13.80];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 250001 && saldoUnoNum <= 500000){
                        var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = capUno;
                            // FIN PLAZO A UN MES
                            $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        }
                        if (adicionalAd <= 99){
                            span = document.getElementById('montoAdicional');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('montoAdicional');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 250001 && saldoUnoNum <= 500000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 250001 && saldoUnoNum <= 500000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 250001 && saldoUnoNum <= 500000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 250001 && saldoUnoNum <= 500000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 250001 && saldoUnoNum <= 500000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                var renBruto = (resultadoTotalAd - adicionalAd);
                var saldoUno = document.getElementById('resuladoCero').value;
                var saldoUnoNum = Number(saldoUno);
                var montPrin = document.getElementById('montoIncial').value;
                var monPrinNum = Number(montPrin);
                var renPrincipal = saldoUnoNum - monPrinNum;
                var rendimiento = (renBruto * 1) + (renPrincipal * 1);
                $('#renBruto').html(formatToCurrency(rendimiento));
                var resul = document.getElementById('resuladoCero').value;
                var resuelta = (resul * 1) + (resultadoTotalAd * 1);
                $('#invTotal').html(formatToCurrency(resuelta));
            }
            /*  FIN MONTOS DE 250,001 A 500,000 */

            /*  MONTOS DE 500,001 A 1,000,000 */
            if (adicionalAd <= 1000000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1140, 0.1290, 0.1340, 0.1390, 0.1400, 0.1410];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [11.40, 12.90, 13.40, 13.90, 14.00, 14.10];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 500001 && saldoUnoNum <= 1000000){
                        var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = capUno;
                            // FIN PLAZO A UN MES
                            $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        }
                        if (adicionalAd <= 99){
                            span = document.getElementById('montoAdicional');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('montoAdicional');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 500001 && saldoUnoNum <= 1000000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 500001 && saldoUnoNum <= 1000000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 500001 && saldoUnoNum <= 1000000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 500001 && saldoUnoNum <= 1000000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 500001 && saldoUnoNum <= 1000000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                var renBruto = (resultadoTotalAd - adicionalAd);
                var saldoUno = document.getElementById('resuladoCero').value;
                var saldoUnoNum = Number(saldoUno);
                var montPrin = document.getElementById('montoIncial').value;
                var monPrinNum = Number(montPrin);
                var renPrincipal = saldoUnoNum - monPrinNum;
                var rendimiento = (renBruto * 1) + (renPrincipal * 1);
                $('#renBruto').html(formatToCurrency(rendimiento));
                var resul = document.getElementById('resuladoCero').value;
                var resuelta = (resul * 1) + (resultadoTotalAd * 1);
                $('#invTotal').html(formatToCurrency(resuelta));
            }
            /*  FIN MONTOS DE 500,001 A 1,000,000 */

            /*  MONTOS DE 1,000,001 A 2,500,000 */
            if (adicionalAd <= 2500000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1160, 0.1310, 0.1360, 0.1410, 0.1420, 0.1430];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [11.60, 13.10, 13.60, 14.10, 14.20, 14.30];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 1000001 && saldoUnoNum <= 2500000){
                        var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = capUno;
                            // FIN PLAZO A UN MES
                            $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        }
                        if (adicionalAd <= 99){
                            span = document.getElementById('montoAdicional');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('montoAdicional');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 1000001 && saldoUnoNum <= 2500000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 1000001 && saldoUnoNum <= 2500000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 1000001 && saldoUnoNum <= 2500000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 1000001 && saldoUnoNum <= 2500000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 1000001 && saldoUnoNum <= 2500000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                var renBruto = (resultadoTotalAd - adicionalAd);
                var saldoUno = document.getElementById('resuladoCero').value;
                var saldoUnoNum = Number(saldoUno);
                var montPrin = document.getElementById('montoIncial').value;
                var monPrinNum = Number(montPrin);
                var renPrincipal = saldoUnoNum - monPrinNum;
                var rendimiento = (renBruto * 1) + (renPrincipal * 1);
                $('#renBruto').html(formatToCurrency(rendimiento));
                var resul = document.getElementById('resuladoCero').value;
                var resuelta = (resul * 1) + (resultadoTotalAd * 1);
                $('#invTotal').html(formatToCurrency(resuelta));
            }
            /*  FIN MONTOS DE 1,000,001 A 2,500,000 */

            /* MONTOS DE 2,500,001 A 5,000,000 */
            if (adicionalAd <= 5000000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1190, 0.1340, 0.1390, 0.1440, 0.1450, 0.1460];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [11.90, 13.40, 13.90, 14.40, 14.50, 14.60];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 2500001 && saldoUnoNum <= 5000000){
                        var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = capUno;
                            // FIN PLAZO A UN MES
                            $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        }
                        if (adicionalAd <= 99){
                            span = document.getElementById('montoAdicional');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('montoAdicional');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 2500001 && saldoUnoNum <= 5000000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 2500001 && saldoUnoNum <= 5000000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 2500001 && saldoUnoNum <= 5000000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 2500001 && saldoUnoNum <= 5000000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 2500001 && saldoUnoNum <= 5000000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                var renBruto = (resultadoTotalAd - adicionalAd);
                var saldoUno = document.getElementById('resuladoCero').value;
                var saldoUnoNum = Number(saldoUno);
                var montPrin = document.getElementById('montoIncial').value;
                var monPrinNum = Number(montPrin);
                var renPrincipal = saldoUnoNum - monPrinNum;
                var rendimiento = (renBruto * 1) + (renPrincipal * 1);
                $('#renBruto').html(formatToCurrency(rendimiento));
                var resul = document.getElementById('resuladoCero').value;
                var resuelta = (resul * 1) + (resultadoTotalAd * 1);
                $('#invTotal').html(formatToCurrency(resuelta));
            }
            /* FIN MONTOS DE 2,500,001 A 5,000,000 */

            /* MONTOS DE 5,000,001 A 30,000,000 */
            if (adicionalAd <= 30000000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1200, 0.1350, 0.1400, 0.1450, 0.1460, 0.1470];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [12.00, 13.50, 14.00, 14.50, 14.60, 14.70];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    // var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    // var resultadoTotalAd = capUno;
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 5000001 && saldoUnoNum >= 30000000){
                        var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = capUno;
                            // FIN PLAZO A UN MES
                            $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        }
                        if (adicionalAd <= 99){
                            span = document.getElementById('montoAdicional');
                            span.style.color = 'transparent';
                        }else{
                            span = document.getElementById('montoAdicional');
                            span.style.color = '#00BFB2';
                        }
                        break;
                        case "3":
                    // PLAZO A TRES MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 5000001 && saldoUnoNum >= 30000000){
                        var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                        var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                        var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                        var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                        var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A TRES MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "6":
                    // PLAZO A SEIS MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 5000001 && saldoUnoNum >= 30000000){
                        var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                        var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                        var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                        var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                        var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                        var resultadoTotalAd = capSeis + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A SEIS MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "12":
                    // PLAZO A DOCE MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 5000001 && saldoUnoNum >= 30000000){
                        var capUno    = (((adicionalAd * tasaPor[3]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[3]) / 360) * 30)    + (capOnce * 1);
                        var resultadoTotalAd = capDoce + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DOCE MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "18":
                    // PLAZO A DIEZ Y OCHO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 5000001 && saldoUnoNum >= 30000000){
                        var capUno    = (((adicionalAd * tasaPor[4]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[4]) / 360) * 30)    + (capDiecisiete * 1);
                        var  resultadoTotalAd = capDieciocho + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                    }
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                    }
                    break;
                    case "24":
                    // PLAZO A VEINTICUATRO MESES
                    var saldoUno = document.getElementById('resuladoCero').value;
                    var saldoUnoNum = Number(saldoUno);
                    if(saldoUnoNum >= 5000001 && saldoUnoNum >= 30000000){
                        var capUno    = (((adicionalAd * tasaPor[5]) / 360) * 30);
                        var capDos    = ((((capUno    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + ( capUno * 1);
                        var capTres   = ((((capDos    + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDos * 1);
                        var capCuatro = ((((capTres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTres * 1);
                        var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCuatro * 1);
                        var capSeis   = ((((capCinco  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCinco * 1);
                        var capSiete  = ((((capSeis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSeis * 1);
                        var capOcho   = ((((capSiete  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capSiete * 1);
                        var capNueve  = ((((capOcho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOcho * 1);
                        var capDiez   = ((((capNueve  + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capNueve * 1);
                        var capOnce   = ((((capDiez   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiez * 1);
                        var capDoce   = ((((capOnce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capOnce * 1);
                        var capTrece   = ((((capDoce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDoce * 1);
                        var capCatorce   = ((((capTrece   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capTrece * 1);
                        var capQuince   = ((((capCatorce   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capCatorce * 1);
                        var capDieciseis   = ((((capQuince   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capQuince * 1);
                        var capDiecisiete   = ((((capDieciseis   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciseis * 1);
                        var capDieciocho   = ((((capDiecisiete   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecisiete * 1);
                        var capDiecinueve   = ((((capDieciocho   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDieciocho * 1);
                        var capVeinte   = ((((capDiecinueve   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capDiecinueve * 1);
                        var capVeintiuno   = ((((capVeinte   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeinte * 1);
                        var capVeintidos   = ((((capVeintiuno   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintiuno * 1);
                        var capVeintitres   = ((((capVeintidos   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintidos * 1);
                        var capVeinticuatro   = ((((capVeintitres   + (adicionalAd * 1)) * tasaPor[5]) / 360) * 30)    + (capVeintitres * 1);
                        var resultadoTotalAd = capVeinticuatro + (adicionalAd * 1);
                        // FIN PLAZO A UN MES
                        $('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                        console.log(resultadoTotalAd);
                    }
                    // FIN PLAZO A VEINTICUATRO MESES
                    if (adicionalAd <= 99){
                        span = document.getElementById('montoAdicional');
                        span.style.color = 'transparent';
                    }else{
                        span = document.getElementById('montoAdicional');
                        span.style.color = '#00BFB2';
                        span.style.fontWeight = '900';
                    }
                    break;
                }
                // RESULTADO TOTAL
                //$('#montoAdicional').html(resultadoTotalAd.toFixed(2));  //+ ' ' + "por plazo"
                var renBruto = (resultadoTotalAd - adicionalAd);
                var saldoUno = document.getElementById('resuladoCero').value;
                var saldoUnoNum = Number(saldoUno);
                var montPrin = document.getElementById('montoIncial').value;
                var monPrinNum = Number(montPrin);
                var renPrincipal = saldoUnoNum - monPrinNum;
                var rendimiento = (renBruto * 1) + (renPrincipal * 1);
                $('#renBruto').html(formatToCurrency(rendimiento));
                var resul = document.getElementById('resuladoCero').value;
                var resuelta = (resul * 1) + (resultadoTotalAd * 1);
                console.log(resuelta);
                $('#invTotal').html(formatToCurrency(resuelta));
            }
            /* FIN MONTOS DE 5,000,001 A 30,000,000 */
        }
        
        
        calculaRangoOn();
    }

    calculaRangoAd();
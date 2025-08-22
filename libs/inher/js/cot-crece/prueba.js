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





function calculaRangoAd(adicionalAd){

    var selectOpciones = document.getElementById('plazoMeses').value;
    // MONTOS DE 100 A 10,000 PESOS
    if(selectOpciones == 1 || selectOpciones == 3 || selectOpciones == 6 || selectOpciones == 12 || selectOpciones == 18 || selectOpciones == 24){
        if (adicionalAd <= 10000) {
        // TASAS PORCENTAJE
        let tasaPor = [0.050, 0.050, 0.050, 0.060, 0.0650, 0.070];
        // TASAS EN DECIMAS TASAS FIJAS
        let tasasDec = [5.00, 5.00, 5.00, 6.00, 6.50, 7.00];
        // var adicionalAd = (adicional * selectOpciones);
        // SWICH
        switch (selectOpciones){
            case "1":
                // PLAZO A UN MES
                var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                var resultadoTotalAd = capUno;
                // FIN PLAZO A UN MES
                $('#TasaCeroAdd').html(tasasDec[0] + ' ' + "%");
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
                var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                // FIN PLAZO A TRES MESES
                $('#TasaCeroAdd').html(tasasDec[1] + ' ' + "%");
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
                var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                var resultadoTotalAd = capSeis + (adicionalAd * 1);
                // FIN PLAZO A SEIS MESES
                $('#TasaCeroAdd').html(tasasDec[2] + ' ' + "%");
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
                // FIN PLAZO A DOCE MESES
                $('#TasaCeroAdd').html(tasasDec[3] + ' ' + "%");
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
                // FIN PLAZO A DIEZ Y OCHO MESES
                $('#TasaCeroAdd').html(tasasDec[4] + ' ' + "%");
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
                // FIN PLAZO A VEINTICUATRO MESES
                $('#TasaCeroAdd').html(tasasDec[5] + ' ' + "%");
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
            $('#montoAdicional').html(formatToCurrency(resultadoTotalAd) + ' ' + "por plazo") ;
            var renBruto = (resultadoTotalAd - adicionalAd);
            $('#renBruto').html(formatToCurrency(renBruto));
        }
        /* FIN MONTOS DE 100 A 10,000 */
        

        /* MONTOS DE 10,001 A 50,000 */
        if (adicionalAd >= 10001 && adicionalAd <= 50000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.050, 0.070, 0.0750, 0.080, 0.0810, 0.0820];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [5.00, 7.00, 7.50, 8.00, 8.10, 8.20];
            
            
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCeroAdd').html(tasasDec[0] + ' ' + "%");
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
                    var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCeroAdd').html(tasasDec[1] + ' ' + "%");
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
                    var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotalAd = capSeis + (adicionalAd * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCeroAdd').html(tasasDec[2] + ' ' + "%");
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
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCeroAdd').html(tasasDec[3] + ' ' + "%");
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
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCeroAdd').html(tasasDec[4] + ' ' + "%");
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
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCeroAdd').html(tasasDec[5] + ' ' + "%");
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
                $('#montoAdicional').html(formatToCurrency(resultadoTotalAd) + ' ' + "por plazo") ;
                var renBruto = (resultadoTotalAd - adicionalAd);
                $('#renBruto').html(formatToCurrency(renBruto));
            }
        /* FIN MONTOS DE 10,001 A 50,000 */

        /* MONTOS DE 50,001 A 250,000 */
        if (adicionalAd >= 50001 && adicionalAd <= 250000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.0902, 0.1102, 0.1150, 0.1200, 0.1210, 0.1220];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [9.02, 11.02, 11.50, 12.00, 12.10, 12.20];
    
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCeroAdd').html(tasasDec[0] + ' ' + "%");
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
                    var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCeroAdd').html(tasasDec[1] + ' ' + "%");
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
                    var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotalAd = capSeis + (adicionalAd * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCeroAdd').html(tasasDec[2] + ' ' + "%");
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
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCeroAdd').html(tasasDec[3] + ' ' + "%");
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
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCeroAdd').html(tasasDec[4] + ' ' + "%");
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
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCeroAdd').html(tasasDec[5] + ' ' + "%");
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
                $('#montoAdicional').html(formatToCurrency(resultadoTotalAd) + ' ' + "por plazo") ;
                var renBruto = (resultadoTotalAd - adicionalAd);
                $('#renBruto').html(formatToCurrency(renBruto));
            }
        /* FIN MONTOS DE 50,001 A 250,000 */

        /* MONTOS DE 250,001 A 500,000 */
        if (adicionalAd >= 250000 && adicionalAd <= 500000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.0940, 0.1140, 0.1190, 0.1240, 0.1250, 0.1260];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [9.40, 11.40, 11.90, 12.40, 12.50, 12.60];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCeroAdd').html(tasasDec[0] + ' ' + "%");
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
                    var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCeroAdd').html(tasasDec[1] + ' ' + "%");
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
                    var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotalAd = capSeis + (adicionalAd * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCeroAdd').html(tasasDec[2] + ' ' + "%");
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
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCeroAdd').html(tasasDec[3] + ' ' + "%");
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
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCeroAdd').html(tasasDec[4] + ' ' + "%");
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
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCeroAdd').html(tasasDec[5] + ' ' + "%");
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
                $('#montoAdicional').html(formatToCurrency(resultadoTotalAd) + ' ' + "por plazo") ;
                var renBruto = (resultadoTotalAd - adicionalAd);
                $('#renBruto').html(formatToCurrency(renBruto));
            }
        /*  FIN MONTOS DE 250,001 A 500,000 */

        /*  MONTOS DE 500,001 A 1,000,000 */
        if (adicionalAd >= 500000 && adicionalAd <= 1000000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.0980, 0.1180, 0.1230, 0.1280, 0.1290, 0.1300];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [9.80, 11.80, 12.30, 12.80, 12.90, 13.00];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCeroAdd').html(tasasDec[0] + ' ' + "%");
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
                    var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCeroAdd').html(tasasDec[1] + ' ' + "%");
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
                    var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotalAd = capSeis + (adicionalAd * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCeroAdd').html(tasasDec[2] + ' ' + "%");
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
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCeroAdd').html(tasasDec[3] + ' ' + "%");
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
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCeroAdd').html(tasasDec[4] + ' ' + "%");
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
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCeroAdd').html(tasasDec[5] + ' ' + "%");
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
                $('#montoAdicional').html(formatToCurrency(resultadoTotalAd) + ' ' + "por plazo") ;
                var renBruto = (resultadoTotalAd - adicionalAd);
                $('#renBruto').html(formatToCurrency(renBruto));
            }
        /*  FIN MONTOS DE 500,001 A 1,000,000 */

        /*  MONTOS DE 1,000,001 A 2,500,000 */
        if (adicionalAd >= 1000001 && adicionalAd <= 2500000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1010, 0.1210, 0.1260, 0.1310, 0.1320, 0.1330];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.10, 12.10, 12.60, 13.10, 13.20, 13.30];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCeroAdd').html(tasasDec[0] + ' ' + "%");
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
                    var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCeroAdd').html(tasasDec[1] + ' ' + "%");
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
                    var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotalAd = capSeis + (adicionalAd * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCeroAdd').html(tasasDec[2] + ' ' + "%");
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
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCeroAdd').html(tasasDec[3] + ' ' + "%");
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
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCeroAdd').html(tasasDec[4] + ' ' + "%");
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
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCeroAdd').html(tasasDec[5] + ' ' + "%");
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
                $('#montoAdicional').html(formatToCurrency(resultadoTotalAd) + ' ' + "por plazo") ;
                var renBruto = (resultadoTotalAd - adicionalAd);
                $('#renBruto').html(formatToCurrency(renBruto));
            }
        /*  FIN MONTOS DE 1,000,001 A 2,500,000 */

        /* MONTOS DE 2,500,001 A 5,000,000 */
        if (adicionalAd >= 2500001 && adicionalAd <= 5000000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.1040, 0.1240, 0.1290, 0.1340, 0.1350, 0.1360];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10.40, 12.40, 12.90, 13.40, 13.50, 13.60];
            switch (selectOpciones){
                case "1":
                    // PLAZO A UN MES
                    var capUno = (((adicionalAd * tasaPor[0]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = capUno;
                    // FIN PLAZO A UN MES
                    $('#TasaCeroAdd').html(tasasDec[0] + ' ' + "%");
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
                    var capUno = (((adicionalAd * tasaPor[1]) / 360) * 30);
                    var capDos = ((((capUno + (adicionalAd * 1)) * tasaPor[1]) / 360) * 30);
                    var sumaCap = (capUno * 1) + (capDos * 1) + (adicionalAd * 1);
                    var captres = (((sumaCap  * tasaPor[1]) / 360) * 30) + (adicionalAd * 1);
                    var resultadoTotalAd = (capUno) + (capDos ) + (captres);
                    // FIN PLAZO A TRES MESES
                    $('#TasaCeroAdd').html(tasasDec[1] + ' ' + "%");
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
                    var capUno    = (((adicionalAd * tasaPor[2]) / 360) * 30);
                    var capDos    = ((((capUno + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + ( capUno * 1);
                    var capTres   = ((((capDos + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
                    var capCuatro = ((((capTres + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
                    var capCinco  = ((((capCuatro + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
                    var capSeis  = ((((capCinco + (adicionalAd * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
                    var resultadoTotalAd = capSeis + (adicionalAd * 1);
                    // FIN PLAZO A SEIS MESES
                    $('#TasaCeroAdd').html(tasasDec[2] + ' ' + "%");
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
                    // FIN PLAZO A DOCE MESES
                    $('#TasaCeroAdd').html(tasasDec[3] + ' ' + "%");
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
                    // FIN PLAZO A DIEZ Y OCHO MESES
                    $('#TasaCeroAdd').html(tasasDec[4] + ' ' + "%");
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
                    // FIN PLAZO A VEINTICUATRO MESES
                    $('#TasaCeroAdd').html(tasasDec[5] + ' ' + "%");
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
                $('#montoAdicional').html(formatToCurrency(resultadoTotalAd) + ' ' + "por plazo") ;
                var renBruto = (resultadoTotalAd - adicionalAd);
                $('#renBruto').html(formatToCurrency(renBruto));
            }
        /* FIN MONTOS DE 2,500,001 A 5,000,000 */
    }
  
}
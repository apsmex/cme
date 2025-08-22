function onKeyPressRangoIn(e, numero) {
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".") != +1 && keychar == ".") {
        return false;
    } else {
        return reg.test(keychar);
    }
}

// cantidad en moneda

function formatToCurrency(amount) {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

    return numberFormat.format(amount);
}

function calculaRangoIn(numero) {
    var selectOpciones = document.getElementById('opcionesInversion').value;

    // *** DE MONTOS DE 100 A 10,000 PESOS 
    if (selectOpciones == 100) {
        $('#vasINver').html("Vas a invertir de $100 a $10,000");
        if (numero <= 1000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.05, 0.06, 0.07, 0.08, 0.10, 0.11, 0.13, 0.14];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [5.0, 6.0, 7.0, 8.0, 10, 11, 13, 14];

            // PLAZO A UNO MES
            var capUno = (((numero * tasaPor[2]) / 360) * 30);
            var resultadoTotalCero = capUno + (numero * 1);
            // FIN PLAZO A UNO MES

            // PLAZO A TRES MESES
            var capUno = (((numero * tasaPor[2]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
            var resultadoTotalUno = capTres + (numero * 1);
            // FIN PLAZO A TRES MESES

            // PLAZO A SEIS MESES
            var capUno = (((numero * tasaPor[2]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
            var resultadoTotalDos = capSeis + (numero * 1);
            // FIN PLAZO A SEIS MESES

            // PLAZO A DOCE MESES
            var capUno = (((numero * tasaPor[3]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOnce * 1);
            var resultadoTotalTres = capDoce + (numero * 1);
            // FIN PLAZO A DOCE MESES

            // PLAZO A DIEZ Y OCHO MESES
            var capUno = (((numero * tasaPor[4]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capOnce * 1);
            var capTrece = ((((capDoce + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capDoce * 1);
            var capCatorce = ((((capTrece + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capTrece * 1);
            var capQuince = ((((capCatorce + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capCatorce * 1);
            var capDieciseis = ((((capQuince + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capQuince * 1);
            var capDiecisiete = ((((capDieciseis + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capDieciseis * 1);
            var capDieciocho = ((((capDiecisiete + (numero * 1)) * tasaPor[4]) / 360) * 30) + (capDiecisiete * 1);
            var resultadoTotalCuatro = capDieciocho + (numero * 1);
            // FIN PLAZO A DIEZ Y OCHO MESES

            // PLAZO A VEINTICUATRO MESES
            var capUno = (((numero * tasaPor[5]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capOnce * 1);
            var capTrece = ((((capDoce + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capDoce * 1);
            var capCatorce = ((((capTrece + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capTrece * 1);
            var capQuince = ((((capCatorce + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capCatorce * 1);
            var capDieciseis = ((((capQuince + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capQuince * 1);
            var capDiecisiete = ((((capDieciseis + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capDieciseis * 1);
            var capDieciocho = ((((capDiecisiete + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capDiecisiete * 1);
            var capDiecinueve = ((((capDieciocho + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capDieciocho * 1);
            var capVeinte = ((((capDiecinueve + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capDiecinueve * 1);
            var capVeintiuno = ((((capVeinte + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capVeinte * 1);
            var capVeintidos = ((((capVeintiuno + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capVeintiuno * 1);
            var capVeintitres = ((((capVeintidos + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capVeintidos * 1);
            var capVeinticuatro = ((((capVeintitres + (numero * 1)) * tasaPor[5]) / 360) * 30) + (capVeintitres * 1);
            var resultadoTotalCinco = capVeinticuatro + (numero * 1);
            // FIN PLAZO A VEINTICUATRO MESES

            // RESULTADO TOTAL
            $('#resuladoCero').html(formatToCurrency(resultadoTotalCero));
            $('#resuladoUno').html(formatToCurrency(resultadoTotalUno));
            $('#resuladoDos').html(formatToCurrency(resultadoTotalDos));
            $('#resuladoTres').html(formatToCurrency(resultadoTotalTres));
            $('#resuladoCuatro').html(formatToCurrency(resultadoTotalCuatro));
            $('#resuladoCinco').html(formatToCurrency(resultadoTotalCinco));
            // VISTA DE TASAS SIN EDITAR
            $('#TasaCero').html(tasasDec[0] + ' ' + "%");
            $('#TasaUno').html(tasasDec[0] + ' ' + "%");
            $('#TasaDos').html(tasasDec[0] + ' ' + "%");
            $('#TasaTres').html(tasasDec[1] + ' ' + "%");
            $('#TasaCuatro').html(tasasDec[1] + ' ' + "%");
            $('#TasaCinco').html(tasasDec[1] + ' ' + "%");
            if (numero <= 99) {
                span = document.getElementById('resuladoCero');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoUno');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoDos');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoTres');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoCuatro');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoCinco');
                span.style.color = 'transparent';
            } else {
                span = document.getElementById('resuladoCero');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoUno');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoDos');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoTres');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoCuatro');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoCinco');
                span.style.color = '#00BFB2';
            }
        } else {
            numero.removeEventListener("blur", quitar());
            function quitar() {

                document.getElementById('rangoIn').value = " ";
                if (numero >= 100) {
                    span = document.getElementById('resuladoDos').innerHTML = "0";
                    span = document.getElementById('resuladoTres').innerHTML = "0";
                    span = document.getElementById('resuladoCuatro').innerHTML = "0";
                    span = document.getElementById('resuladoCinco').innerHTML = "0";
                }

            }
        }
    }
    // *** FIN DE MONTOS DE 10,000 A 50,000 PESOS

    if (selectOpciones == 1001) {
        $('#vasINver').html("Vas a invertir de $1,001 a $10,000");
        if (numero <= 10000) {
            // TASAS PORCENTAJE
            let tasaPor = [0.07, 0.08, 0.11, 0.13];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [7.0, 8.0, 11, 13];

            // PLAZO A UNO MES
            var capUno = (((numero * tasaPor[0]) / 360) * 30);
            var resultadoTotalCero = capUno + (numero * 1);
            // FIN PLAZO A UNO MES

            // PLAZO A TRES MESES
            var capUno = (((numero * tasaPor[1]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[1]) / 360) * 30) + (capDos * 1);
            var resultadoTotalUno = capTres + (numero * 1);
            // FIN PLAZO A TRES MESES

            // PLAZO A SEIS MESES
            var capUno = (((numero * tasaPor[2]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
            var resultadoTotalDos = capSeis + (numero * 1);
            // FIN PLAZO A SEIS MESES

            // PLAZO A DOCE MESES
            var capUno = (((numero * tasaPor[3]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOnce * 1);
            var resultadoTotalTres = capDoce + (numero * 1);
            // FIN PLAZO A DOCE MESES

            // PLAZO A DIEZ Y OCHO MESES
            var capUno = (((numero * tasaPor[3]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOnce * 1);
            var capTrece = ((((capDoce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDoce * 1);
            var capCatorce = ((((capTrece + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTrece * 1);
            var capQuince = ((((capCatorce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCatorce * 1);
            var capDieciseis = ((((capQuince + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capQuince * 1);
            var capDiecisiete = ((((capDieciseis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDieciseis * 1);
            var capDieciocho = ((((capDiecisiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiecisiete * 1);
            var resultadoTotalCuatro = capDieciocho + (numero * 1);
            // FIN PLAZO A DIEZ Y OCHO MESES

            // PLAZO A VEINTICUATRO MESES
            var capUno = (((numero * tasaPor[3]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOnce * 1);
            var capTrece = ((((capDoce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDoce * 1);
            var capCatorce = ((((capTrece + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTrece * 1);
            var capQuince = ((((capCatorce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCatorce * 1);
            var capDieciseis = ((((capQuince + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capQuince * 1);
            var capDiecisiete = ((((capDieciseis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDieciseis * 1);
            var capDieciocho = ((((capDiecisiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiecisiete * 1);
            var capDiecinueve = ((((capDieciocho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDieciocho * 1);
            var capVeinte = ((((capDiecinueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiecinueve * 1);
            var capVeintiuno = ((((capVeinte + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeinte * 1);
            var capVeintidos = ((((capVeintiuno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeintiuno * 1);
            var capVeintitres = ((((capVeintidos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeintidos * 1);
            var capVeinticuatro = ((((capVeintitres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeintitres * 1);
            var resultadoTotalCinco = capVeinticuatro + (numero * 1);
            // FIN PLAZO A VEINTICUATRO MESES

            // RESULTADO TOTAL
            $('#resuladoCero').html(formatToCurrency(resultadoTotalCero));
            $('#resuladoUno').html(formatToCurrency(resultadoTotalUno));
            $('#resuladoDos').html(formatToCurrency(resultadoTotalDos));
            $('#resuladoTres').html(formatToCurrency(resultadoTotalTres));
            $('#resuladoCuatro').html(formatToCurrency(resultadoTotalCuatro));
            $('#resuladoCinco').html(formatToCurrency(resultadoTotalCinco));
            // VISTA DE TASAS SIN EDITAR
            $('#TasaCero').html(tasasDec[0] + ' ' + "%");
            $('#TasaUno').html(tasasDec[1] + ' ' + "%");
            $('#TasaDos').html(tasasDec[2] + ' ' + "%");
            $('#TasaTres').html(tasasDec[3] + ' ' + "%");
            $('#TasaCuatro').html(tasasDec[3] + ' ' + "%");
            $('#TasaCinco').html(tasasDec[3] + ' ' + "%");
            if (numero <= 1000) {
                span = document.getElementById('resuladoCero');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoUno');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoDos');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoTres');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoCuatro');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoCinco');
                span.style.color = 'transparent';
            } else {
                span = document.getElementById('resuladoCero');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoUno');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoDos');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoTres');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoCuatro');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoCinco');
                span.style.color = '#00BFB2';
            }
        } else {
            numero.removeEventListener("blur", quitar());
            function quitar() {

                document.getElementById('rangoIn').value = " ";
                if (numero >= 100) {
                    span = document.getElementById('resuladoDos').innerHTML = "0";
                    span = document.getElementById('resuladoTres').innerHTML = "0";
                    span = document.getElementById('resuladoCuatro').innerHTML = "0";
                    span = document.getElementById('resuladoCinco').innerHTML = "0";
                }

            }
        }
    }

    // *** DE MONTOS DE 50,001 A 250,000 PESOS 
    if (selectOpciones == 10001) {
        $('#vasINver').html("Vas a invertir a partir de $10,001");
        if (numero >= 10001) {
            // TASAS PORCENTAJE
            let tasaPor = [0.10, 0.11, 0.14, 0.16];
            // TASAS EN DECIMAS TASAS FIJAS
            let tasasDec = [10, 11, 14, 16];

            // PLAZO A UNO MES
            var capUno = (((numero * tasaPor[0]) / 360) * 30);
            var resultadoTotalCero = capUno + (numero * 1);
            // FIN PLAZO A UNO MES

            // PLAZO A TRES MESES
            var capUno = (((numero * tasaPor[1]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[1]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[1]) / 360) * 30) + (capDos * 1);
            var resultadoTotalUno = capTres + (numero * 1);
            // FIN PLAZO A TRES MESES

            // PLAZO A SEIS MESES
            var capUno = (((numero * tasaPor[2]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[2]) / 360) * 30) + (capCinco * 1);
            var resultadoTotalDos = capSeis + (numero * 1);
            // FIN PLAZO A SEIS MESES

            // PLAZO A DOCE MESES
            var capUno = (((numero * tasaPor[3]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOnce * 1);
            var resultadoTotalTres = capDoce + (numero * 1);
            // FIN PLAZO A DOCE MESES

            // PLAZO A DIEZ Y OCHO MESES
            var capUno = (((numero * tasaPor[3]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOnce * 1);
            var capTrece = ((((capDoce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDoce * 1);
            var capCatorce = ((((capTrece + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTrece * 1);
            var capQuince = ((((capCatorce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCatorce * 1);
            var capDieciseis = ((((capQuince + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capQuince * 1);
            var capDiecisiete = ((((capDieciseis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDieciseis * 1);
            var capDieciocho = ((((capDiecisiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiecisiete * 1);
            var resultadoTotalCuatro = capDieciocho + (numero * 1);
            // FIN PLAZO A DIEZ Y OCHO MESES

            // PLAZO A VEINTICUATRO MESES
            var capUno = (((numero * tasaPor[3]) / 360) * 30);
            var capDos = ((((capUno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capUno * 1);
            var capTres = ((((capDos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDos * 1);
            var capCuatro = ((((capTres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTres * 1);
            var capCinco = ((((capCuatro + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCuatro * 1);
            var capSeis = ((((capCinco + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCinco * 1);
            var capSiete = ((((capSeis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSeis * 1);
            var capOcho = ((((capSiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capSiete * 1);
            var capNueve = ((((capOcho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOcho * 1);
            var capDiez = ((((capNueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capNueve * 1);
            var capOnce = ((((capDiez + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiez * 1);
            var capDoce = ((((capOnce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capOnce * 1);
            var capTrece = ((((capDoce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDoce * 1);
            var capCatorce = ((((capTrece + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capTrece * 1);
            var capQuince = ((((capCatorce + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capCatorce * 1);
            var capDieciseis = ((((capQuince + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capQuince * 1);
            var capDiecisiete = ((((capDieciseis + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDieciseis * 1);
            var capDieciocho = ((((capDiecisiete + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiecisiete * 1);
            var capDiecinueve = ((((capDieciocho + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDieciocho * 1);
            var capVeinte = ((((capDiecinueve + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capDiecinueve * 1);
            var capVeintiuno = ((((capVeinte + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeinte * 1);
            var capVeintidos = ((((capVeintiuno + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeintiuno * 1);
            var capVeintitres = ((((capVeintidos + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeintidos * 1);
            var capVeinticuatro = ((((capVeintitres + (numero * 1)) * tasaPor[3]) / 360) * 30) + (capVeintitres * 1);
            var resultadoTotalCinco = capVeinticuatro + (numero * 1);
            // FIN PLAZO A VEINTICUATRO MESES
            // RESULTADO TOTAL
            $('#resuladoCero').html(formatToCurrency(resultadoTotalCero));
            $('#resuladoUno').html(formatToCurrency(resultadoTotalUno));
            $('#resuladoDos').html(formatToCurrency(resultadoTotalDos));
            $('#resuladoTres').html(formatToCurrency(resultadoTotalTres));
            $('#resuladoCuatro').html(formatToCurrency(resultadoTotalCuatro));
            $('#resuladoCinco').html(formatToCurrency(resultadoTotalCinco));
            // VISTA DE TASAS SIN EDITAR
            $('#TasaCero').html(tasasDec[0] + ' ' + "%");
            $('#TasaUno').html(tasasDec[1] + ' ' + "%");
            $('#TasaDos').html(tasasDec[2] + ' ' + "%");
            $('#TasaTres').html(tasasDec[3] + ' ' + "%");
            $('#TasaCuatro').html(tasasDec[3] + ' ' + "%");
            $('#TasaCinco').html(tasasDec[3] + ' ' + "%");
            if (numero <= 10000) {
                span = document.getElementById('resuladoCero');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoUno');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoDos');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoTres');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoCuatro');
                span.style.color = 'transparent';
                span = document.getElementById('resuladoCinco');
                span.style.color = 'transparent';
            } else {
                span = document.getElementById('resuladoCero');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoUno');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoDos');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoTres');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoCuatro');
                span.style.color = '#00BFB2';
                span = document.getElementById('resuladoCinco');
                span.style.color = '#00BFB2';
            }
        } else {
            return numero;
        }
    }
}

// ****+  VALIDADORES *******+

function onKeyPressMonto(e, numero) {
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".") != +1 && keychar == ".") {
        return false;
    } else {
        return reg.test(keychar);
    }
}

//Variables globales;
var telefonoIp = null;
var montoIp = 0;
var formulario = document.querySelector('#formulario');

function validar() {

    // let telefono;
    // telefono = document.getElementById('phone').value;

    let monto;
    monto = document.getElementById('00N5e000000pPZW').value;
    if (monto < 10000) {
        //alert("El monto debe ser desde $50,000");
        document.getElementById("error-monto").innerHTML = "El monto debe ser a partir de $10,000";
        document.getElementById("error-monto").style.display = '';
        return false;
    }
}
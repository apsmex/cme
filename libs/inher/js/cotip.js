// *************** Cotizador ***************

function onKeyPressRangoIn(e,numero){              
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".")!=+1 && keychar=="."){ 
        return false;
    }else{
        return reg.test(keychar);
    }
    
}

// cantidad en moneda

function formatToCurrency(amount) {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);
    
    return numberFormat.format(amount);
}





function calculaRangoIn(numero){
    var borrar = document.getElementById('recibes');
    // boton calcular
    const btnCalcular = document.getElementById('btnCalcular');
    btnCalcular.addEventListener('click', () => {
        calculaRangoIn(numero);
    })
    
    // *********
    const selectElement = document.querySelector('.mes');
    let slecteTaseop = document.getElementById('mes').value;

    // DE 10,001 A 50,000 PESOS ****************************************************************
    if (numero >= 10001 && numero <= 50000 ){
        $('option.hide').show();
        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        borrar.style.display = 'none';

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 30){
            var tasaUnoDecimas = 0.1050;
        }

        if (valorMM == 90){
            var tasaUnoDecimas = 0.1200;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1250;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1350;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1360;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1380;
        }
        
        // TASAS MENOS DE 250,000
        if (slecteTaseop == 1) {
            var tasaUno = 10.50;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            borrar.style.display = '';
            let resultadoSelect = document.querySelector('.rmese');
            $('#rmes').html(slecteTaseop + ' ' + 'mes');
            
        }

        if (slecteTaseop == 3) {
            var tasaUno = 12.00;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 12.50;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 13.50;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 13.60;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 13.80;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));
        $('#montoMayorErr').html('');

    }

    if(numero <= 10000 && numero > 1){
        $('#error').html('Monto mínimo de inversión $10,001');
    }else{
        $('#error').html('');
    }

    if (numero >= 50001 && numero <= 250000 ){
        $('option.hide').show();
        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        borrar.style.display = 'none';

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 30){
            var tasaUnoDecimas = 0.1050;
        }

        if (valorMM == 90){
            var tasaUnoDecimas = 0.1200;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1250;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1350;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1360;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1380;
        }
        
        // TASAS MENOS DE 250,000
        if (slecteTaseop == 1) {
            var tasaUno = 10.50;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            borrar.style.display = '';
            let resultadoSelect = document.querySelector('.rmese');
            $('#rmes').html(slecteTaseop + ' ' + 'mes');
            
        }

        if (slecteTaseop == 3) {
            var tasaUno = 12.00;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 12.50;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 13.50;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 13.60;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 13.80;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            borrar.style.display = '';
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));
        $('#montoMayorErr').html('');

    }
    // FIN DE 50,000 A 2580,000 PESOS

    //  DE 250,001 A 500,000 PESOS
    if (numero >= 250001 && numero <= 500000 ){
            $('option.hide').show();
            var valorMM = (selectElement.value * 30);
            console.log(valorMM); 

            borrar.style.display = 'none';

            // TASAS CONVERTIDAS A DECIMAS
            if (valorMM == 30){
                var tasaUnoDecimas = 0.1050;
            }

            if (valorMM == 90){
                var tasaUnoDecimas = 0.1200;
            }

            if (valorMM == 180){
                var tasaUnoDecimas = 0.1250;
            }

            if (valorMM == 360){
                var tasaUnoDecimas = 0.1350;
            }

            if (valorMM == 540){
                var tasaUnoDecimas = 0.1360;
            }

            if (valorMM == 720){
                var tasaUnoDecimas = 0.1380;
            }
            
            // TASAS MENOS DE 100000
            if (slecteTaseop == 1) {
                var tasaUno = 10.50;
                $('#conUnaTasa').html(tasaUno + ' ' + '%' );
                borrar.style.display = '';
                let resultadoSelect = document.querySelector('.rmese');
                $('#rmes').html(slecteTaseop + ' ' + 'mes');
            }
            if (slecteTaseop == 3) {
                var tasaUno = 12.00;
                $('#conUnaTasa').html(tasaUno + ' ' + '%' );
                borrar.style.display = '';
                $('#rmes').html(slecteTaseop + ' ' + 'meses');
            }
            if (slecteTaseop == 6) {
                var tasaDos = 12.50;
                $('#conUnaTasa').html(tasaDos + ' ' + '%' );
                borrar.style.display = '';
                $('#rmes').html(slecteTaseop + ' ' + 'meses');
            }
            if (slecteTaseop == 12) {
                var tasaTres = 13.50;
                $('#conUnaTasa').html(tasaTres + ' ' + '%' );
                borrar.style.display = '';
                $('#rmes').html(slecteTaseop + ' ' + 'meses');
            }
            if (slecteTaseop == 18) {
                var TasaCuatro = 13.60;
                $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
                borrar.style.display = '';
                $('#rmes').html(slecteTaseop + ' ' + 'meses');
            }
            if (slecteTaseop == 24) {
                var tasaCinco = 13.80;
                $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
                borrar.style.display = '';
                $('#rmes').html(slecteTaseop + ' ' + 'meses');
            }

            var resultadoUno = (numero * tasaUnoDecimas);
            console.log(resultadoUno);

            var resTresMm = (resultadoUno / 360) * valorMM;
            console.log(resTresMm);
            
            var resFinalUno = (resTresMm + parseInt(numero));
            console.log(resFinalUno);

            $('#recibes').html(formatToCurrency(resFinalUno));
            $('#montoMayorErr').html('');

        }
    // FIN DE 250,001 A 500,000 PESOS
    
    // DE 500,001 A 1,000,000 PESOS
    if (numero >= 500001 && numero <= 1000000){

        $('option.hide').hide();

        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 90){
            var tasaUnoDecimas = 0.1290;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1340;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1390;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1400;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1410;
        }
        
        // TASAS MENOS DE 100000
        if (slecteTaseop == 3) {
            var tasaUno = 12.90;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 13.40;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 13.90;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 14.00;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 14.10;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));
        $('#montoMayorErr').html('');

    }
    // FIN DE 500,001 A 1,000,000 PESOS

    //  DE 1,000,001 A 2,500,000 PESOS
    if (numero >= 1000001 && numero <= 2500000){
    $('option.hide').hide();
    var valorMM = (selectElement.value * 30);
    console.log(valorMM); 

    // TASAS CONVERTIDAS A DECIMAS
    if (valorMM == 90){
        var tasaUnoDecimas = 0.1310;
    }

    if (valorMM == 180){
        var tasaUnoDecimas = 0.1360;
    }

    if (valorMM == 360){
        var tasaUnoDecimas = 0.1410;
    }

    if (valorMM == 540){
        var tasaUnoDecimas = 0.1420;
    }

    if (valorMM == 720){
        var tasaUnoDecimas = 0.1430;
    }
    
    // TASAS MENOS DE 100000
    if (slecteTaseop == 3) {
        var tasaUno = 13.10;
        $('#conUnaTasa').html(tasaUno + ' ' + '%' );
        $('#rmes').html(slecteTaseop + ' ' + 'meses');
    }
    if (slecteTaseop == 6) {
        var tasaDos = 13.60;
        $('#conUnaTasa').html(tasaDos + ' ' + '%' );
        $('#rmes').html(slecteTaseop + ' ' + 'meses');
    }
    if (slecteTaseop == 12) {
        var tasaTres = 14.10;
        $('#conUnaTasa').html(tasaTres + ' ' + '%' );
        $('#rmes').html(slecteTaseop + ' ' + 'meses');
    }
    if (slecteTaseop == 18) {
        var TasaCuatro = 14.20;
        $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
        $('#rmes').html(slecteTaseop + ' ' + 'meses');
    }
    if (slecteTaseop == 24) {
        var tasaCinco = 14.30;
        $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
        $('#rmes').html(slecteTaseop + ' ' + 'meses');
    }

    var resultadoUno = (numero * tasaUnoDecimas);
    console.log(resultadoUno);

    var resTresMm = (resultadoUno / 360) * valorMM;
    console.log(resTresMm);
    
    var resFinalUno = (resTresMm + parseInt(numero));
    console.log(resFinalUno);

    $('#recibes').html(formatToCurrency(resFinalUno));
    $('#montoMayorErr').html('');

    }
    //  FIN DE 1,000,001 A 2,500,000 PESOS

    //  DE 2,500,001 A 5,000,000 PESOS
    if (numero >= 2500001 && numero <= 5000000){
        $('option.hide').hide();

        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 90){
            var tasaUnoDecimas = 0.1340;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1390;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1440;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1450;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1460;
        }
        
        // TASAS MENOS DE 100000
        if (slecteTaseop == 3) {
            var tasaUno = 13.40;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 13.90;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 14.40;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 14.50;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 14.60;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));
        $('#montoMayorErr').html('');

    }



    //  DE 5,000,000 a 30,000,000 Pesos
    if (numero >= 5000000 && numero <= 30000000){
        $('option.hide').hide();

        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 90){
            var tasaUnoDecimas = 0.1350;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1400;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1450;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1460;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1470;
        }
        
        // TASAS MENOS DE 100000
        if (slecteTaseop == 3) {
            var tasaUno = 13.50;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 14.00;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 14.50;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 14.60;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 14.70;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));
        $('#montoMayorErr').html('');

    }

    if ((numero >= 30000001)) {
        // alert('Estamos trabajando en ofrecerte mejores tasas de rendimiento');
        var montMy = document.getElementById('montoMayorErr');
        $('#recibes').html('00');
        $('#montoMayorErr').html('Estamos trabajando en ofrecerte mejores tasas de rendimiento');
        if (slecteTaseop == 3) {
            var tasaUno = 00;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html( '0');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 00;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html('0');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 00;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html('0');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 00;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html('0');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 00;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(+ '0');
        }
    }
    //  DE 2,500,001 A 5,000,000 PESOS


    //  DE 5,000,001 A 30,000,000 PESOS
    /*if (numero >= 5000000 && numero <= 30000000){
        $('option.hide').hide();

        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 90){
            var tasaUnoDecimas = 0.1260;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1310;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1360;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1370;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1380;
        }
        
        // TASAS MENOS DE 100000
        if (slecteTaseop == 3) {
            var tasaUno = 12.60;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 13.10;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 13.60;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 13.70;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 13.80;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));

    }*/
    //  DE 5,000,001 A 30,000,000 PESOS

    //  DE 30,000,001 A 60,000,000 PESOS
    /*if (numero >= 30000001 && numero <= 60000000){
        $('option.hide').hide();

        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 90){
            var tasaUnoDecimas = 0.1280;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1330;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1380;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1390;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1400;
        }
        
        // TASAS MENOS DE 100000
        if (slecteTaseop == 3) {
            var tasaUno = 12.80;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 13.30;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 13.80;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 13.90;
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 14.00;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));

    }*/
    //  DE 30,000,001 A 60,000,000 PESOS

    //  DE 60,000,001 A 90,000,000 PESOS
    /*if (numero >= 60000001 && numero <= 90000000){
        $('option.hide').hide();

        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 90){
            var tasaUnoDecimas = 0.1310;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1360;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1410;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1420;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1430;
        }
        
        // TASAS MENOS DE 100000
        if (slecteTaseop == 3) {
            var tasaUno = 13.10;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 13.60;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 14.10;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 14.20
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 14.30;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));

    }*/
    //  DE 60,000,001 A 90,000,000 PESOS


    //  DE 90,000,001 > 
    /*if (numero >= 90000001){
        $('option.hide').hide();

        var valorMM = (selectElement.value * 30);
        console.log(valorMM); 

        // TASAS CONVERTIDAS A DECIMAS
        if (valorMM == 90){
            var tasaUnoDecimas = 0.1410;
        }

        if (valorMM == 180){
            var tasaUnoDecimas = 0.1460;
        }

        if (valorMM == 360){
            var tasaUnoDecimas = 0.1510;
        }

        if (valorMM == 540){
            var tasaUnoDecimas = 0.1520;
        }

        if (valorMM == 720){
            var tasaUnoDecimas = 0.1530;
        }
        
        // TASAS MENOS DE 100000
        if (slecteTaseop == 3) {
            var tasaUno = 14.10;
            $('#conUnaTasa').html(tasaUno + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 6) {
            var tasaDos = 14.60;
            $('#conUnaTasa').html(tasaDos + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 12) {
            var tasaTres = 15.10;
            $('#conUnaTasa').html(tasaTres + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 18) {
            var TasaCuatro = 15.20
            $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }
        if (slecteTaseop == 24) {
            var tasaCinco = 15.30;
            $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
            $('#rmes').html(slecteTaseop + ' ' + 'meses');
        }

        var resultadoUno = (numero * tasaUnoDecimas);
        console.log(resultadoUno);

        var resTresMm = (resultadoUno / 360) * valorMM;
        console.log(resTresMm);
        
        var resFinalUno = (resTresMm + parseInt(numero));
        console.log(resFinalUno);

        $('#recibes').html(formatToCurrency(resFinalUno));

    }*/
    //  DE 90,000,001 a +
    









    //  5,000,000 hasta infinito
    // if (numero >= 5000001){
    //     $('option.hide').hide();

    //     var valorMM = (selectElement.value * 30);
    //     console.log(valorMM); 

    //     if (valorMM == 90){
    //         var tasaUnoDecimas = 0.1075;
    //     }

    //     if (valorMM == 180){
    //         var tasaUnoDecimas = 0.1150;
    //     }

    //     if (valorMM == 360){
    //         var tasaUnoDecimas = 0.1250;
    //     }

    //     if (valorMM == 540){
    //         var tasaUnoDecimas = 0.1275;
    //     }

    //     if (valorMM == 720){
    //         var tasaUnoDecimas = 0.1300;
    //     }
        
    //     if (slecteTaseop == 3) {
    //         var tasaUno = 10.75;
    //         $('#conUnaTasa').html(tasaUno);
    //         $('#rmes').html(slecteTaseop + ' ' + 'meses');
    //     }
    //     if (slecteTaseop == 6) {
    //         var tasaDos = 11.50;
    //         $('#conUnaTasa').html(tasaDos + ' ' + '%' );
    //         $('#rmes').html(slecteTaseop + ' ' + 'meses');
    //     }
    //     if (slecteTaseop == 12) {
    //         var tasaTres = 12.50;
    //         $('#conUnaTasa').html(tasaTres + ' ' + '%' );
    //         $('#rmes').html(slecteTaseop + ' ' + 'meses');
    //     }
    //     if (slecteTaseop == 18) {
    //         var TasaCuatro = 12.75;
    //         $('#conUnaTasa').html(TasaCuatro + ' ' + '%' );
    //         $('#rmes').html(slecteTaseop + ' ' + 'meses');
    //     }
    //     if (slecteTaseop == 24) {
    //         var tasaCinco = 13;
    //         $('#conUnaTasa').html(tasaCinco + ' ' + '%' );
    //         $('#rmes').html(slecteTaseop + ' ' + 'meses');
    //     }

    //     var resultadoUno = (numero * tasaUnoDecimas);
    //     console.log(resultadoUno);

    //     var resTresMm = (resultadoUno / 360) * valorMM;
    //     console.log(resTresMm);
        
    //     var resFinalUno = (resTresMm + parseInt(numero));
    //     console.log(resFinalUno);

    //     $('#recibes').html(formatToCurrency(resFinalUno));

    // }


        
    }
    






























// let items = document.querySelectorAll('.carss .carousel-item-dos')

//      items.forEach((el) => {
//          const minPerSlide = 3
//          let next = el.nextElementSibling
//          for (var i=1; i<minPerSlide; i++) {
//              if (!next) {
//             // wrap carousel by using first child
//             next = items[0]
//         }
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })


// ************+  VALIDADORES *******************+

function onKeyPressMonto(e,numero){              
    var key = window.event ? e.keyCode : e.which;
    var keychar = String.fromCharCode(key);
    reg = /\d|\./;
    if (numero.indexOf(".")!=+1 && keychar=="."){ 
        return false;
    }else{
        return reg.test(keychar);
    }
    
}


// function validar(){
//     let telefonoIp;
//     telefonoIp = document.getElementById('phone').value;

//     let montoIp;
//     montoIp = document.getElementById('00N5e000000pPZW').value;

//     if (telefonoIp.length < 10) {
//         //alert("Por favor, ingrese un teléfono de contacto a 10 dígitos.");
//         document.getElementById("error-tel").innerHTML = "Ingrese un teléfono a 10 dígitos.";
//     }else{
//         document.getElementById("error-tel").innerHTML = "Listo";
//     }

//     if (montoIp < 50000) {
//         //alert("El monto debe ser desde $50,000");
//         document.getElementById('error-monto').innerHTML = "El monto debe ser mayor a $50,000";
//     }
//     else{
//         document.getElementById('error-monto').innerHTML = "listo";
//     }
// }


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
        document.getElementById("error-monto").innerHTML = "El monto debe ser a partir de $10,001";
        document.getElementById("error-monto").style.display = '';
        return false;
    }

    // if (telefono.length < 10) {
    //             alert("Por favor, ingrese un teléfono de contacto a 10 dígitos.");
    //             document.getElementById("error-tel").innerHTML = "Ingrese un teléfono a 10 dígitos.";
    //             document.getElementById('botonEnviar').disabled = false;
    //             return false;
    //         }

            
        }



        
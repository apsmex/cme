// SE CREA LA FUNCION PARA EL COTIZADOR XADELA

function xadela() {

    var plazoXadela = document.getElementById('plazoXadela').value;
    var montoXadela = document.getElementById('montoXadela').value;

    // ARREGLO DE TASAS INVERSIÓN
    let tasas = [
        0.05, // 0
        0.06, // 1
        0.07, // 2
        0.08, // 3
        0.10, // 4
        0.11, // 5
        0.13, // 6
        0.16, // 7
        0.16 // 8
    ];

    // ARREGLOA DE IMAGNES Y TEXTO
    let premiosImg = [
        // 'libs/inher/images/nvo-home/cashback-150.png',
        // 'libs/inher/images/nvo-home/beats.png',
        // 'libs/inher/images/nvo-home/airpods-4ta.png',
        // 'libs/inher/images/nvo-home/apple-watch.png',
        // 'libs/inher/images/nvo-home/iphone15.png',
        // 'libs/inher/images/nvo-home/iphone16.png',
        // 'libs/inher/images/nvo-home/combo-apple.png',
        // 'libs/inher/images/nvo-home/viaje.png',
        // 'libs/inher/images/nvo-home/mazda.png'

        '../libs/inher/images/nvo-home/premio-tarjeta-amazon150.png', // premio 0
        '../libs/inher/images/nvo-home/premio-tarjeta-amazon250.png', // premio 1
        '../libs/inher/images/nvo-home/premio-tarjeta-amazon500.png', // premio 2
        '../libs/inher/images/nvo-home/premio-extractor-ninja-cafetera-espresso.png', // premio 3
        '../libs/inher/images/nvo-home/premio-airpods-2da.png', // premio 4
        '../libs/inher/images/nvo-home/premio-apple-watch-SE-2a-generacion.png', // premio 5
        '../libs/inher/images/nvo-home/premio-secadora-robot-scooter.png', // premio 6
        '../libs/inher/images/nvo-home/premio-iphone-15-128gb.png', // premio 7
        '../libs/inher/images/nvo-home/premio-iphone-16-128gb.png', // premio 8
        '../libs/inher/images/nvo-home/premio-iphone16-mac-pro-ipad-13.png', // premio 9
        '../libs/inher/images/nvo-home/premio-monedero-electronico-50mil.png', // premio 10
        '../libs/inher/images/nvo-home/premio-viaje-a-europa.png', // premio 11
        '../libs/inher/images/nvo-home/premio-monedero-electronico-100mil.png', // premio 12
        '../libs/inher/images/nvo-home/premio-mazda.png' // premio 13
    ]

    let PremioLeyenda = "¡Y llévate de regalo";
    let ErrorLeyenda = "El monto mínimo debe ser a partir de $100";

    const divImage = document.getElementById('premio')

    const remover = divImage.querySelector('.remover');
    const removerTexto = divImage.querySelector('.removerTexto');
    const removerTextoError = divImage.querySelector('.removerTextoError');
    if (remover && removerTexto && removerTextoError) {
        remover.remove();
        removerTexto.remove();
        removerTextoError.remove();
    }
    const premio = document.createElement("img");
    const premioTexto = document.createElement("p");
    const errorTexto = document.createElement("p");

    premio.classList.add('remover');
    premioTexto.classList.add('removerTexto');
    errorTexto.classList.add('removerTextoError');

    divImage.appendChild(premioTexto);
    divImage.appendChild(errorTexto);
    divImage.appendChild(premio);

    if (montoXadela.length == 0) {
        premio.remove();
        premioTexto.remove();
        errorTexto.remove();
    }

    switch (parseInt(plazoXadela)) {
        case 30: // 1 mes
            if (montoXadela < 100) {
                var recibeInteres = 0;
                var tasaRedondeada = 0;
                errorTexto.innerText = ErrorLeyenda;
            } else if (montoXadela >= 100 && montoXadela <= 1000) {
                var recibeInteres = (montoXadela * (tasas[0] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[0] * 100);
            } else if (montoXadela >= 1001 && montoXadela <= 10000) {
                var recibeInteres = (montoXadela * (tasas[2] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[2] * 100);
            } else if (montoXadela >= 10001 && montoXadela <= 50000) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            } else if (montoXadela >= 50001 && montoXadela <= 250000) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            } else if (montoXadela >= 250001 && montoXadela <= 500000) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            } else if (montoXadela >= 1000001 && montoXadela <= 2500000) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            } else if (montoXadela >= 2500001 && montoXadela <= 5000000) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            } else if (montoXadela >= 10000001) {
                var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[4] * 100);
            }
            break;

        case 90: // 3 meses
            if (montoXadela < 100) {
                var recibeInteres = 0;
                var tasaRedondeada = 0;
                errorTexto.innerText = ErrorLeyenda;
            } else if (montoXadela >= 100 && montoXadela <= 1000) {
                var recibeInteres = (montoXadela * (tasas[0] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[0] * 100);
            } else if (montoXadela >= 1001 && montoXadela <= 10000) {
                var recibeInteres = (montoXadela * (tasas[3] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[3] * 100);
            } else if (montoXadela >= 10001 && montoXadela <= 50000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            } else if (montoXadela >= 50001 && montoXadela <= 250000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            } else if (montoXadela >= 250001 && montoXadela <= 500000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            } else if (montoXadela >= 1000001 && montoXadela <= 2500000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            } else if (montoXadela >= 2500001 && montoXadela <= 5000000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            } else if (montoXadela >= 10000001) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 90) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
            }
            break;

        case 180: // 6 meses
            if (montoXadela < 100) {
                var recibeInteres = 0;
                var tasaRedondeada = 0;
                errorTexto.innerText = ErrorLeyenda;
            } else if (montoXadela >= 100 && montoXadela <= 1000) {
                var recibeInteres = (montoXadela * (tasas[0] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[0] * 100);
            } else if (montoXadela >= 1001 && montoXadela <= 10000) {
                var recibeInteres = (montoXadela * (tasas[5] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[5] * 100);
                // } else if (montoXadela >= 10001 && montoXadela <= 50000) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // } else if (montoXadela >= 50001 && montoXadela <= 250000) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // } else if (montoXadela >= 250001 && montoXadela <= 500000) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // } else if (montoXadela >= 1000001 && montoXadela <= 2500000) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // } else if (montoXadela >= 2500001 && montoXadela <= 5000000) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // } else if (montoXadela >= 10000001) {
                //     var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[7] * 100);
                // }
            } else if (montoXadela >= 10001 && montoXadela <= 50000) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[0];
            } else if (montoXadela >= 50001 && montoXadela <= 200000) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[2];
            } else if (montoXadela >= 200001 && montoXadela <= 500000) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[4];
            } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[5];
            } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[7];
            } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[8];
            } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[10];
            } else if (montoXadela >= 10000001) {
                var recibeInteres = (montoXadela * (tasas[7] / 360) * 180) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[7] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[12];
            }
            break;

        case 360: // 12 meses
            if (montoXadela < 100) {
                var recibeInteres = 0;
                var tasaRedondeada = 0;
                errorTexto.innerText = ErrorLeyenda;
            } else if (montoXadela >= 100 && montoXadela <= 1000) {
                var recibeInteres = (montoXadela * (tasas[1] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[1] * 100);
            } else if (montoXadela >= 1001 && montoXadela <= 10000) {
                var recibeInteres = (montoXadela * (tasas[6] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[6] * 100);
                // } else if (montoXadela >= 10001 && montoXadela <= 100000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[0];
                // } else if (montoXadela >= 100001 && montoXadela <= 300000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[1];
                // } else if (montoXadela >= 300001 && montoXadela <= 600000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[2];
                // } else if (montoXadela >= 600001 && montoXadela <= 1000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[3];
                // } else if (montoXadela >= 1000001 && montoXadela <= 3000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[4];
                // } else if (montoXadela >= 3000001 && montoXadela <= 5000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[5];
                // } else if (montoXadela >= 5000001) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[6];
                // }
            } else if (montoXadela >= 10001 && montoXadela <= 50000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[1];
            } else if (montoXadela >= 50001 && montoXadela <= 200000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[3];
            } else if (montoXadela >= 200001 && montoXadela <= 500000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[5];
            } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[6];
            } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[8];
            } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[9];
            } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[11];
            } else if (montoXadela >= 10000001) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 360) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[13];
            }
            break;

        case 540: // 18 meses
            if (montoXadela < 100) {
                var recibeInteres = 0;
                var tasaRedondeada = 0;
                errorTexto.innerText = ErrorLeyenda;
            } else if (montoXadela >= 100 && montoXadela <= 1000) {
                var recibeInteres = (montoXadela * (tasas[1] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[1] * 100);
            } else if (montoXadela >= 1001 && montoXadela <= 10000) {
                var recibeInteres = (montoXadela * (tasas[6] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[6] * 100);
                // } else if (montoXadela >= 10001 && montoXadela <= 100000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[0];
                // } else if (montoXadela >= 100001 && montoXadela <= 300000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[1];
                // } else if (montoXadela >= 300001 && montoXadela <= 600000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[2];
                // } else if (montoXadela >= 600001 && montoXadela <= 1000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[3];
                // } else if (montoXadela >= 1000001 && montoXadela <= 3000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[4];
                // } else if (montoXadela >= 3000001 && montoXadela <= 5000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[5];
                // } else if (montoXadela >= 5000001) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[6];
                // }
            } else if (montoXadela >= 10001 && montoXadela <= 50000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[1];
            } else if (montoXadela >= 50001 && montoXadela <= 200000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[3];
            } else if (montoXadela >= 200001 && montoXadela <= 500000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[5];
            } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[6];
            } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[8];
            } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[9];
            } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[11];
            } else if (montoXadela >= 10000001) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 540) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[13];
            }
            break;

        case 720: // 24 meses
            if (montoXadela < 100) {
                var recibeInteres = 0;
                var tasaRedondeada = 0;
                errorTexto.innerText = ErrorLeyenda;
            } else if (montoXadela >= 100 && montoXadela <= 1000) {
                var recibeInteres = (montoXadela * (tasas[1] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[1] * 100);
            } else if (montoXadela >= 1001 && montoXadela <= 10000) {
                var recibeInteres = (montoXadela * (tasas[6] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[6] * 100);
                // } else if (montoXadela >= 10001 && montoXadela <= 100000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                // } else if (montoXadela >= 100001 && montoXadela <= 300000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                // } else if (montoXadela >= 300001 && montoXadela <= 600000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                // } else if (montoXadela >= 600001 && montoXadela <= 1000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                // } else if (montoXadela >= 1000001 && montoXadela <= 3000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                // } else if (montoXadela >= 3000001 && montoXadela <= 5000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                // } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[7];
                // } else if (montoXadela >= 10000001) {
                //     var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                //     var tasaRedondeada = Math.round(tasas[8] * 100);
                //     premioTexto.innerText = PremioLeyenda;
                //     premio.src = premiosImg[8];
                // }
            } else if (montoXadela >= 10001 && montoXadela <= 50000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[1];
            } else if (montoXadela >= 50001 && montoXadela <= 200000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[3];
            } else if (montoXadela >= 200001 && montoXadela <= 500000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[5];
            } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[6];
            } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[8];
            } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[9];
            } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[11];
            } else if (montoXadela >= 10000001) {
                var recibeInteres = (montoXadela * (tasas[8] / 360) * 720) + parseInt(montoXadela);
                var tasaRedondeada = Math.round(tasas[8] * 100);
                // Imagenes y texto del premio
                // premioTexto.innerText = PremioLeyenda;
                // premio.src = premiosImg[13];
            }
            break;

        default:
            console.log("Ocurrió un error.");
    }

    var plazosReducido = (plazoXadela / 30);

    document.getElementById("recibe").innerHTML = formatToCurrency(recibeInteres.toFixed(2));
    document.getElementById("conUnaTasa").innerHTML = tasaRedondeada + "" + "%";
    document.getElementById("plazoAdela").innerHTML = plazosReducido + " " + "Meses";
}

function formatToCurrency(amount) {
    const options = { style: 'currency', currency: 'USD' };
    const numberFormat = new Intl.NumberFormat('en-US', options);

    return numberFormat.format(amount);
}

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
// SE CREA LA FUNCION PARA EL COTIZADOR XADELA

function xadela() {

    var plazoXadela = document.getElementById('plazoXadela').value;
    var montoXadela = document.getElementById('montoXadela').value;

    // ARREGLO DE TASAS INVERSIÓN
    let tasas = [
        0.05, // 0
        0.06, // 1
        0.065, // 2
        0.070, // 3
        0.105, // 4
        0.114, // 5
        0.116, // 6
        0.119, // 7
        0.12, // 8
        0.121, // 9
        0.129, // 10
        0.131, // 11
        0.134, // 12
        0.135, // 13
        0.136, // 14
        0.15, // 15
        0.16 // 16
        ];

    // ARREGLOA DE IMAGNES Y TEXTO
    let premiosImg = [
        '../libs/inher/images/nvo-home/premio1-6meses.png', // premio 0
        '../libs/inher/images/nvo-home/premio2-12meses.png', // premio 1
        '../libs/inher/images/nvo-home/premio3-6meses.png', // premio 2
        '../libs/inher/images/nvo-home/premio4-12meses.png', // premio 3
        '../libs/inher/images/nvo-home/premio5-6meses.png', // premio 4
        '../libs/inher/images/nvo-home/premio6-12meses.png', // premio 5
        '../libs/inher/images/nvo-home/premio7-6meses.png', // premio 6
        '../libs/inher/images/nvo-home/premio8-12meses.png', // premio 7
        '../libs/inher/images/nvo-home/premio9-6meses.png', // premio 8
        '../libs/inher/images/nvo-home/premio10-12meses.png', // premio 9
        '../libs/inher/images/nvo-home/premio11-6meses.png', // premio 10
        '../libs/inher/images/nvo-home/premio12-12meses.png', // premio 11
        '../libs/inher/images/nvo-home/premio13-6meses.png', // premio 12
        '../libs/inher/images/nvo-home/premio14-12meses.png', // premio 13
        '../libs/inher/images/nvo-home/premio15-6meses.png', // premio 14
        '../libs/inher/images/nvo-home/premio16-12meses.png' // premio 15
        ]

    let PremioLeyenda = "¡Y llévate de regalo";

    const divImage = document.getElementById('premio')

    const remover = divImage.querySelector('.remover');
    const removerTexto = divImage.querySelector('.removerTexto');
    if (remover && removerTexto) {
        remover.remove();
        removerTexto.remove();
    }
    const premio = document.createElement("img");
    const premioTexto = document.createElement("p");

    premio.classList.add('remover');
    premioTexto.classList.add('removerTexto');

    divImage.appendChild(premioTexto);
    divImage.appendChild(premio);

    if (montoXadela.length == 0) {
        premio.remove();
        premioTexto.remove();
    }

    switch (parseInt(plazoXadela)) {
    case 30:
        if (montoXadela <= 10000) {
            var recibeInteres = (montoXadela * (tasas[0] / 360) * 30) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[0] * 100);
        } else if (montoXadela >= 10001 && montoXadela <= 500000) {
            var recibeInteres = (montoXadela * (tasas[4] / 360) * 30) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[4] * 100);
        } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
            var recibeInteres = (montoXadela * (tasas[5] / 360) * 30) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[5] * 100);
        } else if (montoXadela >= 1000001 && montoXadela <= 2500000) {
            var recibeInteres = (montoXadela * (tasas[6] / 360) * 30) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[6] * 100);
        } else if (montoXadela >= 2500001 && montoXadela <= 5000000) {
            var recibeInteres = (montoXadela * (tasas[7] / 360) * 30) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[7] * 100);
        } else if (montoXadela >= 5000001 && montoXadela <= 60000000) {
            var recibeInteres = (montoXadela * (tasas[8] / 360) * 30) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[8] * 100);
        } else if (montoXadela >= 60000001) {
            var recibeInteres = (montoXadela * (tasas[9] / 360) * 30) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[9] * 100);
        }
        break;

    case 90:
        if (montoXadela <= 10000) {
            var recibeInteres = (montoXadela * (tasas[0] / 360) * 90) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[0] * 100);
        } else if (montoXadela >= 10001 && montoXadela <= 500000) {
            var recibeInteres = (montoXadela * (tasas[8] / 360) * 90) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[8] * 100);
        } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
            var recibeInteres = (montoXadela * (tasas[10] / 360) * 90) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[10] * 100);
        } else if (montoXadela >= 1000001 && montoXadela <= 2500000) {
            var recibeInteres = (montoXadela * (tasas[11] / 360) * 90) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[11] * 100);
        } else if (montoXadela >= 2500001 && montoXadela <= 5000000) {
            var recibeInteres = (montoXadela * (tasas[12] / 360) * 90) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[12] * 100);
        } else if (montoXadela >= 5000001 && montoXadela <= 60000000) {
            var recibeInteres = (montoXadela * (tasas[13] / 360) * 90) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[13] * 100);
        } else if (montoXadela >= 60000001) {
            var recibeInteres = (montoXadela * (tasas[14] / 360) * 90) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[14] * 100);
        }
        break;

    case 180:
        if (montoXadela <= 10000) {
            var recibeInteres = (montoXadela * (tasas[0] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[0] * 100);
        } else if (montoXadela >= 10001 && montoXadela <= 50000) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[0];
        } else if (montoXadela >= 50001 && montoXadela <= 200000) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[2];
        } else if (montoXadela >= 200001 && montoXadela <= 500000) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[4];
        } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[6];
        } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[8];
        } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[10];
        } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[12];
        } else if (montoXadela >= 10000001) {
            var recibeInteres = (montoXadela * (tasas[15] / 360) * 180) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[15] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[14];
        }
        break;

    case 360:
        if (montoXadela <= 10000) {
            var recibeInteres = (montoXadela * (tasas[1] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[0] * 100);
        } else if (montoXadela >= 10001 && montoXadela <= 50000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[1];
        } else if (montoXadela >= 50001 && montoXadela <= 200000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[3];
        } else if (montoXadela >= 200001 && montoXadela <= 500000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[5];
        } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[7];
        } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[9];
        } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[11];
        } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[13];
        } else if (montoXadela >= 10000001) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 360) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[15];
        }
        break;

    case 540:
        if (montoXadela <= 10000) {
            var recibeInteres = (montoXadela * (tasas[2] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[0] * 100);
        } else if (montoXadela >= 10001 && montoXadela <= 50000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[1];
        } else if (montoXadela >= 50001 && montoXadela <= 200000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[3];
        } else if (montoXadela >= 200001 && montoXadela <= 500000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[5];
        } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[7];
        } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[9];
        } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[11];
        } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[13];
        } else if (montoXadela >= 10000001) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 540) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[15];
        }
        break;

    case 720:
        if (montoXadela <= 10000) {
            var recibeInteres = (montoXadela * (tasas[3] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[0] * 100);
        } else if (montoXadela >= 10001 && montoXadela <= 50000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[1];
        } else if (montoXadela >= 50001 && montoXadela <= 200000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[3];
        } else if (montoXadela >= 200001 && montoXadela <= 500000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[5];
        } else if (montoXadela >= 500001 && montoXadela <= 1000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[7];
        } else if (montoXadela >= 1000001 && montoXadela <= 2000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[9];
        } else if (montoXadela >= 2000001 && montoXadela <= 5000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[11];
        } else if (montoXadela >= 5000001 && montoXadela <= 10000000) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[13];
        } else if (montoXadela >= 10000001) {
            var recibeInteres = (montoXadela * (tasas[16] / 360) * 720) + parseInt(montoXadela);
            var tasaRedondeada = (tasas[16] * 100);
                // Imagenes y texto del premio
            premioTexto.innerText = PremioLeyenda;
            premio.src = premiosImg[15];
        }
        break;

    default:
        console.log("Ocurrió un error.");
    }

    var plazosReducido = (plazoXadela / 30);

    document.getElementById("recibe").innerHTML = formatToCurrency(recibeInteres.toFixed(2));
    document.getElementById("conUnaTasa").innerHTML = tasaRedondeada + " " + "%";
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
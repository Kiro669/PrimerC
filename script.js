var cajaActiva = '';
function activarCaja(id) {
    var cajas = document.querySelectorAll('.Texto');
    for (var i = 0; i < cajas.length; i++) {
        if (cajas[i].id === id) {
            cajas[i].disabled = false;
        } else {
            cajas[i].disabled = true;
        }
    }
}

function convertir() {
    var texto1 = document.getElementById('texto1').value;
    var texto2 = document.getElementById('texto2').value;

    if (!document.getElementById('texto1').disabled) {
        
        var textoEncriptado = texto1.toLowerCase()
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
        document.getElementById('texto2').value = textoEncriptado;
    } else if (!document.getElementById('texto2').disabled) {
       
        var textoDesencriptado = texto2.toLowerCase()
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
        document.getElementById('texto1').value = textoDesencriptado;
    }
}

function copiarTexto() {
    var textoACopiar;
    if (!document.getElementById('texto1').disabled) {
        textoACopiar = document.getElementById('texto2').value;
    } else {
        textoACopiar = document.getElementById('texto1').value;
    }

    navigator.clipboard.writeText(textoACopiar).then(function () {
        alert('Texto copiado al portapapeles.');
    }, function (err) {
        console.error('Error al copiar el texto: ', err);
    });
}


var boton = document.getElementById('getlink');
boton.addEventListener('click', function(e) {
  if(boton.id == 'getlink'){
    var aux = document.createElement('input');
    aux.setAttribute('value', window.location.href.split('?')[0].split('#')[0]);
    document.body.appendChild(aux);
    aux.select();
    try {
      document.execCommand('copy');
      var aviso = document.createElement('div');
      aviso.setAttribute('id', 'aviso');
      aviso.style.cssText = 'position:fixed; z-index:9999999; top:2%; left:46%; margin-left:-60px; font-size:18px; padding: 10px 15px 10px 15px; color: #ffffff; border-radius:10px; background-color: #f32735 !important; box-shadow: 0px 0px 10px 0px rgb(0 0 0 / 40%);';
      aviso.innerHTML = 'Enlace Copiado';
      document.body.appendChild(aviso);
      document.load = setTimeout('document.body.removeChild(aviso)', 2000);
      document.load = setTimeout('boton.id = "getlink"',2500);
      boton.id = '';
    } catch (e) {
      alert('Lo sentimos, esta función no es compatible con tu navegador.');
    }
    document.body.removeChild(aux);
  }
});

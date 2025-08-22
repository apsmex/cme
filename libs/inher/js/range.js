/*! rangeslider.js - v2.0.2 | (c) 2015 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
! function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery)
}(function (a) {
  "use strict";

  function b() {
    var a = document.createElement("input");
    return a.setAttribute("type", "range"), "text" !== a.type
  }

  function c(a, b) {
    var c = Array.prototype.slice.call(arguments, 2);
    return setTimeout(function () {
      return a.apply(null, c)
    }, b)
  }

  function d(a, b) {
    return b = b || 100,
      function () {
        if (!a.debouncing) {
          var c = Array.prototype.slice.apply(arguments);
          a.lastReturnVal = a.apply(window, c), a.debouncing = !0
        }
        return clearTimeout(a.debounceTimeout), a.debounceTimeout = setTimeout(function () {
          a.debouncing = !1
        }, b), a.lastReturnVal
      }
  }

  function e(a) {
    return a && (0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1)
  }

  function f(a) {
    for (var b = [], c = a.parentNode; e(c);) b.push(c), c = c.parentNode;
    return b
  }

  function g(a, b) {
    function c(a) {
      "undefined" != typeof a.open && (a.open = a.open ? !1 : !0)
    }
    var d = f(a),
      e = d.length,
      g = [],
      h = a[b];
    if (e) {
      for (var i = 0; e > i; i++) g[i] = d[i].style.cssText, d[i].style.display = "block", d[i].style.height = "0", d[i].style.overflow = "hidden", d[i].style.visibility = "hidden", c(d[i]);
      h = a[b];
      for (var j = 0; e > j; j++) d[j].style.cssText = g[j], c(d[j])
    }
    return h
  }

  function h(a, b) {
    var c = parseFloat(a);
    return Number.isNaN(c) ? b : c
  }

  function i(a) {
    return a.charAt(0).toUpperCase() + a.substr(1)
  }

  function j(b, e) {
    if (this.$window = a(window), this.$document = a(document), this.$element = a(b), this.options = a.extend({}, n, e), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = o.orientation[this.orientation].dimension, this.DIRECTION = o.orientation[this.orientation].direction, this.DIRECTION_STYLE = o.orientation[this.orientation].directionStyle, this.COORDINATE = o.orientation[this.orientation].coordinate, this.polyfill && m) return !1;
    this.identifier = "js-" + k + "-" + l++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = a('<div class="' + this.options.fillClass + '" />'), this.$handle = a('<div class="' + this.options.handleClass + '" />'), this.$range = a('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      opacity: "0"
    }), this.handleDown = a.proxy(this.handleDown, this), this.handleMove = a.proxy(this.handleMove, this), this.handleEnd = a.proxy(this.handleEnd, this), this.init();
    var f = this;
    this.$window.on("resize." + this.identifier, d(function () {
      c(function () {
        f.update()
      }, 300)
    }, 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, function (a, b) {
      if (!b || b.origin !== f.identifier) {
        var c = a.target.value,
          d = f.getPositionFromValue(c);
        f.setPosition(d)
      }
    })
  }
  Number.isNaN = Number.isNaN || function (a) {
    return "number" == typeof a && a !== a
  };
  var k = "rangeslider",
    l = 0,
    m = b(),
    n = {
      polyfill: !0,
      orientation: "horizontal",
      rangeClass: "rangeslider",
      disabledClass: "rangeslider--disabled",
      horizontalClass: "rangeslider--horizontal",
      verticalClass: "rangeslider--vertical",
      fillClass: "rangeslider__fill",
      handleClass: "rangeslider__handle",
      startEvent: ["mousedown", "touchstart", "pointerdown"],
      moveEvent: ["mousemove", "touchmove", "pointermove"],
      endEvent: ["mouseup", "touchend", "pointerup"]
    },
    o = {
      orientation: {
        horizontal: {
          dimension: "width",
          direction: "left",
          directionStyle: "left",
          coordinate: "x"
        },
        vertical: {
          dimension: "height",
          direction: "top",
          directionStyle: "bottom",
          coordinate: "y"
        }
      }
    };
  j.prototype.init = function () {
    this.update(!0, !1), this.$element[0].value = this.value, this.onInit && "function" == typeof this.onInit && this.onInit()
  }, j.prototype.update = function (a, b) {
    a = a || !1, a && (this.min = h(this.$element[0].getAttribute("min"), 0), this.max = h(this.$element[0].getAttribute("max"), 100), this.value = h(this.$element[0].value, this.min + (this.max - this.min) / 2), this.step = h(this.$element[0].getAttribute("step"), 1)), this.handleDimension = g(this.$handle[0], "offset" + i(this.DIMENSION)), this.rangeDimension = g(this.$range[0], "offset" + i(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, b)
  }, j.prototype.handleDown = function (a) {
    if (a.preventDefault(), this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), !((" " + a.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {
      var b = this.getRelativePosition(a),
        c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
        d = this.getPositionFromNode(this.$handle[0]) - c,
        e = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
      this.setPosition(e), b >= d && b < d + this.handleDimension && (this.grabPos = b - d)
    }
  }, j.prototype.handleMove = function (a) {
    a.preventDefault();
    var b = this.getRelativePosition(a),
      c = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
    this.setPosition(c)
  }, j.prototype.handleEnd = function (a) {
    a.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$element.trigger("change", {
      origin: this.identifier
    }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
  }, j.prototype.cap = function (a, b, c) {
    return b > a ? b : a > c ? c : a
  }, j.prototype.setPosition = function (a, b) {
    var c, d;
    void 0 === b && (b = !0), c = this.getValueFromPosition(this.cap(a, 0, this.maxHandlePos)), d = this.getPositionFromValue(c), this.$fill[0].style[this.DIMENSION] = d + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = d + "px", this.setValue(c), this.position = d, this.value = c, b && this.onSlide && "function" == typeof this.onSlide && this.onSlide(d, c)
  }, j.prototype.getPositionFromNode = function (a) {
    for (var b = 0; null !== a;) b += a.offsetLeft, a = a.offsetParent;
    return b
  }, j.prototype.getRelativePosition = function (a) {
    var b = i(this.COORDINATE),
      c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
      d = 0;
    return "undefined" != typeof a["page" + b] ? d = a["client" + b] : "undefined" != typeof a.originalEvent["client" + b] ? d = a.originalEvent["client" + b] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0]["client" + b] ? d = a.originalEvent.touches[0]["client" + b] : a.currentPoint && "undefined" != typeof a.currentPoint[this.COORDINATE] && (d = a.currentPoint[this.COORDINATE]), d - c
  }, j.prototype.getPositionFromValue = function (a) {
    var b, c;
    return b = (a - this.min) / (this.max - this.min), c = Number.isNaN(b) ? 0 : b * this.maxHandlePos
  }, j.prototype.getValueFromPosition = function (a) {
    var b, c;
    return b = a / (this.maxHandlePos || 1), c = this.step * Math.round(b * (this.max - this.min) / this.step) + this.min, Number(c.toFixed(this.toFixed))
  }, j.prototype.setValue = function (a) {
    a !== this.value && this.$element.val(a).trigger("input", {
      origin: this.identifier
    })
  }, j.prototype.destroy = function () {
    this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + k), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
  }, a.fn[k] = function (b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return this.each(function () {
      var d = a(this),
        e = d.data("plugin_" + k);
      e || d.data("plugin_" + k, e = new j(this, b)), "string" == typeof b && e[b].apply(e, c)
    })
  }
});
const montoBase = 10000;
//custom slider javascript
$(function () {

  $(document).on('input', 'input[type="range"]', function (e) {
    $('output').html(formatToCurrency(e.currentTarget.value));
  });

  $('input[type=range]').rangeslider({
    polyfill: false
  });


  updateAmountRange(parseInt('output').html().replace(',', '').replace('$', '').replace('.00', ''));

});


function mostrar_quincenas() {

  let paymentFrequency = null;

  let option = getMinMaxSelect();

  //quincenal
  if (option.min >= 12 && option.max <= 24)    
    paymentFrequency = 'Q';  
  // mensual
  else if(option.min >= 6 && option.max <= 12)    
    paymentFrequency = 'M';
  

  if (document.getElementById('plazosQuincenas').click) {
    window.open(
      // "https://digital.came.org.mx/palnegocio/#/register-user-page?cantidad=" +
      "https://digital.came.org.mx/palnegocio" +

      document.getElementById('montopp').innerHTML.replace(',', '').replace('$', '').replace('.00', '') +
      '&producto=PD&cuotas=' +
      $('#plazos').val() +
      '&frecuencia=' +
      paymentFrequency

    );
  }
}


// mario functions
// function optionsBiweekly(){
//   return  `<option value="12">12 Quincenas</option>
//   <option value="13">13 Quincenas</option>
//   <option value="14">14 Quincenas</option>
//   <option value="15">15 Quincenas</option>
//   <option value="16">16 Quincenas</option>
//   <option value="17">17 Quincenas</option>
//   <option value="18">18 Quincenas</option>
//   <option value="19">19 Quincenas</option>
//   <option value="20">20 Quincenas</option>
//   <option value="21">21 Quincenas</option>
//   <option value="22">22 Quincenas</option>
//   <option value="23">23 Quincenas</option>
//   <option value="24">24 Quincenas</option>`;
// }

function optionsMonth(){
  return  `<option value="6">6 Meses</option>
  <option value="7">7 Meses</option>
  <option value="8">8 Meses</option>
  <option value="9">9 Meses</option>
  <option value="10">10 Meses</option>
  <option value="11">11 Meses</option>
  <option value="12">12 Meses</option>`;
}

function getMinMaxSelect(){
  let array = new Array();
  $("#plazos option").each(function(){
    array.push(parseInt($(this).val()));
  });

  let option = new Object();
  option.min = array[0];
  option.max = array[array.length - 1];

  return option;
}

function updateAmountRange(output){
  let option = getMinMaxSelect();

  //quincenal
  if (option.min >= 12 && option.max <= 24)    
    updateTextInputbiweekly(output);
  
  // mensual
  else if(option.min >= 6 && option.max <= 12)    
    updateTextInputMonth(output);
  
    
  
}

function formatToCurrency(amount) {
  const options = { style: 'currency', currency: 'USD' };
  const numberFormat = new Intl.NumberFormat('en-US', options);

  return numberFormat.format(amount);
}

function updateTextInputbiweekly(output) {
  const term = parseInt($('#plazos').val());

  switch (term) {
    case 12:
      let qdoce = ((output - montoBase) / 1000) * 112.38 + 1157.52;
      $('#resultado').html(formatToCurrency(qdoce));
      break;
    case 13:
      let qTrece = ((output - montoBase) / 1000) * 106.01 + 1094.53;
      $('#resultado').html(formatToCurrency(qTrece));
      break;
    case 14:
      let qCatorce = ((output - montoBase) / 1000) * 100.58 + 1040.92;
      $('#resultado').html(formatToCurrency(qCatorce));
      break;
    case 15:
      let qQuince = ((output - montoBase) / 1000) * 95.88 + 994.83;
      $('#resultado').html(formatToCurrency(qQuince));
      break;
    case 16:
      let qDiesiseis = ((output - montoBase) / 1000) * 91.81 + 954.83;
      $('#resultado').html(formatToCurrency(qDiesiseis));
      break;
    case 17:
      let qDiesisiete = ((output - montoBase) / 1000) * 88.24 + 919.86;
      $('#resultado').html(formatToCurrency(qDiesisiete));
      break;
    case 18:
      let qDiesiocho = ((output - montoBase) / 1000) * 85.07 + 889.08;
      $('#resultado').html(formatToCurrency(qDiesiocho));
      break;
    case 19:
      let qDiesinueve = ((output - montoBase) / 1000) * 82.27 + 861.82;
      $('#resultado').html(formatToCurrency(qDiesinueve));
      break;
    case 20:
      let qVeinte = ((output - montoBase) / 1000) * 79.77 + 837.55;
      $('#resultado').html(formatToCurrency(qVeinte));
      break;
    case 21:
      let qVeintiuno = ((output - montoBase) / 1000) * 77.52 + 815.86;
      $('#resultado').html(formatToCurrency(qVeintiuno));
      break;
    case 22:
      let qVeintidos = ((output - montoBase) / 1000) * 75.49 + 796.38;
      $('#resultado').html(formatToCurrency(qVeintidos));
      break;
    case 23:
      let qVenintitres = ((output - montoBase) / 1000) * 73.65 + 778.83;
      $('#resultado').html(formatToCurrency(qVenintitres));
      break;
    case 24:
      let qVeinticuatro = ((output - montoBase) / 1000) * 71.98 + 762.97;
      $('#resultado').html(formatToCurrency(qVeinticuatro));
      break;
  }

}

function updateTextInputMonth(output) {

  const term = parseInt($('#plazos').val());

  switch (term) {
    case 6:
      let mesSeis = ((output - montoBase) / 1000) * 228.7 + 2355.26;
      $('#resultado').html(formatToCurrency(mesSeis));
      break;
    case 7:
      let mesSiete = ((output - montoBase) / 1000) * 204.46 + 2116.16;
      $('#resultado').html(formatToCurrency(mesSiete));
      break;
    case 8:
      let mesOcho = ((output - montoBase) / 1000) * 186.49 + 1939.49;
      $('#resultado').html(formatToCurrency(mesOcho));
      break;
    case 9:
      let mesNueve = ((output - montoBase) / 1000) * 172.675 + 1804.46;
      $('#resultado').html(formatToCurrency(mesNueve));
      break;
    case 10:
      let mesDiez = ((output - montoBase) / 1000) * 161.768 + 1698.56;
      $('#resultado').html(formatToCurrency(mesDiez));
      break;
    case 11:
      let mesOnce = ((output - montoBase) / 1000) * 152.9722 + 1613.86;
      $('#resultado').html(formatToCurrency(mesOnce));
      break;
    case 12:
      let mesDoce = ((output - montoBase) / 1000) * 145.76 + 1545.04;
      $('#resultado').html(formatToCurrency(mesDoce));
      break;
  }

}

function deploysRange(){
  let outputCurrency = $('output').html().replace(',', '').replace('$', '').replace('.00', '');
  let output = parseInt(outputCurrency);
  updateAmountRange(output);
  d
}

// actions events
$(document).on('change', '#montoRango', function () {
  deploysRange();
}); 

// $(document).on('click', '#btn-quincenal', function () { 
//   $('#plazos').html(optionsBiweekly()); 
//   deploysRange();
// });

$(document).on('click', '#btn-mes', function () {  
  $('#plazos').html(optionsMonth());
  deploysRange();
});

$(document).on('change', '#plazos', function () {
  deploysRange();
});

// function mostrar_Qince(){
//   small = document.getElementById('pgq');
//   small.style.display = '';
//   small = document.getElementById('pgm');
//   small.style.display = 'none';
// }
function mostrar_Meses(){
  small = document.getElementById('pgm');
  small.style.display = '';
  small = document.getElementById('pgq');
  small.style.display = 'none';
}
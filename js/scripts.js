(function($) {
  $.fn.invisible = function() {
      return this.each(function() {
          $(this).css("visibility", "hidden");
      });
  };
  $.fn.visible = function() {
      return this.each(function() {
          $(this).css("visibility", "visible");
      });
  };
}(jQuery));

// DOM Elements

const pocketActive = $('#pocket button.active').val()
const layerActive = $('#layer button.active').val()
const patternActive = $('#pattern button.active').val()
const colorActive = $('#color button.active').val()

const color = ['white', 'red', 'pink', 'pearl', 'gold', 'black']
const shop = ['ajino', 'okayama', 'aoyama', 'koenji', 'osaka', 'kyoto', 'web', 'popup', 'undefined']

const shopColorCode = new Map([
  ['ajino', '#0072bc'],
  ['okayama', '#0db14b'],
  ['aoyama', '#58595b'],
  ['koenji', '#903f98'],
  ['osaka', '#f1ca3a'],
  ['kyoto', '#684927'],
  ['web', '#FA8E43'],
  ['popup', '#D3C6A6']
])
const shopKanji = new Map([
  ['ajino', '味野本店'],
  ['okayama', '岡山店'],
  ['aoyama', '青山店'],
  ['koenji', '高円寺店'],
  ['osaka', '大阪店'],
  ['kyoto', '京都店'],
  ['web', 'WEB店'],
  ['popup', 'POPUP店']
])

const theme = localStorage.getItem('theme')

// New Functions

function getTheme(){
  if (theme){
    $('.shopColor').css('color', shopColorCode.get(theme))
    $('#shopLabel').html(shopKanji.get(theme))
  
    if (theme == "ajino") {
        $(".ajinolmtd").show()
      } else {
        $(".ajinolmtd").hide()
      }
  }
}

function shopThemeSave(){
  localStorage.setItem('theme', this.id)
}

function shopTheme() {
  $('.dropdown-item a').removeClass('activeshop')
  $(this).toggleClass('activeshop')
  $('.shopColor').css('color', shopColorCode.get(this.id))

  $('#shopLabel').html($(this).html())
  
  $.each(shop, function(_i, val){
    $(`.active${val}`).removeClass(`active${val}`)
    $(`.svg${val}`).removeClass(`svg${val}`)
  })
  $('button.active').addClass(`active${this.id}`)
  $('#svgContainer .active').addClass(`svg${this.id}`)
}

function shopTriggers(){
  if (this.id == 'ajino') {
    $(".ajinolmtd").show()
  } else {
    $(".ajinolmtd").hide()
  }

  if (this.id != 'ajino' && $('#ajinoup, #ajinodwn').hasClass('activejeans') ){
    $('#shutsujin').trigger('click')
  }
}

function activeButton() {
  $(this).addClass(`active active${$('.dropdown-item a.activeshop').attr('id')}`).siblings().removeClass()
}

function jeans() {
  $('.dropdown-item a').removeClass('activejeans')
  $(this).toggleClass('activejeans')
  $("#jeansLabel").html($(this).html())

  if (this.id == "shutsujin") {
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "blkshutsujin") {
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#000")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "pnkshutsujin") {
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#F26284")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#14203b")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "deepdotan") {
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "dotan") {
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $(".pocket").show().css("fill","#14203b")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "ladiesdotan") {
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $(".pocket").show().css("fill","#19312d")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "vintage") {
    $("#locksp, .lockspup, .lockspdwn, .stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "kidsshutsujin") {
    $("#locksp, #locksp .lockspup, #locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","4em")
  } else if (this.id == "kidsdotan") {
    $("#locksp, .lockspup, .lockspdwn").hide()
    $(".stitchdoutan").show()
    $("#rP, #lP").css("padding","4em")
  } else if (this.id == "ajinoup") {
    $("#locksp").show()
    $("#locksp .lockspup").show().css("fill","#0072BC")
    $("#locksp .lockspdwn").show().css("fill","#fff")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","2em")
  } else if (this.id == "ajinodwn") {
    $("#locksp").show()
    $("#locksp .lockspup").show().css("fill","#fff")
    $("#locksp .lockspdwn").show().css("fill","#0072BC")
    $(".stitchdoutan").hide()
    $(".pocket").show().css("fill","#01060C")
    $("#rP, #lP").css("padding","2em")
  }
}

function svgChange() {
  var svgLayer = lyrA - 1
  var svgColor = ["white", "red", "pink", "pearl", "gold", "black", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "popup"]
  var pcktA = $('#pocket button.active').val()
  var lyrA = $('#layer button.active').val()
  var ptrnA = $('#pattern button.active').val()
  var clrA = $('#color button.active').val()
  
  for(var i=0; i<svgColor.length; i++){
    $(`#${pcktA} .z${lyrA}`).removeClass(`active svg${svgColor[i]}`)
  }
  
  $(`#${pcktA} .z${lyrA}`).removeClass(`active z${lyrA}`).hide()

  if ($('#pocket button').hasClass('active') && $('#layer button').hasClass('active') && $('#pattern button').hasClass('active') && $('#color button').hasClass('active')){
    if ($(":button[value=ichimatsu]").hasClass("active") && !$("#color button.ichim").hasClass("active")){
      $(clrA).removeClass("active")
      $(":button[value=black]").addClass("active")
      $(`#${pcktA} .${ptrnA}`).addClass(`z${lyrA} svgblack active`).show()
    } else if (!$("#pattern :button[value=ichimatsu]").hasClass("active") && $("button.blk").hasClass("active")){
      $(clrA).removeClass("active")
      $(":button[value=white]").addClass("active white")
      $(`#${pcktA} .${ptrnA}`).addClass(`z${lyrA} svgwhite active`).show()
    } else if ($(':button[value=shopColor]').hasClass('active')){
      $(`#${pcktA} .${ptrnA}`).addClass(`z${lyrA} svg${$('.activeshop').attr('id')} active`).show()
    } else {
      $(`#${pcktA} .${ptrnA}`).addClass(`z${lyrA} svg${clrA} active`).show()
    };
  
    if ($(`#${pcktA} .${ptrnA}`).hasClass("svgshopColor")) {
      $(`#${pcktA} .z${lyrA}`).removeClass("svgshopColor")
      $(`#${pcktA} .z${lyrA}`).addClass(`svg${$('.activeshop').attr('id')}`)
    }
  
    $(`#${pcktA} .z${lyrA}`).insertAfter($(`#${pcktA} .z${svgLayer}`)).show()
    } 
}

function reset() {
  var c = ["white", "red", "pink", "pearl", "gold", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "popup"]

  for(var j=1; j<4; j++){
    for(var i=0; i<c.length; i++){
      $(`.z${[j]}`).removeClass(`svg${c[i]}`)
    }
    $(`.z${[j]}`).hide().removeClass(this)
  }

  $(".spup").css("display", "")
  $(".spdwn").css("display", "")
  $.each(shop, function(_i, val){
    $(`.active${val}`).removeClass(`active active${val}`)
  }, color, function(_i, val){
    $(`.active${val}`).removeClass(`active active${val}`)
  })
}

function date() {
  var dateObj = new Date()
  var month = dateObj.getUTCMonth() + 1
  var day = dateObj.getUTCDate()
  var year = dateObj.getUTCFullYear()

  $(".date").append(`${year}年　${month}月　${day}日`)
}



// Old Functions

function printFormShow(){
  $("header").hide()
  $("#pocketlayer").hide()
  $("#pattern").hide()
  $("#color").hide()
  $(".svgContainer").hide()
  $("#printForm").show()
}

function resetPrint() {
  var LR = ["l", "r"]
  var pattern = ["sp", "ichimatsu", "spka", "spmo", "momotaro", "oni", "kanji", "kamon", "momochan"]
  var color = ["white", "red", "pink", "pearl", "gold", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "popup"]

  $(".printFromShop").html("");
  $(".paintCounter").html("");

  for (var j = 0; j < LR.length; j++) {
    for (var i = 1; i < 4; i++) {
      for (var h = 0; h < pattern.length; h++) {
        if ($(`#${LR[j]}P .z${[i]}`).hasClass(pattern[h])) {
          $(`#${LR[j]}Pockets .zshow${[i]} .patternCode`).html("")
        }
      }
      for (var g = 0; g < color.length; g++) {
        if ($(`#${LR[j]}P .z${[i]}`).hasClass(`svg${color[g]}`)) {
          $(`#${LR[j]}Pockets .zshow${[i]} .colorCode`).html("")
        }
      }
    }
  }
}

function load() {
  var LR = ["l", "r"]
  var pattern = ["sp", "ichimatsu", "spka", "spmo", "momotaro", "oni", "kanji", "kamon", "momochan"]
  var patternText = ["#SP　出陣ライン", "#IC　出陣市松", "#SK　出陣家紋", "#SM　出陣桃", "#MO　写楽桃太郎", "#ON　写楽鬼", "#MJ　桃太郎文字", "#KP　家紋", "#MT　桃太郎"]
  var color = ["white", "red", "pink", "pearl", "gold", "black", "ajino", "okayama", "aoyama", "koenji", "osaka", "kyoto", "web", "popup"]
  var colorText = ["ホワイト", "レッド", "ピンク", "ピンクパール", "ゴールド", "ブラック", "味野ブルー", "マスカットグリーン", "ダークグレー", "パープル", "イエロー", "ブラウン", "オレンジ", "サンドベージュ"]
  var paintCounter = 0
  var shop = $("#shopText").html()

  $(".printFromShop").append(`${$('.activeshop').html()}・`)

  for (var j = 0; j < LR.length; j++) {
    for (var i = 1; i < 4; i++) {

      if ($(`#${LR[j]}P .z${[i]}`)[0]) {
        $(`#${LR[j]}P .z${[i]}`).clone().appendTo(`#${LR[j]}Pockets .svgPrint${[i]}`)
        $(`#${LR[j]}Pockets .zshow${[i]}`).visible()
        paintCounter = paintCounter + 1
      } else {
        $(`#${LR[j]}Pockets .zshow${[i]}`).invisible()
      }

      for (var h = 0; h < pattern.length; h++) {
        if ($(`#${LR[j]}P .z${[i]}`).hasClass(pattern[h])) {
          $(`#${LR[j]}Pockets .zshow${[i]} .patternCode`).append(`D/${patternText[h]}`)
        }
      }

      for (var g = 0; g < color.length; g++) {
        if ($(`#${LR[j]}P .z${[i]}`).hasClass(`svg${color[g]}`)) {
          $(`#${LR[j]}Pockets .zshow${[i]} .colorCode`).append(colorText[g])
        }
      }
    }
  }

  $(".paintCounter").append(paintCounter)

}

function printIt(){
  setTimeout(function(){
    window.print()
  }, 100)
}

function getBack(){
  $("header").show()
  $("#pocketlayer").show()
  $("#pattern").show()
  $("#color").show()
  $(".svgContainer").show()
  $("#printForm").hide()
  resetPrint()
}

$(document)
  .ready(date)
  .ready(getTheme)
  .ready(function() {

    $('#pocketlayer button, #pattern button, #color button')
      .click(activeButton);

    $('#pattern button, #color button')
      .click(svgChange);

    $('.dd1 a')
      .click(shopThemeSave)
      .click(shopTheme)
      .click(shopTriggers);

    $('.dd2 a')
      .click(jeans);

    $('#reset')
      .click(reset);

    $(":button[id=print]")
      .click(load)
      .click(printFormShow)
      .click(printIt);

    $(":button[id=getBack]")
      .click(getBack)
      .click(getTheme);
  
  });

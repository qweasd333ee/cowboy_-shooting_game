
// 手跟著滑鼠移動
$('#game').mousemove(function (event) {
  const mouseX = event.pageX - $(this).offset().left
  const mouseY = event.pageY - $(this).offset().top
  $('#gun').css('left', `${700 + (mouseX / 5)}px`)
  $('#gun').css('top', `${500 + (mouseY / 5)}px`)
})

// 首頁
$('#home').on('click', function () {
  $('#hint').hide()
  $('#menu').fadeIn(1000)
})

let timer = 0
let countdown = 0
let score = 0
$('#start').click(function () {
    $('#home').hide()
    $('#game').show()
    // 滑鼠離開遊玩區域手槍圖片消失
  $('#game').mouseover(function () {
    $('#gun').show()
  })
  $('#game').mouseout(function () {
    $('#gun').hide()
  })
  // 隨機出現牛仔
  score = 0
  countdown = 5
  // timer = setInterval(function () {
  //   // 倒數
  //   countdown--
  //   $('#text-time').text(countdown)

  //   const random = Math.ceil(Math.random() * 10)
  //   if (random > 1 && $('.zombie').length < 100) {
  //     const top = Math.round(Math.random() * 70) + '%'
  //     const left = Math.round(Math.random() * 70) + '%'
  //     const cowboy = $(`<img src="./images/cowboy.png" class="cowboy" style="top: ${top}; left: ${left}">`)
  //     $('#game').append(cowboy)
  //   }
  // }, 1000)
  })

// 點到牛仔換圖片
$('#game').on('click', '.cowboy', function () {
  $(this).attr('src', './images/blood.png')
  $(this).removeClass('zombie').addClass('blood')
  score++
  $('#text-score').text(score)
})

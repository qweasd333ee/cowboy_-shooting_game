let timer = 0
let countdown = 0
let score = 0

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

// 開始遊戲
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
  timer = setInterval(function () {
    // 倒數
    countdown--
    $('#text-time').text(countdown)
    const random = Math.ceil(Math.random() * 5)
    if (random === 1 && $('.cowboy1').length < 3) {
      const cowboy1 = $(`<img src="./images/cowboy.png" class="cowboy1" style="top: 63%; left: 11%">`)
      $('#game').append(cowboy1)
      move1(cowboy1)
    } else if (random === 2 && $('.cowboy2').length < 3) {
      const cowboy2 = $(`<img src="./images/cowboy.png" class="cowboy2" style="top: 63%; left: 76%">`)
      $('#game').append(cowboy2)
      move2(cowboy2)
    } else if (random === 3 && $('.cowboy3').length < 1) {
      const cowboy3 = $(`<img src="./images/cowboy.png" class="cowboy3" style="top: 26%; left: 23%">`)
      $('#game').append(cowboy3)
      move3(cowboy3)
    } else if (random === 4 && $('.cowboy4').length < 1) {
      const cowboy4 = $(`<img src="./images/cowboy.png" class="cowboy4" style="top: 22%; left: 69%">`)
      $('#game').append(cowboy4)
      move4(cowboy4)
    } else if (random === 5 && $('.cowboy5').length < 3) {
      const cowboy5 = $(`<img src="./images/cowboy.png" class="cowboy5" style="top: 50%; left: 37%">`)
      $('#game').append(cowboy5)
      move5(cowboy5)
    }
  }, 1000)
  })

  // 移動
  const move1 = (cowboy1) => {
    const top = 70 - Math.round(Math.random() * 10) + '%'
    const left = Math.round(Math.random() * 60) + '%'
    cowboy1.stop().animate({ top, left }, 1000, function () {
      if ($('.cowboy1').hasClass('cowboy1')) {
        move1(cowboy1)
      }
    })
  }
  const move2 = (cowboy2) => {
    const top = 75 - Math.round(Math.random() * 20) + '%'
    const left = Math.round(Math.random() * 50) + '%'
    cowboy2.stop().animate({ top, left }, 2000, function () {
      if ($('.cowboy2').hasClass('cowboy2')) {
        move2(cowboy2)
      }
    })
  }
  const move3 = (cowboy3) => {
    const top = 26 + '%'
    const left = 25 - Math.round(Math.random() * 6) + '%'
    cowboy3.stop().animate({ top, left }, 2000, function () {
      if ($('.cowboy3').hasClass('cowboy3')) {
        move3(cowboy3)
      }
    })
  }
  const move4 = (cowboy4) => {
    const top = 26 - Math.round(Math.random() * 4) + '%'
    const left = 75 - Math.round(Math.random() * 15) + '%'
    cowboy4.stop().animate({ top, left }, 2000, function () {
      if ($('.cowboy4').hasClass('cowboy4')) {
        move4(cowboy4)
      }
    })
  }
  const move5 = (cowboy5) => {
    const top = 50 + '%'
    const left = Math.round(Math.random() * 80) + '%'
    cowboy5.stop().animate({ top, left }, 2000, function () {
      if ($('.cowboy5').hasClass('cowboy5')) {
        move5(cowboy5)
      }
    })
  }

// 點到牛仔換圖片
$('#game').on('click', '.cowboy1', function () {
  $(this).attr('src', './images/blood.png')
  $(this).removeClass('cowboy1').addClass('blood')
  $(this).stop()
  score++
  $('#text-score').text(score)
})
$('#game').on('click', '.cowboy2', function () {
  $(this).attr('src', './images/blood.png')
  $(this).removeClass('cowboy2').addClass('blood')
  $(this).stop()
  score++
  $('#text-score').text(score)
})
$('#game').on('click', '.cowboy3', function () {
  $(this).attr('src', './images/blood.png')
  $(this).removeClass('cowboy3').addClass('blood')
  $(this).stop()
  score++
  $('#text-score').text(score)
})
$('#game').on('click', '.cowboy4', function () {
  $(this).attr('src', './images/blood.png')
  $(this).removeClass('cowboy4').addClass('blood')
  $(this).stop()
  score++
  $('#text-score').text(score)
})
$('#game').on('click', '.cowboy5', function () {
  $(this).attr('src', './images/blood.png')
  $(this).removeClass('cowboy5').addClass('blood')
  $(this).stop()
  score++
  $('#text-score').text(score)
})

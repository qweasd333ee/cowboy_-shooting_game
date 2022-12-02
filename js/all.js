let timer = 0
let countdown = 0
let score = 0
let heart = 0

// 手跟著滑鼠移動
$('#game').mousemove(function (event) {
  const mouseX = event.pageX - $(this).offset().left
  const mouseY = event.pageY - $(this).offset().top
  $('#gun').css('left', `${700 + (mouseX / 5)}px`)
  $('#gun').css('top', `${650 + (mouseY / 5)}px`)
})

// 首頁
$('#home').on('click', function () {
  $('#hint').hide()
  $('#menu').fadeIn(1000)
})

// 滑鼠離開遊玩區域手槍圖片消失
  $('#game').mouseover(function () {
    $('#gun').show()
  })
  $('#game').mouseout(function () {
    $('#gun').hide()
  })

// 開始遊戲
$('#start').click(function () {
  $('#home').hide()
  $('#game').show()
  
  // 隨機出現牛仔
  score = 0
  countdown = 10
  heart = 5
  timer = setInterval(function () {
    // 倒數
    countdown--
    $('#text-time').text(countdown)
    const random = Math.ceil(Math.random() * 7)
    if (random === 1 && $('.show1').length < 2) {
      const cowboy1 = $(`<img src="./images/cowboy1.png" class="cowboy1 show1" style="top: 68%; left: 15%">`)
      $('#game').append(cowboy1)
      move1(cowboy1)
    } else if (random === 2 && $('.show2').length < 4) {
      const cowboy2 = $(`<img src="./images/cowboy2.png" class="show2 cowboy2" style="top: 73%; left: 76%">`)
      $('#game').append(cowboy2)
      move2(cowboy2)
    } else if (random === 3 && $('.show3').length < 1) {
      const cowboy3 = $(`<img src="./images/cowboy3.png" class="show3 cowboy3" style="top: 27%; left: 31%">`)
      $('#game').append(cowboy3)
      move3(cowboy3)
    } else if (random === 4 && $('.show4').length < 1) {
      const cowboy4 = $(`<img src="./images/cowboy4.png" class="show4 cowboy4" style="top: 23%; left: 71%">`)
      $('#game').append(cowboy4)
      move4(cowboy4)
    } else if (random === 5 && $('.show5').length < 4) {
      const cowboy5 = $(`<img src="./images/cowboy5.png" class="show5 cowboy5" style="top: 61%; left: 42%">`)
      $('#game').append(cowboy5)
      move5(cowboy5)
    } else if (random === 6 && $('.show6').length < 1) {
      const beer1 = $(`<img src="./images/beer.png" class="show6 beer1" style="top: 73%; left: 21%">`)
      $('#game').append(beer1)
    } else if (random === 7 && $('.show7').length < 1) {
      const beer2 = $(`<img src="./images/beer.png" class="show7 beer2" style="top: 61%; left: 42%">`)
      $('#game').append(beer2)
    }

    // // 時間到
    // if (countdown === 0) {
    //   // 停止倒數
    //   clearInterval(timer)
    //   // 清空
    //   $('#game img').remove()
    //   // 重新啟用開始按鈕
    //   $('#btn-start').attr('disabled', false)

    //   if (score > highscore.score) {
    //     Swal.fire({
    //       icon: 'info',
    //       title: '時間到',
    //       text: `最高分，你得到 ${score} 分`,
    //       inputPlaceholder: '請輸入名字',
    //       input: 'text',
    //       inputAttributes: {
    //         required: true
    //       },
    //       validationMessage: '名稱必填',
    //       allowOutsideClick: false,
    //       allowEscapeKey: false
    //     }).then(result => {
    //       highscore.score = score
    //       highscore.name = result.value
    //       $('#text-highscorename').text(highscore.name)
    //       $('#text-highscore').text(highscore.score)

    //       // localStorage.setItem('zombiegame', JSON.stringify(highscore))
    //       localStorage.zombiegame = JSON.stringify(highscore)
    //     })
    //   } else {
    //     Swal.fire({
    //       icon: 'info',
    //       title: '時間到',
    //       text: `你得到 ${score} 分`
    //     })
    //   }
    // }
  }, 2000)
})

// 移動
const move1 = (cowboy1) => {
  const top = 78 - Math.round(Math.random() * 10) + '%'
  const left = 15 + '%'
  cowboy1.stop().animate({ top, left }, 500, function () {
    setTimeout(() => {
      if ($('.cowboy1').hasClass('show1')) {
        move1(cowboy1)
        heart--
        $('#text-heart').text(heart)
      }
    }, 3000);
  })
}
const move2 = (cowboy2) => {
  const top = 73 - Math.round(Math.random() * 10) + '%'
  const left = 96 - Math.round(Math.random() * 60) + '%'
  cowboy2.stop().animate({ top, left }, 2000, function () {
    setTimeout(() => {
      if ($('.cowboy2').hasClass('show2')) {
        move2(cowboy2)
        heart--
        $('#text-heart').text(heart)
      }
    }, 3000);
  })
}
const move3 = (cowboy3) => {
  const top = 27 + '%'
  const left = 31 + '%'
  cowboy3.stop().animate({ top, left }, 2000, function () {
    setTimeout(() => {
      if ($('.cowboy3').hasClass('show3')) {
        move3(cowboy3)
        heart--
        $('#text-heart').text(heart)
      }
    }, 3000);
  })
}
const move4 = (cowboy4) => {
  const top = 23 + '%'
  const left = 71 + '%'
  cowboy4.stop().animate({ top, left }, 2000, function () {
    setTimeout(() => {
      if ($('.cowboy4').hasClass('show4')) {
        move4(cowboy4)
        heart--
        $('#text-heart').text(heart)
      }
    }, 3000);
  })
}
const move5 = (cowboy5) => {
  const top = 66 - Math.round(Math.random() * 10) + '%'
  const left = 82 - Math.round(Math.random() * 50) + '%'
  cowboy5.stop().animate({ top, left }, 2000, function () {
    setTimeout(() => {
      if ($('.cowboy5').hasClass('show5')) {
        move5(cowboy5)
        heart--
        $('#text-heart').text(heart)
      }
    }, 3000);
  })
}

// 點到牛仔換圖片
$('#game').on('click', '.cowboy1', function () {
  score++
  $('#text-score').text(score)
  $(this).stop()
  $(this).removeClass('show1').addClass('rotate1').fadeOut(1000)
})
$('#game').on('click', '.cowboy2', function () {
  score++
  $('#text-score').text(score)
  $(this).stop()
  $(this).removeClass('show2').addClass('rotate2').fadeOut(1000)
})
$('#game').on('click', '.cowboy3', function () {
  score++
  $('#text-score').text(score)
  $(this).stop()
  $(this).removeClass('show3').addClass('rotate1').fadeOut(1000)
})
$('#game').on('click', '.cowboy4', function () {
  score++
  $('#text-score').text(score)
  $(this).stop()
  $(this).removeClass('show4').addClass('rotate2').fadeOut(1000)
  
  
})
$('#game').on('click', '.cowboy5', function () {
  score++
  $('#text-score').text(score)
  $(this).stop()
  $(this).removeClass('show5').addClass('rotate2').fadeOut(1000) 
  
})
$('#game').on('click', '.beer1', function () {
  heart+=3
  $('#text-score').text(score)
  $(this).removeClass('show6').fadeOut(1000)
})
$('#game').on('click', '.beer2', function () {
  heart+=3
  $('#text-score').text(score)
  $(this).removeClass('show7').fadeOut(1000)
})


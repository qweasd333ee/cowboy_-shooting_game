score = 0
// 手跟著滑鼠移動
$('#game').mousemove(function (event) {
  const mouseX = event.pageX - $(this).offset().left
  const mouseY = event.pageY - $(this).offset().top
  $('#gun').css('left', `${500 + (mouseX / 5)}px`)
  $('#gun').css('top', `${400 + (mouseY / 5)}px`)
})



// 點擊螢幕跳出遊玩資訊視窗(menu)
$('#game').one('click', function () {
  $('#hint').hide()
  $('#menu').fadeIn(1000)
  // 開始遊戲
  $('#start').click(function () {
    $('#menu').fadeOut(1000)
    $('#game').css('cursor', 'url("./images/cursor.png") 50 50, auto')
    // 滑鼠離開遊玩區域手槍圖片消失
    $('#game').mouseover(function () {
      $('#gun').show()
    })
    $('#game').mouseout(function () {
      $('#gun').hide()
    })
    $('#score').show()
    // 隨機出現牛仔
    const top = Math.round(Math.random() * 70) + '%'
    const left = Math.round(Math.random() * 70) + '%'
    const cowboy = $(`<img src="./images/cowboy.png" class="cowboy" style="top: ${top}; left: ${left}">`)
    $('#game').append(cowboy)
  })
})

// 點到牛仔換圖片
$('#game').on('click', '.cowboy', function () {
  $(this).attr('src', './images/blood.png')
  $(this).removeClass('zombie').addClass('blood')
  score++
  $('#text-score').text(score)
})

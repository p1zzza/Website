$(document).ready(function(){
  //$("선택자").click(할일)

// ★★★★★★★★★★★★★★★★★★★ 헤더 섹션 이동 스크롤 

  const menu = $('header ul li'),
  contents = $('section')

  menu.click(function(){
  //menu.removeClass('on')
  $(this).addClass('on') 
  let idx = $(this).index()
  let $section = contents.eq(idx)
  let sectionDistance = $section.offset().top 
  console.log(sectionDistance) 
  $('html, body').animate({
      scrollTop : sectionDistance},900) 
})

// ★★★★★★★★★★★★★★★★★★★★ About 토글버튼

  $('.skill #btn').click(function(){
      $('.skill .contents').slideToggle();
  });

  $('.hobby #btn').click(function(){
      $('.hobby .contents').slideToggle();
  });

  $('.licence #btn').click(function(){
      $('.licence .contents').slideToggle();
  });
});

// ★★★★★★★★★★★★★★★★★★★★ About 토글버튼
function skill(id,percent){
  var bar = new ProgressBar.Line('.progress', {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#ffff83',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#80ceff'},
  to: {color: '#ffff83'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar.animate(percent);  // Number from 0.0 to 1.0
}
skill('#ae',0.55)
// skill('#pr',0.55)
// skill('#ps',0.85)
// skill('#il',0.95)
// skill('#po',0.15)
// skill('#ex',0.60)

// ★★★★★★★★★★★★★★★★★★★★ Portfolio 탭 변경

const tabMenu = $('.indexs > div'),
tabGallery = $('.tabs > div')
let genre ="";

tabMenu.click(function(e){
e.preventDefault()
tabMenu.removeClass('active')
genre = $(this).data("genre")
$(this).addClass('active')
tabGallery.hide();
let target = $(this).find('a').attr('href')
$(target).show()
})     
tabMenu.eq(3).trigger('click')

// ★★★★★★★★★★★★★★★★★★★★ Portfolio 모달창으로 이동

$(document).ready(function(){
$('#list li').click(function(){
  // let type = $('.indexs').find('a').text()
  let type = $('.indexs').find('a')
  let title = $(this).find('h3')
  let desc = $(this).find('p')
  console.log(title)
  console.log(desc)
  $('.modal').addClass('show')
  $('.modal .btn-close').addClass('show')
  $('.modal').append(`
  <div class="item_box">
  <h2>✶ ${genre}</h2>

    <div class="iframe-box">
    <iframe src="https://www.youtube.com/embed/${$(this).data("video")}?rel=0&playinline=1&autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div class="txt">
        <h3>✧ ${$(this).find(title).text()} ✧</h3>
        <p>${$(this).find(desc).text()}</p>
      </div>
  </div> `)
})
$('.trigger').click(function(e)  {
    e.preventDefault()
    $('.modal').removeClass('show') 
    $('.modal .btn-close').removeClass('show') 
    $('.modal .item_box').remove() 
})
})
  

// ★★★★★★★★★★★★★★★★★★★★ 컨택 > 이미지 롤링배너 

$(window).on('load', function() {
setFlowBanner();
})

function setFlowBanner() {
const $wrap = $('.rolling-banner');
const $list = $('.rolling-banner .list');
let wrapWidth = $wrap.width();
let listWidth = $list.width();
const speed = 92; //1초에 몇픽셀 이동하는지 설정

//리스트 복제
let $clone = $list.clone();
$wrap.append($clone);
flowBannerAct()

//배너 실행 함수
function flowBannerAct() {
    //무한 반복을 위해 리스트를 복제 후 배너에 추가
    if (listWidth < wrapWidth) {
        const listCount = Math.ceil(wrapWidth * 2 / listWidth);
        for (let i = 2; i < listCount; i++) {
            $clone = $clone.clone();
            $wrap.append($clone);
        }
    }
    $wrap.find('.list').css({
        'animation': `${listWidth / speed}s linear infinite flowRolling`
    });
}

// 마우스가 요소 위로 진입했을 때 일시정지
$wrap.on('mouseenter', function () {
    $wrap.find('.list').css('animation-play-state', 'paused');
});

// 마우스가 요소에서 빠져나갈 때 재생
$wrap.on('mouseleave', function () {
    $wrap.find('.list').css('animation-play-state', 'running');
});
}

// ****************스티키헤더
// $(function(){
  const header = $('nav')
  let threshold = header.offset().top + header.outerHeight();

  //$(window).on('scroll', function(){
  $(window).on('scroll',$.throttle(1000/15, function(){
      if($(this).scrollTop() >= threshold) {
        header.addClass('visible')
      }else {
        header.removeClass('visible')
      }
  }))
// })
















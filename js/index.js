// 왼쪽 사이드바 열고 닫기(+메인 레이아웃 변경)
const menuOpenEl = document.getElementById('btn_sidebar')
const sideMenuEl = document.getElementById('side__menu')
const main = document.querySelector('main')
const main_items = document.querySelectorAll('main .main_items')
const main_items_img = document.querySelectorAll('.Thumbnail')

menuOpenEl.addEventListener('click', ()=>{
  sideMenuEl.classList.toggle('reveal');
  main.classList.toggle('sideopen1');
  for (i = 0; i<main_items.length; i++){
    main_items[i].classList.toggle('sideopen2')
    main_items_img[i].classList.toggle('sideopen3')
  }
})

// 무한 스크롤
window.onscroll = function(e) {
  if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) { 
    setTimeout(function(){
      let addContent = document.createElement("div");
      let y = document.getElementById('wrapper').innerHTML
      addContent.innerHTML = y;
      document.querySelector('main').appendChild(addContent);
    }, 10)
  }
}



// 헤더 세번째 섹션 버튼 열고 닫기
const $dot1 = document.getElementById('bento')
const $dot2 = document.getElementById('kebab')
const $dot_nav1 = document.querySelector('nav.bento_nav')
const $dot_nav2 = document.querySelector('nav.kebab_nav')

$dot1.addEventListener('click', ()=>{
  $dot_nav1.classList.toggle('reveal');
})
$dot2.addEventListener('click', ()=>{
  $dot_nav2.classList.toggle('reveal');
})

// 동영상 마우스 호버시 아이콘 보이게 
for (let i =0; i<document.querySelectorAll(".main_items").length; i++){
  let $main_items = document.querySelectorAll(".main_items")[i]
  let $hover_img = document.querySelectorAll(".hover_img")[i]

  $main_items.addEventListener("mouseover", function(){
    $hover_img.style.display = "block"
})
  $main_items.addEventListener("mouseout", function(){
    $hover_img.style.display = "none"
})
}

// 동영상 아이콘 마우스 호버시 텍스트 보이게
for (let i =0; i<document.querySelectorAll(".main_items").length; i++){
  let $hover_img1 = document.querySelectorAll(".hover_img1")[i]
  let $hover_img2 = document.querySelectorAll(".hover_img2")[i]
  let $hover_text1 = document.querySelectorAll(".hover_text1")[i]
  let $hover_text2 = document.querySelectorAll(".hover_text2")[i]

  $hover_img1.addEventListener("mouseover", function(){
    $hover_text1.style.display = "block"
})
  $hover_img1.addEventListener("mouseout", function(){
    $hover_text1.style.display = "none"
})
  $hover_img2.addEventListener("mouseover", function(){
    $hover_text2.style.display = "block"
})
  $hover_img2.addEventListener("mouseout", function(){
    $hover_text2.style.display = "none"
})
}

// 왼쪽 메뉴바 클릭 활성화
const asideList = document.querySelectorAll("aside#left .asideList")
const asideIcon = document.querySelectorAll('aside#left ul li span')
const asideText = document.querySelectorAll('aside#left .left_text')

for (let i =0; i<asideList.length; i++){
  asideList[i].addEventListener('click', function(){
    for (let i =0; i<asideList.length; i++){
      asideIcon[i].classList.remove('click-red')
      asideText[i].classList.remove('click-red')
    }
    asideIcon[i].classList.add('click-red')
    asideText[i].classList.add('click-red')
  })
}


// 사이드바 메뉴 클릭 활성화
const sidelist = document.querySelectorAll("#side__menu ul.side__list li")
const sideIcon = document.querySelectorAll("#side__menu ul.side__list .list_event")

for (let i =0; i<sidelist.length; i++){
  sidelist[i].addEventListener('click', function(){
    for (let i=0; i<sidelist.length; i++){
      sidelist[i].classList.remove('click-gray')
    }
    for (let i=0; i<sideIcon.length; i++){
      sideIcon[i].classList.remove('click-red')
    }
    sidelist[i].classList.add('click-gray')
    sideIcon[i].classList.add('click-red')
  })
}


// 스크롤 투 탑
const $scrollToTop = document.querySelector(".scrollToTop");

$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  window.scrollY >= 700
    ? ($scrollToTop.style.opacity = 1)
    : ($scrollToTop.style.opacity = 0); 
});

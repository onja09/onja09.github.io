const menutoggle = document.querySelector('.menutoggle'),
  nav = document.querySelector('.nav'),
  item1 = document.querySelector('.item1'),
  item2 = document.querySelector('.item2'),
  item3 = document.querySelector('.item3'),
  item4 = document.querySelector('.item4'),
  item5 = document.querySelector('.item5')

menutoggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  menutoggle.classList.toggle('active')
})

item1.addEventListener('click', () => {
  nav.classList.toggle('active')
  menutoggle.classList.toggle('active')
})

item2.addEventListener('click', () => {
  nav.classList.toggle('active')
  menutoggle.classList.toggle('active')
})

item3.addEventListener('click', () => {
  nav.classList.toggle('active')
  menutoggle.classList.toggle('active')
})

item4.addEventListener('click', () => {
  nav.classList.toggle('active')
  menutoggle.classList.toggle('active')
})

item5.addEventListener('click', () => {
  nav.classList.toggle('active')
  menutoggle.classList.toggle('active')
})

window.addEventListener('scroll', () => {
  const acceuil = document.querySelector('.acceuil')
  acceuil.classList.toggle('stiky', window.scrollY > 0)
})

// button active 
let ratioitem1
if(window.scrollX > '600px'){
  ratioitem1 = 0.9
}else{
  ratioitem1 = 0.4
}
const optionsitem1 = {
  root: null,
  rootMargin: '0px',
  threshold: ratioitem1
}
const handleIntersecthome = function (entriesitems) {
  entriesitems.forEach(function (entryitem) {
    if (entryitem.intersectionRatio > ratioitem1) {
      item1.style.cssText = 'color: #9df33f'
    }
    else{
      item1.style.cssText = 'color: #fff'
    }
  })
}
const observerhome = new IntersectionObserver(handleIntersecthome, optionsitem1)
observerhome.observe(document.querySelector('.container'))

const handleIntersectabout = function (entriesitems) {
  entriesitems.forEach(function (entryitem) {
    if (entryitem.intersectionRatio > ratioitem1) {
      item2.style.cssText = 'color: #9df33f'
    }
    else{
      item2.style.cssText = 'color: #fff'
    }
  })
}
const observerapropos = new IntersectionObserver(handleIntersectabout, optionsitem1)
observerapropos.observe(document.querySelector('.apropos'))

const handleIntersectservice = function (entriesitems) {
  entriesitems.forEach(function (entryitem) {
    if (entryitem.intersectionRatio > ratioitem1) {
      item3.style.cssText = 'color: #9df33f'
    }
    else{
      item3.style.cssText = 'color: #fff'
    }
  })
}
const observerservice = new IntersectionObserver(handleIntersectservice, optionsitem1)
observerservice.observe(document.querySelector('.service'))

const handleIntersectblog = function (entriesitems) {
  entriesitems.forEach(function (entryitem) {
    if (entryitem.intersectionRatio > ratioitem1) {
      item4.style.cssText = 'color: #9df33f'
    }
    else{
      item4.style.cssText = 'color: #fff'
    }
  })
}
const observerblog = new IntersectionObserver(handleIntersectblog, optionsitem1)
observerblog.observe(document.querySelector('.blog'))

const handleIntersectcontact = function (entriesitems) {
  entriesitems.forEach(function (entryitem) {
    if (entryitem.intersectionRatio > ratioitem1) {
      item5.style.cssText = 'color: #9df33f'
    }
    else{
      item5.style.cssText = 'color: #fff'
    }
  })
}
const observercontact = new IntersectionObserver(handleIntersectcontact, optionsitem1)
observercontact.observe(document.querySelector('.contact'))



// home    

var marge = 0;
showSlide();

function showSlide() {
  var img = document.querySelectorAll('.slide');

  for (var i = 0; i < img.length; i++) {
    img[i].style.cssText = "display: none";
  }
  marge++;
  if (marge > img.length) {
    marge = 1;
  }

  img[marge - 1].style.cssText = "display : block";

  setTimeout(showSlide, 4000)
}

// serivce

let slidevice = document.querySelector('.slidevice'),
  allitems = document.querySelectorAll('.slidevice .itemservice'),
  left = document.querySelector('.arrowleft'),
  right = document.querySelector('.arrowright'),
  idX = 0

let intervalvice = setInterval(runvice, 6000)

function runvice() {
  idX++
  changevice()
}

function changevice() {
  if (idX > allitems.length - 3) {
    idX = 0
  }
  else if (idX < 0) {
    idX = allitems.length - 3
  }
  slidevice.style.cssText = `transform : translateX(${-idX * 300}px)`
}

left.addEventListener('click', () => {
  idX++
  changevice()
})

right.addEventListener('click', () => {
  idX--
  changevice()
})

left.addEventListener('mouseover', () => {
  clearInterval(intervalvice)
})

left.addEventListener('mouseout', () => {
  return intervalvice = setInterval(runvice, 6000)
})

right.addEventListener('mouseover', () => {
  clearInterval(intervalvice)
})

right.addEventListener('mouseout', () => {
  return intervalvice = setInterval(runvice, 6000)
})



// service 

let slider = document.querySelector('.slide1'),
  over = document.querySelector('.divbloc'),
  img = document.querySelectorAll('.slide1 .divbloc')
let index = 0

let interval = setInterval(run, 6000)

function run() {
  index++
  change()
}

function change() {
  if (index > img.length - 6) {
    index = 0
  }
  else if (index < 0) {
    index = img.length - 6
  }
  slider.style.cssText = `transform:translateY(${-index * 322}px)`
}

slider.addEventListener('mouseover', () => {
  clearInterval(interval)
  clearInterval(interval2)
})

slider.addEventListener('mouseout', function () {
  return interval = setInterval(run, 6000),
    interval2 = setInterval(run2, 6000)
})

let slider2 = document.querySelector('.slide2'),
  over2 = document.querySelector('.divbloc'),
  img2 = document.querySelectorAll('.slide2 .divbloc')
let index2 = 0

let interval2 = setInterval(run2, 6000)

function run2() {
  index2++
  change2()
}

function change2() {
  if (index2 > img2.length - 2) {
    index2 = 0
  }
  else if (index2 < 0) {
    index2 = img2.length - 2
  }
  slider2.style.cssText = `transform:translateY(${index2 * 322}px)`
}

slider2.addEventListener('mouseover', () => {
  clearInterval(interval2)
  clearInterval(interval)
})

slider2.addEventListener('mouseout', function () {
  return interval2 = setInterval(run2, 6000),
    interval = setInterval(run, 6000)
})


// blog

start1();
function start1() {
  const progress = document.querySelector(".progress1");
  let width = 0;
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (width >= 80) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}

start2()
function start2() {
  const progress = document.querySelector(".progress2");
  let width = 0;
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (width >= 75) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}

start3()
function start3() {
  const progress = document.querySelector(".progress3");
  let width = 0;
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (width >= 60) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}

start4()
function start4() {
  const progress = document.querySelector(".progress4");
  let width = 0;
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (width >= 50) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}

start5()
function start5() {
  const progress = document.querySelector(".progress5");
  let width = 0;
  const timeInterval = setInterval(fill, 20);

  function fill() {
    if (width >= 60) {
      clearInterval(timeInterval);
    } else {
      width++;
      progress.style.width = width + "%";
      progress.innerHTML = width + "%";
    }
  }
}

const ratio = 0.3
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('.reveal').forEach(function (r) {
  observer.observe(r)
})

const ratio1 = 0.3
const options1 = {
  root: null,
  rootMargin: '0px',
  threshold: ratio1
}

const handleIntersect1 = function (entries1, observer1) {
  entries1.forEach(function (entry1) {
    if (entry1.intersectionRatio > ratio1) {
      entry1.target.classList.add('reveal-visible1')
      observer1.unobserve(entry1.target)
    }
  })
}

const observer1 = new IntersectionObserver(handleIntersect1, options1)
document.querySelectorAll('.reveal1').forEach(function (r) {
  observer1.observe(r)
})

const ratio2 = 0.8
const options2 = {
  root: null,
  rootMargin: '0px',
  threshold: ratio2
}

const handleIntersect2 = function (entries2, observe) {
  entries2.forEach(function (entry2) {
    if (entry2.intersectionRatio > ratio2) {
      start1()
      start2()
      start3()
      start4()
      start5()
      observe.unobserve(entry2.target)
    }
  })
}

const observer2 = new IntersectionObserver(handleIntersect2, options2)
document.querySelectorAll('.progress').forEach(function (r) {
  observer2.observe(r)
})


// contact 


  const tems = document.querySelectorAll(".timeline li");

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    console.log(rect);
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (document.documentElement.clientHeight) &&
      rect.right <= (document.documentElement.clientWidth)
    );
  }

  function slideIn() {
    for (let i = 0; i < tems.length; i++) {
      if (isElementInViewport(tems[i])) {
        tems[i].classList.add("slide-in");
      } else {
        tems[i].classList.remove("slide-in");
      }
    }
  }

  window.addEventListener("load", slideIn);
  window.addEventListener("scroll", slideIn);
  window.addEventListener("resize", slideIn);



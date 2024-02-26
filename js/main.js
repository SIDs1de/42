document.addEventListener('DOMContentLoaded', () => {
  const main = () => {

    inlineSVG.init({
      svgSelector: 'img.svg',
      initClass: 'js-inlinesvg',
    })

    const setHeaderOffset = () => {
      const header = document.querySelector('.header')
      const main = document.querySelector('.main')

      const headerHeight = header.offsetHeight
      let currentMarginTop = getComputedStyle(main).marginTop
      currentMarginTop = +currentMarginTop.slice(0, currentMarginTop.length - 2)
      main.style.marginTop = currentMarginTop + headerHeight + 'px'
    }

    const faqActivate = () => {
      const closeHeaders = (headers) => {
        headers.forEach(h => {
          h.classList.remove('_opened')
          const body = h.parentNode.querySelector('.faq__item-body')
          body.classList.remove('_opened')

          body.style.paddingBottom = '0px'
          body.style.maxHeight = '0px'
        })
      }
      const headers = document.querySelectorAll('.faq__item-header')

      headers.forEach(header => {
        header.addEventListener('click', () => {
          let closeCurrentHeader = false
          if (header.classList.contains('_opened')) closeCurrentHeader = true
          closeHeaders(headers)

          if (!closeCurrentHeader) {
            header.classList.add('_opened')
            const body = header.parentNode.querySelector('.faq__item-body')
            body.classList.add('_opened')
            body.style.paddingBottom = '20px'
            body.style.maxHeight = `${body.scrollHeight + 20}px`
          }
        })
      })
    }

    const swiperActivate = () => {
      const pageSlider = new Swiper('.reviews__swiper', {
        slidesPerView: 1,
        speed: 800,
        observeParents: true,
        observeSlideChildren: true,
        grabCursor: true,
        spaceBetween: 16,
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true,
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
        breakpoints: {
          400: {
            slidesPerView: 2,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 18,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 24,
          }
        }
      })
    }

    let menuOpened = false
    const burgerActivate = () => {
      const burgerBtn = document.querySelector('.burger')
      const headerMenu = document.querySelector('.header__menu')
      const headerMenuInner = document.querySelector('.header__menu-inner')
      const header = document.querySelector('.header')
      const headerNavList = headerMenuInner.querySelector('.header__nav-list')
      const headerMenuBg = document.querySelector('.header__menu-bg')
      window.addEventListener('resize', () => {
        if (window.innerWidth >= window.innerHeight && window.innerWidth <= 820) {
          headerNavList.style.marginTop = '10%'
        } else if (window.innerWidth <= 820) {
          headerNavList.style.marginTop = '40%'
        }
        let headerHeight = getComputedStyle(header).paddingTop
        headerHeight = +headerHeight.slice(0, headerHeight.length - 2)
        headerMenuBg.style.marginTop = -headerHeight + 'px'
        headerMenuInner.style.maxHeight = window.innerHeight + 'px'
      })
      let headerHeight = getComputedStyle(header).paddingTop
      headerHeight = +headerHeight.slice(0, headerHeight.length - 2)
      headerMenuBg.style.marginTop = -headerHeight + 'px'
      headerMenuInner.style.maxHeight = window.innerHeight + 'px'
      if (window.innerWidth >= window.innerHeight && window.innerWidth <= 820) {
        headerNavList.style.marginTop = '10%'
      } else if (window.innerWidth <= 820) {
        headerNavList.style.marginTop = '40%'
      }

      const html = document.querySelector('html')
      const headerNavLinks = document.querySelectorAll('.header__nav-link')
      headerNavLinks.forEach(link => {
        link.addEventListener('click', () => {
          burgerBtn.classList.remove('_opened')
          headerMenu.classList.remove('_opened')
          html.classList.remove('_opened')
          menuOpened = false
        })
      })
      burgerBtn.addEventListener('click', () => {
        if (menuOpened) {
          burgerBtn.classList.remove('_opened')
          headerMenu.classList.remove('_opened')
          html.classList.remove('_opened')
          menuOpened = false
        } else {
          burgerBtn.classList.add('_opened')
          headerMenu.classList.add('_opened')
          html.classList.add('_opened')
          menuOpened = true
        }
      })
    }

    setHeaderOffset()
    faqActivate()
    swiperActivate()
    burgerActivate()
  }

  main()
})

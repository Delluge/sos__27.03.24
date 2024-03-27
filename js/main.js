(function () {

    // ================= BG-Swiper
    new Swiper('.header__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        autoplay: {
            delay: 5000,
        },


    });


    // ================== Burger

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.header__nav-link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }


    // ===================== Gallery Swiper

    new Swiper('.about-sos__swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        effect: 'cards',

        cardsEffect: {
            rotate: false,
        },

        // If we need pagination
        pagination: {
            el: '.about-sos__swiper-pagination',

        },

        // Navigation arrows
        navigation: {
            nextEl: '.about-sos__swiper-button-next',
            prevEl: '.about-sos__swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.about-sos__swiper-scrollbar',
        },
    });


    // Аккордеон

    // Аккордеон

    const accordionLists = document.querySelectorAll('.features__accordion-list');

    accordionLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordionList = e.currentTarget
            const accordionOpenedItem = accordionList.querySelector('.accordion__list-item--oppened')
            const accordionOpenedContent = accordionList.querySelector('.accordion__list-item--oppened .accordion__list-content')

            const accordionControl = e.target.closest('.accordion__control');
            if (!accordionControl) return
            e.preventDefault()
            const accordionItem = accordionControl.parentElement;
            const accordionContent = accordionControl.nextElementSibling;

            if (accordionOpenedItem && accordionItem != accordionOpenedItem) {
                accordionOpenedItem.classList.remove('accordion__list-item--oppened');
                accordionOpenedContent.style.maxHeight = null;
            }
            accordionItem.classList.toggle('accordion__list-item--oppened');

            if (accordionItem.classList.contains('accordion__list-item--oppened')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                accordionContent.style.maxHeight = null;
            }

        });

    });





})()
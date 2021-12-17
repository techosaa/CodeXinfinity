jQuery(document).ready(function() {
    $('.menu-item').addClass('menu-trigger');
    $('.block__link').click(function() {
        $('.main').toggleClass('push');
    });
    $('.collapse').on('shown.bs.collapse', function(e) {
        var $card = $(this).closest('.card');
        $('.overlay').animate({
            scrollTop: $card.offset().top + 300
        }, 500);
        return true;

    });
    $('.menu-trigger').click(function() {
        $('#menu-trigger').toggleClass('clicked');
        $('.menu-type').toggleClass('open');
        $('.product-default .box-title').toggleClass('animated bounceIn');



        $('.main').toggleClass('push');
        $('body').toggleClass('menuOverlay');
        if ($('body').hasClass('menuOverlay')) {
            $.fn.fullpage.setMouseWheelScrolling(false);
        } else {
            $.fn.fullpage.setMouseWheelScrolling(true);
        }
    });

    $('.global-menu-item').click(function() {
        $('.menu-type').toggleClass('open');
        $('body').toggleClass('menuOverlay');
        $('#menu-trigger').toggleClass('clicked');
        $.fn.fullpage.setMouseWheelScrolling(true);
    });


    $('body').scroll(function() {
        if ($('body').scrollTop() >= 10) {
            $('.header').addClass('header-mini');

        } else {
            $('.header').removeClass('header-mini');

        }
    });

});





document.getElementById("section-btn-1").onmouseover = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-1 .box-link-inner", 0.8, {
        x: 15,
        y: 15,
        ease: Elastic.easeOut
    }, 0.00);
    hit01rollover.to(".button-1 .button_side1", 0.8, {
        x: 20,
        y: 20,
        ease: Elastic.easeOut
    }, 0.00);
};
//bounce rollout
document.getElementById("section-btn-1").onmouseout = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-1 .box-link-inner", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
    hit01rollover.to(".button-1 .button_side1", 0.15, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    }, 0.00);
};



{
    const getMousePos = (e) => {
            let posx = 0;
            let posy = 0;
            if (!e) e = window.event;
            if (e.pageX || e.pageY) {
                posx = e.pageX;
                posy = e.pageY;
            } else if (e.clientX || e.clientY) {
                posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
                posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            }
            return {
                x: posx,
                y: posy
            }
        }
        // Generate a random float.
    const getRandomFloat = (min, max) => (Math.random() * (max - min) + min).toFixed(2);

    // Effect 3
    class HoverImgFx3 {
        constructor(el) {
            this.DOM = { el: el };
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = `<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealInner.style.overflow = 'hidden';
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
            charming(this.DOM.el);
            this.DOM.letters = Array.from(this.DOM.el.querySelectorAll('span'));
            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left: document.body.scrollLeft + document.documentElement.scrollLeft,
                    top: document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x+20-docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
                this.animateLetters();
                $(".global-menu").addClass("active-menu");
                $(".default-text .animates").removeClass("has-900");
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);

            });
            this.mouseleaveFn = () => {
                this.hideImage();
                $(".global-menu").removeClass("active-menu");
                $(".default-text .animates").addClass("has-300");
            };

            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        }
        showImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            $('.animated-wrap .box-title').addClass('animated bounceIn');
            $('.arrow').addClass('animated bounceIn');

            $(function() {
                $('.other-view').hover(function() {
                        $('.arrow-wrap').removeClass('active-one');
                    },
                    function() {
                        $('#product-menu-1 .arrow-wrap').addClass('active-one');

                    });
            });

            this.tl = new TimelineMax({
                    onStart: () => {
                        this.DOM.reveal.style.opacity = 1;
                        TweenMax.set(this.DOM.el, { zIndex: 1000 });
                    }
                })
                .add('begin')
                .add(new TweenMax(this.DOM.revealInner, 0.8, {
                    ease: Expo.easeOut,
                    startAt: { opacity: 0, y: '50%', rotation: -15, scale: 0 },
                    y: '0%',
                    rotation: 0,
                    opacity: 1,
                    scale: 1
                }), 'begin')
                .add(new TweenMax(this.DOM.revealImg, 0.8, {
                    ease: Expo.easeOut,
                    startAt: { rotation: 15, scale: 2 },
                    rotation: 0,
                    scale: 1
                }), 'begin');
        }
        hideImage() {
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            $('.animated-wrap .box-title').removeClass('animated bounceIn');
            $('.first').removeClass('active-one');
            $('.arrow').removeClass('animated bounceIn');

            this.tl = new TimelineMax({
                    onStart: () => {
                        TweenMax.set(this.DOM.el, { zIndex: 999 });
                    },
                    onComplete: () => {
                        TweenMax.set(this.DOM.el, { zIndex: '' });
                        TweenMax.set(this.DOM.reveal, { opacity: 0 });
                    }
                })
                .add('begin')
                .add(new TweenMax(this.DOM.revealInner, 0.15, {
                    ease: Sine.easeOut,
                    y: '-40%',
                    rotation: 10,
                    scale: 0.9,
                    opacity: 0
                }), 'begin')
                .add(new TweenMax(this.DOM.revealImg, 0.15, {
                    ease: Sine.easeOut,
                    rotation: -10,
                    scale: 1.5
                }), 'begin')
        }
        animateLetters() {
            this.DOM.letters.forEach((letter, pos) => {
                TweenMax.set(letter, { opacity: 0 });
                const delay = pos * 2 / 100;
                TweenMax.to(letter, pos * 0.08 + 0.5, {
                    ease: Expo.easeOut,
                    delay: delay,
                    startAt: { y: '50%' },
                    y: '0%',
                    opacity: 1
                });
            });
        }
    }

    class HoverImgFx6 {
        constructor(el) {
            this.DOM = { el: el };
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = `<div class="hover-reveal__deco"></div><div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`;
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealDeco = this.DOM.reveal.querySelector('.hover-reveal__deco');
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
            this.rect = this.DOM.reveal.getBoundingClientRect();
            charming(this.DOM.el);
            this.DOM.letters = Array.from(this.DOM.el.querySelectorAll('span'));
            this.initEvents();
        }
        initEvents() {
            this.positionElement = (ev) => {
                const mousePos = getMousePos(ev);
                const docScrolls = {
                    left: document.body.scrollLeft + document.documentElement.scrollLeft,
                    top: document.body.scrollTop + document.documentElement.scrollTop
                };
                this.DOM.reveal.style.top = `${mousePos.y+20-docScrolls.top}px`;
                this.DOM.reveal.style.left = `${mousePos.x-this.rect.width-20-docScrolls.left}px`;
            };
            this.mouseenterFn = (ev) => {
                this.positionElement(ev);
                this.showImage();
                this.animateLetters();
            };
            this.mousemoveFn = ev => requestAnimationFrame(() => {
                this.positionElement(ev);
            });
            this.mouseleaveFn = () => {
                this.hideImage();
            };

            this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
            this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
            this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            window.addEventListener('resize', () => this.rect = this.DOM.reveal.getBoundingClientRect());
        }
        showImage() {
            TweenMax.killTweensOf(this.DOM.reveal);
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            TweenMax.killTweensOf(this.DOM.revealDeco);
            $('.animated-wrap .box-title').addClass('animated bounceIn');

            this.tl = new TimelineMax({
                    onStart: () => {
                        this.DOM.reveal.style.opacity = 1;
                        TweenMax.set(this.DOM.el, { zIndex: 1000 });
                    }
                })
                .add('begin')
                .set(this.DOM.revealInner, { opacity: 0 })
                .set(this.DOM.revealDeco, { transformOrigin: '-5% 50%' })
                .add(new TweenMax(this.DOM.revealDeco, 0.2, {
                    ease: Quad.easeInOut,
                    startAt: { scaleX: 0 },
                    scaleX: 1,
                    scaleY: 0.8
                }), 'begin')
                .set(this.DOM.revealDeco, { transformOrigin: '105% 50%' })
                .add(new TweenMax(this.DOM.revealDeco, 0.3, {
                    ease: Sine.easeOut,
                    scaleX: 0,
                    scaleY: 1
                }), 'begin+=0.2')
                .add(new TweenMax(this.DOM.revealInner, 0.9, {
                    ease: Elastic.easeOut.config(1, 0.6),
                    startAt: { scale: 0, opacity: 1, x: '0%' },
                    scale: 1,
                }), 'begin+=0.4')
                .add(new TweenMax(this.DOM.revealImg, 0.8, {
                    ease: Expo.easeOut,
                    rotation: -15,
                }), 'begin')
                .add(new TweenMax(this.DOM.reveal, 1.1, {
                    ease: Quint.easeOut,
                    startAt: { x: '-50%', y: '10%', rotation: -35 },
                    x: '0%',
                    y: '0%',
                    rotation: 15
                }), 'begin');
        }
        hideImage() {
            TweenMax.killTweensOf(this.DOM.reveal);
            TweenMax.killTweensOf(this.DOM.revealInner);
            TweenMax.killTweensOf(this.DOM.revealImg);
            TweenMax.killTweensOf(this.DOM.revealDeco);
            $('.animated-wrap .box-title').removeClass('animated bounceIn');

            this.tl = new TimelineMax({
                    onStart: () => {
                        TweenMax.set(this.DOM.el, { zIndex: 999 });
                    },
                    onComplete: () => {
                        TweenMax.set(this.DOM.el, { zIndex: '' });
                        TweenMax.set(this.DOM.reveal, { opacity: 0 });
                    }
                })
                .add(new TweenMax(this.DOM.revealInner, 0.13, {
                    ease: Sine.easeOut,
                    scale: 0.8,
                    opacity: 0
                }));
        }
        animateLetters() {
            TweenMax.set(this.DOM.letters, { opacity: 0 });
            TweenMax.staggerTo(this.DOM.letters, 1.5, {
                ease: Elastic.easeOut.config(1, 0.4),
                startAt: { y: '50%' },
                y: '0%',
                opacity: 1
            }, 0.02);
        }
    }
    Array.from(document.querySelectorAll('[data-fx="6"] > a, a[data-fx="6"]')).forEach(link => new HoverImgFx6(link));
    Array.from(document.querySelectorAll('[data-fx="3"] > a, a[data-fx="3"]')).forEach(link => new HoverImgFx3(link));


}



jQuery(window).bind('orientationchange', function(e) {
    switch (window.orientation) {
        case 0:
            $('.turnDeviceNotification').css('display', 'none');
            // The device is in portrait mode now
            break;

        case 180:
            $('.turnDeviceNotification').css('display', 'none');
            // The device is in portrait mode now
            break;

        case 90:
            // The device is in landscape now
            $('.turnDeviceNotification').css('display', 'block');
            break;

        case -90:
            // The device is in landscape now
            $('.turnDeviceNotification').css('display', 'block');
            break;
    }
});

document.getElementById("section-btn-1").onmouseover = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".global-menu__wrap .box-link-inner", 0.8, {
        x: 15,
        y: 15,
        ease: Elastic.easeOut
    }, 0.00);
    hit01rollover.to(".button_side1", 0.8, {
        x: 25,
        y: 20,
        ease: Elastic.easeOut
    }, 0.00);
};
//bounce rollout
document.getElementById("section-btn-1").onmouseout = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".global-menu__wrap .box-link-inner", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
    hit01rollover.to(".button_side1", 0.15, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    }, 0.00);
};


function onReady(callback) {
    var intervalId = window.setInterval(function() {
        if (document.getElementsByTagName('body')[0] !== undefined) {
            window.clearInterval(intervalId);
            callback.call(this);
        }
    }, 1000);
}

function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
    setVisible('.main', true);
    $('#main_veil').addClass("no_width");
    $('.loader-wrap').addClass("trigger-animation fadeOut");
    new WOW().init();
});
function _createForOfIteratorHelper(o) {
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
    var it, normalCompletion = true,
        didErr = false,
        err;
    return {
        s: function s() { it = o[Symbol.iterator](); },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } }
    };
}

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function($) {
    // variables
    var $isAnimatedSix = $('.footer .is-animated'),
        $isAnimatedSixSingle = $('.footer .is-animated__single'),
        $isAnimatedSixDouble = $('.footer .is-animated__double'),
        $isAnimatedSixTriple = $('.footer .is-animated__triple');
    $('#fullpage').fullpage({
        navigation: true,
        controlArrows: true,
        slidesNavigation: true,
        verticalCentered: false,
        menu: '#menu',
        v2compatible: true,
        css3: true,
        recordHistory: true,
        easingcss3: 'cubic-bezier(1.000, -0.440, 0.265, 1.385)',
        scrollingSpeed: 1600,
        paddingTop: '140px',
        anchors: ['Panna', '100-naturale'],
        sectionSelector: 'section',
        navigationTooltips: ['Panna', '100 Naturale'],
        onLeave: function onLeave(index, nextIndex, direction) {
            var loadedSection = this;
            /**
             * use the following condition: 
             *
             *   if( index == 1 && direction == 'down' ) {
             *
             * if you haven't enabled the dot navigation
             * or you aren't interested in the animations that occur 
             * when you jump (using the dot navigation) 
             * from the first section to another sections 
             */
            // first animation

            if (index == 1 && nextIndex == 2) {
                $isAnimatedSix.addClass('animated bounceIn');
                $isAnimatedSix.eq(0).css('animation-delay', '.9s');
                $isAnimatedSix.eq(1).css('animation-delay', '1s');
                $isAnimatedSix.eq(2).css('animation-delay', '1s');
                $isAnimatedSixSingle.addClass('animated fadeInLeft');
                $isAnimatedSixSingle.eq(0).css('animation-delay', '1.6s');
                $isAnimatedSixSingle.eq(1).css('animation-delay', '1.6s');
                $isAnimatedSixSingle.eq(2).css('animation-delay', '1.8s');
                $isAnimatedSixSingle.eq(3).css('animation-delay', '1.9s');
                $isAnimatedSixSingle.eq(4).css('animation-delay', '2s');
                $isAnimatedSixSingle.eq(5).css('animation-delay', '2.1s');
                $isAnimatedSixSingle.eq(6).css('animation-delay', '2.2s');
                $isAnimatedSixDouble.addClass('animated fadeInUp').css('animation-delay', '2s');
                $isAnimatedSixTriple.addClass('animated fadeInLeft').css('animation-delay', '1.2s');
            }
        },
        afterLoad: function afterLoad(origin, destination, direction) {
            $("ul li a").each(function() {
                if ($(this).attr("href") && $(this).hasClass('active')) {
                    var hashString = window.location.hash;

                    if (hashString.indexOf("-dettagli") < 1) {
                        //alert("comming in after load event");
                        window.location.hash = $(this).attr("href");
                        localStorage.setItem("lastUrl", window.location);
                    }
                }
            }); //change the title of the page here.
        }
    });
})(jQuery);

var MagneticCursor = /*#__PURE__*/ function() {
    "use strict";

    function MagneticCursor() {
        _classCallCheck(this, MagneticCursor);

        this.links = _toConsumableArray(document.querySelectorAll('.c-magnetic'));
        this.cursor = document.querySelector('.c-cursor__pointer');
        this.pos = {
            x: 0,
            y: 0
        };
    }

    _createClass(MagneticCursor, [{
        key: "activateMagnetic",
        value: function activateMagnetic() {
            var _this = this;

            this.links.map(function(link) {
                var that = _this;
                link.addEventListener('mousemove', function(e) {
                    that.moveTarget(e, this, this.querySelector('span'), 50);
                    that.moveCursor(e, this, 1.5);
                });
                link.addEventListener('mouseout', function() {
                    TweenMax.to(this.querySelector('span'), 0.3, {
                        x: 0,
                        y: 0
                    });
                });
            });
        }
    }, {
        key: "moveCursor",
        value: function moveCursor(e, link, force) {
            var rect = link.getBoundingClientRect();
            var relX = e.pageX - rect.left;
            var relY = e.pageY - rect.top;
            this.pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / force;
            this.pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / force;
            TweenMax.to(this.cursor, 0.3, {
                x: this.pos.x,
                y: this.pos.y
            });
        }
    }, {
        key: "moveTarget",
        value: function moveTarget(e, link, span, force) {
            var boundingRect = link.getBoundingClientRect();
            var relX = e.pageX - boundingRect.left;
            var relY = e.pageY - boundingRect.top;
            TweenMax.to(span, 0.3, {
                x: (relX - boundingRect.width / 2) / boundingRect.width * force,
                y: (relY - boundingRect.height / 2) / boundingRect.height * force,
                ease: Power2.easeOut
            });
        }
    }, {
        key: "render",
        value: function render() {
            this.activateMagnetic();
        }
    }]);

    return MagneticCursor;
}();

var magneticCursor = new MagneticCursor();
magneticCursor.render();



document.getElementById("section-btn-2").onmouseover = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-2 .box-link-inner", 0.8, {
        x: -1,
        y: -1,
        ease: Elastic.easeOut
    }, 0.00);
    hit01rollover.to(".button-2 .button_side2", 0.8, {
        x: -3,
        y: -3,
        ease: Elastic.easeOut
    }, 0.00);
}; //bounce rollout


document.getElementById("section-btn-2").onmouseout = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-2 .box-link-inner", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
    hit01rollover.to(".button-2 .button_side2", 0.15, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    }, 0.00);
};

document.getElementById("section-btn-3").onmouseover = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-3 .box-link-inner", 0.8, {
        x: -1,
        y: -1,
        ease: Elastic.easeOut
    }, 0.00);
    hit01rollover.to(".button-3 .button_side3", 0.8, {
        x: -3,
        y: -3,
        ease: Elastic.easeOut
    }, 0.00);
}; //bounce rollout


document.getElementById("section-btn-3").onmouseout = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-3 .box-link-inner", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
    hit01rollover.to(".button-3 .button_side3", 0.15, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    }, 0.00);
};

document.getElementById("section-btn-4").onmouseover = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-4 .box-link-inner", 0.8, {
        x: -1,
        y: -1,
        ease: Elastic.easeOut
    }, 0.00);
    hit01rollover.to(".button-4 .button_side4", 0.8, {
        x: -3,
        y: -3,
        ease: Elastic.easeOut
    }, 0.00);
}; //bounce rollout


document.getElementById("section-btn-4").onmouseout = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-4 .box-link-inner", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
    hit01rollover.to(".button-4 .button_side4", 0.15, {
        x: 0,
        y: 0,
        ease: Elastic.easeOut
    }, 0.00);
};


document.getElementById("section-btn-9").onmouseover = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-9 .box-link-inner", 0.8, {
        x: 1,
        y: 1,
        ease: Elastic.easeOut
    }, 0.00);
    hit01rollover.to(".button-9 .button09_side", 0.8, {
        x: 3,
        y: 3,
        ease: Elastic.easeOut
    }, 0.00);
}; //bounce rollout


document.getElementById("section-btn-9").onmouseout = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-9 .box-link-inner", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
    hit01rollover.to(".button-9 .button09_side", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
};

document.getElementById("section-btn-14").onmouseover = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-14 .box-link-inner", 0.8, {
        x: -1,
        y: -1,
        ease: Elastic.easeOut
    }, 0.00);
    hit01rollover.to(".button-14 .button14_side", 0.8, {
        x: -3,
        y: -3,
        ease: Elastic.easeOut
    }, 0.00);
}; //bounce rollout


document.getElementById("section-btn-14").onmouseout = function() {
    var hit01rollover = new TimelineMax();
    hit01rollover.to(".button-14 .box-link-inner", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
    hit01rollover.to(".button-14 .button14_side", 0.15, {
        x: 0,
        y: 0,
        ease: Power4.easeOut
    }, 0.00);
};

{
    var getMousePos = function getMousePos(e) {
        var posx = 0;
        var posy = 0;
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
        };
    }; // Generate a random float.


    var getRandomFloat = function getRandomFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    }; // Effect 3


    var HoverImgFx3 = /*#__PURE__*/ function() {
        "use strict";

        function HoverImgFx3(el) {
            _classCallCheck(this, HoverImgFx3);

            this.DOM = {
                el: el
            };
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = "<div class=\"hover-reveal__inner\"><div class=\"hover-reveal__img\" style=\"background-image:url(".concat(this.DOM.el.dataset.img, ")\"></div></div>");
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealInner.style.overflow = 'hidden';
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
            charming(this.DOM.el);
            this.DOM.letters = Array.from(this.DOM.el.querySelectorAll('span'));
            this.initEvents();
        }

        _createClass(HoverImgFx3, [{
            key: "initEvents",
            value: function initEvents() {
                var _this2 = this;

                this.positionElement = function(ev) {
                    var mousePos = getMousePos(ev);
                    var docScrolls = {
                        left: document.body.scrollLeft + document.documentElement.scrollLeft,
                        top: document.body.scrollTop + document.documentElement.scrollTop
                    };
                    _this2.DOM.reveal.style.top = "".concat(mousePos.y + 20 - docScrolls.top, "px");
                    _this2.DOM.reveal.style.left = "".concat(mousePos.x + 20 - docScrolls.left, "px");
                };

                this.mouseenterFn = function(ev) {
                    _this2.positionElement(ev);

                    _this2.showImage();

                    _this2.animateLetters();

                    $(".global-menu").addClass("active-menu");
                    $(".default-text .animates").removeClass("has-900");
                };

                this.mousemoveFn = function(ev) {
                    return requestAnimationFrame(function() {
                        _this2.positionElement(ev);
                    });
                };

                this.mouseleaveFn = function() {
                    _this2.hideImage();

                    $(".global-menu").removeClass("active-menu");
                    $(".default-text .animates").addClass("has-300");
                };

                this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            }
        }, {
            key: "showImage",
            value: function showImage() {
                var _this3 = this;

                TweenMax.killTweensOf(this.DOM.revealInner);
                TweenMax.killTweensOf(this.DOM.revealImg);
                $('.animated-wrap .box-title').addClass('animated bounceIn');
                $('.arrow').addClass('animated bounceIn');
                $(function() {
                    $('.other-view').hover(function() {
                        $('.arrow-wrap').removeClass('active-one');
                    }, function() {
                        $('#product-menu-1 .arrow-wrap').addClass('active-one');
                    });
                });
                this.tl = new TimelineMax({
                    onStart: function onStart() {
                        _this3.DOM.reveal.style.opacity = 1;
                        TweenMax.set(_this3.DOM.el, {
                            zIndex: 1000
                        });
                    }
                }).add('begin').add(new TweenMax(this.DOM.revealInner, 0.8, {
                    ease: Expo.easeOut,
                    startAt: {
                        opacity: 0,
                        y: '50%',
                        rotation: -15,
                        scale: 0
                    },
                    y: '0%',
                    rotation: 0,
                    opacity: 1,
                    scale: 1
                }), 'begin').add(new TweenMax(this.DOM.revealImg, 0.8, {
                    ease: Expo.easeOut,
                    startAt: {
                        rotation: 15,
                        scale: 2
                    },
                    rotation: 0,
                    scale: 1
                }), 'begin');
            }
        }, {
            key: "hideImage",
            value: function hideImage() {
                var _this4 = this;

                TweenMax.killTweensOf(this.DOM.revealInner);
                TweenMax.killTweensOf(this.DOM.revealImg);
                $('.animated-wrap .box-title').removeClass('animated bounceIn');
                $('.arrow').removeClass('animated bounceIn');
                this.tl = new TimelineMax({
                    onStart: function onStart() {
                        TweenMax.set(_this4.DOM.el, {
                            zIndex: 999
                        });
                    },
                    onComplete: function onComplete() {
                        TweenMax.set(_this4.DOM.el, {
                            zIndex: ''
                        });
                        TweenMax.set(_this4.DOM.reveal, {
                            opacity: 0
                        });
                    }
                }).add('begin').add(new TweenMax(this.DOM.revealInner, 0.15, {
                    ease: Sine.easeOut,
                    y: '-40%',
                    rotation: 10,
                    scale: 0.9,
                    opacity: 0
                }), 'begin').add(new TweenMax(this.DOM.revealImg, 0.15, {
                    ease: Sine.easeOut,
                    rotation: -10,
                    scale: 1.5
                }), 'begin');
            }
        }, {
            key: "animateLetters",
            value: function animateLetters() {
                this.DOM.letters.forEach(function(letter, pos) {
                    TweenMax.set(letter, {
                        opacity: 0
                    });
                    var delay = pos * 2 / 100;
                    TweenMax.to(letter, pos * 0.08 + 0.5, {
                        ease: Expo.easeOut,
                        delay: delay,
                        startAt: {
                            y: '50%'
                        },
                        y: '0%',
                        opacity: 1
                    });
                });
            }
        }]);

        return HoverImgFx3;
    }();

    var HoverImgFx6 = /*#__PURE__*/ function() {
        "use strict";

        function HoverImgFx6(el) {
            _classCallCheck(this, HoverImgFx6);

            this.DOM = {
                el: el
            };
            this.DOM.reveal = document.createElement('div');
            this.DOM.reveal.className = 'hover-reveal';
            this.DOM.reveal.innerHTML = "<div class=\"hover-reveal__deco\"></div><div class=\"hover-reveal__inner\"><div class=\"hover-reveal__img\" style=\"background-image:url(".concat(this.DOM.el.dataset.img, ")\"></div></div>");
            this.DOM.el.appendChild(this.DOM.reveal);
            this.DOM.revealInner = this.DOM.reveal.querySelector('.hover-reveal__inner');
            this.DOM.revealDeco = this.DOM.reveal.querySelector('.hover-reveal__deco');
            this.DOM.revealImg = this.DOM.revealInner.querySelector('.hover-reveal__img');
            this.rect = this.DOM.reveal.getBoundingClientRect();
            charming(this.DOM.el);
            this.DOM.letters = Array.from(this.DOM.el.querySelectorAll('span'));
            this.initEvents();
        }

        _createClass(HoverImgFx6, [{
            key: "initEvents",
            value: function initEvents() {
                var _this5 = this;

                this.positionElement = function(ev) {
                    var mousePos = getMousePos(ev);
                    var docScrolls = {
                        left: document.body.scrollLeft + document.documentElement.scrollLeft,
                        top: document.body.scrollTop + document.documentElement.scrollTop
                    };
                    _this5.DOM.reveal.style.top = "".concat(mousePos.y + 20 - docScrolls.top, "px");
                    _this5.DOM.reveal.style.left = "".concat(mousePos.x - _this5.rect.width - 20 - docScrolls.left, "px");
                };

                this.mouseenterFn = function(ev) {
                    _this5.positionElement(ev);

                    _this5.showImage();

                    _this5.animateLetters();
                };

                this.mousemoveFn = function(ev) {
                    return requestAnimationFrame(function() {
                        _this5.positionElement(ev);
                    });
                };

                this.mouseleaveFn = function() {
                    _this5.hideImage();
                };

                this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
                window.addEventListener('resize', function() {
                    return _this5.rect = _this5.DOM.reveal.getBoundingClientRect();
                });
            }
        }, {
            key: "showImage",
            value: function showImage() {
                var _this6 = this;

                TweenMax.killTweensOf(this.DOM.reveal);
                TweenMax.killTweensOf(this.DOM.revealInner);
                TweenMax.killTweensOf(this.DOM.revealImg);
                TweenMax.killTweensOf(this.DOM.revealDeco);
                $('.animated-wrap .box-title').addClass('animated bounceIn');
                this.tl = new TimelineMax({
                    onStart: function onStart() {
                        _this6.DOM.reveal.style.opacity = 1;
                        TweenMax.set(_this6.DOM.el, {
                            zIndex: 1000
                        });
                    }
                }).add('begin').set(this.DOM.revealInner, {
                    opacity: 0
                }).set(this.DOM.revealDeco, {
                    transformOrigin: '-5% 50%'
                }).add(new TweenMax(this.DOM.revealDeco, 0.2, {
                    ease: Quad.easeInOut,
                    startAt: {
                        scaleX: 0
                    },
                    scaleX: 1,
                    scaleY: 0.8
                }), 'begin').set(this.DOM.revealDeco, {
                    transformOrigin: '105% 50%'
                }).add(new TweenMax(this.DOM.revealDeco, 0.3, {
                    ease: Sine.easeOut,
                    scaleX: 0,
                    scaleY: 1
                }), 'begin+=0.2').add(new TweenMax(this.DOM.revealInner, 0.9, {
                    ease: Elastic.easeOut.config(1, 0.6),
                    startAt: {
                        scale: 0,
                        opacity: 1,
                        x: '0%'
                    },
                    scale: 1
                }), 'begin+=0.4').add(new TweenMax(this.DOM.revealImg, 0.8, {
                    ease: Expo.easeOut,
                    rotation: -15
                }), 'begin').add(new TweenMax(this.DOM.reveal, 1.1, {
                    ease: Quint.easeOut,
                    startAt: {
                        x: '-50%',
                        y: '10%',
                        rotation: -35
                    },
                    x: '0%',
                    y: '0%',
                    rotation: 15
                }), 'begin');
            }
        }, {
            key: "hideImage",
            value: function hideImage() {
                var _this7 = this;

                TweenMax.killTweensOf(this.DOM.reveal);
                TweenMax.killTweensOf(this.DOM.revealInner);
                TweenMax.killTweensOf(this.DOM.revealImg);
                TweenMax.killTweensOf(this.DOM.revealDeco);
                $('.animated-wrap .box-title').removeClass('animated bounceIn');
                $('.first').removeClass('active-one');
                this.tl = new TimelineMax({
                    onStart: function onStart() {
                        TweenMax.set(_this7.DOM.el, {
                            zIndex: 999
                        });
                    },
                    onComplete: function onComplete() {
                        TweenMax.set(_this7.DOM.el, {
                            zIndex: ''
                        });
                        TweenMax.set(_this7.DOM.reveal, {
                            opacity: 0
                        });
                    }
                }).add(new TweenMax(this.DOM.revealInner, 0.13, {
                    ease: Sine.easeOut,
                    scale: 0.8,
                    opacity: 0
                }));
            }
        }, {
            key: "animateLetters",
            value: function animateLetters() {
                TweenMax.set(this.DOM.letters, {
                    opacity: 0
                });
                TweenMax.staggerTo(this.DOM.letters, 1.5, {
                    ease: Elastic.easeOut.config(1, 0.4),
                    startAt: {
                        y: '50%'
                    },
                    y: '0%',
                    opacity: 1
                }, 0.02);
            }
        }]);

        return HoverImgFx6;
    }();

    Array.from(document.querySelectorAll('[data-fx="6"] > a, a[data-fx="6"]')).forEach(function(link) {
        return new HoverImgFx6(link);
    });
    Array.from(document.querySelectorAll('[data-fx="3"] > a, a[data-fx="3"]')).forEach(function(link) {
        return new HoverImgFx3(link);
    });
} {
    var lineEq = function lineEq(y2, y1, x2, x1, currentVal) {
        // y = mx + b 
        var m = (y2 - y1) / (x2 - x1),
            b = y1 - m * x1;
        return m * currentVal + b;
    };

    var getRandomInt = function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    var _getRandomFloat = function _getRandomFloat(min, max) {
        return (Math.random() * (max - min) + min).toFixed(2);
    };

    var setRange = function setRange(obj) {
        for (var k in obj) {
            if (obj[k] == undefined) {
                obj[k] = [0, 0];
            } else if (typeof obj[k] === 'number') {
                obj[k] = [-1 * obj[k], obj[k]];
            }
        }
    }; // from http://www.quirksmode.org/js/events_properties.html#position


    var _getMousePos = function _getMousePos(e) {
        var posx = 0;
        var posy = 0;
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
        };
    };

    var Item = /*#__PURE__*/ function() {
        "use strict";

        function Item(el, options) {
            _classCallCheck(this, Item);

            this.DOM = {
                el: el
            };
            this.options = {
                image: {
                    translation: {
                        x: -10,
                        y: -10,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    repeat: -1
                },
                title: {
                    translation: {
                        x: 5,
                        y: 10,
                        z: 0
                    }
                },
                text: {
                    translation: {
                        x: 20,
                        y: 50,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: -20
                    }
                },
                deco: {
                    translation: {
                        x: -20,
                        y: 0,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    }
                },
                deco2: {
                    translation: {
                        x: -30,
                        y: 0,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    }
                },
                deco3: {
                    translation: {
                        x: -20,
                        y: 0,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    }
                },
                deco4: {
                    translation: {
                        x: -20,
                        y: 0,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    }
                },
                deco5: {
                    translation: {
                        x: 20,
                        y: 0,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    }
                },
                link: {
                    translation: {
                        x: 20,
                        y: 0,
                        z: 0
                    },
                    rotation: {
                        x: 0,
                        y: 0,
                        z: 3
                    }
                },
                content: {
                    translation: {
                        x: 5,
                        y: 3,
                        z: 0
                    }
                }
            };
            Object.assign(this.options, options);
            this.DOM.animatable = {};
            this.DOM.animatable.image = this.DOM.el.querySelector('.box-img');
            this.DOM.animatable.title = this.DOM.el.querySelector('.box-title');
            this.DOM.animatable.text = this.DOM.el.querySelector('.top-particle');
            this.DOM.animatable.deco = this.DOM.el.querySelector('.box-deco');
            this.DOM.animatable.deco2 = this.DOM.el.querySelector('.box-deco-top');
            this.DOM.animatable.deco3 = this.DOM.el.querySelector('.box-deco-left');
            this.DOM.animatable.deco4 = this.DOM.el.querySelector('.box-deco-bottom');
            this.DOM.animatable.deco5 = this.DOM.el.querySelector('.box-deco-vbottom');
            this.DOM.animatable.shadow = this.DOM.el.querySelector('.box-shadow');
            this.DOM.animatable.content = this.DOM.el.querySelector('.box-content');
            this.initEvents();
        }

        _createClass(Item, [{
            key: "initEvents",
            value: function initEvents() {
                var _this8 = this;

                var enter = false;

                this.mouseenterFn = function() {
                    if (enter) {
                        enter = false;
                    }

                    ;
                    clearTimeout(_this8.mousetime);
                    _this8.mousetime = setTimeout(function() {
                        return enter = true;
                    }, 40);
                };

                this.mousemoveFn = function(ev) {
                    return requestAnimationFrame(function() {
                        if (!enter) return;

                        _this8.tilt(ev);
                    });
                };

                this.mouseleaveFn = function(ev) {
                    return requestAnimationFrame(function() {
                        if (!enter || !allowTilt) return;
                        enter = false;
                        clearTimeout(_this8.mousetime);

                        for (var key in _this8.DOM.animatable) {
                            if (_this8.DOM.animatable[key] == undefined || _this8.options[key] == undefined) {
                                continue;
                            }

                            TweenMax.to(_this8.DOM.animatable[key], _this8.options[key].reverseAnimation != undefined ? _this8.options[key].reverseAnimation.duration || 0 : 1.5, {
                                ease: _this8.options[key].reverseAnimation != undefined ? _this8.options[key].reverseAnimation.ease || 'Power2.easeOut' : 'Power2.easeOut',
                                x: 0,
                                y: 0,
                                z: 0,
                                rotationX: 0,
                                rotationY: 0,
                                rotationZ: 0
                            });
                        }
                    });
                };

                this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
                this.DOM.el.addEventListener('mousemove', this.mousemoveFn);
                this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
            }
        }, {
            key: "tilt",
            value: function tilt(ev) {
                if (!allowTilt) return;

                var mousepos = _getMousePos(ev); // Document scrolls.


                var docScrolls = {
                    left: document.body.scrollLeft + document.documentElement.scrollLeft,
                    top: document.body.scrollTop + document.documentElement.scrollTop
                };
                var bounds = this.DOM.el.getBoundingClientRect(); // Mouse position relative to the main element (this.DOM.el).

                var relmousepos = {
                    x: mousepos.x - bounds.left - docScrolls.left,
                    y: mousepos.y - bounds.top - docScrolls.top
                }; // Movement settings for the animatable elements.

                for (var key in this.DOM.animatable) {
                    if (this.DOM.animatable[key] == undefined || this.options[key] == undefined) {
                        continue;
                    }

                    var t = this.options[key] != undefined ? this.options[key].translation || {
                            x: 0,
                            y: 0,
                            z: 0
                        } : {
                            x: 0,
                            y: 0,
                            z: 0
                        },
                        r = this.options[key] != undefined ? this.options[key].rotation || {
                            x: 0,
                            y: 0,
                            z: 0
                        } : {
                            x: 0,
                            y: 0,
                            z: 0
                        };
                    setRange(t);
                    setRange(r);
                    var transforms = {
                        translation: {
                            x: (t.x[1] - t.x[0]) / bounds.width * relmousepos.x + t.x[0],
                            y: (t.y[1] - t.y[0]) / bounds.height * relmousepos.y + t.y[0],
                            z: (t.z[1] - t.z[0]) / bounds.height * relmousepos.y + t.z[0]
                        },
                        rotation: {
                            x: (r.x[1] - r.x[0]) / bounds.height * relmousepos.y + r.x[0],
                            y: (r.y[1] - r.y[0]) / bounds.width * relmousepos.x + r.y[0],
                            z: (r.z[1] - r.z[0]) / bounds.width * relmousepos.x + r.z[0]
                        }
                    };
                    TweenMax.to(this.DOM.animatable[key], 1.5, {
                        ease: 'Power1.easeOut',
                        x: transforms.translation.x,
                        y: transforms.translation.y,
                        z: transforms.translation.z,
                        rotationX: transforms.rotation.x,
                        rotationY: transforms.rotation.y,
                        rotationZ: transforms.rotation.z
                    });
                }
            }
        }]);

        return Item;
    }();

    var Overlay = /*#__PURE__*/ function() {
        "use strict";

        function Overlay() {
            _classCallCheck(this, Overlay);

            this.DOM = {
                el: document.querySelector('.overlay')
            };
            this.DOM.reveal = this.DOM.el.querySelector('.overlay-reveal');
            this.DOM.items = this.DOM.el.querySelectorAll('.overlay-item');
            this.DOM.close = this.DOM.el.querySelector('.overlay-close');
            this.DOM.close2 = this.DOM.el.querySelector('.overlay-close2');
        }

        _createClass(Overlay, [{
            key: "show",
            value: function show(contentItem) {
                var _this9 = this;

                this.contentItem = contentItem;
                this.DOM.el.classList.add('overlay-open');
                this.DOM.el.classList.add('overlay--open');
                fullpage_api.setAllowScrolling(false);
                $.fn.fullpage.setMouseWheelScrolling(false);
                $('.box-deco').removeClass('float');
                $('.box-pos').addClass("fadeIn animated has-900");
                $('.column-1').addClass("bounceIn animated has-800");
                $('.column-2').addClass("bounceIn animated has-1000");
                $('.column-3').addClass("bounceIn animated has-1200");
                $('.column-4').addClass("bounceIn animated has-1400");
                $('.column-5').addClass("bounceIn animated has-1600");
                $('.column-6').addClass("bounceIn animated has-600");
                $(window).on('pushstate', function(event) {
                    alert("push");
                }); // This one pushes u to forward page through history...

                $('.section-footer .box-link').removeClass('fadeInUp');
                $('.section-footer .box-link').addClass('fadeInLeft animated'); // show revealer

                TweenMax.to(this.DOM.reveal, .5, {
                    ease: 'Power1.easeInOut',
                    x: '0%',
                    onComplete: function onComplete() {
                        // hide scroll
                        document.body.classList.add('preview-open'); // show preview

                        _this9.revealItem(contentItem); // hide revealer


                        TweenMax.to(_this9.DOM.reveal, .5, {
                            delay: 0.2,
                            ease: 'Power3.easeOut',
                            x: '-100%'
                        });
                        _this9.DOM.close.style.opacity = 1;
                    }
                });
            }
        }, {
            key: "revealItem",
            value: function revealItem() {
                localStorage.setItem("isDetailOpend", "Yes");
                this.contentItem.style.opacity = 1;
                fullpage_api.setAllowScrolling(false);
                $.fn.fullpage.setMouseWheelScrolling(false);
                this.contentItem.classList.add('content-show');
                $('.section-footer .box-link').removeClass('fadeInLeft animated'); // $(".overlay-item").css("height", window.innerHeight + "px");
                // $(".overlay--open").unbind("scroll");

                var itemElems = [];
                itemElems.push(this.contentItem.querySelector('.box-shadow'));
                itemElems.push(this.contentItem.querySelector('.box-img'));
                itemElems.push(this.contentItem.querySelector('.box-title'));
                itemElems.push(this.contentItem.querySelector('.top-particle'));
                itemElems.push(this.contentItem.querySelector('.box-deco'));
                itemElems.push(this.contentItem.querySelector('.overlay-content'));

                for (var _i = 0, _itemElems = itemElems; _i < _itemElems.length; _i++) {
                    var el = _itemElems[_i];
                    if (el == null) continue;
                    var bounds = el.getBoundingClientRect();
                    var win = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    TweenMax.to(el, lineEq(0.8, 1.2, win.width, 0, Math.abs(bounds.left + bounds.width - win.width)), {
                        ease: 'Expo.easeOut',
                        delay: 0.2,
                        startAt: {
                            x: "".concat(lineEq(0, 800, win.width, 0, Math.abs(bounds.left + bounds.width - win.width))),
                            y: "".concat(lineEq(-100, 100, win.height, 0, Math.abs(bounds.top + bounds.height - win.height))),
                            rotationZ: "".concat(lineEq(5, 30, 0, win.width, Math.abs(bounds.left + bounds.width - win.width)))
                        },
                        x: 0,
                        y: 0,
                        rotationZ: 0
                    });
                }
            }
        }, {
            key: "hide",
            value: function hide() {
                var _this10 = this;

                this.DOM.el.classList.remove('overlay-open');
                fullpage_api.setAllowScrolling(true);
                setTimeout(function() {
                    $('.overlay-item').removeClass("content-show");
                }, 1000);
                $('body').removeClass('preview-open');
                $('.collapse').collapse('hide');
                $('.box-pos').removeClass("fadeIn");
                $('.box-pos').addClass("bounceIn");

                if ($('.box').hasClass('align-items-center')) {
                    $('.box').removeClass('align-items-top');
                    $('.box').addClass('align-items-center');
                    $('.overlay-container').addClass('h-100');
                } else {
                    $('.box').removeClass('align-items-top');
                    $('.box').addClass('align-items-center');
                    $('.overlay-container').addClass('h-100');
                }

                setTimeout(function() {
                    $('.box-pos').removeClass("bounceIn has-900 animated");
                }, 3000);
                $('.product-details-wrap').addClass("fadeOutRight animated");
                setTimeout(function() {
                    $('.product-details-wrap').removeClass("fadeOutRight animated");
                }, 1000);
                $('.section-footer .box-link').addClass('fadeInLeft animated');
                $('.section-footer .box-link').css('animation-delay', '1.3s'); // show revealer
                // show revealer

                TweenMax.to(this.DOM.reveal, .7, {
                    delay: 0.3,
                    ease: 'Power3.easeOut',
                    x: '0%',
                    onComplete: function onComplete() {
                        _this10.DOM.close.style.opacity = 0; // show scroll

                        document.body.classList.remove('preview-open'); // hide preview

                        _this10.contentItem.style.opacity = 0; // hide revealer

                        TweenMax.to(_this10.DOM.reveal, .7, {
                            delay: 0,
                            ease: 'Power3.easeOut',
                            x: '100%'
                        });
                    }
                });
                var itemElems = [];
                itemElems.push(this.contentItem.querySelector('.box-img'));
                itemElems.push(this.contentItem.querySelector('.overlay-content'));

                for (var _i2 = 0, _itemElems2 = itemElems; _i2 < _itemElems2.length; _i2++) {
                    var el = _itemElems2[_i2];
                    if (el == null) continue;
                    var bounds = el.getBoundingClientRect();
                    var win = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                    TweenMax.to(el, lineEq(2, 1.2, win.width, 0, Math.abs(bounds.left + bounds.width - win.width)), {
                        ease: 'Expo.easeOut',
                        delay: 0.2,
                        startAt: {
                            x: "".concat(lineEq(0, 0, win.width, 0, Math.abs(bounds.left + bounds.width - win.width))),
                            y: "".concat(lineEq(-100, 100, win.height, 0, Math.abs(bounds.top + bounds.height - win.height))),
                            rotationZ: "".concat(lineEq(5, 30, 0, win.width, Math.abs(bounds.left + bounds.width - win.width)))
                        },
                        x: '1200',
                        y: 0,
                        rotationZ: 0
                    });
                }
            }
        }]);

        return Overlay;
    }();

    var Grid = /*#__PURE__*/ function() {
        "use strict";

        function Grid(el) {
            var _this11 = this;

            _classCallCheck(this, Grid);

            this.DOM = {
                el: el
            };
            this.items = [];
            Array.from(this.DOM.el.querySelectorAll('a.grid-item')).forEach(function(item) {
                var itemObj = new Item(item);

                _this11.items.push(itemObj);

                if (!item.classList.contains('grid-item-noclick')) {
                    itemObj.DOM.el.addEventListener('click', function(ev) {
                        ev.preventDefault();

                        _this11.openItem(document.querySelector(item.getAttribute('href')));
                    });
                }
            });
            this.overlay = new Overlay();
            this.overlay.DOM.close.addEventListener('click', function() {
                return _this11.closeItem();
            });
            this.overlay.DOM.close2.addEventListener('click', function() {
                return _this11.closeItem();
            });
        }

        _createClass(Grid, [{
            key: "openItem",
            value: function openItem(contentItem) {
                if (this.isPreviewOpen) return;
                this.isPreviewOpen = true;
                allowTilt = false;
                this.overlay.show(contentItem); // "explode" grid..

                var _iterator = _createForOfIteratorHelper(this.items),
                    _step;

                try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var item = _step.value;

                        for (var key in item.DOM.animatable) {
                            var el = item.DOM.animatable[key];

                            if (el) {
                                var bounds = el.getBoundingClientRect();
                                var x = void 0;
                                var y = void 0;
                                var win = {
                                    width: window.innerWidth,
                                    height: window.innerHeight
                                };

                                if (bounds.top + bounds.height / 2 < win.height / 2 - win.height * .1) {
                                    //x = getRandomInt(-250,-50);
                                    //y = getRandomInt(20,100)*-1;
                                    x = -1 * lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                                    y = -1 * lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                                } else if (bounds.top + bounds.height / 2 > win.height / 2 + win.height * .1) {
                                    //x = getRandomInt(-250,-50);
                                    //y = getRandomInt(20,100);
                                    x = -1 * lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                                    y = lineEq(20, 600, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                                } else {
                                    //x = getRandomInt(300,700)*-1;
                                    x = -1 * lineEq(10, 700, 0, win.width, Math.abs(bounds.left + bounds.width - win.width));
                                    y = getRandomInt(-25, 25);
                                }

                                TweenMax.to(el, 0.4, {
                                    ease: 'Power3.easeOut',
                                    delay: lineEq(0, 0.3, 0, win.width, Math.abs(bounds.left + bounds.width - win.width)),
                                    x: x,
                                    y: y,
                                    rotationZ: getRandomInt(-10, 10),
                                    opacity: 0
                                });
                            }
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally {
                    _iterator.f();
                }
            }
        }, {
            key: "closeItem",
            value: function closeItem() {
                if (!this.isPreviewOpen) return;
                this.isPreviewOpen = false;
                this.overlay.hide();

                var _iterator2 = _createForOfIteratorHelper(this.items),
                    _step2;

                try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                        var item = _step2.value;

                        for (var key in item.DOM.animatable) {
                            var el = item.DOM.animatable[key];

                            if (el) {
                                var bounds = el.getBoundingClientRect();
                                var win = {
                                    width: window.innerWidth
                                };
                                TweenMax.to(el, 0.9, {
                                    ease: 'Expo.easeOut',
                                    delay: .55 + lineEq(0, 0.9, 0, win.width, Math.abs(bounds.left + bounds.width - win.width)),
                                    x: 0,
                                    y: 0,
                                    rotationZ: 0,
                                    opacity: 1
                                });
                            }
                        }
                    }
                } catch (err) {
                    _iterator2.e(err);
                } finally {
                    _iterator2.f();
                }

                allowTilt = true;
            }
        }]);

        return Grid;
    }();

    var allowTilt = true;
    new Grid(document.querySelector('.grid'));
}
var totalElements = 0;
var elementAnimationDelay = 0;
var elementCountUp = 0;

function elementFloat(elementItem) {
    TweenMax.to(elementItem, 8, {
        delay: elementAnimationDelay,
        y: "-=20px",
        yoyo: true,
        repeat: -1,
        ease: Power2.easeInOut
    });
}

function initPhoneHovering() {
    $(".box div[id]").each(function() {
        totalElements++;
        elementAnimationDelay += 0.9;
        var targetElement = $("#float-" + totalElements); //init animation

        elementFloat(targetElement);
    });
}

initPhoneHovering(); // $('.accordion').click(function() {
//     if ($('.box').hasClass('align-items-center')) {
//         $('.box').removeClass('align-items-center');
//         $('.box').addClass('align-items-top');
//     } else {
//         $('.box').addClass('align-items-center');
//         $('.box').removeClass('align-items-top');
//     }
// });

jQuery(document).ready(function() {
    $('.menu-item').addClass('menu-trigger');
    $('.block__link').click(function() {
        $('.main').toggleClass('push');
    });
    $('.collapse').on('shown.bs.collapse', function(e) {
        var $card = $(this).closest('.card');
        $('.overlay').animate({
            scrollTop: $card.offset().top + 20
        }, 20);
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
    $('.accordion').click(function() {
        // $target = $('.extra');
        // $('.nutrition-table').animate({
        //     scrollTop: $target.offset().top
        // }, 'slow');;
        if ($('.overlay-item').hasClass('table-open')) {
            // $('.overlay-container').removeClass('h-100');
            $('.overlay-item').removeClass('table-open');
        } else {
            // $('.overlay-container').addClass('h-100');
            $('.overlay-item').addClass('table-open');
        }
    });
    $('.overlay').scroll(function() {
        if ($('.overlay').scrollTop() >= 40) {
            $('.overlay .header').addClass('header-mini');
        } else {
            $('.overlay .header').removeClass('header-mini');
        }
    });
    var hash = window.location.hash;

    if (hash) {
        hash = hash.replace("#", "");
        setTimeout(function() {
            $("#" + hash + "-id")[0].click();
        }, 500);
    }
});
$('.global-menu-item').click(function() {
    $('.menu-type').toggleClass('open');
    $('body').toggleClass('menuOverlay');
    $('#menu-trigger').toggleClass('clicked');
    $.fn.fullpage.setMouseWheelScrolling(true);
}); // function PushRefTohistory() {
//     var baseUrl = window.location.pathname;
//     var href = document.referrer;
//     if (href) {
//         window.history.pushState({ href: href }, '', href);
//     } else if (baseUrl) {
//         href = baseUrl;
//         window.history.pushState({ href: href }, '', href);
//     }
// }

window.onhashchange = function() {
    var DetailOpend = localStorage.getItem("isDetailOpend");

    if (DetailOpend == "Yes") {
        $(".overlay-close2")[0].click();
        localStorage.setItem("isDetailOpend", '');
    }
};

function PushRefTohistory(call) {
    if (!call) {
        return false;
    }

    var DetailOpend = localStorage.getItem("isDetailOpend");

    if (DetailOpend == "Yes") {
        localStorage.setItem("isDetailOpend", '');
    } //history.back();


    var baseUrl = window.location.pathname;
    var href = document.referrer;
    var LastUrl = localStorage.getItem("lastUrl");

    if (typeof LastUrl !== 'undefined') {
        href = LastUrl;
        window.history.pushState({
            href: href
        }, '', href); //localStorage.setItem("lastUrl",'');

        return false;
    }

    if (href) {
        window.history.pushState({
            href: href
        }, '', href);
    } else if (baseUrl) {
        href = baseUrl;
        window.history.pushState({
            href: href
        }, '', href);
    }
}

jQuery(window).bind('orientationchange', function(e) {
    switch (window.orientation) {
        case 0:
            $('.turnDeviceNotification').css('display', 'none'); // The device is in portrait mode now

            break;

        case 180:
            $('.turnDeviceNotification').css('display', 'none'); // The device is in portrait mode now

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
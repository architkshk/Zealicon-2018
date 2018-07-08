var Page1 = (function () {

    var $container = $('#container'),
        $bookBlock = $('#bb-bookblock-1'),
        $items = $bookBlock.children(),
        itemsCount = $items.length,
        current = 0,
        bb = $('#bb-bookblock-1').bookblock({
            speed: 800,
            perspective: 2000,
            shadowSides: 0.8,
            shadowFlip: 0.4,
            onEndFlip: function (old, page, isLimit) {

                current = page;
                // update TOC current
                updateTOC();
                // updateNavigation
                updateNavigation(isLimit);
                // initialize jScrollPane on the content div for the new item
                setJSP('init');
                // destroy jScrollPane on the content div for the old item
                setJSP('destroy', old);

            }
        }),
        $navNext = $('#bb-nav-next-1'),
        $navPrev = $('#bb-nav-prev-1').hide(),
        $menuItems = $container.find('ul.menu-toc > li'),
        $tblcontents = $('#tblcontents'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        supportTransitions = Modernizr.csstransitions;

    function init() {

        // initialize jScrollPane on the content div of the first item
        setJSP('init');
        initEvents();

    }

    function initEvents() {

        // add navigation events
        $navNext.on('click', function () {
            bb.next();
            return false;
        });

        $navPrev.on('click', function () {
            bb.prev();
            return false;
        });

        // add swipe events
        $items.on({
            'swipeleft': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.next();
                return false;
            },
            'swiperight': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.prev();
                return false;
            }
        });

        // show table of contents
        $tblcontents.on('click', toggleTOC);

        // click a menu item
        $menuItems.on('click', function () {

            var $el = $(this),
                idx = $el.index(),
                jump = function () {
                    bb.jump(idx + 1);
                };

            current !== idx ? closeTOC(jump) : closeTOC();

            return false;

        });

        // reinit jScrollPane on window resize
        $(window).on('debouncedresize', function () {
            // reinitialise jScrollPane on the content div
            setJSP('reinit');
        });

    }

    function setJSP(action, idx) {

        var idx = idx === undefined ? current : idx,
            $content = $items.eq(idx).children('div.content'),
            apiJSP = $content.data('jsp');

        if (action === 'init' && apiJSP === undefined) {
            $content.jScrollPane({
                verticalGutter: 0,
                hideFocus: true
            });
        } else if (action === 'reinit' && apiJSP !== undefined) {
            apiJSP.reinitialise();
        } else if (action === 'destroy' && apiJSP !== undefined) {
            apiJSP.destroy();
        }

    }

    function updateTOC() {
        $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
    }

    function updateNavigation(isLastPage) {

        if (current === 0) {
            $navNext.show();
            $navPrev.hide();
        } else if (isLastPage) {
            $navNext.hide();
            $navPrev.show();
        } else {
            $navNext.show();
            $navPrev.show();
        }

    }

    // function toggleTOC() {
    // 	var opened = $container.data( 'opened' );
    // 	opened ? closeTOC() : openTOC();
    // }

    function openTOC() {
        $navNext.hide();
        $navPrev.hide();
        $container.addClass('slideRight').data('opened', true);
    }

    function closeTOC(callback) {

        updateNavigation(current === itemsCount - 1);
        $container.removeClass('slideRight').data('opened', false);
        if (callback) {
            if (supportTransitions) {
                $container.on(transEndEventName, function () {
                    $(this).off(transEndEventName);
                    callback.call();
                });
            } else {
                callback.call();
            }
        }

    }

    return {
        init: init
    };

})();
var Page2 = (function () {

    var $container = $('#container'),
        $bookBlock = $('#bb-bookblock-2'),
        $items = $bookBlock.children(),
        itemsCount = $items.length,
        current = 0,
        bb = $('#bb-bookblock-2').bookblock({
            speed: 800,
            perspective: 2000,
            shadowSides: 0.8,
            shadowFlip: 0.4,
            onEndFlip: function (old, page, isLimit) {

                current = page;
                // update TOC current
                updateTOC();
                // updateNavigation
                updateNavigation(isLimit);
                // initialize jScrollPane on the content div for the new item
                setJSP('init');
                // destroy jScrollPane on the content div for the old item
                setJSP('destroy', old);

            }
        }),
        $navNext = $('#bb-nav-next-2'),
        $navPrev = $('#bb-nav-prev-2').hide(),
        $menuItems = $container.find('ul.menu-toc > li'),
        $tblcontents = $('#tblcontents'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        supportTransitions = Modernizr.csstransitions;

    function init() {

        // initialize jScrollPane on the content div of the first item
        setJSP('init');
        initEvents();

    }

    function initEvents() {

        // add navigation events
        $navNext.on('click', function () {
            bb.next();
            return false;
        });

        $navPrev.on('click', function () {
            bb.prev();
            return false;
        });

        // add swipe events
        $items.on({
            'swipeleft': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.next();
                return false;
            },
            'swiperight': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.prev();
                return false;
            }
        });

        // show table of contents
        $tblcontents.on('click', toggleTOC);

        // click a menu item
        $menuItems.on('click', function () {

            var $el = $(this),
                idx = $el.index(),
                jump = function () {
                    bb.jump(idx + 1);
                };

            current !== idx ? closeTOC(jump) : closeTOC();

            return false;

        });

        // reinit jScrollPane on window resize
        $(window).on('debouncedresize', function () {
            // reinitialise jScrollPane on the content div
            setJSP('reinit');
        });

    }

    function setJSP(action, idx) {

        var idx = idx === undefined ? current : idx,
            $content = $items.eq(idx).children('div.content'),
            apiJSP = $content.data('jsp');

        if (action === 'init' && apiJSP === undefined) {
            $content.jScrollPane({
                verticalGutter: 0,
                hideFocus: true
            });
        } else if (action === 'reinit' && apiJSP !== undefined) {
            apiJSP.reinitialise();
        } else if (action === 'destroy' && apiJSP !== undefined) {
            apiJSP.destroy();
        }

    }

    function updateTOC() {
        $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
    }

    function updateNavigation(isLastPage) {

        if (current === 0) {
            $navNext.show();
            $navPrev.hide();
        } else if (isLastPage) {
            $navNext.hide();
            $navPrev.show();
        } else {
            $navNext.show();
            $navPrev.show();
        }

    }

    // function toggleTOC() {
    // 	var opened = $container.data( 'opened' );
    // 	opened ? closeTOC() : openTOC();
    // }

    function openTOC() {
        $navNext.hide();
        $navPrev.hide();
        $container.addClass('slideRight').data('opened', true);
    }

    function closeTOC(callback) {

        updateNavigation(current === itemsCount - 1);
        $container.removeClass('slideRight').data('opened', false);
        if (callback) {
            if (supportTransitions) {
                $container.on(transEndEventName, function () {
                    $(this).off(transEndEventName);
                    callback.call();
                });
            } else {
                callback.call();
            }
        }

    }

    return {
        init: init
    };

})();
var Page3 = (function () {

    var $container = $('#container'),
        $bookBlock = $('#bb-bookblock-3'),
        $items = $bookBlock.children(),
        itemsCount = $items.length,
        current = 0,
        bb = $('#bb-bookblock-3').bookblock({
            speed: 800,
            perspective: 2000,
            shadowSides: 0.8,
            shadowFlip: 0.4,
            onEndFlip: function (old, page, isLimit) {

                current = page;
                // update TOC current
                updateTOC();
                // updateNavigation
                updateNavigation(isLimit);
                // initialize jScrollPane on the content div for the new item
                setJSP('init');
                // destroy jScrollPane on the content div for the old item
                setJSP('destroy', old);

            }
        }),
        $navNext = $('#bb-nav-next-3'),
        $navPrev = $('#bb-nav-prev-3').hide(),
        $menuItems = $container.find('ul.menu-toc > li'),
        $tblcontents = $('#tblcontents'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        supportTransitions = Modernizr.csstransitions;

    function init() {

        // initialize jScrollPane on the content div of the first item
        setJSP('init');
        initEvents();

    }

    function initEvents() {

        // add navigation events
        $navNext.on('click', function () {
            bb.next();
            return false;
        });

        $navPrev.on('click', function () {
            bb.prev();
            return false;
        });

        // add swipe events
        $items.on({
            'swipeleft': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.next();
                return false;
            },
            'swiperight': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.prev();
                return false;
            }
        });

        // show table of contents
        $tblcontents.on('click', toggleTOC);

        // click a menu item
        $menuItems.on('click', function () {

            var $el = $(this),
                idx = $el.index(),
                jump = function () {
                    bb.jump(idx + 1);
                };

            current !== idx ? closeTOC(jump) : closeTOC();

            return false;

        });

        // reinit jScrollPane on window resize
        $(window).on('debouncedresize', function () {
            // reinitialise jScrollPane on the content div
            setJSP('reinit');
        });

    }

    function setJSP(action, idx) {

        var idx = idx === undefined ? current : idx,
            $content = $items.eq(idx).children('div.content'),
            apiJSP = $content.data('jsp');

        if (action === 'init' && apiJSP === undefined) {
            $content.jScrollPane({
                verticalGutter: 0,
                hideFocus: true
            });
        } else if (action === 'reinit' && apiJSP !== undefined) {
            apiJSP.reinitialise();
        } else if (action === 'destroy' && apiJSP !== undefined) {
            apiJSP.destroy();
        }

    }

    function updateTOC() {
        $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
    }

    function updateNavigation(isLastPage) {

        if (current === 0) {
            $navNext.show();
            $navPrev.hide();
        } else if (isLastPage) {
            $navNext.hide();
            $navPrev.show();
        } else {
            $navNext.show();
            $navPrev.show();
        }

    }

    // function toggleTOC() {
    // 	var opened = $container.data( 'opened' );
    // 	opened ? closeTOC() : openTOC();
    // }

    function openTOC() {
        $navNext.hide();
        $navPrev.hide();
        $container.addClass('slideRight').data('opened', true);
    }

    function closeTOC(callback) {

        updateNavigation(current === itemsCount - 1);
        $container.removeClass('slideRight').data('opened', false);
        if (callback) {
            if (supportTransitions) {
                $container.on(transEndEventName, function () {
                    $(this).off(transEndEventName);
                    callback.call();
                });
            } else {
                callback.call();
            }
        }

    }

    return {
        init: init
    };

})();
var Page4 = (function () {

    var $container = $('#container'),
        $bookBlock = $('#bb-bookblock-4'),
        $items = $bookBlock.children(),
        itemsCount = $items.length,
        current = 0,
        bb = $('#bb-bookblock-4').bookblock({
            speed: 800,
            perspective: 2000,
            shadowSides: 0.8,
            shadowFlip: 0.4,
            onEndFlip: function (old, page, isLimit) {

                current = page;
                // update TOC current
                updateTOC();
                // updateNavigation
                updateNavigation(isLimit);
                // initialize jScrollPane on the content div for the new item
                setJSP('init');
                // destroy jScrollPane on the content div for the old item
                setJSP('destroy', old);

            }
        }),
        $navNext = $('#bb-nav-next-4'),
        $navPrev = $('#bb-nav-prev-4').hide(),
        $menuItems = $container.find('ul.menu-toc > li'),
        $tblcontents = $('#tblcontents'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        supportTransitions = Modernizr.csstransitions;

    function init() {

        // initialize jScrollPane on the content div of the first item
        setJSP('init');
        initEvents();

    }

    function initEvents() {

        // add navigation events
        $navNext.on('click', function () {
            bb.next();
            return false;
        });

        $navPrev.on('click', function () {
            bb.prev();
            return false;
        });

        // add swipe events
        $items.on({
            'swipeleft': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.next();
                return false;
            },
            'swiperight': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.prev();
                return false;
            }
        });

        // show table of contents
        $tblcontents.on('click', toggleTOC);

        // click a menu item
        $menuItems.on('click', function () {

            var $el = $(this),
                idx = $el.index(),
                jump = function () {
                    bb.jump(idx + 1);
                };

            current !== idx ? closeTOC(jump) : closeTOC();

            return false;

        });

        // reinit jScrollPane on window resize
        $(window).on('debouncedresize', function () {
            // reinitialise jScrollPane on the content div
            setJSP('reinit');
        });

    }

    function setJSP(action, idx) {

        var idx = idx === undefined ? current : idx,
            $content = $items.eq(idx).children('div.content'),
            apiJSP = $content.data('jsp');

        if (action === 'init' && apiJSP === undefined) {
            $content.jScrollPane({
                verticalGutter: 0,
                hideFocus: true
            });
        } else if (action === 'reinit' && apiJSP !== undefined) {
            apiJSP.reinitialise();
        } else if (action === 'destroy' && apiJSP !== undefined) {
            apiJSP.destroy();
        }

    }

    function updateTOC() {
        $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
    }

    function updateNavigation(isLastPage) {

        if (current === 0) {
            $navNext.show();
            $navPrev.hide();
        } else if (isLastPage) {
            $navNext.hide();
            $navPrev.show();
        } else {
            $navNext.show();
            $navPrev.show();
        }

    }

    // function toggleTOC() {
    // 	var opened = $container.data( 'opened' );
    // 	opened ? closeTOC() : openTOC();
    // }

    function openTOC() {
        $navNext.hide();
        $navPrev.hide();
        $container.addClass('slideRight').data('opened', true);
    }

    function closeTOC(callback) {

        updateNavigation(current === itemsCount - 1);
        $container.removeClass('slideRight').data('opened', false);
        if (callback) {
            if (supportTransitions) {
                $container.on(transEndEventName, function () {
                    $(this).off(transEndEventName);
                    callback.call();
                });
            } else {
                callback.call();
            }
        }

    }

    return {
        init: init
    };

})();
var Page5 = (function () {

    var $container = $('#container'),
        $bookBlock = $('#bb-bookblock-5'),
        $items = $bookBlock.children(),
        itemsCount = $items.length,
        current = 0,
        bb = $('#bb-bookblock-5').bookblock({
            speed: 800,
            perspective: 2000,
            shadowSides: 0.8,
            shadowFlip: 0.4,
            onEndFlip: function (old, page, isLimit) {

                current = page;
                // update TOC current
                updateTOC();
                // updateNavigation
                updateNavigation(isLimit);
                // initialize jScrollPane on the content div for the new item
                setJSP('init');
                // destroy jScrollPane on the content div for the old item
                setJSP('destroy', old);

            }
        }),
        $navNext = $('#bb-nav-next-5'),
        $navPrev = $('#bb-nav-prev-5').hide(),
        $menuItems = $container.find('ul.menu-toc > li'),
        $tblcontents = $('#tblcontents'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        supportTransitions = Modernizr.csstransitions;

    function init() {

        // initialize jScrollPane on the content div of the first item
        setJSP('init');
        initEvents();

    }

    function initEvents() {

        // add navigation events
        $navNext.on('click', function () {
            bb.next();
            return false;
        });

        $navPrev.on('click', function () {
            bb.prev();
            return false;
        });

        // add swipe events
        $items.on({
            'swipeleft': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.next();
                return false;
            },
            'swiperight': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.prev();
                return false;
            }
        });

        // show table of contents
        $tblcontents.on('click', toggleTOC);

        // click a menu item
        $menuItems.on('click', function () {

            var $el = $(this),
                idx = $el.index(),
                jump = function () {
                    bb.jump(idx + 1);
                };

            current !== idx ? closeTOC(jump) : closeTOC();

            return false;

        });

        // reinit jScrollPane on window resize
        $(window).on('debouncedresize', function () {
            // reinitialise jScrollPane on the content div
            setJSP('reinit');
        });

    }

    function setJSP(action, idx) {

        var idx = idx === undefined ? current : idx,
            $content = $items.eq(idx).children('div.content'),
            apiJSP = $content.data('jsp');

        if (action === 'init' && apiJSP === undefined) {
            $content.jScrollPane({
                verticalGutter: 0,
                hideFocus: true
            });
        } else if (action === 'reinit' && apiJSP !== undefined) {
            apiJSP.reinitialise();
        } else if (action === 'destroy' && apiJSP !== undefined) {
            apiJSP.destroy();
        }

    }

    function updateTOC() {
        $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
    }

    function updateNavigation(isLastPage) {

        if (current === 0) {
            $navNext.show();
            $navPrev.hide();
        } else if (isLastPage) {
            $navNext.hide();
            $navPrev.show();
        } else {
            $navNext.show();
            $navPrev.show();
        }

    }

    // function toggleTOC() {
    // 	var opened = $container.data( 'opened' );
    // 	opened ? closeTOC() : openTOC();
    // }

    function openTOC() {
        $navNext.hide();
        $navPrev.hide();
        $container.addClass('slideRight').data('opened', true);
    }

    function closeTOC(callback) {

        updateNavigation(current === itemsCount - 1);
        $container.removeClass('slideRight').data('opened', false);
        if (callback) {
            if (supportTransitions) {
                $container.on(transEndEventName, function () {
                    $(this).off(transEndEventName);
                    callback.call();
                });
            } else {
                callback.call();
            }
        }

    }

    return {
        init: init
    };

})();
var Page6 = (function () {

    var $container = $('#container'),
        $bookBlock = $('#bb-bookblock-6'),
        $items = $bookBlock.children(),
        itemsCount = $items.length,
        current = 0,
        bb = $('#bb-bookblock-6').bookblock({
            speed: 800,
            perspective: 2000,
            shadowSides: 0.8,
            shadowFlip: 0.4,
            onEndFlip: function (old, page, isLimit) {

                current = page;
                // update TOC current
                updateTOC();
                // updateNavigation
                updateNavigation(isLimit);
                // initialize jScrollPane on the content div for the new item
                setJSP('init');
                // destroy jScrollPane on the content div for the old item
                setJSP('destroy', old);

            }
        }),
        $navNext = $('#bb-nav-next-6'),
        $navPrev = $('#bb-nav-prev-6').hide(),
        $menuItems = $container.find('ul.menu-toc > li'),
        $tblcontents = $('#tblcontents'),
        transEndEventNames = {
            'WebkitTransition': 'webkitTransitionEnd',
            'MozTransition': 'transitionend',
            'OTransition': 'oTransitionEnd',
            'msTransition': 'MSTransitionEnd',
            'transition': 'transitionend'
        },
        transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
        supportTransitions = Modernizr.csstransitions;

    function init() {

        // initialize jScrollPane on the content div of the first item
        setJSP('init');
        initEvents();

    }

    function initEvents() {

        // add navigation events
        $navNext.on('click', function () {
            bb.next();
            return false;
        });

        $navPrev.on('click', function () {
            bb.prev();
            return false;
        });

        // add swipe events
        $items.on({
            'swipeleft': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.next();
                return false;
            },
            'swiperight': function (event) {
                if ($container.data('opened')) {
                    return false;
                }
                bb.prev();
                return false;
            }
        });

        // show table of contents
        $tblcontents.on('click', toggleTOC);

        // click a menu item
        $menuItems.on('click', function () {

            var $el = $(this),
                idx = $el.index(),
                jump = function () {
                    bb.jump(idx + 1);
                };

            current !== idx ? closeTOC(jump) : closeTOC();

            return false;

        });

        // reinit jScrollPane on window resize
        $(window).on('debouncedresize', function () {
            // reinitialise jScrollPane on the content div
            setJSP('reinit');
        });

    }

    function setJSP(action, idx) {

        var idx = idx === undefined ? current : idx,
            $content = $items.eq(idx).children('div.content'),
            apiJSP = $content.data('jsp');

        if (action === 'init' && apiJSP === undefined) {
            $content.jScrollPane({
                verticalGutter: 0,
                hideFocus: true
            });
        } else if (action === 'reinit' && apiJSP !== undefined) {
            apiJSP.reinitialise();
        } else if (action === 'destroy' && apiJSP !== undefined) {
            apiJSP.destroy();
        }

    }

    function updateTOC() {
        $menuItems.removeClass('menu-toc-current').eq(current).addClass('menu-toc-current');
    }

    function updateNavigation(isLastPage) {

        if (current === 0) {
            $navNext.show();
            $navPrev.hide();
        } else if (isLastPage) {
            $navNext.hide();
            $navPrev.show();
        } else {
            $navNext.show();
            $navPrev.show();
        }

    }

    // function toggleTOC() {
    // 	var opened = $container.data( 'opened' );
    // 	opened ? closeTOC() : openTOC();
    // }

    function openTOC() {
        $navNext.hide();
        $navPrev.hide();
        $container.addClass('slideRight').data('opened', true);
    }

    function closeTOC(callback) {

        updateNavigation(current === itemsCount - 1);
        $container.removeClass('slideRight').data('opened', false);
        if (callback) {
            if (supportTransitions) {
                $container.on(transEndEventName, function () {
                    $(this).off(transEndEventName);
                    callback.call();
                });
            } else {
                callback.call();
            }
        }

    }

    return {
        init: init
    };

})();
(document).getElementById('bb-cat-next').addEventListener('click', function (e) {
    var count = $('#catCount').data('count');
    if(count > 6){
        $('#catCount').data('count', 0);
        count=0;
    }
    count += 1;
    $('#catCount').data('count', count);
    if (count == 1) {
        $('#ci-item-2').css('display', 'block');
        $('#ci-item-1').css('display', 'none');
        $('#book-2').css('display', 'block');
        $('#book-1').css('display', 'none');
        Page2.init();
    } else if (count == 2) {
        $('#ci-item-3').css('display', 'block');
        $('#ci-item-2').css('display', 'none');
        $('#book-3').css('display', 'block');
        $('#book-2').css('display', 'none');
        Page3.init();
    } else if (count == 3) {
        $('#ci-item-4').css('display', 'block');
        $('#ci-item-3').css('display', 'none');
        $('#book-4').css('display', 'block');
        $('#book-3').css('display', 'none');
        Page4.init();
    } else if (count == 4) {
        $('#ci-item-5').css('display', 'block');
        $('#ci-item-4').css('display', 'none');
        $('#book-5').css('display', 'block');
        $('#book-4').css('display', 'none');
        Page5.init();
    } else if (count == 5) {
        $('#ci-item-6').css('display', 'block');
        $('#ci-item-5').css('display', 'none');
        $('#book-6').css('display', 'block');
        $('#book-5').css('display', 'none');
        Page6.init();
    } else if (count == 6) {
        $('#ci-item-1').css('display', 'block');
        $('#ci-item-6').css('display', 'none');
        $('#book-1').css('display', 'block');
        $('#book-6').css('display', 'none');
        $('#catCount').data('count', 0);
        Page1.init();
    }
});
(document).getElementById('bb-cat-prev').addEventListener('click', function (e) {
    var count = $('#catCount').data('count');
    count -= 1;
    $('#catCount').data('count', count);
    if (count == 0 || count == -1) {
        $('#ci-item-1').css('display', 'block');
        $('#ci-item-2').css('display', 'none');
        $('#book-1').css('display', 'block');
        $('#book-2').css('display', 'none');
        $('#catCount').data('count', 6);
        Page1.init();
    } else if (count == 1) {
        $('#ci-item-2').css('display', 'block');
        $('#ci-item-3').css('display', 'none');
        $('#book-2').css('display', 'block');
        $('#book-3').css('display', 'none');
        Page2.init();
    } else if (count == 2) {
        $('#ci-item-3').css('display', 'block');
        $('#ci-item-4').css('display', 'none');
        $('#book-3').css('display', 'block');
        $('#book-4').css('display', 'none');
        Page3.init();
    } else if (count == 3) {
        $('#ci-item-4').css('display', 'block');
        $('#ci-item-5').css('display', 'none');
        $('#book-4').css('display', 'block');
        $('#book-5').css('display', 'none');
        Page4.init();
    } else if (count == 4) {
        $('#ci-item-5').css('display', 'block');
        $('#ci-item-6').css('display', 'none');
        $('#book-5').css('display', 'block');
        $('#book-6').css('display', 'none');
        Page5.init();
    } else if (count == 5) {
        $('#ci-item-6').css('display', 'block');
        $('#ci-item-1').css('display', 'none');
        $('#book-6').css('display', 'block');
        $('#book-1').css('display', 'none');
        Page6.init();
    }
});

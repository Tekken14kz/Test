
    $(document).ready(function() {
        $('ul.li a').each(function() {
            if (this.href == location.href) $(this).parent().addClass('active');
        });
        var bs = $('.backside');
        $('.backside input').focusin(function() {
            bs.removeClass('non-animated');
            $('.backside').addClass('animated');
        })
        $('.backside input').focusout(function() {
            bs.removeClass('animated');
            $('.backside').addClass('non-animated');
        })
        $('.cardnumb').groupinputs();
    });

    function validate(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /\d/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    function validatename(evt) {
        var theEvent = evt || window.event;
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
        var regex = /[A-Za-z ]/;
        if (!regex.test(key)) {
            theEvent.returnValue = false;
            if (theEvent.preventDefault) theEvent.preventDefault();
        }
    }

    (function($) {
        $(function() {
            $('.cardform').each(function() {
                var form = $(this),
                    btn = form.find('.submit');
                form.find('.n1, .n2, .n3, .n4, .cvv, .cardname').addClass('no_valid');
                function checkInput() {
                    form.find('.n1, .n2, .n3, .n4').each(function() {
                        if ($(this).val().length == 4) {
                            $(this).removeClass('no_valid');
                        } else {
                            $(this).addClass('no_valid');
                        }
                    });
                    form.find('.cvv').each(function() {
                        if ($(this).val().length == 3) {
                            $(this).removeClass('no_valid');
                        } else {
                            $(this).addClass('no_valid');
                        }
                    });
                    form.find('.cardname').each(function() {
                        if ($(this).val().length >= 4) {
                            $(this).removeClass('no_valid');
                        } else {
                            $(this).addClass('no_valid');
                        }
                    });
                }
                function lightEmpty() {
                    form.find('.no_valid').css({ 'border-color': '#ff005e' });
                    setTimeout(function() {
                        form.find('.no_valid').removeAttr('style');
                    }, 500);
                }
                setInterval(function() {
                    checkInput();
                    var sizeEmpty = form.find('.no_valid').size();
                    if (sizeEmpty > 0) {
                        if (btn.hasClass('disabled')) {
                            return false
                        } else {
                            btn.addClass('disabled')
                        }
                    } else {
                        btn.removeClass('disabled')
                    }
                }, 500);
                btn.click(function() {
                    if ($(this).hasClass('disabled')) {
                        lightEmpty();
                        return false
                    } else {
                        form.submit();
                    }
                });
            });
        });
    })(jQuery);

    $('.select').each(function() {
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 300;
        $this.hide();
        $this.wrap('<div class="select"></div>');
        $('<div>', {
            class: 'select__gap',
            text: '01'
        }).insertAfter($this);
        var selectGap = $this.next('.select__gap'),
            caret = selectGap.find('.caret');
        $('<ul>', {
            class: 'select__list'
        }).insertAfter(selectGap);
        var selectList = selectGap.next('.select__list');
        for (var i = 0; i < selectOptionLength; i++) {
            $('<li>', {
                    class: 'select__item',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        var selectItem = selectList.find('li');
        selectList.slideUp(0);
        selectGap.on('click', function() {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(dur);

                selectItem.on('click', function() {
                    var chooseItem = $(this).data('value');

                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());

                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });
            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });
    });

    $('.select1').each(function() {
        var $this = $(this),
            selectOption = $this.find('option'),
            selectOptionLength = selectOption.length,
            selectedOption = selectOption.filter(':selected'),
            dur = 300;
        $this.hide();
        $this.wrap('<div class="select1"></div>');
        $('<div>', {
            class: 'select__gap1',
            text: '2018'
        }).insertAfter($this);
        var selectGap = $this.next('.select__gap1'),
            caret = selectGap.find('.caret1');
        $('<ul>', {
            class: 'select__list1'
        }).insertAfter(selectGap);
        var selectList = selectGap.next('.select__list1');
        // Add li - option items
        for (var i = 0; i < selectOptionLength; i++) {
            $('<li>', {
                    class: 'select__item1',
                    html: $('<span>', {
                        text: selectOption.eq(i).text()
                    })
                })
                .attr('data-value', selectOption.eq(i).val())
                .appendTo(selectList);
        }
        var selectItem = selectList.find('li');
        selectList.slideUp(0);
        selectGap.on('click', function() {
            if (!$(this).hasClass('on')) {
                $(this).addClass('on');
                selectList.slideDown(dur);
                selectItem.on('click', function() {
                    var chooseItem = $(this).data('value');
                    $('select').val(chooseItem).attr('selected', 'selected');
                    selectGap.text($(this).find('span').text());
                    selectList.slideUp(dur);
                    selectGap.removeClass('on');
                });
            } else {
                $(this).removeClass('on');
                selectList.slideUp(dur);
            }
        });
    });

    (function($) {
        $(function() {
            $('.menu__icon').on('click', function() {
                $(this).closest('.menu')
                    .toggleClass('menu_state_open');
            });
            $('.menu__links-item').on('click', function() {
                $(this).closest('.menu')
                    .removeClass('menu_state_open');
            });
        });
    })(jQuery);
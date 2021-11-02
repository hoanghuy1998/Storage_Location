var scroll
var load = document.getElementById('load')
window.addEventListener('load', function() {
    scroll = window.pageYOffset
    load.style.display = 'none'

})

var content__center = document.querySelector('.content__center')
if (content__center) {
    window.addEventListener('load', function() {
        lefttoright1.style.animation = ' ease lefttocenter 1s forwards'
        righttoleft1.style.animation = ' ease righttocenter 1s forwards'
    })
    var lefttoright1 = content__center.querySelector('.lefttoright1')
    var righttoleft1 = content__center.querySelector('.righttoleft1')
    var lefttoright2 = content__center.querySelector('.lefttoright2')
    var righttoleft2 = content__center.querySelector('.righttoleft2')

    var isRezise
    isRezise = this.window.innerWidth
    window.addEventListener('resize', function() {
        isRezise = this.window.innerWidth
    })

    var home = document.querySelector('.home')
    if (home) {
        function screen() {
            this.window.addEventListener('scroll', function() {
                scroll = window.pageYOffset
                if (isRezise < 800) {
                    width_800(scroll)
                } else {
                    wdthbig800(scroll)
                }
            })

        }

        function width_800(x) {

            if (x > 1523) {
                lefttoright1.style.animation = ' ease lefttocenter 1s forwards'

            } else {
                lefttoright1.style.animation = ' ease centertoleft 1s forwards'

            }
            if (x > 2134) {
                righttoleft1.style.animation = ' ease righttocenter 1s forwards'
            } else {
                righttoleft1.style.animation = ' ease centertoright 1s forwards'
            }
            if (x > 2777) {
                lefttoright2.style.animation = ' ease lefttocenter 1s forwards'
            } else {
                lefttoright2.style.animation = ' ease centertoleft 1s forwards'
            }
            if (x > 3459) {
                righttoleft2.style.animation = ' ease righttocenter 1s forwards'
            } else {

                righttoleft2.style.animation = ' ease centertoright 1s forwards'
            }
        }

        function wdthbig800(x) {
            if (x > 800) {
                lefttoright1.style.animation = ' ease lefttocenter 1s forwards'
                righttoleft1.style.animation = ' ease righttocenter 1s forwards'
            } else {
                lefttoright1.style.animation = ' ease centertoleft 1s forwards'
                righttoleft1.style.animation = ' ease centertoright 1s forwards'
            }

            if (x > 1400) {
                lefttoright2.style.animation = ' ease lefttocenter 1s forwards'
                righttoleft2.style.animation = ' ease righttocenter 1s forwards'
            } else {
                lefttoright2.style.animation = ' ease centertoleft 1s forwards'
                righttoleft2.style.animation = ' ease centertoright 1s forwards'
            }
        }

        screen()
    }

}


var bakages = document.querySelector('.bakages')
if (bakages) {
    console.log(bakages)

    console.log(scroll)

    function screen2() {
        this.window.addEventListener('scroll', function() {
            scroll = window.pageYOffset
            console.log(scroll)
            if (isRezise < 800) {
                width_800_bakages(scroll)
            } else {
                widthbig_800(scroll)
            }
        })

    }
    screen2()



    function width_800_bakages(x) {

        if (x < 900) {
            lefttoright1.style.animation = ' ease lefttocenter 1s forwards'

        } else {
            lefttoright1.style.animation = ' ease centertoleft 1s forwards'

        }
        if (x > 600) {
            righttoleft1.style.animation = ' ease righttocenter 1s forwards'
        } else {
            righttoleft1.style.animation = ' ease centertoright 1s forwards'
        }
        if (x > 1400) {
            lefttoright2.style.animation = ' ease lefttocenter 1s forwards'
        } else {
            lefttoright2.style.animation = ' ease centertoleft 1s forwards'
        }
        if (x > 1900) {
            righttoleft2.style.animation = ' ease righttocenter 1s forwards'
        } else {

            righttoleft2.style.animation = ' ease centertoright 1s forwards'
        }
    }

    function widthbig_800(x) {
        if (x > 0 && x < 700) {
            lefttoright1.style.animation = ' ease lefttocenter 1s forwards'
            righttoleft1.style.animation = ' ease righttocenter 1s forwards'
        } else if (x > 800) {
            lefttoright1.style.animation = ' ease centertoleft 1s forwards'
            righttoleft1.style.animation = ' ease centertoright 1s forwards'
        }

        if (x > 300) {

            lefttoright2.style.animation = ' ease lefttocenter 1s forwards'
            righttoleft2.style.animation = ' ease righttocenter 1s forwards'
        } else {
            lefttoright2.style.animation = ' ease centertoleft 1s forwards'
            righttoleft2.style.animation = ' ease centertoright 1s forwards'
        }
    }

}

var nav_bar = document.querySelector('.nav-bar')
var cr = 2
var width_default = window.innerWidth
var width = window.innerWidth
console.log(width)
window.addEventListener('resize', function() {
    width = window.innerWidth
    if (width > 799) {
        nav_bar.parentElement.children[1].style.display = 'block'
        nav_bar.parentElement.children[1].style.animation = ' none'

    } else {
        nav_bar.parentElement.children[1].style.display = 'none'
        cr = 2
    }
})





nav_bar.children[2].addEventListener('click', function() {
    ++cr
    if (cr > 2) {
        cr = 1
    }
    switch (cr) {
        case 1:
            nav_bar.parentElement.children[1].style.display = 'block'
            nav_bar.parentElement.children[1].style.animation = ' ease righttocenter 1s  forwards'
            break;

        default:
            nav_bar.parentElement.children[1].style.display = 'none'
            nav_bar.parentElement.children[1].style.animation = ' ease centertoright 2s  forwards'
            break;
    }
})






var caret_down = document.querySelector('.fa-caret-down')
var sub_list = 2
if (caret_down) {
    caret_down.addEventListener('click', function() {
        ++sub_list
        if (sub_list > 2) {
            sub_list = 1
        }
        switch (sub_list) {
            case 1:
                caret_down.parentElement.children[3].style.animation = ' ease lefttocenter 0.5s  forwards'
                break;

            default:
                caret_down.parentElement.children[3].style.animation = ' ease centertoleft 0.5s  forwards'
                break;
        }

    })
}
var children_list = caret_down.parentElement.children[3].children

for (var i = 0; i < children_list.length; i++) {

    children_list[i].addEventListener('click', function(e) {
        caret_down.parentElement.children[0].src = e.target.parentElement.parentElement.parentElement.children[0].src

        caret_down.parentElement.children[1].innerText = e.target.innerText
        caret_down.parentElement.children[3].style.animation = ' ease centertoleft 0.5s  forwards'
        sub_list = 2
    })



}
var cr2 = 2
var caret_down2 = document.querySelector('.caret-down2')


if (caret_down2) {
    var list$ = caret_down2.parentElement.children[2].children
    caret_down2.addEventListener('click', function() {
        ++cr2
        if (cr2 > 2) {
            cr2 = 1
        }
        switch (cr2) {
            case 1:
                this.parentElement.children[2].classList.add('display_block')

                break;

            default:
                this.parentElement.children[2].classList.remove('display_block')

                break;
        }
        for (var i = 0; i < list$.length; i++) {
            list$[i].addEventListener('click', function() {

                this.parentElement.classList.remove('display_block');
                caret_down2.parentElement.children[0].innerText = this.innerText
                    // console.log(caret_down2.parentElement.children[2])
                    // if (caret_down2.parentElement.children[2].classList.contains('display_block')) {
                    //     console.log('dô')
                    //     caret_down2.parentElement.children[2].classList.remove('display_block')
                    // }

                cr2 = 2
            })
        }
    })
}
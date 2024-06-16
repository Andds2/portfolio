"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const menu = document.querySelectorAll('.nav-bar a');
    const divs = document.querySelectorAll('main > div');
    const root = document.documentElement;
    const bg_lm = '#e4e4e4';
    const fn_lm = '#242424';
    const bg_dm = '#242424';
    const fn_dm = '#e4e4e4';
    let isLMmode = true;
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
    function mode_func() {
        if (isLMmode) {
            root.style.setProperty('--bg', bg_dm);
            root.style.setProperty('--font1', fn_dm);
        }
        else {
            root.style.setProperty('--bg', bg_lm);
            root.style.setProperty('--font1', fn_lm);
        }
        isLMmode = !isLMmode;
    }
    const btn_mode = document.getElementById('btn_mode');
    btn_mode.addEventListener('click', mode_func);
    window.addEventListener('scroll', function () {
        let div_atual = '';
        divs.forEach(div => {
            const divTop = div.offsetTop;
            if (window.scrollY >= divTop - 50) {
                div_atual = div.getAttribute('id') || '';
            }
        });
        menu.forEach(link => {
            var _a;
            link.classList.remove('active');
            if (((_a = link.getAttribute('href')) === null || _a === void 0 ? void 0 : _a.substring(1)) === div_atual) {
                link.classList.add('active');
            }
        });
    });
});

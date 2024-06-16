document.addEventListener('DOMContentLoaded', function():void {
    const menu: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-bar a')
    const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('main > div') 

    const root: HTMLElement = document.documentElement
    const bg_lm: string = '#e4e4e4'
    const fn_lm: string = '#242424'
    const bg_dm: string = '#242424'
    const fn_dm: string = '#e4e4e4'

    let isLMmode: boolean = true

    window.scrollTo({
        top: 0,
        behavior: 'auto'
    })

    function mode_func():void {
        if(isLMmode){
            root.style.setProperty('--bg', bg_dm)
            root.style.setProperty('--font1', fn_dm)
        } else {
            root.style.setProperty('--bg', bg_lm)
            root.style.setProperty('--font1', fn_lm)
        }

        isLMmode = !isLMmode
    }

    const btn_mode = document.getElementById('btn_mode') as HTMLButtonElement
    btn_mode.addEventListener('click', mode_func)

    window.addEventListener('scroll', function() {
        let div_atual = ''

        divs.forEach(div => {
            const divTop = div.offsetTop
            if (window.scrollY >= divTop - 50) {
                div_atual = div.getAttribute('id') || ''
            }
        })

        menu.forEach(link => {
            link.classList.remove('active')
            if (link.getAttribute('href')?.substring(1) === div_atual) {
                link.classList.add('active')
            }
        })
    })
})






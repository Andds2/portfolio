let isDarkMode: boolean = false

const root: HTMLElement = document.documentElement

const btn_mode = document.getElementById('btn-mode') as HTMLButtonElement
const icon_btn_mode: HTMLSpanElement = document.getElementById('icon') as HTMLSpanElement

btn_mode.addEventListener('click', mode)

function mode(): void{
    if(isDarkMode){
        color_mode('#e4e4e4', '#d4d4d4', '#b4b4b4','#242424')
        icon_btn_mode.innerHTML = 'dark_mode'
    } else {
        color_mode('#242424', '#3d3d3d', '#2e2e2e', '#e4e4e4')
        icon_btn_mode.innerHTML = 'brightness_5'
    }

    isDarkMode = !isDarkMode
}

function color_mode(background: string, background_card: string, border_card: string, font: string): void{
    root.style.setProperty('--bg', background)
    root.style.setProperty('--font1', font)
    root.style.setProperty('--bg-card', background_card)
    root.style.setProperty('--border-card', border_card)
}

const btn_lang: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.langs-sep button')
const titulo_lang = document.getElementById('langs-title') as HTMLHeadingElement
const texto_lang = document.getElementById('langs-exp') as HTMLParagraphElement

btn_lang.forEach(button => {
    button.addEventListener('mouseover', textLangDescricao)
    button.addEventListener('mouseout', textLangClear)
    button.addEventListener('click', textLangDescricao)
})

function textLangDescricao(event: MouseEvent): void {
    const target = (event.target as HTMLElement).closest('button') as HTMLButtonElement
    console.log(target.id)
    if(target.id == 'btn-html') textoLang('HTML', 'Linguagem utilizada para a construção de paginas WEB.')
    if(target.id == 'btn-css') textoLang('CSS', 'Linguagem de estilização de paginas WEB, aplicada diretamente nas tags do HTML.')
    if(target.id == 'btn-js') textoLang('JavaScript', 'Linguagem de programação não tipada muito utilizada em paginas WEB, juntamente com o HTML e CSS. Adiciona interatividade e elementos dinâmicos para às páginas.')
    if(target.id == 'btn-ts') textoLang('TypeScript', 'Linguagem de programação baseada no JavaScript, porém adiciona tipagem de variaveis. Também se integra muito bem com o HTML e CSS e oferece as mesmas funções do JavaScript.')
    if(target.id == 'btn-react') textoLang('React', 'Framework front-end do JavaScript, permite a criação de interfaces componentizadas, mesclando JavaScript com HTML.')
    if(target.id == 'btn-node') textoLang('Node.JS', 'Permite que os desenvolvedores executem código JavaScript no lado do servidor.')
    if(target.id == 'btn-sql') textoLang('MySQL', 'Sistema de gerenciamento de banco de dados de alta confiabilidade e de facil uso.')
    if(target.id == 'btn-py') textoLang('Python', 'Linguagem de programação de alto nível e de propósito geral, se destaca por sua sintaxe simples e sua versatilidade.')
    if(target.id == 'btn-c') textoLang('C', 'Linguagem de programação de nivel intermediário, compilada e procedural, possui propósito geral.')
    if(target.id == 'btn-csharp') textoLang('C#', 'Linguagem de programação orientada a objetos, criada para ser simples, segura e adequada para amplas aplicações.')
}

function textLangClear(): void{
    textoLang('Linguagem', '~ descrição das linguagens ~')
}

function textoLang(titulo: string, texto: string): void{
    if(titulo_lang) titulo_lang.textContent = titulo
    else{
        alert('ERROR')
    }
    if(texto_lang) texto_lang.textContent = texto
    else{
        alert('ERROR')
    }
}

const btnMenu = document.getElementById('btn-menu') as HTMLButtonElement
const navBar = document.querySelector('.nav-bar') as HTMLDivElement

if (btnMenu && navBar) {
    btnMenu.addEventListener('click', () => {
        navBar.classList.toggle('responsive')
    })
}

document.addEventListener('DOMContentLoaded', function():void {
    const menu: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-bar a')
    const divs: NodeListOf<HTMLDivElement> = document.querySelectorAll('main > div') 

    window.scrollTo({
        top: 0,
        behavior: 'auto'
    })

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






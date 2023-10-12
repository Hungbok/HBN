window.addEventListener('load', function () {
    const lang = {
        en: {
            lang: "English",
            menu_home: "Home",
            menu_game: "Game",
            menu_anime: "Anime",
        },
        ja: {
            lang: "日本語",
            menu_home: "トップ",
            menu_game: "ゲーム",
            menu_anime: "アニメ",
        },
        ko: {
            lang: "한국어",
            menu_home: "메인",
            menu_game: "게임",
            menu_anime: "애니",
        },
    }
    
    function getLanguage() {
        return navigator.language || navigator.userLanguage;
    }
    
    function init(localeStr) {
        document.getElementById("locale").textContent = localeStr
    }
    
    const currentLang = getLanguage()
    init(currentLang)
    render(currentLang.substr(0, 2))
    
    function render(locale) {
        const $lang = document.querySelectorAll("[data-lang]")
        $lang.forEach(el => {
            const code = el.dataset.lang
            el.textContent = lang[locale][code]
        })
    }
    
    document.getElementById("btn-en").addEventListener("click", e => {
        render("en")
    })
    document.getElementById("btn-ko").addEventListener("click", e => {
        render("ko")
    })
    document.getElementById("btn-ja").addEventListener("click", e => {
        render("ja")
    })
    
    $(function(){
        let query = window.location.search;
        let param = new URLSearchParams(query);
        let id = param.get('l');
    
        if (id === "en") {
            render("en")
        }
        if (id === "ja") {
            render("ja")
        }
        if (id === "ko") {
            render("ko")
        }
        else {
            render("en")
        }
    })
})
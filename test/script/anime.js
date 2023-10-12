$(function(){
    let query = window.location.search;
    let param = new URLSearchParams(query);
    let id = param.get('q');

    // 2023
    if (id === "2023-4") {
        document.getElementById('query').classList.add('y2023-autumn');
        document.getElementById('query-section').classList.add('y2023-autumn');
    }
    else if (id === "2023-3") {
        document.getElementById('query').classList.add('y2023-summer');
        document.getElementById('query-section').classList.add('y2023-summer');
    }
    else if (id === "2023-2") {
        document.getElementById('query').classList.add('y2023-spring');
        document.getElementById('query-section').classList.add('y2023-spring');
    }
    else if (id === "2023-1") {
        document.getElementById('query').classList.add('y2023-winter');
        document.getElementById('query-section').classList.add('y2023-winter');
    }

    // 2022
    else if (id === "2022-4") {
        document.getElementById('query').classList.add('y2022-autumn');
        document.getElementById('query-section').classList.add('y2022-autumn');
    }
    else if (id === "2022-3") {
        document.getElementById('query').classList.add('y2022-summer');
        document.getElementById('query-section').classList.add('y2022-summer');
    }
    else if (id === "2022-2") {
        document.getElementById('query').classList.add('y2022-spring');
        document.getElementById('query-section').classList.add('y2022-spring');
    }
    else if (id === "2022-1") {
        document.getElementById('query').classList.add('y2022-winter');
        document.getElementById('query-section').classList.add('y2022-winter');
    }

    else {
        document.getElementById('query').classList.add('not-found');
        document.getElementById('query-section').classList.add('not-found');
    }
})
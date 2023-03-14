$(document).ready(function(){
    $("body").append('<footer>'+
                        '<div class="footer">'+
                            '<div class="copyright"></div>'+
                        '</div>'+
                    '</footer>');
    $("body").append('<style>'+
        '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap"); .footer { width: 100%; height: 250px; text-align: center; font-weight: bold; font-size: 16px; color: #cccccc; background-color: #000000; display: flex; align-content: center; justify-content: center; align-items: center; font-family: "Noto Sans", sans-serif; } .copyright { width: 80%; } .copyright::after { content: "Copyright 2021-2023. HungBok All Rights Reserved."; }');
        '</style>'}
);
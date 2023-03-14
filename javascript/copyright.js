$(document).ready(function(){
    $("body").append('<footer>'+
                        '<div class="footer">'+
                            '<div class="copyright"></div>'+
                        '</div>'+
                    '</footer>');
    $("body").append('<style>'+
        '.footer { width: 100%; height: 250px; text-align: center; font-weight: bold; color: #cccccc; background-color: #000000; display: flex; align-content: center; justify-content: center; align-items: center; } .copyright { width: 80%; } .copyright::after { content: "Copyright 2021-2023. HungBok All Rights Reserved."; }');
        '</style>'}
);
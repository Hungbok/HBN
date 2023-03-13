$(document).ready(function(){
    $("body").append('<footer>'+
                        '<div class="footer">'+
                            '<div class="copyright"></div>'+
                        '</div>'+
                    '</footer>');
    $("body").append('<style>'+
        '.footer { width: 100%; height: auto; padding-top: 100px; padding-bottom: 100px; text-align: center; font-weight: bold; color: #afafaf; background-color: #000000; /* border: 1px solid white; box-shadow: 0px 0px 5px black; -ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; -webkit-touch-callout: none; -webkit-user-drag: none; user-select: none; */ } .copyright { width: 80%; margin: auto; } .copyright::after { content: "Copyright 2021-2023. HungBok All Rights Reserved."; }');
        '</style>'}
);
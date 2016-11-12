

(function(){
    if(window.app === null || window.app === undefined){
        window.app = new app();
    }

    function app(){
        this.electron = require('electron');
        this.events = require('events');
        this.Name = 'ysubs';
        this.Description = 'a youtube subtitles concatenator';
    }
}())
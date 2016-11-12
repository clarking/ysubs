
(function(){
    if(window.app.ui === null || window.app.ui === undefined){
        window.app.ui = new uiManager();
    }

    function uiManager(){
        this.mainwin = window.app.electron.remote.getCurrentWindow();

    }

    uiManager.prototype.init = function(){
        document.getElementById('btn-close-window').addEventListener('click', function(e){
            window.app.ui.mainwin.close();
        });

        document.getElementById('btn-open-file').addEventListener('click', function(e){
             window.app.fileManager.open();            
        });

        document.getElementById('btn-save-file').addEventListener('click', function(e){
            debugger;
            let content = document.getElementById('txt-result').value;
             window.app.fileManager.save(content);            
        });
        // document.getElementById('btn-save-file').addEventLister('click', function(e){
            
        // });
        // document.getElementById('btn-close-file').addEventLister('click', function(e){
            
        // });                
    }
}())


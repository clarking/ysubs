(function(){
    if(window.app.fileManager === null || window.app.fileManager === undefined){
        window.app.fileManager = new fileManager();
    }

    function fileManager(){
        this.fs = require('fs');
        this.dialog = window.app.electron.remote.dialog;
        this.files = [];
    }

    fileManager.prototype.open = function(file){

        // this.dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
        this.dialog.showOpenDialog(function(filenames){
            if(filenames === undefined){
                alert('no file selected');
            }
            else{
                // for(let i=0; i < filenames.length; i++){
                //     this.read(fileNames[i]);
                // }
                debugger;
                let data = window.app.fileManager.read(filenames);

                document.getElementById('txt-result').innerText = window.app.xmlParser.parse(data);
               
            }
        })
    }

    fileManager.prototype.close = function(file){
        console.log(file);
    }

    fileManager.prototype.read = function(filepath){
        // if(this.getFile(filepath) == null){
        //     alert('File Already Open');
        // }
        return window.app.fileManager.fs.readFileSync(filepath[0], 'utf-8', function (err, data) {
            if(err){
                alert("An error ocurred reading the file :" + err.message);
                return;
            }

            return data;            
            // let filename = filepath.replace(/^.*[\\\/]/, '')
            // this.files.push({name: filename, data: data, location: filepath});
        });
    }

    fileManager.prototype.write = function(filepath, content){
        window.app.fileManager.fs.writeFile(filepath, content, function (err) {
            if(err){
                alert("An error ocurred creating the file "+ err.message)
            }
            alert("The file has been succesfully saved");
        });
    }

    fileManager.prototype.save = function(data){
        debugger;
        this.dialog.showSaveDialog(function (fileName) {
            if (fileName === undefined){
                    Alert("You didn't save the file");
                    return;
            }
            console.log(fileName);
            window.app.fileManager.write(fileName, data);
        }); 
    }

    fileManager.prototype.getFile = function(filename){
        if(filename===undefined){
            return null;
        }
        
        let file = null;

        for(let i=0; i < this.files.length; i++){
            if(file[i].name === filename){
                file = file[i];
            }
        }

        return file;
    }
}())
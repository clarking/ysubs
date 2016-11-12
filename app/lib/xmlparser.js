		(function(){
			if(window.app.xmlParser === null || window.app.xmlParser === undefined){
				window.app.xmlParser = new xmlParser();
			}

			function xmlParser(){
			}

			xmlParser.prototype.parse = function(xml){
                let result = '';
                    var lines = xml.split('\n');
                    for(var i = 0;i < lines.length;i++){
                        let res = lines[i].replace(/\<(.*?)\>/g,'').replace(/&#39;/g, "'").trim();
                        if(res != ''){
                            res += ' ';
                            result += res;
                        }
                    }
                return result;
            }
		}())



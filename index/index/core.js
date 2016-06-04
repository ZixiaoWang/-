        const ROW_NUM = 9;
        const TOTAL = 45;
        /**
         * Mobile Check
         */
        var mobilecheck = function() {
            var check = false;
            (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }
        
        /**
         * create Div
         * The function was used for creating divs in container, idealy it will be called once.
         * @params id for generated element's id
         * @return element d
         */
        var Div = function(id){
            let d = document.createElement('div');
            let bgcolor = 'white';
            d.className = 'brick';
            d.id = id;
            if(mobilecheck()==false){
                d.addEventListener('mousedown', function(){
                    d.style.transform = 'scale(0.8)';
                    if(d.style.backgroundColor != null) bgcolor = d.style.backgroundColor;
                    d.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                    $(d.getAttribute('id')).around().chainEffect('turndark');
                });
                d.addEventListener('mouseup', function(){
                    d.style.transform = null;
                    d.style.backgroundColor = bgcolor;
                });
                d.addEventListener('mouseover', function(){
                    d.style.transform = 'scale(0.85)';
                });
                d.addEventListener('mouseout', function(){
                    d.style.transform = 'scale(1)';
                });
            }else{
                d.addEventListener('touchstart', function(){
                    d.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                });
                d.addEventListener('touchend', function(){
                    d.style.backgroundColor = 'white';
                });
            }
            return d;
        }
        
        var container = document.getElementById('container');
        if(window.innerWidth / window.innerHeight > 1.8){
            container.style.transform = 'scale(' + (window.innerHeight / 778).toFixed(2) + ')';
        }else{
            container.style.transform = 'scale(' + (window.innerWidth / 1400).toFixed(2) + ')';
        }
        for(let i = 0; i < TOTAL; i++){
            container.appendChild(new Div(i+1));
        }
        
        /**
         * selector
         * The customized selector was built for select each squared block;
         * @param id
         */
        var $ = function(id, y){
            if(typeof id === 'object' && y == null){
                let i = parseInt(id.getAttribute('id'));
                return $(i);
            }
            if(y==null){
                if(id<1 || id>TOTAL) return null;
                var e = document.getElementById(id);
                var elem = id;
            }else if(typeof y === 'number'){
                var elem = (y - 1) * ROW_NUM + id;
                if(elem<1 || elem>TOTAL) return null;
                var e = document.getElementById(elem);
            }
            
            /**
             * Single element function 
             * @function up() returns the above block of selected block;
             * @function down() returns the under block of selected block;
             * @function left() returns the left block of selected block;
             * @function right() returns the left block of selected block;
             */
            e.up = function(){
                if (elem - ROW_NUM >= ROW_NUM)
                return $(elem - ROW_NUM);
                else return null;
            }
            e.down = function(){
                if (elem + ROW_NUM <= TOTAL)
                return $(elem + ROW_NUM);
                else return null;
            }
            e.left = function(){
                if (elem - 1 >= 0)
                return $(elem - 1);
                else return null;
            }
            e.right = function(){
                if (elem + 1 <= TOTAL)
                return $(elem + 1);
                else return null;
            }
            
            /**
             * Multiple elements return function
             * @function around returns an array contains at most 8 elements which around the selected block;
             * @leftAll returns an array which contains all the left blocks the same row as the selected block;
             * @rightAll returns an array which contains all the right blocks the same row as the selected block;
             * @
             */
            e.around = function(){
                let a = [];
                let d = [ROW_NUM+1, ROW_NUM, ROW_NUM-1, 1, -1, 1-ROW_NUM, -ROW_NUM, -ROW_NUM-1];
                if(elem % ROW_NUM == 1) d = [ROW_NUM, ROW_NUM-1, -1, -ROW_NUM, -ROW_NUM-1];
                if(elem % ROW_NUM == 0) d = [ROW_NUM+1, ROW_NUM, 1, 1-ROW_NUM, -ROW_NUM];
                for(let i = 0; i < d.length; i++){
                    if(elem - d[i] < 1 || elem - d[i] > TOTAL) continue;
                    a.push($(elem - d[i]));
                }
                a.chainEffect = function(_class, second){
                    for(let i = 0; i < a.length; i++){
                        setTimeout(function(){
                            a[i].addEffect(_class);
                        }, second*i);
                    }
                }
                return a;
            }
            e.leftAll = function(){
                let a = [];
                let e = Math.floor(elem / ROW_NUM) * ROW_NUM;
                for(let i = elem; i > e; i--){
                    a.push($(i));
                }
                a.chainEffect = function(_class, second){
                    for(let i = 0; i < a.length; i++){
                        setTimeout(function(){
                            a[i].addEffect(_class);
                        }, second*i);
                    }
                }
                return a;
            }
            e.rightAll = function(){
                let a = [];
                let e = Math.ceil(elem / ROW_NUM) * ROW_NUM;
                for(let i = elem+1; i <= e; i++){
                    a.push($(i));
                }
                a.chainEffect = function(_class, second){
                    for(let i = 0; i < a.length; i++){
                        setTimeout(function(){
                            a[i].addEffect(_class);
                        }, second*i);
                    }
                }
                return a;
            }
            e.aboveAll = function(){
                let a = [];
                let e = Math.floor(elem / ROW_NUM);
                for(let i = 1; i <= e; i++){
                    a.push($(elem - ROW_NUM * i));
                }
                a.chainEffect = function(_class, second){
                    for(let i = 0; i < a.length; i++){
                        setTimeout(function(){
                            a[i].addEffect(_class);
                        }, second*i);
                    }
                }
                return a;
            }
            e.belowAll = function(){
                let a = [];
                let e = 5 - Math.ceil(elem / ROW_NUM);
                for(let i = 1; i <= e; i++){
                    a.push($(elem + ROW_NUM * i));
                }
                a.chainEffect = function(_class, second){
                    for(let i = 0; i < a.length; i++){
                        setTimeout(function(){
                            a[i].addEffect(_class);
                        }, second*i);
                    }
                }
                return a;
            }
            e.thisRow = function(){
                let a = [];
                let s = (Math.ceil(elem / ROW_NUM) - 1) * ROW_NUM + 1;
                let e = Math.ceil(elem / ROW_NUM) * ROW_NUM;
                for(let i = s; i <= e; i ++){
                    a.push($(i));
                }
                a.chainEffect = function(_class, second){
                    for(let i = 0; i < a.length; i++){
                        setTimeout(function(){
                            a[i].addEffect(_class);
                        }, second*i);
                    }
                }
                return a;
            }
            e.thisColumn = function(){
                let a = [];
                let d = [0,1,2,3,4];
                let s = elem % ROW_NUM;
                for(let i = 0; i < d.length; i++){
                    a.push($(s + d[i] * ROW_NUM ));
                }
                a.chainEffect = function(_class, second){
                    for(let i = 0; i < a.length; i++){
                        setTimeout(function(){
                            a[i].addEffect(_class);
                        }, second*i);
                    }
                }
                return a;
            }
            
            /**
             * DOM function 
             * @addclass
             * @removeclass
             */
            e.on = function(event, fn){
                e.addEventListener(event, fn);
                return $(elem);
            }
            e.addclass = function(_class){
                e.classList.add(_class);
                return $(elem);
            }
            e.addEffect = function(_class){
                e.classList.add(_class);
                var _removeclass = function(){
                    e.classList.remove(_class);
                }
                e.addEventListener('animationend', _removeclass);
                e.addEventListener('webkitAnimationEnd', _removeclass);
                e.addEventListener('oanimationend', _removeclass);
                e.addEventListener('MSAnimationEnd', _removeclass);
                return $(elem);
            }
            
            /**
             * Core Functions 
             * The specific transforming control center, functions here can initial the animation of each block;
             */
            e.showImage = function(img, delay){
                if (Math.random() > 0.5) { var c = ['rotateX90', 'rotateX180']; }
                else { var c = ['rotateY90', 'rotateY180']; }
                setTimeout(function(){
                    e.classList.add(c[0]);
                    setTimeout(function(){
                        e.innerHTML = null;
                        e.style.backgroundImage = img;
                        e.classList.add(c[1]);
                        setTimeout(function(){
                            e.classList.remove(c[0]);
                            e.classList.remove(c[1]);
                        },500);
                    }, 100)
                }, delay);
                _blkArr.push($(elem));
                return $(elem);
            }
            e.showColor = function(_color, delay){
                if (Math.random() > 0.5) { var c = ['rotateX90', 'rotateX180']; }
                else { var c = ['rotateY90', 'rotateY180']; }
                setTimeout(function(){
                    e.classList.add(c[0]);
                    setTimeout(function(){
                        e.style.backgroundImage = null;
                        e.innerHTML = null;
                        e.style.backgroundColor = _color;
                        e.classList.add(c[1]);
                        setTimeout(function(){
                            e.classList.remove(c[0]);
                            e.classList.remove(c[1]);
                        },600);
                    }, 100)
                }, delay);
                _blkArr.push($(elem));
                return $(elem);
            }
            e.showText = function(text, position, delay, textColor, bgColor){
                if (Math.random() > 0.5) { var c = ['rotateX90', 'rotateX180']; }
                else { var c = ['rotateY90', 'rotateY180']; }
                setTimeout(function(){
                    e.classList.add(c[0]);
                    setTimeout(function(){
                        e.style.textAlign = position.textAlign;
                        e.style.lineHeight = position.lineHeight;
                        e.style.backgroundImage = null;
                        if(textColor) e.style.color = textColor;
                        else e.style.color = 'black';
                        if(bgColor) e.style.backgroundColor = bgColor;
                        // else e.style.backgroundColor = 'white';
                        e.innerHTML = null;
                        e.innerText = text;
                        e.classList.add(c[1]);
                        setTimeout(function(){
                            e.classList.remove(c[0]);
                            e.classList.remove(c[1]);
                        },500);
                    }, 100)
                }, delay);
                _blkArr.push($(elem));
                return $(elem);
            }
            e.show2LineText = function(text1, text2, position, delay, textColor, bgColor){
                if (Math.random() > 0.5) { var c = ['rotateX90', 'rotateX180']; }
                else { var c = ['rotateY90', 'rotateY180']; }
                setTimeout(function(){
                    e.classList.add(c[0]);
                    setTimeout(function(){
                        e.style.textAlign = position.textAlign;
                        e.style.lineHeight = '64px';
                        e.style.backgroundImage = null;
                        if(textColor) e.style.color = textColor;
                        else e.style.color = 'black';
                        if(bgColor) e.style.backgroundColor = bgColor;
                        else e.style.backgroundColor = 'white';
                        e.innerHTML = '<div style="text-align:' + position.t1 + ';">' + text1 + '</div><div style="text-align:' + position.t2 + '">' + text2 + '</div>';
                        e.classList.add(c[1]);
                        setTimeout(function(){
                            e.classList.remove(c[0]);
                            e.classList.remove(c[1]);
                        },500);
                    }, 100)
                }, delay);
                _blkArr.push($(elem));
                return $(elem);
            }
            e.showHTML = function(_html, delay){
                if (Math.random() > 0.5) { var c = ['rotateX90', 'rotateX180']; }
                else { var c = ['rotateY90', 'rotateY180']; }
                setTimeout(function(){
                    e.classList.add(c[0]);
                    setTimeout(function(){
                        e.style.backgroundImage = null;
                        e.style.color = 'black';
                        e.style.backgroundColor = 'white';
                        e.innerHTML = _html;
                        e.classList.add(c[1]);
                        setTimeout(function(){
                            e.classList.remove(c[0]);
                            e.classList.remove(c[1]);
                        },500);
                    }, 100)
                }, delay);
                _blkArr.push($(elem));
                return $(elem);
            }
            e.reset = function(){
                var _removeclass= function(){
                    e.className = 'brick';
                }
                e.classList.add('turnback');
                setTimeout(function(){
                    e.innerText = null;
                    e.innerHTML = null;
                    e.style = null;
                },100);
                e.addEventListener('animationend', _removeclass);
                e.addEventListener('webkitAnimationEnd', _removeclass);
                e.addEventListener('oanimationend', _removeclass);
                e.addEventListener('MSAnimationEnd', _removeclass);
            }
            
            
            /**
             * Final returns e
             */
            return e;
        }
        $.area = function(startX, startY, endX, endY){
            let a = [];
            if (startX > endX || startY > endY) return null;
            for (let j = 0; j <= (endY - startY); j++){
                for(let i = 0; i <= (endX - startX); i++){
                    a.push($(startX+i, startY+j));
                }
            }
            a.chainEffect = function(_class, second){
                for(let i = 0; i < a.length; i++){
                    setTimeout(function(){
                        a[i].addEffect(_class);
                    }, second*i);
                }
            }
            a.add = function(start, end){
                for(let n = start; n <= end; n++){
                    a.push($(n));
                }
                return a;
            }
            return a;
        }
        $.resetAll = function(callback){
            for(let elem of _blkArr){
                elem.reset();
            }
            _blkArr = [];
            if(callback != null){
                setTimeout(function(){
                    callback();
                }, 200);
            }
            return null;
        }
        
        
        const TOP_LEFT = {lineHeight:'64px', textAlign:'left'};
        const TOP_CENTER = {lineHeight:'64px', textAlign:'center'};
        const TOP_RIGHT = {lineHeight:'64px', textAlign:'right'};
        const MIDDLE_LEFT = {lineHeight:'133px', textAlign:'left'};
        const MIDDLE_CENTER = {lineHeight:'133px', textAlign:'center'};
        const MIDDLE_RIGHT = {lineHeight:'133px', textAlign:'right'};
        const BOTTOM_LEFT = {lineHeight:'197px', textAlign:'left'};
        const BOTTOM_CENTER = {lineHeight:'197px', textAlign:'center'};
        const BOTTOM_RIGHT = {lineHeight:'197px', textAlign:'right'};
        
        const LEFT_LEFT = {t1:'left', t2:'left'};
        const LEFT_MID = {t1:'left', t2:'center'};
        const LEFT_RIGHT = {t1:'left', t2:'right'};
        const MID_LEFT = {t1:'center', t2:'left'};
        const MID_MIDDLE = {t1:'center', t2:'center'};
        const MID_RIGHT = {t1:'center', t2:'right'};
        const RIGHT_LEFT = {t1:'right', t2:'left'};
        const RIGHT_MID = {t1:'right', t2:'center'};
        const RIGHT_RIGHT = {t1:'right', t2:'right'};
        
        var _blkArr = [];
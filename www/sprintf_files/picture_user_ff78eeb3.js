F.module("/static/common/ui/picture_user/picture_user.js",function(c,b){var d=c("/static/common/ui/jquery/jquery.js");var a=c("/static/common/ui/jquery_cookie/jquery_cookie.js");c("/static/common/ui/nslog/nslog.js");a(d);var e={};e.USER_TYPE={NORMAL:0,EXPERIMENT:1,REFERENCE:2};e.TEST_COOKIE="album_test_user";e.WHITE_LIST="2841CEC0AB740BB20946958F8BB91832E";e.REFER_LIST="2841CEC0AB740BB20946958F8BB91832F";e.getUserType=function(){return e.USER_TYPE.EXPERIMENT};e.isExperiment=function(){return e.getUserType()==e.USER_TYPE.EXPERIMENT};e.isReference=function(){return e.getUserType()==e.USER_TYPE.REFERENCE};e.checkLogin=function(f){!!f&&f()};e.dialogLog=function(h,j){var g=location.href;var i=/http:\/\/.*\/(picture)\/.*?\?fr=lemma/.test(g);var f=/http:\/\/.*\/(picture)\/.*?\?fr=newalbum/.test(g);j=!!j?j:{};if(i){d.extend(j,{page:"lemma"})}else{if(f){d.extend(j,{page:"album"})}}e.epNslog(h,j)};e.nslog=function(l,i){var m=document.referrer;var g=/http:\/\/.*\/(view)|(subview)\/.*?/.test(m);var k=/http:\/\/.*\/(picview)\/.*?\?fr=lemma/.test(location.href);var n=g||k;var f=/http:\/\/.*\/(picview)\/.*?\?fr=level2/.test(location.href);var h=/http:\/\/.*\/(picture)\/.*?/.test(location.href);var j={frompage:n?"lemma":(f?"level2":"other"),newpicture:h?"1":"0"};if(e.isReference()){d.extend(j,{referuser:1})}else{if(e.isExperiment()){d.extend(j,{epuser:1})}}if(!!i){d.extend(i,j)}else{i=j}nslog(location.href,l,i)};e.epNslog=function(f,g){if(!!g){d.extend(g,{epuser:1})}else{g={epuser:1}}nslog(location.href,f,g)};b=e;return b},["/static/common/ui/jquery/jquery.js","/static/common/ui/jquery_cookie/jquery_cookie.js","/static/common/ui/nslog/nslog.js"]);
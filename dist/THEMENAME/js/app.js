!function(a){wp.customize("blogname",function(b){b.bind(function(b){a(".site-title a").text(b)})}),wp.customize("blogdescription",function(b){b.bind(function(b){a(".site-description").text(b)})}),wp.customize("header_textcolor",function(b){b.bind(function(b){a(".site-title, .site-description").css("blank"===b?{clip:"rect(1px, 1px, 1px, 1px)",position:"absolute"}:{clip:"auto",color:b,position:"relative"})})})}(jQuery),function(){var a,b,c;if(a=document.getElementById("site-navigation"),a&&(b=a.getElementsByTagName("h1")[0],"undefined"!=typeof b)){if(c=a.getElementsByTagName("ul")[0],"undefined"==typeof c)return void(b.style.display="none");-1===c.className.indexOf("nav-menu")&&(c.className+=" nav-menu"),b.onclick=function(){-1!==a.className.indexOf("toggled")?a.className=a.className.replace(" toggled",""):a.className+=" toggled"}}}(),function(){var a=navigator.userAgent.toLowerCase().indexOf("webkit")>-1,b=navigator.userAgent.toLowerCase().indexOf("opera")>-1,c=navigator.userAgent.toLowerCase().indexOf("msie")>-1;if((a||b||c)&&"undefined"!=typeof document.getElementById){var d=window.addEventListener?"addEventListener":"attachEvent";window[d]("hashchange",function(){var a=document.getElementById(location.hash.substring(1));a&&(/^(?:a|select|input|button|textarea)$/i.test(a.tagName)||(a.tabIndex=-1),a.focus())},!1)}}();
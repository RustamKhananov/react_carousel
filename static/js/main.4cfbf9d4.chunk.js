(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),l=n.n(i),c=n(3),s=n(4),m=n(6),o=n(5),p=(n(12),function(e){var t=e.images,n=e.step,a=e.frameSize,i=e.itemWidth,l=e.animationDuration;return r.a.createElement("div",{className:"Carousel",style:{width:"".concat(i*a,"px")}},r.a.createElement("ul",{className:"Carousel__list",style:{transition:"".concat(l/1e3,"s")}},t.map((function(e,t){return r.a.createElement("li",{key:e,className:"Carousel__item",style:{width:"".concat(i,"px")}},r.a.createElement("img",{src:e,alt:t}))}))),r.a.createElement("button",{onClick:function(e){var t=e.nativeEvent.srcElement.parentElement.children[0].style.left,a=e.nativeEvent.srcElement.parentElement.children[0];t=parseInt(t,10)?parseInt(t,10):0,a.style.left="".concat(t+n*i>0?0:t+n*i,"px")},type:"button"},"Prev"),r.a.createElement("button",{onClick:function(e){var a=e.nativeEvent.srcElement.parentElement.children[0].style.left,r=e.nativeEvent.srcElement.parentElement.children[0];(a=parseInt(a,10)?parseInt(a,10):0)-n*i<-(t.length-n)*i?r.style.left="".concat(-(i*t.length-n*i),"px"):r.style.left="".concat(a-n*i,"px")},type:"button"},"Next"))}),u=function(e){Object(m.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.images;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Carousel with ",e.length," images"),r.a.createElement(p,{images:e,step:3,frameSize:3,itemWidth:130,animationDuration:1e3}))}}]),n}(r.a.Component);l.a.render(r.a.createElement(u,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.4cfbf9d4.chunk.js.map
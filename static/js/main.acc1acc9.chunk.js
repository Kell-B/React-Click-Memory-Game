(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Aang","image":"https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003","count":0},{"id":2,"name":"Toph","image":"https://vignette.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png/revision/latest?cb=20131230122047","count":0},{"id":3,"name":"Sokka","image":"https://vignette.wikia.nocookie.net/avatar/images/c/cc/Sokka.png/revision/latest?cb=20140905085428","count":0},{"id":4,"name":"Katara","image":"https://vignette.wikia.nocookie.net/avatar/images/7/7a/Katara_smiles_at_coronation.png/revision/latest?cb=20150104171449","count":0},{"id":5,"name":"Zuko","image":"https://upload.wikimedia.org/wikipedia/en/3/3e/Prince_Zuko.jpg","count":0},{"id":6,"name":"Azula","image":"https://upload.wikimedia.org/wikipedia/en/1/12/Azula.png","count":0},{"id":7,"name":"Ty Lee","image":"https://vignette.wikia.nocookie.net/avatar/images/6/6d/Ty_Lee.png/revision/latest?cb=20140905083814","count":0},{"id":8,"name":"Mai","image":"https://vignette.wikia.nocookie.net/avatar/images/4/40/Mai.png/revision/latest?cb=20090406114652","count":0},{"id":9,"name":"Suki","image":"https://vignette.wikia.nocookie.net/avatar/images/1/14/Suki.png/revision/latest?cb=20130819094354","count":0},{"id":10,"name":"Momo","image":"https://vignette.wikia.nocookie.net/avatar/images/4/43/Inquisitive_Momo.png/revision/latest?cb=20081225191217","count":0},{"id":11,"name":"Appa","image":"https://vignette.wikia.nocookie.net/avatar/images/6/65/Appa_flying.png/revision/latest?cb=20140517110636","count":0},{"id":12,"name":"Avatar","image":"https://vignette.wikia.nocookie.net/avatar/images/2/25/Aang_in_the_iceberg.png/revision/latest/scale-to-width-down/200?cb=20140102123223","count":0}]')},,,,,,,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(3),c=a.n(o),r=(a(13),a(4)),s=a(5),m=a(7),g=a(6),u=(a(14),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.clickCount(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.name,src:e.image})))}),l=(a(15),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),h=(a(16),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore: ",e.highscore))}),d=a(1),v=(a(17),function(e){Object(m.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={cards:d,score:0,highscore:0},e.gameOver=function(){return e.state.score>e.state.highscore&&e.setState({highscore:e.state.score},(function(){console.log(this.state.highscore)})),e.state.cards.forEach((function(e){e.count=0})),alert("Game Over :( \nscore: ".concat(e.state.score)),e.setState({score:0}),!0},e.clickCount=function(t){e.state.cards.find((function(a,n){if(a.id===t){if(0===d[n].count)return d[n].count=d[n].count+1,e.setState({score:e.state.score+1},(function(){console.log(this.state.score)})),e.state.cards.sort((function(){return Math.random()-.5})),!0;e.gameOver()}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(l,null,i.a.createElement(h,{score:this.state.score,highscore:this.state.highscore},"Avatar Memory Game"),this.state.cards.map((function(t){return i.a.createElement(u,{clickCount:e.clickCount,id:t.id,key:t.id,image:t.image})})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.acc1acc9.chunk.js.map
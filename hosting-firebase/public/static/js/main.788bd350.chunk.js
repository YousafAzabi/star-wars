(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{64:function(e,t,a){e.exports=a(84)},69:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),l=a.n(r),s=(a(69),a(28)),o=a.n(s),c=a(33),u=a(17),h=a(13),p=a(21),d=a(18),m=a(22),b=a(116),y=a(115),g=a(4),w=a(118),f=a(111),v=a(108),O=a(117),E=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.handleChange;return i.a.createElement(v.a,{className:t.formControl},i.a.createElement(w.a,{htmlFor:"demo-controlled-open-select"},"Collection"),i.a.createElement(O.a,{value:this.props.type,onChange:a},i.a.createElement(f.a,{value:"people"},"People"),i.a.createElement(f.a,{value:"starships"},"StarShips")))}}]),t}(i.a.Component),C=Object(g.a)(function(e){return{formControl:{float:"left",width:"34%",minWidth:200,marginLeft:"8%",marginRight:"8%"}}})(E),T=a(112),j=a(113),A=a(110),W=a(86),k=a(114),D={ATTRIBUTES:{people:["height","mass"],starships:["cost_in_credits","length","max_atmosphering_speed","crew","passengers","hyperdrive_rating"]}},P=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.isDisplayed,n=e.title,r=e.type,l=e.details,s=e.winningAttribute,o=D.ATTRIBUTES[r];return i.a.createElement(T.a,{className:t.card},i.a.createElement(j.a,null,s&&i.a.createElement(k.a,{color:"primary",badgeContent:s,className:t.badge}," "),i.a.createElement(y.a,{className:t.title},n),null!==l&&i.a.createElement(A.a,{className:t.details},o.map(function(e){return i.a.createElement(W.a,{key:e},i.a.createElement("b",null,e),": ",a&&l[e])}))))}}]),t}(i.a.Component),N=Object(g.a)(function(e){return{card:{margin:"5%",float:"left",width:"40%",textAlign:"left"},badge:{float:"right",right:"80px"}}})(P),S=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.type,n=e.winningAttribute,r=e.handleChange,l=D.ATTRIBUTES[a];return i.a.createElement(v.a,{className:t.formControl},i.a.createElement(w.a,{htmlFor:"demo-controlled-open-select"},"Winning Attribute"),i.a.createElement(O.a,{value:n,onChange:r},l&&l.map(function(e){return i.a.createElement(f.a,{key:e,value:e},e)})))}}]),t}(i.a.Component),x=Object(g.a)(function(e){return{formControl:{float:"left",width:"34%",minWidth:200,marginLeft:"8%",marginRight:"8%"}}})(S),R={fetchData:function(){var e=Object(c.a)(o.a.mark(function e(t){var a;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.co/api/".concat(t,"/")).then(function(e){return 200!==e.status?{results:null}:e.json()});case 2:return a=e.sent,e.abrupt("return",a.results);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),getData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.length>0?e[Math.floor(Math.random()*e.length)]:null},getWinner:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n="draw";return e[a]>t[a]?n="Player One Wins":e[a]<t[a]&&(n="Player Two Wins"),n}},B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).handleTypeSelectChange=function(e){a.setState({type:e.target.value,playerOne:null,playerTwo:null,winningAttribute:"",isNewdisabled:!1})},a.handleCommonAttributeSelectChange=function(e){a.setState({winningAttribute:e.target.value})},a.handleNewClick=function(){var e=a.state.collections[a.state.type],t=R.getData(e),n=R.getData(e);a.setState({playerOne:t,playerTwo:n,isPlayerTwoDisabled:!1,isNewdisabled:!0,isPlayDisabled:!1})},a.handlePlayClick=function(){var e=R.getWinner(a.state.playerOne,a.state.playerTwo,a.state.winningAttribute),t=a.state.playerOneWins,n=a.state.playerTwoWins;"Player One Wins"===e?t++:"Player Two Wins"===e?n++:e="The result is draw.",a.setState({playerOneWins:t,playerTwoWins:n,isPlayerTwoDisabled:!0,isNewdisabled:!1,isPlayDisabled:!0}),alert(e)},a.state={type:"",collections:null,winningAttribute:"",playerOne:null,playerTwo:null,playerOneWins:0,playerTwoWins:0,isPlayerTwoDisabled:!1,isNewdisabled:!1,isPlayDisabled:!0},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(c.a)(o.a.mark(function e(){var t,a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.fetchData("people");case 2:return t=e.sent,e.next=5,R.fetchData("starships");case 5:a=e.sent,n={people:t,starships:a},this.setState({collections:n});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{style:{textAlign:"center"}},i.a.createElement("div",{style:{marginTop:20}},i.a.createElement(C,{type:this.state.type,handleChange:this.handleTypeSelectChange}),i.a.createElement(x,{type:this.state.type,winningAttribute:this.state.winningAttribute,handleChange:this.handleCommonAttributeSelectChange})),i.a.createElement("div",null,i.a.createElement(N,{isDisplayed:!0,title:"Player One",type:this.state.type,details:this.state.playerOne,winningAttribute:this.state.winningAttribute}),i.a.createElement(N,{isDisplayed:this.state.isPlayerTwoDisabled,title:"Player Two",type:this.state.type,details:this.state.playerTwo,winningAttribute:this.state.winningAttribute})),i.a.createElement(y.a,null,"Winning Score: ",i.a.createElement("b",null,this.state.playerOneWins)," vs ",i.a.createElement("b",null,this.state.playerTwoWins)),i.a.createElement("div",{className:e.buttonContainer},i.a.createElement(b.a,{disabled:""===this.state.type||this.state.isNewdisabled,className:e.button,onClick:this.handleNewClick},"NEW"),i.a.createElement(b.a,{disabled:""===this.state.winningAttribute||this.state.isPlayDisabled,className:e.button,onClick:this.handlePlayClick},"PLAY")))}}]),t}(i.a.Component),_=Object(g.a)(function(e){return{button:{width:80,height:80,borderRadius:100,margin:"80px 30px",color:"white",background:"orange"}}})(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[64,1,2]]]);
//# sourceMappingURL=main.788bd350.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(36)},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),i=n.n(l),u=(n(24),n(25),n(8)),c=n(9),o={htmlForm:{inputField:"",title:"",isNumInLocaleStorage:!1,isInputFilled:!1,isEven:null},listOfProducts:{articles:[]}},s={HTML_FORM:{ADD_TITLE:"add_title",INPUT_SYMBOLS:"input_symbols",CLEAR:"clear",SET:"set"},LIST_OF_PRODUCTS:{IMPORT_ARTICLES:"import_articles"}};var m=Object(u.c)({taskTwo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.htmlForm,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.HTML_FORM.ADD_TITLE:return Object(c.a)({},e,{title:t.title,isEven:t.isEven});case s.HTML_FORM.INPUT_SYMBOLS:return Object(c.a)({},e,{inputField:t.inputField,isInputFilled:t.isInputFilled});case s.HTML_FORM.SET:return Object(c.a)({},e,{inputField:"",isInputFilled:t.isInputFilled});case s.HTML_FORM.CLEAR:return Object(c.a)({},e,{inputField:t.inputField,isInputFilled:t.isInputFilled,title:t.title});default:return e}},taskFour:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.listOfProducts,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s.LIST_OF_PRODUCTS.IMPORT_ARTICLES:return Object(c.a)({},e,{articles:t.articles});default:return e}}}),p=n(7),d=n(18),f=n(1),h=n(2),v=n(4),E=n(3),O=n(5),b=(n(30),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(v.a)(this,Object(E.a)(t).call(this))).state={string:"",outputArray:["null",0]},e}return Object(O.a)(t,e),Object(h.a)(t,[{key:"checkInput",value:function(e){var t=this;if(e.preventDefault(),e.target.value){var n=[],a=e.target.value;this.setState({string:a});var r=a.toLowerCase().split(""),l=!0,i=!1,u=void 0;try{for(var c,o=function(){var e=c.value;if(!n.includes(e)){var a=0;r.forEach(function(t){t===e&&a++}),n.push([e,a])}var l=n[0];n.forEach(function(e){e[1]>l[1]&&(l=e)}),t.setState({outputArray:l})},s=r[Symbol.iterator]();!(l=(c=s.next()).done);l=!0)o()}catch(m){i=!0,u=m}finally{try{l||null==s.return||s.return()}finally{if(i)throw u}}}else this.setState({string:"",outputArray:["null",0]})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"taskOneField"},r.a.createElement("div",{className:"taskOneFieldWrap"},r.a.createElement("h2",null,"Task 1"),r.a.createElement("form",null,r.a.createElement("input",{type:"text",value:this.state.string,onChange:function(t){return e.checkInput(t)},placeholder:"Input some symbols"})),r.a.createElement("div",{className:"paragraphOne"},"The most frequent character: ",this.state.outputArray[0]),r.a.createElement("div",null,"Amount of characters: ",this.state.outputArray[1])))}}]),t}(a.Component)),T=(n(31),function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){localStorage.getItem("num23")&&this.props.addTitle()}},{key:"render",value:function(){var e=this.props,t=e.isInputFilled,n=e.inputField,a=e.title,l=e.inputSymbols,i=e.setData,u=e.clearData,c=e.isEven?"green":"red";return r.a.createElement("div",{className:"taskTwoField"},r.a.createElement("h2",null,"Task 2"),r.a.createElement("p",{className:"taskTwoTitle",style:{color:c}},a),r.a.createElement("form",null,r.a.createElement("input",{type:"number",placeholder:"Input some numbers",value:n,onChange:function(e){return l(e)}}),r.a.createElement("div",{className:"buttonsWrap"},r.a.createElement("input",{type:"submit",value:"Set",disabled:!t,onClick:function(e){return e.preventDefault(),i()}}),r.a.createElement("input",{type:"button",value:"Clear",onClick:function(){return u()}}))))}}]),t}(a.Component)),y=function(e){var t=localStorage.getItem("num23");return{type:s.HTML_FORM.ADD_TITLE,title:t,isEven:e}},F=function(){return{type:s.HTML_FORM.SET,isInputFilled:!1}},g=function(e){return{type:s.LIST_OF_PRODUCTS.IMPORT_ARTICLES,articles:e}},k=Object(p.b)(function(e){return{title:e.taskTwo.title,inputField:e.taskTwo.inputField,isInputFilled:e.taskTwo.isInputFilled,isEven:e.taskTwo.isEven}},function(e){return{addTitle:function(){return e(y())},clearData:function(){return e((localStorage.removeItem("num23"),{type:s.HTML_FORM.CLEAR,inputField:"",isInputFilled:!1,title:""}))},setData:function(){return e(function(e,t){var n=t().taskTwo.inputField,a=n%2===0;localStorage.getItem("num23")?(localStorage.removeItem("num23"),localStorage.setItem("num23",n)):localStorage.setItem("num23",n),e(y(a)),e(F())})},inputSymbols:function(t){return e(function(e){e.preventDefault();var t="",n=!1;return e.target.value.length>0?(t=+e.target.value,n=!0):(t="",n=!1),{type:s.HTML_FORM.INPUT_SYMBOLS,inputField:t,isInputFilled:n}}(t))}}})(T),I=(n(32),function(e){function t(){var e;return Object(f.a)(this,t),(e=Object(v.a)(this,Object(E.a)(t).call(this))).state={url:"http://localhost:63342/test/index.html?em=world&ew=book"},e}return Object(O.a)(t,e),Object(h.a)(t,[{key:"changeValue",value:function(e){e.preventDefault(),this.setState({url:e.target.value})}},{key:"parseUrl",value:function(){var e=this.state.url,t={};e.includes("?")&&(e.match(/\?.+/)[0].slice(1).split("&").forEach(function(e){var n=e.split("="),a=n[0],r=n[1]||null;t[a]=r}),alert(JSON.stringify(t)))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"taskThreeField"},r.a.createElement("h2",null,"Task 3"),r.a.createElement("div",{className:"taskThreeFieldWrap"},r.a.createElement("input",{type:"text",value:this.state.url,onChange:function(t){return e.changeValue(t)}}),r.a.createElement("button",{onClick:function(){return e.parseUrl()}},"Parse")))}}]),t}(a.Component)),S=Object(p.b)(function(){return{}},function(){return{}})(I),j=(n(33),n(34),function(e){var t=e.id,n=e.title,a=e.name,l=e.imgUrl,i=e.options,u=e.price,c=e.currency,o=+u;return r.a.createElement("li",{className:"fourTaskListItem"},r.a.createElement("div",{className:"fourTaskListItemNum"},"#",t),r.a.createElement("h3",null,n),r.a.createElement("p",null,a),r.a.createElement("div",{className:"imageWrap"},r.a.createElement("img",{src:l,alt:"ring"})),r.a.createElement("p",{className:"optionsList"},"Product options:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Metal type: ",i[0].metal_type),r.a.createElement("li",null,"Metal color: ",i[0].metal_color),r.a.createElement("li",null,"Stone shape: ",i[0].stone_shape),r.a.createElement("li",null,"Gem stone color: ",i[0].gemstone_color)),r.a.createElement("div",{className:"price"},o.toFixed(2)+c))}),_=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.loadData()}},{key:"render",value:function(){var e=this.props.articles;return r.a.createElement("div",{className:"taskFourField"},r.a.createElement("h2",null,"Task 4"),r.a.createElement("p",null,"Products:"),r.a.createElement("div",{className:"containerOfProducts"},r.a.createElement("ul",{className:"mainList"},e.map(function(e,t){return console.log(),r.a.createElement(j,{key:t,id:e.id,title:e.title,name:e.sku,imgUrl:e.image,options:e.options,price:e.price,currency:e.currency})}))))}}]),t}(a.Component),L=Object(p.b)(function(e){return{articles:e.taskFour.articles}},function(e){return{loadData:function(){return e(function(e){fetch("http://54.39.188.42/",{method:"GET"}).then(function(e){return e.text()}).then(function(t){var n=JSON.parse(atob(t));e(g(n))})})}}})(_),M=(n(35),function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(O.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"tasksWrap"},r.a.createElement(b,null),r.a.createElement(k,null),r.a.createElement(S,null),r.a.createElement(L,null))}}]),t}(a.Component)),w=Object(u.d)(m,Object(u.a)(d.a));var N=function(){return r.a.createElement(p.a,{store:w},r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.bd6a8323.chunk.js.map
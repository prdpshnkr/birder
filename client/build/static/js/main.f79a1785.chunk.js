(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),u=a.n(l),s=a(6),o=a(7),c=a(11),i=a(8),m=a(12),p=a(16),h=a(15),b=a(10),d=a(25),E=a.n(d),g=a(17),f=a(9),v=a.n(f),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){e.persist(),a.setState(function(){return Object(g.a)({},e.target.name,e.target.value)})},a.handleSubmit=function(e){e.preventDefault();var t={username:a.state.username,email:a.state.email,password:a.state.password};v.a.post("https://birder-app.herokuapp.com/users/register",t).then(function(e){e.data.errors?alert(e.data.message):a.props.history.push("/users/login")})},a.state={username:"",email:"",password:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Register"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"username",r.a.createElement("input",{type:"text",value:this.state.username,name:"username",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("label",null,"email",r.a.createElement("input",{type:"text",value:this.state.email,name:"email",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("label",null,"password",r.a.createElement("input",{type:"password",value:this.state.password,name:"password",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"})))}}]),t}(r.a.Component),j=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){e.persist(),a.setState(function(){return Object(g.a)({},e.target.name,e.target.value)})},a.handleSubmit=function(e){e.preventDefault();var t={email:a.state.email,password:a.state.password};v.a.post("https://birder-app.herokuapp.com/users/login",t).then(function(e){if(e.data.errors)alert(e.data.errors);else{var t=e.data.token;localStorage.setItem("userAuthToken",t),a.props.history.push("/users/account")}})},a.state={email:"",password:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"email",r.a.createElement("input",{type:"text",value:this.state.email,name:"email",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("label",null,"password",r.a.createElement("input",{type:"password",value:this.state.password,name:"password",onChange:this.handleChange})),r.a.createElement("br",null),r.a.createElement("input",{type:"submit"})))}}]),t}(r.a.Component),y=function(e){return{type:"SET_USER",payload:e}},S=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://birder-app.herokuapp.com/users/account",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){var a=t.data;e.setState({user:a}),e.props.dispatch(y(a))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",null,r.a.createElement("h2",null,"User Account"),r.a.createElement("p",null,this.props.user.username))}}]),t}(r.a.Component),k=Object(b.b)(function(e){return{user:e.user}})(S),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.delete("https://birder-app.herokuapp.com/users/logout",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(t){localStorage.removeItem("userAuthToken"),e.props.dispatch({type:"RESET_USER"}),e.props.history.push("/users/login")})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Logging Out... "))}}]),t}(r.a.Component),C=Object(b.b)()(w),T=Object(b.b)(function(e){return{user:e.user}})(function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,"Profile Component"),r.a.createElement("p",null,e.user.username))}),A=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("h2",null,this.props.msg),r.a.createElement("ul",null,E.a.isEmpty(this.props.user)?r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/users/register"},"Register")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/users/login"},"Login"))):r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(p.b,{to:"/users/account"},"Account")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/users/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/users/logout"},"Logout")))),r.a.createElement(h.c,null,r.a.createElement(r.a.Fragment,null,E.a.isEmpty(this.props.user)?r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{path:"/users/register",component:O}),r.a.createElement(h.a,{path:"/users/login",component:j})):r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{path:"/users/account",component:k}),r.a.createElement(h.a,{path:"/users/logout",component:C}),r.a.createElement(h.a,{path:"/users/profile",component:T}))))))}}]),t}(n.Component),x=Object(b.b)(function(e){return{user:e.user,isAuthenticated:!0,msg:"Birder"}})(A),R=a(20),I=a(27),U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER":return Object(I.a)({},t.payload);case"RESET_USER":return{};default:return Object(I.a)({},e)}},D=function(){return Object(R.c)(Object(R.b)({user:U}))}();D.subscribe(function(){console.log("redux store state",D.getState())}),localStorage.getItem("userAuthToken")&&v.a.get("https://birder-app.herokuapp.com/users/account",{headers:{"x-auth":localStorage.getItem("userAuthToken")}}).then(function(e){D.dispatch(y(e.data))});var L=r.a.createElement(b.a,{store:D},r.a.createElement(x,null));u.a.render(L,document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f79a1785.chunk.js.map
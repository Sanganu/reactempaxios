(this.webpackJsonpreactempaxios=this.webpackJsonpreactempaxios||[]).push([[0],{43:function(e,t,a){e.exports=a(79)},48:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(9),c=a.n(r),o=(a(48),a(10)),m=a(35),i=a(36),u=a(42),s=a(41),E=a(14),d=a.n(E),f=a(15);var h=function(e){var t={columns:[{label:"First name",field:"fname",width:150,attributes:{"aria-controls":"DataTable","aria-label":"First Name"}},{label:"Last name",field:"lname",width:150},{label:"Email",field:"email"},{label:"Nationality",field:"nationality"},{label:"Phone",field:"phone"}],rows:e.rows};return l.a.createElement("div",null,l.a.createElement(f.d,{hover:!0,data:t}))},p=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={rows:[]},e.componentDidMount=function(){setTimeout((function(){d.a.get("https://randomuser.me/api/?results=15&nat=us").then((function(t){for(var a=t.data.results,n=[],l=0;l<a.length;l++){var r={fname:a[l].name.first,lname:a[l].name.last,email:a[l].email,nationality:a[l].nat,phone:a[l].phone};n.push(r)}e.setState({rows:n},(function(){}))}))}),3e3)},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"container bg-info"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h4",null,"MDBREACT DATATABLE - With Class Component"),l.a.createElement(h,{rows:this.state.rows}))))}}]),a}(n.Component);a(32),a(33),a(34);var v=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){setTimeout((function(){d.a.get("https://randomuser.me/api/?results=15&nat=us").then((function(e){var t=e.data.results.map((function(e,t){return{fname:e.name.first,lname:e.name.last,email:e.email,phone:e.cell,location:e.location.city+" "+e.location.country}}));r(t)}))}),3e3)}),[]),l.a.createElement("div",{className:"container bg-secondary"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h4",{className:"text-warap m-3 mb-3"},"MDBREACT DATATABLE - With useEffect"),l.a.createElement(f.c,{striped:!0,bordered:!0,hover:!0,data:{columns:[{label:"First Name",field:"fname",sort:"asc",width:150},{label:"Last Name",field:"lname",sort:"asc",width:150},{label:"Email",field:"email",sort:"asc",width:150},{label:"Phone number",field:"phone",sort:"asc",width:150},{label:"Location",field:"location",sort:"asc",width:150}],rows:a}}))))},b=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("th",null,e.employee.title+" "+e.employee.name),l.a.createElement("th",null,l.a.createElement("img",{alt:e.employee.name,src:e.employee.pic})),l.a.createElement("th",null,e.employee.dob),l.a.createElement("th",null,e.employee.cell),l.a.createElement("th",null,e.employee.email),l.a.createElement("th",null,e.employee.uuid)))},g=a(84),y=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),m=Object(o.a)(c,2),i=(m[0],m[1]),u=Object(n.useState)(!1),s=Object(o.a)(u,2),E=s[0],d=s[1];Object(n.useEffect)((function(){setTimeout((function(){fetch("https://randomuser.me/api/?results=15&nat=us",{"Access-Control-Allow-Origin":"no-cors"}).then((function(e){return e.json()})).then((function(e){var t=e.results.map((function(e){return{title:e.name.title,name:e.name.first+" "+e.name.last,pic:e.picture.thumbnail,dob:e.dob.date,cell:e.cell,email:e.email,uuid:e.login.username}}));r(t),i(t)}))}),3e3)}),[]);var f=function(e){console.log(e,"Order");var t=a;if("ASC"===e){for(var n=0;n<t.length-1;n++)for(var l=n===t.length-1?n:n+1;l<t.length-1;l++)if(t[n].name>t[l].name){var c=t[n];t[n]=t[l],t[l]=c}}else for(var o=0;o<t.length-1;o++)for(var m=o===t.length-1?o:o+1;m<t.length-1;m++)if(t[o].name<t[m].name){var i=t[o];t[o]=t[m],t[m]=i}r(t),d(!E),console.log(t,a)};return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h4",null,"Employee Database - useState/useEffect"),l.a.createElement(g.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name",l.a.createElement("button",{onClick:function(){return f("ASC")}},"\u2191"),l.a.createElement("button",{onClick:function(){return f("DESC")}},"\u2193")),l.a.createElement("th",null,"Profile Pic"),l.a.createElement("th",null,"DOB",l.a.createElement("button",{onClick:function(){}},"\u2191"),l.a.createElement("button",{onClick:function(){}},"\u2193")),l.a.createElement("th",null,"`        Cell"),l.a.createElement("th",null,"Email"),l.a.createElement("th",null,"Id"))),l.a.createElement("tbody",null,a.map((function(e,t){return l.a.createElement(b,{key:t,employee:e})})))))))};var w=function(){return l.a.createElement("div",{className:"container text-center mx-auto landing"},l.a.createElement("h3",null,"Welcome to Employee Directory"),l.a.createElement("main",{className:"container m-3 p-3 bg-secondary"},l.a.createElement("h2",null,"Employee data rendered using randomapi"),l.a.createElement("ul",null,l.a.createElement("h6",null,"NPM packages used"),l.a.createElement("li",null,"Axios "),l.a.createElement("li",null,"Bootstrap"),l.a.createElement("li",null,"MDBReact"))))};var N=function(e){return l.a.createElement("div",{className:"text-center text-black"},l.a.createElement("h2",null," Employee Directory"),l.a.createElement("ul",{className:"nav nav-tabs"},["IT Department","Production","Marketing","Home"].map((function(t){return l.a.createElement("li",{className:"nav-item",key:t},l.a.createElement("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link"},t))}))))};var O=function(){var e=Object(n.useState)("Home"),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",{className:"container landing"},l.a.createElement(N,{currentPage:a,handlePageChange:r}),function(){switch(a){case"Home":return l.a.createElement(w,null);case"IT Department":return l.a.createElement(p,null);case"Production":return l.a.createElement(y,null);case"Marketing":return l.a.createElement(v,null);default:return l.a.createElement(w,null)}}())};a(78);var C=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(O,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(C,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.190af27d.chunk.js.map
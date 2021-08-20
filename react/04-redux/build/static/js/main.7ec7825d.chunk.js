(this["webpackJsonp03-react-router-formik"]=this["webpackJsonp03-react-router-formik"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('[{"id":1,"username":"yaroslav","age":24,"role":"admin","timestamp":1627934490151},{"id":2,"username":"test-user","age":18,"role":"user","timestamp":1627934784096}]')},43:function(e,t,r){},52:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){"use strict";r.r(t);var n,c=r(0),s=r(25),a=r.n(s),i=r(4),u=(r(43),"view"),o="create",d="edit",l="clone",j=r(15),b=r(8),f="username",O="role",x="age",p=(n={},Object(b.a)(n,f,""),Object(b.a)(n,x,0),Object(b.a)(n,O,"user"),n),h=r(1);var v=function(e){var t=e.id,r=Object(i.i)().url,n=Object(i.g)(),c=function(e){return function(){n.push("".concat(r,"/user/").concat(e,"/").concat(t))}};return Object(h.jsxs)("div",{className:"Actions",children:[Object(h.jsx)("button",{onClick:c(u),children:"View"})," ",Object(h.jsx)("button",{onClick:c(d),children:"Edit"})," ",Object(h.jsx)("button",{onClick:c(l),children:"Clone"})]})},m=(r(52),r(9));function g(e){return(e=String(e)).padStart(2,"0")}var w,k,y=function(e){var t=new Date(e);return"".concat(t.getFullYear(),"-").concat(g(t.getMonth()+1),"-").concat(g(t.getDate())," ").concat(g(t.getHours()),":").concat(g(t.getMinutes()))},U=r(6),N=r(2),T=r.n(N),C=r(7),S=r(10),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:800;return new Promise((function(t){setTimeout(t,e)}))},A=function(){return Date.now()},R=function(e){throw new Error("Record with ID ".concat(e," does not exist"))},D=r(18),I=(w=D.length,function(){return++w}),q={getUsers:function(){return Object(C.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(1e3);case 2:return console.log("GET /users",D),e.abrupt("return",D);case 4:case"end":return e.stop()}}),e)})))()},getUser:function(e){return Object(C.a)(T.a.mark((function t(){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:if(!(r=D.find((function(t){return t.id===e})))){t.next=8;break}return console.log("GET /users/".concat(r.id),r),t.abrupt("return",r);case 8:R(e);case 9:case"end":return t.stop()}}),t)})))()},createUser:function(e){return Object(C.a)(T.a.mark((function t(){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:return r=Object(m.a)(Object(m.a)({},e),{},{id:I(),timestamp:A()}),D.push(r),console.log("POST /users",r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))()},editUser:function(e){return Object(C.a)(T.a.mark((function t(){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:if(!~(r=D.findIndex((function(t){return t.id===e.id})))){t.next=9;break}return D[r]=Object(m.a)(Object(m.a)({},e),{},{timestamp:A()}),console.log("PUT /users",D[r]),t.abrupt("return",D[r]);case 9:R(e.id);case 10:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){return Object(C.a)(T.a.mark((function t(){var r;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E();case 2:if(!~(r=D.findIndex((function(t){return t.id===e.id})))){t.next=8;break}return console.log("DELETE /users",e),t.abrupt("return",D[r]);case 8:R(e.id);case 9:case"end":return t.stop()}}),t)})))()},getRoles:function(){return Object(C.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E();case 2:return t=["user","super-user","admin"],console.log("GET /roles",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))()}},F=Object(S.b)("users/fetchUsers",Object(C.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getUsers();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),V=Object(S.b)("users/fetchUser",function(){var e=Object(C.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getUser(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(S.b)("users/addNewUser",function(){var e=Object(C.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.createUser(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),J=Object(S.b)("users/updateUser",function(){var e=Object(C.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.editUser(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),L=Object(S.b)("users/deleteUser",function(){var e=Object(C.a)(T.a.mark((function e(t){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.deleteUser(t);case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=Object(S.c)({name:"users",initialState:{users:[],status:"idle",error:null},reducers:{},extraReducers:(k={},Object(b.a)(k,F.pending,(function(e,t){e.status="loading"})),Object(b.a)(k,F.fulfilled,(function(e,t){e.status="succeeded",e.users=e.users.concat(t.payload)})),Object(b.a)(k,F.rejected,(function(e,t){e.status="failed",e.error=t.payload})),Object(b.a)(k,G.fulfilled,(function(e,t){e.users.push(t.payload)})),Object(b.a)(k,J.fulfilled,(function(e,t){var r=t.payload,n=r.id,c=r.username,s=r.age,a=r.role,i=r.timestamp,u=e.users.find((function(e){return e.id==n}));u&&(u.username=c,u.age=s,u.role=a,u.timestamp=i)})),Object(b.a)(k,L.fulfilled,(function(e,t){var r=t.payload.id;e.users=e.users.filter((function(e){return e.id!==r}))})),k)}).reducer;var P=function(){var e,t=Object(U.b)(),r=Object(U.c)((function(e){return e.users.users})),n=Object(i.i)().url,s=Object(U.c)((function(e){return e.users.status})),a=Object(U.c)((function(e){return e.users.error}));return Object(c.useEffect)((function(){"idle"===s&&t(F())}),[s,t]),"loading"===s?e=Object(h.jsx)("div",{className:"loader",children:"Loading..."}):"succeeded"===s?e=Object(h.jsxs)("div",{className:"UsersTable",children:[Object(h.jsx)(j.b,{to:"".concat(n,"/user/").concat(o),children:"Create User"}),Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"ID"}),Object(h.jsx)("th",{children:"Username"}),Object(h.jsx)("th",{children:"Age"}),Object(h.jsx)("th",{children:"Role"}),Object(h.jsx)("th",{children:"Last Updated At"}),Object(h.jsx)("th",{children:"Actions"})]})}),Object(h.jsx)("tbody",{children:r.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.id}),Object(h.jsx)("td",{children:e.username}),Object(h.jsx)("td",{children:e.age}),Object(h.jsx)("td",{children:e.role}),Object(h.jsx)("td",{children:y(e.timestamp)}),Object(h.jsx)("td",{children:Object(h.jsx)(v,{id:e.id})})]},e.id)}))})]})]}):"failed"===s&&(e=Object(h.jsx)("div",{children:a})),Object(h.jsx)("div",{className:"Users",children:e})},B=r(16),H=r(23);r(55);var Y=function(e){var t=e.name,r=e.label,n=e.validate,c=e.type,s=void 0===c?"text":c,a=e.disabled,i=void 0!==a&&a,u=e.required,o=e.checked,d=void 0!==o&&o,l=Object(B.d)({name:t,validate:function(e){return u&&""===e?"Required":"function"===typeof n?n(e):void 0}}),j=Object(H.a)(l,1)[0];return Object(h.jsxs)("div",{className:"Input",children:[Object(h.jsxs)("label",{children:[Object(h.jsxs)("div",{children:[r,u&&"*"]}),Object(h.jsx)("input",Object(m.a)(Object(m.a)({type:s,disabled:i},j),{},{checked:d}))]}),Object(h.jsx)(B.a,{name:t,className:"error",component:"div"})]})};var z=function(e){var t=e.mode,r=Object(i.g)(),n=Object(B.e)(),c=n.values,s=n.isSubmitting,a=Object(U.b)();return Object(h.jsxs)("div",{children:[(t===o||t===d||t===l)&&Object(h.jsx)("button",{type:"submit",disabled:s,children:"Save"}),t===d&&Object(h.jsx)("button",{type:"reset",onClick:Object(C.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=c,e.next=4,a(L(t));case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),window.alert(e.t0.message);case 9:r.push("/users");case 10:case"end":return e.stop()}}),e,null,[[0,6]])}))),children:"Delete"}),Object(h.jsx)("button",{type:"button",onClick:function(){return r.push("/users")},children:"Cancel"})]})};var K=function(e){var t=e.label,r=e.name,n=e.disabled,c=e.validate,s=e.options,a=e.required,i=Object(B.d)({name:r,validate:function(e){return a&&""===e?"Required":"function"===typeof c?c(e):void 0}}),u=Object(H.a)(i,1)[0];return Object(h.jsxs)("div",{className:"Select",children:[Object(h.jsxs)("label",{children:[Object(h.jsxs)("div",{children:[t,a&&"*"]}),Object(h.jsx)("select",Object(m.a)(Object(m.a)({disabled:n},u),{},{children:s.map((function(e,t){return Object(h.jsx)("option",{label:e.label,children:e.value},t)}))}))]}),Object(h.jsx)(B.a,{name:r,className:"error",component:"div"})]})};var Q,W=function(e){var t=e.initialValues,r=e.onSubmit,n=e.mode,c=e.roles;return Object(h.jsx)(B.c,{initialValues:t,onSubmit:r,children:Object(h.jsxs)(B.b,{children:[Object(h.jsx)(Y,{name:f,label:"Username",disabled:n===u,required:!0}),Object(h.jsx)(Y,{name:x,type:"number",label:"Age",disabled:n===u,required:!0,validate:function(e){if(e<16||e>110)return"Age is not appropriate"}}),Object(h.jsx)(K,{label:"Role",name:O,disabled:n===u,options:c.map((function(e){return{label:e,value:e}}))}),Object(h.jsx)("br",{}),Object(h.jsx)(z,{mode:n})]})})},X=Object(S.b)("roles/fetchRoles",Object(C.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.getRoles();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),Z=Object(S.c)({name:"roles",initialState:{roles:[],status:"idle",error:null},reducers:{},extraReducers:(Q={},Object(b.a)(Q,X.pending,(function(e,t){e.status="loading"})),Object(b.a)(Q,X.fulfilled,(function(e,t){e.status="succeeded",e.roles=e.roles.concat(t.payload)})),Q)}).reducer;var $=function(){var e=Object(i.h)(),t=e.mode,r=e.id,n=Object(i.g)(),s=Object(U.b)(),a=Object(U.c)((function(e){return e.users.users.find((function(e){return e.id==r}))}));Object(c.useEffect)((function(){t!==u&&t!==d&&t!==l||a||s(V(r))}),[r,t,a,s]);var j=Object(U.c)((function(e){return e.roles.roles})),b=Object(U.c)((function(e){return e.roles.status}));Object(c.useEffect)((function(){"idle"===b&&s(X())}),[s,j]);var f=function(){var e=Object(C.a)(T.a.mark((function e(r){var c;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,c=r,e.t0=t,e.next=e.t0===o||e.t0===l?6:e.t0===d?9:12;break;case 6:return e.next=8,s(G(c));case 8:return e.abrupt("break",13);case 9:return e.next=11,s(J(c));case 11:return e.abrupt("break",13);case 12:console.error("Failed to execute this request for ".concat(t," mode"));case 13:e.next=18;break;case 15:e.prev=15,e.t1=e.catch(0),window.alert(e.t1.message);case 18:n.push("/users");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return e?Object(m.a)({},e):p}(a);return Object(h.jsx)(W,{initialValues:O,onSubmit:f,mode:t,roles:j},"".concat(t,":").concat(O.id))};r(56);var _=function(){return Object(h.jsxs)("div",{className:"NotFound",children:[Object(h.jsx)("h1",{children:"Not Found"}),Object(h.jsx)("p",{children:"404"})]})};var ee=function(){var e=Object(i.i)().path;return Object(h.jsx)("div",{className:"users",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:e,children:Object(h.jsx)(P,{})}),Object(h.jsx)(i.b,{exact:!0,path:"".concat(e,"/user/:mode(").concat(u,"|").concat(o,"|").concat(d,"|").concat(l,")/:id?"),children:Object(h.jsx)($,{})}),Object(h.jsx)(i.b,{children:Object(h.jsx)(_,{})})]})})};r(57);var te=function(){return Object(h.jsx)("nav",{className:"Sidebar",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(j.c,{className:"Item",activeClassName:"Active",to:"/users",children:"Users"})}),Object(h.jsx)("li",{children:Object(h.jsx)(j.c,{className:"Item",activeClassName:"Active",to:"/todos",children:"Todos"})})]})})},re=Object(S.c)({name:"todos",initialState:{todos:[]},reducers:{addTodo:function(e,t){e.todos.push({id:Object(S.d)(),text:t.payload.text,isComleted:!1})},removeTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!=t.payload.id}))},toggleTodo:function(e,t){var r=e.todos.find((function(e){return e.id==t.payload.id}));r.isComleted=!r.isComleted}}}),ne=re.reducer,ce=re.actions,se=ce.addTodo,ae=ce.removeTodo,ie=ce.toggleTodo,ue=function(e){return e.todos.todos};var oe=function(e){var t=e.text,r=e.id,n=e.isComleted,c=Object(U.b)();return Object(h.jsxs)("li",{onClick:function(e){c(ie({id:r}))},children:[Object(h.jsx)("span",{style:{textDecoration:n?"line-through":"auto"},children:t})," ",Object(h.jsx)("button",{onClick:function(e){c(ae({id:r}))},children:"delete"})]})};var de=function(){var e=Object(U.c)(ue).map((function(e){return Object(h.jsx)(oe,Object(m.a)({},e),e.id)}));return Object(h.jsx)("ul",{children:e})};var le=function(){var e=Object(c.useState)(""),t=Object(H.a)(e,2),r=t[0],n=t[1],s=Object(U.b)(),a=Boolean(r);return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Add a new todo"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("label",{htmlFor:"todoText",children:"Todo text:"}),Object(h.jsx)("textarea",{name:"todoText",id:"todoText",onChange:function(e){return n(e.target.value)},value:r,cols:"30",rows:"1"}),Object(h.jsx)("button",{onClick:function(e){s(se({text:r})),n("")},type:"button",disabled:!a,children:"Save todo"})]})]})};var je=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(le,{}),Object(h.jsx)(de,{})]})};var be=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(te,{}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.a,{exact:!0,from:"/",to:"/users"}),Object(h.jsx)(i.b,{path:"/users",children:Object(h.jsx)(ee,{})}),Object(h.jsx)(i.b,{path:"/todos",children:Object(h.jsx)(je,{})}),Object(h.jsx)(i.b,{children:Object(h.jsx)(_,{})})]})})]})};var fe=function(e){var t=e.children;return Object(h.jsx)(j.a,{basename:"/globallogic-js-basecamp-2021/react/03-react-router-formik/build",children:t})},Oe=(r(58),r(38)),xe=Object(S.a)({reducer:{todos:ne,users:M,roles:Z},middleware:function(e){return e().concat(Oe.a)}}),pe=document.getElementById("root");a.a.render(Object(h.jsx)(c.StrictMode,{children:Object(h.jsx)(fe,{children:Object(h.jsx)(U.a,{store:xe,children:Object(h.jsx)(be,{})})})}),pe)}},[[59,1,2]]]);
//# sourceMappingURL=main.7ec7825d.chunk.js.map
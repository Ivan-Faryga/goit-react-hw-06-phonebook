(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(e,t,n){e.exports={filterInputLabel:"Filter_filterInputLabel__3rmJo",filterInput:"Filter_filterInput___45WS"}},19:function(e,t,n){e.exports={contactsList:"ContactList_contactsList__1rr6X"}},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(10),i=n.n(r),o=n(3),s=n(2),l=n(5),u=n(17),b=n.n(u),m=n(4),d=n(12),j=Object(l.b)({name:"contacts",initialState:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],reducers:{addContact:function(e,t){return[].concat(Object(d.a)(e),[t.payload])},deleteContact:function(e,t){return e.filter((function(e){return e.id!==t.payload}))}}}),f=j.actions,O=f.addContact,p=f.deleteContact,h=j.reducer,x=Object(l.b)({name:"contacts",initialState:"",reducers:{filterContact:function(e,t){return t.payload}}}),C=x.actions.filterContact,_=x.reducer,N={key:"contacts",storage:b.a},v=Object(s.b)({contacts:h,filter:_}),g=Object(m.g)(N,v),I=Object(l.a)({reducer:g,middleware:Object(l.c)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}}),devTools:!0}),L={store:I,persistor:Object(m.h)(I)},S=n(18),y=(n(33),n(8)),F=n(37),k=n(6),w=n.n(k),A=n(1);function B(){var e=Object(c.useState)(""),t=Object(y.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(""),i=Object(y.a)(r,2),s=i[0],l=i[1],u=Object(o.b)(),b=function(e){var t=e.currentTarget,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},m=function(){a(""),l("")},d=Object(F.a)(),j=Object(F.a)();return Object(A.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:n,number:s,id:Object(F.a)()};u(O(t)),m()},children:[Object(A.jsx)("label",{htmlFor:d,className:w.a.formLabel,children:"Name"}),Object(A.jsx)("br",{}),Object(A.jsx)("input",{id:d,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:b,className:w.a.formInput}),Object(A.jsx)("br",{}),Object(A.jsx)("label",{htmlFor:j,className:w.a.formLabel,children:"Number"}),Object(A.jsx)("br",{}),Object(A.jsx)("input",{id:j,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:b,className:w.a.formInput}),Object(A.jsx)("br",{}),Object(A.jsx)("button",{type:"submit",className:w.a.formBtn,children:"add"})]})}var J=n(9),T=n.n(J),z=function(e){var t=e.id,n=e.name,c=e.number,a=e.onDelete;return Object(A.jsxs)("li",{className:T.a.contactItem,children:[Object(A.jsxs)("p",{className:T.a.contactName,children:[n,": ",Object(A.jsx)("span",{className:T.a.contactNumber,children:c})]}),Object(A.jsx)("button",{className:T.a.deleteContactBtn,type:"button",onClick:function(){return a(t)},children:"Delete"})]})},D=n(19),E=n.n(D),H=function(){var e=Object(o.c)((function(e){return e.contacts})),t=Object(o.c)((function(e){return e.filter})),n=Object(o.b)();return Object(A.jsx)("ul",{className:E.a.contactsList,children:function(e,t){var n=t.toLocaleLowerCase().trim();return e.filter((function(e){return e.name.toLocaleLowerCase().trim().includes(n)}))}(e,t).map((function(e){return Object(A.jsx)(z,{id:e.id,name:e.name,number:e.number,onDelete:function(){return n(p(e.id))}},e.id)}))})},P=(n(35),n(15)),R=n.n(P),Z=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.filter}));return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("label",{className:R.a.filterInputLabel,children:"Find contacts by name"}),Object(A.jsx)("br",{}),Object(A.jsx)("input",{className:R.a.filterInput,type:"text",name:"filter",value:t,onChange:function(t){return e(C(t.target.value))},placeholder:"Contact"})]})},q=[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}];function K(){var e=Object(c.useState)([]),t=Object(y.a)(e,2),n=t[0],a=t[1];Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("contacts"));a(e||q)}),[]),Object(c.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsxs)("div",{className:"InputWrapper",children:[Object(A.jsx)("h1",{className:"inputTitle",children:"Phonebook"}),Object(A.jsx)(B,{onSubmit:function(e){var t=e.name,c=e.number;if(n.map((function(e){return e.name})).includes(t.trim()))return alert('"'.concat(t.trim(),'" is already in contacts'));if(n.map((function(e){return e.number})).includes(c.trim()))return alert('"'.concat(c.trim(),'" is already in contacts'));var r={id:Object(F.a)(),name:t,number:c};a([].concat(Object(d.a)(n),[r]))}}),Object(A.jsx)("br",{}),Object(A.jsx)(Z,{})]}),Object(A.jsxs)("div",{className:"contactsSection",children:[Object(A.jsx)("h2",{className:"contactsSectionTitle",children:"Contacts"}),Object(A.jsx)(H,{})]})]})}var M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(o.a,{store:L.store,children:Object(A.jsx)(S.a,{loading:null,persistor:L.persistor,children:Object(A.jsx)(K,{})})})}),document.getElementById("root")),M()},6:function(e,t,n){e.exports={formLabel:"Form_formLabel__3jeHL",formInput:"Form_formInput__3owpU",formBtn:"Form_formBtn__htgy9"}},9:function(e,t,n){e.exports={contactItem:"ContactListItem_contactItem__XjTRF",contactName:"ContactListItem_contactName__3Jadc",deleteContactBtn:"ContactListItem_deleteContactBtn__3NQr_"}}},[[36,1,2]]]);
//# sourceMappingURL=main.13f1e91c.chunk.js.map
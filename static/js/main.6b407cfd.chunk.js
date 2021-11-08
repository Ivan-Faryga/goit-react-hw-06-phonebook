(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports={filterInputLabel:"Filter_filterInputLabel__3rmJo",filterInput:"Filter_filterInput___45WS"}},18:function(t,e,n){t.exports={contactsList:"ContactList_contactsList__1rr6X"}},32:function(t,e,n){},34:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(9),i=n.n(r),o=n(3),s=n(2),l=n(5),u=n(16),b=n.n(u),m=n(4),d=n(19),j=Object(l.b)({name:"contacts",initialState:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],reducers:{addContact:function(t,e){return[].concat(Object(d.a)(t),[e.payload])},deleteContact:function(t,e){return t.filter((function(t){return t.id!==e.payload}))}}}),f=j.actions,O=f.addContact,p=f.deleteContact,h=j.reducer,x=Object(l.b)({name:"contacts",initialState:"",reducers:{filterContact:function(t,e){return e.payload}}}),C=x.actions.filterContact,_=x.reducer,N={key:"contacts",storage:b.a},v=Object(s.b)({contacts:h,filter:_}),L=Object(m.g)(N,v),g=Object(l.a)({reducer:L,middleware:Object(l.c)({serializableCheck:{ignoredActions:[m.a,m.f,m.b,m.c,m.d,m.e]}}),devTools:!0}),I={store:g,persistor:Object(m.h)(g)},y=n(17),F=(n(32),n(14)),S=n(37),k=n(6),w=n.n(k),B=n(1);function A(){var t=Object(c.useState)(""),e=Object(F.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),i=Object(F.a)(r,2),s=i[0],l=i[1],u=Object(o.b)(),b=Object(o.c)((function(t){return t.contacts})),m=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":l(c);break;default:return}},d=function(){a(""),l("")},j=Object(S.a)(),f=Object(S.a)();return Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={name:n,number:s,id:Object(S.a)()};return b.map((function(t){return t.name})).includes(n.trim())?alert('"'.concat(n.trim(),'" is already in contacts')):b.map((function(t){return t.number})).includes(s.trim())?alert('phone number "'.concat(s.trim(),'" is already in contacts')):(u(O(e)),void d())},children:[Object(B.jsx)("label",{htmlFor:j,className:w.a.formLabel,children:"Name"}),Object(B.jsx)("br",{}),Object(B.jsx)("input",{id:j,type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,className:w.a.formInput}),Object(B.jsx)("br",{}),Object(B.jsx)("label",{htmlFor:f,className:w.a.formLabel,children:"Number"}),Object(B.jsx)("br",{}),Object(B.jsx)("input",{id:f,type:"tel",name:"number",value:s,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,className:w.a.formInput}),Object(B.jsx)("br",{}),Object(B.jsx)("button",{type:"submit",className:w.a.formBtn,children:"add"})]})}var T=n(8),z=n.n(T),D=function(t){var e=t.id,n=t.name,c=t.number,a=t.onDelete;return Object(B.jsxs)("li",{className:z.a.contactItem,children:[Object(B.jsxs)("p",{className:z.a.contactName,children:[n,": ",Object(B.jsx)("span",{className:z.a.contactNumber,children:c})]}),Object(B.jsx)("button",{className:z.a.deleteContactBtn,type:"button",onClick:function(){return a(e)},children:"Delete"})]})},J=n(18),P=n.n(J),Z=function(){var t=Object(o.c)((function(t){return t.contacts})),e=Object(o.c)((function(t){return t.filter})),n=Object(o.b)();return Object(B.jsx)("ul",{className:P.a.contactsList,children:function(t,e){var n=e.toLocaleLowerCase().trim();return t.filter((function(t){return t.name.toLocaleLowerCase().trim().includes(n)}))}(t,e).map((function(t){return Object(B.jsx)(D,{id:t.id,name:t.name,number:t.number,onDelete:function(){return n(p(t.id))}},t.id)}))})},q=(n(34),n(13)),E=n.n(q),H=function(){var t=Object(o.b)(),e=Object(o.c)((function(t){return t.filter}));return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("label",{className:E.a.filterInputLabel,children:"Find contacts by name"}),Object(B.jsx)("br",{}),Object(B.jsx)("input",{className:E.a.filterInput,type:"text",name:"filter",value:e,onChange:function(e){return t(C(e.target.value))},placeholder:"Contact"})]})};function M(){return Object(B.jsxs)("div",{className:"App",children:[Object(B.jsxs)("div",{className:"InputWrapper",children:[Object(B.jsx)("h1",{className:"inputTitle",children:"Phonebook"}),Object(B.jsx)(A,{}),Object(B.jsx)("br",{}),Object(B.jsx)(H,{})]}),Object(B.jsxs)("div",{className:"contactsSection",children:[Object(B.jsx)("h2",{className:"contactsSectionTitle",children:"Contacts"}),Object(B.jsx)(Z,{})]})]})}var R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),a(t),r(t),i(t)}))};i.a.render(Object(B.jsx)(a.a.StrictMode,{children:Object(B.jsx)(o.a,{store:I.store,children:Object(B.jsx)(y.a,{loading:null,persistor:I.persistor,children:Object(B.jsx)(M,{})})})}),document.getElementById("root")),R()},6:function(t,e,n){t.exports={formLabel:"Form_formLabel__3jeHL",formInput:"Form_formInput__3owpU",formBtn:"Form_formBtn__htgy9"}},8:function(t,e,n){t.exports={contactItem:"ContactListItem_contactItem__XjTRF",contactName:"ContactListItem_contactName__3Jadc",deleteContactBtn:"ContactListItem_deleteContactBtn__3NQr_"}}},[[35,1,2]]]);
//# sourceMappingURL=main.6b407cfd.chunk.js.map
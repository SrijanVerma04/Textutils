(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),o=a.n(r),c=(a(13),a(1));a(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home"))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode")))))}function m(e){var t=Object(n.useState)(""),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-1",onClick:function(){var t=r.toUpperCase();o(t),e.showAlert("Converted to Upper Case!","success")}},"Convert to UpperCase"),l.a.createElement("button",{className:"btn btn-secondary mx-1",onClick:function(){var t=r.toLowerCase();o(t),e.showAlert("Converted to Lower Case!","success")}},"Convert to LowerCase"),l.a.createElement("button",{className:"btn btn-danger mx-1",onClick:function(){o(""),e.showAlert("Text Cleared!","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-warning mx-1",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard!","success")}},"Copy All")),l.a.createElement("div",{className:"container my-5",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h3",null,"Your text summary"),l.a.createElement("p",null," ",r.split(" ").length," Words and ",r.length," Characters"),l.a.createElement("h4",null,"Preview"),l.a.createElement("p",null,r.length>0?r:"Enter something in the TextBox above to preview something")))}function i(e){return e.alert&&l.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null," ",function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)," ")," : ",e.alert.msg)}s.defaultProps={title:"Set title here",aboutText:"about text here"};var u=function(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],r=t[1],o=function(e,t){r({msg:e,type:t}),setTimeout(function(){r(null)},1500)},u=Object(n.useState)("light"),d=Object(c.a)(u,2),b=d[0],g=d[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",aboutText:"About",mode:b,toggleMode:function(){"light"===b?(g("dark"),document.body.style.backgroundColor="#0b387b",o("Dark mode has been enabled","success")):(g("light"),document.body.style.backgroundColor="white",o("Light mode has been enabled","success"))}}),l.a.createElement(i,{alert:a}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(m,{showAlert:o,heading:"Enter the text here",mode:b})))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,18)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,t,a){e.exports=a(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.ef4b4e23.chunk.js.map
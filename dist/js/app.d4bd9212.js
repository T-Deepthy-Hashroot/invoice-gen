(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],o[r]&&f.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var c=s[i];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var d=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"07c9":function(t,e,s){"use strict";var a=s("c618"),o=s.n(a);o.a},"11d5":function(t,e,s){},"1c13":function(t,e,s){"use strict";var a=s("11d5"),o=s.n(a);o.a},"3a3d":function(t,e,s){"use strict";var a=s("a657"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d"),s("f9e3"),s("2dd8");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("AppNavigation"),s("b-container",{staticClass:"background-color",attrs:{fluid:""}},[s("b-col",[s("b-container",{ref:"content"},[s("Header"),s("Table"),s("Footer")],1)],1)],1)],1)},n=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-row",[s("b-col",{staticClass:"mt-5",attrs:{sm:"6"}},[s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{class:t.validation?"border-red":"",attrs:{id:"id1",size:"sm",placeholder:"Your company name"},model:{value:t.cdetails[0].cname,callback:function(e){t.$set(t.cdetails[0],"cname",e)},expression:"cdetails[0].cname"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id4",size:"sm",placeholder:"Address"},model:{value:t.cdetails[0].address,callback:function(e){t.$set(t.cdetails[0],"address",e)},expression:"cdetails[0].address"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id5",size:"sm",placeholder:"Phone Number"},model:{value:t.cdetails[0].phno,callback:function(e){t.$set(t.cdetails[0],"phno",e)},expression:"cdetails[0].phno"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id6",size:"sm",placeholder:"Your Email id"},model:{value:t.cdetails[0].email,callback:function(e){t.$set(t.cdetails[0],"email",e)},expression:"cdetails[0].email"}})],1),1==t.status?[s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{class:t.validation?"border-red":"",attrs:{id:"id8",size:"sm",placeholder:"GST Number"},model:{value:t.cdetails[0].gst_no,callback:function(e){t.$set(t.cdetails[0],"gst_no",e)},expression:"cdetails[0].gst_no"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{class:t.validation?"border-red":"",attrs:{id:"id7",size:"sm",placeholder:"State Code"},model:{value:t.cdetails[0].state_code,callback:function(e){t.$set(t.cdetails[0],"state_code",e)},expression:"cdetails[0].state_code"}})],1)]:t._e()],2),s("b-col",{attrs:{sm:"6"}},[s("h3",{staticClass:"mt-2",domProps:{innerHTML:t._s(t.status?"TAX INVOICE":"INVOICE")}},[t._v("TAX INVOICE")]),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("datepicker",{attrs:{placeholder:"Select Date",format:"dd MMM yyyy"},model:{value:t.cldetails[0].date,callback:function(e){t.$set(t.cldetails[0],"date",e)},expression:"cldetails[0].date"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id2",size:"sm",placeholder:"Invoice Number"},model:{value:t.cldetails[0].ino,callback:function(e){t.$set(t.cldetails[0],"ino",e)},expression:"cldetails[0].ino"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{class:t.validation?"border-red":"",attrs:{id:"id4",size:"sm",placeholder:"Name"},model:{value:t.cldetails[0].name,callback:function(e){t.$set(t.cldetails[0],"name",e)},expression:"cldetails[0].name"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id5",size:"sm",placeholder:"Client Company Name"},model:{value:t.cldetails[0].clname,callback:function(e){t.$set(t.cldetails[0],"clname",e)},expression:"cldetails[0].clname"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id3",size:"sm",placeholder:"Address"},model:{value:t.cldetails[0].address,callback:function(e){t.$set(t.cldetails[0],"address",e)},expression:"cldetails[0].address"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id3",size:"sm",placeholder:"Pin Code"},model:{value:t.cldetails[0].po,callback:function(e){t.$set(t.cldetails[0],"po",e)},expression:"cldetails[0].po"}})],1),1==t.status?[s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{attrs:{id:"id7",size:"sm",placeholder:"GST Number"},model:{value:t.cldetails[0].gst_no,callback:function(e){t.$set(t.cldetails[0],"gst_no",e)},expression:"cldetails[0].gst_no"}})],1),s("b-input-group",{staticClass:"mt-2",attrs:{size:"sm"}},[s("b-form-input",{class:t.validation?"border-red":"",attrs:{id:"id6",size:"sm",placeholder:"State Code"},model:{value:t.cldetails[0].state_code,callback:function(e){t.$set(t.cldetails[0],"state_code",e)},expression:"cldetails[0].state_code"}})],1)]:t._e()],2)],1),s("b-row",[s("b-col",[s("b-form-checkbox",{staticClass:"mb-2 mt-3",attrs:{name:"checkbox-1"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[t._v("\n        Tax Invoice\n      ")])],1)],1),s("b-row",{staticClass:"mt-2"},[s("b-col",[s("vue-editor",{attrs:{id:"editor",placeholder:"Enter your message","editor-toolbar":t.customToolbar},model:{value:t.text1,callback:function(e){t.text1=e},expression:"text1"}})],1)],1)],1)},i=[],c=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),l=s("2f62"),d=s("fa33"),u=s("5873");function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function b(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(s,!0).forEach(function(e){Object(c["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var p={computed:b({},Object(l["d"])("invoice",["validation","cldetails","cdetails"]),{status:{get:function(){return this.$store.state.invoice.status},set:function(t){this.setState({state:"status",value:t})}}}),components:{Datepicker:d["a"],VueEditor:u["a"]},data:function(){return{text1:"Thanks for your service",customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}]]}},methods:b({},Object(l["c"])("invoice",["setState"]))},m=p,g=(s("3a3d"),s("2877")),v=Object(g["a"])(m,r,i,!1,null,null,null),x=v.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-row",{staticClass:"ml-auto"},[s("b-col",{staticClass:"p-4"},[s("b-button",{staticClass:"float-right ml-4",attrs:{variant:"danger"},on:{click:function(e){return t.removeLastItem()}}},[t._v("- Delete row")]),s("b-button",{staticClass:"float-right",attrs:{variant:"success"},on:{click:function(e){return t.addItemToTable()}}},[t._v("+\n        Add row")])],1)],1),s("b-row",{staticClass:"mt-2"},[s("table",{staticClass:"table table-striped table-hover"},[s("thead",[s("tr",[s("th",[t._v("Index")]),s("th",[t._v("HSN/SAC")]),s("th",[t._v("Item Description")]),s("th",[t._v("Quantity")]),s("th",[t._v("Unit Price")]),s("th",[t._v("Total")])])]),s("tbody",t._l(t.items,function(e,a){return s("tr",{key:a},[s("td",[t._v(t._s(a+1))]),s("td",[s("b-form-input",{model:{value:e.sn,callback:function(s){t.$set(e,"sn",s)},expression:"item.sn"}})],1),s("td",{staticClass:"item-table__item"},[s("b-form-input",{model:{value:e.item,callback:function(s){t.$set(e,"item",s)},expression:"item.item"}})],1),s("td",[s("b-form-input",{on:{input:function(e){return t.changeData(a)}},model:{value:e.qty,callback:function(s){t.$set(e,"qty",s)},expression:"item.qty"}})],1),s("td",[s("b-form-input",{on:{input:function(e){return t.changeData(a)}},model:{value:e.up,callback:function(s){t.$set(e,"up",s)},expression:"item.up"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:e.tot,callback:function(s){t.$set(e,"tot",s)},expression:"item.tot"}})],1)])}),0),s("tfoot",[s("tr",[s("td",{attrs:{colspan:"4"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].discountText,callback:function(e){t.$set(t.footer[0],"discountText",e)},expression:"footer[0].discountText"}})],1),s("td",[s("b-form-input",{model:{value:t.footer[0].discountPercentage,callback:function(e){t.$set(t.footer[0],"discountPercentage",e)},expression:"footer[0].discountPercentage"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].discount,callback:function(e){t.$set(t.footer[0],"discount",e)},expression:"footer[0].discount"}})],1)]),s("tr",[s("td",{attrs:{colspan:"5"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].subTotalText,callback:function(e){t.$set(t.footer[0],"subTotalText",e)},expression:"footer[0].subTotalText"}})],1),s("td",[s("b-form-input",{class:t.validation?"border-red":"",attrs:{disabled:""},model:{value:t.footer[0].newsubTotal,callback:function(e){t.$set(t.footer[0],"newsubTotal",e)},expression:"footer[0].newsubTotal"}})],1)]),t.cdetails[0].state_code==t.cldetails[0].state_code&&t.cdetails[0].gst_no&&t.cldetails[0].gst_no&&1==t.status?[s("tr",[s("td",{attrs:{colspan:"4"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].sgstText,callback:function(e){t.$set(t.footer[0],"sgstText",e)},expression:"footer[0].sgstText"}})],1),s("td",[s("b-form-input",{model:{value:t.footer[0].sgstPercentage,callback:function(e){t.$set(t.footer[0],"sgstPercentage",e)},expression:"footer[0].sgstPercentage"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].sgst,callback:function(e){t.$set(t.footer[0],"sgst",e)},expression:"footer[0].sgst"}})],1)]),s("tr",[s("td",{attrs:{colspan:"4"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].cgstText,callback:function(e){t.$set(t.footer[0],"cgstText",e)},expression:"footer[0].cgstText"}})],1),s("td",[s("b-form-input",{model:{value:t.footer[0].cgstPercentage,callback:function(e){t.$set(t.footer[0],"cgstPercentage",e)},expression:"footer[0].cgstPercentage"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].cgst,callback:function(e){t.$set(t.footer[0],"cgst",e)},expression:"footer[0].cgst"}})],1)])]:t.cdetails[0].state_code!=t.cldetails[0].state_code&&t.cdetails[0].gst_no&&1==t.status?[s("tr",[s("td",{attrs:{colspan:"4"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].igstText,callback:function(e){t.$set(t.footer[0],"igstText",e)},expression:"footer[0].igstText"}})],1),s("td",[s("b-form-input",{model:{value:t.footer[0].igstPercentage,callback:function(e){t.$set(t.footer[0],"igstPercentage",e)},expression:"footer[0].igstPercentage"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].igst,callback:function(e){t.$set(t.footer[0],"igst",e)},expression:"footer[0].igst"}})],1)])]:32==t.cldetails[0].state_code&&32==t.cdetails[0].state_code&&!t.cldetails[0].gst_no&&t.cdetails[0].gst_no&&1==t.status?[s("tr",[s("td",{attrs:{colspan:"4"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].kfcText,callback:function(e){t.$set(t.footer[0],"kfcText",e)},expression:"footer[0].kfcText"}})],1),s("td",[s("b-form-input",{model:{value:t.footer[0].kfcPercentage,callback:function(e){t.$set(t.footer[0],"kfcPercentage",e)},expression:"footer[0].kfcPercentage"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].kfc,callback:function(e){t.$set(t.footer[0],"kfc",e)},expression:"footer[0].kfc"}})],1)]),s("tr",[s("td",{attrs:{colspan:"4"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].sgstText,callback:function(e){t.$set(t.footer[0],"sgstText",e)},expression:"footer[0].sgstText"}})],1),s("td",[s("b-form-input",{model:{value:t.footer[0].sgstPercentage,callback:function(e){t.$set(t.footer[0],"sgstPercentage",e)},expression:"footer[0].sgstPercentage"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].sgst,callback:function(e){t.$set(t.footer[0],"sgst",e)},expression:"footer[0].sgst"}})],1)]),s("tr",[s("td",{attrs:{colspan:"4"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].cgstText,callback:function(e){t.$set(t.footer[0],"cgstText",e)},expression:"footer[0].cgstText"}})],1),s("td",[s("b-form-input",{on:{input:t.findcgst},model:{value:t.footer[0].cgstPercentage,callback:function(e){t.$set(t.footer[0],"cgstPercentage",e)},expression:"footer[0].cgstPercentage"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].cgst,callback:function(e){t.$set(t.footer[0],"cgst",e)},expression:"footer[0].cgst"}})],1)])]:t._e(),s("tr",[s("td",{attrs:{colspan:"5"}},[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].grandTotalText,callback:function(e){t.$set(t.footer[0],"grandTotalText",e)},expression:"footer[0].grandTotalText"}})],1),s("td",[s("b-form-input",{attrs:{disabled:""},model:{value:t.footer[0].grandTotal,callback:function(e){t.$set(t.footer[0],"grandTotal",e)},expression:"footer[0].grandTotal"}})],1)])],2)])])],1)},h=[];function y(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function _(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?y(s,!0).forEach(function(e){Object(c["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):y(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var k={components:{Datepicker:d["a"],VueEditor:u["a"]},computed:_({},Object(l["d"])("invoice",["status","validation","footer","cldetails","cdetails","items"])),watch:{footer:{deep:!0,handler:function(){this.findAllTax()}},cldetails:{deep:!0,handler:function(){this.findAllTax()}},cdetails:{deep:!0,handler:function(){this.findAllTax()}},items:{deep:!0,handler:function(){this.findAllTax()}}},methods:_({},Object(l["b"])("invoice",["findAllTax","changeData"]),{},Object(l["c"])("invoice",["addItemToTable","removeLastItem"]))},O=k,P=(s("07c9"),Object(g["a"])(O,T,h,!1,null,null,null)),w=P.exports,S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-row",{staticClass:"mt-2"},[s("b-col",[s("vue-editor",{attrs:{id:"editor",placeholder:"Enter your message","editor-toolbar":t.customToolbar},model:{value:t.text2,callback:function(e){t.text2=e},expression:"text2"}})],1)],1),t._m(0)],1)},$=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mt-2",attrs:{align:"center"}},[t._v("© Copyright 2019 "),s("a",{attrs:{href:"https://redpanthers.co"}},[t._v("Red Panthers Software Solutions")]),t._v(" Pvt Ltd.")])}],j={data:function(){return{text2:"Payment terms: to be received in 5 days",customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}]]}}},C=j,D=(s("bfea"),Object(g["a"])(C,S,$,!1,null,null,null)),z=D.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-navbar",{attrs:{type:"dark",variant:"info"}},[s("b-navbar-brand",{attrs:{href:"#"}},[t._v("This is a free "),s("strong",[t._v("GST")]),t._v(" invoice\n      generator")]),s("b-navbar-nav",{staticClass:"ml-auto"},[s("b-button",{attrs:{variant:"light"},on:{click:function(e){return t.generatePdf()}}},[t._v("Generate PDF")])],1)],1)],1)},E=[];function I(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function A(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?I(s,!0).forEach(function(e){Object(c["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):I(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var F={methods:A({},Object(l["b"])("invoice",["generatePdf"]))},J=F,G=(s("8d89"),Object(g["a"])(J,N,E,!1,null,null,null)),M=G.exports,q={components:{Header:x,Table:w,Footer:z,AppNavigation:M}},L=q,H=(s("1c13"),Object(g["a"])(L,o,n,!1,null,null,null)),V=H.exports,Q=(s("7f7f"),{findAllTax:function(t){var e=t.dispatch;e("findDiscount"),e("findcgst"),e("findsgst"),e("findigst"),e("findkfc"),e("findGrandTotal")},findDiscount:function(t){var e=t.state,s=t.commit,a=e.footer;if(e.footer[0].discountPercentage>100||e.footer[0].discountPercentage<0)a[0].discountPercentage=0;else{var o=a[0].discountPercentage/100*a[0].subTotal;a[0].discount=o.toFixed(2),a[0].newsubTotal=a[0].subTotal-a[0].discount}s("setState",{state:"footer",value:a})},findcgst:function(t){var e=t.state,s=t.commit,a=e.footer;if(e.cdetails[0].state_code==e.cldetails[0].state_code&&e.cdetails[0].gst_no&&e.cldetails[0].gst_no||32==e.cldetails[0].state_code&&!e.cldetails[0].gst_no){var o=a[0].cgstPercentage/100*a[0].newsubTotal;a[0].cgst=o.toFixed(2)}s("setState",{state:"footer",value:a})},findsgst:function(t){var e=t.state,s=t.commit,a=e.footer;if(e.cdetails[0].state_code==e.cldetails[0].state_code&&e.cdetails[0].gst_no&&e.cldetails[0].gst_no||32==e.cldetails[0].state_code&&!e.cldetails[0].gst_no){var o=a[0].sgstPercentage/100*a[0].newsubTotal;a[0].sgst=o.toFixed(2)}s("setState",{state:"footer",value:a})},findigst:function(t){var e=t.state,s=t.commit,a=e.footer;if(e.cdetails[0].state_code!=e.cldetails[0].state_code&&e.cdetails[0].gst_no&&e.cldetails[0].gst_no){var o=a[0].igstPercentage/100*a[0].newsubTotal;a[0].igst=o.toFixed(2)}s("setState",{state:"footer",value:a})},findkfc:function(t){var e=t.state,s=t.commit,a=e.footer;if(32==e.cldetails[0].state_code&&!e.cldetails[0].gst_no){var o=a[0].kfcPercentage/100*a[0].newsubTotal;a[0].kfc=o.toFixed(2)}s("setState",{state:"footer",value:a})},findGrandTotal:function(t){var e=t.state,s=t.commit,a=e.footer,o=parseFloat(a[0].newsubTotal)+parseFloat(a[0].igst)+parseFloat(a[0].sgst)+parseFloat(a[0].cgst)+parseFloat(a[0].kfc);a[0].grandTotal=o.toFixed(2),s("setState",{state:"footer",value:a})},changeData:function(t,e){var s=t.state,a=t.commit,o=s.footer;s.items[e].qty&&s.items[e].up&&(s.items[e].tot=s.items[e].qty*s.items[e].up);var n=0;s.items.map(function(t){n+=t.tot}),o[0].subTotal=n.toFixed(2),a("setState",{state:"footer",value:o})},generatePdf:function(t){var e=t.state;if(U(e)){var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1,a="/invoice/invoice.pdf?cdetails=".concat(JSON.stringify(e.cdetails),"&cldetails=").concat(JSON.stringify(e.cldetails),"&items=").concat(JSON.stringify(e.items),"&text1=").concat(JSON.stringify(e.text1),"&text2=").concat(JSON.stringify(e.text2),"&footer=").concat(JSON.stringify(e.footer),"&status=").concat(JSON.stringify(e.status));if(s){var o=document.createElement("a");o.href=a,o.click()}else e.validation=!1,window.open("/invoice/invoice.pdf?cdetails=".concat(JSON.stringify(e.cdetails),"&cldetails=").concat(JSON.stringify(e.cldetails),"&items=").concat(JSON.stringify(e.items),"&text1=").concat(JSON.stringify(e.text1),"&text2=").concat(JSON.stringify(e.text2),"&footer=").concat(JSON.stringify(e.footer),"&status=").concat(JSON.stringify(e.status)))}else window.alert("Missing fields"),e.validation=!0}}),U=function(t){return 1==t.status?0!=t.items.length&&0!=t.footer[0].subTotal&&t.cdetails[0].state_code&&t.cldetails[0].state_code&&t.cdetails[0].gst_no&&t.cdetails[0].cname&&t.cldetails[0].name:0!=t.items.length&&0!=t.footer[0].subTotal&&t.cdetails[0].cname&&t.cldetails[0].name},X=s("eacf"),Y=s.n(X),K={setState:function(t,e){t[e.state]=e.value},addItemToTable:function(t){var e={sn:"-",item:"",qty:0,up:0,tot:0};t.items.push(e)},removeLastItem:function(t){t.items.pop()}},R={status:!1,validation:!1,fields:["index",{key:"sn",label:"HSN/SAC"},{key:"item",label:"Item Description"},{key:"qty",label:"Quantity"},{key:"up",label:"Unit Price"},{key:"tot",label:"Total"}],items:[{sn:"998434",item:"Software Product",qty:0,up:200,tot:0}],cdetails:[{cname:"",street:"",town:"",address:"",phno:"",email:"",state_code:"",gst_no:""}],cldetails:[{date:new Date,ino:"",po:"",name:"",clname:"",state_code:"",gst_no:"",address:""}],text1:"Thanks for your service",text2:"Payment terms: to be received in 5 days",customToolbar:[["bold","italic","underline"],[{list:"ordered"},{list:"bullet"}]],footer:[{subTotalText:"Sub Total",subTotal:0,newsubTotal:0,discountText:"Discount",discount:0,discountPercentage:0,cgstText:"CGST",cgstPercentage:9,cgst:0,sgstText:"SGST",sgstPercentage:9,sgst:0,igstText:"IGST",igstPercentage:18,igst:0,kfcText:"KFC",kfcPercentage:1,kfc:0,grandTotalText:"Grand Total",grandTotal:0}]},B={namespaced:!0,state:R,getters:Y.a,actions:Q,mutations:K};a["default"].use(l["a"]);var W=new l["a"].Store({modules:{invoice:B}}),Z=s("5f5b");a["default"].use(Z["a"]),a["default"].use(u["b"]),document.addEventListener("DOMContentLoaded",function(){new a["default"]({render:function(t){return t(V)},el:"#app",store:W})})},"8a04":function(t,e,s){},"8d89":function(t,e,s){"use strict";var a=s("b65a"),o=s.n(a);o.a},a657:function(t,e,s){},b65a:function(t,e,s){},bfea:function(t,e,s){"use strict";var a=s("8a04"),o=s.n(a);o.a},c618:function(t,e,s){},eacf:function(t,e){}});
//# sourceMappingURL=app.d4bd9212.js.map
webpackJsonp([17],{677:function(t,s,a){function e(t){a(919)}var r=a(9)(a(839),a(992),e,null,null);t.exports=r.exports},839:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{toolbar:!1}},mounted:function(){window.addEventListener("scroll",this.onScroll,{passive:!0})},beforeDestroy:function(){window.removeEventListener("scroll",this.onScroll,{passive:!0})},methods:{onScroll:function(){this.toolbar=window.scrollY>0}}}},874:function(t,s,a){s=t.exports=a(451)(void 0),s.push([t.i,"#home-view .toolbar--home{background:#132563}#home-view #support a{text-decoration:none}#home-view #hero .btn{width:190px}#home-view div.grey--text{line-height:2}#features .card__column.transparent{height:150px!important}",""])},919:function(t,s,a){var e=a(874);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);a(452)("4aa4d288",e,!0)},992:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"home-view"}},[a("v-toolbar",{class:[t.toolbar?"toolbar--home":"transparent elevation-0"],attrs:{fixed:"fixed"}},[a("img",{attrs:{src:"/static/v.png",height:"38px"}}),a("v-spacer"),a("v-toolbar-items",[a("v-toolbar-item",{attrs:{to:"/vuetify/quick-start",router:"router"}},[a("span",{staticClass:"subheading"},[t._v("Documentation")])]),a("v-toolbar-item",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases",target:"_blank"}},[a("span",{staticClass:"subheading"},[t._v("Updates")])])],1)],1),a("section",{staticClass:"elevation-12",attrs:{id:"hero"}},[a("v-parallax",{attrs:{src:"/static/doc-images/vbanner.jpg",height:"400"}},[a("v-layout",{attrs:{row:"row","align-vert-center":"align-vert-center","align-horiz-center":"align-horiz-center"}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"xs12"}},[a("h1",{staticClass:"grey--text text--lighten-4 display-2"},[t._v("Vuetify.js")]),a("div",{staticClass:"grey--text text--lighten-4 headline hidden-xs-only"},[t._v("Material Component Framework")]),a("div",{staticClass:"mt-5"},[a("v-btn",{staticClass:"grey lighten-2",attrs:{large:"large",tag:"a",href:"https://github.com/vuetifyjs/vuetify"}},[a("v-icon",{attrs:{fa:"fa",left:"left",medium:"medium"}},[t._v("github")]),a("span",[t._v("Github")])],1),a("v-btn",{staticClass:"green lighten-2",attrs:{light:"light",large:"large",router:"router",href:"/vuetify/quick-start"}},[a("span",[t._v("Get Started")]),a("v-icon",{attrs:{right:"right",light:"light"}},[t._v("chevron_right")])],1)],1)])],1)],1)],1),a("section",{staticClass:"text-xs-center pa-5",attrs:{id:"development"}},[a("v-container",{attrs:{fluid:"fluid"}},[a("v-layout",{attrs:{row:"row"}},[a("v-flex",{attrs:{xs12:"xs12"}},[a("img",{staticStyle:{"max-width":"1024px"},attrs:{src:"static/doc-images/featured.png",width:"100%"}})])],1)],1),a("h2",{staticClass:"display-2"},[t._v("Supercharge your Development")]),a("span",{staticClass:"headline"},[t._v("With the power of Vue and Material Design")])],1),a("v-divider"),a("section",{staticClass:"pb-5 pt-3",attrs:{id:"features"}},[a("v-container",{staticStyle:{"max-width":"1024px"}},[a("v-layout",{attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{staticClass:"my-5",attrs:{sm12:"sm12"}},[a("v-layout",{attrs:{row:"row"}},[a("v-flex",{attrs:{xs12:"xs12",sm6:"sm6",layout:"layout",row:"row","align-end":"align-end","justify-center":"justify-center"}},[a("v-card",{staticClass:"transparent elevation-0 pa-3"},[a("v-card-title",{staticClass:"pl-0 pt-0"},[t._v("Premade Templates")]),a("div",{staticClass:"grey--text text--darken-1"},[t._v("Vuetify comes ready to go with 5 pre-made vue-cli templates. Ranging from a simple html to a full blown SSR (server side rendered) application. No matter what the project, you are ready to go in minutes with your next great idea.")])],1)],1),a("v-flex",{staticClass:"hidden-xs-only",attrs:{xs6:"xs6"}},[a("v-card",{attrs:{height:"280px",img:"/static/vuetify_cli.svg"}})],1)],1)],1),a("v-flex",{staticClass:"my-5",attrs:{sm12:"sm12"}},[a("v-layout",{attrs:{row:"row"}},[a("v-flex",{staticClass:"hidden-xs-only",attrs:{xs6:"xs6"}},[a("v-card",{attrs:{height:"280px",img:"/static/vuetify_layout2.svg"}})],1),a("v-flex",{attrs:{xs12:"xs12",sm6:"sm6",layout:"layout",row:"row","align-end":"align-end","justify-center":"justify-center"}},[a("v-card",{staticClass:"transparent elevation-0 pa-3"},[a("v-card-title",{staticClass:"pl-0 pt-0"},[t._v("Custom layouts")]),a("div",{staticClass:"grey--text text--darken-1"},[t._v("Each and every available layout from the Material design spec is at your disposal. Create unique and flexible user interfaces that fit the scope of any task.")])],1)],1)],1)],1),a("v-flex",{staticClass:"my-5",attrs:{sm12:"sm12"}},[a("v-layout",{attrs:{row:"row"}},[a("v-flex",{attrs:{xs12:"xs12",sm6:"sm6",layout:"layout",row:"row","align-start":"align-start","justify-center":"justify-center"}},[a("v-card",{staticClass:"transparent elevation-0 pa-3"},[a("v-card-title",{staticClass:"pl-0 pt-0"},[t._v("Semantic components")]),a("div",{staticClass:"grey--text text--darken-1"},[t._v("Every component has been meticulously crafted to offer the easiest, most understandable interface and robust api of properties that will customize the experience delivered in your next application.")])],1)],1),a("v-flex",{staticClass:"hidden-xs-only",attrs:{xs6:"xs6"}},[a("v-card",{attrs:{height:"280px",img:"/static/vuetify_semantic.svg"}})],1)],1)],1),a("v-flex",{staticClass:"my-5",attrs:{sm12:"sm12"}},[a("v-layout",{attrs:{row:"row"}},[a("v-flex",{staticClass:"hidden-xs-only",attrs:{xs6:"xs6"}},[a("v-card",{attrs:{height:"280px",img:"/static/vuetify_sizes.svg"}})],1),a("v-flex",{attrs:{xs12:"xs12",sm6:"sm6",layout:"layout",column:"column","align-start":"align-start","justify-center":"justify-center"}},[a("v-card",{staticClass:"transparent elevation-0 pa-3"},[a("v-card-title",{staticClass:"pl-0 pt-0"},[t._v("Material design framework")]),a("div",{staticClass:"grey--text text--darken-1"},[t._v("Be prepared to have an armada of specialized components at your disposal. With over 80 in total, there is a solution for any situation.")])],1)],1)],1)],1)],1)],1)],1),a("v-divider"),a("section",{staticClass:"py-5 mb-0",attrs:{id:"sponsors"}},[a("v-container",{attrs:{fluid:"fluid"}},[a("v-layout",{attrs:{row:"row"}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs10:"xs10","offset-xs1":"offset-xs1"}},[a("h4",{staticClass:"headline text-xs-center mb-5"},[t._v("Vuetify.js is proudly sponsored by")]),a("a",{attrs:{href:"https://www.browserstack.com/"}},[a("img",{attrs:{width:"300px",height:"50px",src:"/static/doc-images/browser-stack.svg"}})])])],1)],1)],1),a("section",{staticClass:"py-5 grey lighten-4 mb-0",attrs:{id:"support"}},[a("v-container",{attrs:{fluid:"fluid"}},[a("v-layout",{staticClass:"text-xs-center",attrs:{row:"row",wrap:"wrap"}},[a("v-flex",{staticClass:"mb-5",attrs:{xs12:"xs12"}},[a("h4",{staticClass:"headline pb-3"},[t._v("Support Vuetify.js")]),a("p",[t._v("Has Vuetify helped you create an amazing application? You can show your support by making a donation in one of two ways:")])]),a("v-flex",{staticClass:"mb-3",attrs:{xs12:"xs12",sm6:"sm6"}},[a("a",{staticClass:"dark--text",attrs:{href:"https://www.patreon.com/vuetify",target:"_blank"}},[a("div",{staticClass:"display-1 mb-2"},[t._v("Patreon")]),a("img",{attrs:{src:"/static/doc-images/patreon.png",width:"125px"}})])]),a("v-flex",{staticClass:"mb-3",attrs:{xs12:"xs12",sm6:"sm6"}},[a("a",{staticClass:"dark--text",attrs:{href:"https://paypal.me/vuetify",target:"_blank"}},[a("div",{staticClass:"display-1 mb-2"},[t._v("Paypal")]),a("img",{attrs:{src:"/static/doc-images/paypal.png",width:"125px"}})])])],1)],1)],1),a("v-footer",{staticClass:"secondary white--text"},[a("v-layout",{attrs:{row:"row",flex:"flex"}},[a("v-flex",{attrs:{xs6:"xs6"}},[a("span",[t._v("© "+t._s((new Date).getFullYear())+" John Leider")])]),a("v-flex",{staticClass:"text-xs-right",attrs:{xs6:"xs6"}},[a("span",[t._v("MIT License")])])],1)],1)],1)},staticRenderFns:[]}}});
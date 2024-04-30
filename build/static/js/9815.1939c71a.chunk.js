"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[9815],{57806:function(e,t,a){var n=a(1413),c=a(45987),r=(a(72791),a(34358)),s=a(80184),i=["className","style","children"];t.Z=function(e){var t=e.className,a=e.style,o=e.children,h=(0,c.Z)(e,i);return(0,s.jsx)(r.Z,(0,n.Z)((0,n.Z)({className:t,style:a},h),{},{children:o}))}},95078:function(e,t,a){a.d(t,{S:function(){return r}});var n=a(29439),c=a(72791),r=function(){var e=(0,c.useState)(window.innerWidth),t=(0,n.Z)(e,2),a=t[0],r=t[1],s=(0,c.useState)(window.innerHeight),i=(0,n.Z)(s,2),o=i[0],h=i[1];return(0,c.useEffect)((function(){var e=function(){r(window.innerWidth),h(window.innerHeight)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),{width:a,height:o}}},49815:function(e,t,a){a.r(t),a.d(t,{default:function(){return C}});var n=a(72791),c=a(60364),r=a(50061),s=a(29439),i=a(66973),o=a(95078),h=a(3350),l=a(80184),u=function(e){var t=e.changeLayoutType,a=e.layoutType,n=e.layoutConstants;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Layout"}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return t(e.target.value)},name:"layout-type",value:n.LAYOUT_VERTICAL,id:"vertical-layout",checked:a===n.LAYOUT_VERTICAL}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"vertical-layout",children:"Vertical Layout"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return t(e.target.value)},name:"layout-type",value:n.LAYOUT_HORIZONTAL,id:"horizontal-layout",checked:a===n.LAYOUT_HORIZONTAL}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"horizontal-layout",children:"Horizontal Layout"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return t(e.target.value)},name:"layout-type",value:n.LAYOUT_DETACHED,id:"detached-layout",checked:a===n.LAYOUT_DETACHED}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"detached-layout",children:"Detached Layout"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",onChange:function(e){return t(e.target.value)},name:"layout-type",value:n.LAYOUT_TWO_COLUMN,id:"two-column-layout",checked:a===n.LAYOUT_TWO_COLUMN}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"two-column-layout",children:"Two Column Layout"})]})]})},d=function(e){var t=e.changeWidthMode,a=e.layoutWidth,n=e.layoutConstants;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Width"}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"width",id:"fluid-check",value:n.LAYOUT_WIDTH_FLUID,onChange:function(e){return t(e.target.value)},checked:a===n.LAYOUT_WIDTH_FLUID}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"fluid-check",children:"Fluid"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"width",id:"boxed-check",value:n.LAYOUT_WIDTH_BOXED,onChange:function(e){return t(e.target.value)},checked:a===n.LAYOUT_WIDTH_BOXED}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"boxed-check",children:"Boxed"})]})]})},m=function(e){var t=e.changeMenuPosition,a=e.menuPosition,n=e.layoutConstants;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Menus (Leftsidebar and Topbar) Position"}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"menus-position",id:"fixed-check",value:n.MENU_POSITION_FIXED,onChange:function(e){return t(e.target.value)},checked:a===n.MENU_POSITION_FIXED}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"fixed-check",children:"Fixed"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"menus-position",id:"scrollable-check",value:n.MENU_POSITION_SCROLLABLE,onChange:function(e){return t(e.target.value)},checked:a===n.MENU_POSITION_SCROLLABLE}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"scrollable-check",children:"Scrollable"})]})]})},T=function(e){var t=e.changeLeftSidebarTheme,a=e.leftSideBarTheme,n=e.layoutConstants;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Left Sidebar Color"}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"theme",id:"light-check",value:n.LEFT_SIDEBAR_THEME_LIGHT,onChange:function(e){return t(e.target.value)},checked:a===n.LEFT_SIDEBAR_THEME_LIGHT}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"light-check",children:"Light"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"theme",id:"dark-check",value:n.LEFT_SIDEBAR_THEME_DARK,onChange:function(e){return t(e.target.value)},checked:a===n.LEFT_SIDEBAR_THEME_DARK}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"dark-check",children:"Dark"})]})]})},f=function(e){var t=e.changeLeftSiderbarType,a=e.leftSideBarType,n=e.layoutConstants;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Left Sidebar Size"}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"leftsidebar-size",id:"default-check",value:n.LEFT_SIDEBAR_TYPE_DEFAULT,onChange:function(e){return t(e.target.value)},checked:a===n.LEFT_SIDEBAR_TYPE_DEFAULT}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"default-check",children:"Default"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"leftsidebar-size",id:"condensed-check",value:n.LEFT_SIDEBAR_TYPE_CONDENSED,onChange:function(e){return t(e.target.value)},checked:a===n.LEFT_SIDEBAR_TYPE_CONDENSED}),(0,l.jsxs)(h.Z.Check.Label,{htmlFor:"condensed-check",children:["Condensed ",(0,l.jsx)("small",{children:"(Extra Small size)"})]})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"leftsidebar-size",id:"compact-check",value:n.LEFT_SIDEBAR_TYPE_COMPACT,onChange:function(e){return t(e.target.value)},checked:a===n.LEFT_SIDEBAR_TYPE_COMPACT}),(0,l.jsxs)(h.Z.Check.Label,{htmlFor:"compact-check",children:["Compact ",(0,l.jsx)("small",{children:"(Small size)"})]})]})]})},k=function(e){var t=e.toggleLeftSidebarUserInfo,a=e.showSidebarUserInfo;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Sidebar User Info"}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"checkbox",name:"leftsidebar-user",id:"sidebaruser-check",onChange:function(e){return t(e.target.checked)},checked:a}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"sidebaruser-check",children:"Enable"})]})]})},L=function(e){var t=e.changeTopBarTheme,a=e.topbarTheme,n=e.layoutConstants;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium mt-4 mb-2 pb-1",children:"Topbar"}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"topbar-color",id:"darktopbar-check",value:n.TOPBAR_THEME_DARK,onChange:function(e){return t(e.target.value)},checked:a===n.TOPBAR_THEME_DARK}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"darktopbar-check",children:"Dark"})]}),(0,l.jsxs)(h.Z.Check,{className:"form-check form-switch mb-1",children:[(0,l.jsx)(h.Z.Check.Input,{type:"radio",name:"topbar-color",id:"lighttopbar-check",value:n.TOPBAR_THEME_LIGHT,onChange:function(e){return t(e.target.value)},checked:a===n.TOPBAR_THEME_LIGHT}),(0,l.jsx)(h.Z.Check.Label,{htmlFor:"lighttopbar-check",children:"Light"})]})]})},_=function(){var e=(0,c.I0)(),t=(0,o.S)().width,a=(0,c.v9)((function(e){return{layoutType:e.Layout.layoutType,layoutWidth:e.Layout.layoutWidth,menuPosition:e.Layout.menuPosition,leftSideBarTheme:e.Layout.leftSideBarTheme,leftSideBarType:e.Layout.leftSideBarType,showSidebarUserInfo:e.Layout.showSidebarUserInfo,topbarTheme:e.Layout.topbarTheme}})),h=a.layoutType,_=a.layoutWidth,E=a.menuPosition,C=a.leftSideBarType,b=a.leftSideBarTheme,x=a.showSidebarUserInfo,I=a.topbarTheme,j=(0,n.useState)(!1),p=(0,s.Z)(j,2),y=p[0],O=p[1],g=(0,n.useState)(!1),A=(0,s.Z)(g,2),S=A[0],N=A[1],Z=(0,n.useState)(!1),v=(0,s.Z)(Z,2),D=v[0],w=v[1],F=(0,n.useState)(!1),U=(0,s.Z)(F,2),R=U[0],B=U[1],H=(0,n.useCallback)((function(){O(h!==i.Tj.LAYOUT_TWO_COLUMN),N(h!==i.Tj.LAYOUT_HORIZONTAL),w(h!==i.Tj.LAYOUT_HORIZONTAL&&h!==i.Tj.LAYOUT_TWO_COLUMN&&t>991),B(h!==i.Tj.LAYOUT_HORIZONTAL&&h!==i.Tj.LAYOUT_TWO_COLUMN)}),[h,t]);(0,n.useEffect)((function(){H()}),[H]);var M=function(t){switch(t){case"horizontal":e((0,r.c_)(i.Tj.LAYOUT_HORIZONTAL));break;case"detached":e((0,r.c_)(i.Tj.LAYOUT_DETACHED));break;case"vertical":e((0,r.c_)(i.Tj.LAYOUT_VERTICAL));break;default:e((0,r.c_)(i.Tj.LAYOUT_TWO_COLUMN))}},Y=function(t){if("boxed"===t)e((0,r.kn)(i.ik.LAYOUT_WIDTH_BOXED));else e((0,r.kn)(i.ik.LAYOUT_WIDTH_FLUID))},P=function(t){if("scrollable"===t)e((0,r.LO)(i.AI.MENU_POSITION_SCROLLABLE));else e((0,r.LO)(i.AI.MENU_POSITION_FIXED))},W=function(t){if("dark"===t)e((0,r.$g)(i.Mg.LEFT_SIDEBAR_THEME_DARK));else e((0,r.$g)(i.Mg.LEFT_SIDEBAR_THEME_LIGHT))},z=function(t){switch(t){case"condensed":e((0,r.QY)(i.wJ.LEFT_SIDEBAR_TYPE_CONDENSED));break;case"compact":e((0,r.QY)(i.wJ.LEFT_SIDEBAR_TYPE_COMPACT));break;default:e((0,r.QY)(i.wJ.LEFT_SIDEBAR_TYPE_DEFAULT))}},X=function(t){var a=t;e((0,r.WM)(a))},G=function(t){if("light"===t)e((0,r.XA)(i.IR.TOPBAR_THEME_LIGHT));else e((0,r.XA)(i.IR.TOPBAR_THEME_DARK))};return(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)("h6",{className:"fw-medium px-3 m-0 py-2 text-uppercase bg-light",children:(0,l.jsx)("span",{className:"d-block py-1",children:"Theme Settings"})}),(0,l.jsxs)("div",{className:"p-3",children:[(0,l.jsxs)("div",{className:"alert alert-warning",role:"alert",children:[(0,l.jsx)("strong",{children:"Customize "})," the overall color scheme, sidebar menu, etc."]}),(0,l.jsx)(u,{changeLayoutType:M,layoutType:h,layoutConstants:i.Tj}),(0,l.jsx)(d,{changeWidthMode:Y,layoutWidth:_,layoutConstants:i.ik}),y&&(0,l.jsx)(m,{menuPosition:E,changeMenuPosition:P,layoutConstants:i.AI}),S&&(0,l.jsx)(T,{changeLeftSidebarTheme:W,leftSideBarTheme:b,layoutConstants:i.Mg}),D&&(0,l.jsx)(f,{changeLeftSiderbarType:z,leftSideBarType:C,layoutConstants:i.wJ}),R&&(0,l.jsx)(k,{toggleLeftSidebarUserInfo:X,showSidebarUserInfo:x}),(0,l.jsx)(L,{changeTopBarTheme:G,topbarTheme:I,layoutConstants:i.IR}),(0,l.jsx)("div",{className:"d-grid mt-4",children:(0,l.jsx)("button",{className:"btn btn-primary",id:"resetBtn",onClick:function(){return M(i.Tj.LAYOUT_TWO_COLUMN),Y(i.ik.LAYOUT_WIDTH_FLUID),P(i.AI.MENU_POSITION_FIXED),W(i.Mg.LEFT_SIDEBAR_THEME_LIGHT),X(!1),G(i.IR.TOPBAR_THEME_LIGHT),void z(i.wJ.LEFT_SIDEBAR_TYPE_DEFAULT)},children:"Reset to Default"})})]})]})},E=a(57806),C=function(e){var t=(0,c.I0)(),a=(0,n.useRef)(null),s=(0,c.v9)((function(e){return{isOpenRightSideBar:e.Layout.isOpenRightSideBar}})).isOpenRightSideBar,i=(0,n.useCallback)((function(e){if(s){if(a&&a.current&&a.current.contains(e.target))return;t((0,r.zZ)())}}),[a,t,s]);return(0,n.useEffect)((function(){return document.addEventListener("mousedown",i,!1),function(){document.removeEventListener("mousedown",i,!1)}}),[i]),(0,l.jsxs)(n.Fragment,{children:[(0,l.jsx)("div",{className:"right-bar",ref:a,children:(0,l.jsx)(E.Z,{style:{maxHeight:"100%",zIndex:1e4},timeout:500,scrollbarMaxSize:320,children:(0,l.jsx)(_,{})})}),(0,l.jsx)("div",{className:"rightbar-overlay"})]})}}}]);
//# sourceMappingURL=9815.1939c71a.chunk.js.map
"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[3181],{71605:function(e,s,a){a(72791);var i=a(80184);s.Z=function(){return(0,i.jsx)("div",{className:"preloader",id:"preloader",children:(0,i.jsx)("div",{className:"status",id:"status",children:(0,i.jsxs)("div",{className:"spinner",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})})})}},75184:function(e,s,a){a(72791);var i=a(89743),t=a(2677),l=a(2461),n=a(80184);s.Z=function(e){return(0,n.jsx)(i.Z,{children:(0,n.jsx)(t.Z,{children:(0,n.jsxs)("div",{className:"page-title-box",children:[(0,n.jsx)("h4",{className:"page-title",children:e.title}),(0,n.jsx)("div",{className:"page-title-right",children:(0,n.jsxs)(l.Z,{listProps:{className:"m-0"},children:[(0,n.jsx)(l.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,s){return e.active?(0,n.jsx)(l.Z.Item,{active:!0,children:e.label},s):(0,n.jsx)(l.Z.Item,{href:e.path,children:e.label},s)}))]})})]})})})}},57806:function(e,s,a){var i=a(1413),t=a(45987),l=(a(72791),a(34358)),n=a(80184),r=["className","style","children"];s.Z=function(e){var s=e.className,a=e.style,c=e.children,d=(0,t.Z)(e,r);return(0,n.jsx)(l.Z,(0,i.Z)((0,i.Z)({className:s,style:a},d),{},{children:c}))}},53181:function(e,s,a){a.r(s),a.d(s,{default:function(){return q}});for(var i=a(29439),t=a(72791),l=a(89743),n=a(2677),r=a(75184),c=a(93433),d=a(11087),o=a(9140),m=a(7238),h=a(81694),x=a.n(h),u=a(57806),j=a(59569),f=a(39833),b=a(85569),N=a(35002),p=a(13268),g=a(58951),v=a(68328),Z=a(90469),y=[{id:1,name:"Brandon Smith",avatar:f,lastMessage:"How are you today?",totalUnread:3,lastMessageOn:"5:30am",userStatus:"offline"},{id:2,name:"Maria C",avatar:Z,lastMessage:"Hey! a reminder for tomorrow's meeting?",totalUnread:0,lastMessageOn:"Thu",userStatus:"online"},{id:3,name:"Dominic A",avatar:g,lastMessage:"Are we going to have this week's planning meeting?",totalUnread:0,lastMessageOn:"4:30 am",userStatus:"busy"},{id:4,name:"Ronda D",avatar:v,lastMessage:"Please check these design assets..",totalUnread:0,lastMessageOn:"Wed",userStatus:"online"},{id:5,name:"Michael H",avatar:b,lastMessage:"Are you free for 15 mins? I would like to discuss something",totalUnread:25,lastMessageOn:"Tue",userStatus:"offline"},{id:6,name:"Thomas R",avatar:N,lastMessage:"Let's have meeting today between me, you and Tony...",totalUnread:0,lastMessageOn:"Tue",userStatus:"offline"},{id:7,name:"Thomas J",avatar:p,lastMessage:"How are you?",totalUnread:1,lastMessageOn:"Tue",userStatus:"offline"},{id:8,name:"Rikcy J",avatar:j,lastMessage:"Are you interested in learning?",totalUnread:0,lastMessageOn:"Mon",userStatus:"away"}],w={id:9,name:"Shreyu N",avatar:f},k=[],S=[],M=0,U=y;M<U.length;M++){var I=U[M];k.push({id:1,messages:[{type:"text",value:"Hello!"}],to:w,from:I,sendOn:"8:18 am"},{id:2,messages:[{type:"text",value:"Hi, How are you? What about our next meeting?"}],to:I,from:w,sendOn:"8:20 am"}),S.push({id:1,messages:[{type:"text",value:"Yeah everything is fine"},{type:"text",value:"Let's have it today if you are free"}],to:w,from:I,sendOn:"8:21 am"},{id:2,messages:[{type:"text",value:"Sure thing! let me know if 2pm works for you"}],to:I,from:w,sendOn:"8:25 am"},{id:3,messages:[{type:"text",value:"Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?"}],to:w,from:I,sendOn:"8:26 am"},{id:4,messages:[{type:"text",value:"2pm it is. sure, we can also discuss about the presentation talk format if you have some extra mins"},{type:"text",value:"Sure, let's discuss about presentation format, it would be great to finalize today."}],to:I,from:w,sendOn:"8:27 am"},{id:5,messages:[{type:"text",value:"Ok. I am attaching the last year format and assets here...."},{type:"file",value:{file:"Shreyu-sketch.zip",size:"2.3MB"}}],to:w,from:I,sendOn:"8:32 am"})}var C=[{id:1,day:"Yesterday",messages:[].concat(k)},{id:2,day:"Today",messages:[].concat(S)}],E=a(80184),O=function(e){var s=e.onUserSelect,a=(0,t.useState)((0,c.Z)(y)),l=(0,i.Z)(a,2),n=l[0],r=l[1],h=(0,t.useState)(y[1]),j=(0,i.Z)(h,2),b=j[0],N=j[1],p=(0,t.useState)(!1),g=(0,i.Z)(p,2),v=g[0],Z=g[1],w=function(){Z(!v)};return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(o.Z,{children:(0,E.jsxs)(o.Z.Body,{children:[(0,E.jsxs)("div",{className:"d-flex pb-2 border-bottom align-items-center",children:[(0,E.jsx)("img",{src:f,className:"me-2 rounded-circle",height:"48",alt:""}),(0,E.jsx)("div",{children:(0,E.jsx)("h5",{className:"my-0 fs-14",children:"Shreyu N"})}),(0,E.jsx)("div",{className:"flex-grow-1",children:(0,E.jsx)("ul",{className:"list-inline text-end mb-0",children:(0,E.jsxs)(m.Z,{show:v,as:"li",onToggle:w,className:"list-inline-item fs-18",children:[(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",onClick:w,className:x()("text-dark","cursor-pointer",{show:v}),children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical"})}),(0,E.jsxs)(m.Z.Menu,{className:"dropdown-menu-end",children:[(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-people fs-16 me-2"}),"New Group"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-person-lines-fill fs-16 me-2"}),"Contacts"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-bookmark fs-16 me-2"}),"Saved Message"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-person-plus fs-16 me-2"}),"Invite Friends"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-question-circle fs-16 me-2"}),"Help"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-gear fs-16 me-2"}),"Setting"]})]})]})})})]}),(0,E.jsx)("div",{children:(0,E.jsx)("form",{className:"chat-search",children:(0,E.jsx)("div",{className:"chat-search-box",children:(0,E.jsxs)("div",{className:"input-group",children:[(0,E.jsx)("button",{className:"btn input-group-text",type:"submit",children:(0,E.jsx)("i",{className:"uil uil-search"})}),(0,E.jsx)("input",{type:"search",className:"form-control",placeholder:"Search...",id:"top-search",onKeyUp:function(e){return s=e.target.value,void r(s?(0,c.Z)(y).filter((function(e){return e.name.toLowerCase().indexOf(s.toLowerCase())>=0})):(0,c.Z)(y));var s}})]})})})}),(0,E.jsx)("div",{className:"pe-2",children:(0,E.jsx)(u.Z,{style:{height:"549px",width:"100%"},children:(n||[]).map((function(e,a){return(0,E.jsx)(d.rU,{to:"#",className:"text-body",onClick:function(a){!function(e){N(e),s&&s(e)}(e)},children:(0,E.jsxs)("div",{className:x()("d-flex","align-items-start","p-2",{"bg-light":e.id===b.id}),children:[(0,E.jsxs)("div",{className:"position-relative",children:[(0,E.jsx)("span",{className:x()("user-status",{"bg-success":"online"===e.userStatus,"bg-danger":"busy"===e.userStatus,"bg-warning":"away"===e.userStatus})}),(0,E.jsx)("img",{src:e.avatar,className:"me-2 rounded-circle",height:"48",alt:""})]}),(0,E.jsxs)("div",{className:"w-100 overflow-hidden",children:[(0,E.jsxs)("h5",{className:"mt-0 mb-0 fs-14",children:[(0,E.jsx)("span",{className:"float-end text-muted fs-12",children:e.lastMessageOn}),e.name]}),(0,E.jsxs)("p",{className:"mt-1 mb-0 text-muted fs-14",children:[0!==e.totalUnread&&(0,E.jsx)("span",{className:"float-end badge bg-danger text-white",children:e.totalUnread}),(0,E.jsx)("span",{className:x()("w-75",{"text-dark":e.totalUnread}),children:e.lastMessage})]})]})]})},a)}))})})]})})})},P=a(75810),T=a(81724),H=a(61265),R=a(38459),D=a(71605),B=a(84158),A=a(17858),L=function(e){var s=e.show,a=e.handleClose,r=(0,t.useState)(!1),c=(0,i.Z)(r,2),m=c[0],h=c[1],x=(0,t.useState)(!1),u=(0,i.Z)(x,2),j=u[0],f=u[1];return(0,E.jsx)(B.Z,{centered:!0,show:s,onHide:a,children:(0,E.jsxs)("div",{className:" m-2",children:[(0,E.jsx)(B.Z.Header,{closeButton:!0}),(0,E.jsx)("div",{className:"text-center mb-3",children:(0,E.jsx)("img",{src:N,className:"rounded-circle avatar-lg",height:"48",alt:"Rhonda D"})}),(0,E.jsx)("div",{className:"text-center mb-3",children:(0,E.jsx)("h5",{className:"mt-0 mb-0 fs-18",children:"Rhonda D"})}),(0,E.jsxs)("div",{className:"text-center mb-3",children:[(0,E.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-toggle":"modal","data-bs-target":"#voicecall","data-bs-dismiss":"modal",children:(0,E.jsx)(d.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,E.jsx)("i",{className:"bi bi-telephone"})})}),(0,E.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-toggle":"modal","data-bs-target":"#videocall","data-bs-dismiss":"modal",children:(0,E.jsx)(d.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,E.jsx)("i",{className:"bi bi-camera-video"})})}),(0,E.jsx)("div",{className:"avatar-sm fw-bold d-inline-block me-2","data-bs-dismiss":"modal","aria-label":"Close",children:(0,E.jsx)(d.rU,{to:"$",className:"avatar-title rounded-circle border border-secondary text-dark",children:(0,E.jsx)("i",{className:"bi bi-chat-left-dots"})})})]}),(0,E.jsx)(B.Z.Body,{children:(0,E.jsxs)("div",{className:"accordion custom-accordionwitharrow",children:[(0,E.jsxs)(o.Z,{className:"mb-1 shadow-none border-0",children:[(0,E.jsx)(d.rU,{to:"#",onClick:function(){return h(!m)},className:"text-dark",children:(0,E.jsx)(o.Z.Header,{className:"border-0",children:(0,E.jsxs)("h5",{className:"m-0 fs-16",children:["About",(0,E.jsx)("i",{className:"uil uil-angle-down float-end accordion-arrow"})]})})}),(0,E.jsx)(A.Z,{in:m,children:(0,E.jsx)("div",{children:(0,E.jsx)(o.Z.Body,{className:"pt-0 text-muted",children:(0,E.jsxs)(l.Z,{children:[(0,E.jsxs)(n.Z,{xs:4,className:"p-2",children:[(0,E.jsx)("i",{className:"bi bi-telephone fs-18 me-2"}),"Phone"]}),(0,E.jsx)(n.Z,{xs:8,className:"p-2 border-bottom",children:"(415) 281 - 1649"}),(0,E.jsxs)(n.Z,{xs:4,className:"p-2",children:[(0,E.jsx)("i",{className:"bi bi-envelope fs-18 me-2"}),"Email"]}),(0,E.jsx)(n.Z,{xs:8,className:"p-2 border-bottom",children:"shreyu.abc@gmail.com"})]})})})})]}),(0,E.jsxs)(o.Z,{className:"mb-1 shadow-none border-0",children:[(0,E.jsx)(d.rU,{to:"#",onClick:function(){return f(!j)},className:"text-dark",children:(0,E.jsx)(o.Z.Header,{className:"border-0",children:(0,E.jsxs)("h5",{className:"m-0 fs-16",children:["Media, Links and Docs",(0,E.jsx)("i",{className:"uil uil-angle-down float-end accordion-arrow"})]})})}),(0,E.jsx)(A.Z,{in:j,children:(0,E.jsx)("div",{children:(0,E.jsxs)(o.Z.Body,{className:"pt-0 text-muted",children:[(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-file-earmark-pdf h2"})}),(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-file-earmark-word h2"})}),(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-images h2"})}),(0,E.jsx)("div",{className:"d-inline-block me-2",children:(0,E.jsx)("i",{className:"bi bi-file-earmark-ppt h2"})})]})})})]})]})})]})})},z=function(e){var s=e.show,a=e.handleClose;return(0,E.jsxs)(B.Z,{centered:!0,size:"sm",show:s,onHide:a,contentClassName:"video-call",children:[(0,E.jsx)(B.Z.Header,{className:"mb-5 justify-content-end",children:(0,E.jsx)("div",{className:"video-call-head",children:(0,E.jsx)("img",{src:f,className:"rounded",alt:"Rhonda D"})})}),(0,E.jsx)(B.Z.Body,{children:(0,E.jsx)("div",{className:"video-call-action text-center pt-4 pb-2",children:(0,E.jsxs)("ul",{className:"list-inline",children:[(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold me-2",children:(0,E.jsx)(d.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-light text-white fs-16",children:(0,E.jsx)("i",{className:"bi bi-mic-mute"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar fw-bold me-2",children:(0,E.jsx)(d.rU,{to:"#",className:"avatar-title rounded-circle bg-danger text-white fs-18",children:(0,E.jsx)("i",{className:"bi bi-telephone","data-bs-dismiss":"modal"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold",children:(0,E.jsx)(d.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-light text-white fs-16",children:(0,E.jsx)("i",{className:"bi bi-camera-video"})})})]})})})]})},F=function(e){var s=e.show,a=e.handleClose;return(0,E.jsxs)(B.Z,{centered:!0,size:"sm",show:s,onHide:a,contentClassName:"voice-call",children:[(0,E.jsx)(B.Z.Header,{className:"mt-5 justify-content-center",children:(0,E.jsx)("div",{className:"voice-call-head",children:(0,E.jsx)("img",{src:f,className:"rounded-circle",alt:""})})}),(0,E.jsxs)(B.Z.Body,{className:"pt-0 text-center",children:[(0,E.jsx)("p",{className:"mb-5",children:"Calling..."}),(0,E.jsx)("div",{className:"voice-call-action pt-4 pb-2",children:(0,E.jsxs)("ul",{className:"list-inline",children:[(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold me-2",children:(0,E.jsx)(d.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-secondary text-dark fs-16",children:(0,E.jsx)("i",{className:"bi bi-mic-mute"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar fw-bold me-2","data-bs-dismiss":"modal",children:(0,E.jsx)(d.rU,{to:"#",className:"avatar-title rounded-circle bg-danger text-white fs-18",children:(0,E.jsx)("i",{className:"bi bi-telephone"})})}),(0,E.jsx)("li",{className:"list-inline-item avatar-sm fw-bold",children:(0,E.jsx)(d.rU,{to:"#",className:"avatar-title rounded-circle bg-soft-secondary text-dark fs-16",children:(0,E.jsx)("i",{className:"bi bi-volume-up"})})})]})})]})]})},V=function(e){var s=e.selectedUser,a=(0,t.useState)(!1),l=(0,i.Z)(a,2),n=l[0],r=l[1],c=(0,t.useState)(!1),d=(0,i.Z)(c,2),o=d[0],h=d[1],x=(0,t.useState)(!1),u=(0,i.Z)(x,2),j=u[0],f=u[1];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsxs)("div",{className:"d-flex pb-2 border-bottom align-items-center",children:[(0,E.jsx)("img",{src:s.avatar,className:"me-2 rounded-circle",height:"48",alt:""}),(0,E.jsxs)("div",{children:[(0,E.jsx)("h5",{className:"mt-0 mb-0 fs-14",children:s.name}),(0,E.jsx)("p",{className:"mb-0",children:"Online"})]}),(0,E.jsx)("div",{className:"flex-grow-1",children:(0,E.jsxs)("ul",{className:"list-inline float-end mb-0",children:[(0,E.jsx)(m.Z,{as:"li",className:"list-inline-item fs-18 me-3",children:(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,E.jsx)("i",{className:"bi bi-telephone-plus",onClick:function(){return f(!0)}})})}),(0,E.jsx)(m.Z,{as:"li",className:"list-inline-item fs-18 me-3",children:(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,E.jsx)("i",{className:"bi bi-camera-video",onClick:function(){return h(!0)}})})}),(0,E.jsxs)(m.Z,{as:"li",className:"list-inline-item fs-18",children:[(0,E.jsx)(m.Z.Toggle,{id:"dropdown-apps",as:"a",className:"cursor-pointer text-dark",children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical"})}),(0,E.jsxs)(m.Z.Menu,{className:"dropdown-menu-end",children:[(0,E.jsxs)(m.Z.Item,{href:"#/",onClick:function(){return r(!0)},children:[" ",(0,E.jsx)("i",{className:"bi bi-person-circle fs-18 me-2"}),"View Profile"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-music-note-list fs-18 me-2"}),"Media, Links and Docs"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-search fs-18 me-2"}),"Search"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-image fs-18 me-2"}),"Wallpaper"]}),(0,E.jsxs)(m.Z.Item,{href:"#/",children:[(0,E.jsx)("i",{className:"bi bi-arrow-right-circle fs-18 me-2"}),"More"]})]})]})]})})]}),(0,E.jsx)(L,{show:n,handleClose:function(){return r(!1)}}),(0,E.jsx)(z,{show:o,handleClose:function(){return h(!1)}}),(0,E.jsx)(F,{show:j,handleClose:function(){return f(!1)}})]})},_=function(e){var s=e.message,a=e.toUser;return(0,E.jsx)(E.Fragment,{children:(s.messages||[]).map((function(e,i){return(0,E.jsx)("li",{className:x()("clearfix",{odd:s.from.id===a.id,"mb-1":s.messages.length>1&&i!==s.messages.length-1}),children:(0,E.jsxs)("div",{className:"conversation-text ms-0",children:[(0,E.jsxs)("div",{className:x()("d-flex",{"justify-content-end":s.from.id===a.id}),children:[s.from.id===a.id&&(0,E.jsxs)(m.Z,{className:"conversation-actions",children:[(0,E.jsx)(m.Z.Toggle,{as:"a",className:"cursor-pointer text-dark pe-1",children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical fs-14"})}),(0,E.jsxs)(m.Z.Menu,{align:"end",children:[(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-reply fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-star fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-trash fs-18 me-2"}),"Delete"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-files fs-18 me-2"}),"Copy"]})]})]}),"text"===e.type&&(0,E.jsx)("div",{className:"ctext-wrap",children:(0,E.jsx)("p",{children:e.value})}),"file"===e.type&&(0,E.jsx)(o.Z,{className:"mb-1 shadow-none border text-start",children:(0,E.jsx)("div",{className:"p-2",children:(0,E.jsxs)(l.Z,{className:"align-items-center",children:[(0,E.jsx)(n.Z,{className:"col-auto",children:(0,E.jsx)("div",{className:"avatar-sm bg-primary text-white",children:(0,E.jsx)("span",{className:"avatar-title rounded",children:".ZIP"})})}),(0,E.jsxs)(n.Z,{className:"ps-0",children:[(0,E.jsx)(d.rU,{to:"#",className:"text-muted fw-bold",children:e.value.file}),(0,E.jsx)("p",{className:"mb-0",children:e.value.size})]}),(0,E.jsx)(n.Z,{className:"col-auto",children:(0,E.jsx)(d.rU,{to:"#",className:"ps-3 fs-24",children:(0,E.jsx)("i",{className:"bi bi-arrow-down-square"})})})]})})}),s.from.id!==a.id&&(0,E.jsxs)(m.Z,{className:"conversation-actions",children:[(0,E.jsx)(m.Z.Toggle,{as:"a",className:"cursor-pointer text-dark ps-1",children:(0,E.jsx)("i",{className:"bi bi-three-dots-vertical fs-14"})}),(0,E.jsxs)(m.Z.Menu,{align:"start",children:[(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-reply fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-star fs-18 me-2"}),"Reply"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-trash fs-18 me-2"}),"Delete"]}),(0,E.jsxs)(m.Z.Item,{children:[(0,E.jsx)("i",{className:"bi bi-files fs-18 me-2"}),"Copy"]})]})]})]}),i===s.messages.length-1&&(0,E.jsxs)("p",{className:"text-muted fs-12 mb-0 mt-1",children:[s.sendOn,s.from.id===a.id&&(0,E.jsx)("i",{className:"bi bi-check2-all ms-1 text-success"})]})]})},i)}))})},W=function(e){var s=e.selectedUser,a=(0,t.useState)(!1),l=(0,i.Z)(a,2),n=l[0],r=l[1],m=(0,t.useState)([]),h=(0,i.Z)(m,2),x=h[0],j=h[1],b=(0,t.useState)({id:9,name:"Shreyu N",avatar:f}),N=(0,i.Z)(b,1)[0],p=(0,t.useCallback)((function(){s&&(r(!0),setTimeout((function(){var e=(0,c.Z)(C).map((function(e){return{id:e.id,day:e.day,messages:(0,c.Z)(e.messages).filter((function(e){return e.to.id===N.id&&e.from.id===s.id||N.id===e.from.id&&e.to.id===s.id}))}}));j((0,c.Z)(e)),r(!1)}),750))}),[s,N.id]);(0,t.useEffect)((function(){p()}),[p]);var g=(0,H.X)(T.Ry().shape({newMessage:T.Z_().required("Please enter your messsage")})),v=(0,P.cI)({resolver:g}),Z=v.handleSubmit,y=v.register,w=v.control,k=v.formState.errors,S=v.reset;return(0,E.jsx)(E.Fragment,{children:(0,E.jsx)(o.Z,{children:(0,E.jsxs)(o.Z.Body,{children:[n&&(0,E.jsx)(D.Z,{}),(0,E.jsx)(V,{selectedUser:s}),(0,E.jsxs)("div",{className:"mt-1",children:[(0,E.jsx)(u.Z,{style:{height:"509px",width:"100%"},children:(0,E.jsx)("ul",{className:"conversation-list px-0 h-100",children:(x||[]).map((function(e,s){return(0,E.jsxs)(t.Fragment,{children:[(0,E.jsxs)("li",{className:"position-relative",children:[(0,E.jsx)("hr",{}),(0,E.jsx)("h4",{children:(0,E.jsx)("span",{className:"badge bg-light text-dark position-absolute top-0 start-50 translate-middle",children:e.day})})]}),(e.messages||[]).map((function(e,s){return(0,E.jsx)(_,{message:e,toUser:N},s)}))]},s)}))})}),(0,E.jsx)("div",{className:"mt-2 bg-light p-3 rounded",children:(0,E.jsx)("form",{noValidate:!0,name:"chat-form",id:"chat-form",onSubmit:Z((function(e){var a=(0,c.Z)(x[x.length-1].messages);a.push({id:x[x.length-1].messages.length+1,from:N,to:s,messages:[{type:"text",value:e.newMessage}],sendOn:(new Date).getHours()+":"+(new Date).getMinutes()});var i=(0,c.Z)(x).map((function(e,s){return{id:e.id,day:e.day,messages:s===x.length-1?a:e.messages}}));j((0,c.Z)(i)),S()})),children:(0,E.jsxs)("div",{className:"row",children:[(0,E.jsx)("div",{className:"col mb-2 mb-sm-0",children:(0,E.jsx)(R.y,{type:"text",name:"newMessage",className:"border-0",placeholder:"Enter your text",register:y,errors:k,control:w},"newMessage")}),(0,E.jsx)("div",{className:"col-sm-auto",children:(0,E.jsxs)("div",{className:"btn-group",children:[(0,E.jsx)(d.rU,{to:"#",className:"btn btn-light",children:(0,E.jsx)("i",{className:"bi bi-emoji-smile fs-18"})}),(0,E.jsx)(d.rU,{to:"#",className:"btn btn-light",children:(0,E.jsx)("i",{className:"bi bi-paperclip fs-18"})}),(0,E.jsx)(d.rU,{to:"#",className:"btn btn-light",children:(0,E.jsx)("i",{className:"bi bi-camera fs-18"})}),(0,E.jsx)("button",{type:"submit",className:"btn btn-success chat-send",children:(0,E.jsx)("i",{className:"uil uil-message"})})]})})]})})})]})]})})})},q=function(){var e=(0,t.useState)(y[1]),s=(0,i.Z)(e,2),a=s[0],c=s[1];return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(r.Z,{breadCrumbItems:[{label:"Apps",path:"/apps/chat"},{label:"Chat",path:"/apps/chat",active:!0}],title:"Chat"}),(0,E.jsxs)(l.Z,{children:[(0,E.jsx)(n.Z,{lg:5,xxl:3,children:(0,E.jsx)(O,{onUserSelect:function(e){c(e)}})}),(0,E.jsx)(n.Z,{lg:7,xxl:9,children:(0,E.jsx)(W,{selectedUser:a})})]})]})}},2461:function(e,s,a){a.d(s,{Z:function(){return f}});var i=a(1413),t=a(45987),l=a(81694),n=a.n(l),r=a(72791),c=a(10162),d=a(56236),o=a(80184),m=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],h=r.forwardRef((function(e,s){var a=e.bsPrefix,l=e.active,r=e.children,h=e.className,x=e.as,u=void 0===x?"li":x,j=e.linkAs,f=void 0===j?d.Z:j,b=e.linkProps,N=e.href,p=e.title,g=e.target,v=(0,t.Z)(e,m),Z=(0,c.vE)(a,"breadcrumb-item");return(0,o.jsx)(u,(0,i.Z)((0,i.Z)({ref:s},v),{},{className:n()(Z,h,{active:l}),"aria-current":l?"page":void 0,children:l?r:(0,o.jsx)(f,(0,i.Z)((0,i.Z)({},b),{},{href:N,title:p,target:g,children:r}))}))}));h.displayName="BreadcrumbItem",h.defaultProps={active:!1,linkProps:{}};var x=h,u=["bsPrefix","className","listProps","children","label","as"],j=r.forwardRef((function(e,s){var a=e.bsPrefix,l=e.className,r=e.listProps,d=e.children,m=e.label,h=e.as,x=void 0===h?"nav":h,j=(0,t.Z)(e,u),f=(0,c.vE)(a,"breadcrumb");return(0,o.jsx)(x,(0,i.Z)((0,i.Z)({"aria-label":m,className:l,ref:s},j),{},{children:(0,o.jsx)("ol",(0,i.Z)((0,i.Z)({},r),{},{className:n()(f,null==r?void 0:r.className),children:d}))}))}));j.displayName="Breadcrumb",j.defaultProps={label:"breadcrumb",listProps:{}};var f=Object.assign(j,{Item:x})},17858:function(e,s,a){a.d(s,{Z:function(){return y}});var i=a(1413),t=a(45987),l=a(4942),n=a(81694),r=a.n(n),c=a(75427),d=a(72791),o=a(27726),m=a(71380);var h,x=function(){for(var e=arguments.length,s=new Array(e),a=0;a<e;a++)s[a]=arguments[a];return s.filter((function(e){return null!=e})).reduce((function(e,s){if("function"!==typeof s)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?s:function(){for(var a=arguments.length,i=new Array(a),t=0;t<a;t++)i[t]=arguments[t];e.apply(this,i),s.apply(this,i)}}),null)},u=a(67202),j=a(85007),f=a(80184),b=["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"],N={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function p(e,s){var a=s["offset".concat(e[0].toUpperCase()).concat(e.slice(1))],i=N[e];return a+parseInt((0,c.Z)(s,i[0]),10)+parseInt((0,c.Z)(s,i[1]),10)}var g=(h={},(0,l.Z)(h,o.Wj,"collapse"),(0,l.Z)(h,o.Ix,"collapsing"),(0,l.Z)(h,o.d0,"collapsing"),(0,l.Z)(h,o.cn,"collapse show"),h),v={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:p},Z=d.forwardRef((function(e,s){var a=e.onEnter,l=e.onEntering,n=e.onEntered,c=e.onExit,o=e.onExiting,h=e.className,N=e.children,v=e.dimension,Z=void 0===v?"height":v,y=e.getDimensionValue,w=void 0===y?p:y,k=(0,t.Z)(e,b),S="function"===typeof Z?Z():Z,M=(0,d.useMemo)((function(){return x((function(e){e.style[S]="0"}),a)}),[S,a]),U=(0,d.useMemo)((function(){return x((function(e){var s="scroll".concat(S[0].toUpperCase()).concat(S.slice(1));e.style[S]="".concat(e[s],"px")}),l)}),[S,l]),I=(0,d.useMemo)((function(){return x((function(e){e.style[S]=null}),n)}),[S,n]),C=(0,d.useMemo)((function(){return x((function(e){e.style[S]="".concat(w(S,e),"px"),(0,u.Z)(e)}),c)}),[c,w,S]),E=(0,d.useMemo)((function(){return x((function(e){e.style[S]=null}),o)}),[S,o]);return(0,f.jsx)(j.Z,(0,i.Z)((0,i.Z)({ref:s,addEndListener:m.Z},k),{},{"aria-expanded":k.role?k.in:null,onEnter:M,onEntering:U,onEntered:I,onExit:C,onExiting:E,childRef:N.ref,children:function(e,s){return d.cloneElement(N,(0,i.Z)((0,i.Z)({},s),{},{className:r()(h,N.props.className,g[e],"width"===S&&"collapse-horizontal")}))}}))}));Z.defaultProps=v;var y=Z}}]);
//# sourceMappingURL=3181.521620ac.chunk.js.map
"use strict";(self.webpackChunkshreyu_react_app=self.webpackChunkshreyu_react_app||[]).push([[4436],{32798:function(e,s,a){var i=a(29439),t=a(72791),l=a(75810),r=a(89743),n=a(2677),c=a(9140),d=a(7238),m=a(81724),o=a(61265),x=a(52007),h=a.n(x),u=a(81694),j=a.n(u),f=a(38459),p=a(57806),N=a(59569),v=a(80184),g=function(e){var s=e.userAvatar,a=e.postedOn;return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("div",{className:"chat-avatar",children:[(0,v.jsx)("img",{src:s,alt:s}),(0,v.jsx)("i",{children:a})]})})},Z=function(e){var s=e.userName,a=e.text;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("div",{className:"conversation-text",children:(0,v.jsxs)("div",{className:"ctext-wrap",children:[(0,v.jsx)("i",{children:s}),(0,v.jsx)("p",{children:a})]})})})},b={placement:"",children:h().object,className:""},w=function(e){var s=e.children,a=e.placement,i=e.className;return(0,v.jsx)("li",{className:j()("clearfix",{odd:"left"===a},i),children:s})};w.defaultProps=b;var y=function(e){var s=e.onNewMessagesPosted,a=(0,o.X)(m.Ry().shape({newMessage:m.Z_().required("Please enter your messsage")})),i=(0,l.cI)({resolver:a}),t=i.handleSubmit,c=i.register,d=i.control,x=i.formState.errors,h=i.reset;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)("form",{name:"chat-form",id:"chat-form",onSubmit:t((function(e){var a=e.newMessage;s(a),h()})),children:(0,v.jsxs)(r.Z,{children:[(0,v.jsx)(n.Z,{children:(0,v.jsx)(f.y,{type:"text",name:"newMessage",className:"form-control chat-input",placeholder:"Enter your text",register:c,errors:x,control:d},"newMessage")}),(0,v.jsx)(n.Z,{className:"col-auto",children:(0,v.jsx)("button",{type:"submit",className:"btn btn-danger chat-send w-100 waves-effect waves-light",children:"Send"})})]})})})};s.Z=function(e){var s=(0,t.useState)(e.messages),a=(0,i.Z)(s,2),l=a[0],r=a[1];return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(c.Z,{children:(0,v.jsxs)(c.Z.Body,{children:[(0,v.jsxs)(d.Z,{className:"float-end",align:"end",children:[(0,v.jsx)(d.Z.Toggle,{as:"a",className:"cursor-pointer arrow-none text-muted",children:(0,v.jsx)("i",{className:"uil uil-ellipsis-v"})}),(0,v.jsxs)(d.Z.Menu,{children:[(0,v.jsxs)(d.Z.Item,{children:[(0,v.jsx)("i",{className:"uil uil-refresh me-2"}),"Refresh"]}),(0,v.jsxs)(d.Z.Item,{children:[(0,v.jsx)("i",{className:"uil uil-user-plus me-2"}),"Add New"]}),(0,v.jsx)(d.Z.Divider,{}),(0,v.jsxs)(d.Z.Item,{className:"text-danger",children:[(0,v.jsx)("i",{className:"uil uil-exit me-2"}),"Exit"]})]})]}),(0,v.jsx)("h4",{className:"header-title mb-4",children:e.title}),(0,v.jsxs)("div",{className:"chat-conversation",children:[(0,v.jsx)(p.Z,{style:{maxHeight:"314px",width:"100%"},children:(0,v.jsx)("ul",{className:j()("conversation-list",e.className),children:(l||[]).map((function(e,s){return(0,v.jsxs)(w,{placement:"Dominic"===e.userName?"left":"right",children:[e.userPic&&(0,v.jsx)(g,{userAvatar:e.userPic,postedOn:e.postedOn}),(0,v.jsx)(Z,{userName:e.userName,text:e.text})]},s)}))})}),(0,v.jsx)(y,{onNewMessagesPosted:function(e){r(l.concat({id:l.length+1,userPic:N,userName:"Dominic",text:e,postedOn:(new Date).getHours()+":"+(new Date).getMinutes()}))}})]})]})})})}},33976:function(e,s,a){var i=a(72791),t=a(59513),l=a.n(t),r=a(81694),n=a.n(r),c=a(80184),d=(0,i.forwardRef)((function(e,s){return(0,c.jsx)("input",{type:"text",className:n()("form-control",e.inputClass),onClick:e.onClick,value:e.value,onChange:function(){console.log("date value changed")},ref:s})})),m=(0,i.forwardRef)((function(e,s){return(0,c.jsxs)("div",{className:"input-group input-group-sm",ref:s,children:[(0,c.jsx)("input",{type:"text",className:n()("form-control",e.inputClass),onClick:e.onClick,value:e.value,readOnly:!0}),(0,c.jsx)("span",{className:"input-group-text bg-blue border-blue text-white",children:(0,c.jsx)("i",{className:"mdi mdi-calendar-range"})})]})}));s.Z=function(e){var s=!0===(e.hideAddon||!1)?(0,c.jsx)(d,{inputClass:e.inputClass}):(0,c.jsx)(m,{inputClass:e.inputClass});return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(l(),{calendarClassName:e.calendarClassName||"shadow",selectsRange:e.selectsRange,startDate:e.startDate,endDate:e.endDate,selected:e.value,onChange:function(s){return e.onChange(s)},customInput:s,timeIntervals:e.tI,showTimeSelect:e.showTimeSelect,timeFormat:e.timeFormat||"hh:mm a",timeCaption:e.timeCaption,dateFormat:e.dateFormat||"MM/dd/yyyy",minDate:e.minDate,maxDate:e.maxDate,monthsShown:e.monthsShown,showTimeSelectOnly:e.showTimeSelectOnly,inline:e.inline,autoComplete:"off"})})}},29833:function(e,s,a){a(72791);var i=a(9140),t=a(7238),l=a(80184);s.Z=function(e){var s=e.title,a=e.members;return(0,l.jsx)(i.Z,{children:(0,l.jsxs)(i.Z.Body,{children:[(0,l.jsx)("h6",{className:"header-title mb-3",children:s}),(a||[]).map((function(e,s){return(0,l.jsxs)("div",{className:"d-flex mt-1 border-top pt-2",children:[(0,l.jsx)("img",{src:e.avatar,className:"avatar rounded me-3",alt:""}),(0,l.jsxs)("div",{className:"flex-grow-1",children:[(0,l.jsx)("h5",{className:"mt-1 mb-0 fs-15",children:e.name}),(0,l.jsx)("h6",{className:"text-muted fw-normal mt-1 mb-2",children:e.designation})]}),(0,l.jsxs)(t.Z,{className:"align-self-center float-end",align:"end",children:[(0,l.jsx)(t.Z.Toggle,{as:"a",className:"cursor-pointer arrow-none text-muted",children:(0,l.jsx)("i",{className:"uil uil-ellipsis-v"})}),(0,l.jsxs)(t.Z.Menu,{children:[(0,l.jsxs)(t.Z.Item,{children:[(0,l.jsx)("i",{className:"uil uil-edit-alt me-2"}),"Edit"]}),(0,l.jsxs)(t.Z.Item,{children:[(0,l.jsx)("i",{className:"uil uil-exit me-2"}),"Remove from Team"]}),(0,l.jsx)(t.Z.Divider,{}),(0,l.jsxs)(t.Z.Item,{className:"text-danger",children:[(0,l.jsx)("i",{className:"uil uil-trash me-2"}),"Delete"]})]})]})]},s)}))]})})}},17125:function(e,s,a){a(72791);var i=a(74330),t=a(81694),l=a.n(t),r=a(80184);s.Z=function(e){var s=e.stats,a=e.title,t=e.icon,n=e.iconClass;return(0,r.jsxs)("div",{className:"d-flex p-3 border-bottom",children:[(0,r.jsxs)("div",{className:"flex-grow-1",children:[(0,r.jsx)("h4",{className:"mt-0 mb-1 fs-22",children:s}),(0,r.jsx)("span",{className:"text-muted",children:a})]}),(0,r.jsx)(i.Z,{icon:t,className:l()("align-self-center","icon-dual",n)})]})}},75184:function(e,s,a){a(72791);var i=a(89743),t=a(2677),l=a(2461),r=a(80184);s.Z=function(e){return(0,r.jsx)(i.Z,{children:(0,r.jsx)(t.Z,{children:(0,r.jsxs)("div",{className:"page-title-box",children:[(0,r.jsx)("h4",{className:"page-title",children:e.title}),(0,r.jsx)("div",{className:"page-title-right",children:(0,r.jsxs)(l.Z,{listProps:{className:"m-0"},children:[(0,r.jsx)(l.Z.Item,{href:"/",children:"Shreyu"}),(e.breadCrumbItems||[]).map((function(e,s){return e.active?(0,r.jsx)(l.Z.Item,{active:!0,children:e.label},s):(0,r.jsx)(l.Z.Item,{href:e.path,children:e.label},s)}))]})})]})})})}},57806:function(e,s,a){var i=a(1413),t=a(45987),l=(a(72791),a(34358)),r=a(80184),n=["className","style","children"];s.Z=function(e){var s=e.className,a=e.style,c=e.children,d=(0,t.Z)(e,n);return(0,r.jsx)(l.Z,(0,i.Z)((0,i.Z)({className:s,style:a},d),{},{children:c}))}},16501:function(e,s,a){a(72791);var i=a(9140),t=a(13496),l=a(81694),r=a.n(l),n=a(80184);s.Z=function(e){var s=e.title,a=e.stats,l=e.trend,c={chart:{type:"area",sparkline:{enabled:!0}},stroke:{width:2,curve:"smooth"},markers:{size:0},colors:e.colors,tooltip:{theme:"dark",fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}},fill:{type:"gradient",gradient:{type:"vertical",shadeIntensity:1,inverseColors:!1,opacityFrom:.45,opacityTo:.05,stops:[45,100]}}};return(0,n.jsx)(i.Z,{children:(0,n.jsx)(i.Z.Body,{children:(0,n.jsxs)("div",{className:"d-flex",children:[(0,n.jsxs)("div",{className:"flex-grow-1",children:[(0,n.jsx)("span",{className:"text-muted text-uppercase fs-12 fw-bold",children:s}),(0,n.jsx)("h3",{className:"mb-0",children:a})]}),(0,n.jsxs)("div",{className:"align-self-center flex-shrink-0",children:[(0,n.jsx)(t.Z,{className:"apex-charts",options:c,series:[{data:[25,66,41,85,63,25,44,12,36,9,54]}],type:"area",height:45,width:80}),(0,n.jsxs)("span",{className:r()("fw-bold","fs-13",l.textClass),children:[(0,n.jsx)("i",{className:l.icon})," ",l.value]})]})]})})})}},1934:function(e,s,a){a(72791);var i=a(9140),t=a(11087),l=a(57806),r=a(80184);s.Z=function(e){var s=e.tasks;return(0,r.jsx)(i.Z,{children:(0,r.jsxs)(i.Z.Body,{children:[(0,r.jsx)(t.rU,{to:"#",className:"btn btn-primary btn-sm float-end",children:"View All"}),(0,r.jsx)("h5",{className:"mb-4 header-title",children:"Tasks"}),(0,r.jsx)(l.Z,{style:{maxHeight:"352px"},className:"px-1",children:(s||[]).map((function(e,s){return(0,r.jsx)("div",{className:"mt-2",children:(0,r.jsxs)("div",{className:"form-check",children:[(0,r.jsx)("input",{type:"checkbox",className:"form-check-input",id:"task1"}),(0,r.jsx)("label",{className:"form-check-label",htmlFor:"task1",children:e.title}),(0,r.jsxs)("p",{className:"fs-13 text-muted",children:["Due on ",e.dueDate]})]})},s)}))})]})})}},40900:function(e,s,a){a.d(s,{Q8:function(){return m},Ve:function(){return x},cW:function(){return d},wq:function(){return o}});var i=a(5234),t=a(68328),l=a(7827),r=a(59569),n=a(58951),c=a(35002),d=[{id:98754,product:"ASOS Ridley High",customer:"Otto B",price:"$79.49",status:"Pending"},{id:98753,product:"Marco Lightweight Shirt",customer:"Mark P",price:"$125.49",status:"Delivered"},{id:98752,product:"Half Sleeve Shirt",customer:"Dave B",price:"$35.49",status:"Declined"},{id:98751,product:"Lightweight Jacket",customer:"Shreyu N",price:"$49.49",status:"Delivered"},{id:98750,product:"Marco Shoes",customer:"Rik N",price:"$69.49",status:"Declined"}],m=[{id:1,name:"Shreyu N",avatar:i,designation:"Senior Sales Guy"},{id:2,name:"Greeva Y",avatar:t,designation:"Social Media Campaign"},{id:3,name:"Nik G",avatar:l,designation:"Inventory Manager"},{id:4,name:"Hardik G",avatar:r,designation:"Sales Person"},{id:5,name:"GB Patel G",avatar:n,designation:"Sales Person"}],o=[{id:1,title:"Draft the new contract document for sales team",dueDate:"24 Aug, 2019"},{id:2,title:"iOS App home page",dueDate:"23 Aug, 2019"},{id:3,title:"Write a release note for Shreyu",dueDate:"22 Aug, 2019"},{id:4,title:"Invite Greeva to a project shreyu admin",dueDate:"21 Aug, 2019"},{id:5,title:"Enable analytics tracking for main website",dueDate:"20 Aug, 2019"},{id:6,title:"Invite user to a project",dueDate:"18 Aug, 2019"},{id:7,title:"Write a release note",dueDate:"18 Aug, 2019"}],x=[{id:1,userPic:c,userName:"Geneva",text:"Hello!",postedOn:"10:00"},{id:2,userPic:r,userName:"Dominic",text:"Hi, How are you? What about our next meeting?",postedOn:"10:01"},{id:3,userPic:c,userName:"Geneva",text:"Yeah everything is fine",postedOn:"10:02"},{id:4,userPic:r,userName:"Dominic",text:"Wow that's great!",postedOn:"10:03"},{id:5,userPic:c,userName:"Geneva",text:"Cool!",postedOn:"10:03"}]},28472:function(e,s,a){a.r(s),a.d(s,{default:function(){return W}});var i=a(72791),t=a(89743),l=a(2677),r=a(75184),n=a(16501),c=a(29833),d=a(32798),m=a(1934),o=a(9140),x=a(81694),h=a.n(x),u=a(74330),j=a(80184),f=function(e){var s=e.variant,a=e.stats,i=e.icon,t=e.title;return(0,j.jsx)(o.Z,{children:(0,j.jsx)(o.Z.Body,{children:(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsxs)("div",{className:"flex-grow-1",children:[(0,j.jsx)("span",{className:"text-muted text-uppercase fs-12 fw-bold",children:t}),(0,j.jsx)("h3",{className:"mb-0",children:a})]}),(0,j.jsx)("div",{className:"align-self-center flex-shrink-0",children:(0,j.jsx)(u.Z,{icon:i,className:h()("icon-lg","icon-dual-"+s)})})]})})})},p=a(29913),N=function(e){var s=e.variant,a=e.title,i=e.stats,t=e.progress,l=e.description;return(0,j.jsx)(o.Z,{children:(0,j.jsx)(o.Z.Body,{children:(0,j.jsxs)("div",{children:[(0,j.jsx)("span",{className:"text-muted text-uppercase fs-12 fw-bold",children:a}),(0,j.jsx)("h3",{children:i}),(0,j.jsx)(p.Z,{now:t,variant:s,style:{height:"5px"},className:"my-2"}),(0,j.jsx)("span",{className:"text-muted fw-semibold",children:l})]})})})},v=a(13496),g=function(e){for(var s=e.title,a=e.subtitle,i=e.colors,t=[],l=1;l<=10;l++)t.push("2018-09-"+l);var r={chart:{type:"area",height:160,sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth"},fill:{opacity:.2},xaxis:{type:"datetime",axisBorder:{color:"#d6ddea"},axisTicks:{color:"#d6ddea"}},yaxis:{labels:{offsetX:-5},min:0},colors:i,labels:t,title:{text:s,offsetX:5,offsetY:10,margin:0,style:{fontSize:"24px"}},subtitle:{text:a,offsetX:5,offsetY:45,margin:0,style:{fontSize:"16px"}}};return(0,j.jsx)(o.Z,{children:(0,j.jsx)(o.Z.Body,{className:"p-0",children:(0,j.jsx)(v.Z,{className:"apex-charts",options:r,series:[{name:"Data",data:[47,45,54,38,56,24,65,31,37,39]}],type:"area",dir:"ltr",height:160})})})},Z=a(43360),b=a(45736),w=a(5234),y=function(){return(0,j.jsx)(o.Z,{children:(0,j.jsx)(o.Z.Body,{className:"pb-0",children:(0,j.jsxs)("div",{className:"text-center mt-2",children:[(0,j.jsx)("img",{src:w,alt:"",className:"avatar-xl rounded-circle"}),(0,j.jsx)("h4",{className:"mt-2 mb-0",children:"Shreyu N"}),(0,j.jsx)("h6",{className:"text-muted fw-normal mt-2 mb-3",children:"User Experience Specialist"}),(0,j.jsx)(Z.Z,{className:"btn-sm me-1",children:"Follow"}),(0,j.jsx)(Z.Z,{variant:"",className:"btn-white btn-sm",children:"Message"}),(0,j.jsxs)("div",{className:"mt-3 pt-3 border-top text-start",children:[(0,j.jsx)("p",{className:"text-muted mb-2",children:"Hi I'm Shreyu. I am user experience and user interface designer. I have been working on UI & UX since last 10 years."}),(0,j.jsxs)("p",{className:"mb-2",children:[(0,j.jsx)(b.Z,{bg:"",className:"badge-soft-success me-1",children:"UI & UX"}),(0,j.jsx)(b.Z,{bg:"",className:"badge-soft-success",children:"Frontend Development"})]})]})]})})})},P=a(7238),S=a.p+"static/media/2.04ec33b9e844993d4490.jpg",C=function(){return(0,j.jsxs)(o.Z,{className:"profile-widget",children:[(0,j.jsx)("img",{src:S,alt:"Shreyu",className:"card-img-top"}),(0,j.jsxs)(P.Z,{className:"card-action float-end",align:"end",children:[(0,j.jsx)(P.Z.Toggle,{as:"a",className:"cursor-pointer arrow-none",children:(0,j.jsx)("i",{className:"uil uil-ellipsis-v fs-16 text-white"})}),(0,j.jsxs)(P.Z.Menu,{children:[(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-edit-alt me-2"}),"Edit"]}),(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-refresh me-2"}),"Refresh"]}),(0,j.jsx)(P.Z.Divider,{}),(0,j.jsxs)(P.Z.Item,{className:"text-danger",children:[(0,j.jsx)("i",{className:"uil uil-trash me-2"}),"Delete"]})]})]}),(0,j.jsx)(o.Z.Body,{className:"text-center p-0",children:(0,j.jsxs)("div",{className:"profile-info pb-3",children:[(0,j.jsx)("img",{src:w,alt:"",className:"img-thumbnail avatar-xl rounded-circle"}),(0,j.jsx)("h4",{className:"mt-2 mb-0",children:"Shreyu N"}),(0,j.jsx)("h6",{className:"text-muted fw-normal mt-2 mb-3",children:"User Experience Specialist"}),(0,j.jsx)("button",{type:"button",className:"btn btn-primary btn-sm me-1",children:"Follow"}),(0,j.jsx)("button",{type:"button",className:"btn btn-white btn-sm",children:"Message"})]})})]})},D=a(98799),k=a.p+"static/media/img-5.b80d579e9e0f3b18c3d6.jpg",I=a(83328),M=function(){return(0,j.jsx)(o.Z,{children:(0,j.jsxs)(o.Z.Body,{children:[(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)("img",{src:w,className:"avatar-lg rounded-circle me-2",alt:""}),(0,j.jsxs)("div",{className:"flex-grow-1",children:[(0,j.jsx)("h4",{className:"mt-2 mb-0",children:"Shreyu N"}),(0,j.jsx)("h6",{className:"text-muted fw-normal mt-1 mb-4",children:"New York, USA"})]}),(0,j.jsxs)(P.Z,{className:"float-end",align:"end",children:[(0,j.jsx)(P.Z.Toggle,{as:"a",className:"cursor-pointer arrow-none text-muted",children:(0,j.jsx)("i",{className:"uil uil-ellipsis-v"})}),(0,j.jsxs)(P.Z.Menu,{children:[(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-edit-alt me-2"}),"Edit"]}),(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-refresh me-2"}),"Refresh"]}),(0,j.jsx)(P.Z.Divider,{}),(0,j.jsxs)(P.Z.Item,{className:"text-danger",children:[(0,j.jsx)("i",{className:"uil uil-trash me-2"}),"Delete"]})]})]})]}),(0,j.jsxs)(t.Z,{className:"my-2 justify-content-between",children:[(0,j.jsx)(l.Z,{sm:5,children:(0,j.jsxs)("span",{className:"fs-15",children:[(0,j.jsx)("i",{className:"uil uil-calendar-alt me-1"}),"40 Days Ago"]})}),(0,j.jsx)(l.Z,{sm:!0,className:"mt-2 mt-sm-0",children:(0,j.jsxs)("span",{className:"fs-15",children:[(0,j.jsx)("i",{className:"uil uil-users-alt me-1"}),"12,001"]})}),(0,j.jsx)(l.Z,{sm:!0,className:"mt-2 mt-sm-0 text-sm-end",children:(0,j.jsxs)("span",{className:"fs-15",children:[(0,j.jsx)("i",{className:"uil uil-calendar-alt me-1"}),"1200"]})})]}),(0,j.jsx)("div",{className:"mt-1 pt-2 border-top text-start",children:(0,j.jsx)("p",{className:"text-muted mb-2",children:"Hi I'm Shreyu. I am foodie and love to eat different cuisine!"})}),(0,j.jsxs)(t.Z,{className:"mt-3",children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)("img",{src:D,alt:"",className:"img-fluid rounded shadow"})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)("img",{src:k,alt:"",className:"img-fluid rounded shadow"})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)("img",{src:I,alt:"",className:"img-fluid rounded shadow"})})]}),(0,j.jsxs)(t.Z,{className:"mt-4 text-center",children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)(Z.Z,{variant:"primary",className:"btn-sm w-100 me-1",children:"Follow"})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)(Z.Z,{variant:"white",className:"btn-sm w-100",children:"Message"})})]})]})})},A=a(11087),T=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.Z,{children:(0,j.jsxs)(t.Z,{className:"g-0",children:[(0,j.jsx)(l.Z,{md:4,children:(0,j.jsx)("img",{src:w,className:"card-img",alt:""})}),(0,j.jsx)(l.Z,{md:8,children:(0,j.jsxs)(o.Z.Body,{children:[(0,j.jsx)(o.Z.Title,{as:"h5",className:"mb-1",children:"Shreyu N"}),(0,j.jsx)("h6",{className:"text-muted fw-normal mt-0 mb-3",children:"New York, USA"}),(0,j.jsxs)(t.Z,{className:"text-center",children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)(Z.Z,{variant:"primary",className:"btn-sm w-100 me-1",children:"Follow"})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)(Z.Z,{variant:"white",className:"btn-sm w-100",children:"Message"})})]})]})})]})}),(0,j.jsx)(o.Z,{children:(0,j.jsxs)(o.Z.Body,{className:"p-3",children:[(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)("img",{src:w,className:"me-3 avatar-lg rounded",alt:""}),(0,j.jsxs)("div",{className:"flex-grow-1",children:[(0,j.jsx)("h5",{className:"mt-1 mb-0",children:"Shreyu N"}),(0,j.jsx)("h6",{className:"fw-normal mt-1 mb-1",children:(0,j.jsx)(A.rU,{to:"#",children:"@shreyu"})}),(0,j.jsx)("p",{className:"text-muted",children:"Designer | Creative | Thinker"})]})]}),(0,j.jsxs)(t.Z,{className:"mt-2 border-top pt-2",children:[(0,j.jsx)(l.Z,{children:(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)("span",{className:"icon-dual align-self-center me-2",children:(0,j.jsx)(u.Z,{icon:"users"})}),(0,j.jsxs)("div",{className:"flex-grow-1",children:[(0,j.jsx)("h5",{className:"mt-2 pt-1 mb-0 fs-16",children:"1.9M"}),(0,j.jsx)("h6",{className:"fw-normal mt-0",children:"Followers"})]})]})}),(0,j.jsx)(l.Z,{children:(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)("span",{className:"icon-dual align-self-center me-2",children:(0,j.jsx)(u.Z,{icon:"eye"})}),(0,j.jsxs)("div",{className:"flex-grow-1",children:[(0,j.jsx)("h5",{className:"mt-2 pt-1 mb-0 fs-16",children:"19M"}),(0,j.jsx)("h6",{className:"fw-normal mt-0",children:"Views"})]})]})}),(0,j.jsx)(l.Z,{children:(0,j.jsxs)("div",{className:"d-flex",children:[(0,j.jsx)("span",{className:"icon-dual align-self-center me-2",children:(0,j.jsx)(u.Z,{icon:"file-text"})}),(0,j.jsxs)("div",{className:"flex-grow-1",children:[(0,j.jsx)("h5",{className:"mt-2 pt-1 mb-0 fs-16",children:"1k"}),(0,j.jsx)("h6",{className:"fw-normal mt-0",children:"Posts"})]})]})})]}),(0,j.jsxs)(t.Z,{className:"mt-3 text-center",children:[(0,j.jsx)(l.Z,{children:(0,j.jsx)(Z.Z,{variant:"primary",className:"btn-sm w-100 me-1",children:"Follow"})}),(0,j.jsx)(l.Z,{children:(0,j.jsx)(Z.Z,{variant:"white",className:"btn-sm w-100",children:"Message"})})]})]})})]})},R=a(17125),B=function(){return(0,j.jsx)(o.Z,{children:(0,j.jsxs)(o.Z.Body,{className:"p-0",children:[(0,j.jsxs)("div",{className:"p-3",children:[(0,j.jsxs)(P.Z,{className:"float-end",align:"end",children:[(0,j.jsx)(P.Z.Toggle,{as:"a",className:"cursor-pointer arrow-none text-muted",children:(0,j.jsx)("i",{className:"uil uil-ellipsis-v"})}),(0,j.jsxs)(P.Z.Menu,{children:[(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-refresh me-2"}),"Refresh"]}),(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-user-plus me-2"}),"Add New"]}),(0,j.jsx)(P.Z.Divider,{}),(0,j.jsxs)(P.Z.Item,{className:"text-danger",children:[(0,j.jsx)("i",{className:"uil uil-exit me-2"}),"Exit"]})]})]}),(0,j.jsx)("h5",{className:"card-title header-title mb-0",children:"Overview"})]}),(0,j.jsx)(R.Z,{stats:"121,000",title:"Total Visitors",icon:"users",iconClass:"icon-lg"}),(0,j.jsx)(R.Z,{stats:"21,000",title:"Total Product Views",icon:"image",iconClass:"icon-lg"}),(0,j.jsx)(R.Z,{stats:"$21.5",title:"Revenue Per Visitor",icon:"shopping-bag",iconClass:"icon-lg"}),(0,j.jsx)(R.Z,{stats:"8,547",title:"Revenue Per Visitor",icon:"aperture",iconClass:"icon-lg"})]})})},E=function(e){var s=e.activities;return(0,j.jsx)(o.Z,{children:(0,j.jsxs)(o.Z.Body,{children:[(0,j.jsx)(A.rU,{to:"#",className:"btn btn-primary btn-sm float-end",children:"View All"}),(0,j.jsx)("h6",{className:"header-title mb-4",children:"Activities"}),(s||[]).map((function(e,s){return(0,j.jsxs)("div",{className:h()("d-flex",{"mt-3":0!==s}),children:[e.avatar&&(0,j.jsx)("img",{src:e.avatar,className:"me-3 avatar rounded-circle",alt:""}),e.userInitial&&(0,j.jsx)("div",{className:"avatar me-3 fs-24 fw-normal flex-shrink-0",children:(0,j.jsx)("span",{className:h()("avatar-title","rounded-circle","bg-soft-"+e.variant,"text-"+e.variant),children:e.userInitial})}),(0,j.jsxs)("div",{className:"flex-grow-1",children:[(0,j.jsx)("h6",{className:"mt-0 mb-1 fs-15 fw-normal",children:(0,j.jsx)("div",{dangerouslySetInnerHTML:(a=e.activityTitle,{__html:a})})}),(0,j.jsx)("p",{className:"text-muted",children:e.time})]})]},s);var a}))]})})},F=a(29439),H=a(33976),O=function(e){var s=e.calendarEvents,a=(0,i.useState)(new Date),r=(0,F.Z)(a,2),n=r[0],c=r[1];return(0,j.jsx)(o.Z,{children:(0,j.jsxs)(o.Z.Body,{children:[(0,j.jsxs)(P.Z,{className:"float-end",align:"end",children:[(0,j.jsx)(P.Z.Toggle,{as:"a",className:"cursor-pointer arrow-none text-muted",children:(0,j.jsx)("i",{className:"uil uil-ellipsis-v"})}),(0,j.jsxs)(P.Z.Menu,{children:[(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-edit-alt me-2"}),"Edit"]}),(0,j.jsxs)(P.Z.Item,{children:[(0,j.jsx)("i",{className:"uil uil-refresh me-2"}),"Refresh"]}),(0,j.jsx)(P.Z.Divider,{}),(0,j.jsxs)(P.Z.Item,{className:"text-danger",children:[(0,j.jsx)("i",{className:"uil uil-trash me-2"}),"Delete"]})]})]}),(0,j.jsx)("h4",{className:"header-title mb-4",children:"Team Events"}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{sm:6,children:(0,j.jsx)("div",{id:"calendar-widget",children:(0,j.jsx)(H.Z,{value:n,onChange:function(e){return c(e)},inline:!0,calendarClassName:"border border-1"})})}),(0,j.jsx)(l.Z,{sm:6,children:(0,j.jsxs)("ul",{className:"list-unstyled ms-md-5 ms-xxl-2 ps-sm-2 ps-lg-0 ps-xxl-4 mt-4 mt-sm-0",children:[(s||[]).map((function(e,s){return(0,j.jsxs)("li",{className:"mb-3",children:[(0,j.jsxs)("p",{className:"text-muted mb-0 fs-13",children:[(0,j.jsx)("i",{className:"uil uil-calender me-1"}),e.time]}),(0,j.jsx)("h6",{className:"mt-1 fs-16",children:e.title})]},s)})),(0,j.jsx)("li",{children:(0,j.jsxs)(A.rU,{to:"#",className:"btn btn-primary w-75 mb-0",children:[(0,j.jsx)("i",{className:"uil uil-focus-add me-2"}),"Add Event"]})})]})})]})]})})},U=a(40900),V=a(68328),G=[{id:1,title:"UX Planning Meeting",time:"7:30 AM - 10:00 AM"},{id:2,title:"Hyper v3 Scope Review",time:"10:30 AM - 11:45 AM"},{id:3,title:"Ubold v4 Brainstorming",time:"12:15 PM - 02:00 PM"},{id:4,title:"Shreyu React Planning",time:"5:30 PM - 06:15 PM"}],$=[{id:1,avatar:w,activityTitle:'<a href="javascript:void(0)" class="fw-bold">Shreyu</a> has attached design-draft.sketch in project<span class="fw-bold text-primary"> Admin </span>',time:"2 Min Ago"},{id:2,userInitial:"G",variant:"primary",activityTitle:'<a href="javascript:void(0)" class="fw-bold">Greeva</a> has commented on project <span class="fw-bold text-primary">Admin</span>',time:"12 Min Ago"},{id:3,avatar:V,activityTitle:' <a href="javascript:void(0)" class="fw-bold">Mannat</a> has reacted with <i class=\'uil uil-thumbs-up text-success fs-13\'></i> on comment from <span class="fw-bold text-primary">Shreyu</span> on project <span class="fw-bold text-primary">Admin</span>',time:"14 Min Ago"},{id:4,userInitial:"D",variant:"success",activityTitle:'<a href="javascript:void(0)" class="fw-bold">Dhyani</a> has reacted with <i class=\'uil uil-heart-sign text-danger fs-13\'></i> on comment from <span class="fw-bold text-primary">Shreyu</span> on project <span class="fw-bold text-primary">Admin</span>',time:"14 Min Ago"}],W=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.Z,{breadCrumbItems:[{label:"Components",path:"/apps/widgets"},{label:"Widgets",path:"/apps/widgets",active:!0}],title:"Widgets"}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(f,{variant:"primary",title:"Today Revenue",stats:"$851",icon:"shopping-bag"})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(f,{variant:"warning",title:"Product Sold",stats:"2541",icon:"briefcase"})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(f,{variant:"success",title:"New Customers",stats:"654",icon:"users"})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(f,{variant:"info",title:"New Visitors",stats:"854",icon:"file-text"})})]}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(N,{variant:"primary",title:"Today Revenue",stats:"$6512",progress:32,description:"36% Avg"})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(N,{variant:"warning",title:"Product Sold",stats:"352",progress:60,description:"36 Daily Avg"})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(N,{variant:"success",title:"New Customers",stats:"7580",progress:60,description:"3 Daily Avg"})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(N,{variant:"info",title:"New Visitors",stats:"6985",progress:45,description:"300 Daily Avg"})})]}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(n.Z,{title:"Today Revenue",stats:"$2100",trend:{textClass:"text-success",icon:"uil uil-arrow-up",value:"10.21%"},colors:["#727cf5"]})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(n.Z,{title:"Product Sold",stats:"558",trend:{textClass:"text-danger",icon:"uil uil-arrow-down",value:"5.05%"},colors:["#f77e53"]})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(n.Z,{title:"New Customers",stats:"65",trend:{textClass:"text-success",icon:"uil uil-arrow-up",value:"21.16%"},colors:["#43d39e"]})}),(0,j.jsx)(l.Z,{sm:6,xl:3,children:(0,j.jsx)(n.Z,{title:"New Visitors",stats:"958",trend:{textClass:"text-danger",icon:"uil uil-arrow-down",value:"5.05%"},colors:["#ffbe0b"]})})]}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{md:6,xl:4,children:(0,j.jsx)(g,{title:"21,000",subtitle:"Visits",colors:["#5369f8"]})}),(0,j.jsx)(l.Z,{md:6,xl:4,children:(0,j.jsx)(g,{title:"1100",subtitle:"Customers",colors:["#43d39e"]})}),(0,j.jsx)(l.Z,{md:6,xl:4,children:(0,j.jsx)(g,{title:"$201,200",subtitle:"Revenue",colors:["#f77e53"]})})]}),(0,j.jsx)("h4",{className:"mb-3 pb-1",children:"Profile/User"}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{md:6,xxl:3,children:(0,j.jsx)(y,{})}),(0,j.jsx)(l.Z,{md:6,xxl:3,children:(0,j.jsx)(C,{})}),(0,j.jsx)(l.Z,{md:6,xxl:3,children:(0,j.jsx)(M,{})}),(0,j.jsx)(l.Z,{md:6,xxl:3,children:(0,j.jsx)(T,{})})]}),(0,j.jsx)("h4",{className:"mb-3 pb-1",children:"Team"}),(0,j.jsxs)(t.Z,{children:[(0,j.jsx)(l.Z,{xxl:3,md:5,children:(0,j.jsx)(c.Z,{title:"Team Members",members:U.Q8})}),(0,j.jsx)(l.Z,{xxl:4,md:7,children:(0,j.jsx)(d.Z,{title:"Team Chat",messages:U.Ve})}),(0,j.jsx)(l.Z,{xxl:5,md:8,children:(0,j.jsx)(O,{calendarEvents:G})}),(0,j.jsx)(l.Z,{xxl:4,md:4,children:(0,j.jsx)(B,{})}),(0,j.jsx)(l.Z,{xxl:4,md:6,children:(0,j.jsx)(m.Z,{tasks:U.wq})}),(0,j.jsx)(l.Z,{xxl:4,md:6,children:(0,j.jsx)(E,{activities:$})})]})]})}},45736:function(e,s,a){var i=a(1413),t=a(45987),l=a(81694),r=a.n(l),n=a(72791),c=a(10162),d=a(80184),m=["bsPrefix","bg","pill","text","className","as"],o=n.forwardRef((function(e,s){var a=e.bsPrefix,l=e.bg,n=e.pill,o=e.text,x=e.className,h=e.as,u=void 0===h?"span":h,j=(0,t.Z)(e,m),f=(0,c.vE)(a,"badge");return(0,d.jsx)(u,(0,i.Z)((0,i.Z)({ref:s},j),{},{className:r()(x,f,n&&"rounded-pill",o&&"text-".concat(o),l&&"bg-".concat(l))}))}));o.displayName="Badge",o.defaultProps={bg:"primary",pill:!1},s.Z=o},2461:function(e,s,a){a.d(s,{Z:function(){return f}});var i=a(1413),t=a(45987),l=a(81694),r=a.n(l),n=a(72791),c=a(10162),d=a(56236),m=a(80184),o=["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"],x=n.forwardRef((function(e,s){var a=e.bsPrefix,l=e.active,n=e.children,x=e.className,h=e.as,u=void 0===h?"li":h,j=e.linkAs,f=void 0===j?d.Z:j,p=e.linkProps,N=e.href,v=e.title,g=e.target,Z=(0,t.Z)(e,o),b=(0,c.vE)(a,"breadcrumb-item");return(0,m.jsx)(u,(0,i.Z)((0,i.Z)({ref:s},Z),{},{className:r()(b,x,{active:l}),"aria-current":l?"page":void 0,children:l?n:(0,m.jsx)(f,(0,i.Z)((0,i.Z)({},p),{},{href:N,title:v,target:g,children:n}))}))}));x.displayName="BreadcrumbItem",x.defaultProps={active:!1,linkProps:{}};var h=x,u=["bsPrefix","className","listProps","children","label","as"],j=n.forwardRef((function(e,s){var a=e.bsPrefix,l=e.className,n=e.listProps,d=e.children,o=e.label,x=e.as,h=void 0===x?"nav":x,j=(0,t.Z)(e,u),f=(0,c.vE)(a,"breadcrumb");return(0,m.jsx)(h,(0,i.Z)((0,i.Z)({"aria-label":o,className:l,ref:s},j),{},{children:(0,m.jsx)("ol",(0,i.Z)((0,i.Z)({},n),{},{className:r()(f,null==n?void 0:n.className),children:d}))}))}));j.displayName="Breadcrumb",j.defaultProps={label:"breadcrumb",listProps:{}};var f=Object.assign(j,{Item:h})},29913:function(e,s,a){a.d(s,{Z:function(){return v}});var i=a(4942),t=a(1413),l=a(45987),r=a(81694),n=a.n(r),c=a(72791),d=a(10162);function m(e,s){var a=0;return c.Children.map(e,(function(e){return c.isValidElement(e)?s(e,a++):e}))}var o=a(80184),x=["min","now","max","label","visuallyHidden","striped","animated","className","style","variant","bsPrefix"],h=["isChild"],u=["min","now","max","label","visuallyHidden","striped","animated","bsPrefix","variant","className","children"],j=1e3;function f(e,s,a){var i=(e-s)/(a-s)*100;return Math.round(i*j)/j}function p(e,s){var a,r=e.min,c=e.now,d=e.max,m=e.label,h=e.visuallyHidden,u=e.striped,j=e.animated,p=e.className,N=e.style,v=e.variant,g=e.bsPrefix,Z=(0,l.Z)(e,x);return(0,o.jsx)("div",(0,t.Z)((0,t.Z)({ref:s},Z),{},{role:"progressbar",className:n()(p,"".concat(g,"-bar"),(a={},(0,i.Z)(a,"bg-".concat(v),v),(0,i.Z)(a,"".concat(g,"-bar-animated"),j),(0,i.Z)(a,"".concat(g,"-bar-striped"),j||u),a)),style:(0,t.Z)({width:"".concat(f(c,r,d),"%")},N),"aria-valuenow":c,"aria-valuemin":r,"aria-valuemax":d,children:h?(0,o.jsx)("span",{className:"visually-hidden",children:m}):m}))}var N=c.forwardRef((function(e,s){var a=e.isChild,i=(0,l.Z)(e,h);if(i.bsPrefix=(0,d.vE)(i.bsPrefix,"progress"),a)return p(i,s);var r=i.min,x=i.now,j=i.max,f=i.label,N=i.visuallyHidden,v=i.striped,g=i.animated,Z=i.bsPrefix,b=i.variant,w=i.className,y=i.children,P=(0,l.Z)(i,u);return(0,o.jsx)("div",(0,t.Z)((0,t.Z)({ref:s},P),{},{className:n()(w,Z),children:y?m(y,(function(e){return(0,c.cloneElement)(e,{isChild:!0})})):p({min:r,now:x,max:j,label:f,visuallyHidden:N,striped:v,animated:g,bsPrefix:Z,variant:b},s)}))}));N.displayName="ProgressBar",N.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var v=N},98799:function(e,s,a){e.exports=a.p+"static/media/img-4.05a33199c02c3bb40492.jpg"},83328:function(e,s,a){e.exports=a.p+"static/media/img-6.386f4399f40ad5b543c7.jpg"}}]);
//# sourceMappingURL=4436.ed65a67c.chunk.js.map
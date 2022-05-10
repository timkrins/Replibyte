"use strict";(self.webpackChunkreplibyte=self.webpackChunkreplibyte||[]).push([[937],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?i.createElement(k,l(l({ref:t},c),{},{components:a})):i.createElement(k,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9880:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return m}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),l=a(9750),o=a(4996),s=["components"],p={title:"Introduction",description:"Replibyte is a tool to seed your development database with your production data while keeping sensitive data safe",hide_title:!0,sidebar_position:1},c=void 0,d={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Replibyte is a tool to seed your development database with your production data while keeping sensitive data safe",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/Qovery/replibyte/tree/main/website/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Introduction",description:"Replibyte is a tool to seed your development database with your production data while keeping sensitive data safe",hide_title:!0,sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"How Replibyte works",permalink:"/docs/how-replibyte-works"}},u={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Usage",id:"usage",level:2},{value:"Features",id:"features",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Demo",id:"demo",level:2},{value:"Motivation",id:"motivation",level:2}],k={toc:m};function b(e){var t=e.components,p=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},k,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.Z,{alt:"Replibyte logo",sources:{light:(0,o.Z)("/img/full_logo_light.svg"),dark:(0,o.Z)("/img/full_logo.svg")},mdxType:"ThemedImage"}),(0,r.kt)("p",null,"Replibyte is a blazingly fast tool to seed your databases with your production data while keeping sensitive data safe \u26a1\ufe0f"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"License: MIT"})),"\n",(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/stability-stable-green.svg?style=flat-square",alt:"stability badge"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://github.com/Qovery/replibyte/actions/workflows/build-and-test.yml/badge.svg?style=flat-square",alt:"build and tests badge"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.qovery.com"},(0,r.kt)("img",{parentName:"a",src:"https://img.shields.io/discord/688766934917185556?label=discord&style=flat-square",alt:"discord server"}))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MacOSX / Linux / Windows"),(0,r.kt)("li",{parentName:"ul"},"Nothing more! Replibyte is stateless and does not require anything special.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Create a dump"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c conf.yaml dump create\n")),(0,r.kt)("p",null,"List all dumps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c conf.yaml dump list\n\ntype          name                  size    when                    compressed  encrypted\nPostgreSQL    dump-1647706359405    154MB   Yesterday at 03:00 am   true        true\nPostgreSQL    dump-1647731334517    152MB   2 days ago at 03:00 am  true        true\nPostgreSQL    dump-1647734369306    149MB   3 days ago at 03:00 am  true        true\n")),(0,r.kt)("p",null,"Restore the latest dump in a local container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c conf.yaml dump restore local -v latest -i postgres -p 5432\n")),(0,r.kt)("p",null,"Restore the latest dump in a remote database"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"replibyte -c conf.yaml dump restore remote -v latest\n")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Support data backup and restore for PostgreSQL, MySQL and MongoDB"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Replace sensitive data with fake data"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Works on large database (> 10GB)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Database Subsetting: Scale down a production database to a more reasonable size \ud83d\udd25"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Start a local database with the prod data in a single command \ud83d\udd25"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","On-the-fly data (de)compression (Zlib)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","On-the-fly data de/encryption (AES-256)"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Fully stateless (no server, no daemon) and lightweight binary \ud83c\udf43"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Use custom transformers")),(0,r.kt)("p",null,"Here are the features we plan to support"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Auto-detect and version database schema change"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Auto-detect sensitive fields"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Auto-clean backed up data")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/how-replibyte-works"},"How Replibyte works")),(0,r.kt)("li",{parentName:"ul"},"Initial setup:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/installation"},"Install")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/getting-started/configuration"},"Configure")))),(0,r.kt)("li",{parentName:"ul"},"Step-by-step guides:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/create-a-dump"},"Create a dump")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/restore-a-dump"},"Restore a dump")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/subset-a-dump"},"Subset a dump")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"/docs/guides/delete-a-dump"},"Delete a dump")),(0,r.kt)("li",{parentName:"ol"},"Deploy Replibyte",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.replibyte.com/docs/guides/deploy-replibyte/container"},"Container")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.replibyte.com/docs/guides/deploy-replibyte/qovery"},"Qovery"))))))),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=IKeLnZvECQw"},(0,r.kt)("img",{alt:"What is RepliByte",src:a(6107).Z,width:"1200",height:"677"}))),(0,r.kt)("h2",{id:"motivation"},"Motivation"),(0,r.kt)("p",null,"At ",(0,r.kt)("a",{parentName:"p",href:"https://www.qovery.com"},"Qovery")," (the company behind Replibyte), developers can clone their applications and databases just with one\nclick. However, the cloning process can be tedious and time-consuming, and we end up copying the information multiple times. With RepliByte,\nthe Qovery team wants to provide a comprehensive way to seed cloud databases from one place to another."),(0,r.kt)("p",null,"The long-term motivation behind RepliByte is to provide a way to clone any database in real-time. This project starts small, but has big\nambition!"))}b.isMDXComponent=!0},6107:function(e,t,a){t.Z=a.p+"assets/images/video_-71b9492b588aacd81cf43622a4fb5115.png"}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],o={sidebar_position:1},c="Installation",s={unversionedId:"installation",id:"installation",title:"Installation",description:"PACKAGENAMEHERE can be installed in several ways depending on your workflow.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Usage",permalink:"/docs/usage"}},u=[{value:"Installing with Wally",id:"installing-with-wally",children:[],level:2},{value:"Installing with Rojo",id:"installing-with-rojo",children:[],level:2},{value:"Installing with Roblox",id:"installing-with-roblox",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"PACKAGE_NAME_HERE can be installed in several ways depending on your workflow."),(0,l.kt)("h2",{id:"installing-with-wally"},"Installing with Wally"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add this line to your ",(0,l.kt)("inlineCode",{parentName:"p"},"wally.toml")," file under ",(0,l.kt)("inlineCode",{parentName:"p"},"[dependencies]"),":"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'PACKAGE_NAME_HERE = "username_here/package_name_here@0.1.0"\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Then run ",(0,l.kt)("inlineCode",{parentName:"p"},"wally install")," to install the package."))),(0,l.kt)("h2",{id:"installing-with-rojo"},"Installing with Rojo"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download the ",(0,l.kt)("inlineCode",{parentName:"li"},"Packaged.zip")," file from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/username_here/package_name_here/releases"},"releases page"),"."),(0,l.kt)("li",{parentName:"ul"},"Unzip the file into the desired location in your project.")),(0,l.kt)("h2",{id:"installing-with-roblox"},"Installing with Roblox"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download the ",(0,l.kt)("inlineCode",{parentName:"li"},"rbxm")," model file from the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/username_here/package_name_here/releases"},"releases page"),"."),(0,l.kt)("li",{parentName:"ul"},"Drag the model into Roblox Studio to add it to the game.")))}d.isMDXComponent=!0}}]);
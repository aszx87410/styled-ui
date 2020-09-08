(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,o=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},M6FF:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("cxan"),r=n("HbGN"),o=n("ERkP"),b=n.n(o),c=n("ZVZ0"),l=(b.a.createElement,{}),i="wrapper";function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(i,Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Badge"),Object(c.b)("p",null,"Badges are used to highlight an item's status for quick recognition."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import Badge from '@trendmicro/react-styled-ui/Badge';\n// or\nimport { Badge } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x" shouldWrapChildren>\n  <Stack direction="row" spacing="6x" shouldWrapChildren>\n    <Badge badgeContent="5+">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="87">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot" offset={[4, 2]} borderColor="gray:100">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge variant="dot" dotSize={6} offset={[4, 2]} borderColor="gray:100">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge isHidden>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent="!">\n      <Icon icon="alert" />\n    </Badge>\n    <Badge badgeContent={<Text color="yellow:50">Text</Text>}>\n      <Icon icon="alert" />\n    </Badge>\n  </Stack>\n  <Stack direction="row" spacing="6x" shouldWrapChildren>\n    <Badge badgeContent="5+">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent="99+">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent="87">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge variant="dot" borderColor="gray:100">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge variant="dot" dotSize={6} borderColor="gray:100">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge isHidden>\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent={0}>\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent="!">\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n    <Badge badgeContent={<Text color="yellow:50">Text</Text>}>\n      <Skeleton variant="rect" width={42} height={42} />\n    </Badge>\n  </Stack>\n</Stack>\n')),Object(c.b)("h3",null,"Badge color"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Pass the ",Object(c.b)("inlineCode",{parentName:"p"},"variantColor")," prop to customize the color of the Badge. ",Object(c.b)("inlineCode",{parentName:"p"},"variantColor"),"\ncan be any ",Object(c.b)("strong",{parentName:"p"},"color key with key 60")," that exists in the ",Object(c.b)("inlineCode",{parentName:"p"},"theme.colors"),"."),Object(c.b)("blockquote",{parentName:"li"},Object(c.b)("p",{parentName:"blockquote"},"Thats mean the ",Object(c.b)("inlineCode",{parentName:"p"},"green:60")," exists in the ",Object(c.b)("inlineCode",{parentName:"p"},"theme.colors"),' then can use variantColor="green".'))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./theme"}),"Learn more about theming"),"."))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="4x">\n  <Badge badgeContent={1} />\n  <Badge variantColor="orange" badgeContent={2} />\n  <Badge variantColor="yellow" badgeContent={3} />\n  <Badge variantColor="green" badgeContent={4} />\n  <Badge variantColor="blue" badgeContent={5} />\n  <Badge variantColor="gray" badgeContent={6} />\n  <Badge variantColor="magenta" badgeContent={7} />\n  <Badge variantColor="purple" badgeContent={8} />\n  <Badge variantColor="teal" badgeContent={9} />\n  <Badge variantColor="cyan" badgeContent={10} />\n</Stack>\n')),Object(c.b)("h3",null,"Badge border color"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Pass the ",Object(c.b)("inlineCode",{parentName:"li"},"borderColor")," or ",Object(c.b)("inlineCode",{parentName:"li"},"borderWidth")," props to customize the border of the Badge. It only effect on wrapped children.")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="6x" shouldWrapChildren>\n  <Badge badgeContent="5" borderColor="orange:50">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge badgeContent="5">\n    <Icon icon="alert" borderColor="orange:50" borderWidth={3} />\n  </Badge>\n  <Badge badgeContent="5" borderColor="orange:50">\n    <Icon icon="alert" />\n  </Badge>\n  <Badge variant="dot" offset={[4, 2]} borderColor="orange:50" borderWidth={3}>\n    <Icon icon="alert" />\n  </Badge>\n</Stack>\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"Badge")," composes the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"variant"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'badge'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'badge' or 'dot'.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"variantColor"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'red'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The color scheme to use for the badge. It must be a color key defined in ",Object(c.b)("inlineCode",{parentName:"td"},"theme.colors"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"badgeContent"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number","|","string","|","React Element"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isHidden"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"show badge content or not.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"offset"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"[","number, number","]"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"-"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Set offset of the badge.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"borderColor"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"value of ",Object(c.b)("inlineCode",{parentName:"td"},"variantColor")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Set border color of the badge when overlap a children.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"borderWidth"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Set border width of the badge when overlap a children.")))))}d.isMDXComponent=!0},S8Xn:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/badge",function(){return n("M6FF")}])},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return g})),n.d(t,"b",(function(){return u}));var a=n("ERkP"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},g=function(e){var t=d(e.components);return(r.a.createElement(i.Provider,{value:t},e.children))},p="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return(r.a.createElement(r.a.Fragment,{},t))}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,b=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),g=d(n),p=a,j=g["".concat(b,".").concat(p)]||g[p]||O[p]||o;return n?r.a.createElement(j,c(c({ref:t},i),{},{components:n})):r.a.createElement(j,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var o=n.length,b=new Array(o);b[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"===typeof e?e:a,b[1]=c;for(var i=2;i<o;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))}},[["S8Xn",0,1]]]);
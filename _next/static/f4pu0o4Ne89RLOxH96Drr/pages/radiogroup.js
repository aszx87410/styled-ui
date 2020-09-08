(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"+wNj":function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))},"2RCI":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("cxan"),r=a("HbGN"),o=a("ERkP"),i=a.n(o),c=a("ZVZ0"),l=(i.a.createElement,{}),b="wrapper";function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"RadioGroup"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"RadioGroup")," is used to group related radios."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import RadioGroup from '@trendmicro/react-styled-ui/RadioGroup';\n// or\nimport { RadioGroup } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h3",null,"Usage"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'function RadioExample() {\n  const [value, setValue] = React.useState("2");\n  return (\n    <RadioGroup onChange={e => setValue(e.target.value)} value={value}>\n      <Stack spacing="1x" shouldWrapChildren>\n        <Radio value="1">First</Radio>\n        <Radio value="2">Second</Radio>\n        <Radio value="3">Third</Radio>\n      </Stack>\n    </RadioGroup>\n  );\n}\n')),Object(c.b)("h3",null,"Group orientation"),Object(c.b)("p",null,"Make a set of radios appear horizontal stacked rather than vertically, by adding ",Object(c.b)("inlineCode",{parentName:"p"},'direction="row"')," to the ",Object(c.b)("inlineCode",{parentName:"p"},"Stack")," component."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<RadioGroup defaultValue="1">\n  <Stack direction="row" spacing="3x">\n    <Radio value="1">Radio 1</Radio>\n    <Radio value="2">Radio 2</Radio>\n    <Radio value="3">Radio 3</Radio>\n  </Stack>\n</RadioGroup>\n')),Object(c.b)("h3",null,"Colors"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"variantColor")," prop to change the color scheme of the Radio. ",Object(c.b)("inlineCode",{parentName:"p"},"variantColor")," can be any color key with key ",Object(c.b)("inlineCode",{parentName:"p"},"50"),"(hover), ",Object(c.b)("inlineCode",{parentName:"p"},"60"),"(checked) that exist in the ",Object(c.b)("inlineCode",{parentName:"p"},"theme.colors"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<RadioGroup variantColor="green" defaultValue="2">\n  <Stack direction="row" spacing="3x">\n    <Radio value="1">Radio 1</Radio>\n    <Radio value="2">Radio 2</Radio>\n  </Stack>\n</RadioGroup>\n')),Object(c.b)("h3",null,"Sizes"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(c.b)("inlineCode",{parentName:"p"},"RadioGroup"),". You can set the value to ",Object(c.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(c.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(c.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x" shouldWrapChildren>\n  <RadioGroup size="sm">\n    <Stack direction="row" spacing="3x">\n      <Radio value="1">Radio 1</Radio>\n      <Radio value="2">Radio 2</Radio>\n      <Radio value="3">Radio 3</Radio>\n    </Stack>\n  </RadioGroup>\n  <RadioGroup size="md">\n    <Stack direction="row" spacing="3x">\n      <Radio value="1">Radio 1</Radio>\n      <Radio value="2">Radio 2</Radio>\n      <Radio value="3">Radio 3</Radio>\n    </Stack>\n  </RadioGroup>\n  <RadioGroup size="lg">\n    <Stack direction="row" spacing="3x">\n      <Radio value="1">Radio 1</Radio>\n      <Radio value="2">Radio 2</Radio>\n      <Radio value="3">Radio 3</Radio>\n    </Stack>\n  </RadioGroup>\n</Stack>\n')),Object(c.b)("h3",null,"States"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<RadioGroup defaultValue="1" disabled>\n  <Stack direction="row" spacing="3x">\n    <Radio value="1">Radio 1</Radio>\n    <Radio value="2">Radio 2</Radio>\n    <Radio value="3">Radio 3</Radio>\n  </Stack>\n</RadioGroup>\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"name"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The name used to reference the value of the control. If you don't provide this prop, it falls back to a randomly generated name.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"value"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string ","|"," number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The value to be used in the radio input. This is the value that will be returned on form submission.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"disabled"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If ",Object(c.b)("inlineCode",{parentName:"td"},"true"),", all radios will be disabled.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"variantColor"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The color of the radio when it's checked. This should be one of the color keys in the theme (e.g. ",Object(c.b)("inlineCode",{parentName:"td"},"'green'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'red'"),").")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The size (width and height) of the radio. One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"defaultValue"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"string ","|"," number"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The default ",Object(c.b)("inlineCode",{parentName:"td"},"input")," element value. Use when the component is not controlled.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"children"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"ReactNode"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The children of the radio.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"onChange"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"function`"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"A callback called when the state of the radio changes.")))))}d.isMDXComponent=!0},F2uK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/radiogroup",function(){return a("2RCI")}])},HbGN:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("+wNj");function r(e,t){if(null==e)return{};var a,r,o=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}},Km8e:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},ZVZ0:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a("ERkP"),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"===typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return(r.a.createElement(b.Provider,{value:t},e.children))},u="mdxType",O={inlineCode:"code",wrapper:function(e){var t=e.children;return(r.a.createElement(r.a.Fragment,{},t))}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,j=p["".concat(i,".").concat(u)]||p[u]||O[u]||o;return a?r.a.createElement(j,c(c({ref:t},b),{},{components:a})):r.a.createElement(j,c({ref:t},b))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var o=a.length,i=new Array(o);i[0]=j;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"===typeof e?e:n,i[1]=c;for(var b=2;b<o;b++)i[b]=a[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},cxan:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))}},[["F2uK",0,1]]]);
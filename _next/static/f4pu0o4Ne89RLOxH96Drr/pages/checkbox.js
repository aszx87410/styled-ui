(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"+wNj":function(e,t,n){"use strict";function c(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return c}))},"3ADl":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/checkbox",function(){return n("s1aV")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n("+wNj");function a(e,t){if(null==e)return{};var n,a,r=Object(c.a)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},Km8e:function(e,t,n){"use strict";var c=Object.assign.bind(Object);e.exports=c,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var c=n("ERkP"),a=n.n(c);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):b(b({},t),e)),n},h=function(e){var t=s(e.components);return(a.a.createElement(i.Provider,{value:t},e.children))},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return(a.a.createElement(a.a.Fragment,{},t))}},u=a.a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),h=s(n),p=c,u=h["".concat(o,".").concat(p)]||h[p]||d[p]||r;return n?a.a.createElement(u,b(b({ref:t},i),{},{components:n})):a.a.createElement(u,b({ref:t},i))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"===typeof e||c){var r=n.length,o=new Array(r);o[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b[p]="string"===typeof e?e:c,o[1]=b;for(var i=2;i<r;i++)o[i]=n[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return c}))},s1aV:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var c=n("cxan"),a=n("HbGN"),r=n("ERkP"),o=n.n(r),b=n("ZVZ0"),l=(o.a.createElement,{}),i="wrapper";function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(b.b)(i,Object(c.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"Checkbox"),Object(b.b)("p",null,"Use a ",Object(b.b)("inlineCode",{parentName:"p"},"Checkbox")," in forms when a user needs to select multiple values from a list of options."),Object(b.b)("p",null,"Since native HTML checkboxes are 100% accessible by default, a common ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"https://dev.to/lkopacz/create-custom-keyboard-accessible-checkboxes-2036"}),"CSS technique")," is used to style checkboxes."),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"Checkbox")," component is composed of the ",Object(b.b)("a",Object(c.a)({parentName:"p"},{href:"./controlbox"}),Object(b.b)("inlineCode",{parentName:"a"},"ControlBox"))," component that is created to style an element based on sibling input."),Object(b.b)("h2",null,"Import"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-js"}),"import Checkbox from '@trendmicro/react-styled-ui/Checkbox';\n// or\nimport { Checkbox } from '@trendmicro/react-styled-ui';\n")),Object(b.b)("h2",null,"Usage"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),"<Checkbox defaultChecked>Checkbox</Checkbox>\n")),Object(b.b)("h3",null,"Colors"),Object(b.b)("p",null,"Use the ",Object(b.b)("inlineCode",{parentName:"p"},"variantColor")," prop to change the color scheme of the checkbox. ",Object(b.b)("inlineCode",{parentName:"p"},"variantColor")," can be any color key with key ",Object(b.b)("inlineCode",{parentName:"p"},"50")," (hover) or ",Object(b.b)("inlineCode",{parentName:"p"},"60")," (checked, active) that exist in ",Object(b.b)("inlineCode",{parentName:"p"},"theme.colors"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="6x">\n  <Checkbox variantColor="red" defaultChecked>\n    Checkbox\n  </Checkbox>\n  <Checkbox variantColor="green" defaultChecked>\n    Checkbox\n  </Checkbox>\n  <Checkbox variantColor="purple" indeterminate>\n    Checkbox\n  </Checkbox>\n</Stack>\n')),Object(b.b)("h3",null,"Sizes"),Object(b.b)("p",null,"Use the ",Object(b.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the checkbox. You can set the value to ",Object(b.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(b.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(b.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="4x">\n  <Checkbox size="sm">Checkbox</Checkbox>\n  <Checkbox size="md">Checkbox</Checkbox>\n  <Checkbox size="lg">Checkbox</Checkbox>\n</Stack>\n')),Object(b.b)("h3",null,"States"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="6x" alignItems="center">\n  <Stack spacing="2x" alignItems="center">\n    <Checkbox>Checkbox</Checkbox>\n    <Checkbox disabled>Checkbox</Checkbox>\n  </Stack>\n  <Stack spacing="2x" alignItems="center">\n    <Checkbox defaultChecked>Checkbox</Checkbox>\n    <Checkbox disabled defaultChecked>Checkbox</Checkbox>\n  </Stack>\n  <Stack spacing="2x" alignItems="center">\n    <Checkbox indeterminate>Checkbox</Checkbox>\n    <Checkbox disabled indeterminate>Checkbox</Checkbox>\n  </Stack>\n</Stack>\n')),Object(b.b)("h3",null,"Indeterminate"),Object(b.b)("pre",null,Object(b.b)("code",Object(c.a)({parentName:"pre"},{className:"language-jsx"}),'function IndeterminateExample() {\n  const [checkedItems, setCheckedItems] = React.useState([true, false]);\n  const allChecked = checkedItems.every(Boolean);\n  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;\n\n  return (\n    <>\n      <Checkbox\n        checked={allChecked}\n        indeterminate={isIndeterminate}\n        onChange={e => setCheckedItems([e.target.checked, e.target.checked])}\n        children="Parent Checkbox"\n      />\n      <Stack direction="column" pl="6x" mt="1x" spacing="1x" shouldWrapChildren>\n        <Checkbox\n          checked={checkedItems[0]}\n          onChange={e => setCheckedItems([e.target.checked, checkedItems[1]])}\n          children="Child Checkbox 1"\n        />\n        <Checkbox\n          checked={checkedItems[1]}\n          onChange={e => setCheckedItems([checkedItems[0], e.target.checked])}\n          children="Child Checkbox 2"\n        />\n      </Stack>\n    </>\n  );\n}\n')),Object(b.b)("h2",null,"Props"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Name"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(c.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"id"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The ",Object(b.b)("inlineCode",{parentName:"td"},"id")," attribute of the input field.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"name"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The name of a input field in a checkbox. The name is useful for form submissions.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"value"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"string ","|"," number"),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(c.a)({parentName:"tr"},{align:"left"}),"The value for checkbox input. This is the return value for form submissions.")))),Object(b.b)("p",null,"The color of the checkbox when it is selected. The color should be one of the color keys in the theme (for example, ",Object(b.b)("inlineCode",{parentName:"p"},"'green'"),", ",Object(b.b)("inlineCode",{parentName:"p"},"'red'"),")\n| variantColor | string | | The color of the checkbox when it is selected. The color should be one of the color keys in the theme (for example, ",Object(b.b)("inlineCode",{parentName:"p"},"'green'"),", ",Object(b.b)("inlineCode",{parentName:"p"},"'red'"),") |\n| size | string | 'md' | The size (width and height) of the checkbox. Acceptable values: ",Object(b.b)("inlineCode",{parentName:"p"},"'sm'"),", ",Object(b.b)("inlineCode",{parentName:"p"},"'md'"),", ",Object(b.b)("inlineCode",{parentName:"p"},"'lg'")," |\n| defaultChecked | boolean | | If ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", the checkbox will be selected initially. |\n| checked | boolean | | If ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", the checkbox will be selected. Use onChange to update the state for a controlled component. |\n| disabled | boolean | | If ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", the checkbox will be disabled. This sets ",Object(b.b)("inlineCode",{parentName:"p"},"aria-disabled=true")," and you can set this state by using the ",Object(b.b)("inlineCode",{parentName:"p"},"_disabled")," prop. |\n| indeterminate | boolean | | If ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", the checkbox will be indeterminate. This only affects the icon shown inside the checkbox. |\n| children | ReactNode | | The children of the checkbox. |\n| onChange | function | | A callback called when the state is changed. |\n| onBlur | function | | A callback called when the checkbox loses focus. |\n| onFocus | function | | A callback called when the checkbox receives focus. |"))}s.isMDXComponent=!0}},[["3ADl",0,1]]]);
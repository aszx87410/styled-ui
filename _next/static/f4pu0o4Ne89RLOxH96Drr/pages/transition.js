(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},AHF0:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/transition",function(){return n("pD7l")}])},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,l=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var a=n("ERkP"),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),O=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"===typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=O(e.components);return(r.a.createElement(i.Provider,{value:t},e.children))},j="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return(r.a.createElement(r.a.Fragment,{},t))}},f=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=O(n),j=a,f=p["".concat(b,".").concat(j)]||p[j]||m[j]||l;return n?r.a.createElement(f,c(c({ref:t},i),{},{components:n})):r.a.createElement(f,c({ref:t},i))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var l=n.length,b=new Array(l);b[0]=f;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[j]="string"===typeof e?e:a,b[1]=c;for(var i=2;i<l;i++)b[i]=n[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},pD7l:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var a=n("cxan"),r=n("HbGN"),l=n("ERkP"),b=n.n(l),c=n("ZVZ0"),o=(b.a.createElement,{}),i="wrapper";function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(i,Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Transition"),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import * as Transition from '@trendmicro/react-styled-ui/Transition';\n// or\nimport { Scale, Slide, SlideIn } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("h3",null,"Scale transition"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const SkeletonContent = (props) => (\n  <ModalContent p="4x" {...props}>\n    <Flex>\n      <Flex flex="none" mr="4x" align="center">\n        <Skeleton variant="circle" width="10x" height="10x" />\n      </Flex>\n      <Box flex="auto">\n        <Skeleton />\n        <Skeleton />\n        <Skeleton />\n      </Box>\n    </Flex>\n  </ModalContent>\n);\n\nfunction Example() {\n  const { isOpen, onToggle } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onToggle}>\n        Toggle\n      </Button>\n      <Scale in={isOpen}>\n        {styles => (\n          <SkeletonContent mt="4x" {...styles} />\n        )}\n      </Scale>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(c.b)("h3",null,"Slide transition"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const useSelection = (defaultValue) => {\n  const [value, setValue] = React.useState(defaultValue);\n  const changeBy = (value) => () => setValue(value);\n  return [value, changeBy];\n};\n\nconst SkeletonContent = (props) => (\n  <ModalContent p="4x" {...props}>\n    <Flex>\n      <Flex flex="none" mr="4x" align="center">\n        <Skeleton variant="circle" width="10x" height="10x" />\n      </Flex>\n      <Box flex="auto">\n        <Skeleton />\n        <Skeleton />\n        <Skeleton />\n      </Box>\n    </Flex>\n  </ModalContent>\n);\n\nfunction Example() {\n  const { isOpen, onClose, onToggle } = useDisclosure();\n  const [from, changeFromBy] = useSelection(\'top\');\n\n  return (\n    <>\n      <Box mb="4x">\n        <Button onClick={onToggle}>\n          Toggle\n        </Button>\n      </Box>\n      <ButtonGroup variant="secondary">\n        {[\'top\', \'bottom\', \'left\', \'right\'].map(value => {\n          const changeFrom = changeFromBy(value);\n          const onClick = () => {\n            changeFrom();\n            onClose();\n          };\n\n          return (\n            <Button\n              key={value}\n              selected={value === from}\n              onClick={onClick}\n              minWidth="15x"\n            >\n              {value}\n            </Button>\n          );\n        })}\n      </ButtonGroup>\n      <Slide\n        in={isOpen}\n        from={from}\n        finalWidth="100%"\n      >\n        {styles => (\n          <SkeletonContent mt="4x" {...styles} />\n        )}\n      </Slide>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(c.b)("h3",null,"Slide in transition"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const SkeletonContent = (props) => (\n  <ModalContent p="4x" {...props}>\n    <Flex>\n      <Flex flex="none" mr="4x" align="center">\n        <Skeleton variant="circle" width="10x" height="10x" />\n      </Flex>\n      <Box flex="auto">\n        <Skeleton />\n        <Skeleton />\n        <Skeleton />\n      </Box>\n    </Flex>\n  </ModalContent>\n);\n\nfunction Example() {\n  const { isOpen, onToggle } = useDisclosure();\n\n  return (\n    <>\n      <Button onClick={onToggle}>\n        Toggle\n      </Button>\n      <SlideIn in={isOpen}>\n        {styles => (\n          <SkeletonContent mt="4x" {...styles} />\n        )}\n      </SlideIn>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(c.b)("h2",null,"Props"),Object(c.b)("h3",null,"Scale"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"in"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Toggle visibility with a transition effect.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"children"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A single function-child that receives the styles and renders components.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"duration"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"150"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The duration of the transition.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"initialScale"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"0.97"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The initial zoom level.")))),Object(c.b)("h3",null,"Slide"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"in"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Toggle visibility with a transition effect.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"children"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A single function-child that receives the styles and renders components.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"duration"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"250"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The duration of the transition.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"from"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"One of: ",Object(c.b)("inlineCode",{parentName:"td"},"'bottom'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'top'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'left'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'right'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"finalHeight"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'auto'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"finalWidth"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))),Object(c.b)("h3",null,"SlideIn"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"in"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Toggle visibility with a transition effect.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"children"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A single function-child that receives the styles and renders components.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"duration"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"number"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"150"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The duration of the transition.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"offset"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'10px'"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The slide-in offset in pixel.")))))}O.isMDXComponent=!0}},[["AHF0",0,1]]]);
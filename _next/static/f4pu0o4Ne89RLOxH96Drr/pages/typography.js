(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"+r8+":function(e,t,n){"use strict";var o=n("HbGN"),i=n("ERkP"),a=n.n(i),c=n("4dwc"),r=n("6vFM"),l=n("vUXE"),s=a.a.createElement;t.a=function(e){var t=e.theme,n=e.mode,i=(Object(o.a)(e,["theme","mode"]),Object(c.useTheme)()),a=Object(r.getColorPalette)(n),m=i[t]||a[t];if(!m)return"Theme field not found";var b=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(m,!!n);return s(l.a,null,n?"export const ".concat(n," = {\n  ").concat(t,":").concat(b," \n}"):"export const ".concat(t," = ").concat(b))}},sYh6:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var o=n("cxan"),i=n("HbGN"),a=n("ERkP"),c=n.n(a),r=n("ZVZ0"),l=(n("4dwc"),n("+r8+")),s=(c.a.createElement,{}),m="wrapper";function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)(m,Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",null,"Typography"),Object(r.b)("p",null,"To manage Typography options, the theme object supports the following keys:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fonts")," (font family)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fontSizes")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fontWeights")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lineHeights"))),Object(r.b)("h2",null,"Font Family"),Object(r.b)(l.a,{theme:"fonts",mdxType:"ThemeParser"}),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing=".5rem" alignItems="center">\n  <Box fontFamily="heading" fontWeight="medium">Segoe UI Sans-Serif</Box>\n  <Box fontFamily="base">Segoe UI Sans-Serif</Box>\n  <Box fontFamily="mono">Segoe UI Mono</Box>\n</Stack>\n')),Object(r.b)("h2",null,"Font Size"),Object(r.b)(l.a,{theme:"fontSizes",mdxType:"ThemeParser"}),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing=".5rem" alignItems="center">\n  <Box fontSize="sm">Font Size 14px</Box>\n  <Box fontSize="md">Font Size 16px</Box>\n  <Box fontSize="lg">Font Size 18px</Box>\n</Stack>\n')),Object(r.b)("h2",null,"Font Weight"),Object(r.b)(l.a,{theme:"fontWeights",mdxType:"ThemeParser"}),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing=".5rem" alignItems="center">\n  <Box fontWeight="normal">Regular (400)</Box>\n  <Box fontWeight="medium">Semibold (600)</Box>\n  <Box fontWeight="semibold">Bold (600)</Box>\n</Stack>\n')),Object(r.b)("h2",null,"Line Height"),Object(r.b)(l.a,{theme:"lineHeights",mdxType:"ThemeParser"}),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="12x" justifyContent="center">\n  <Box width="324px" lineHeight="sm">\n    <Box>Line height 1.25rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="lg">\n    <Box>Line height 1.5rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="2xl">\n    <Box>Line height 2rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n</Stack>\n')),Object(r.b)("h2",null,"Configuration Reference"),Object(r.b)("p",null,"Except for breakpoints, colors, and spacing, all keys in the theme object map to one of the core themes. All keys can be replaced or extended."),Object(r.b)("p",null,"For more information, see the complete properties ",Object(r.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"reference table"),"."))}b.isMDXComponent=!0},tPH4:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/typography",function(){return n("sYh6")}])}},[["tPH4",0,1,5,3,4,2,6]]]);
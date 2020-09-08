(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"+wNj":function(t,n,e){"use strict";function o(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}e.d(n,"a",(function(){return o}))},HbGN:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var o=e("+wNj");function r(t,n){if(null==t)return{};var e,r,a=Object(o.a)(t,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)e=i[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}},Km8e:function(t,n,e){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},Rk6E:function(t,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return d}));var o=e("cxan"),r=e("HbGN"),a=e("ERkP"),i=e.n(a),c=e("ZVZ0"),l=(i.a.createElement,{}),u="wrapper";function d(t){var n=t.components,e=Object(r.a)(t,["components"]);return Object(c.b)(u,Object(o.a)({},l,e,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"ButtonGroup"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup")," is used to group related buttons."),Object(c.b)("h2",null,"Import"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import ButtonGroup from '@trendmicro/react-styled-ui/ButtonGroup';\n// or\nimport { ButtonGroup } from '@trendmicro/react-styled-ui';\n")),Object(c.b)("h2",null,"Usage"),Object(c.b)("h3",null,"Basic button group"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),"function Example() {\n  const { colorMode } = useColorMode();\n  const dividerColor ={\n    dark: 'gray:70',\n    light: 'gray:30',\n  }[colorMode];\n  return (\n    <ButtonGroup>\n      <Button>One</Button>\n      <Divider vertical color={dividerColor} />\n      <Button>Two</Button>\n      <Divider vertical color={dividerColor} />\n      <Button>Three</Button>\n    </ButtonGroup>\n  );\n}\n\nrender(<Example />);\n")),Object(c.b)("h3",null,"Group variants"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"variant")," prop to change the visual style of every button in a group. You can set the value to ",Object(c.b)("inlineCode",{parentName:"p"},"emphasis"),", ",Object(c.b)("inlineCode",{parentName:"p"},"primary"),", ",Object(c.b)("inlineCode",{parentName:"p"},"default"),", ",Object(c.b)("inlineCode",{parentName:"p"},"secondary")," and ",Object(c.b)("inlineCode",{parentName:"p"},"ghost"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),"function Example() {\n  const { colorMode } = useColorMode();\n  const emphasisDividerColor ={\n    dark: 'red:80',\n    light: 'red:80',\n  }[colorMode];\n  const primaryDividerColor ={\n    dark: 'blue:80',\n    light: 'blue:80',\n  }[colorMode];\n  const defaultDividerColor ={\n    dark: 'gray:70',\n    light: 'gray:30',\n  }[colorMode];\n  const ghostDividerColor ={\n    dark: 'gray:60',\n    light: 'gray:20',\n  }[colorMode];\n\n  return (\n    <Stack direction=\"column\" spacing=\"3x\">\n      <ButtonGroup variant=\"emphasis\">\n        <Button>One</Button>\n        <Divider vertical color={emphasisDividerColor} />\n        <Button>Two</Button>\n        <Divider vertical color={emphasisDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"primary\">\n        <Button>One</Button>\n        <Divider vertical color={primaryDividerColor} />\n        <Button>Two</Button>\n        <Divider vertical color={primaryDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"default\">\n        <Button>One</Button>\n        <Divider vertical color={defaultDividerColor} />\n        <Button>Two</Button>\n        <Divider vertical color={defaultDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        variant=\"secondary\"\n        css={{\n          '> *:not(:first-child)': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button>One</Button>\n        <Button>Two</Button>\n        <Button>Three</Button>\n      </ButtonGroup>\n      <ButtonGroup\n        variant=\"ghost\"\n        css={{\n          '> *:not(:first-child)': {\n            marginLeft: -1\n          }\n        }}\n      >\n        <Button>One</Button>\n        <Divider vertical color={ghostDividerColor} />\n        <Button>Two</Button>\n        <Divider vertical color={ghostDividerColor} />\n        <Button>Three</Button>\n      </ButtonGroup>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n")),Object(c.b)("h3",null,"Group sizes"),Object(c.b)("p",null,"Use the ",Object(c.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup"),". You can set the value to ",Object(c.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(c.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(c.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'function Example() {\n  const { colorMode } = useColorMode();\n  const defaultDividerColor ={\n    dark: \'gray:70\',\n    light: \'gray:30\',\n  }[colorMode];\n  const ghostDividerColor ={\n    dark: \'gray:60\',\n    light: \'gray:20\',\n  }[colorMode];\n\n  return (\n    <Stack direction="row" spacing="4x">\n      <Stack spacing="4x" alignItems="flex-start">\n        <ButtonGroup size="sm">\n          <Button>Left</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Middle</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup size="md">\n          <Button>Left</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Middle</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup size="lg">\n          <Button>Left</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Middle</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="flex-start">\n        <ButtonGroup\n          size="sm"\n          variant="secondary"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Button>Middle</Button>\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="md"\n          variant="secondary"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Button>Middle</Button>\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="lg"\n          variant="secondary"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Button>Middle</Button>\n          <Button>Right</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="flex-start">\n        <ButtonGroup\n          size="sm"\n          variant="ghost"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Middle</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="md"\n          variant="ghost"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Middle</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          size="lg"\n          variant="ghost"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>Left</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Middle</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Right</Button>\n        </ButtonGroup>\n      </Stack>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(c.b)("h3",null,"Group orientation"),Object(c.b)("p",null,"Make a set of buttons appear vertically stacked rather than horizontally, by adding ",Object(c.b)("inlineCode",{parentName:"p"},"vertical")," to the ",Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup")," component."),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'function Example() {\n  const { colorMode } = useColorMode();\n  const defaultDividerColor ={\n    dark: \'gray:70\',\n    light: \'gray:30\',\n  }[colorMode];\n  const ghostDividerColor ={\n    dark: \'gray:60\',\n    light: \'gray:20\',\n  }[colorMode];\n  return (\n    <Stack direction="row" spacing="4x">\n      <Stack spacing="4x" alignItems="center">\n        <ButtonGroup>\n          <Button>One</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Two</Button>\n          <Divider vertical color={defaultDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n        <ButtonGroup vertical>\n          <Button>One</Button>\n          <Divider color={defaultDividerColor} />\n          <Button>Two</Button>\n          <Divider color={defaultDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="center">\n        <ButtonGroup\n          variant="secondary"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Button>Two</Button>\n          <Button>Three</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          vertical\n          variant="secondary"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginTop: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Button>Two</Button>\n          <Button>Three</Button>\n        </ButtonGroup>\n      </Stack>\n      <Stack spacing="4x" alignItems="center">\n        <ButtonGroup\n          variant="ghost"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginLeft: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Two</Button>\n          <Divider vertical color={ghostDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n        <ButtonGroup\n          vertical\n          variant="ghost"\n          css={{\n            \'> *:not(:first-child)\': {\n              marginTop: -1\n            }\n          }}\n        >\n          <Button>One</Button>\n          <Divider color={ghostDividerColor} />\n          <Button>Two</Button>\n          <Divider color={ghostDividerColor} />\n          <Button>Three</Button>\n        </ButtonGroup>\n      </Stack>\n    </Stack>\n  );\n}\n\nrender(<Example />);\n')),Object(c.b)("h3",null,"Button states"),Object(c.b)("pre",null,Object(c.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),"const SelectableButton = ({ selected, selectedColor, ...props }) => {\n  const { colorMode } = useColorMode();\n  const { colors } = useTheme();\n  const focusColor = colors['blue:60'];\n  let _selectedColor = selectedColor || {\n    dark: 'blue:60',\n    light: 'blue:60',\n  }[colorMode];\n  _selectedColor = colors[_selectedColor];\n  const getSelectedProps = {\n    bg: _selectedColor,\n    borderColor: _selectedColor,\n    color: 'white:emphasis',\n    cursor: 'default',\n    pointerEvents: 'none',\n    zIndex: 1,\n    css: {\n      '&::before': {\n        backgroundColor: _selectedColor,\n      },\n      '&:focus': {\n        ':not(:active)': {\n          borderColor: focusColor,\n          boxShadow: `inset 0 0 0 1px ${focusColor}`,\n        },\n        '&::before': {\n          backgroundColor: focusColor,\n        },\n      }\n    },\n    _hover: {\n      bg: _selectedColor,\n    },\n    _active: {\n      bg: _selectedColor,\n    },\n  };\n  return (\n    <Button\n      {...(selected && getSelectedProps)}\n      {...props}\n    />\n  );\n};\n\nfunction SwitchButton() {\n  const { colorMode } = useColorMode();\n  const emphasisDividerColor = {\n    dark: 'red:80',\n    light: 'red:80',\n  }[colorMode];\n  const primaryDividerColor = {\n    dark: 'blue:80',\n    light: 'blue:80',\n  }[colorMode];\n  const defaultDividerColor = {\n    dark: 'gray:70',\n    light: 'gray:30',\n  }[colorMode];\n  const ghostDividerColor = {\n    dark: 'gray:60',\n    light: 'gray:20',\n  }[colorMode];\n\n  const emphasisSelectedColor = {\n    dark: 'red:80',\n    light: 'red:80',\n  }[colorMode];\n  const primarySelectedColor = {\n    dark: 'blue:80',\n    light: 'blue:80',\n  }[colorMode];\n\n  const [activeButton1, setActiveButton1] = React.useState('emphasis-chart-line');\n  const [activeButton2, setActiveButton2] = React.useState('primary-chart-line');\n  const [activeButton3, setActiveButton3] = React.useState('default-chart-line');\n  const [activeButton4, setActiveButton4] = React.useState('secondary-chart-line');\n  const [activeButton5, setActiveButton5] = React.useState('ghost-chart-line');\n  const [activeButton6, setActiveButton6] = React.useState('no-divider-ghost-chart-line');\n\n  const handleClick1 = (button) => (e) => {\n    setActiveButton1(button);\n    // Remove focus\n    e.currentTarget.blur();\n  };\n  const handleClick2 = (button) => (e) => {\n    setActiveButton2(button);\n    // Remove focus\n    e.currentTarget.blur();\n  };\n  const handleClick3 = (button) => (e) => {\n    setActiveButton3(button);\n    // Remove focus\n    e.currentTarget.blur();\n  };\n  const handleClick4 = (button) => (e) => {\n    setActiveButton4(button);\n    // Remove focus\n    e.currentTarget.blur();\n  };\n  const handleClick5 = (button) => (e) => {\n    setActiveButton5(button);\n    // Remove focus\n    e.currentTarget.blur();\n  };\n  const handleClick6 = (button) => (e) => {\n    setActiveButton6(button);\n    // Remove focus\n    e.currentTarget.blur();\n  };\n\n  return (\n    <Stack spacing=\"3x\">\n      <ButtonGroup variant=\"emphasis\">\n        {\n          ['chart-pie', 'chart-line', 'chart-table'].map((key, index) => {\n            const activeKey = `emphasis-${key}`;\n            return (\n              <React.Fragment key={key}>\n                <SelectableButton\n                  width=\"8x\"\n                  selectedColor={emphasisSelectedColor}\n                  selected={activeButton1 === activeKey}\n                  onClick={handleClick1(activeKey)}\n                >\n                  <Icon icon={key} />\n                </SelectableButton>\n                <Divider vertical color={emphasisDividerColor} />\n              </React.Fragment>\n            );\n          })\n        }\n        <Button width=\"8x\" disabled><Icon icon=\"chart-bar\" /></Button>\n      </ButtonGroup>\n      <ButtonGroup variant=\"primary\">\n        {\n          ['chart-pie', 'chart-line', 'chart-table'].map((key, index) => {\n            const activeKey = `primary-${key}`;\n            return (\n              <React.Fragment key={key}>\n                <SelectableButton\n                  width=\"8x\"\n                  selectedColor={primarySelectedColor}\n                  selected={activeButton2 === activeKey}\n                  onClick={handleClick2(activeKey)}\n                >\n                  <Icon icon={key} />\n                </SelectableButton>\n                <Divider vertical color={primaryDividerColor} />\n              </React.Fragment>\n            );\n          })\n        }\n        <Button width=\"8x\" disabled><Icon icon=\"chart-bar\" /></Button>\n      </ButtonGroup>\n      <ButtonGroup>\n        {\n          ['chart-pie', 'chart-line', 'chart-table'].map((key, index) => {\n            const activeKey = `default-${key}`;\n            return (\n              <React.Fragment key={key}>\n                <SelectableButton\n                  width=\"8x\"\n                  selected={activeButton3 === activeKey}\n                  onClick={handleClick3(activeKey)}\n                >\n                  <Icon icon={key} />\n                </SelectableButton>\n                <Divider vertical color={defaultDividerColor} />\n              </React.Fragment>\n            );\n          })\n        }\n        <Button width=\"8x\" disabled><Icon icon=\"chart-bar\" /></Button>\n      </ButtonGroup>\n      <ButtonGroup\n        variant=\"secondary\"\n        css={{\n          '> *:not(:first-child)': {\n            marginLeft: -1\n          }\n        }}\n      >\n        {\n          ['chart-pie', 'chart-line', 'chart-table'].map((key, index) => {\n            const activeKey = `secondary-${key}`;\n            return (\n              <SelectableButton\n                key={key}\n                width=\"8x\"\n                selected={activeButton4 === activeKey}\n                onClick={handleClick4(activeKey)}\n              >\n                <Icon icon={key} />\n              </SelectableButton>\n            );\n          })\n        }\n        <Button width=\"8x\" disabled><Icon icon=\"chart-bar\" /></Button>\n      </ButtonGroup>\n      <ButtonGroup\n        variant=\"ghost\"\n        css={{\n          '> *:not(:first-child)': {\n            marginLeft: -1\n          }\n        }}\n      >\n        {\n          ['chart-pie', 'chart-line', 'chart-table'].map((key, index) => {\n            const activeKey = `ghost-${key}`;\n            return (\n              <React.Fragment key={key}>\n                <SelectableButton\n                  width=\"8x\"\n                  selected={activeButton5 === activeKey}\n                  onClick={handleClick5(activeKey)}\n                >\n                  <Icon icon={key} />\n                </SelectableButton>\n                <Divider vertical color={ghostDividerColor} />\n              </React.Fragment>\n            );\n          })\n        }\n        <Button width=\"8x\" disabled><Icon icon=\"chart-bar\" /></Button>\n      </ButtonGroup>\n      <Box>\n        {\n          ['chart-pie', 'chart-line', 'chart-table'].map((key, index) => {\n            const activeKey = `no-divider-ghost-${key}`;\n            return (\n              <React.Fragment key={key}>\n                <SelectableButton\n                  variant=\"ghost\"\n                  width=\"8x\"\n                  selected={activeButton6 === activeKey}\n                  onClick={handleClick6(activeKey)}\n                >\n                  <Icon icon={key} />\n                </SelectableButton>\n              </React.Fragment>\n            );\n          })\n        }\n        <Button variant=\"ghost\" width=\"8x\" disabled><Icon icon=\"chart-bar\" /></Button>\n      </Box>\n    </Stack>\n  );\n}\n\nrender(<SwitchButton />);\n")),Object(c.b)("h2",null,"Props"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"ButtonGroup")," composes the ",Object(c.b)("a",Object(o.a)({parentName:"p"},{href:"./box"}),Object(c.b)("inlineCode",{parentName:"a"},"Box"))," component. You can override the default styles with style props."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Name"),Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Type"),Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Default"),Object(c.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"size"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The size for all buttons in the group. Acceptable values: ",Object(c.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"variant"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"string"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"'default'"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The variant of all buttons in the group. Acceptable values: ",Object(c.b)("inlineCode",{parentName:"td"},"'emphasis'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'primary'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'default'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'secondary'"),", ",Object(c.b)("inlineCode",{parentName:"td"},"'ghost'"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"vertical"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"false"),Object(c.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"Make the set of Buttons appear vertically stacked.")))))}d.isMDXComponent=!0},ZVZ0:function(t,n,e){"use strict";e.d(n,"a",(function(){return s})),e.d(n,"b",(function(){return v}));var o=e("ERkP"),r=e.n(o);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?i(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function l(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var u=r.a.createContext({}),d=function(t){var n=r.a.useContext(u),e=n;return t&&(e="function"===typeof t?t(n):c(c({},n),t)),e},s=function(t){var n=d(t.components);return(r.a.createElement(u.Provider,{value:n},t.children))},p="mdxType",b={inlineCode:"code",wrapper:function(t){var n=t.children;return(r.a.createElement(r.a.Fragment,{},n))}},B=r.a.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=d(e),p=o,B=s["".concat(i,".").concat(p)]||s[p]||b[p]||a;return e?r.a.createElement(B,c(c({ref:n},u),{},{components:e})):r.a.createElement(B,c({ref:n},u))}));function v(t,n){var e=arguments,o=n&&n.mdxType;if("string"===typeof t||o){var a=e.length,i=new Array(a);i[0]=B;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=t,c[p]="string"===typeof t?t:o,i[1]=c;for(var u=2;u<a;u++)i[u]=e[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,e)}B.displayName="MDXCreateElement"},cxan:function(t,n,e){"use strict";function o(){return(o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t}).apply(this,arguments)}e.d(n,"a",(function(){return o}))},xlyI:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/buttongroup",function(){return e("Rk6E")}])}},[["xlyI",0,1]]]);
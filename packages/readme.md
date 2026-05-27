Read [](file:///home/sagar/Documents/MicroFrontEnds/project2/mfp/packages/marketing/src/App.js)

Read [](file:///home/sagar/Documents/MicroFrontEnds/project2/mfp/packages/marketing/src/bootstrap.js)

Read [](file:///home/sagar/Documents/MicroFrontEnds/project2/mfp/packages/marketing/src/components/Landing.js#1-1), lines 1 to 10

Read [](file:///home/sagar/Documents/MicroFrontEnds/project2/mfp/packages/marketing/src/components/Pricing.js#1-1), lines 1 to 10

Read [](file:///home/sagar/Documents/MicroFrontEnds/project2/mfp/packages/marketing/src/index.js)

## Summary of Changes: CommonJS → ES6 Modules

Here are the **specific changes** I made to convert your marketing package to ES6 modules:

### **1. App.js**

**Before (CommonJS):**

```javascript
const React = require("react");
const { BrowserRouter, Route, Switch } = require("react-router-dom");
const { StyleProvider } = require("@material-ui/styles");
const Landing = require("./components/Landing");
const Pricing = require("./components/Pricing");
...
module.exports = App;
```

**After (ES6):**

```javascript
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider } from "@material-ui/styles";
import Album from "./components/Landing";
import Pricing from "./components/Pricing";
...
export default App;
```

**Changes:**

- `require()` → `import` statements
- `module.exports` → `export default`
- Fixed incorrect export name: `StyleProvider` → `StylesProvider`
- Updated component reference: `Landing` → `Album` (actual exported function name)

---

### **2. bootstrap.js**

**Before (CommonJS):**

```javascript
const React = require("react");
const ReactDom = require("react-dom");
const App = require("./App");
...
module.exports = { mount };
```

**After (ES6):**

```javascript
import React from "react";
import ReactDom from "react-dom";
import App from "./App";
...
export { mount };
```

**Changes:**

- `require()` → `import` statements
- `module.exports` → `export { mount }` (named export)

---

### **3. Landing.js & Pricing.js**

- Already had ES6 imports internally
- Already had `export default function Album()` and `export default function Pricing()`
- No changes needed (they were already using ES6 exports)

---

### **4. index.js**

**Already using ES6:**

```javascript
console.log("Marketing service");
import("./bootstrap");
```

- Already using dynamic `import()` - no changes needed

---

## **Key Conversions:**

| CommonJS                             | ES6                             |
| ------------------------------------ | ------------------------------- |
| `const x = require("module")`        | `import x from "module"`        |
| `const { x, y } = require("module")` | `import { x, y } from "module"` |
| `module.exports = Component`         | `export default Component`      |
| `module.exports = { func1, func2 }`  | `export { func1, func2 }`       |

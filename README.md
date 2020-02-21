### Babel plugin global scope

Transforms previously module scoped variables into globally scoped window properties

**Before**

```Javascript
var globalVarA, globalVarB;

function globalFunc() {
  var foo = "bar";
}

class GlobalClass {}

(function() {});
```

**After**

```javascript
var globalVarA, globalVarB;

function globalFunc() {
  var foo = "bar";
}

class GlobalClass {}

(function() {});

window.globalVarA = globalVarA;
window.globalVarB = globalVarB;
window.globalFunc = globalFunc;
window.GlobalClass = GlobalClass;
```


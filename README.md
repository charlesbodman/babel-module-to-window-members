### Babel plugin global scope

Transforms previously module scoped variables into globally scoped window properties

`npm install babel-plugin-global-scope`

**Before**

```Javascript
var globalVarA, globalVarB;

function globalFunc() {
  var foo = "bar";
}

class GlobalClass {

}


```

**After**

```javascript
var globalVarA, globalVarB;

function globalFunc() {
  var foo = "bar";
}

class GlobalClass {

}

window.globalVarA = globalVarA;
window.globalVarB = globalVarB;
window.globalFunc = globalFunc;
window.GlobalClass = GlobalClass;
```


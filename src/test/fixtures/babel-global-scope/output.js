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
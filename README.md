### Babel plugin global scope
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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


## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/charlesbodman"><img src="https://avatars2.githubusercontent.com/u/231894?v=4" width="100px;" alt=""/><br /><sub><b>Charles Bodman</b></sub></a><br /><a href="https://github.com/charlesbodman/babel-plugin-global-scope/commits?author=charlesbodman" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
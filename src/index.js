module.exports = function babel_global_scope({ types: t }) {
  /**
   * Checks if path is in global scoped
   * @param {Path} path
   */
  function isGlobalScope(path) {
    return path.parent.type === "Program";
  }

  /**
   * Creates a member expression which assigns a property
   * window.foo = foo;
   * @param {Identifier} name
   */
  function assignToWindow(name) {
    return t.assignmentExpression(
      "=",
      t.memberExpression(t.identifier("window"), name),
      name
    );
  }

  /**
   * Plugin Declaration
   */
  return {
    name: "babel-global-scope",
    visitor: {
      // Variable declarations (eg. var foo = bar )
      VariableDeclaration(path) {
        // Only run on globally scoped declarations
        if (isGlobalScope(path) == false) {
          return;
        }

        // Loop through all declarations and assign them to the window object
        var node = path.node;
        var declarations = node.declarations;
        var declarationCount = declarations.length;
        for (var i = 0; i < declarationCount; i++) {
          var declaration = declarations[i];
          var declarationName = declaration.id;
          path.parent.body.push(assignToWindow(declarationName));
        }
      },

      // Function declarations
      FunctionDeclaration(path) {
        // Only run on globally scoped declarations
        if (isGlobalScope(path) == false) {
          return;
        }

        path.parent.body.push(assignToWindow(path.node.id));
      },

      ClassDeclaration(path) {
        // Only run on globally scoped declarations
        if (isGlobalScope(path) == false) {
          return;
        }

        path.parent.body.push(assignToWindow(path.node.id));
      },

      // Expressions
      ExpressionStatement(path) {
        // Only run on globally scoped declarations
        if (isGlobalScope(path) == false) {
          return;
        }

        var expression = path.node.expression;
        if (t.isAssignmentExpression(expression) && t.isIdentifier(expression.left)) {
          path.parent.body.push(assignToWindow(expression.left));
        }
      }
    }
  };
};

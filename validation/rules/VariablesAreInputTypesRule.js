'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.VariablesAreInputTypesRule = VariablesAreInputTypesRule;

var _GraphQLError = require('../../error/GraphQLError.d.ts');

var _printer = require('../../language/printer.d.ts');

var _definition = require('../../type/definition.d.ts');

var _typeFromAST = require('../../utilities/typeFromAST.d.ts');

/**
 * Variables are input types
 *
 * A GraphQL operation is only valid if all the variables it defines are of
 * input types (scalar, enum, or input object).
 *
 * See https://spec.graphql.org/draft/#sec-Variables-Are-Input-Types
 */
function VariablesAreInputTypesRule(context) {
  return {
    VariableDefinition(node) {
      const type = (0, _typeFromAST.typeFromAST)(
        context.getSchema(),
        node.type,
      );

      if (type !== undefined && !(0, _definition.isInputType)(type)) {
        const variableName = node.variable.name.value;
        const typeName = (0, _printer.print)(node.type);
        context.reportError(
          new _GraphQLError.GraphQLError(
            `Variable "$${variableName}" cannot be non-input type "${typeName}".`,
            {
              nodes: node.type,
            },
          ),
        );
      }
    },
  };
}

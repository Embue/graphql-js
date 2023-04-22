'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.introspectionFromSchema = introspectionFromSchema;

var _invariant = require('../jsutils/invariant.d.ts');

var _parser = require('../language/parser.d.ts');

var _execute = require('../execution/execute.d.ts');

var _getIntrospectionQuery = require('./getIntrospectionQuery.d.ts');

/**
 * Build an IntrospectionQuery from a GraphQLSchema
 *
 * IntrospectionQuery is useful for utilities that care about type and field
 * relationships, but do not need to traverse through those relationships.
 *
 * This is the inverse of buildClientSchema. The primary use case is outside
 * of the server context, for instance when doing schema comparisons.
 */
function introspectionFromSchema(schema, options) {
  const optionsWithDefaults = {
    specifiedByUrl: true,
    directiveIsRepeatable: true,
    schemaDescription: true,
    inputValueDeprecation: true,
    ...options,
  };
  const document = (0, _parser.parse)(
    (0, _getIntrospectionQuery.getIntrospectionQuery)(optionsWithDefaults),
  );
  const result = (0, _execute.executeSync)({
    schema,
    document,
  });
  (!result.errors && result.data) || (0, _invariant.invariant)(false);
  return result.data;
}

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.specifiedSDLRules = exports.specifiedRules = void 0;

var _ExecutableDefinitionsRule = require('./rules/ExecutableDefinitionsRule.d.ts');

var _FieldsOnCorrectTypeRule = require('./rules/FieldsOnCorrectTypeRule.d.ts');

var _FragmentsOnCompositeTypesRule = require('./rules/FragmentsOnCompositeTypesRule.d.ts');

var _KnownArgumentNamesRule = require('./rules/KnownArgumentNamesRule.d.ts');

var _KnownDirectivesRule = require('./rules/KnownDirectivesRule.d.ts');

var _KnownFragmentNamesRule = require('./rules/KnownFragmentNamesRule.d.ts');

var _KnownTypeNamesRule = require('./rules/KnownTypeNamesRule.d.ts');

var _LoneAnonymousOperationRule = require('./rules/LoneAnonymousOperationRule.d.ts');

var _LoneSchemaDefinitionRule = require('./rules/LoneSchemaDefinitionRule.d.ts');

var _NoFragmentCyclesRule = require('./rules/NoFragmentCyclesRule.d.ts');

var _NoUndefinedVariablesRule = require('./rules/NoUndefinedVariablesRule.d.ts');

var _NoUnusedFragmentsRule = require('./rules/NoUnusedFragmentsRule.d.ts');

var _NoUnusedVariablesRule = require('./rules/NoUnusedVariablesRule.d.ts');

var _OverlappingFieldsCanBeMergedRule = require('./rules/OverlappingFieldsCanBeMergedRule.d.ts');

var _PossibleFragmentSpreadsRule = require('./rules/PossibleFragmentSpreadsRule.d.ts');

var _PossibleTypeExtensionsRule = require('./rules/PossibleTypeExtensionsRule.d.ts');

var _ProvidedRequiredArgumentsRule = require('./rules/ProvidedRequiredArgumentsRule.d.ts');

var _ScalarLeafsRule = require('./rules/ScalarLeafsRule.d.ts');

var _SingleFieldSubscriptionsRule = require('./rules/SingleFieldSubscriptionsRule.d.ts');

var _UniqueArgumentDefinitionNamesRule = require('./rules/UniqueArgumentDefinitionNamesRule.d.ts');

var _UniqueArgumentNamesRule = require('./rules/UniqueArgumentNamesRule.d.ts');

var _UniqueDirectiveNamesRule = require('./rules/UniqueDirectiveNamesRule.d.ts');

var _UniqueDirectivesPerLocationRule = require('./rules/UniqueDirectivesPerLocationRule.d.ts');

var _UniqueEnumValueNamesRule = require('./rules/UniqueEnumValueNamesRule.d.ts');

var _UniqueFieldDefinitionNamesRule = require('./rules/UniqueFieldDefinitionNamesRule.d.ts');

var _UniqueFragmentNamesRule = require('./rules/UniqueFragmentNamesRule.d.ts');

var _UniqueInputFieldNamesRule = require('./rules/UniqueInputFieldNamesRule.d.ts');

var _UniqueOperationNamesRule = require('./rules/UniqueOperationNamesRule.d.ts');

var _UniqueOperationTypesRule = require('./rules/UniqueOperationTypesRule.d.ts');

var _UniqueTypeNamesRule = require('./rules/UniqueTypeNamesRule.d.ts');

var _UniqueVariableNamesRule = require('./rules/UniqueVariableNamesRule.d.ts');

var _ValuesOfCorrectTypeRule = require('./rules/ValuesOfCorrectTypeRule.d.ts');

var _VariablesAreInputTypesRule = require('./rules/VariablesAreInputTypesRule.d.ts');

var _VariablesInAllowedPositionRule = require('./rules/VariablesInAllowedPositionRule.d.ts');

// Spec Section: "Executable Definitions"
// Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"
// Spec Section: "Fragments on Composite Types"
// Spec Section: "Argument Names"
// Spec Section: "Directives Are Defined"
// Spec Section: "Fragment spread target defined"
// Spec Section: "Fragment Spread Type Existence"
// Spec Section: "Lone Anonymous Operation"
// SDL-specific validation rules
// Spec Section: "Fragments must not form cycles"
// Spec Section: "All Variable Used Defined"
// Spec Section: "Fragments must be used"
// Spec Section: "All Variables Used"
// Spec Section: "Field Selection Merging"
// Spec Section: "Fragment spread is possible"
// Spec Section: "Argument Optionality"
// Spec Section: "Leaf Field Selections"
// Spec Section: "Subscriptions with Single Root Field"
// Spec Section: "Argument Uniqueness"
// Spec Section: "Directives Are Unique Per Location"
// Spec Section: "Fragment Name Uniqueness"
// Spec Section: "Input Object Field Uniqueness"
// Spec Section: "Operation Name Uniqueness"
// Spec Section: "Variable Uniqueness"
// Spec Section: "Value Type Correctness"
// Spec Section: "Variables are Input Types"
// Spec Section: "All Variable Usages Are Allowed"

/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */
const specifiedRules = Object.freeze([
  _ExecutableDefinitionsRule.ExecutableDefinitionsRule,
  _UniqueOperationNamesRule.UniqueOperationNamesRule,
  _LoneAnonymousOperationRule.LoneAnonymousOperationRule,
  _SingleFieldSubscriptionsRule.SingleFieldSubscriptionsRule,
  _KnownTypeNamesRule.KnownTypeNamesRule,
  _FragmentsOnCompositeTypesRule.FragmentsOnCompositeTypesRule,
  _VariablesAreInputTypesRule.VariablesAreInputTypesRule,
  _ScalarLeafsRule.ScalarLeafsRule,
  _FieldsOnCorrectTypeRule.FieldsOnCorrectTypeRule,
  _UniqueFragmentNamesRule.UniqueFragmentNamesRule,
  _KnownFragmentNamesRule.KnownFragmentNamesRule,
  _NoUnusedFragmentsRule.NoUnusedFragmentsRule,
  _PossibleFragmentSpreadsRule.PossibleFragmentSpreadsRule,
  _NoFragmentCyclesRule.NoFragmentCyclesRule,
  _UniqueVariableNamesRule.UniqueVariableNamesRule,
  _NoUndefinedVariablesRule.NoUndefinedVariablesRule,
  _NoUnusedVariablesRule.NoUnusedVariablesRule,
  _KnownDirectivesRule.KnownDirectivesRule,
  _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
  _KnownArgumentNamesRule.KnownArgumentNamesRule,
  _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
  _ValuesOfCorrectTypeRule.ValuesOfCorrectTypeRule,
  _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsRule,
  _VariablesInAllowedPositionRule.VariablesInAllowedPositionRule,
  _OverlappingFieldsCanBeMergedRule.OverlappingFieldsCanBeMergedRule,
  _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
]);
/**
 * @internal
 */

exports.specifiedRules = specifiedRules;
const specifiedSDLRules = Object.freeze([
  _LoneSchemaDefinitionRule.LoneSchemaDefinitionRule,
  _UniqueOperationTypesRule.UniqueOperationTypesRule,
  _UniqueTypeNamesRule.UniqueTypeNamesRule,
  _UniqueEnumValueNamesRule.UniqueEnumValueNamesRule,
  _UniqueFieldDefinitionNamesRule.UniqueFieldDefinitionNamesRule,
  _UniqueArgumentDefinitionNamesRule.UniqueArgumentDefinitionNamesRule,
  _UniqueDirectiveNamesRule.UniqueDirectiveNamesRule,
  _KnownTypeNamesRule.KnownTypeNamesRule,
  _KnownDirectivesRule.KnownDirectivesRule,
  _UniqueDirectivesPerLocationRule.UniqueDirectivesPerLocationRule,
  _PossibleTypeExtensionsRule.PossibleTypeExtensionsRule,
  _KnownArgumentNamesRule.KnownArgumentNamesOnDirectivesRule,
  _UniqueArgumentNamesRule.UniqueArgumentNamesRule,
  _UniqueInputFieldNamesRule.UniqueInputFieldNamesRule,
  _ProvidedRequiredArgumentsRule.ProvidedRequiredArgumentsOnDirectivesRule,
]);
exports.specifiedSDLRules = specifiedSDLRules;

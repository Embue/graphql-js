// Spec Section: "Executable Definitions"
import { ExecutableDefinitionsRule } from './rules/ExecutableDefinitionsRule.d.ts'; // Spec Section: "Field Selections on Objects, Interfaces, and Unions Types"

import { FieldsOnCorrectTypeRule } from './rules/FieldsOnCorrectTypeRule.d.ts'; // Spec Section: "Fragments on Composite Types"

import { FragmentsOnCompositeTypesRule } from './rules/FragmentsOnCompositeTypesRule.d.ts'; // Spec Section: "Argument Names"

import {
  KnownArgumentNamesOnDirectivesRule,
  KnownArgumentNamesRule,
} from './rules/KnownArgumentNamesRule.d.ts'; // Spec Section: "Directives Are Defined"

import { KnownDirectivesRule } from './rules/KnownDirectivesRule.d.ts'; // Spec Section: "Fragment spread target defined"

import { KnownFragmentNamesRule } from './rules/KnownFragmentNamesRule.d.ts'; // Spec Section: "Fragment Spread Type Existence"

import { KnownTypeNamesRule } from './rules/KnownTypeNamesRule.d.ts'; // Spec Section: "Lone Anonymous Operation"

import { LoneAnonymousOperationRule } from './rules/LoneAnonymousOperationRule.d.ts'; // SDL-specific validation rules

import { LoneSchemaDefinitionRule } from './rules/LoneSchemaDefinitionRule.d.ts'; // Spec Section: "Fragments must not form cycles"

import { NoFragmentCyclesRule } from './rules/NoFragmentCyclesRule.d.ts'; // Spec Section: "All Variable Used Defined"

import { NoUndefinedVariablesRule } from './rules/NoUndefinedVariablesRule.d.ts'; // Spec Section: "Fragments must be used"

import { NoUnusedFragmentsRule } from './rules/NoUnusedFragmentsRule.d.ts'; // Spec Section: "All Variables Used"

import { NoUnusedVariablesRule } from './rules/NoUnusedVariablesRule.d.ts'; // Spec Section: "Field Selection Merging"

import { OverlappingFieldsCanBeMergedRule } from './rules/OverlappingFieldsCanBeMergedRule.d.ts'; // Spec Section: "Fragment spread is possible"

import { PossibleFragmentSpreadsRule } from './rules/PossibleFragmentSpreadsRule.d.ts';
import { PossibleTypeExtensionsRule } from './rules/PossibleTypeExtensionsRule.d.ts'; // Spec Section: "Argument Optionality"

import {
  ProvidedRequiredArgumentsOnDirectivesRule,
  ProvidedRequiredArgumentsRule,
} from './rules/ProvidedRequiredArgumentsRule.d.ts'; // Spec Section: "Leaf Field Selections"

import { ScalarLeafsRule } from './rules/ScalarLeafsRule.d.ts'; // Spec Section: "Subscriptions with Single Root Field"

import { SingleFieldSubscriptionsRule } from './rules/SingleFieldSubscriptionsRule.d.ts';
import { UniqueArgumentDefinitionNamesRule } from './rules/UniqueArgumentDefinitionNamesRule.d.ts'; // Spec Section: "Argument Uniqueness"

import { UniqueArgumentNamesRule } from './rules/UniqueArgumentNamesRule.d.ts';
import { UniqueDirectiveNamesRule } from './rules/UniqueDirectiveNamesRule.d.ts'; // Spec Section: "Directives Are Unique Per Location"

import { UniqueDirectivesPerLocationRule } from './rules/UniqueDirectivesPerLocationRule.d.ts';
import { UniqueEnumValueNamesRule } from './rules/UniqueEnumValueNamesRule.d.ts';
import { UniqueFieldDefinitionNamesRule } from './rules/UniqueFieldDefinitionNamesRule.d.ts'; // Spec Section: "Fragment Name Uniqueness"

import { UniqueFragmentNamesRule } from './rules/UniqueFragmentNamesRule.d.ts'; // Spec Section: "Input Object Field Uniqueness"

import { UniqueInputFieldNamesRule } from './rules/UniqueInputFieldNamesRule.d.ts'; // Spec Section: "Operation Name Uniqueness"

import { UniqueOperationNamesRule } from './rules/UniqueOperationNamesRule.d.ts';
import { UniqueOperationTypesRule } from './rules/UniqueOperationTypesRule.d.ts';
import { UniqueTypeNamesRule } from './rules/UniqueTypeNamesRule.d.ts'; // Spec Section: "Variable Uniqueness"

import { UniqueVariableNamesRule } from './rules/UniqueVariableNamesRule.d.ts'; // Spec Section: "Value Type Correctness"

import { ValuesOfCorrectTypeRule } from './rules/ValuesOfCorrectTypeRule.d.ts'; // Spec Section: "Variables are Input Types"

import { VariablesAreInputTypesRule } from './rules/VariablesAreInputTypesRule.d.ts'; // Spec Section: "All Variable Usages Are Allowed"

import { VariablesInAllowedPositionRule } from './rules/VariablesInAllowedPositionRule.d.ts';

/**
 * This set includes all validation rules defined by the GraphQL spec.
 *
 * The order of the rules in this list has been adjusted to lead to the
 * most clear output when encountering multiple validation errors.
 */
export const specifiedRules = Object.freeze([
  ExecutableDefinitionsRule,
  UniqueOperationNamesRule,
  LoneAnonymousOperationRule,
  SingleFieldSubscriptionsRule,
  KnownTypeNamesRule,
  FragmentsOnCompositeTypesRule,
  VariablesAreInputTypesRule,
  ScalarLeafsRule,
  FieldsOnCorrectTypeRule,
  UniqueFragmentNamesRule,
  KnownFragmentNamesRule,
  NoUnusedFragmentsRule,
  PossibleFragmentSpreadsRule,
  NoFragmentCyclesRule,
  UniqueVariableNamesRule,
  NoUndefinedVariablesRule,
  NoUnusedVariablesRule,
  KnownDirectivesRule,
  UniqueDirectivesPerLocationRule,
  KnownArgumentNamesRule,
  UniqueArgumentNamesRule,
  ValuesOfCorrectTypeRule,
  ProvidedRequiredArgumentsRule,
  VariablesInAllowedPositionRule,
  OverlappingFieldsCanBeMergedRule,
  UniqueInputFieldNamesRule,
]);
/**
 * @internal
 */

export const specifiedSDLRules = Object.freeze([
  LoneSchemaDefinitionRule,
  UniqueOperationTypesRule,
  UniqueTypeNamesRule,
  UniqueEnumValueNamesRule,
  UniqueFieldDefinitionNamesRule,
  UniqueArgumentDefinitionNamesRule,
  UniqueDirectiveNamesRule,
  KnownTypeNamesRule,
  KnownDirectivesRule,
  UniqueDirectivesPerLocationRule,
  PossibleTypeExtensionsRule,
  KnownArgumentNamesOnDirectivesRule,
  UniqueArgumentNamesRule,
  UniqueInputFieldNamesRule,
  ProvidedRequiredArgumentsOnDirectivesRule,
]);

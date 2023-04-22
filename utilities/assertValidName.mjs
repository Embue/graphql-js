import { devAssert } from '../jsutils/devAssert.d.ts';
import { GraphQLError } from '../error/GraphQLError.d.ts';
import { assertName } from '../type/assertName.d.ts';
/* c8 ignore start */

/**
 * Upholds the spec rules about naming.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */

export function assertValidName(name) {
  const error = isValidNameError(name);

  if (error) {
    throw error;
  }

  return name;
}
/**
 * Returns an Error if a name is invalid.
 * @deprecated Please use `assertName` instead. Will be removed in v17
 */

export function isValidNameError(name) {
  typeof name === 'string' || devAssert(false, 'Expected name to be a string.');

  if (name.startsWith('__')) {
    return new GraphQLError(
      `Name "${name}" must not begin with "__", which is reserved by GraphQL introspection.`,
    );
  }

  try {
    assertName(name);
  } catch (error) {
    return error;
  }
}
/* c8 ignore stop */

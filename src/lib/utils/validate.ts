/* eslint-disable @typescript-eslint/no-explicit-any */
import { setIn } from "final-form";

/**
 * Helper to validate yup schema
 * @param schema
 * @returns
 */
export const validateFormValues =
  (schema: unknown) => async (values: unknown) => {
    if (typeof schema === "function") schema = schema();

    try {
      await (schema as any).validate(values, { abortEarly: false });
    } catch (error: any) {
      return error.inner.reduce(
        (formError: any, innerError: any) =>
          setIn(formError, innerError.path, innerError.message),
        {}
      );
    }
  };

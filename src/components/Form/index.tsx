import { DefaultAppProps, fnAsChildren, GenericFn } from "commons/types";
import { ReactNode } from "react";
import { Form, FormRenderProps } from "react-final-form";
import { validateFormValues } from "utils/validate";

export interface AppFormProps extends Omit<DefaultAppProps, "children"> {
  initialValues: unknown;
  onSubmit: GenericFn;
  validate?: unknown;
  children?: ReactNode | GenericFn<ReactNode, [FormRenderProps, AppFormProps]>;
}

function AppForm<T = Record<string, any>>(props: AppFormProps) {
  const { children, onSubmit, initialValues, validate } = props;

  return (
    <Form
      subscription={{ submitting: true }}
      initialValues={initialValues as T}
      validate={validateFormValues(validate)}
      onSubmit={onSubmit}
      render={(form) => (
        <form onSubmit={form.handleSubmit}>
          {fnAsChildren(children, form, props)}
        </form>
      )}
    />
  );
}
export default AppForm;

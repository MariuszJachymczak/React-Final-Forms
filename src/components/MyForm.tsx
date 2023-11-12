import {
  Field,
  FieldRenderProps,
  Form,
  FormRenderProps,
} from "react-final-form";
import { postFormData } from "../services/Api";
import { MyFormProps } from "../types/types";

const MyForm: React.FC = () => {
  const onSubmit = async (formValues: MyFormProps) => {
    try {
      const responseData = await postFormData(formValues);
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        handleSubmit,
        submitting,
        pristine,
      }: FormRenderProps<MyFormProps>) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName">
            {({ input, meta }: FieldRenderProps<string, HTMLInputElement>) => (
              <div>
                <label>Type Something</label>
                <input {...input} type="text" placeholder="Imię" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
                <button
                  type="submit"
                  disabled={submitting || pristine}
                  className="submit-button"
                >
                  Send
                </button>
              </div>
            )}
          </Field>
        </form>
      )}
    />
  );
};

export default MyForm;

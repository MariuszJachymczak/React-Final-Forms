import {
  Field,
  FieldRenderProps,
  Form,
  FormRenderProps,
} from "react-final-form";
import { postFormData } from "../services/Api";

interface MyFormProps {
  firstName: string;
}

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
        form,
        submitting,
        pristine,
      }: FormRenderProps<MyFormProps>) => (
        <form onSubmit={handleSubmit}>
          <Field name="firstName">
            {({ input, meta }: FieldRenderProps<string, HTMLInputElement>) => (
              <div>
                <label>Some Value</label>
                <input {...input} type="text" placeholder="Value" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div>
            <button type="submit" disabled={submitting || pristine}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default MyForm;

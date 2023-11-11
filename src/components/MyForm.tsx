import {
  Field,
  FieldRenderProps,
  Form,
  FormRenderProps,
} from "react-final-form";
import { postFormData } from "../services/Api";

interface MyFormProps {
  firstName: string;
  // Dodajemy nowe pole dla multiselecta
  myMultiSelect: string[];
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
                <label>Imię</label>
                <input {...input} type="text" placeholder="Imię" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          {/* Pole multiselect */}
          <Field name="myMultiSelect" component="select" multiple>
            {({ input, meta }) => (
              <div>
                <label>Wybierz opcje</label>
                <select {...input}>
                  <option value="opcja1">Opcja 1</option>
                  <option value="opcja2">Opcja 2</option>
                  <option value="opcja3">Opcja 3</option>
                  {/* Dodaj więcej opcji według potrzeb */}
                </select>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <div>
            <button type="submit" disabled={submitting || pristine}>
              Wyślij
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default MyForm;

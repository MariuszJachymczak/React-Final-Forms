export interface MyMultiselectOption {
  value: string;
  label: string;
}

export interface MyFormProps {
  firstName: string;
  myMultiSelect: string[];
}

export interface DataResponseProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

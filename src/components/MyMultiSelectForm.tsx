import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "grapes", label: "Grapes 🍇" },
  { value: "mango", label: "Mango 🥭" },
  { value: "strawberry", label: "Strawberry 🍓" },
];

const MyMultiSelect: React.FC = () => {
  const handleChange = (selectedOptions: any) => {
    console.log(selectedOptions);
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[]}
      isMulti
      options={options}
      onChange={handleChange}
      placeholder="Select fruits..."
    />
  );
};

export default MyMultiSelect;

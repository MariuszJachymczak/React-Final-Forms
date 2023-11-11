import React, { useEffect, useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { getFormData } from "../services/Api";

const animatedComponents = makeAnimated();

interface Option {
  value: string;
  label: string;
}

const MyMultiSelect: React.FC = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getFormData();
        setOptions(
          response.map((post: any) => ({
            value: post.id.toString(),
            label: `${post.id} - ${post.title}`,
          }))
        );
      } catch (error) {
        console.error("Błąd podczas pobierania danych: ", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (selectedOptions: any) => {
    console.log(selectedOptions);
  };

  return (
    <Select
      components={animatedComponents}
      isMulti
      options={options}
      onChange={handleChange}
    />
  );
};

export default MyMultiSelect;

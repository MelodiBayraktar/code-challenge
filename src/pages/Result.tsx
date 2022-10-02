import * as React from "react";
import { Button } from "../components";
import { HomeForm, UseStateDispatcher } from "../types";

type Props = {
  formValues: HomeForm;
  setFormValues: UseStateDispatcher<HomeForm | null>;
};

const ResultPage = ({ formValues, setFormValues }: Props) => {
  const reset = React.useCallback(() => setFormValues(null), []);

  return (
    <div className="bg-indigo-50 flex min-h-screen justify-center items-center">
      <div className="bg-white p-6 flex flex-col rounded-lg w-72">
        <div className="mb-4">
          <p className="text-sky-500 mb-1 mt-1">Name</p>
          <p>{formValues.name}</p>
          <p className="text-sky-500 mb-1 mt-1">Surname</p>
          <p>{formValues.surname}</p>
          <p className="text-sky-500 mb-1 mt-1">Address</p>
          <p>{formValues.address}</p>
        </div>
        <Button label="Reset" onClick={reset} />
      </div>
    </div>
  );
};

export default ResultPage;

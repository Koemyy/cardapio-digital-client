import React, { useState, ChangeEvent } from 'react';

interface ObservationFieldProps {
  onObservationChange: (observation: any) => void;
}

const MAX_CHARACTERS = 150;

const ObservationField: React.FC<ObservationFieldProps> = ({ onObservationChange }) => {
  const [observation, setObservation] = useState<any>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= MAX_CHARACTERS) {
      setObservation(inputValue);
      onObservationChange(inputValue);
    }
  };

  return (
    <div className="my-4">
      <label className="block text-grey-300 text-sm font-bold mb-2" htmlFor="observation">
        Observações ({MAX_CHARACTERS - observation.length} caracteres restantes):
      </label>
      <textarea
        id="observation"
        name="observation"
        rows={4}
        className="w-full border rounded-md px-3 py-2 text-sm text-black-500 focus:outline-none focus:border-blue-500"
        placeholder="Por favor, retire a maionese e o alface..."
        value={observation}
        onChange={handleChange}
      />
    </div>
  );
};

export default ObservationField;
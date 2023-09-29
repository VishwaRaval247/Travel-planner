import React, { useState, useEffect } from 'react';

const DateInput = ({ placeholder, onChange, reset }) => {
  const [value, setValue] = useState('');
  const [inputType, setInputType] = useState('text');

  useEffect(() => {
    if (reset) {
      setValue(''); // Reset the value to empty when the reset prop changes
    }
  }, [reset]);

  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    setInputType('text');
  };

  return (
    <div className="relative mb-4">
      <input
        className="border border-gray-300 rounded-lg py-1 px-2 w-full text-sm placeholder-gray-700 pl-8"
        type={inputType}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        required
      />
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default DateInput;

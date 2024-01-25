import React from "react";
import { Input, InputGroup, Form } from "antd";
import { MdErrorOutline } from "react-icons/md";
import 'antd/dist/antd.css'; // Import Ant Design styles
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles

interface DynamicInputFieldProps {
  id?: string;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  placeholder?: string;
  name: string;
  type?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  inputFieldAs?: React.ElementType;
  disabled?: boolean;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  errorType?: 'info' | 'danger' | string | undefined | null;
  maxLength?: number;
}

const InputField: React.FC<DynamicInputFieldProps> = ({
  id,
  startIcon,
  endIcon,
  placeholder,
  name,
  type,
  onChange,
  onKeyDown,
  onFocus,
  value,
  disabled,
  onBlur,
  errorMessage,
  errorType,
  maxLength
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <InputGroup className="inputField">
        {startIcon && (
          <InputGroup.Prepend>
            <InputGroup.Text>{startIcon}</InputGroup.Text>
          </InputGroup.Prepend>
        )}
        <Input
          id={id}
          placeholder={placeholder}
          name={name}
          type={type || 'text'}
          onChange={onChange}
          onKeyDown={onKeyDown}
          onFocus={onFocus}
          value={value}
          disabled={disabled}
          onBlur={onBlur}
          maxLength={maxLength}
        />
        {endIcon && (
          <InputGroup.Append>
            <InputGroup.Text>{endIcon}</InputGroup.Text>
          </InputGroup.Append>
        )}
      </InputGroup>
      {errorMessage && (
        <p className={`m-0 ${errorType === 'danger' ? 'text-red-500' : 'text-gray-700'} ps-2 flex items-center gap-1`}>
          <MdErrorOutline className="text-lg" /> {errorMessage}
        </p>
      )}
    </div>
  );
};

export default InputField;

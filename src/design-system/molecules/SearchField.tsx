import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { Search, X } from 'lucide-react';

export interface SearchFieldProps {
  placeholder?: string;
  value?: string;
  onChange?: (val: string) => void;
  onSearch?: (val: string) => void;
  className?: string;
}

export const SearchField: React.FC<SearchFieldProps> = ({
  placeholder = 'Search engineering disciplines, projects, or codes...',
  value: controlledValue,
  onChange,
  onSearch,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (!isControlled) setInternalValue(val);
    onChange?.(val);
  };

  const handleClear = () => {
    if (!isControlled) setInternalValue('');
    onChange?.('');
    onSearch?.('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <Input
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        leadingIcon={<Search size={16} className="text-[#64748B]" />}
        trailingIcon={
          value ? (
            <button
              type="button"
              onClick={handleClear}
              className="text-[#94A3B8] hover:text-[#0B1320] transition-colors p-1 cursor-pointer focus-visible:outline-none"
              aria-label="Clear search"
            >
              <X size={14} />
            </button>
          ) : undefined
        }
      />
    </div>
  );
};

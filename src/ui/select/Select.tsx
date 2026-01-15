import { Select as AntSelect } from 'antd';
import styles from './Select.module.scss';

export type OptionType = {
  label: string;
  value: string | number;
};

interface SelectProps {
  value?: string | number | null;
  onChange?: (value: string | number | undefined) => void;
  options: OptionType[];
  isSearchable?: boolean;
  isDisabled?: boolean;
  isLoading?: boolean;
  placeholder?: string;
}

export default function Select({
  value,
  onChange,
  options,
  isSearchable = true,
  isDisabled = false,
  isLoading = false,
  placeholder,
}: SelectProps) {
  return (
    <div className={styles['select-container']}>
      <AntSelect
        value={value}
        onChange={onChange}
        options={options}
        showSearch={isSearchable}
        disabled={isDisabled}
        loading={isLoading}
        placeholder={placeholder}
        style={{ width: '100%' }}
      />
    </div>
  );
}

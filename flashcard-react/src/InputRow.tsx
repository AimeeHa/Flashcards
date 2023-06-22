import './InputRow.css';

function InputRow({
  id,
  label,
  placeholder,
  type,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="input-row">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </div>
  );
}

export default InputRow;

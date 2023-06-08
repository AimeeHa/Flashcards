import './InputRow.css';

function InputRow({
  id,
  label,
  placeholder,
  type,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div className="input-row">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} />
    </div>
  );
}

export default InputRow;

function InputField({ name, text, label, type }) {
  const styles = {
    fontSize: "1.15rem",
    padding: "10px",
  };

  return (
    <div className="w-md-75  mx-3 mb-4">
      <label className="text-left" htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        style={styles}
        className="w-100 rounded border-0 shadow"
        type={type}
        name={name}
        id={name}
        placeholder={text}
        required
      />
    </div>
  );
}

export default InputField;

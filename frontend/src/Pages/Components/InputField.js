import {useState} from "react";

function InputField({ name, text, label, type, value, handleChange}) {

    // const [input, setInput] = useState("");
    //
    // const handleChange = (event) => {
    //     setInput(event.target.value);
    // }

    const inputChange = (e) => {
        handleChange(name, e.target.value);
    }


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
          value={value}
          onChange={inputChange}
        style={styles}
        className="w-100 rounded border-0 shadow"
        type={type}
        name={name}
        id={name}
        placeholder={text}
        autoComplete="off"
        required
      />
    </div>
  );
}

export default InputField;

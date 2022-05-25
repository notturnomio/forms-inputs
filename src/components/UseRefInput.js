import { useEffect, useRef, useState } from "react";

//Ref input control

const UseRefInput = () => {
  const professionInputRef = useRef("");
  const [professionTouched, setProfessionTouched] = useState(false);
  const [enteredProfessionIsValid, setEnteredProfessionIsValid] =
    useState(false);
  const [professionInputIsInvalid, setProfessionInputIsInvalid] =
    useState(false);

  useEffect(() => {
    setEnteredProfessionIsValid(professionInputRef.current.value !== "");
    setProfessionInputIsInvalid(!enteredProfessionIsValid && professionTouched);
  }, [enteredProfessionIsValid, professionTouched]);

  let formIsValid = false;

  if (enteredProfessionIsValid) {
    formIsValid = true;
  }

  const professionInputHandler = (e) => {
    setEnteredProfessionIsValid(professionInputRef.current.value !== "");
  };

  const professionInputBlurHandler = (e) => {
    setProfessionTouched(true);
    setEnteredProfessionIsValid(professionInputRef.current.value !== "");
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setProfessionTouched(true);

    if (!formIsValid) {
      return;
    }

    console.log(`${professionInputRef.current.value}`);

    // console.log(e.target.name);
    // e.target.name.value = "";

    professionInputRef.current.value = "";
    setProfessionTouched(false);
    // e.target.reset();
  };

  const professionInputClasses = professionInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={professionInputClasses}>
        <label htmlFor="profession">Your Profession</label>
        <input
          type="text"
          id="profession"
          ref={professionInputRef}
          onChange={professionInputHandler}
          onBlur={professionInputBlurHandler}
        />
        {professionInputIsInvalid && (
          <p className="error-text">* Profession must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default UseRefInput;

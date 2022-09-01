import { useState, useEffect, useRef } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import "./index.css";

const MainInput = ({
  inputValue,
  setInputValue,
  isRenderedList,
  onFormsubmit,
}) => {
  const [isInputVisibile, setInputVisibility] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY >= 200
        ? setInputVisibility(true)
        : setInputVisibility(false)
    );
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    onFormsubmit(!isRenderedList);
  };

  const onHandleInput = (e) => setInputValue(e.target.value);

  // console.log(inputValue);

  return (
    <IconContext.Provider
      value={{
        style: { color: "#1a003f", width: "25px", height: "25px" },
        className: "icon",
      }}
    >
      <form className="MainInput" onSubmit={onHandleSubmit}>
        {isInputVisibile && (
          <>
            <input
              value={inputValue}
              onChange={onHandleInput}
              type="text"
              maxLength="6"
              placeholder="Search by Id"
            />
            <button type="submit">
              <BsSearch />
            </button>{" "}
          </>
        )}
      </form>
    </IconContext.Provider>
  );
};

export default MainInput;

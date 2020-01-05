[@react.component]
let make = () => {
  let onSubmit = (e: ReactEvent.Form.t): unit => {
    ReactEvent.Form.preventDefault(e);
    /* all form values available */
    Js.log(e->ReactEvent.Form.target##name##value);
    Js.log(e->ReactEvent.Form.target##city##value);
  };

  let onChange = (e: ReactEvent.Form.t): unit => {
    Js.log(e->ReactEvent.Form.target##value);
  };

  <form onSubmit>
    <label> {React.string("Name")} </label>
    <input type_="text" name="name" onChange />
    <label> {React.string("City")} </label>
    <select name="city" onChange>
      <option value="Boston"> {React.string("Boston")} </option>
      <option value="New York"> {React.string("New York")} </option>
      <option value="Seattle"> {React.string("Seattle")} </option>
    </select>
    <button type_="submit"> {React.string("submit")} </button>
  </form>;
};
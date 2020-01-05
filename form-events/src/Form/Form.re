[@react.component]
let make = () => {
  let (name, setName) = React.useState(() => "");

  let onSubmit = (e: ReactEvent.Form.t): unit => {
    ReactEvent.Form.preventDefault(e);
    Js.log({j|Hi my name is $name|j});
  };

  let onChange = (e: ReactEvent.Form.t): unit => {
    let value = e->ReactEvent.Form.target##value;
    setName(value);
  };

  <form onSubmit>
    <label> {React.string("Name")} </label>
    <input type_="text" name="name" value=name onChange />
    <button type_="submit"> {React.string("submit")} </button>
  </form>;
};
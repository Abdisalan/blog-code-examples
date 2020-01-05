let reasonReactBlue = "#48a9dc";

// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  body {
    background-color: rgb(224, 226, 229);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    background-color: white;
    color: $reasonReactBlue;
    box-shadow: 0 0 0 1px $reasonReactBlue;
    border: none;
    padding: 8px;
    font-size: 16px;
    display: block;
    border-radius: 5px;
  }
  button:active {
    background-color: $reasonReactBlue;
    color: white;
  }
  .container {
    margin: 12px 0px;
    box-shadow: 0px 4px 16px rgb(200, 200, 200);
    border-radius: 12px;
    font-family: sans-serif;
  }
  .containerTitle {
    background-color: rgb(242, 243, 245);
    border-radius: 12px 12px 0px 0px;
    padding: 12px;
    font-weight: bold;
  }
  .containerContent {
    background-color: white;
    padding: 16px;
    border-radius: 0px 0px 12px 12px;
  }
  label {
    display: block;
    color: #555;
    font-size: 0.875em;
  }
  input {
    border-radius: 5px;
    border: 1px solid #ddd; padding: 7px; display: block;
    width: 300px;
    margin-bottom: 15px;
    margin-top: 5px;
  }
  select {
    margin-bottom: 15px;
    margin-top: 5px;
  }
|j};
'use strict';

var React = require("react");

function Form(Props) {
  var onSubmit = function (e) {
    e.preventDefault();
    console.log(e.target.name.value);
    console.log(e.target.city.value);
    return /* () */0;
  };
  var onChange = function (e) {
    console.log(e.target);
    return /* () */0;
  };
  return React.createElement("form", {
              onSubmit: onSubmit
            }, React.createElement("label", undefined, "Name"), React.createElement("input", {
                  name: "name",
                  type: "text",
                  onChange: onChange
                }), React.createElement("label", undefined, "City"), React.createElement("select", {
                  name: "city",
                  onChange: onChange
                }, React.createElement("option", {
                      value: "Boston"
                    }, "Boston"), React.createElement("option", {
                      value: "New York"
                    }, "New York"), React.createElement("option", {
                      value: "Seattle"
                    }, "Seattle")), React.createElement("button", {
                  type: "submit"
                }, "submit"), React.createElement("br", undefined));
}

var make = Form;

exports.make = make;
/* react Not a pure module */

'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function Form(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var setName = match[1];
  var name = match[0];
  var onSubmit = function (e) {
    e.preventDefault();
    console.log("Hi my name is " + (String(name) + ""));
    return /* () */0;
  };
  var onChange = function (e) {
    return Curry._1(setName, e.target.value);
  };
  return React.createElement("form", {
              onSubmit: onSubmit
            }, React.createElement("label", undefined, "Name"), React.createElement("input", {
                  name: "name",
                  type: "text",
                  value: name,
                  onChange: onChange
                }), React.createElement("button", {
                  type: "submit"
                }, "submit"));
}

var make = Form;

exports.make = make;
/* react Not a pure module */

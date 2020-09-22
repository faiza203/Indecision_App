"use strict";

var optionsDiv = document.getElementById("options");
var newOptionDiv = document.getElementById("newOption");

function creatingOptions() {
    var options = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Your Options"
        ),
        React.createElement(
            "button",
            null,
            "Remove All"
        )
    );
    var newOption = React.createElement(
        "form",
        null,
        React.createElement("input", { type: "text" }),
        React.createElement(
            "button",
            null,
            "Remove"
        )
    );
    ReactDOM.render(options, optionsDiv);
    ReactDOM.render(newOption, newOptionDiv);
};

creatingOptions();

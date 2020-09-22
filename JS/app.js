"use strict";

var optionsDiv = document.getElementById("options");
var newOptionDiv = document.getElementById("newOption");
var randomBtn = document.getElementById("giveRandomBtn");

var appInfo = {
    options: []
};
function creatingOptions() {
    var options = appInfo.options.map(function (option, i) {
        return React.createElement(
            "form",
            { key: i, onSubmit: removeIt, id: option[1] },
            React.createElement(
                "ol",
                null,
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "p",
                        null,
                        option[0]
                    ),
                    React.createElement(
                        "button",
                        null,
                        "Remove"
                    )
                )
            )
        );
    });
    var newOption = React.createElement(
        "form",
        { onSubmit: addNewOption },
        React.createElement("input", { type: "text" }),
        React.createElement(
            "button",
            { type: "submit" },
            "Add"
        )
    );
    ReactDOM.render(options, optionsDiv);
    ReactDOM.render(newOption, newOptionDiv);
    if (appInfo.options.length === 0) {
        randomBtn.disabled = true;
    } else {
        randomBtn.disabled = false;
    }
};
function addNewOption(e) {
    e.preventDefault();
    var inputValue = e.target.elements[0].value;
    appInfo.options.push([inputValue, uuid()]);
    e.target.elements[0].value = "";
    creatingOptions();
}
creatingOptions();
function removeIt(e) {
    e.preventDefault();
    var id = e.target.id;
    appInfo.options.map(function (option) {
        if (option[1] === id) {
            appInfo.options.splice(appInfo.options.indexOf(option), 1);creatingOptions();
        }
    });
}
function removeAll() {
    appInfo.options = [];
    creatingOptions();
}
function giveRandom() {
    var options = appInfo.options.length;
    var takeRandom = Math.floor(Math.random() * options);
    var randomOption = appInfo.options[takeRandom][0];
    alert(randomOption);
}

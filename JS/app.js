"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var app = document.getElementById("app");
var options = [["option", uuid()]];

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.option = [["option", uuid()]];
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, null),
                React.createElement(RemoveAllOptions, null),
                React.createElement(Options, null),
                React.createElement(AddNewOption, null)
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "header",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Indecision App"
                ),
                React.createElement(
                    "p",
                    null,
                    "Put your life in the hands of computer"
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var RemoveAllOptions = function (_React$Component3) {
    _inherits(RemoveAllOptions, _React$Component3);

    function RemoveAllOptions(props) {
        _classCallCheck(this, RemoveAllOptions);

        var _this3 = _possibleConstructorReturn(this, (RemoveAllOptions.__proto__ || Object.getPrototypeOf(RemoveAllOptions)).call(this, props));

        _this3.handleRemoveAll = _this3.handleRemoveAll.bind(_this3);
        return _this3;
    }

    _createClass(RemoveAllOptions, [{
        key: "handleRemoveAll",
        value: function handleRemoveAll() {
            options = [];
            makeApp();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    null,
                    "What Should I Do ?"
                ),
                React.createElement(
                    "h1",
                    null,
                    "Your Options"
                ),
                React.createElement(
                    "button",
                    { onClick: this.handleRemoveAll },
                    "Remove All"
                )
            );
        }
    }]);

    return RemoveAllOptions;
}(React.Component);

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options(props) {
        _classCallCheck(this, Options);

        var _this4 = _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).call(this, props));

        _this4.handleRemove = _this4.handleRemove.bind(_this4);
        return _this4;
    }

    _createClass(Options, [{
        key: "handleRemove",
        value: function handleRemove(e) {
            e.preventDefault();
            var id = e.target.id;
            options.map(function (option) {
                if (option[1] === id) {
                    var index = options.indexOf(option);
                    options.splice(index, 1);
                    makeApp();
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            return options.map(function (option, i) {
                return React.createElement(
                    "form",
                    { key: "i", id: option[1], onSubmit: _this5.handleRemove },
                    React.createElement(
                        "p",
                        { name: "option" },
                        "option"
                    ),
                    React.createElement(
                        "button",
                        { id: option[1] + "Btn" },
                        "Remove"
                    )
                );
            });
        }
    }]);

    return Options;
}(React.Component);

var AddNewOption = function (_React$Component5) {
    _inherits(AddNewOption, _React$Component5);

    function AddNewOption() {
        _classCallCheck(this, AddNewOption);

        return _possibleConstructorReturn(this, (AddNewOption.__proto__ || Object.getPrototypeOf(AddNewOption)).apply(this, arguments));
    }

    _createClass(AddNewOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                null,
                React.createElement("input", null),
                React.createElement(
                    "button",
                    null,
                    "Add"
                )
            );
        }
    }]);

    return AddNewOption;
}(React.Component);

function makeApp() {
    return ReactDOM.render(React.createElement(IndecisionApp, null), app);
}
makeApp();

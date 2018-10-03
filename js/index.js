var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var Input = function (_React$Component) {_inherits(Input, _React$Component);function Input() {_classCallCheck(this, Input);return _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));}_createClass(Input, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "input" },
          React.createElement("label", { name: this.props.name }),
          React.createElement("input", {
            id: this.props.name,
            type: this.props.type,
            placeholder: this.props.placeholder })));



    } }]);return Input;}(React.Component);var


Form = function (_React$Component2) {_inherits(Form, _React$Component2);function Form() {_classCallCheck(this, Form);return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));}_createClass(Form, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "form" },
          React.createElement("form", null,
            React.createElement("h2", null, "Welcome back!"),
            React.createElement(Input, {
              name: "username",
              placeholder: "Username",
              type: "text",
              required: true }),

            React.createElement(Input, {
              name: "email",
              placeholder: "user@email.com",
              type: "email",
              required: true }),

            React.createElement(Input, {
              name: "password",
              placeholder: "Password",
              type: "password",
              required: true }),

            React.createElement("button", { onClick: this.props.onClick }, "Sign In"))));



    } }]);return Form;}(React.Component);var


App = function (_React$Component3) {_inherits(App, _React$Component3);
  function App(props) {_classCallCheck(this, App);var _this3 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this3.handleClick = _this3.handleClick.bind(_this3);return _this3;
  }_createClass(App, [{ key: "handleClick", value: function handleClick(

    e) {
      e.preventDefault();
      console.log(e);
    } }, { key: "render", value: function render()

    {
      return React.createElement(Form, { onClick: this.handleClick });
    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
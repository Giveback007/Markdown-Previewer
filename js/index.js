'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var str = 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Dovydas Stirpeika](https://freecodecamp.com/giveback007)*';

var Output = function (_React$Component) {
  _inherits(Output, _React$Component);

  function Output(props) {
    _classCallCheck(this, Output);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      output: marked(str),
      input: str
    };
    _this.handleInput = _this.handleInput.bind(_this);
    return _this;
  }

  Output.prototype.handleInput = function handleInput(event) {
    this.setState({
      output: marked(event.target.value),
      input: event.target.value
    });
  };

  Output.prototype.render = function render() {
    return React.createElement(
      'section',
      { className: 'root' },
      React.createElement('textarea', { id: 'input', value: this.state.input, onChange: this.handleInput }),
      React.createElement('div', { id: 'output', dangerouslySetInnerHTML: { __html: this.state.output } })
    );
  };

  return Output;
}(React.Component);

ReactDOM.render(React.createElement(Output, null), document.getElementById('main'));
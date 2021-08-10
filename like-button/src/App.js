"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./App.css");
function App() {
    return (<div className="App">
      <header className="App-header">
        <LikeButton />
      </header>
    </div>);
}
function LikeButton() {
    var _a = react_1.useState(999), count = _a[0], setCount = _a[1];
    var handleClick = function () {
        setCount(count + 1);
    };
    return <span className="likeButton" onClick={handleClick}>♡ {count}</span>;
}
exports["default"] = App;

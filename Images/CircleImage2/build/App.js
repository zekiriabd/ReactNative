define(["require", "exports", "react", "react-native"], function (require, exports, React, react_native_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class App extends React.Component {
        render() {
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(react_native_1.Text, null, "Open up App.js to start working on your app!")));
        }
    }
    exports.default = App;
    const styles = react_native_1.StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
});
//# sourceMappingURL=App.js.map
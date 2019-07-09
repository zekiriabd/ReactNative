var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define(["require", "exports", "react", "react-native"], function (require, exports, React, react_native_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class App extends React.Component {
        constructor() {
            super();
            this.ShowSnackBarClicked = () => __awaiter(this, void 0, void 0, function* () {
                // this.TranslateYAnimation.setValue(300);  
                this.opacityAnimated.setValue(1);
                react_native_1.Animated.timing(this.TranslateYAnimation, { toValue: 240, duration: 500 }).start(() => {
                    react_native_1.Animated.timing(this.opacityAnimated, { toValue: 0, duration: 2500 }).start();
                });
            });
            this.TranslateYAnimation = new react_native_1.Animated.Value(300);
            this.opacityAnimated = new react_native_1.Animated.Value(0);
        }
        render() {
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(react_native_1.Button, { onPress: this.ShowSnackBarClicked, title: ' Show SnakBar ' }),
                React.createElement(react_native_1.Animated.View, { style: [
                        { transform: [{ translateY: this.TranslateYAnimation }] },
                        { opacity: this.opacityAnimated },
                        styles.SnackBarContaint
                    ] },
                    React.createElement(react_native_1.Text, { style: { color: '#ffffff' } }, "Welcome to React Native SnackBar ToastMessageBar"))));
        }
    }
    exports.default = App;
    const styles = react_native_1.StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#e5e5e5',
            alignItems: 'center',
            justifyContent: 'center',
        },
        SnackBarContaint: {
            position: 'absolute',
            padding: 15,
            margin: 15,
            justifyContent: 'flex-end',
            backgroundColor: '#000000',
            borderRadius: 10,
        }
    });
});
//# sourceMappingURL=App.js.map
import React from 'react';
import { Col, Row, Text, Button, ButtonVariant, FontSize, FontWeight } from '@abc/ui-kit-v2';
export function MainPage() {
    return (React.createElement(Col, null,
        React.createElement(Text, { fontSize: FontSize.T3, fontWeight: FontWeight.Bold }, "Hello, World!"),
        React.createElement(Row, null,
            React.createElement(Button, { variant: ButtonVariant.Secondary, text: "No", onPress: function () { return console.log('No pressed'); } }),
            React.createElement(Button, { variant: ButtonVariant.Primary, text: "Yes", onPress: function () { return console.log('Yes pressed'); } }))));
}
//# sourceMappingURL=main-page.js.map
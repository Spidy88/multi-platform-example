import React from 'react';
import ReactDOM from 'react-dom';
import { Pages } from '@abc/app/dist/web';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

function App() {
    return (
        <section>
            <h1>Hello World</h1>
            <Pages.MainPage />
        </section>
    );
}
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Person(props) {

    return (
        <div class="person">
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
}

var application =(
    <div>
    <Person name="Max" age="28"/>
    <Person name="Peter" age="22"/>
    </div>
);
//

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(application, document.getElementById('application'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

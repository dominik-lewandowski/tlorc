Utils library for JavaScript/TypeScript, so you don't have to reinvent the wheel.

##Installation
`$ npm i -s tlorc`

##Usage

```js
const tlorc = require('tlorc');
const TloEvent = tlorc.TloEvent;

const element = document.getElementById('foo');
const someEvent = new TloEvent(element);

function scrollEvent() {
    someEvent.throttle('scroll', () => {
        // code here
    });
}
scrollEvent();
```
or
```js
import {TloEvent} from 'tlorc';

const element = document.getElementById('foo');
const someEvent = new TloEvent(element);

function scrollEvent() {
    someEvent.throttle('scroll', () => {
        // code here
    });
}
scrollEvent();
```

##Patch Notes
####0.2.2
- Improved type checking
####0.2.0
- Added removing event listeners via `tloEvent.remove('eventName')` or `tloEvent.removeAll()`.

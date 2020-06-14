Utils library for JavaScript/TypeScript, so you don't have to reinvent the wheel.

##Installation
`$ npm i -s tlorc`

##Examples

```js
const tlorc = require('tlorc');
const TloEventWrapper = tlorc.TloEventWrapper;

const el = document.getElementById('foo');
const tloEvent = new TloEventWrapper(el);

function scrollEvent() {
  tloEvent.throttle('scroll', () => {
    // code here
  });
}
scrollEvent();
```
or
```js
import {TloEventWrapper} from 'tlorc';

const el = document.getElementById('foo');
const tloEvent = new TloEventWrapper(el);

function scrollEvent() {
  tloEvent.throttle('scroll', () => {
    // code here
  });
}
scrollEvent();
```

##Docs
####TloEventWrapper
Used for managing DOM events.\
`new TloEventWrapper(element)`

Instance methods:\
`add(types, callback): void`\
`throttle(types, callback, throttleTime = 100): void `\
`debounce(types, callback, debounceTime = 200): void`\
`remove(types): void`\
`removeAll(): void`

The `types` parameter can be a string, an array of strings, an object `{type: string, useCapture?: boolean}` or 
an array of objects. The exception is the `remove` method, which only takes a string or an array of strings.

##Patch Notes
####1.0.0
- Added `add` and `debounce` instance methods
- Changed the event handler's name from TloEvent to TloEventWrapper
- Added the option to set the `useCapture` parameter in TloEventWrapper methods
- Added the docs
- Fixed the callback reference
####0.2.3
- Fixed the main library path
####0.2.2
- Improved type checking
####0.2.0
- Added removing event listeners via `tloEvent.remove('eventName')` or `tloEvent.removeAll()`.

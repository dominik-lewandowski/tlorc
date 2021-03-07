Utils library for JavaScript/TypeScript, so you don't have to reinvent the wheel.

## Installation
`$ npm i -s tlorc`

## Examples

TloEventWrapper:
```js
import {TloEventWrapper} from 'tlorc';

const el = document.getElementById('foo');
const tloEvent = new TloEventWrapper(el);

tloEvent.throttle('scroll', () => {
  // code here
});
```

TloHttp:
```js
import {TloHttp} from 'tlorc';

const http = new TloHttp();
http.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(data => console.log(data));
```

## Documentation
Check https://github.com/tlo-devs/tlorc/wiki/
## Patch Notes
#### 1.4.2 (07.03.2021)
- [TloEventWrapper] Fixed an issue with debounce
#### 1.4.0 (24.06.2020)
- Moved and extended the documentation (https://github.com/tlo-devs/tlorc/wiki/)
- Fixed method types being displayed as props in the interfaces
- [TloEventWrapper] Changed useCapture to be optional when adding an event with object syntax
- [TloHttp] Fixed issues with PUT/DELETE
- [TloHttp] Added support for Blobs
- [TloHttp] Improved error handling
- Added basic utils to [Tlorc]
#### 1.3.0 (22.06.2020)
- [TloHttp] Added a default Content Type header 'application/json'
- [TloHttp] Added an optional 'headers' parameter to the constructor
- [TloHttp] Added the option to modify instance-level headers via `new TloHttp().headers`
#### 1.2.4 (22.06.2020)
- [TloHttp] Fixed a bug with missing body
#### 1.2.3
- [TloEventWrapper] Fixed the bug where callbacks with an argument would need to be undefined checked
- [TloEventWrapper] Added a functionality for all methods - now they all return their instance of `TloEventWrapper`, which allows for method chaining
#### 1.2.2
- Improved types for TloHttp
- Fixed a typing bug with method$Full methods. Now, the return type for them is `Promise<TloFullResponse<T>>` (see docs).
#### 1.2.0
- Added params to TloHttp options
#### 1.1.2
- Fixed types for TloHttp body
- Improved the docs
#### 1.1.1
- Added TloHttp - a fetch http client (see docs for more details)
#### 1.0.1
- Fixed a bug with removing event listeners
- Fixed a bug with `new TloEventWrapper(element)` throwing an error for elements that may be null
#### 1.0.0
- Added `add` and `debounce` instance methods
- Changed the event handler's name from TloEvent to TloEventWrapper
- Added the option to set the `useCapture` parameter in TloEventWrapper methods
- Added the docs
- Fixed the callback reference
#### 0.2.3
- Fixed the main library path
#### 0.2.2
- Improved type checking
#### 0.2.0
- Added removing event listeners via `tloEvent.remove('eventName')` or `tloEvent.removeAll()`.

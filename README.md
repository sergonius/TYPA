# Typa

> Make words type themselves

## Install

```bash
npm install --save @sergonius/typa
# or
yarn add @sergonius/typa
```

## Example

```html
<div class="typa"></div>
```



```javascript
import Typa from '@sergonius/typa';

const typa = new Typa({
	strings: ['do', 'your', 'thing'], // The strings to alternate between
	speed: 100, // The wait time after each letter has been typed
	delay: 1000, // How long to pause for after a string is complete
	loop: true, // Whether to start over after the last word in the string array
	containerSelector: '.typa', // The container selecor. The element must exist beforehand.
	typerClass: 'typa__typer', // A span with this class will be created in the container and will contain the content
	cursorClass: 'typa__cursor', // Optional. Will create another span for the blinking cursor, if you wish
});

typa.start();
```

# BTW

There is also a React version [typa-react](https://github.com/sergonius/typa-react)

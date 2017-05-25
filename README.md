# Navanyms

People who work at Nava are people first, but for fun sometimes we use a collective noun. Some people have preferences, others like the variety 😊

This is a simple JS function that shuffles through our favorite Navanyms/[Demonyms](https://en.m.wikipedia.org/wiki/Demonym)

## Installation

```
npm install navanyms
```

## Usage

Example HTML:

```html
Meet the <span class="js-navanyms">Navacados</span>
```

Then in your JS:

```js
import navanyms from 'navanyms';

var nounElement = document.querySelector('.js-navanyms');

navanyms(nounElement);
```

## API

**`navanyms(nounElement, speed)`**

Arguments:

- `nounElement (HTMLElement)`: The HTML element that wraps the Navanym.
- `speed (Number)`: Shuffle speed, in milliseconds. (Default: `2500`)
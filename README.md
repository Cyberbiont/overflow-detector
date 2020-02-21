# overflow-detector

A little utility for responsive web design implementation, whose purpose is to facilitate tuning media queries.
If you have specific HTML element with some content, which is likely to cause overflow when shrinking (often it is text content) this script will help you to determine at which viewport width exactly overflow happens without tedious manual viewport changing. Then you can easily set media query for this element at specified point to prevent overflow.
This script uses a binary search algorithm between minimum and maximum viewport values (see [options](#options)).

## Usage

1. Connect the script to your web page The most fast and convenient way is to use [jsdelivr](https://www.jsdelivr.com/) CDN. Add this code to your page:
`<script src="https://cdn.jsdelivr.net/gh/cyberbiont/overflow-detector@1.0/overflow-detector.js"></script>`
Script will become available in global window as `window.overflow`.
You can also install from npm:
`npm install overflow-detector --save-dev`
3. Run command from browser console
   `overflow(selector, {options})`
   This will create overflowDetector instance for matched elements.
4. Press the key (num 0 by default, so enable numlock). Event listener is tied to document, so click somewhere on the page to make it active. Script will run viewport width change and upon finishing alert you about viewport width at which overflow happened (if at all).

## Options

### wmin

Minimum viewport to test.

### wmax

Maximum viewport to test.

### keyCode

KeyCode of the key you want to use to run the script. 96 by default (num 0).

### verticalOverflow

Whether vertical overflow should be accounted.

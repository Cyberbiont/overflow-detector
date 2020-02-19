# overflow-detector

A little utility for responsive web design implementation, whose purpose is to facilitate tuning media queries.
If you have specific HTML element with some content, which is likely to cause overflow when shrinking (often it is text content) this script will help you to determine at which viewport width exactly overflow happens without manually tedious manual viewport changing. Then you can easily set media query for this element at specified point to prevent overflow.
This script uses a binary search algorithm between minimum and maximum viewport values (see [options](#options)).

## usage

1. Connect the script to your web page (either add it manually (install npm dev dependencies using GitHub repo address) or use something like [jsdelivr](https://www.jsdelivr.com/) to load it from GitHub). Script will become available in global window as window.overflow.
2. Run command from browser console
   `overflow(selector, {options})`
   This will create overflowDetector instance for matched elements.
3. Press the key (num 0 by default, so enable numlock). Event listener is tied to document, so click somewhere on the page to make it active. Script will run viewport width change and upon finishing alert you about viewport width at which overflow happened (if at all).

## options

### wmin

Minimum viewport to test.

### wmax

Maximum viewport to test.

### keyCode

KeyCode of the key you want to use to run the script. 96 by default (num 0).

### verticalOverflow

Whether vertical overflow should be accounted.

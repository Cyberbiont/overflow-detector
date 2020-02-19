"use strict";
// 🕮 <YL> 0a98bc14-fce2-44e3-9ee7-f28ca7257342.md

var active = [];

var Detector = function(selector, callOptions) {
  // 🕮 <YL> 9f390b47-b78a-4896-9aa0-3046389f0e26.md

  var elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    console.error("ovfDetector error: no elements match selector");
    return;
  }
  var options = setOptions(callOptions);
  document.addEventListener("keydown", handler);

  function setOptions(options) {
    options = options ? Object.create(options) : {}; // Global opts

    options.wmin = options.wmin !== undefined ? options.wmin : 1;
    options.wmax = options.wmax !== undefined ? options.wmax : 1920;
    options.keyCode = options.keyCode !== undefined ? options.keyCode : 96;
    options.verticalOverflow =
      options.verticalOverflow !== undefined
        ? options.verticalOverflow
        : false;

    return options;
  }

  this.remove = function() {
    document.removeEventListener("keydown", handler);
  };

  function handler(event) {
    console.log(event.keyCode);
    if (event.keyCode == options.keyCode) {
      // 🕮 <YL> 2c1d3283-0d8b-4333-ad85-2e2b0459ca34.md
      // "O"
      var result = binarySearch({
        left: options.wmin,
        right: options.wmax,
        tolerance: 1,
        maxCycles: 20,
        testFunction: checkOverflow
      });

      if (result) {
        alert(`overflow happened at ${Math.round(result)}px window width`);
      } else {
        alert("no overflows detected");
      }
    }
  }

  function binarySearch(o) {
    // @outdated 🕮 <YL> 0eb039dd-8ce9-4fb9-917e-b64d26219ce2.md
    // 🕮 <YL> fb5ac7b8-a3aa-4180-ba73-1759f5a2a749.md
    var mid,
      result,
      ovfCount = 0,
      i = 0;
    testMid();

    while (Math.abs(o.left - o.right) > o.tolerance && i < o.maxCycles) {
      // 🕮 <YL> 1bca2408-c650-4b41-b8fa-8309a52a1617.md
      if (result) {
        o.left = mid;
        ovfCount++;
      } else o.right = mid;
      testMid();
      i++;
    }

    document.documentElement.style.width = "";
    if (!ovfCount) return false;
    return mid;

    function testMid() {
      // 🕮 <YL> 3a8a4321-0a61-4c9f-bfdf-bf6f61efd21f.md
      mid = o.left + (o.right - o.left) / 2;
      if (o.round) Math.round(mid);
      result = o.testFunction(mid);
    }
  }

  function checkOverflow(mid) {
    // 🕮 <YL> 3dbc069c-efb8-4970-b16d-92568a0a16b5.md
    document.documentElement.style.width = mid + "px";

    return Array.prototype.some.call(elements, function(el) {
      var condition;
      if (options.verticalOverflow) {
        condition =
          el.clientWidth < el.scrollWidth ||
          el.clientHeight < el.scrollHeight;
      } else {
        condition = el.clientWidth < el.scrollWidth;
      }
      return condition;
    });
  }
  // 🕮 <YL> fdf2b888-4e1f-4d3c-aab5-2a7743977bc2.md
};

function createOverflowDetector(selector, callOptions) {
  return new Detector(selector, callOptions);
}

window.overflow = createOverflowDetector;
// 🕮 <YL> f8acc129-9c20-418f-8b1f-27a1b867ef4d.md
//! 🕮 <YL> 2ebdcfed-3349-4b5e-b937-e51a348a2f4f.md

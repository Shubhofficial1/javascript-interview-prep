// Event propogation is the phenomenon of event being transmitted between different dom elements

// (div) => (form) => button;

// Capturing => target => bubbling

// if we attach event listeners to all these elements & click on button , all 3 elements are going to be triggered.

// If we will click on form element , both div & form event will be triggered. This phenomenon of event transmission from bottom to top is known as event bubbling.

// Few events do not bubble . For example : focus, blur
// -------------------------------

// Difference between event.target vs this.target vs event.currentTarget

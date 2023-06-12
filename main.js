// when any color slice is clicked, the background changes to that color
const colors = document.querySelector('.color-wheel')

colors.addEventListener('click', event => {
  // Get the color of the event
  const color = event.target

  // Get the computed style of the element
  const computedStyle = window.getComputedStyle(color);

  // Get the background color value
  const backgroundColor = computedStyle.backgroundColor;

  document.querySelector('html').style.backgroundColor = backgroundColor
})
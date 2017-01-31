// JavaScript helper for replacing content on main page

function replaceContent(target, source) {
  document.getElementById(target).innerHTML = document.getElementById(source).innerHTML;
  // make fancy flash/transition when changing div content
}

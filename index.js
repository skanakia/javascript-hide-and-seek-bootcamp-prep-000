function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested')
}

function deepestChild() {
  let node = document.querySelectorAll('#grand-node div')
  let nodeArray = Array.from(node)
  
}

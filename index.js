function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.querySelectorAll('#grand-node div')
  let nodeArray = Array.from(node)
  return nodeArray[nodeArray.length - 1]
}

function increaseRankBy(n) {
  
}
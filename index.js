function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div')
  let nodesArray = Array.from(node)
  return nodesArray[nodesArray.length - 1]
}

function increaseRankBy(n) {
  let nodes = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < nodes.length; i++) {
    
  }
}
function getSiblings(node) {
  var allChildren = node.parentNode.children
  var array = {
    length: 0
  }
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== node) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }

  return array
}

function addClass(node, classes) {
  for (let key in classes) {
    var value = classes[key]
    var methodName = value ? 'add' : 'remove'
    node.classList[methodName](key)
  }
}

var classes = {
  a: true,
  b: true,
  c: true
}

window.sdom = {}

sdom.getSiblings = getSiblings
sdom.addClass = addClass


console.log(sdom.getSiblings(item3))
sdom.addClass(item3, classes)

Node.prototype.getSiblings = function() {
  var allChildren = this.parentNode.children
  var array = {
    length: 0
  }
  for (let i = 0; i < allChildren.length; i++) {
    if (allChildren[i] !== this) {
      array[array.length] = allChildren[i]
      array.length += 1
    }
  }

  return array
}

Node.prototype.addClass = function(classes) {
  for (let key in classes) {
    var value = classes[key]
    var methodName = value ? 'add' : 'remove'
    this.classList[methodName](key)
  }
}

console.log(item3.getSiblings())

item3.addClass({
  d: true
})


window.Node2 = function(node) {
  return {
    getSiblings: function() {
      var allChildren = node.parentNode.children
      var array = {
        length: 0
      }
      for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
          array[array.length] = allChildren[i]
          array.length += 1
        }
      }

      return array
    },
    addClass: function(classes) {
      for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
      }
    }
  }
}

var node2 = Node2(item2)
console.dir(node2.getSiblings())
console.log('node2: ' + node2.getSiblings())
node2.addClass(classes)

window.jQuery = function(nodeOrSelector) {
  let node
  if (typeof nodeOrSelector === 'string') {
    node = document.querySelector(nodeOrSelector)
  } else {
    node = nodeOrSelector
  }
  return {
    getSiblings: function() {
      var allChildren = node.parentNode.children
      var array = {
        length: 0
      }
      for (let i = 0; i < allChildren.length; i++) {
        if (allChildren[i] !== node) {
          array[array.length] = allChildren[i]
          array.length += 1
        }
      }

      return array
    },
    addClass: function(classes) {
      for (let key in classes) {
        var value = classes[key]
        var methodName = value ? 'add' : 'remove'
        node.classList[methodName](key)
      }
    }
  }
}

var node1 = jQuery("#item1")
node1.addClass({
  red: true
})

//新版本
window.jQuery1 = function(nodeOrSelector) {
  let nodes = {}
  if (typeof nodeOrSelector === 'string') {
    temp = document.querySelectorAll(nodeOrSelector)
    for (let i = 0; i < temp.length; i++) {
      nodes[i] = temp[i]
    }
    nodes.length = temp.length
  } else if (nodeOrSelector instanceof Node) {
    nodes = {
      0: nodeOrSelector,
      length: 1
    }
  }

  nodes.addClass = function(classes) {
    classes.forEach((value) => {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].classList.add(value)
      }
    })
  }

  nodes.text = function(text) {
    if (text === undefined) {
      var texts = []
      for (let i = 0; i < nodes.length; i++) {
        texts.push(nodes[i].textContent)
      }
      return texts
    } else {
      for (let i = 0; i < nodes.length; i++) {
        nodes[i].textContent = text
      }
    }
  }
  return nodes

}

var node11 = jQuery1("ul > li")
node11.addClass(["red"])
console.log(node11)
console.log(node11.text())
node11.text("hah")

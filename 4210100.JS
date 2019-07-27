<ul id="content-wrapper"></ul>
<button onclick="load()" id="loadMore">Load more </button>

const content = ['a', 'b', 'c', 'd', 'e', 'f'];
let counter = 0;

function load() {
  var node = document.createElement("li");  // Create a <li> node
  var textnode;

  if(content[counter]) {
    // Create a text node if there is text  
    textnode = document.createTextNode(content[counter]); 
  } else {
    // Return a message if there is no more
    textnode = document.createTextNode('No Data'); 
  }

  counter++; // Increment counter
  node.appendChild(textnode);  // Append the text to <li>
  document.querySelector('#content-wrapper').appendChild(node)
}

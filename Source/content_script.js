walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bArtificial Intelligence\b/g, "Stochastic Parrot");
	v = v.replace(/\bArtificial intelligence\b/g, "Stochastic parrot");
	v = v.replace(/\bartificial Intelligence\b/g, "stochastic Parrot");
	v = v.replace(/\bartificial intelligence\b/g, "stochastic parrot");
	v = v.replace(/\bAI\b/g, "SP");
	v = v.replace(/\bAIs\b/g, "SPs");
	v = v.replace(/\bAI\'s\b/g, "SP\'s");
	
	textNode.nodeValue = v;
}



'use strict';
const DocumentManager = require('../document-manager').getRendererModule();

DocumentManager.setContentSetter(function(content) {
	document.querySelector('#content').value = content;
});

DocumentManager.setContentGetter(function() {
	return document.querySelector('#content').value;
})

document.querySelector('#content').addEventListener('input', function() {
	DocumentManager.setEdited(true);
});

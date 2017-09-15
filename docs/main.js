// import entry point of modulz
import 'src/js/main';

// Import JS component files
import 'src/js/components/Navigation';

// import highlight files and initialize
import highlight from 'highlight.js/lib/highlight.js';
import highlightCSS from 'highlight.js/lib/languages/css';
import highlightXML from 'highlight.js/lib/languages/xml';
import highlightJavascript from 'highlight.js/lib/languages/javascript';
import highlightBash from 'highlight.js/lib/languages/bash';
import 'assets/vendor/highlight.css';

highlight.registerLanguage('css', highlightCSS);
highlight.registerLanguage('xml', highlightXML);
highlight.registerLanguage('javascript', highlightJavascript);
highlight.registerLanguage('bash', highlightBash);

document.addEventListener('DOMContentLoaded', () => {
  highlight.initHighlightingOnLoad();
});

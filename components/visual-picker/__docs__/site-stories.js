// This object is imported into the documentation site. An example for the documentation site should be part of the pull request for the component. The object key is the kabob case of the "URL folder". In the case of `http://localhost:8080/components/app-launcher/`, `app-launcher` is the `key`. The folder name is created by `components.component` value in `package.json`. The following uses webpack's raw-loader plugin to get "text files" that will be eval()'d by CodeMirror within the documentation site on page load.

/* eslint-env node */
/* eslint-disable global-require */

const siteStories = [
	require('raw-loader!@salesforce/design-system-react/components/visual-picker/__examples__/coverable.jsx'),
	require('raw-loader!@salesforce/design-system-react/components/visual-picker/__examples__/non-coverable.jsx'),
	require('raw-loader!@salesforce/design-system-react/components/visual-picker/__examples__/vertical.jsx'),
];

module.exports = siteStories;
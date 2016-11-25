import React         from 'react';
import DocumentTitle from 'react-document-title';
import App           from './App';

module.exports = function Page () {
  return (
    <DocumentTitle title="Call Your Reps!">
      <App />
    </DocumentTitle>
  );
}


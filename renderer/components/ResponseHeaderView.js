import React from 'react';
import CodeEditor from './CodeEditor';


function stringifyHeaders(headers) {
  const arr = [];
  for (const key in headers)
    arr.push(`${key}: ${headers[key]}`);
  return arr.join('\n');
}

const ResponseHeaderView = ({ headers }) => {
  return (
    <div className="response-header-view">
      <CodeEditor
        code={ stringifyHeaders(headers) }
        language="http"
        readOnly={ true }
        lineNumbers={ true }
      />
    </div>
  );
};

export default ResponseHeaderView;

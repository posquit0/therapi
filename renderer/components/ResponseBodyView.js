import React from 'react';
import CodeEditor from './CodeEditor';


const ResponseBodyView = ({ data }) => {
  return (
    <div className="response-body-view">
      <CodeEditor
        code={ JSON.stringify(data) }
        language="javascript"
        readOnly={ true }
        lineNumbers={ true }
      />
    </div>
  );
};

export default ResponseBodyView;

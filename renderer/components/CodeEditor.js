import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/http/http';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neat.css';


class CodeEditor extends Component {

  render() {
    const { code, language, readOnly, lineNumbers } = this.props;

    const options = {
      readOnly,
      lineNumbers,
      mode: language,
      theme: 'neat'
    };
    return (
      <CodeMirror
        options={ options }
        value={ code }
      />
    );
  }
}

export default CodeEditor;

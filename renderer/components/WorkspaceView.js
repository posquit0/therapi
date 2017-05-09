import React from 'react';


const WorkspaceView = ({ history }) => {
  return (
    <div className="workspace-view">
      { JSON.stringify(history) }
    </div>
  );
};

export default WorkspaceView;

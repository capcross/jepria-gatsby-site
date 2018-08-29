import React from 'react';
import {AddButton, SaveButton, EditButton, ViewButton, ListButton, SearchButton, FindButton, DeleteButton} from '.';

export default function(props) {
  const actions = props.actions;
  const wrkst = props.workstate;
  
  return (
    <div className="jepRia-ToolBar">
      <AddButton workstate={wrkst} onClick={actions.add}/>
      <SaveButton workstate={wrkst} onClick={actions.save}/>
      <EditButton workstate={wrkst} onClick={actions.edit}/>
      <DeleteButton workstate={wrkst} onClick={actions.delete}/>
      <ViewButton workstate={wrkst} onClick={actions.view}/>
      <ListButton workstate={wrkst} onClick={actions.list}/>
      <SearchButton workstate={wrkst} onClick={actions.search}/>
      <FindButton workstate={wrkst} onClick={actions.find}/>
    </div>
  );
};

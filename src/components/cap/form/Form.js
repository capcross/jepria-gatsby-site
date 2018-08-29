import React from 'react';
import { Workstate } from '../../../state/workstate';
import ListForm from './list/ListForm';
import DetailForm from './detail/DetailForm';

export default function (props) {
  const workstate = props.workstate;
  const items = props.items;
  const actions = props.actions;

  return (
    workstate === Workstate.VIEW_LIST || workstate === Workstate.SELECTED ?
    <ListForm
      items={items}
      actions={actions} />
    :
    <DetailForm
      workstate={workstate}
      currentItem={items[props.currentIndex]} />
  );
};

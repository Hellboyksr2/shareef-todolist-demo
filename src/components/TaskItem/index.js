import React from "react";

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DeleteIcon from '@material-ui/icons/HighlightOff';

const TaskItem = ({iteam, onRemove}) => {
  return (
    <>
      <ListItem button>
        <ListItemText primary={iteam} />
        <DeleteIcon color="secondary" onClick={onRemove}/>
      </ListItem>
      <Divider />
    </>
  );
};

export default TaskItem;

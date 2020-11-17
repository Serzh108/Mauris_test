import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(() => ({
  paper: {
    position: 'absolute',
    top: '10px',
    left: '20px',
    width: '80vw',
    outline: 'none',
  },
}));

export default function SimpleModal({ open, handleClose, imgSrc }) {
  const classes = useStyles();

  const body = (
    <div className={classes.paper}>
      <img src={imgSrc} alt="original img" width="100%" />
    </div>
  );

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        {body}
      </Modal>
    </div>
  );
}

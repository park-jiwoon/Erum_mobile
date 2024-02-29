import React, { useContext } from 'react';
import { useAppContext } from '../AppContext';

function Copyright() {
  const { AppName } = useAppContext();

  return (
    <p className='copyright'>
      Copyright © 2023 {AppName} All Rights Reserved.
    </p>
  );
}

export default Copyright;

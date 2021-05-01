import React , {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {useDispatch} from 'react-redux';

export default function Homepage() {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <h1>Homepage</h1>
    </div>
  );
}
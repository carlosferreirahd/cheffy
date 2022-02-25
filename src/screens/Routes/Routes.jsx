import React from "react";
import { useLocation } from 'react-router-dom';


export function Routes() {
  const location = useLocation();
  console.log('location', location);
  return (
    <div></div>
  );
}

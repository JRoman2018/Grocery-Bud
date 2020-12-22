import React, { useEffect } from 'react'

const Alert = ({msg, type, removeAlert, list}) => {

  useEffect(() => {
    const time = setInterval(() => {
      removeAlert();
    }, 3000);

    return () => clearInterval(time);
  },[list])

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert

import React from 'react';
export default function ButtonLoading() {
  return (
    <div className="hmdButtonLoading loading">
        <button type="button" className="primary block" disabled> <i className="fa fa-spinner fa-spin"></i></button>      
    </div>
  );
}
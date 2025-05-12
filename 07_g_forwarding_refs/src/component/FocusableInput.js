import React from 'react';

const FocusableInput = ((props) => {

  return (
    <input ref={props.ref} className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 " />
  );
});

FocusableInput.displayName = 'FocusableInput';

export default FocusableInput;
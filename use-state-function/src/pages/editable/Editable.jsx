import React, { useState } from 'react'

const Editable = () => {
    const [contentText, setContentText] = useState(
        window.localStorage.getItem("content")
      );
      // {debugger}
      return (
        <>
          
          <input
            onChange={(e) => {
              setContentText(e.target.value);
              window.localStorage.setItem("content", e.target.value);
            }}
            type="text"
            value={contentText?.length > 0 ? contentText : "Editable text"}
          />
        </>
      );
}

export default Editable
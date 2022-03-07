import React, { useState } from 'react'

const ComposantFunc  = () => {

    const [value, setValue] = useState('')
  
    return (
      <form onSubmit={event => {
        alert('A name was submitted: ' + value);
        event.preventDefault();
      }}>        
      <label>
          Name:
          <input type="text" value={value} onChange={e => setValue(e.target.value)} />        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  export default ComposantFunc;
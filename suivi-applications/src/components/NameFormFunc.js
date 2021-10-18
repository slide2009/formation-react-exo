import React, { useState } from "react";

const NameFormFunc = props => {

    const [value, setValue] = useState('')
    const handleChange = (event) => {    
        setValue( event.target.value);  
    }

    const handleSubmit = (event) => {
      alert('Le nom a été soumis : ' + value);
      event.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
          <label>
            Nom :
            <input type="text" value={value} onChange={handleChange} />        </label>
          <input type="submit" value="Envoyer" />
        </form>
      )
}

export default NameFormFunc
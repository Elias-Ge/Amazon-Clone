import React, { useState } from 'react';
import Select from 'react-select';


const Lists = () => {
    const options = [
        { value: '', label: 'All' },
        { value: 'Baby', label: 'Baby' },
        { value: 'Books', label: 'Books' },
        { value: 'Arts', label: 'Arts' },
        { value: 'Movies', label: 'Movies' },
        { value: 'Computers', label: 'Computers' },
      ];
    const [list, setList] = useState([options.value]);

  return (
    <div>
         <Select 
        defaultValue={list}
        onChange={setList}
        options={options}
      />
    </div>
  )
}

export default Lists


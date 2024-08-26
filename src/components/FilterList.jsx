import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';

const FilterList = () => {
    const filters = ['All', 'Javascript', 'React', 'Skills', 'Frontend', 'Live', 'Sales'];
  return (
    <section className='flex gap-3'>
        {
            filters.map(filter => 
                <Button name={filter} key={uuidv4()} />
            )
        }
        
    </section>
  )
}

export default FilterList
import React from 'react'
import Card from "../Card/Card.jsx";
import './List.scss'
import useFetch from '../../hooks/useFetch';
const List = ({subCats, maxPrice, sort, catId}) => {

    
    const { data, loading, error } = useFetch(`products?populate=*&[filters][categories][id]=${catId}${subCats.map(
      item => `&[filters][sub_categories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort || 'asc'}`
    );

    
  return (
    <div className='list'>
        {loading?"loading":data?.map(item=>(
            <Card item = {item} key={item.id}/>
        ))}
    </div>
  )
}

export default List;
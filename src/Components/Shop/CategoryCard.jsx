import React from 'react'

function CategoryCard(props) {
    const data = props.item;
  return (
    <a className='flex flex-col justify-between align-text-bottom items-center text-center p-[10px] gap-[10px] min-w-[250px]' href="">
        <img className='object-contain aspect-video' src={data.img} alt={`${data.name} image`} />
        <h2 className='font-bold text-[17px]'>{data.name}</h2>
    </a>
  )
}

export default CategoryCard
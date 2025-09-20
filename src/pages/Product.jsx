import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Product = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateSearchParams = (newParams) => {
        const paramobj = Object.fromEntries(searchParams.entries());
        const mergeParms = { ...paramobj, ...newParams }
        setSearchParams(mergeParms)
    }
    return (
        <div>
            <h4>colors</h4>
            <button onClick={() => updateSearchParams({ color: "red" })}>red</button>
            <button onClick={() => updateSearchParams({ color: "white" })}>white</button>
            <h4>size</h4>
            <button onClick={() => updateSearchParams({ size: 7 })}>7</button>
            <button onClick={() => updateSearchParams({ size: 8 })}>8</button>
            <button onClick={() => updateSearchParams({ size: 9 })}>9</button>
            <button onClick={() => updateSearchParams({ size: 10 })}>10</button>
        </div >
    )
}

export default Product;
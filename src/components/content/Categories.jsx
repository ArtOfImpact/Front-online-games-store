import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import { setCatagories } from '../../redux/slices/filterSlices'
import { setPage } from "../../redux/slices/paginationSlices"

let Categories = () => {

    const catagories = useSelector((state) => state.filter.catagories)
    const dispatch = useDispatch()

    const categoriesList = [
        'Все',
        'Action-adventure',
        'Action/RPG',
        'Adventure',
        'Shooter',
        'RPG',
    ]

    const zeroPageCategories = (value) => {
        dispatch(setCatagories(value))
        dispatch(setPage(1))
    }

    return (
        <div className="categories">
            <ul>
                {categoriesList.map((value, i) => (
                    <li key={i} className={catagories === value ? "active" : ''} onClick={() => zeroPageCategories(value)}>{value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Categories
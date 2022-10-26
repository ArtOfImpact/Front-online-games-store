import styles from './Search.module.scss'
import clear from '../../assets/img/clear.svg'
import { useRef } from 'react'
import debounce from 'lodash.debounce'
import { useCallback } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from '../../redux/slices/paginationSlices'

let Search = () => {
    const [value, setValue] = useState('')
    // const { searchValue, setSearchValue } = useContext(SearchContext)
    const dispatch = useDispatch();
    const { searchValue } = useSelector((state) => state.pagination)
    const inputRef = useRef()

    const onClickClear = () => {
        setValue('')
        dispatch(setSearch(''))
        inputRef.current.focus()
    }

    const updateSearchValue = useCallback(
        debounce((value) => {
            dispatch(setSearch(value))
        }, 500),
        []
    )

    const onChangeSearch = (event) => {
        setValue(event)
        updateSearchValue(event)
    }

    return (
        <div className={styles.root}>
            <input ref={inputRef} value={value} placeholder="Поиск игры ..." onChange={(event) => onChangeSearch(event.target.value)} />
            {searchValue ? <img className={styles.svgClear} src={clear} onClick={() => onClickClear()} /> : null}
        </div>
    )
}

export default Search;
import style from './Pagintion.module.scss'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../../redux/slices/paginationSlices';
import { selectPizza } from '../../redux/slices/pizzasSlices';

let Pagination = () => {

    const dispatch = useDispatch()

    const { All, limit } = useSelector(selectPizza)
    const Count = Math.ceil(All / limit)
    return (
        <ReactPaginate
            className={style.root}
            breakLabel="..."
            nextLabel=">"
            onPageChange={(event) => dispatch(setPage(event.selected + 1))}
            pageRangeDisplayed={4}
            pageCount={Count}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Pagination;
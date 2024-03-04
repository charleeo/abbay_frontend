
import classnames from 'classnames';
import { usePagination, DOTS } from '../hooks/usePagination';


export const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
    totalItems
}: any) => {

    const paginationRange: any = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    // If there are less than 2 times in pagination range we shall not render the component
    if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const calculateItemTo = (page: number, pageSize: number) => {
        const itemStartFrom = calculateItemFrom(page, pageSize) - 1
        return itemStartFrom + totalItems
    }

    const calculateItemFrom = (page: number, pageSize: number) => {
        return ((page - 1) * pageSize) + 1
    }

    const showItemsInView = () => {
        let startFrom = currentPage == 1 ? currentPage : calculateItemFrom(currentPage, pageSize)
        return <li className={classnames('pagination-item')}>
            {
                startFrom
                + ' - ' +
                calculateItemTo(currentPage, pageSize)
                + ' of ' +
                totalCount
            }
        </li>
    }
    let lastPage = paginationRange[paginationRange?.length - 1];
    return (
        <ul
            className={classnames('pagination-container', { [className]: className })}
        >
            {/* Left navigation arrow */}
            {showItemsInView()}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className="arrow left" />
            </li>
            {paginationRange?.map((pageNumber: number | string | any, index: number) => {

                // If the pageItem is a DOT, render the DOTS unicode character
                if (pageNumber === DOTS) {
                    return <li key={index} className="pagination-item dots">&#8230;</li>;
                }

                // Render our Page Pills
                return (
                    <li key={index}
                        id={pageNumber}
                        className={classnames('pagination-item', {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            {/*  Right Navigation arrow */}
            <li
                className={classnames('pagination-item', {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className="arrow right" />
            </li>
        </ul>
    );
};


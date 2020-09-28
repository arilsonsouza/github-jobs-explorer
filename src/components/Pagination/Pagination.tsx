import React , {useEffect, useState} from 'react';
import PropTypes from 'prop-types'

import './pagination.scss';

const Pagination = (
        {currentPage, collectionLength, paginationRange, rowsPerPage, handleChange}:
        {currentPage: any, collectionLength: number, paginationRange: number, rowsPerPage: number, handleChange(page: string | number): void}) => {
        
    const [pages, setPages] = useState<(string|number)[]>([]);    

    const generatePagesArray = (): (string|number)[] => {        
        const pagesArray: (string | number)[] = [];
        const totalPages = Math.ceil(collectionLength / rowsPerPage);
        const halfWay = Math.ceil(paginationRange / 2);
        let position;

        if (currentPage <= halfWay) {
            position = 'start';
        } else if (totalPages - halfWay < currentPage) {
            position = 'end';
        } else {
            position = 'middle';
        }

        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var pageNumber = calculatePageNumber(i, totalPages);
            var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                pagesArray.push('...');
            } else {
                pagesArray.push(pageNumber);
            }
            i++;
        }
        return pagesArray;
    }

    const calculatePageNumber = (i: number, totalPages: number): number => {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        } else if (i === 1) {
            return i;
        } else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            } else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            } else {
                return i;
            }
        } else {
            return i;
        }
    }

    useEffect(() => {        
        setPages(generatePagesArray());
    }, [currentPage, collectionLength])
    
    const renderPaginationItem = (page: number | string, index: number) => {
        return (
            <li
                className={
                    `${page !== '...' ? 'pagination_item' : 'pagination_item--ellipsis'}
                    ${page === currentPage ? 'pagination_item--current' : ''}`
                }
                key={index}
                onClick={() => (page !== '...' && page !== currentPage) ? handleChange(page) : null }
            >
                {page === '...' ? <i className="material-icons md-dark md-inactive">more_horiz</i> : page }
            </li>
        )      
    };

    return (
        <ul className="pagination flex">
            <li
                className={currentPage !== 1 ? 'pagination_item' : 'pagination_item pagination_item--disabled'}
                onClick={() => currentPage !== 1 ? handleChange(currentPage - 1) : null}
            >
                <i className="material-icons md-dark md-inactive">navigate_before</i>
            </li>
            {pages.map((page, index) => 
                renderPaginationItem(page, index)
            )}
            <li
                className={currentPage !== pages[pages.length - 1] ? 'pagination_item' : 'pagination_item pagination_item--disabled'}
                onClick={() => currentPage !== pages[pages.length - 1] ? handleChange(currentPage + 1) : null}
            >
                <i className="material-icons md-dark md-inactive">navigate_next</i>
            </li>
        </ul>
    );
};


Pagination.propTypes = {    
    currentPage: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ]),
    collectionLength: PropTypes.number.isRequired,
    paginationRange: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,    
};

export default Pagination;
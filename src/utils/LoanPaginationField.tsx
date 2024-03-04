import React from 'react'
import { SearchInputSVG } from './fields/SVGs/SearchInputSVG'

export const LoanPaginationField: React.FC<any> = ({ handleInputChange, selectedPage }) => {
    return (
            <SearchInputSVG
              label="Per Page"
              fieldName="limit"
              value={selectedPage}
              type="text"
              placeholder="Enter page number"
              addedClass='border-1 h-10 mb-0 '
              changeEvent={handleInputChange}
            />
    )
}
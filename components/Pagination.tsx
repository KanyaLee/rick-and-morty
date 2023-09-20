
import PaginationButton from "./PaginationButton";

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }

    const handleClick = (page: number) => {
        onPageChange(page);
    };



    const renderPageNumbers = () => {
        let pages = [];

        let startPage  = Math.max(2,currentPage-2) //always shows 1
        let endPage = Math.min(totalPages-1, startPage + 4)
        startPage = Math.max(2, endPage-4);

        pages.push(

            <PaginationButton 
                key={1}
                label={`${1}`}
                onClick={() => handleClick(1)} 
                shouldBeDisabled={false}          
                isActive={1 === currentPage}      
            />
        );

        if (startPage > 2) {
            pages.push(<span key = "ellipsis-start">...</span>);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(

                <PaginationButton
                    key = {i}
                    label={`${i}`}
                    onClick = {()=> handleClick(i)}
                    shouldBeDisabled={false}
                    isActive={i === currentPage}
                    />
            )
        }

        if (endPage < totalPages - 1) {
            pages.push(<span key="ellipsis-end">...</span>);
        }
    
        // Always show last page
        if (totalPages > 1) {
            pages.push(

                <PaginationButton
                    key={totalPages}
                    label={`${totalPages}`}
                    onClick={() => handleClick(totalPages)}
                    shouldBeDisabled={false}
                    isActive={totalPages === currentPage}
                    />
            );
        }
    
        return pages;


    };
    return (
        <div className="flex space-x-2 justify-center">

            <PaginationButton 
                label="<"
                onClick={handlePrevious} 
                shouldBeDisabled={currentPage <= 1}
                />

            {renderPageNumbers()}

            <PaginationButton
                label=">"
                onClick={handleNext}
                shouldBeDisabled={currentPage >= totalPages}
                />
        </div>
    )

  }


  export default Pagination;
  

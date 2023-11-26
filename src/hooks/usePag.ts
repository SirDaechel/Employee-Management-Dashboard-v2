import { useState, useEffect } from "react";

// The usePagination hook accepts an array and a pageSize
export const usePag = (data: [], pageSize: number) => {
  // Initialize the state variables
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  // Calculate the total number of pages based on the data length and pageSize
  useEffect(() => {
    if (data && data.length > 0) {
      setTotalPages(Math.ceil(data.length / pageSize));
    }
  }, [data, pageSize]);

  // Slice the data array based on the currentPage and pageSize
  useEffect(() => {
    if (data && data.length > 0) {
      //   const startIndex = (currentPage - 1) * pageSize;
      //   const endIndex = startIndex + pageSize;
      const endIndex = currentPage * pageSize;
      const startIndex = endIndex - pageSize;
      setCurrentData(data.slice(startIndex, endIndex));
    }
  }, [data, currentPage, pageSize]);

  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Define a function to handle the page change
  const paginate = (page: number) => {
    // Validate the page number and update the currentPage state
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Return the currentData, currentPage, totalPages, and paginate function
  return {
    currentData,
    currentPage,
    totalPages,
    paginate,
    pageNumbers,
  };
};

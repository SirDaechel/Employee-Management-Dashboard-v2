import { useState, useEffect } from "react";

export const usePagination = (data: any[], pageSize: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState<any[]>([]);
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
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  //paginate to the first page
  const paginateToFirst = () => {
    for (let i = 1; i <= Math.ceil(data.length / pageSize); i++) {
      setCurrentPage(1);
    }
  };

  //paginate to the last page
  const paginateToLast = () => {
    for (let i = 1; i <= Math.ceil(data.length / pageSize); i++) {
      setCurrentPage(i);
    }
  };

  return {
    currentData,
    currentPage,
    totalPages,
    paginate,
    pageNumbers,
    paginateToFirst,
    paginateToLast,
  };
};
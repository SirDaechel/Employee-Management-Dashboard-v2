import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrentStaffs } from "../features/staffs/data/staffsApiSlice";

export const usePagination = (
  data: any[],
  currentStaffs: any[],
  pageSize: number
) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const dispatch = useDispatch();

  // Calculate the total number of pages based on the data length and pageSize
  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
  }, [data, pageSize]);

  // Slice the data array based on the currentPage and pageSize
  useEffect(() => {
    const endIndex = currentPage * pageSize;
    const startIndex = endIndex - pageSize;
    dispatch(setCurrentStaffs(data.slice(startIndex, endIndex)));
  }, [data, currentPage, pageSize]);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Define a function to handle the page change
  const paginate = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // paginate to the first page
  const paginateToFirst = () => {
    for (let i = 1; i <= Math.ceil(data.length / pageSize); i++) {
      setCurrentPage(1);
    }
  };

  // paginate to the last page
  const paginateToLast = () => {
    for (let i = 1; i <= Math.ceil(data.length / pageSize); i++) {
      setCurrentPage(i);
    }
  };

  // if there is a single staff in the table and on the current page being viewed, and then that staff is deleted, also delete that page
  const removePage = () => {
    if (currentPage === pageNumbers.length && currentStaffs.length <= 1) {
      pageNumbers.pop();
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    paginate,
    pageNumbers,
    paginateToFirst,
    paginateToLast,
    removePage,
  };
};

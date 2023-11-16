import { useState } from "react";

// Define a custom hook that takes an array and a page size as parameters
export const usePagination = (array: [], pageSize: number) => {
  // Initialize the current page state
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(array.length / pageSize);

  // Define a function to change the current page
  const changePage = (page: number) => {
    // Check if the page is valid
    if (page >= 1 && page <= totalPages) {
      // Update the current page state
      setCurrentPage(page);
    }
  };

  // Define a function to get the current page data
  const getPageData = () => {
    // Calculate the start and end index of the slice
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    // Return the slice of the array
    return array.slice(startIndex, endIndex);
  };

  // Return the current page, total pages, page data and change page function
  return { currentPage, totalPages, getPageData, changePage };
};

// // Example usage
// const App = () => {
//   // Define an array of 60 objects
//   const people = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 21 },
//     // ... 58 more objects
//   ];

//   // Use the custom hook with the array and a page size of 10
//   const { currentPage, totalPages, getPageData, changePage } = usePagination(people,10);

//   // Render the current page data and the pagination buttons
//   return (
//     <div>
//       <h1>People</h1>
//       <ul>
//         {getPageData().map((person, index) => (
//           <li key={index}>
//             {person.name}, {person.age}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <button onClick={() => changePage(currentPage - 1)}>Previous</button>
//         <span>
//           {currentPage} / {totalPages}
//         </span>
//         <button onClick={() => changePage(currentPage + 1)}>Next</button>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { CSVLink } from "react-csv";

// const ExportButton = ({ tasks }) => {
//   const downloadTasks = () => {
//     const csvContent = "data:text/csv;charset=utf-8," + convertToCSV(tasks);
//     const encodedUri = encodeURI(csvContent);
//     const link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "tasks.csv");
//     document.body.appendChild(link);
//     link.click();
//   };

//   const convertToCSV = (tasks) => {
//     const headers = ["Title", "Description"];
//     const rows = tasks.map((task) => [task.title, task.description]);
//     const csvArray = [headers, ...rows];
//     return csvArray.map((row) => row.join(",")).join("\n");
//   };

//   return (
//     <div className="export-conteiner">
//       <button className="btn btn-export" onClick={downloadTasks}>
//         Export Tasks
//       </button>
//     </div>
//   );
// };

// export default ExportButton;

import React from "react";
import { CSVLink } from "react-csv";
import Papa from "papaparse";

const ExportButton = ({ tasks }) => {
  const convertToCSV = (tasks) => {
    const csvData = tasks.map((task, index) => {
      return {
        Task: `Task ${index + 1}`,
        Title: task.title,
        Description: task.description,
      };
    });

    const csvString = Papa.unparse(csvData);
    return csvString;
  };

  return (
    <div className="export-container">
      <CSVLink
        data={convertToCSV(tasks)}
        filename={"tasks.csv"}
        className="btn btn-export"
      >
        Export Tasks
      </CSVLink>
    </div>
  );
};

export default ExportButton;

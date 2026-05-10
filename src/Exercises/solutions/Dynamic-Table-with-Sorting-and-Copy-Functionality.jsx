const solutionCode1 = `
//App.js

import fakeData from "./MOCK_DATA.json";
import * as React from "react";
import { useTable, useSortBy } from "react-table";
import './styles.css'


function App() {
  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <CopyButton text={\`\${row.original.first_name} \${row.original.last_name}\`} />
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="App">
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function CopyButton({ text }) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    alert(\`Copied \${text} to clipboard\`);
  };

  return (
    <button onClick={copyToClipboard} style={{ marginLeft: "5px" }}>
      Copy
    </button>
  );
}

export default App;

`;



// eslint-disable-next-line import/no-anonymous-default-export
export default solutionCode1;
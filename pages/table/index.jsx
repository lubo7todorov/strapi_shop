import { useMemo } from "react";
import { useTable, useSortBy } from "react-table";

import DATA from "@/db/data.json";
import { COLUMNS, GROUPED_COLUMNS } from "./columns";

function TablePage() {
  const data = useMemo(() => DATA, []);

  const columns = useMemo(() => GROUPED_COLUMNS, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  return (
    <div className="flex justify-center pt-16">
      <table
        {...getTableProps()}
        style={{ border: "solid 1px blue" }}
        className="mb-24"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                >
                  {column.render("Header")}
                  <span className='ml-2'>
                    {column.isSorted ? (column.isSortedDesc ? "🔽" : "🔼") : ''}
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
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} key={cell.column.id}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {footerGroups.map((footerGroup) => (
            <tr {...footerGroup.getFooterGroupProps()} key={footerGroup.id}>
              {footerGroup.headers.map((column) => (
                <td {...column.getFooterProps()} key={column.id}>
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default TablePage;

import React, { FC } from "react";
import { RouteComponentProps, useHistory, withRouter } from "react-router-dom";
import { useTable, useSortBy } from "react-table";
import CssBaseline from "@material-ui/core/CssBaseline";
import MaUTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import "./table.css";

// type SomeComponentProps = RouteComponentProps;
// const SomeComponent: React.FC<SomeComponentProps> = ({ history }) => {
//   const goHome = () => history.push("/home");
//   return <button onClick={goHome}>Go Home</button>;
// };
// export default withRouter(SomeComponent);

type TTable = TableProps & RouteComponentProps;

type TableProps = {
  columns: any;
  data: any;
};

const Table: FC<TTable> = ({ columns, data, history }) => {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({
    columns,
    data,
    initialState: {
      hiddenColumns: ["title", "type", "created_at"],
    },
  });

  const handleRowClick = (row: any) => {
    history.push(`/position/${row.original.id}`);
  };

  return (
    <>
      <CssBaseline />
      <MaUTable stickyHeader {...getTableProps()}>
        {/* <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell {...column.getHeaderProps()}>
                  {column.render("Header")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead> */}
        <TableBody {...getTableBodyProps()}>
          {rows.map((row: any, i) => {
            prepareRow(row);
            // console.log(row);
            return (
              <TableRow
                {...row.getRowProps()}
                onClick={() => handleRowClick(row)}
              >
                {row.cells.map((cell: any) => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </MaUTable>
    </>
  );
};

export default withRouter(Table);

import { format } from "date-fns";

export const COLUMNS = [
  {
    Header: "ID",
    Footer: "ID",
    accessor: "id", // accessor is the "key" in the data
  },
  {
    Header: "First Name",
    Footer: "First Name",
    accessor: "first_name",
  },
  {
    Header: "Last Name",
    Footer: "Last Name",
    accessor: "last_name",
  },
  {
    Header: "Email",
    Footer: "Email",
    accessor: "email",
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
  },
  {
    Header: "Age",
    Footer: "Age",
    accessor: "age",
  },
  {
    Header: "Date of birth",
    Footer: "Date of birth",
    accessor: "date_of_birth",
    Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
  },
  {
    Header: "Guid",
    Footer: "Guid",
    accessor: "GUID",
  },
];

export const GROUPED_COLUMNS = [
  { Header: "ID", Footer: "ID", accessor: "id" },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Email",
        Footer: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
      {
        Header: "Age",
        Footer: "Age",
        accessor: "age",
      },
      {
        Header: "Date of birth",
        Footer: "Date of birth",
        accessor: "date_of_birth",
        Cell: ({ value }) => format(new Date(value), "dd/MM/yyyy"),
      },
      {
        Header: "Guid",
        Footer: "Guid",
        accessor: "GUID",
      },
    ],
  },
];

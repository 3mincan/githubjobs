import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { State } from "./types";
import Table from "./Table";
import { Skeleton } from "@material-ui/lab";
import { Error } from "./Error";
import Typography from "@material-ui/core/Typography";
import moment from "moment";
import "./joblist.css";

export const JobList = () => {
  const [{ isLoading, ads, error }, setState] = useState<State>({
    ads: [],
    isLoading: true,
    error: false,
  });

  const fetchJobs = useCallback(async () => {
    setState((state) => ({ ...state, isLoading: true }));
    try {
      const { data } = await axios.get(
        "https://jobs.github.com/positions.json"
      );
      setState((state) => ({
        ...state,
        ads: data,
        isLoading: false,
        error: false,
      }));
    } catch (err) {
      setState((state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  //   console.log(ads);

  const columns = useMemo(
    () => [
      {
        Header: "Company Name",
        accessor: "company",
        maxWidth: 400,
        Cell: (row: any) => (
          <>
            <Typography color="primary" className="fontBold midtext">
              {row.row.values.title}
            </Typography>
            <span className="smalltext">{row.value} - </span>
            {row.row.values.type == "Full Time" ? (
              <span className="greenText smalltext">{row.row.values.type}</span>
            ) : (
              <span className="orangeText smalltext">
                {row.row.values.type}
              </span>
            )}
            {/* {console.log(row)} */}
          </>
        ),
      },

      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Type",
        accessor: "type",
      },
      {
        Header: "createdAt",
        accessor: "created_at",
      },
      {
        Header: "Location",
        accessor: "location",
        Cell: (row: any) => (
          <>
            <p className="smalltext">{row.row.values.location}</p>
            <p className="smalltext">
              about {moment(row.row.original.created_at).fromNow()}
            </p>
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      {isLoading ? (
        <>
          <Skeleton animation="wave" height={70} />
          <Skeleton animation="wave" height={70} />
          <Skeleton animation="wave" height={70} />
          <Skeleton animation="wave" height={70} />
          <Skeleton animation="wave" height={70} />
        </>
      ) : error ? (
        <Error />
      ) : (
        <Table data={ads} columns={columns} />
      )}
    </>
  );
};

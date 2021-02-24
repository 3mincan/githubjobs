import React, { useState, FC, useCallback, useEffect } from "react";
import { Ad } from "./types";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Skeleton } from "@material-ui/lab";
import { Error } from "./Error";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import nologo from "./No-logo.svg";
import "./jobdetail.css";

type Position = {
  isLoading: boolean;
  error?: boolean;
  adData?: Ad;
};

type UrlParamsType = {
  id: string;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      justifyContent: "flex-start",
    },
    large: {
      width: 150,
      height: 150,
    },
    company: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    mt: {
      marginTop: theme.spacing(2),
    },
  })
);

export const JobDetail: FC<Position> = () => {
  const [{ adData, isLoading, error }, setState] = useState<Position>({
    adData: {
      id: "",
      type: "",
      url: "",
      created_at: "",
      company: "",
      company_url: "",
      location: "",
      title: "",
      description: "",
      how_to_apply: "",
      company_logo: "",
    },
    isLoading: true,
    error: false,
  });
  const urlParams = useParams<UrlParamsType>();
  const classes = useStyles();

  const fetchPosition = useCallback(async () => {
    setState((state) => ({ ...state, isLoading: true }));
    try {
      const { data } = await axios.get(
        `https://jobs.github.com/positions/${urlParams.id}.json`
      );
      setState((state) => ({
        ...state,
        adData: data,
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
    fetchPosition();
  }, [fetchPosition]);

  console.log(adData);

  return (
    <>
      {adData != undefined ? (
        isLoading ? (
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
          <div className={classes.root}>
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.mt}>
                <Paper className={classes.paper}>
                  <Button variant="outlined">
                    <Link to="/">
                      <FontAwesomeIcon icon={faArrowLeft} /> See All Jobs
                    </Link>
                  </Button>
                </Paper>
              </Grid>
              <Grid item lg={8}>
                <Paper className={classes.paper}>
                  <p className="smalltext">
                    {adData.type} / {adData.location}
                  </p>
                  <p>{adData.title}</p>
                  <p
                    className="smalltext description-text"
                    dangerouslySetInnerHTML={{
                      __html: `${adData.description}`,
                    }}
                  ></p>
                </Paper>
              </Grid>
              <Grid item lg={4}>
                <Paper className={classes.company}>
                  {adData.company_logo ? (
                    <Avatar
                      src={adData.company_logo}
                      className={classes.large}
                    />
                  ) : (
                    <></>
                  )}
                  <p
                    className="midtext companyInfoText"
                    style={{ marginTop: 8 }}
                  >
                    {adData.company}
                  </p>
                  <p className="smalltext companyInfoText">
                    <a href={adData.company_url}>{adData.company_url}</a>
                  </p>
                  <p className="midtext smallheader">How To Apply</p>
                  <p
                    className="smalltext"
                    dangerouslySetInnerHTML={{
                      __html: `${adData.how_to_apply}`,
                    }}
                  ></p>
                </Paper>
              </Grid>
            </Grid>
          </div>
        )
      ) : (
        <Error />
      )}
    </>
  );
};

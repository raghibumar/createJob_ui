import React from "react";
import { useCreateJobStyles } from "../css/createJobStyles";

const CreateJob = () => {
  const { classes } = useCreateJobStyles();
  return (
    <div className={classes.container}>
      <div className={classes.jobContainer}>
        <div className={classes.header}>
          <p>Create a job</p>
        </div>
        <div>
          <p className={classes.para}>Select Zendex Documents</p>
          <select className={classes.selectTag}>
            <option value=""></option>
          </select>
        </div>
        <div className={classes.mainContent}>
          <div className={classes.companyContainer}>
            <h2 className={classes.heading}>Company</h2>
            <div className={classes.companyContent}>
              <div className={classes.companyFirstDiv}>
                <div className={classes.companyNameDiv}>
                  <p className={classes.companyName}>Company name</p>
                  <p className={classes.companyLaw}>Company Law</p>
                </div>
                <div className={classes.companyStyleDiv}>
                  <p className={classes.companyName}>Company type</p>
                  <p className={classes.companyLaw}>Law Firm</p>
                </div>
              </div>
              <div className={classes.companySecondDiv}>
                <div className={classes.companyNameDiv}>
                  <p className={classes.companyName}>Address</p>
                  <p className={classes.companyLaw}>
                    13th, 4th street, new york
                  </p>
                </div>
              </div>
              <div className={classes.companyThirdDiv}>
                <div className={classes.companyNameDiv}>
                  <p className={classes.companyName}>Phone</p>
                  <p className={classes.companyLaw}>1234567890</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.userContainer}>
            <h2 className={classes.heading}>User</h2>
            <div className={classes.companyContent}>
              <div className={classes.companyFirstDiv}>
                <div className={classes.companyNameDiv}>
                  <p className={classes.companyName}>First name</p>
                  <p className={classes.companyLaw}>Carry</p>
                </div>
                <div className={classes.companyStyleDiv}>
                  <p className={classes.companyName}>Last name</p>
                  <p className={classes.companyLaw}>Adam</p>
                </div>
              </div>
              <div className={classes.companySecondDiv}>
                <div className={classes.companyNameDiv}>
                  <p className={classes.companyName}>Address</p>
                  <p className={classes.companyLaw}>
                    13th, 4th street, new york
                  </p>
                </div>
              </div>
              <div className={classes.companyThirdDiv}>
                <div className={classes.companyNameDiv}>
                  <p className={classes.companyName}>Phone</p>
                  <p className={classes.companyLaw}>1234567890</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.serverContainer}>
            <h2 className={classes.heading}>Server</h2>
            <div></div>
          </div>
          <div className={classes.documentsContainer}>
            <h2 className={classes.heading}>Documents</h2>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;

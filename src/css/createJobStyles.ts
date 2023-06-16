import { createStyles } from "@mantine/core";
export const useCreateJobStyles = createStyles(() => ({
  container: {
    border: "1px solid transparent",
    width: "100%",
    minHeight: "100vh",
    margin: "13px 0 0 10px",
    borderRadius: "8px",
    backgroundColor: "white",
    overflow: "auto",
    padding: "30px 30px",
  },
  jobContainer: {
    border: "1px solid transparent",
    width: "100%",
    height: "100%",
  },
  header: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  para: {
    fontSize: "14px",
  },
  selectTag: {
    width: "400px",
    border: "1px solid grey",
    borderRadius: "5px",
    padding: "10px 0",
  },
  mainContent: {
    border: "1px solid transparent",
    display: "grid",
    gridTemplateColumns: "472px 472px",
    gap: "30px",
    marginTop: "20px",
  },
  companyContainer: {
    border: "1px solid transparent",
    minHeight: "200px",
  },
  userContainer: {
    border: "1px solid transparent",
    minHeight: "200px",
  },
  serverContainer: {
    border: "1px solid transparent",
    minHeight: "200px",
  },
  documentsContainer: {
    border: "1px solid transparent",
    minHeight: "200px",
  },
  heading: {
    paddingLeft: "3px",
    height: "20%",
  },
  companyContent: {
    border: "1px solid #ebebeb",
    width: "100%",
    minHeight: "80%",
    padding: "15px",
    borderRadius: "5px",
  },
  serverContent: {
    border: "1px solid #ebebeb",
    width: "100%",
    minHeight: "80%",
    padding: "15px",
    borderRadius: "5px",
  },
  documentsContent: {
    border: "1px solid #ebebeb",
    width: "100%",
    minHeight: "80%",

    padding: "15px",
    borderRadius: "5px",
  },
  companyFirstDiv: {
    border: "1px solid transparent",
    display: "flex",
    gap: "20px",
  },
  companySecondDiv: {
    border: "1px solid transparent",
    marginTop: "15px",
  },
  companyThirdDiv: {
    border: "1px solid transparent",
    marginTop: "15px",
  },
  companyNameDiv: {
    border: "1px solid transparent",
  },
  companyStyleDiv: {
    border: "1px solid transparent",
  },
  companyName: {
    fontSize: "13px",
  },
  companyLaw: {
    fontWeight: 500,
  },
}));

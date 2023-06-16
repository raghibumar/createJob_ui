import { createStyles } from "@mantine/core";
export const useHeaderStyles = createStyles(() => ({
  header: {
    height: "80px",
    border: "1px solid transparent",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    position: "sticky",
    top: "0px",
    left: "0px",
    right: "0px",
  },
  logo: {
    border: "1px solid transparent",
    margin: "18px 0px 41px 30px",
    height: "40px",
    width: "130px",
  },
  profile: {
    border: "1px solid transparent",
    width: "350px",
    height: "35px",
    margin: "18px 30px 41px 30px",
    display: "flex",
  },
  search: {
    border: "1px solid transparent",
    width: "45%",
    height: "100%",
    position: "relative",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    padding: "5px",
    margin: "auto",
    backgroundColor: "#faf6e7",
    paddingLeft: "30px",
    border: "0.2px solid",
    borderRadius: "5px",
  },

  searchIconImg: {
    position: "absolute",
    left: "3px",
    top: "8px",
  },
  icon: {
    border: "1px solid transparent",
    width: "10%",
    height: "100%",
    position: "relative",
  },
  bellIcon: {
    position: "absolute",
    left: "9px",
    top: "8px",
  },
  userProfile: {
    border: "1px solid transparent",
    width: "45%",
    height: "100%",
    display: "flex",
    gap: "13px",
  },
  image: {
    border: "1px solid transparent",
    width: "20%",
    height: "100%",
    overflow: "auto",
  },
  name: {
    height: "50%",
    fontSize: "14px",
    fontWeight: 500,
  },
  server: {
    height: "50%",
    fontSize: "12px",
    paddingLeft: "5px",
  },
  select: {
    border: "none",
  },
}));

import { useHeaderStyles } from "../css/headerStyles";
const Header = () => {
  const { classes } = useHeaderStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img
          width={"100%"}
          height={"100%"}
          src="https://www.linkpicture.com/q/Pro-Legal-Serve-Logo-1.png"
          alt=""
        />
      </div>
      <div className={classes.profile}>
        <div className={classes.search}>
          <input
            type="text"
            placeholder="Search"
            className={classes.searchInput}
          />
          <img
            width={"17px"}
            height={"17px"}
            src="https://www.linkpicture.com/q/Vector_10.png"
            className={classes.searchIconImg}
          />
        </div>
        <div className={classes.icon}>
          <img
            width={"100%"}
            height={"100%"}
            src="https://www.linkpicture.com/q/Ellipse-2_3.png"
          />
          <img
            width={"14px"}
            height={"14px"}
            src="https://www.linkpicture.com/q/Vector-1_8.png"
            className={classes.bellIcon}
          />
        </div>
        <div className={classes.userProfile}>
          <div className={classes.image}>
            <img
              width={"100%"}
              height={"100%"}
              src="https://www.linkpicture.com/q/Ellipse-1_7.png"
            />
          </div>
          <div>
            <div className={classes.name}>
              <select className={classes.select}>
                <option value="">John Deo</option>
              </select>
            </div>
            <div className={classes.server}>Server</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

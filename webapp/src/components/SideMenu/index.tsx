import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState
} from "react";
import cx from "classnames";
import mainCtx from "../../contexts/mainCtx";
import InsightLogo from "../../assets/logo-insight.png";
import BusesService from "../../services/buses";
import "./styles.scss";

const SideMenu: FunctionComponent = props => {
  const { menuOpen, setMenuOpen } = useContext(mainCtx);
  const [apiVersion, setApiVersion] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    async function fetchApiVersion() {
      const response = await BusesService.getApiVersion();
      setApiVersion(response.data["sptransVersion"]);
    }

    fetchApiVersion();
  }, []);

  return (
    <div
      className={cx("side-menu-container", {
        open: menuOpen
      })}
    >
      <div onClick={toggleMenu} className="menu-icon">
        <span className="menu-icon-line" />
        <span className="menu-icon-line" />
        <span className="menu-icon-line" />
      </div>
      <div className="side-menu-body"></div>
      <div className="side-menu-footer">
        <p
          className={cx("api-version", {
            open: menuOpen
          })}
        >
          SPTrans - API Olho Vivo - Versão: {apiVersion}
        </p>

        <img src={InsightLogo} alt="Logotipo do Insight Data Science Lab" />
      </div>
    </div>
  );
};

export default SideMenu;

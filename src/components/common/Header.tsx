import clsx from "clsx";
import { colors } from "../../utils/colors";

const Header = () => {
  return (
    <div
      className={clsx("w-full h-[70px] flex items-center")}
      style={{ backgroundColor: colors.blue_01 }}
    >
      <img src="/stackline_logo_white.png" alt="stackline_logo" className="ml-4" />
    </div>
  );
};

export default Header;

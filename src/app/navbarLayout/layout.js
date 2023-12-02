import { getMateriales } from "../lib/api";
import Navbar from "../navbar/layout";

const NavbarLayout = async () => {
  const materiales = await getMateriales();

  return <Navbar materiales={materiales} />;
};

export default NavbarLayout;

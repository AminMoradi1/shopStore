import { Link } from "react-router-dom";
import { PiShoppingCartBold } from "react-icons/pi";
import { useCart } from "../context/CartContext";
import styles from "./Layout.module.css";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={styles.header}>
        <Link to={"/products"}>AminShop</Link>
        <Link to={"/checkout"}>
          <div>
            <PiShoppingCartBold />
            {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
          </div>
        </Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Amin with Love!</p>
      </footer>
    </>
  );
}

export default Layout;

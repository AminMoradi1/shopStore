import { HiEmojiSad } from "react-icons/hi";
import styles from "./404.module.css"

function PageNotFound() {
  return (
    <div className={styles.container}>
      <span><HiEmojiSad /></span>
      <p>Sorry! Page Not Found</p>
    </div>
  )
}

export default PageNotFound
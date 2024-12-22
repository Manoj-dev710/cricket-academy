import Link from "next/link";
import styles from "./Breadcrumbs.module.css"; // Optional: For styling

const Breadcrumbs = ({ paths }) => {
  return (
    <nav className={styles.breadcrumbs} aria-label="breadcrumb">
      <ol className={styles.breadcrumbList}>
        {paths.map((path, index) => (
          <li
            key={index}
            className={`${styles.breadcrumbItem} ${
              !path.href ? styles.active : ""
            }`}
          >
            {path.href ? (
              <Link href={path.href} className={styles.breadcrumbLink}>
                {path.label}
              </Link>
            ) : (
              <span className={styles.active}>{path.label}</span>
            )}
            {index < paths.length - 1 && (
              <span className={styles.breadcrumbSeparator}>/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

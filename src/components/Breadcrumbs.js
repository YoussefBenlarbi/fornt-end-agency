import React from 'react';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ title, links }) => {
  return (
    <div className={styles.breadcrumbs}>
      <div className={styles.content}>
        <h1 className={styles.breadcrumbsTitle}>{title}</h1>
        <div className={styles.breadcrumbsLinks}>
          {links.map((link, index) => (
            <React.Fragment key={index}>
              {index > 0 && " > "}
              {link.href ? (
                <a href={link.href}>{link.text}</a>
              ) : (
                <span>{link.text}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
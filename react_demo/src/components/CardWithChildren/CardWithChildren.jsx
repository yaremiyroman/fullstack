import { useEffect } from "react";

import styles from './CardWithChildren.module.css';

const CardWithChildren = ({ children, someProp }) => {
  useEffect(() => {
    // CLEANUP
    return () => {
      console.log('HOOK CLEANUP>>>>>');
    };
  }, []); // Пустий масив залежностей - ефект виконається один раз

  console.log('styles > ', styles);

  return (
    <div className={styles['card-with-children']}>
      {someProp}
      {children}
    </div>
  );
};

export default CardWithChildren;

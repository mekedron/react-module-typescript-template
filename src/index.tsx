import { ReactNode } from 'react';

import classes from './styles.module.css';

interface TestProps {
  children: ReactNode;
}

export default function Template(props: TestProps) {
  const { children } = props;

  return (
    <>
      This is a template for building your own typescript react modules!
      <div className={classes.test}>
        {children}
      </div>
    </>
  );
}


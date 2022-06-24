import type { FC, ReactNode } from 'react';

import useStyles from './MainLayout.styles';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <header>Header</header>
      <main>
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default MainLayout;

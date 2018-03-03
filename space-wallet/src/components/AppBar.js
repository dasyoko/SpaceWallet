import React from 'react';
import AppBar from 'material-ui/AppBar';

const styles = {
    title: {
      cursor: 'pointer',
    },
  };
const SpaceAppBar = () => (
    <AppBar href="/" showMenuIconButton={false} title={<span style={styles.title}>SpaceWallet</span>}/>
);

export default SpaceAppBar;
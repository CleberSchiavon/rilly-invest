import * as React from 'react';
import { Drawer } from 'react-native-paper';

const DrawerComponent = () => {
  const [active, setActive] = React.useState('');


  return (
    <Drawer.Section title="RillyInvest">
      <Drawer.Item
        label="Home"
        active={active === 'first'}
        onPress={() => setActive('first')}
      />
      <Drawer.Item
        label="Sobre NÓS"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
  );
};

export default DrawerComponent;
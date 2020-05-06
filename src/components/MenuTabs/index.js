import React, { useState } from 'react';

import {
  Container,
  TabsContainer,
  TabItem,
  TabText,
  TabBorder,
} from './styles';

const MenuTabs = () => {
  const [tabs] = useState([
    { id: 1, label: 'Seguindo', page: 'follow' },
    { id: 2, label: 'Clubes', page: 'clubs' },
    { id: 3, label: 'Marcas', page: 'brands' },
  ]);

  const [selected, setSelected] = useState(tabs[0]);

  function handleMenuSelected(item) {
    setSelected(item);
  }

  return (
    <Container>
      <TabsContainer>
        {tabs.map(item => (
          <TabItem
            key={String(item.id)}
            onPress={() => handleMenuSelected(item)}
          >
            {item.label === selected.label ? (
              <>
                <TabText focused>{item.label}</TabText>
                <TabBorder />
              </>
            ) : (
              <TabText>{item.label}</TabText>
            )}
          </TabItem>
        ))}
      </TabsContainer>
    </Container>
  );
};

export default MenuTabs;

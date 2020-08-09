import './index.min.css';

import { IonMenu } from '@ionic/react';
import logo from 'assets/brand/logo.svg';
import { Toggle } from 'components/atoms/Button';
import { Icon } from 'components/atoms/Icon';
import { Label } from 'components/atoms/Item';
import { Content } from 'components/atoms/Layout/Content';
import { Header } from 'components/atoms/Layout/Header';
import { Toolbar } from 'components/atoms/Layout/Toolbar';
import { Item, List } from 'components/atoms/List';
import { Img } from 'components/atoms/Media';
import { Text } from 'components/atoms/Text';
import React, { useEffect, useState } from 'react';
import ThemeService from 'services/theme';
import { appPages } from 'settings/appPages';

const SideIonMenu = () => {
  const [isDarkMode, setIsDarkMode] = useState(ThemeService.getCurrentSetting());

  const toggleDarkMode = () => {
    console.log('toggling');
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    ThemeService.toggleDarkMode(isDarkMode);
  }, [isDarkMode]);

  return (
    <IonMenu type="overlay" side="start" contentId="main" menuId="main" swipeGesture={false}>
      <Header>
        <Toolbar className="no-border" color="light">
          <Img src={logo} alt="Brightizen" />
        </Toolbar>
      </Header>
      <Content>
        <List>
          {appPages.map((page) => (
            <Item key={page.title} lines="full" routerLink={page.url}>
              <Icon icon={page.icon} slot="start" size="large" />
              <Label color="primary">
                <Text>
                  <h5>{page.title}</h5>
                </Text>
              </Label>
            </Item>
          ))}

          <Item lines="full">
            <Toggle checked={isDarkMode} onChange={toggleDarkMode} slot="start" />
            <Label>Dark mode</Label>
          </Item>
        </List>
      </Content>
    </IonMenu>
  );
};

export default SideIonMenu;

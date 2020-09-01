import './styles/main.min.css';
import './utils/debugger';

import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Content } from 'components/atoms/Layout/Content';
import I18nProvider from 'components/organisms/I18n';
import { LeftSidebar } from 'components/organisms/Sidebar/LeftSidebar';
import { RightSidebar } from 'components/organisms/Sidebar/RightSidebar';
import Provider from 'context/Provider';
import { ApolloProvider } from 'graphql/ApolloProvider';
import React from 'react';
import { Route } from 'react-router-dom';
import { appPages } from 'settings/appPages';

const App = () => {
  return (
    <ApolloProvider>
      <I18nProvider>
        <Provider>
          <IonApp>
            <Content>
              <IonReactRouter>
                <IonSplitPane contentId="main">
                  <LeftSidebar />
                  <IonRouterOutlet id="main">
                    {Object.keys(appPages).map((id) => (
                      <Route
                        key={id}
                        path={appPages[id].url}
                        component={appPages[id].component}
                        exact
                      />
                    ))}
                  </IonRouterOutlet>
                  <RightSidebar />
                </IonSplitPane>
              </IonReactRouter>
            </Content>
          </IonApp>
        </Provider>
      </I18nProvider>
    </ApolloProvider>
  );
};

export default App;

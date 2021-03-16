import * as React from 'react';
import styles from './RouterPages.module.scss';
import { IRouterPagesProps } from './IRouterPagesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Nav, INavState, INavStyles, INavLinkGroup} from 'office-ui-fabric-react'
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { HashRouter, Route } from "react-router-dom";
import CustomerPages from './pages/Customers'
import HomePage from './pages/HomePage'

const navStyles: Partial<INavStyles> = { root: { width: 300 } };
const stackTokens: IStackTokens = { childrenGap: 40 };
const navLinkGroups: INavLinkGroup[] = [
  {
    name: "Menu de componentes",
    links: [
      {
        name: 'Home',
        key: 'home',
        url: '#/'
      },
      {
        name: 'Clientes',
        key: 'clientes',
        url: '#/customers'
      }
    ]
  }
]

export default class RouterPages extends React.Component<IRouterPagesProps, {}> {
  public render(): React.ReactElement<IRouterPagesProps> {
    return (
      <div className={ styles.routerPages }>
        <Stack horizontal tokens={stackTokens}>
          <Nav styles={navStyles} ariaLabel="Menu de componentes" groups={navLinkGroups} />
            <HashRouter>
              <Route path="/" exact component={HomePage}></Route>
              <Route path="/customers" exact component={CustomerPages}></Route>
            </HashRouter>
        </Stack>
      </div>
      
    );
  }
}

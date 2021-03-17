import * as React from 'react';
import styles from './RouterPages.module.scss';
import { IRouterPagesProps } from './IRouterPagesProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { Nav, INavState, INavStyles, INavLinkGroup, DefaultPalette} from 'office-ui-fabric-react'
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { HashRouter, Route } from "react-router-dom";
import {
  CustomerPages,
  HomePage,
  ListasPage
} from './pages'

const navStyles: Partial<INavStyles> = { root: { width: 150, color: DefaultPalette.green} };
const stackTokens: IStackTokens = { childrenGap: 10 };
const navLinkGroups: INavLinkGroup[] = [
  {
    name: "Menu",
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
      },
      {
        name: 'Listas',
        key: 'listas',
        url: '#/listas'
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
              <Route path="/" exact component={ HomePage }></Route>
              <Route path="/customers" exact component={CustomerPages}></Route>
              <Route path="/listas" exact component={ListasPage}></Route>
            </HashRouter>
        </Stack>
      </div>
      
    );
  }
}

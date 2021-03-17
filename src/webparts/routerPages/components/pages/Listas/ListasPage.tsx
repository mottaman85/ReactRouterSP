import * as React from 'react';
import {IListProps} from './IListProps'
import {Layout} from '../../Templates/Layout'

export class ListasPage extends React.Component<IListProps, {}> {
    render(): React.ReactElement{
        return <Layout
        title="LISTAS"
    >
        <p>este es el contenido de listas</p>
    </Layout>
    }
}

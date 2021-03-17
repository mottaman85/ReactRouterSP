import * as React from 'react';
import {IPagesProps} from '../IPagesProps'
import {Layout} from '../../Templates/Layout'


export class HomePage extends React.Component<IPagesProps, {}> {
    render(): React.ReactElement{
        return <Layout title="HOME">                    
                        <p>este es el contenido de home</p>                        
                </Layout>
    }
}

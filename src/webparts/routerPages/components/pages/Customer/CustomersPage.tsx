import * as React from 'react';
import {IPagesProps} from '../IPagesProps'
import {Layout} from '../../Templates/Layout'

export class CustomerPages extends React.Component<IPagesProps, {}> {

    componentDidMount(){
        console.log('Mounted...')
    }

    render(): React.ReactElement{
        return <Layout
                title="CUSTOMERS"
            >
                <p>este es el contenido de customers</p>
            </Layout>
    }
}

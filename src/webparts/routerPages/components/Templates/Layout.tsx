import * as React from 'react';
import {TemplateProps} from './TemplateProps'
import { DefaultPalette, Slider, Stack, IStackStyles, IStackTokens, IStackItemStyles } from 'office-ui-fabric-react';

const istackToken: IStackTokens = {
    childrenGap: 3
}

const iStackStyleHeader: IStackStyles = {
    root:{
        color: DefaultPalette.greenLight,
        background: DefaultPalette.themePrimary,
    }
}

// Styles definition
const stackStyles: IStackStyles = {
    root: {
      background: DefaultPalette.themeTertiary,
    },
  };
  const stackItemStyles: IStackItemStyles = {
    root: {
      alignItems: 'center',
      background: DefaultPalette.themePrimary,
      color: DefaultPalette.white,
      display: 'flex',
      height: 50,
      justifyContent: 'center',
    },
  };
  
  // Tokens definition
  const stackTokens: IStackTokens = {
    childrenGap: 5,

  };
  


export class Layout extends React.Component<TemplateProps, {}> {

    render(): React.ReactElement{
        return <Stack tokens={istackToken}>
                    <Stack.Item styles={iStackStyleHeader}>
                        <h1>{this.props.title} </h1>
                    </Stack.Item>
                    <Stack.Item>
                        <h4>Esta es una página</h4>
                    </Stack.Item>                    
                    <Stack.Item>
                        {this.props.children}
                    </Stack.Item>     
                    <Stack horizontal styles={stackStyles} tokens={stackTokens}>
                        <Stack.Item grow={3} styles={stackItemStyles}>
                            Grow is 3
                        </Stack.Item>
                        <Stack.Item grow={2} styles={stackItemStyles}>
                            Grow is 2
                        </Stack.Item>
                        <Stack.Item grow styles={stackItemStyles}>
                            Grow is 1
                        </Stack.Item>
                    </Stack>
                </Stack>
    }
}

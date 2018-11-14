import React, { Component } from 'react'
import GrantHistoryTx from './GrantHistoryTx'

import { Pane } from 'evergreen-ui'

class GrantHistory extends Component {
    render() {
        return(
            <Pane padding={8} flex="1">
                <GrantHistoryTx
                    state={this.props.state}
                    updateLoadingMessage={this.props.updateLoadingMessage}
                    updateState={this.props.updateState}
                    updateStaticState={this.props.updateStaticState}
                />
            </Pane>            
        )
    }
}

export default GrantHistory
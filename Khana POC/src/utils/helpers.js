import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Icon, toaster } from 'evergreen-ui';

export let endPoints = {
    blockExplorer: "https://rinkeby.etherscan.io/",
    ipfsEndpoint: "https://gateway.ipfs.io/ipfs/"
}


//
// Clipboard operations
//

export function shortenAddress(address) {
    if (address == null) { return null }
    let shortAddress = address.substr(0, 6) + '...' + address.substr(address.length - 4)

    return (
    <CopyToClipboard 
        text={address}
        onCopy={() => {
            notificationNotify('Copied to clipboard!')
        }}>

        <span>
            <a href={endPoints.blockExplorer + "address/" + address} target="_blank">{shortAddress}</a>  <Icon icon="clipboard" />
        </span>
            
    </CopyToClipboard >
    )
}

export function copy(object, textToCopy) {
    if (textToCopy == null || object == null) { return null }
    return (
        <CopyToClipboard
            text={textToCopy}
            onCopy={() => {
                notificationNotify('Copied to clipboard!')
            }}>
            {object}
        </CopyToClipboard >
    )
}

//
// Notifications
//

export function notificationNotify(message, description) {
    if (description != null) {
        toaster.notify(message, {description: description, duration: 5})
    } else {
        toaster.notify(message)
    }
}

export function notificationSuccess(message, description) {
    if (description != null) {
        toaster.success(message, { description: description, duration: 5 })
    } else {
        toaster.success(message)
    }
}

export function notificationWarning(message, description) {
    if (description != null) {
        toaster.warning(message, { description: description, duration: 10 })
    } else {
        toaster.warning(message)
    }
}

export function notificationDanger(message, description) {
    if (description != null) {
        toaster.danger(message, { description: description, duration: 10 })
    } else {
        toaster.danger(message)
    }
}
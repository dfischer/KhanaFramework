import Web3 from 'web3'

let getWeb3 = new Promise(function(resolve, reject) {
  // Wait for loading completion to avoid race conditions with web3 injection timing.
  window.addEventListener('load', function() {
    var results
    var web3 = window.web3

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
      // Use Mist/MetaMask's provider.
      web3 = new Web3(web3.currentProvider)

      web3.version.getNetwork((err, netId) => {
        if(Number(netId) !== 4 && Number(netId) < 99) { // Let us work in development chains (usually > 100)
          resolve(Error("Wrong network selected. We are only live on Rinkeby! Please switch 🙏"))
        } else {
          results = {
            web3: web3
          }
          resolve(results)
        }
      })

    } else {
      // No web3 provider available!
      resolve(Error("No Web3 provider detected! 😩 Try loading with a different browser or Metamask"))
    }
  })
})

export default getWeb3

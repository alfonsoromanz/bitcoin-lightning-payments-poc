const {authenticatedLndGrpc, pay} = require('lightning');
require('dotenv').config(); 


const main = async () => {
    try {
        // Read the invoice passed via the command line.
        const invoice = process.argv[2];
        // Authenticate with the LND running on the container.
        const {lnd} = await authenticatedLndGrpc({
            cert: process.env.CERT,
            macaroon: process.env.MACAROON,
            socket: process.env.SOCKET,
          });
          // Pay the invoice.
          const payment = await pay({ lnd, request: invoice})
          console.log("PAYMENT", payment);
    } catch (e) {
        console.log('ERROR', e);
    }


}

main().then();
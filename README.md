# POC for Lightning Network integration

This project is a POC that shows how easy is to integrate your Javascript application to the Lightning Network to pay an invoice.

## How to run the script
Make sure you have `Nodejs` and `Polar` installed in your computer. Nodejs will run the application while Polar will create the docker containers required to simulate a Lightning Network in your local computer: `bitcoind`, `lnd` nodes, `cligthtning` nodes, or `eclair` nodes.


### Setup the project
Clone this project and make sure you are positioned in the project's directory. Then run:

`npm install`

This will install the two libraries we need: `lightning` and `dotenv`.

### Run the Lightning network in your local machine 

Open the Polar application and create a Lightning Network. Choose at least two `LND` nodes. After a few minutes, you should be able to see the network and the (at least) two nodes you have created (Alice, Bob, etc)

#### Fund the channels

Open a channel between two nodes (Alice and Bob) with some sats. Now Alice can send a payment to bob since it has outbound liquidity.


### Use this script to pay

#### Prepare the script
Alice will pay Bob, so our app will be connected to Alice's node to make the payment. In Polar, click on Alice and grab the following credentials from the "Connect" tab: `GRPC Host`, (Base64) `TLS Cert`, (Base64), `Admin Macaroon`. Place those credentials in the `.env` file of the project.

#### Create the invoice
Now go to Polar and do right-click on Bob's node, then click on "Create invoice". Choose the amounts of sats, but make sure Alice has enough balance to pay. Now copy the invoice, it should look like this:

`lnbcrt100n1p3399qupp5f0yqkxmjrks08vwshtkty4k9khrlchzxujrts6dkjh7ryk2h86uqdq62pshjmt9de6zqar0yp3kzun0dssp57zrv229njg4hj46q2fvv4n3uq7tm5rw052ye9wnhruck0ln4xlqqmqz9gxqrrsscqp79q2sqqqqqysgqzxuu74azkn0k57uv645yh24zs6vd0fy30c98sy3pf3z9s9h8hp03ruk69je7szf657jsuv7rudmcjm2daf2d3ftq4ld3hlhh5umknzcp6f2kxl`

#### Pay the invoice

Run the script and make sure you pass the invoice as a parameter. I.e:

````
node index.js lnbcrt100n1p3399qupp5f0yqkxmjrks08vwshtkty4k9khrlchzxujrts6dkjh7ryk2h86uqdq62pshjmt9de6zqar0yp3kzun0dssp57zrv229njg4hj46q2fvv4n3uq7tm5rw052ye9wnhruck0ln4xlqqmqz9gxqrrsscqp79q2sqqqqqysgqzxuu74azkn0k57uv645yh24zs6vd0fy30c98sy3pf3z9s9h8hp03ruk69je7szf657jsuv7rudmcjm2daf2d3ftq4ld3hlhh5umknzcp6f2kxl
````

Now check Polar! Payment from Alice to Bob should be reflected in the new balance.
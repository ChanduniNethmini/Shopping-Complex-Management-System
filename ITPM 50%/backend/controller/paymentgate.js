require('dotenv').config()
const braintree = require("braintree");

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox, // Use Sandbox for testing
    merchantId: process.env.MERCHENT_ID,
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY
});

exports.generateToken = (req, res) => {
    gateway.clientToken.generate({})
        .then((response) => {
            res.status(200).send(response)
        })
        .catch(err => res.status(500).send(err));
}

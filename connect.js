import fetch from "node-fetch";
import https from 'https';

const httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

const serverURL = 'https://api.fs.londschien.com:3000';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

export const nfcRead = id => fetch(serverURL + "/api", {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({
        type: "nfcRead",
        id,
    }),
    agent: httpsAgent,
})
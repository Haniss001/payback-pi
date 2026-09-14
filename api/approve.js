export default async function handler(req, res) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

if (req.method === 'OPTIONS') {
return res.status(200).end();
}

const { paymentId } = req.body;
const API_KEY = "wdstjzheqklgo8vi3b5tohwhgy1fsfkmdqh43hbacfomieqjvpx8aozt2zzma8yr";

try {
const response = await fetch(`https://api.minepi.com/v2/payments/${paymentId}/approve`, {
method: 'POST',
headers: {
'Authorization': `Key ${API_KEY}`,
'Content-Type': 'application/json'
}
});
const data = await response.json();
return res.status(200).json(data);
} catch (error) {
return res.status(500).json({ error: error.message });
}
}

export default async function handler(req, res) {
    // Prevent browser errors by setting correct headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message, telemetry } = req.body;

        // Build a highly advanced engineering prompt matrix
        const systemPrompt = `You are a NIST Additive Manufacturing Digital Twin Assistant for part 'SS-J3'.
        You are a real, friendly AI. You can handle basic conversation, greetings, and small talk naturally.
        
        However, if the user asks about the machine, the print, or engineering data, use this live telemetry:
        - Extruder Temp: ${telemetry.temp}
        - Layer Height: ${telemetry.layer}
        - Feedrate Speed: ${telemetry.speed}
        - Status: ${telemetry.status}
        
        Keep engineering answers concise (1-2 sentences) and professional. Keep small talk casual.`;

        // Talk to OpenAI securely using the environment variable saved on Vercel
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: 'gpt-4o-mini',
                messages: [
                    { role: 'system', content: systemPrompt },
                    { role: 'user', content: message }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
        
        if (!response.ok) {
            return res.status(response.status).json({ error: data.error?.message || 'OpenAI API Error' });
        }

        return res.status(200).json({ reply: data.choices[0].message.content });

    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error: ' + error.message });
    }
}
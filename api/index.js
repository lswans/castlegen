const { app } = require('@azure/functions');
const { OpenAI } = require("openai");

app.http('getAIResponse', {
    methods: ['POST'],
    authLevel: 'anonymous',
    route: 'ai',
    handler: async (request, context) => {
        const openai = new OpenAI({
            apiKey: process.env.REACT_APP_OPENAI_API_KEY
        });

        const body = await request.json();
        inputText = body.inputText;

        const completion = await openai.chat.completions.create(
            model= "gpt-3.5-turbo",
            //response_format={ "type": "json_object" },
            messages= [
              {"role": "system", "content": "You are a Dungeon Master for the game Dungeons and Dragons, and you are generating details describing the parts of a fantasy city."},
              {"role": "user", "content": `Describe the part of the city containing the following: "${inputText}"`}
            ]
          );
          
        const response =  await openai.images.generate({
            model: "dall-e-3",
            prompt: `Generate a beautiful, fantastical image visualizing the dream: "${inputText}"`,
            size: "1024x1024",
            quality: "standard",
            n: 1,
        });
        
       console.log(completion);
        return {
            jsonBody: {analysis: completion.choices[0].message.content}
        }
    },
});
const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({apiKey:process.env.GEMINI_API_KEY})

const reviewCode = async (codeDiff)=>{
  try{
    const promptText = `Please review this Git diff and tell me wether this code follows the conventions of the language used, and
    always mention the number of the line and file you reviewed\n${codeDiff}`
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: promptText,
    })

    return response.text ; 

  }catch(error){
    console.log("Gemini Api Error...")

  }

}


module.exports = {
  reviewCode
} 

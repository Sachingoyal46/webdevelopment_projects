function getBotResponse(input) {
    //symptoms of disesies
    if (input == "symptoms of diabeties") {
        return "Symptoms may include frequent urination, excessive thirst or hunger, and weight changes.";
    } else if (input == "symptoms of blood pressure") {
        return " nervousness, sweating, difficulty sleeping or facial flushing";
    } else if (input == "symptoms of heartattack") {
        return " Pain in the neck, back, shoulders or jaw Shortness of breath Abdominal pain or heartburn";
    }
    else if(input=="symptoms of periods")
    {
        return " abdominal cramps, headache, tender breasts, and changes in bowel movements."
    }
    else if(input=="symptoms of cancer")
    {
        return " unusual diarrhea or constipation. Difficulty in swallowing or continuing indigestion."
    }
    else if(input=="symptoms of dengue")
    {
        return " Belly pain, tendernes"
        
    }
    else if(input=="symptoms of malariya")
    {
        return " discomfort. Headache. Nausea and vomiting. Diarrhea."
    }
    

    // medicines

    if(input=="stomach pain")
    {
        return "Gastroesophageal reflux,Intestinal malabsorption";
    }
    else if(input=="headache")
    {
        return "Fioricet"
        
    }
    

    // Simple responses
    if (input == "hii") {
        return "Hello there!,how can i help you";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }

    
}
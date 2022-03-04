function getBotResponse(input) {
    
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "can you help me?") {
        return "I'll do my best to help you Mam/Sir";
    } else if (input == "my computer keyboard not working") {
        return "This is done by pressing the Fn + F6 key on your keyboard, or by pressing the Right Shift button for at least 9 seconds. After any of this, your keyboard will be re-in-emerged.";
    }

  
    if (input == "oky thats great thanks") {
        return "Your always welcome";
    } else if (input == "goodbye") {
        return "bye";
    } else {
        return "Try asking something else!";
    }
}
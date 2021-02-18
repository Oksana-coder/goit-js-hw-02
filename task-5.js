const checkForSpam = function(message) {
    const normalizedMessage = message.toLowerCase();
    console.log(normalizedMessage);
    const result = (normalizedMessage.includes('spam') || normalizedMessage.includes('sale'));
    
return result;
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter')); 

console.log(checkForSpam('Get best sale offers now!')); 

console.log(checkForSpam('[SPAM] How to earn fast money?')); 
document.getElementById('send-button').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    var chatBox = document.getElementById('chat-box');
    
    // Προσθήκη του μηνύματος του χρήστη
    chatBox.innerHTML += '<div>User: ' + userInput + '</div>';
    
    // Εδώ μπορείς να προσθέσεις τη λογική της απάντησης
    var response = getResponse(userInput);
    chatBox.innerHTML += '<div>Bot: ' + response + '</div>';
    
    // Καθαρισμός του input
    document.getElementById('user-input').value = '';
});

// Λογική απάντησης - Θα χρειαστεί να συνδέσεις με την ΤΝ
function getResponse(input) {
    // Εδώ μπορείς να προσθέσεις την λογική που θα επιστρέφει την απάντηση
    return "Αυτή είναι μια προκαθορισμένη απάντηση."; // Αυτή η γραμμή θα αντικατασταθεί
}

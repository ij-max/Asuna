function revealQuestion() {
    document.getElementById('reveal-button').style.display = 'none';
    document.getElementById('question').style.display = 'block';
}

function showResponse(answer) {
    let responseDiv = document.getElementById('response');
    if (answer === 'yes') {
        responseDiv.innerHTML = '<h2>Yay! I\'m so happy! ❤️</h2>';
    } else {
        responseDiv.innerHTML = '<h2>Oh, I understand. 😢</h2>';
    }
    responseDiv.style.display = 'block';
    document.getElementById('question').style.display = 'none';
}

function checkNumber() {
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const message = document.getElementById('message');

    if (creditCardNumber === 'ZWEIVIERDREIACHT') {
        message.textContent = 'Du bist Opfer meiner Phishing-Attacke geworden! Ich kenne jetzt Karls Kreditkartennummer.';
        saveNumber(creditCardNumber);
    } else {
        message.textContent = 'Falsche Kreditkartennummer. Versuch es nochmal.';
    }
}

function saveNumber(number) {
    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: number }),
    }).then(response => {
        if (!response.ok) {
            console.error('Fehler beim Speichern der Nummer:', response.statusText);
        }
    }).catch(error => {
        console.error('Netzwerkfehler:', error);
    });
}

function checkNumber() {
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const message = document.getElementById('message');
    const phishingImage = document.getElementById('phishingImage');

    if (creditCardNumber === 'ZWEIVIERDREIACHT') {
        message.textContent = 'Du bist Opfer meiner Phishing-Attacke geworden! Ich kenne jetzt Karls Kreditkartennummer.';
        phishingImage.style.display = 'block'; // Bild anzeigen
        saveNumber(creditCardNumber);
    } else {
        message.textContent = 'Falsche Kreditkartennummer. Versuch es nochmal.';
        phishingImage.style.display = 'none'; // Bild verstecken
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

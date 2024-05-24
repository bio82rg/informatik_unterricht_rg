function checkNumber() {
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const message = document.getElementById('message');
    const phishingImage = document.getElementById('phishingImage');
    const imageSource = document.getElementById('imageSource');

    if (creditCardNumber === 'ZWEIVIERDREIACHT') {
        message.innerHTML = '<strong>Du bist Opfer meiner Phishing-Attacke geworden! <br> Ich kenne jetzt Karls Kreditkartennummer.</strong>';
        message.style.fontSize = '1.5em'; // Textgrösse anpassen
        phishingImage.style.display = 'block'; // Bild anzeigen
        imageSource.style.display = 'block'; // Bildquelle anzeigen
        saveNumber(creditCardNumber);
    } else {
        message.textContent = 'Danke für deine Eingabe. Versuche es bitte noch einmal, um fortzufahren.';
        message.style.fontSize = '1em'; // Textgrösse zurücksetzen
        phishingImage.style.display = 'none'; // Bild verstecken
        imageSource.style.display = 'none'; // Bildquelle verstecken
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

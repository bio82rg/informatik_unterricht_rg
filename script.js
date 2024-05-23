function checkNumber() {
    const creditCardNumber = document.getElementById('creditCardNumber').value;
    const message = document.getElementById('message');

    if (creditCardNumber === 'ZWEIVIERDREIACHT') {
        message.textContent = 'Du bist Opfer meiner Phishing-Attacke geworden! Ich kenne jetzt Karls Kreditkartennummer.';
    } else {
        message.textContent = 'Falsche Kreditkartennummer. Versuch es nochmal.';
    }
}

function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = today.toLocaleString('ru-RU');
    
    let locales = {
        'США': 'en-US',
        'Франция': 'fr-FR',
        'Германия': 'de-DE',
        'Япония': 'ja-JP',
        'Китай': 'zh-CN'
    };
    
    let output = '';
    for (const [country, locale] of Object.entries(locales)) {
        output += `<p><strong>Дата и время для локали ${country}:</strong> ${today.toLocaleString(locale)}</p>`;
    }

    document.getElementById('locale-dates').innerHTML = output;
}

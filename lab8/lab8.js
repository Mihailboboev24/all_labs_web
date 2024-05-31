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

    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

    const currentYear = today.getFullYear();
    const currentMonth = months[today.getMonth()];
    const currentDate = today.getDate();
    const currentDay = weekDays[today.getDay()];

    const dateInfo = `
        <p>Текущий год: ${currentYear}</p>
        <p>Текущий месяц: ${currentMonth}</p>
        <p>Текущая дата: ${currentDate}</p>
        <p>День недели: ${currentDay}</p>
    `;
    document.getElementById('date-info').innerHTML = dateInfo;
}

function findDayOfWeek() {
    const day = document.getElementById('input-day').value;
    const month = document.getElementById('input-month').value - 1;
    const year = document.getElementById('input-year').value;
    
    const date = new Date(year, month, day);
    const weekDays = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const dayOfWeek = weekDays[date.getDay()];

    document.getElementById('day-of-week-result').innerText = `День недели: ${dayOfWeek}`;
}

document.addEventListener('DOMContentLoaded', () => {
    showDate();
    document.getElementById('find-day-of-week-button').addEventListener('click', findDayOfWeek);
});

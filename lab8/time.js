function showTime() {
    let today = new Date();
    let currentTime = today.toLocaleDateString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
}
setInterval(showTime, 1000);

function updateTime() {
    const now = new Date();

    const seconds = String(now.getSeconds()).padStart(2, '0');
    const secondAngle = seconds * 6;
    document.getElementById('current-seconds').textContent = `${seconds}`;
    document.getElementById('clock').style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(updateTime, 1000);
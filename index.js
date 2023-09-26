document.addEventListener('DOMContentLoaded', function () {
    // Находим кнопки изменения громкости и индикатор громкости
    const volumeUpButton = document.querySelector('.volume-up');
    const volumeDownButton = document.querySelector('.volume-down');
    const volumeIndicator = document.querySelector('.indicator');

    // Собираем элементы шкалы громкости в псевдомассив
    const volumeRects = Array.from(document.querySelectorAll('.volume-rect'));

    // Начальное значение громкости
    let volumeLevel = 0;

    // Функция обновления индикатора громкости
    function updateVolumeIndicator() {
        volumeIndicator.textContent = volumeLevel;
    }

    // Обработчик события для кнопки увеличения громкости
    volumeUpButton.addEventListener('click', function () {
        if (volumeLevel < volumeRects.length) {
            volumeLevel++;
            // Обновляем состояние шкалы громкости
            volumeRects[volumeLevel - 1].classList.add('volume-rect__active');
            updateVolumeIndicator();
        }
    });

    // Обработчик события для кнопки уменьшения громкости
    volumeDownButton.addEventListener('click', function () {
        if (volumeLevel > 0) {
            // Обновляем состояние шкалы громкости
            volumeRects[volumeLevel - 1].classList.remove('volume-rect__active');
            volumeLevel--;
            updateVolumeIndicator();
        }
    });
});

//Решение эксперта

// // Находим кнопки
// const volumeUpBtn = document.querySelector('.volume-up');
// const volumeDownBtn = document.querySelector('.volume-down');
// // Собираем в псевдомассив все прямоугольники
// const volumeRects = document.querySelectorAll('.volume-rect');
// // Находим индикатор громкости
// const indicator = document.querySelector('.indicator');

// // Задаем начальное значение громкости
// let currentIndex = 0;

// // Навешиваем обработчики
// volumeUpBtn.addEventListener('click', () => {
//     if (currentIndex > volumeRects.length - 1) return;
//     volumeRects[currentIndex].classList.add('volume-rect__active');
//     currentIndex++;
//     indicator.textContent++;
// });

// volumeDownBtn.addEventListener('click', () => {
//     if (!currentIndex) return;
//     currentIndex--;
//     indicator.textContent--;
//     volumeRects[currentIndex].classList.remove('volume-rect__active');
// });

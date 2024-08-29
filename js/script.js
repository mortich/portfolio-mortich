document.addEventListener('DOMContentLoaded', () => {
    // Воспроизведение фоновой музыки
    const music = document.getElementById('background-music');
    music.volume = 0.5; // Установите уровень громкости по необходимости

    // Обработка отправки формы
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                service_id: 'service_8qu8pwr',
                template_id: 'template_s7pdz5a',
                user_id: 'y_rUUBsS3veGzVgOc', // Обновленный public key
                template_params: {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    message: formData.get('message')
                }
            })
        }).then(response => {
            if (response.ok) {
                alert('Ваше сообщение отправлено!');
                form.reset();
            } else {
                alert('Не удалось отправить сообщение. Попробуйте снова.');
            }
        }).catch(error => {
            console.error('Ошибка:', error);
            alert('Не удалось отправить сообщение. Попробуйте снова.');
        });
    });
});

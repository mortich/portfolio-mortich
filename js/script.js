document.addEventListener('DOMContentLoaded', () => {
    const portfolioTable = document.querySelector('.portfolio-table');

    // Примеры данных проекта
    const projects = [
        {
            number: 1,
            title: 'Проект 1',
            image: 'images/photo1.jpg'
        },
        {
            number: 2,
            title: 'Проект 2',
            image: 'images/photo2.jpg'
        },
        {
            number: 3,
            title: 'Проект 3',
            image: 'images/photo3.jpg'
        },
        // Добавьте больше проектов по необходимости
    ];

    projects.forEach(project => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${project.number}</td>
            <td>${project.title}</td>
            <td><img src="${project.image}" alt="${project.title}"></td>
        `;
        portfolioTable.appendChild(row);
    });

    // Обработка отправки формы
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer y_rUUBsS3veGzVgOc'
            },
            body: JSON.stringify({
                service_id: 'service_8qu8pwr',
                template_id: 'template_s7pdz5a',
                user_id: 'public_key',
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

    // Воспроизведение фоновой музыки
    const bgMusic = document.getElementById('bg-music');
    bgMusic.play();
});

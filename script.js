document.addEventListener('DOMContentLoaded', function() {
    const notificationCount = document.getElementById('notificationCount');
    const companyTableBody = document.getElementById('companyTableBody');
    const calendarView = document.getElementById('calendarView');
    const modal = document.getElementById('modal');
    const modalOverlay = document.getElementById('modalOverlay');
    const submitCommunication = document.getElementById('submitCommunication');

    function updateNotifications() {
        const overdueCount = companyTableBody.querySelectorAll('.status-red').length;
        notificationCount.textContent = `${overdueCount} Overdue`;
    }

    function populateCalendar() {
        calendarView.innerHTML = '';
        for (let i = 1; i <= 31; i++) {
            const day = document.createElement('div');
            day.className = 'calendar-day';
            day.textContent = i;
            day.addEventListener('click', function() {
                openModal(i);
            });
            calendarView.appendChild(day);
        }
    }

    function openModal(day) {
        modal.classList.add('active');
        modalOverlay.classList.add('active');
        document.getElementById('modalDay').textContent = `Log Communication for Day ${day}`;
    }

    function closeModal() {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
    }

    modalOverlay.addEventListener('click', closeModal);

    submitCommunication.addEventListener('click', function() {
        const type = document.getElementById('communicationType').value;
        const date = document.getElementById('communicationDate').value;
        const notes = document.getElementById('communicationNotes').value;

        if (type && date) {
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>New Company</td>
                <td>${type} (${date})</td>
                <td>${date}</td>
                <td><span class="status-yellow">Due Today</span></td>
            `;
            companyTableBody.appendChild(newRow);
            updateNotifications();
            closeModal();
        } else {
            alert('Please fill out all required fields.');
        }
    });

    document.getElementById('companyTableBody').addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN' && e.target.classList.contains('status-red')) {
            e.target.classList.remove('status-red');
            e.target.classList.add('status-yellow');
            e.target.textContent = 'Due Today';
            updateNotifications();
        }
    });

    populateCalendar();
    updateNotifications();
});
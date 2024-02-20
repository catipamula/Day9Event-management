// Sample data for events
const events = [
    { title: 'Wedding Event', date: '2024-02-25', time: '10:00 PM', location: 'vijayawada', description: 'Description for Wedding Event' },
    { title: 'Birthday Event', date: '2024-03-05', time: '01:00 AM', location: 'Guntur', description: 'Descrition  for Birthday event ' },
    { title: 'Mature Function', date: '2024-03-15', time: '09:30 PM', location: 'Bapatla', description: 'Description for Mature Function' }
];

// Function to display events
function displayEvents() {
    const eventCards = document.getElementById('event-cards');
    eventCards.innerHTML = '';
    events.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('event-card');
        card.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Description:</strong> ${event.description}</p>
        `;
        eventCards.appendChild(card);
    });
}

// Function to handle form submission
function addEvent(event) {
    event.preventDefault();
    const form = event.target;
    const newEvent = {
        title: form.title.value,
        date: form.date.value,
        time: form.time.value,
        location: form.location.value,
        description: form.description.value
    };
    events.push(newEvent);
    displayEvents();
    form.reset();
}

// Event listeners
document.getElementById('event-form').addEventListener('submit', addEvent);

// Initial display of events
displayEvents();
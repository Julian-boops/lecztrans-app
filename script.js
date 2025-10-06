// Language texts
const translations = {
    pl: {
        title: "🚌 Łęczna - Lublin",
        subtitle: "Rozkład jazdy",
        toLublin: "Do Lublina",
        toLeczna: "Do Łęcznej",
        onTime: "Na czas",
        delayed: "Opóźniony",
        minutes: "min",
        lastUpdate: "Ostatnia aktualizacja:",
        settings: "Ustawienia",
        support: "My Links:"
    },
    en: {
        title: "🚌 Łęczna - Lublin",
        subtitle: "Bus Schedule", 
        toLublin: "To Lublin",
        toLeczna: "To Łęczna",
        onTime: "On time",
        delayed: "Delayed",
        minutes: "min",
        lastUpdate: "Last update:",
        settings: "Settings",
        support: "My Links:"
    }
};

let currentLanguage = 'pl';

// Bus schedule data
const busSchedule = {
    toLublin: [
        { time: '06:30', route: 'Łęczna → Lublin', status: 'on_time' },
        { time: '07:15', route: 'Łęczna → Lublin', status: 'on_time' },
        { time: '08:00', route: 'Łęczna → Lublin', status: 'delayed', delay: 5 },
        { time: '09:30', route: 'Łęczna → Lublin', status: 'on_time' },
        { time: '11:15', route: 'Łęczna → Lublin', status: 'on_time' },
        { time: '13:45', route: 'Łęczna → Lublin', status: 'on_time' },
        { time: '16:20', route: 'Łęczna → Lublin', status: 'on_time' },
        { time: '18:00', route: 'Łęczna → Lublin', status: 'on_time' }
    ],
    toLeczna: [
        { time: '07:00', route: 'Lublin → Łęczna', status: 'on_time' },
        { time: '08:45', route: 'Lublin → Łęczna', status: 'on_time' },
        { time: '10:30', route: 'Lublin → Łęczna', status: 'on_time' },
        { time: '12:15', route: 'Lublin → Łęczna', status: 'delayed', delay: 3 },
        { time: '14:50', route: 'Lublin → Łęczna', status: 'on_time' },
        { time: '17:25', route: 'Lublin → Łęczna', status: 'on_time' },
        { time: '19:10', route: 'Lublin → Łęczna', status: 'on_time' }
    ]
};

// Side Panel Functions
function openSidePanel() {
    document.getElementById('sidePanel').classList.add('open');
    document.getElementById('overlay').classList.add('show');
}

function closeSidePanel() {
    document.getElementById('sidePanel').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
}

// Language Functions
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update language buttons
    document.getElementById('langPL').classList.toggle('active', lang === 'pl');
    document.getElementById('langEN').classList.toggle('active', lang === 'en');
    
    // Update UI texts
    updateUITexts();
    
    // Re-render schedule with new language
    renderSchedule();
}

function updateUITexts() {
    const t = translations[currentLanguage];
    
    // Update header
    document.querySelector('.header-title h1').textContent = t.title;
    document.querySelector('.subtitle').textContent = t.subtitle;
    
    // Update tabs
    document.getElementById('tabToLublin').textContent = t.toLublin;
    document.getElementById('tabToLeczna').textContent = t.toLeczna;
    
    // Update settings panel
    document.querySelector('.panel-header h2').textContent = t.settings;
    document.querySelector('.setting-item:nth-child(2) label').textContent = t.support;
    
    // Update footer
    document.getElementById('updateText').innerHTML = `${t.lastUpdate} <span id="currentTime"></span>`;
    updateTime();
}

// Schedule Functions
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Activate selected button
    document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.add('active');
    
    // Render schedule for active tab
    renderSchedule();
}

function renderSchedule() {
    const activeTab = document.querySelector('.tab-content.active').id;
    const scheduleContainer = document.getElementById(`schedule${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`);
    const t = translations[currentLanguage];
    
    scheduleContainer.innerHTML = '';
    
    busSchedule[activeTab].forEach(bus => {
        const statusText = bus.status === 'delayed' 
            ? `${t.delayed} ${bus.delay}${t.minutes}`
            : t.onTime;
            
        const statusClass = bus.status === 'delayed' ? 'status-delayed' : 'status-on-time';
        
        scheduleContainer.innerHTML += `
            <div class="bus-card">
                <div class="bus-time">${bus.time}</div>
                <div class="bus-info">
                    <div class="bus-route">${bus.route}</div>
                    <div class="bus-status ${statusClass}">${statusText}</div>
                </div>
            </div>
        `;
    });
}

function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleTimeString('pl-PL');
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    updateTime();
    renderSchedule();
    
    // Update time every minute
    setInterval(updateTime, 60000);
    
    // Close panel when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSidePanel();
        }
    });
});
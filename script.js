// Language texts
const translations = {
    pl: {
        title: "🚌 Łęczna - Lublin",
        subtitle: "Rozkład jazdy",
        toLublin: "Łęczna → Lublin",
        toLeczna: "Lublin → Łęczna", 
        onTime: "Na czas",
        delayed: "Opóźniony",
        minutes: "min",
        lastUpdate: "Ostatnia aktualizacja:",
        settings: "Ustawienia",
        support: "My Links:",
        schoolDays: "Dni nauki szkolnej",
        freeDays: "Dni wolne od nauki",
        saturday: "Sobota",
        sunday: "Niedziela",
        holidays: "Święta"
    },
    en: {
        title: "🚌 Łęczna - Lublin",
        subtitle: "Bus Schedule", 
        toLublin: "Łęczna → Lublin",
        toLeczna: "Lublin → Łęczna",
        onTime: "On time",
        delayed: "Delayed",
        minutes: "min",
        lastUpdate: "Last update:",
        settings: "Settings",
        support: "My Links:",
        schoolDays: "School days",
        freeDays: "School holidays",
        saturday: "Saturday",
        sunday: "Sunday",
        holidays: "Holidays"
    }
};

let currentLanguage = 'pl';

// Real bus schedule data from your provided timetable
const busSchedule = {
    toLublin: {
        schoolDays: [
            "4:25", "4:50", "5:10", "5:30", "5:45", "5:55", "6:04", "6:15", "6:26", "6:36",
            "6:46", "6:58", "7:12", "7:27", "7:40", "7:53", "8:05", "8:17", "8:30", "8:42",
            "8:55", "9:20", "9:35", "9:50", "10:10", "10:30", "10:45", "11:00", "11:20", "11:40",
            "12:00", "12:18", "12:29", "12:45", "13:00", "13:15", "13:27", "13:45", "14:09", "14:20",
            "14:38", "14:51", "15:07", "15:20", "15:35", "15:49", "16:00", "16:20", "16:45", "16:59",
            "17:15", "17:38", "18:08", "18:30", "19:00", "19:20", "19:30", "19:50", "20:15", "20:30",
            "21:00", "21:40"
        ],
        freeDays: [
            "4:25", "4:50", "5:10", "5:30", "5:45", "6:04", "6:20", "6:46", "7:04", "7:27",
            "7:40", "8:00", "8:17", "8:42", "8:55", "9:03", "9:20", "9:40", "10:00", "10:19",
            "10:40", "11:00", "11:20", "11:40", "12:00", "12:18", "12:51", "13:15", "13:45", "14:09",
            "14:30", "14:51", "15:07", "15:35", "16:00", "16:20", "16:45", "17:10", "17:38", "18:08",
            "18:30", "19:06", "19:40", "20:15", "20:50", "21:40"
        ],
        saturday: [
            "4:25", "5:10", "5:45", "6:20", "6:58", "7:27", "8:00", "8:30", "8:55", "9:35",
            "10:00", "10:30", "11:00", "11:30", "12:00", "12:18", "13:00", "13:27", "14:00", "14:30",
            "15:07", "15:35", "16:00", "16:35", "17:10", "17:38", "18:08", "18:30", "19:06", "19:50",
            "20:30", "21:40"
        ],
        sunday: [
            "5:10", "5:45", "6:20", "6:58", "7:27", "8:17", "8:55", "9:35", "10:10", "10:45",
            "11:20", "12:00", "12:51", "13:27", "14:00", "14:38", "15:07", "15:49", "16:35", "17:10",
            "17:52", "18:30", "19:00", "19:30", "20:15", "20:50", "21:40"
        ],
        holidays: [
            "5:30", "6:30", "7:27", "8:30", "9:35", "10:30", "11:30", "12:29", "13:27", "14:30",
            "15:35", "16:30", "17:30", "18:30", "19:30", "20:30"
        ]
    },
    toLeczna: {
        schoolDays: [
            "5:30", "5:50", "6:10", "6:29", "6:40", "6:49", "7:02", "7:13", "7:26", "7:35",
            "7:49", "8:08", "8:18", "8:39", "8:52", "9:00", "9:13", "9:30", "9:45", "10:00",
            "10:15", "10:30", "10:45", "11:02", "11:20", "11:35", "11:51", "12:15", "12:34", "12:50",
            "13:05", "13:25", "13:45", "14:05", "14:20", "14:36", "14:50", "15:04", "15:17", "15:30",
            "15:43", "15:56", "16:10", "16:23", "16:35", "16:49", "17:08", "17:30", "17:50", "18:10",
            "18:30", "18:50", "19:10", "19:25", "19:50", "20:10", "20:30", "20:50", "21:10", "21:30",
            "22:00", "22:30"
        ],
        freeDays: [
            "5:30", "5:50", "6:10", "6:29", "6:49", "7:07", "7:26", "7:45", "8:00", "8:18",
            "8:43", "9:00", "9:13", "9:30", "9:49", "10:15", "10:35", "11:02", "11:20", "11:51",
            "12:20", "12:45", "13:05", "13:25", "13:45", "14:05", "14:30", "14:50", "15:10", "15:30",
            "15:50", "16:10", "16:35", "16:55", "17:18", "17:45", "18:20", "18:46", "19:10", "19:42",
            "20:20", "20:55", "21:30", "22:00", "22:30"
        ],
        saturday: [
            "5:30", "6:10", "6:40", "7:13", "7:49", "8:30", "9:00", "9:30", "10:00", "10:30",
            "11:02", "11:35", "12:02", "12:34", "13:05", "13:36", "14:05", "14:36", "15:04", "15:30",
            "16:00", "16:35", "17:08", "17:30", "18:00", "18:30", "19:10", "19:42", "20:20", "20:55",
            "21:45", "22:30"
        ],
        sunday: [
            "6:10", "6:40", "7:13", "7:49", "8:30", "9:13", "9:49", "10:30", "11:12", "11:51",
            "12:20", "13:05", "13:45", "14:20", "15:00", "15:30", "16:10", "16:44", "17:18", "18:00",
            "18:46", "19:25", "19:55", "20:30", "20:55", "21:45", "22:30"
        ],
        holidays: [
            "6:29", "7:35", "8:30", "9:30", "10:30", "11:35", "12:34", "13:36", "14:30", "15:30",
            "16:30", "17:30", "18:30", "19:25", "20:30", "21:30"
        ]
    }
};

let currentDayType = 'schoolDays';

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
    
    // Update day type buttons
    document.getElementById('daySchool').innerHTML = `<i class="fas fa-school"></i> ${t.schoolDays}`;
    document.getElementById('dayFree').innerHTML = `<i class="fas fa-umbrella-beach"></i> ${t.freeDays}`;
    document.getElementById('daySaturday').innerHTML = `<i class="fas fa-calendar-day"></i> ${t.saturday}`;
    document.getElementById('daySunday').innerHTML = `<i class="fas fa-church"></i> ${t.sunday}`;
    document.getElementById('dayHolidays').innerHTML = `<i class="fas fa-star"></i> ${t.holidays}`;
    
    // Update settings panel
    document.querySelector('.panel-header h2').textContent = t.settings;
    document.querySelector('.setting-item:nth-child(3) label').textContent = t.support;
    
    // Update footer
    document.getElementById('updateText').innerHTML = `${t.lastUpdate} <span id="currentTime"></span>`;
    updateTime();
}

// Day Type Functions
function setDayType(dayType) {
    currentDayType = dayType;
    
    // Update day type buttons
    document.querySelectorAll('.day-type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`day${dayType.charAt(0).toUpperCase() + dayType.slice(1)}`).classList.add('active');
    
    // Re-render schedule
    renderSchedule();
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
    const scheduleContainer = document.getElementById(`schedule${activeTab.charAt(0).toUpperCase() + tabName.slice(1)}`);
    const t = translations[currentLanguage];
    
    scheduleContainer.innerHTML = '';
    
    const times = busSchedule[activeTab][currentDayType];
    
    times.forEach(time => {
        scheduleContainer.innerHTML += `
            <div class="bus-card">
                <div class="bus-time">${time}</div>
                <div class="bus-info">
                    <div class="bus-route">${activeTab === 'toLublin' ? t.toLublin : t.toLeczna}</div>
                    <div class="bus-status status-on-time">${t.onTime}</div>
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
    
    // Auto-detect day type based on current date
    autoDetectDayType();
});

function autoDetectDayType() {
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    
    if (dayOfWeek === 0) { // Sunday
        setDayType('sunday');
    } else if (dayOfWeek === 6) { // Saturday
        setDayType('saturday');
    } else { // Monday-Friday
        setDayType('schoolDays');
    }
}
const events = [
    {
        id: 'quiz',
        name: 'Quiz Competition',
        title: 'Quiz Master 2026',
        prizePool: 'Exciting Prizes',
        entryFee: 'Free',
        type: 'Individual',
        distribution: [
            { label: 'WINNER', value: '₹8,000' },
            { label: 'RUNNER UP', value: '₹5,000' },
            { label: '3RD PLACE', value: '₹2,000' }
        ],
        description: 'Test your technical knowledge and quick thinking abilities in our grand Quiz Competition. The questions will span across basic programming, logic, current tech news, and computer architecture.',
        rules: [
            'Individual participation only.',
            'Participant Should install Kahoot App',
            'The One Gives Fast Answer Will Qualify For next Round',
            
        ],
        link: 'register.html?event=quiz'
    },
    {
        id: 'reverse_engineering',
        name: 'Reverse Engineering',
        title: 'Reverse Engineering',
        prizePool: 'Exciting Prizes',
        entryFee: 'Free',
        type: 'Team (Max 2)',
        distribution: [
            { label: 'WINNER', value: '₹15,000' },
            { label: 'RUNNER UP', value: '₹10,000' }
        ],
        description: 'Deconstruct, analyze, and rebuild! Participants will be given obfuscated code or a compiled binary and must figure out the logic or find the hidden flags within a time limit.',
        rules: [
            'Maximum 2 members per team.',
            'Participants must bring their own laptops.',
            'Internet access will be monitored/restricted.',
            'First to submit the correct logic wins.',
            'Use of automated payload tools might be restricted depending on the round.'
        ],
        link: 'register.html?event=reverse_engineering'
    },
    {
        id: 'chatbot',
        name: 'Chatbot',
        title: 'AI Chatbot Challenge',
        prizePool: 'Exciting Prizes',
        entryFee: 'Free',
        type: 'Team (Max 2)',
        distribution: [
            { label: 'WINNER', value: '₹15,000' },
            { label: 'RUNNER UP', value: '₹10,000' },
            { label: 'INNOVATION', value: '₹5,000' }
        ],
        description: 'Build an intuitive and intelligent chatbot that solves a specific domain problem. Whether it acts as an assistant or automates a workflow, creativity and technical execution are key.',
        rules: [
            'Maximum of 2 members per team.',
            'You can use modern LLM APIs (OpenAI, Gemini) but the prompt engineering and UI logic must be your own.',
            'Evaluation based on accuracy, UI/UX, and utility.',
            'Participants have a 24-hours timeframe before demo submission.'
        ],
        link: 'register.html?event=chatbot'
    },
    {
        id: 'volleyball',
        name: 'Volleyball',
        title: 'Department Volleyball Cup',
        prizePool: 'Exciting Prizes',
        entryFee: 'Free',
        type: 'Team (6+2)',
        distribution: [
            { label: 'WINNING TEAM', value: '₹10,000' },
            { label: 'RUNNER UP', value: '₹5,000' }
        ],
        description: 'Spike, block, and win! Join the Computer Department Volleyball tournament. Show your teamwork and athletic skills on the court.',
        rules: [
            'Team size: 6 playing members + 2 substitutes.',
            'Standard rotational rules apply.',
            'Referee\'s decision is final and binding.',
            'Proper sports attire is mandatory.'
        ],
        link: 'register.html?event=volleyball'
    },
    {
        id: 'badminton',
        name: 'Badminton',
        title: 'Badminton Smash',
        prizePool: 'Exciting Prizes',
        entryFee: 'Free',
        type: 'Individual',
        distribution: [
            { label: 'WINNER', value: '₹6,000' },
            { label: 'RUNNER UP', value: '₹4,000' }
        ],
        description: 'A fast-paced badminton tournament to test your agility and stamina. Open for all department students. Smash your way to victory!',
        rules: [
             'Participant Should Bring their own Racquet',
            'Shuttles will be provided for all matches.',
            'Referee\'s decision is final and binding.',
            'Reporting time is strictly 30 mins prior to the slot.'
        ],
        link: 'register.html?event=badminton'
    },
    {
        id: 'chess',
        name: 'Chess (Boys)',
        title: 'Chess Blitz (Boys)',
        prizePool: 'Exciting Prizes',
        entryFee: 'Free',
        type: 'Individual',
        distribution: [
            { label: 'WINNER', value: '₹3,000' },
            { label: 'RUNNER UP', value: '₹2,000' }
        ],
        description: 'A battle of minds exclusively for boys. Strategize, set traps, and checkmate your opponents in this classic mental sport. Bring your sharpest strategies to the board.',
        rules: [
            'Standard FIDE rules apply.',
            'Time control: 10 mins + 5 seconds increment per move.',
            'Touch piece rule is strictly followed.',
            'Arbiter’s decision is final in case of dispute.'
        ],
        link: 'register.html?event=chess'
    },
    {
        id: 'cricket',
        name: 'Cricket (Girls)',
        title: 'Girls Cricket League',
        prizePool: 'Exciting Prizes',
        entryFee: 'Free',
        type: 'Team (11)',
        distribution: [
            { label: 'WINNING TEAM', value: '₹12,000' },
            { label: 'RUNNER UP', value: '₹8,000' }
        ],
        description: 'The much-awaited Girls Cricket Tournament! Come hit the ball out of the park and show your cricketing prowess. Let the finest team lift the departmental trophy.',
        rules: [
            'Squad size: 11 active players.',
            'Matches will be played with a hard tennis ball.',
            'Over-arm bowling is mandatory.',
            'Group stage matches will be of 8 overs each.'
        ],
        link: 'https://forms.gle/jpuSBaBJrgzoXGm68'
    },
    {
        id: 'fresher_farewell',
        name: 'Fresher & Farewell',
        title: 'Fresher & Farewell 2026',
        prizePool: 'Event',
        entryFee: '₹500',
        type: 'Celebration',
        distribution: [
            { label: 'MEMORIES', value: 'Priceless' },
            { label: 'FUN', value: 'Unlimited' },
            { label: 'FOOD', value: 'Included' }
        ],
        description: 'A magical evening to welcome our enthusiastic freshers and bid a grand adieu to our graduating seniors. Join us for an unforgettable night filled with cultural performances, awards, DJ night, and a lavish dinner.',
        rules: [
            'Dress Code: Formals / Traditional (adhere to event theme).',
            'Entry is strictly with a valid college ID card and registration pass.',
            'Registration is mandatory to arrange for food and seating.',
            'Please complete your registration via the specific link provided below.'
        ],
        link: '',
    }
];

function initTheme() {
    const savedTheme = localStorage.getItem('site-theme') || 'light';
    document.body.dataset.theme = savedTheme;
    updateThemeIcon(savedTheme);

    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;

    themeBtn.removeEventListener('click', toggleTheme);
    themeBtn.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    const isDark = document.body.dataset.theme === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    document.body.dataset.theme = newTheme;
    localStorage.setItem('site-theme', newTheme);
    updateThemeIcon(newTheme);
}

function initPage() {
    initTheme();
    initMobileMenu();

    const listContainer = document.getElementById('eventList');
    if (listContainer) {
        // Populate Sidebar only on the index page
        events.forEach((ev, index) => {
            const li = document.createElement('li');
            li.className = `event-item ${index === 0 ? 'active' : ''}`;
            li.innerHTML = `${ev.name} <i class="fa-solid fa-chevron-right"></i>`;
            li.dataset.id = ev.id;
            
            li.addEventListener('click', () => {
                if (li.classList.contains('active')) return;
                
                document.querySelectorAll('.event-item').forEach(el => el.classList.remove('active'));
                li.classList.add('active');
                
                loadEvent(ev);
            });
            
            listContainer.appendChild(li);
        });

        loadEvent(events[0]);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
} else {
    initPage();
}

function updateThemeIcon(theme) {
    const themeBtn = document.getElementById('themeToggle');
    if (!themeBtn) return;

    if (theme === 'dark') {
        themeBtn.innerHTML = '<i class="fa-solid fa-sun" style="color: #f59e0b;"></i>';
    } else {
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

function loadEvent(ev) {
    const content = document.getElementById('eventContent');
    content.style.opacity = 0;
    
    setTimeout(() => {
        document.getElementById('heroTitle').innerText = ev.title || ev.name;
        
        document.getElementById('prizePool').innerText = ev.prizePool;
        document.getElementById('entryFee').innerText = ev.entryFee;
        document.getElementById('eventType').innerText = ev.type;
        

        
        document.getElementById('eventDescription').innerText = ev.description;
        
        const rulesContainer = document.getElementById('eventRules');
        rulesContainer.innerHTML = '';
        ev.rules.forEach(r => {
            rulesContainer.innerHTML += `<li>${r}</li>`;
        });
        
        const registerBtn = document.getElementById('registerLink');
        if(ev.id === 'fresher_farewell') {
            registerBtn.innerText = "Register for Fresher & Farewell";
            registerBtn.onclick = (e) => {
                if(ev.link.startsWith('javascript:')) {
                    e.preventDefault();
                    eval(ev.link.replace('javascript:', ''));
                }
            }
        } else {
            registerBtn.innerText = "Register for this Event";
            registerBtn.onclick = null;
        }
        registerBtn.href = ev.link;
        
        content.style.opacity = 1;
    }, 200);
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (!mobileMenuBtn || !navLinks) return;

    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    });
}

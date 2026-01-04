const countries = ['Magyarország', 'Ausztria', 'Románia', 'Szlovákia', 'Szerbia', 'Horvátország', 'Csehország', 'Lengyelország'];

const residents = [
    { id: 1, name: "Bagu Benjamin", apartment: "101", job: "Diák", birthYear: 2006, origin: "Magyarország", image: "Bagu Benjamin.jpg", impostorImage: "Bagu Benjamin1.png", ticketId: "84213821", expiryYear: 2027 },
    { id: 2, name: "Csorba Máté", apartment: "102", job: "Tanár", birthYear: 1989, origin: "Románia", image: "Csorba Máté.jpg", impostorImage: "Csorba Máté1.png", ticketId: "59329452", expiryYear: 2027 },
    { id: 3, name: "Demeter Roland", apartment: "103", job: "Mérnök", birthYear: 1992, origin: "Magyarország", image: "Demeter Roland.jpg", impostorImage: "Demeter Roland1.png", ticketId: "27411129", expiryYear: 2027 },
    { id: 4, name: "Erdődi Péter", apartment: "201", job: "Orvos", birthYear: 1985, origin: "Ausztria", image: "Erdődi Péter.jpg", impostorImage: "Erdődi Péter1.jpg", ticketId: "91027734", expiryYear: 2027 },
    { id: 5, name: "Gazi Tamás Dávid", apartment: "202", job: "Diák", birthYear: 2005, origin: "Magyarország", image: "Gazi Tamás Dávid.png", impostorImage: "Gazi Tamás Dávid1.jpg", ticketId: "33855501", expiryYear: 2027 },
    { id: 6, name: "Király Patrik", apartment: "203", job: "Sofőr", birthYear: 1995, origin: "Szlovákia", image: "Király Patrik.png", impostorImage: "Király Patrik1.png", ticketId: "66292283", expiryYear: 2027 },
    { id: 7, name: "Kiss Dávid", apartment: "301", job: "Programozó", birthYear: 1998, origin: "Magyarország", image: "Kiss Dávid.png", impostorImage: "Kiss Dávid1.png", ticketId: "11946649", expiryYear: 2027 },
    { id: 8, name: "Papp Bulcsú", apartment: "302", job: "Diák", birthYear: 2005, origin: "Magyarország", image: "Papp Bulcsú.jpg", impostorImage: "Papp Bulcsú1.png", ticketId: "77538812", expiryYear: 2027 },
    { id: 9, name: "Papp Gergő", apartment: "303", job: "Eladó", birthYear: 2001, origin: "Horvátország", image: "Papp Gergő.jpg", impostorImage: "Papp Gergő1.png", ticketId: "44824476", expiryYear: 2027 },
    { id: 10, name: "Sarka Levente", apartment: "401", job: "Villanyszerelő", birthYear: 1987, origin: "Szerbia", image: "Sarka Levente.png", impostorImage: "Sarka Levente1.jpg", ticketId: "22013390", expiryYear: 2027 },
    { id: 11, name: "Szolomájer Zétény", apartment: "402", job: "Építész", birthYear: 1990, origin: "Magyarország", image: "Szolomájer Zétény.jpg", impostorImage: "Szolomájer Zétény1.png", ticketId: "99341105", expiryYear: 2027 },
    { id: 12, name: "Tóth Regina", apartment: "403", job: "Ápoló", birthYear: 1993, origin: "Csehország", image: "Tóth Regina.png", impostorImage: "Tóth Regina1.png", ticketId: "55679921", expiryYear: 2027 },
    { id: 13, name: "Váradi Zsolt", apartment: "404", job: "Diák", birthYear: 2005, origin: "Magyarország", image: "Váradi Zsolt.jpg", impostorImage: "Váradi Zsolt1.png", ticketId: "88107765", expiryYear: 2027 },
    { id: 14, name: "Pálfi Máté", apartment: "405", job: "Mosómester", birthYear: 1988, origin: "Lengyelország", image: "Pálfi Máté.jpg", impostorImage: "Pálfi Máté1.jpg", ticketId: "33495543", expiryYear: 2027 },
    { id: 15, name: "Baráth Benedek", apartment: "101", job: "Pék", birthYear: 2003, origin: "Magyarország", image: "Baráth Benedek.png", impostorImage: "Baráth Benedek1.png", ticketId: "12345678", expiryYear: 2027 },
    { id: 16, name: "Budai Sándor", apartment: "102", job: "Biztonsági őr", birthYear: 1985, origin: "Magyarország", image: "Budai Sándor.png", impostorImage: "Budai Sándor1.jpg", ticketId: "87654321", expiryYear: 2027 },
    { id: 17, name: "Diana Rider", apartment: "103", job: "Modell", birthYear: 1998, origin: "Oroszország", image: "Diana Rider.png", impostorImage: "Diana Rider1.jpg", ticketId: "11223344", expiryYear: 2027 },
    { id: 18, name: "Harcsa István", apartment: "201", job: "Halász", birthYear: 1975, origin: "Magyarország", image: "Harcsa István.jpg", impostorImage: "Harcsa István1.png", ticketId: "55667788", expiryYear: 2027 },
    { id: 19, name: "Helmeczi Gábor", apartment: "202", job: "Tanár", birthYear: 1990, origin: "Magyarország", image: "Helmeczi Gábor.png", impostorImage: "Helmeczi Gábor1.png", ticketId: "99887766", expiryYear: 2027 },
    { id: 20, name: "Jágri Ilona", apartment: "404", job: "Ápoló", birthYear: 1995, origin: "Magyarország", image: "Jágri Ilona.png", impostorImage: "Jágri Ilona1.png", ticketId: "44332211", expiryYear: 2027 },
    { id: 21, name: "Kókai Dominik", apartment: "301", job: "Diák", birthYear: 2004, origin: "Magyarország", image: "Kókai Dominik.png", impostorImage: "Kókai Dominik1.jpg", ticketId: "10293847", expiryYear: 2027 },
    { id: 22, name: "Lana Rhoades", apartment: "302", job: "Színésznő", birthYear: 1996, origin: "USA", image: "Lana Rhoades.jpg", impostorImage: "Lana Rhoades1.png", ticketId: "56473829", expiryYear: 2027 },
    { id: 23, name: "Pados Dóra", apartment: "303", job: "Eladó", birthYear: 2000, origin: "Magyarország", image: "Pados Dóra.png", impostorImage: "Pados Dóra1.png", ticketId: "19283746", expiryYear: 2027 },
    { id: 24, name: "Pető Patrik", apartment: "401", job: "Szakács", birthYear: 1999, origin: "Magyarország", image: "Pető Patrik.jpg", impostorImage: "Pető Patrik1.png", ticketId: "91827364", expiryYear: 2027 },
    { id: 25, name: "Simon Konstantin", apartment: "402", job: "Programozó", birthYear: 1992, origin: "Oroszország", image: "Simon Konstantin.png", impostorImage: "Simon Konstantin1.jpg", ticketId: "37465829", expiryYear: 2027 },
    { id: 26, name: "Szabó Gábor", apartment: "403", job: "Rendőr", birthYear: 1988, origin: "Magyarország", image: "Szabó Gábor.jpg", impostorImage: "Szabó Gábor1.png", ticketId: "82736451", expiryYear: 2027 },
    { id: 27, name: "Veres Krisztián", apartment: "203", job: "Diák", birthYear: 2005, origin: "Magyarország", image: "Veres Krisztián.jpg", impostorImage: "Veres Krisztián1.jpg", ticketId: "10928374", expiryYear: 2027 },
    { id: 28, name: "Váradi Ferenc", apartment: "405", job: "Nyugdíjas", birthYear: 1960, origin: "Magyarország", image: "Váradi Ferenc.jpg", impostorImage: "Váradi Ferenc1.png", ticketId: "56473819", expiryYear: 2027 }
];

const impostorNames = [
    "Bagu Benjámin", "Bagú Benjamin", "Bagu Benjamín",
    "Csorba Maté", "Czorba Máté", "Csorba Máte",
    "Demeter Rolland", "Démeter Roland", "Demeter Rolánd",
    "Erdődi Pétr", "Erdodi Péter", "Erdődi Peter",
    "Gazi Tamás David", "Gázi Tamás Dávid", "Gazi Tamas Dávid",
    "Király Patric", "Király Patrik ", "Kiraly Patrik",
    "Kiss Dávíd", "Kiss David", "Kis Dávid",
    "Papp Bulcsúú", "Pap Bulcsú", "Papp Bulcsu",
    "Papp Gergö", "Pap Gergő", "Papp Gergo",
    "Sarka Leventé", "Sárka Levente", "Sarka Levente ",
    "Szolomájer Zéteny", "Szolomajer Zétény", "Szolomájer Zetény",
    "Tóth Regína", "Toth Regina", "Tóth Reginá",
    "Váradi Zolt", "Varadi Zsolt", "Váradi Zsólt",
    "Palfi Máté", "Pálfi Mate", "Pálfi Maté"
];

const greetings = [
    "Jó napot! Hazajöttem a munkából.",
    "Szervusz! Beengedsz?",
    "Üdv! Otthon felejtettem a kulcsom...",
    "*Zavarodott* Szia! Én vagyok az a fiú/lány",
    "Jó estét! Fáradt vagyok, bemehetek?",
    "*Zavarodott* Helló! Már várt a család.",
    "Beengedsz már? Sürgős.",
    "*Ijedt* Szép napot! Késő van már...",
    "Szia szörny vagyok! vagy nem?",
    "*furcsa* Nyisd ki, kérlek!",
    "Jó napot kívánok!"
];

const dayNames = ['Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek'];

const fakeStamps = [
    'DDD  JÓVÁHAGYOTT',
    'D.D.D. JÓVÁHAGYOT ',
    'D.D.D JOVAHAGYOTT',
    'DDD JOVAHAGYOTT',
    'D.D.D. JOVÁHAGYOTT',
    'DDD JÓVÁHGYOT',
    'D.D.D. JOVHGYOTT'
];

let gameState = {
    day: 1,
    time: 8,
    correctDecisions: 0,
    wrongDecisions: 0,
    caughtImposters: 0,
    allowedImposters: 0,
    falseAlarms: 0,
    currentVisitor: null,
    realResident: null,
    isImpostor: false,
    isXrayImpostor: false,
    documentShown: false,
    visitorsToday: 0,
    impostorsToday: 0,
    maxVisitorsPerDay: 5,
    hasFakeStamp: false,
    visitedResidentsToday: [],
    selfCallsLeft: 1,
    roommateCallsLeft: 1,
    isTemporaryLightOn: false,
    isExpiredImpostor: false
};

const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const gameoverScreen = document.getElementById('gameover-screen');
const startBtn = document.getElementById('start-btn');
const nextVisitorBtn = document.getElementById('next-visitor-btn');
const askIdBtn = document.getElementById('ask-id-btn');
const approveBtn = document.getElementById('approve-btn');
const denyBtn = document.getElementById('deny-btn');
const restartBtn = document.getElementById('restart-btn');

const dayNumber = document.getElementById('day-number');
const timeDisplay = document.getElementById('time');
const correctCount = document.getElementById('correct-count');
const wrongCount = document.getElementById('wrong-count');

const visitorContainer = document.getElementById('visitor-container');
const visitorImage = document.getElementById('visitor-image');
const visitorSpeech = document.getElementById('visitor-speech');
const noVisitor = document.getElementById('no-visitor');

const visitorId = document.getElementById('visitor-id');
const noDocument = document.getElementById('no-document');
const idPhotoImg = document.getElementById('id-photo-img');
const idName = document.getElementById('id-name');
const idApartment = document.getElementById('id-apartment');
const idJob = document.getElementById('id-job');
const idBirth = document.getElementById('id-birth');
const idOrigin = document.getElementById('id-origin');
const idTicket = document.getElementById('id-ticket');
const idStamp = document.getElementById('id-stamp');

const residentList = document.getElementById('resident-list');

const jumpscareEl = document.getElementById('jumpscare');
const jumpscareImg = document.getElementById('jumpscare-img');

const gameoverTitle = document.getElementById('gameover-title');
const gameoverMessage = document.getElementById('gameover-message');
const finalCorrect = document.getElementById('final-correct');
const finalCaught = document.getElementById('final-caught');
const finalImposters = document.getElementById('final-imposters');
const finalFalse = document.getElementById('final-false');

const questionButtons = document.getElementById('question-buttons');

const registryBackBtn = document.getElementById('registry-back-btn');

const waitingMessage = document.getElementById('waiting-message');

function init() {
    console.log("Game Initialized");
    startBtn.addEventListener('click', startGame);
    nextVisitorBtn.addEventListener('click', () => {
        if (nextVisitorBtn.textContent === 'KÖVETKEZŐ NAP') {
            startNextDay();
        } else {
            spawnVisitor();
        }
    });
    askIdBtn.addEventListener('click', showDocument);
    approveBtn.addEventListener('click', () => makeDecision(true));
    denyBtn.addEventListener('click', () => makeDecision(false));
    restartBtn.addEventListener('click', restartGame);

    registryBackBtn.addEventListener('click', populateResidentList);

    // Phone listeners
    const phoneBtn = document.getElementById('phone-btn');
    if (phoneBtn) phoneBtn.addEventListener('click', togglePhoneMenu);
    const callSelfBtn = document.getElementById('call-self-btn');
    if (callSelfBtn) callSelfBtn.addEventListener('click', callSelf);
    const callRoommateBtn = document.getElementById('call-roommate-btn');
    if (callRoommateBtn) callRoommateBtn.addEventListener('click', callRoommate);
    const phoneMenuClose = document.getElementById('phone-menu-close');
    if (phoneMenuClose) phoneMenuClose.addEventListener('click', togglePhoneMenu);

    // Question buttons
    const qButtons = document.getElementById('question-buttons');
    if (qButtons) qButtons.addEventListener('click', handleQuestionClick);

    // X-ray button
    const xrayBtn = document.getElementById('xray-btn');
    if (xrayBtn) xrayBtn.addEventListener('click', handleXray);

    populateResidentList();
}



function populateResidentList() {
    residentList.innerHTML = '';
    registryBackBtn.classList.add('hidden');

    const folders = [
        { label: '100-as Szobák', min: 100, max: 199 },
        { label: '200-as Szobák', min: 200, max: 299 },
        { label: '300-as Szobák', min: 300, max: 399 },
        { label: '400-as Szobák', min: 400, max: 499 }
    ];

    folders.forEach(folder => {
        const folderItem = document.createElement('div');
        folderItem.className = 'folder-item';

        const folderHeader = document.createElement('div');
        folderHeader.className = 'folder-header';
        folderHeader.textContent = `📁 ${folder.label}`;

        const folderContent = document.createElement('div');
        folderContent.className = 'folder-content';

        const filteredResidents = residents.filter(r => {
            const aptNum = parseInt(r.apartment);
            return aptNum >= folder.min && aptNum <= folder.max;
        }).sort((a, b) => parseInt(a.apartment) - parseInt(b.apartment));

        if (filteredResidents.length === 0) {
            folderContent.innerHTML = '<div style="padding:10px; color:#555;">Üres mappa</div>';
        } else {
            filteredResidents.forEach(r => {
                const resItem = document.createElement('div');
                resItem.className = 'resident-item';
                resItem.innerHTML = `<span>${r.name} <small style="color:#aaa; font-size:0.8em;">(${r.ticketId})</small></span><span>${r.apartment}</span>`;
                resItem.addEventListener('click', (e) => {
                    e.stopPropagation();
                    showResidentDetails(r);
                });
                folderContent.appendChild(resItem);
            });
        }

        folderHeader.addEventListener('click', () => {
            document.querySelectorAll('.folder-item').forEach(item => {
                if (item !== folderItem) item.classList.remove('open');
            });

            folderItem.classList.toggle('open');
        });

        folderItem.appendChild(folderHeader);
        folderItem.appendChild(folderContent);
        residentList.appendChild(folderItem);
    });
}

function showResidentDetails(resident) {
    alert(`📋 LAKÓ ADATLAP\n\nNév: ${resident.name}\nLakás: ${resident.apartment}\nAzonosító: ${resident.ticketId}`);
}

function startGame() {
    startScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    resetGameState();
    updateUI();
}

function resetGameState() {
    gameState = {
        day: 1,
        time: 8,
        correctDecisions: 0,
        wrongDecisions: 0,
        caughtImposters: 0,
        allowedImposters: 0,
        falseAlarms: 0,
        currentVisitor: null,
        realResident: null,
        isImpostor: false,
        isXrayImpostor: false,
        documentShown: false,
        visitorsToday: 0,
        impostorsToday: 0,
        maxVisitorsPerDay: 5,
        hasFakeStamp: false,
        visitedResidentsToday: [],
        selfCallsLeft: 1,
        roommateCallsLeft: 1
    };
}

function updateUI() {
    const dayName = dayNames[gameState.day - 1] || 'Ismeretlen nap';
    dayNumber.textContent = `${gameState.day}. NAP - ${dayName}`;
    timeDisplay.textContent = `${String(gameState.time).padStart(2, '0')}:00`;
    correctCount.textContent = gameState.correctDecisions;
    wrongCount.textContent = gameState.wrongDecisions;
    updateEnvironment();
}

function updateEnvironment() {
    const mug = document.getElementById('mug');
    const coffeeStain = document.getElementById('coffee-stain');
    const crumpledPaper = document.getElementById('crumpled-paper');
    const wallCrackLeft = document.getElementById('wall-crack');
    const wallCrackRight = document.getElementById('wall-crack-right');

    if (mug) mug.classList.toggle('hidden', gameState.day < 2);
    if (coffeeStain) coffeeStain.classList.toggle('hidden', gameState.day < 3);
    if (crumpledPaper) crumpledPaper.classList.toggle('hidden', gameState.day < 5);

    if (wallCrackLeft) {
        wallCrackLeft.classList.remove('stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5');
        if (gameState.day === 2 || gameState.day === 3) wallCrackLeft.classList.add('stage-2');
        else if (gameState.day === 4) wallCrackLeft.classList.add('stage-3');
        else if (gameState.day >= 5) wallCrackLeft.classList.add('stage-4');
    }

    if (wallCrackRight) {
        wallCrackRight.classList.remove('stage-1', 'stage-2', 'stage-3', 'stage-4', 'stage-5');
        if (gameState.day === 1 || gameState.day === 2) wallCrackRight.classList.add('stage-3');
        else if (gameState.day === 3 || gameState.day === 4) wallCrackRight.classList.add('stage-4');
        else if (gameState.day >= 5) wallCrackRight.classList.add('stage-5');
    }

    const visitorWindow = document.querySelector('.visitor-window');
    const hangingLamp = document.getElementById('hanging-lamp');
    const hangingLampOff = document.getElementById('hanging-lamp-off');
    const flashlightOverlay = document.getElementById('flashlight-overlay');

    if (visitorWindow) {
        visitorWindow.classList.toggle('night-shift', gameState.day >= 4);
    }

    // Ensure the "off" lamp is always visible in the background
    if (hangingLampOff) hangingLampOff.style.setProperty('display', 'block', 'important');

    const gameScreen = document.getElementById('game-screen');

    if (gameState.day >= 4 && !gameState.isTemporaryLightOn) {
        if (hangingLamp) {
            hangingLamp.style.setProperty('display', 'none', 'important');
            hangingLamp.style.setProperty('animation', 'none', 'important');
        }
        if (flashlightOverlay) flashlightOverlay.classList.add('active');
        if (gameScreen) gameScreen.style.setProperty('animation', 'none', 'important');
    } else {
        if (hangingLamp) {
            hangingLamp.style.setProperty('display', 'block', 'important');
            if (gameState.day < 4) {
                hangingLamp.style.setProperty('animation', 'lampFlicker 60s infinite', 'important');
            } else {
                hangingLamp.style.setProperty('animation', 'none', 'important');
            }
        }
        if (flashlightOverlay) flashlightOverlay.classList.remove('active');

        if (gameState.day < 4) {
            if (gameScreen) gameScreen.style.setProperty('animation', 'screenFlicker 60s infinite', 'important');
        } else {
            if (gameScreen) gameScreen.style.setProperty('animation', 'none', 'important');
        }

        if (hangingLamp && gameState.day === 3) {
            hangingLamp.classList.add('flicker-intense');
        } else if (hangingLamp) {
            hangingLamp.classList.remove('flicker-intense');
        }
    }
}

function spawnVisitor() {
    if (gameState.visitorsToday >= gameState.maxVisitorsPerDay) {
        endDay();
        return;
    }

    const minImpostors = 0;
    const remainingVisitors = gameState.maxVisitorsPerDay - gameState.visitorsToday;
    const neededImpostors = minImpostors - gameState.impostorsToday;

    if (neededImpostors > 0 && remainingVisitors <= neededImpostors) {
        gameState.isImpostor = true;
    } else {
        const impostorChance = 0.5 + (gameState.day * 0.1);
        gameState.isImpostor = Math.random() < impostorChance;
    }

    if (gameState.isImpostor) {
        gameState.impostorsToday++;
    }

    const availableResidents = residents.filter(r => !gameState.visitedResidentsToday.includes(r.id));

    if (availableResidents.length === 0) {
        endDay();
        return;
    }

    const realResident = availableResidents[Math.floor(Math.random() * availableResidents.length)];
    gameState.realResident = realResident;
    gameState.visitedResidentsToday.push(realResident.id);

    if (gameState.isImpostor) {
        const random = Math.random();

        gameState.isXrayImpostor = false;

        if (random < 0.25) {
            gameState.isXrayImpostor = true;
            gameState.impostorUsesWrongImage = false;
            gameState.hasFakeStamp = false;
            gameState.currentVisitor = { ...realResident };
        } else if (random < 0.5) {
            gameState.impostorUsesWrongImage = true;
            gameState.hasFakeStamp = false;
            gameState.currentVisitor = { ...realResident };
        } else if (random < 0.75) {
            gameState.impostorUsesWrongImage = false;
            gameState.hasFakeStamp = true;
            gameState.currentVisitor = { ...realResident };
        } else {
            gameState.impostorUsesWrongImage = false;
            gameState.hasFakeStamp = false;
            gameState.currentVisitor = createImpostor(realResident);
        }
    } else {
        gameState.currentVisitor = { ...realResident };
        gameState.impostorUsesWrongImage = false;
        gameState.isXrayImpostor = false;
        gameState.isExpiredImpostor = false;
    }

    // Randomly make it an expired document impostor (if not already an impostor)
    if (!gameState.isImpostor && Math.random() < 0.2) {
        gameState.isExpiredImpostor = true;
    }

    gameState.documentShown = false;
    gameState.visitorsToday++;
    gameState.time++;

    noVisitor.classList.add('hidden');
    visitorContainer.classList.add('active');
    visitorImage.classList.remove('hidden');
    questionButtons.classList.remove('hidden');

    if (gameState.isImpostor && gameState.impostorUsesWrongImage) {
        visitorImage.src = realResident.impostorImage;
    } else {
        visitorImage.src = realResident.image;
    }

    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    visitorSpeech.textContent = greeting;

    visitorId.classList.add('hidden');
    noDocument.classList.remove('hidden');

    askIdBtn.disabled = false;
    approveBtn.disabled = true;
    denyBtn.disabled = true;
    document.getElementById('xray-btn').disabled = false;

    updateUI();

    // Clear blood stains when new visitor arrives
    const bloodContainer = document.getElementById('blood-container');
    if (bloodContainer) bloodContainer.innerHTML = '';

    // Random temporary light help on Day 4+
    if (gameState.day >= 4 && Math.random() < 0.3) {
        triggerTemporaryLight();
    }
}

function createImpostor(realResident) {
    const impostor = { ...realResident };
    const fakeOptions = ['name', 'apartment', 'job', 'birthYear', 'origin', 'ticketId'];
    const fieldToFake = fakeOptions[Math.floor(Math.random() * fakeOptions.length)];

    switch (fieldToFake) {
        case 'name':
            const similarNames = impostorNames.filter(name => {
                const dist = levenshtein(name, realResident.name);
                return dist > 0 && dist <= 4;
            });

            if (similarNames.length > 0) {
                impostor.name = similarNames[Math.floor(Math.random() * similarNames.length)];
            } else {
                impostor.name = generateNameTypo(realResident.name);
            }
            break;
        case 'apartment':
            const wrongApts = ['104', '204', '304', '404', '105', '205'];
            impostor.apartment = wrongApts[Math.floor(Math.random() * wrongApts.length)];
            break;
        case 'job':
            const wrongJobs = ['Villanyszerelő', 'Sofőr', 'Eladó', 'Takarító', 'Építész'];
            impostor.realJob = realResident.job;
            impostor.job = wrongJobs[Math.floor(Math.random() * wrongJobs.length)];
            break;
        case 'birthYear':
            impostor.realBirthYear = realResident.birthYear;
            impostor.birthYear = realResident.birthYear + (Math.random() < 0.5 ? -3 : 5);
            break;
        case 'origin':
            const wrongCountries = countries.filter(c => c !== 'Magyarország');
            impostor.realOrigin = realResident.origin;
            impostor.origin = wrongCountries[Math.floor(Math.random() * wrongCountries.length)];
            break;
        case 'ticketId':
            const originalId = realResident.ticketId;
            const chars = originalId.split('');
            let randomIdx;
            do {
                randomIdx = Math.floor(Math.random() * chars.length);
            } while (chars[randomIdx] === '-');

            chars[randomIdx] = Math.floor(Math.random() * 10).toString();
            impostor.ticketId = chars.join('');
            break;
    }

    return impostor;
}

function generateNameTypo(name) {
    const chars = name.split('');
    const random = Math.random();

    if (random < 0.3 && chars.length > 3) {
        const idx = Math.floor(Math.random() * (chars.length - 1));
        const temp = chars[idx];
        chars[idx] = chars[idx + 1];
        chars[idx + 1] = temp;
    } else if (random < 0.6) {
        const replacements = {
            'a': 'á', 'á': 'a',
            'e': 'é', 'é': 'e',
            'i': 'í', 'í': 'i',
            'o': 'ó', 'ó': 'o',
            'u': 'ú', 'ú': 'u',
            'n': 'm', 'm': 'n',
            's': 'sz', 'z': 's'
        };
        const idx = Math.floor(Math.random() * chars.length);
        const char = chars[idx].toLowerCase();
        if (replacements[char]) {
            chars[idx] = replacements[char];
        } else {
            chars.splice(idx, 0, chars[idx]);
        }
    } else if (random < 0.8) {
        const idx = Math.floor(Math.random() * chars.length);
        chars.splice(idx, 0, chars[idx]);
    } else {
        const idx = Math.floor(Math.random() * chars.length);
        chars.splice(idx, 1);
    }

    return chars.join('');
}

function levenshtein(a, b) {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    Math.min(
                        matrix[i][j - 1] + 1,
                        matrix[i - 1][j] + 1
                    )
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

function showDocument() {
    gameState.documentShown = true;

    noDocument.classList.add('hidden');
    visitorId.classList.remove('hidden');

    idPhotoImg.src = gameState.realResident.image;

    idName.textContent = gameState.currentVisitor.name;
    idTicket.textContent = gameState.currentVisitor.ticketId;
    idApartment.textContent = gameState.currentVisitor.apartment;
    idJob.textContent = gameState.currentVisitor.job;
    idBirth.textContent = gameState.currentVisitor.birthYear;
    idOrigin.textContent = gameState.currentVisitor.origin;

    const idExpiry = document.getElementById('id-expiry');
    if (gameState.isExpiredImpostor) {
        idExpiry.textContent = 2023;
    } else {
        idExpiry.textContent = gameState.currentVisitor.expiryYear;
    }

    if (gameState.hasFakeStamp) {
        const fakeStamp = fakeStamps[Math.floor(Math.random() * fakeStamps.length)];
        idStamp.textContent = fakeStamp;
        idStamp.style.color = '';
    } else {
        idStamp.textContent = 'D.D.D. JÓVÁHAGYOTT';
        idStamp.style.color = '';
    }

    // Realistic Stamp Effect
    const rotation = Math.random() * 10 - 5; // -5 to +5 degrees
    const opacity = 0.7 + Math.random() * 0.3; // 0.7 to 1.0 opacity
    idStamp.style.transform = `rotate(${rotation}deg)`;
    idStamp.style.opacity = opacity;

    askIdBtn.disabled = true;
    approveBtn.disabled = false;
    denyBtn.disabled = false;

    visitorSpeech.textContent = "Tessék, itt az igazolványom.";
}

function makeDecision(approve) {
    let correct = false;

    if (approve && !gameState.isImpostor) {
        correct = true;
        gameState.correctDecisions++;
        showFeedback("✓ Helyes! Valódi lakó.", "success");
    } else if (approve && gameState.isImpostor) {
        gameState.wrongDecisions++;
        gameState.allowedImposters++;
        gameOver("Egy doppelgänger bejutott az épületbe és... 💀");
        return;
    } else if (!approve && (gameState.isImpostor || gameState.isExpiredImpostor)) {
        correct = true;
        gameState.correctDecisions++;
        gameState.caughtImposters++;
        showFeedback("✓ Elfogva! Doppelgänger azonosítva!", "success");
    } else if (!approve && !gameState.isImpostor && !gameState.isExpiredImpostor) {
        gameState.wrongDecisions++;
        gameState.falseAlarms++;
        showFeedback("✗ Téves riasztás! Ez valódi lakó volt.", "error");

        // Trigger blood stains on false alarm
        setTimeout(triggerBloodStain, 1000);
    }

    if (!approve) {
        const alarmOverlay = document.getElementById('alarm-overlay');
        const shutter = document.getElementById('shutter');

        if (alarmOverlay) {
            alarmOverlay.classList.add('active');
            setTimeout(() => alarmOverlay.classList.remove('active'), 3000);
        }

        if (shutter) {
            shutter.classList.add('active');
        }
    }

    setTimeout(() => {
        resetVisitorArea();

        if (gameState.wrongDecisions >= 3) {
            gameOver("Túl sok hiba! Kirúgtak a munkából.");
        } else if (gameState.visitorsToday >= gameState.maxVisitorsPerDay) {
            endDay();
        } else {
            startAutoNextVisitor();
        }
    }, 1500);
}

function startAutoNextVisitor() {
    nextVisitorBtn.classList.add('hidden');
    let count = 3;
    waitingMessage.textContent = "Következő látogató érkezik...";

    const interval = setInterval(() => {
        waitingMessage.textContent = `Következő látogató érkezik... ${count}`;
        count--;

        if (count < 0) {
            clearInterval(interval);
            waitingMessage.textContent = "Várakozás a következő látogatóra...";
            spawnVisitor();
        }
    }, 1000);
}

function showFeedback(message, type) {
    visitorSpeech.textContent = message;
    visitorSpeech.style.background = type === 'success' ? '#2d5a27' : '#8b0000';
    visitorSpeech.style.color = '#fff';

    approveBtn.disabled = true;
    denyBtn.disabled = true;
}

function resetVisitorArea() {
    visitorContainer.classList.remove('active');
    noVisitor.classList.remove('hidden');
    visitorId.classList.add('hidden');
    noDocument.classList.remove('hidden');

    visitorSpeech.style.background = '';
    visitorSpeech.style.color = '';

    const xrayResult = document.getElementById('xray-result');
    if (xrayResult) {
        xrayResult.classList.add('hidden');
    }

    gameState.currentVisitor = null;
    gameState.documentShown = false;

    const shutter = document.getElementById('shutter');
    if (shutter) shutter.classList.remove('active');

    updateUI();
}

function triggerJumpscare() {
    jumpscareImg.src = gameState.currentVisitor.image;
    jumpscareEl.classList.remove('hidden');

    setTimeout(() => {
        jumpscareEl.classList.add('hidden');
        gameOver("Egy doppelgänger bejutott az épületbe és... 💀");
    }, 1500);
}

function endDay() {
    resetVisitorArea();

    const dayName = dayNames[gameState.day - 1];
    const summary = `🌙 ${dayName} vége!\n\n👥 ${gameState.visitorsToday} látogatót ellenőriztél\n✅ ${gameState.correctDecisions} helyes döntés\n❌ ${gameState.wrongDecisions} hibás döntés`;

    waitingMessage.textContent = summary;
    waitingMessage.style.color = '#000000ff';
    waitingMessage.style.fontWeight = 'bold';

    visitorContainer.classList.remove('active');
    noVisitor.classList.remove('hidden');

    if (gameState.day < 5) {
        nextVisitorBtn.textContent = 'KÖVETKEZŐ NAP';
        nextVisitorBtn.classList.remove('hidden');
    } else {
        victory();
    }
}

function startNextDay() {
    gameState.day++;
    gameState.visitorsToday = 0;
    gameState.impostorsToday = 0;
    gameState.visitedResidentsToday = [];
    gameState.selfCallsLeft = 1;
    gameState.roommateCallsLeft = 1;
    gameState.time = 8;

    nextVisitorBtn.textContent = 'START';

    visitorSpeech.style.whiteSpace = '';
    resetVisitorArea();
    updateUI();
}

function gameOver(reason) {
    gameScreen.classList.add('hidden');
    gameoverScreen.classList.remove('hidden');

    const bloodOverlay = document.getElementById('blood-overlay');
    const content = document.querySelector('.gameover-content');

    // Reset classes
    bloodOverlay.classList.remove('active');
    content.classList.remove('visible');

    // Trigger animation
    setTimeout(() => {
        bloodOverlay.classList.add('active');
        content.classList.add('visible');
    }, 100);

    gameoverTitle.textContent = "GAME OVER";
    gameoverTitle.style.color = "#8b0000";
    gameoverMessage.innerHTML = reason;

    updateFinalStats();
}

function victory() {
    gameScreen.classList.add('hidden');
    gameoverScreen.classList.remove('hidden');

    gameoverTitle.textContent = "GYŐZELEM!";
    gameoverTitle.style.color = "#2d5a27";
    gameoverMessage.innerHTML = "Gratulálok végigcsináltad az egész hetet nem lett neked kakó, kalap kabát!<br>Sikeres volt az első heted a D.D.D.-nél!";

    updateFinalStats();
}

function updateFinalStats() {
    finalCorrect.textContent = gameState.correctDecisions;
    finalCaught.textContent = gameState.caughtImposters;
    finalImposters.textContent = gameState.allowedImposters;
    finalFalse.textContent = gameState.falseAlarms;
}

function restartGame() {
    location.reload();
}

function togglePhoneMenu() {
    const menu = document.getElementById('phone-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function callSelf() {
    if (gameState.selfCallsLeft <= 0) {
        visitorSpeech.textContent = "Nincs több hívás mára!";
        return;
    }

    gameState.selfCallsLeft--;
    togglePhoneMenu();
    visitorSpeech.textContent = "📞 Tárcsázás (Saját szám)...";

    setTimeout(() => {
        if (gameState.isImpostor) {
            // 70% chance the real resident answers, 30% chance they don't
            if (Math.random() < 0.7) {
                visitorSpeech.textContent = "📞 Igen? Ki az? Én a szobámban vagyok.";
            } else {
                visitorSpeech.textContent = "📞 Kicsöng... de nem veszi fel senki.";
            }
        } else {
            visitorSpeech.textContent = "📞 Kicsöng... de nem veszi fel senki.";
        }
    }, 1500);
}

function callRoommate() {
    if (gameState.roommateCallsLeft <= 0) {
        visitorSpeech.textContent = "Nincs több hívás mára!";
        return;
    }

    gameState.roommateCallsLeft--;
    togglePhoneMenu();
    visitorSpeech.textContent = "📞 Tárcsázás (Lakótárs)...";

    setTimeout(() => {
        const roommate = residents.find(r => r.apartment === gameState.realResident.apartment && r.id !== gameState.realResident.id);

        if (gameState.isImpostor) {
            visitorSpeech.textContent = `📞 Szia! ${gameState.realResident.name}? De hát ő itt ül mellettem a kanapén!`;
        } else {
            visitorSpeech.textContent = `📞 Szia! Igen, ${gameState.realResident.name} épp most ment el otthonról.`;
        }
    }, 1500);
}

document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--cursor-x', e.clientX + 'px');
    document.documentElement.style.setProperty('--cursor-y', e.clientY + 'px');
});

init();

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

function openLightbox(imageSrc) {
    lightboxImg.src = imageSrc;
    lightbox.classList.remove('hidden');
}

function closeLightbox() {
    lightbox.classList.add('hidden');
}

visitorImage.addEventListener('click', () => {
    if (visitorImage.src && visitorImage.src !== window.location.href) {
        openLightbox(visitorImage.src);
    }
});

idPhotoImg.addEventListener('click', () => {
    if (idPhotoImg.src && idPhotoImg.src !== window.location.href) {
        openLightbox(idPhotoImg.src);
    }
});

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.classList.contains('hidden')) {
        closeLightbox();
    }
});

function getVisitorAnswer(questionType) {
    const visitor = gameState.currentVisitor;
    let answer = '';

    switch (questionType) {
        case 'name':
            answer = visitor.name + ' vagyok.';
            break;
        case 'apartment':
            answer = 'A ' + visitor.apartment + '-es lakásban lakom.';
            break;
        case 'job':
            answer = (visitor.realJob || visitor.job) + ' vagyok.';
            break;
        case 'birth':
            answer = (visitor.realBirthYear || visitor.birthYear) + '-ben születtem.';
            break;
        case 'origin':
            answer = (visitor.realOrigin || visitor.origin) + '-ról/ről származom.';
            break;
    }

    return answer;
}

function handleQuestionClick(e) {
    if (!e.target.classList.contains('question-btn')) return;


    const questionType = e.target.dataset.question;
    const answer = getVisitorAnswer(questionType);

    const allQuestionBtns = document.querySelectorAll('.question-btn');
    allQuestionBtns.forEach(btn => btn.disabled = true);

    visitorSpeech.textContent = '';
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < answer.length) {
            visitorSpeech.textContent += answer[i];
            i++;
        } else {
            clearInterval(typeInterval);
            allQuestionBtns.forEach(btn => btn.disabled = false);
        }
    }, 30);
}


function handleXray() {
    if (!gameState.currentVisitor) return;

    const xrayBtn = document.getElementById('xray-btn');
    const xrayResult = document.getElementById('xray-result');
    const xrayResultImg = document.getElementById('xray-result-img');

    xrayBtn.disabled = true;
    visitorImage.classList.add('xray-scanning');

    setTimeout(() => {
        visitorImage.classList.remove('xray-scanning');

        xrayResult.classList.remove('hidden');

        if (gameState.isXrayImpostor) {
            const badXrayImages = ['rosszxray1.png', 'rosszxray2.png', 'rosszxray3.png'];
            const randomBadXray = badXrayImages[Math.floor(Math.random() * badXrayImages.length)];
            xrayResultImg.src = randomBadXray;
        } else {
            xrayResultImg.src = 'xrayjo.png';
        }

    }, 1000);
}
const xrayResultImg = document.getElementById('xray-result-img');
if (xrayResultImg) {
    xrayResultImg.addEventListener('click', () => {
        if (xrayResultImg.src && xrayResultImg.src !== window.location.href && !xrayResultImg.parentElement.classList.contains('hidden')) {
            openLightbox(xrayResultImg.src);
        }
    });
}

function triggerBloodStain() {
    const container = document.getElementById('blood-container');
    if (!container) return;

    const stain = document.createElement('div');
    stain.className = 'blood-stain';

    const size = 60 + Math.random() * 40; // Smaller size for hands
    const x = Math.random() * (container.offsetWidth - size);
    const y = Math.random() * (container.offsetHeight - size);
    const rotation = Math.random() * 40 - 20;

    stain.style.width = `${size}px`;
    stain.style.height = `${size}px`;
    stain.style.left = `${x}px`;
    stain.style.top = `${y}px`;
    stain.style.transform = `rotate(${rotation}deg)`;

    container.appendChild(stain);

    // Remove from DOM after animation
    setTimeout(() => stain.remove(), 20000);
}

function triggerTemporaryLight() {
    gameState.isTemporaryLightOn = true;
    updateEnvironment();

    setTimeout(() => {
        gameState.isTemporaryLightOn = false;
        updateEnvironment();
    }, 20000); // 20 seconds
}

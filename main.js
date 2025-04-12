/**
 * Better AutoClicker - An enhanced mod for Cookie Clicker
 * © 2025 Teyko / Théo Vln
 *
 * This work is licensed under CC BY-NC-SA 4.0
 * https://creativecommons.org/licenses/by-nc-sa/4.0/
 *
 * You are free to:
 * - Share and adapt the material
 * Under the following terms:
 * - Attribution: You must give appropriate credit
 * - NonCommercial: You may not use this for commercial purposes
 * - ShareAlike: If you remix or transform, you must distribute under the same license
 */
Game.registerMod("betterautoclicker", {
    // Configuration variables
    clicksPerSecond: 10,          // Default clicks per second
    isActive: false,              // Initial state of the auto-clicker (disabled)
    clickInterval: null,          // Reference to the interval to be able to stop it
    clicksInBackground: true,     // Enable clicks when window is inactive
    centerAnimations: true,       // Center animations on the cookie
    originalMouseX: 0,            // Store original mouse coordinates
    originalMouseY: 0,            // To restore position after clicking
    clickGoldenCookies: true,     // Enable auto-click on golden cookies
    clickWrathCookies: false,     // Enable auto-click on wrath cookies
    goldenCheckInterval: null,    // Reference to the golden cookie check interval
    clickWrinklers: false,        // Enable auto-click on Wrinklers
    wrinklerClickDelay: 1000,     // Delay between clicks on Wrinklers (in ms)
    wrinklerCheckInterval: null,  // Reference to the wrinkler check interval
    panelX: 5,                   // Position X par défaut du panneau (pixels depuis la gauche)
    panelY: 'bottom',            // Position Y par défaut du panneau ('bottom' pour depuis le bas)
    panelOffsetY: 60,            // Décalage Y par défaut lorsque la position est 'bottom'
    isDragging: false,           // Indique si le panneau est en cours de déplacement
    dragOffsetX: 0,              // Décalage X lors du déplacement
    dragOffsetY: 0,              // Décalage Y lors du déplacement

    // Localization system integrated directly into the code because i don't know how to use the external file in the mod
    localization: {
        "EN": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Clicks per second:",
            "backgroundOption": "Click in background",
            "centerOption": "Centered animations",
            "goldenCookieOption": "Auto-click golden cookies",
            "activate": "Activate",
            "deactivate": "Deactivate",
            "keyboardHint": "Press A to toggle",
            "modLoaded": "Better AutoClicker mod loaded!",
            "modLoadedDesc": "With centered animations on the cookie",
            "autoClickerEnabled": "Better AutoClicker enabled",
            "autoClickerDisabled": "Better AutoClicker disabled",
            "autoClickerDisabledDesc": "Automatic mode has been stopped",
            "backgroundEnabled": "Background mode enabled",
            "backgroundDisabled": "Background mode disabled",
            "backgroundWill": "The auto-clicker will continue",
            "backgroundWont": "The auto-clicker will not continue",
            "backgroundWhenInactive": "when window is inactive",
            "animationsEnabled": "Centered animations enabled",
            "animationsDisabled": "Centered animations disabled",
            "animationsWill": "Click animations will appear",
            "animationsWont": "Click animations will not appear",
            "atCookieCenter": "at the center of the cookie",
            "clicksPerSecDisplay": "{0} clicks/sec, {1} in background",
            "languageOption": "Mod language:",
            "languageChanged": "Mod language changed",
            "languageInfo": "You can change the mod language in the Options menu",
            "betterAutoClickerOptions": "Better AutoClicker Options",
            "goldenCookieEnabled": "Golden cookie auto-click enabled",
            "goldenCookieDisabled": "Golden cookie auto-click disabled",
            "goldenCookieClicked": "Auto-clicked a golden cookie!",
            "goldenCookiesWill": "Golden cookies will be clicked automatically",
            "goldenCookiesWont": "Golden cookies will not be clicked automatically",
            "wrathCookieOption": "Auto-click wrath cookies",
            "wrathCookieEnabled": "Wrath cookie auto-click enabled",
            "wrathCookieDisabled": "Wrath cookie auto-click disabled",
            "wrathCookieClicked": "Auto-clicked a wrath cookie!",
            "wrathCookiesWill": "Wrath cookies will be clicked automatically",
            "wrathCookiesWont": "Wrath cookies will not be clicked automatically",
            "wrinklerOption": "Auto-pop Wrinklers",
            "wrinklerClickEnabled": "Wrinkler auto-pop enabled",
            "wrinklerClickDisabled": "Wrinkler auto-pop disabled",
            "wrinklersWill": "Wrinklers will be popped automatically",
            "wrinklersWont": "Wrinklers will not be popped automatically",
            "wrinklerPopped": "Popped a wrinkler!",
            "wrinklerPoppedDesc": "Collected cookies from a wrinkler",
            "wrinklerClickDelay": "Click delay:",
            "wrinklerDelayChanged": "Wrinkler click delay changed",
            "wrinklerDelayChangedDesc": "Delay between clicks set to {0} ms"
        },
        "FR": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Clics par seconde :",
            "backgroundOption": "Cliquer en arrière-plan",
            "centerOption": "Animations centrées",
            "goldenCookieOption": "Auto-clic cookies dorés",
            "activate": "Activer",
            "deactivate": "Désactiver",
            "keyboardHint": "Appuyez sur A pour alterner",
            "modLoaded": "Mod Better AutoClicker chargé !",
            "modLoadedDesc": "Avec animations centrées sur le cookie",
            "autoClickerEnabled": "Better AutoClicker activé",
            "autoClickerDisabled": "Better AutoClicker désactivé",
            "autoClickerDisabledDesc": "Le mode automatique a été arrêté",
            "backgroundEnabled": "Mode arrière-plan activé",
            "backgroundDisabled": "Mode arrière-plan désactivé",
            "backgroundWill": "L'auto-clicker continuera",
            "backgroundWont": "L'auto-clicker ne continuera pas",
            "backgroundWhenInactive": "quand la fenêtre est inactive",
            "animationsEnabled": "Animations centrées activées",
            "animationsDisabled": "Animations centrées désactivées",
            "animationsWill": "Les animations de clics apparaîtront",
            "animationsWont": "Les animations de clics n'apparaîtront pas",
            "atCookieCenter": "au centre du cookie",
            "clicksPerSecDisplay": "{0} clics/sec, {1} en arrière-plan",
            "languageOption": "Langue du mod :",
            "languageChanged": "Langue du mod modifiée",
            "languageInfo": "Vous pouvez changer la langue du mod dans le menu Options",
            "betterAutoClickerOptions": "Options Better AutoClicker",
            "goldenCookieEnabled": "Auto-clic des cookies dorés activé",
            "goldenCookieDisabled": "Auto-clic des cookies dorés désactivé",
            "goldenCookieClicked": "Cookie doré cliqué automatiquement !",
            "goldenCookiesWill": "Les cookies dorés seront cliqués automatiquement",
            "goldenCookiesWont": "Les cookies dorés ne seront pas cliqués automatiquement",
            "wrathCookieOption": "Auto-clic cookies colériques",
            "wrathCookieEnabled": "Auto-clic des cookies colériques activé",
            "wrathCookieDisabled": "Auto-clic des cookies colériques désactivé",
            "wrathCookieClicked": "Cookie colérique cliqué automatiquement !",
            "wrathCookiesWill": "Les cookies colériques seront cliqués automatiquement",
            "wrathCookiesWont": "Les cookies colériques ne seront pas cliqués automatiquement",
            "wrinklerOption": "Auto-pop des rideux",
            "wrinklerClickEnabled": "Auto-pop des rideux activé",
            "wrinklerClickDisabled": "Auto-pop des rideux désactivé",
            "wrinklersWill": "Les rideux seront éclatés automatiquement",
            "wrinklersWont": "Les rideux ne seront pas éclatés automatiquement",
            "wrinklerPopped": "Éclaté un rideux !",
            "wrinklerPoppedDesc": "Cookies collectés d'un rideux",
            "wrinklerClickDelay": "Délai entre clics :",
            "wrinklerDelayChanged": "Délai des clics de rideux modifié",
            "wrinklerDelayChangedDesc": "Délai entre les clics défini à {0} ms"
        },
        "DE": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Klicks pro Sekunde:",
            "backgroundOption": "Im Hintergrund klicken",
            "centerOption": "Zentrierte Animationen",
            "goldenCookieOption": "Auto-Klick goldene Kekse",
            "activate": "Aktivieren",
            "deactivate": "Deaktivieren",
            "keyboardHint": "Drücke A zum Umschalten",
            "modLoaded": "Better AutoClicker-Mod geladen!",
            "modLoadedDesc": "Mit zentrierten Animationen auf dem Keks",
            "autoClickerEnabled": "Better AutoClicker aktiviert",
            "autoClickerDisabled": "Better AutoClicker deaktiviert",
            "autoClickerDisabledDesc": "Der automatische Modus wurde beendet",
            "backgroundEnabled": "Hintergrundmodus aktiviert",
            "backgroundDisabled": "Hintergrundmodus deaktiviert",
            "backgroundWill": "Der Auto-Klicker wird weiterlaufen",
            "backgroundWont": "Der Auto-Klicker wird nicht weiterlaufen",
            "backgroundWhenInactive": "wenn das Fenster inaktiv ist",
            "animationsEnabled": "Zentrierte Animationen aktiviert",
            "animationsDisabled": "Zentrierte Animationen deaktiviert",
            "animationsWill": "Klick-Animationen werden erscheinen",
            "animationsWont": "Klick-Animationen werden nicht erscheinen",
            "atCookieCenter": "in der Mitte des Kekses",
            "clicksPerSecDisplay": "{0} Klicks/Sek, {1} im Hintergrund",
            "languageOption": "Mod-Sprache:",
            "languageChanged": "Mod-Sprache geändert",
            "languageInfo": "Du kannst die Mod-Sprache im Optionsmenü ändern",
            "betterAutoClickerOptions": "Better AutoClicker Optionen",
            "goldenCookieEnabled": "Auto-Klick für goldene Kekse aktiviert",
            "goldenCookieDisabled": "Auto-Klick für goldene Kekse deaktiviert",
            "goldenCookieClicked": "Goldener Keks automatisch angeklickt!",
            "goldenCookiesWill": "Goldene Kekse werden automatisch angeklickt",
            "goldenCookiesWont": "Goldene Kekse werden nicht automatisch angeklickt",
            "wrathCookieOption": "Auto-Klick Zorn-Kekse",
            "wrathCookieEnabled": "Auto-Klick für Zorn-Kekse aktiviert",
            "wrathCookieDisabled": "Auto-Klick für Zorn-Kekse deaktiviert",
            "wrathCookieClicked": "Zorn-Keks automatisch angeklickt!",
            "wrathCookiesWill": "Zorn-Kekse werden automatisch angeklickt",
            "wrathCookiesWont": "Zorn-Kekse werden nicht automatisch angeklickt",
            "wrinklerOption": "Auto-Pop Falter",
            "wrinklerClickEnabled": "Falter Auto-Pop aktiviert",
            "wrinklerClickDisabled": "Falter Auto-Pop deaktiviert",
            "wrinklersWill": "Falter werden automatisch geplatzt",
            "wrinklersWont": "Falter werden nicht automatisch geplatzt",
            "wrinklerPopped": "Einen Falter geplatzt!",
            "wrinklerPoppedDesc": "Kekse von einem Falter gesammelt",
            "wrinklerClickDelay": "Klick-Verzögerung:",
            "wrinklerDelayChanged": "Falter-Klick-Verzögerung geändert",
            "wrinklerDelayChangedDesc": "Verzögerung zwischen Klicks auf {0} ms gesetzt"
        },
        "NL": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Klikken per seconde:",
            "backgroundOption": "Klikken op de achtergrond",
            "centerOption": "Gecentreerde animaties",
            "goldenCookieOption": "Auto-klik gouden koekjes",
            "activate": "Activeren",
            "deactivate": "Deactiveren",
            "keyboardHint": "Druk op A om te schakelen",
            "modLoaded": "Better AutoClicker mod geladen!",
            "modLoadedDesc": "Met gecentreerde animaties op de cookie",
            "autoClickerEnabled": "Better AutoClicker ingeschakeld",
            "autoClickerDisabled": "Better AutoClicker uitgeschakeld",
            "autoClickerDisabledDesc": "Automatische modus is gestopt",
            "backgroundEnabled": "Achtergrondmodus ingeschakeld",
            "backgroundDisabled": "Achtergrondmodus uitgeschakeld",
            "backgroundWill": "De auto-klikker zal doorgaan",
            "backgroundWont": "De auto-klikker zal niet doorgaan",
            "backgroundWhenInactive": "wanneer het venster inactief is",
            "animationsEnabled": "Gecentreerde animaties ingeschakeld",
            "animationsDisabled": "Gecentreerde animaties uitgeschakeld",
            "animationsWill": "Klikanimaties zullen verschijnen",
            "animationsWont": "Klikanimaties zullen niet verschijnen",
            "atCookieCenter": "in het midden van de cookie",
            "clicksPerSecDisplay": "{0} klikken/sec, {1} op de achtergrond",
            "languageOption": "Mod taal:",
            "languageChanged": "Mod taal gewijzigd",
            "languageInfo": "Je kunt de mod-taal wijzigen in het menu Opties",
            "betterAutoClickerOptions": "Better AutoClicker Opties",
            "goldenCookieEnabled": "Auto-klik voor gouden koekjes ingeschakeld",
            "goldenCookieDisabled": "Auto-klik voor gouden koekjes uitgeschakeld",
            "goldenCookieClicked": "Automatisch op een gouden koekje geklikt!",
            "goldenCookiesWill": "Gouden koekjes worden automatisch aangeklikt",
            "goldenCookiesWont": "Gouden koekjes worden niet automatisch aangeklikt",
            "wrathCookieOption": "Auto-klik boze koekjes",
            "wrathCookieEnabled": "Auto-klik voor boze koekjes ingeschakeld",
            "wrathCookieDisabled": "Auto-klik voor boze koekjes uitgeschakeld",
            "wrathCookieClicked": "Automatisch op een boos koekje geklikt!",
            "wrathCookiesWill": "Boze koekjes worden automatisch aangeklikt",
            "wrathCookiesWont": "Boze koekjes worden niet automatisch aangeklikt",
            "wrinklerOption": "Auto-pop Rimpelers",
            "wrinklerClickEnabled": "Rimpeler auto-pop ingeschakeld",
            "wrinklerClickDisabled": "Rimpeler auto-pop uitgeschakeld",
            "wrinklersWill": "Rimpelers worden automatisch geknapt",
            "wrinklersWont": "Rimpelers worden niet automatisch geknapt",
            "wrinklerPopped": "Een Rimpeler geknapt!",
            "wrinklerPoppedDesc": "Cookies verzameld van een Rimpeler",
            "wrinklerClickDelay": "Klikvertraging:",
            "wrinklerDelayChanged": "Rimpeler klikvertraging gewijzigd",
            "wrinklerDelayChangedDesc": "Vertraging tussen klikken ingesteld op {0} ms"
        },
        "CS": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Kliknutí za sekundu:",
            "backgroundOption": "Klikat na pozadí",
            "centerOption": "Centrované animace",
            "goldenCookieOption": "Auto-klik na zlaté sušenky",
            "activate": "Aktivovat",
            "deactivate": "Deaktivovat",
            "keyboardHint": "Stiskněte A pro přepnutí",
            "modLoaded": "Better AutoClicker mod načten!",
            "modLoadedDesc": "S centrovanými animacemi na sušence",
            "autoClickerEnabled": "Better AutoClicker povolen",
            "autoClickerDisabled": "Better AutoClicker zakázán",
            "autoClickerDisabledDesc": "Automatický režim byl zastaven",
            "backgroundEnabled": "Režim na pozadí povolen",
            "backgroundDisabled": "Režim na pozadí zakázán",
            "backgroundWill": "Auto-klikač bude pokračovat",
            "backgroundWont": "Auto-klikač nebude pokračovat",
            "backgroundWhenInactive": "když je okno neaktivní",
            "animationsEnabled": "Centrované animace povoleny",
            "animationsDisabled": "Centrované animace zakázány",
            "animationsWill": "Animace kliknutí se zobrazí",
            "animationsWont": "Animace kliknutí se nezobrazí",
            "atCookieCenter": "ve středu sušenky",
            "clicksPerSecDisplay": "{0} kliků/s, {1} na pozadí",
            "languageOption": "Jazyk modu:",
            "languageChanged": "Jazyk modu změněn",
            "languageInfo": "Jazyk modu můžete změnit v menu Možnosti",
            "betterAutoClickerOptions": "Možnosti Better AutoClicker",
            "goldenCookieEnabled": "Auto-klik na zlaté sušenky povolen",
            "goldenCookieDisabled": "Auto-klik na zlaté sušenky zakázán",
            "goldenCookieClicked": "Automaticky kliknuto na zlatou sušenku!",
            "goldenCookiesWill": "Zlaté sušenky budou automaticky kliknuty",
            "goldenCookiesWont": "Zlaté sušenky nebudou automaticky kliknuty",
            "wrathCookieOption": "Auto-klik na hněvivé sušenky",
            "wrathCookieEnabled": "Auto-klik na hněvivé sušenky povolen",
            "wrathCookieDisabled": "Auto-klik na hněvivé sušenky zakázán",
            "wrathCookieClicked": "Automaticky kliknuto na hněvivou sušenku!",
            "wrathCookiesWill": "Hněvivé sušenky budou automaticky kliknuty",
            "wrathCookiesWont": "Hněvivé sušenky nebudou automaticky kliknuty",
            "wrinklerOption": "Auto-pop Vráskavců",
            "wrinklerClickEnabled": "Auto-pop Vráskavců povolen",
            "wrinklerClickDisabled": "Auto-pop Vráskavců zakázán",
            "wrinklersWill": "Vráskavci budou automaticky prasknuti",
            "wrinklersWont": "Vráskavci nebudou automaticky prasknuti",
            "wrinklerPopped": "Prasknut Vráskavec!",
            "wrinklerPoppedDesc": "Sesbírány sušenky z Vráskavce",
            "wrinklerClickDelay": "Prodleva kliknutí:",
            "wrinklerDelayChanged": "Prodleva kliknutí na Vráskavce změněna",
            "wrinklerDelayChangedDesc": "Prodleva mezi kliknutími nastavena na {0} ms"
        },
        "PL": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Kliknięć na sekundę:",
            "backgroundOption": "Klikanie w tle",
            "centerOption": "Centrowane animacje",
            "goldenCookieOption": "Auto-klik złotych ciasteczek",
            "activate": "Aktywuj",
            "deactivate": "Dezaktywuj",
            "keyboardHint": "Naciśnij A, aby przełączyć",
            "modLoaded": "Mod Better AutoClicker załadowany!",
            "modLoadedDesc": "Z centrowanymi animacjami na ciastku",
            "autoClickerEnabled": "Better AutoClicker włączony",
            "autoClickerDisabled": "Better AutoClicker wyłączony",
            "autoClickerDisabledDesc": "Tryb automatyczny został zatrzymany",
            "backgroundEnabled": "Tryb działania w tle włączony",
            "backgroundDisabled": "Tryb działania w tle wyłączony",
            "backgroundWill": "Auto-klikacz będzie kontynuował",
            "backgroundWont": "Auto-klikacz nie będzie kontynuował",
            "backgroundWhenInactive": "gdy okno jest nieaktywne",
            "animationsEnabled": "Centrowane animacje włączone",
            "animationsDisabled": "Centrowane animacje wyłączone",
            "animationsWill": "Animacje kliknięć będą pojawiać się",
            "animationsWont": "Animacje kliknięć nie będą pojawiać się",
            "atCookieCenter": "w centrum ciastka",
            "clicksPerSecDisplay": "{0} kliknięć/s, {1} w tle",
            "languageOption": "Język moda:",
            "languageChanged": "Zmieniono język moda",
            "languageInfo": "Możesz zmienić język moda w menu Opcje",
            "betterAutoClickerOptions": "Opcje Better AutoClicker",
            "goldenCookieEnabled": "Auto-klik złotych ciasteczek włączony",
            "goldenCookieDisabled": "Auto-klik złotych ciasteczek wyłączony",
            "goldenCookieClicked": "Automatycznie kliknięto złote ciasteczko!",
            "goldenCookiesWill": "Złote ciasteczka będą automatycznie klikane",
            "goldenCookiesWont": "Złote ciasteczka nie będą automatycznie klikane",
            "wrathCookieOption": "Auto-klik gniewnych ciasteczek",
            "wrathCookieEnabled": "Auto-klik gniewnych ciasteczek włączony",
            "wrathCookieDisabled": "Auto-klik gniewnych ciasteczek wyłączony",
            "wrathCookieClicked": "Automatycznie kliknięto gniewne ciasteczko!",
            "wrathCookiesWill": "Gniewne ciasteczka będą automatycznie klikane",
            "wrathCookiesWont": "Gniewne ciasteczka nie będą automatycznie klikane",
            "wrinklerOption": "Auto-pop Pomarszczaczy",
            "wrinklerClickEnabled": "Auto-pop Pomarszczaczy włączony",
            "wrinklerClickDisabled": "Auto-pop Pomarszczaczy wyłączony",
            "wrinklersWill": "Pomarszczacze będą automatycznie pękać",
            "wrinklersWont": "Pomarszczacze nie będą automatycznie pękać",
            "wrinklerPopped": "Pęknięty Pomarszczacz!",
            "wrinklerPoppedDesc": "Zebrane ciasteczka z Pomarszczacza",
            "wrinklerClickDelay": "Opóźnienie kliknięcia:",
            "wrinklerDelayChanged": "Zmieniono opóźnienie kliknięcia Pomarszczacza",
            "wrinklerDelayChangedDesc": "Opóźnienie między kliknięciami ustawione na {0} ms"
        },
        "IT": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Click al secondo:",
            "backgroundOption": "Click in background",
            "centerOption": "Animazioni centrate",
            "goldenCookieOption": "Auto-click biscotti dorati",
            "activate": "Attiva",
            "deactivate": "Disattiva",
            "keyboardHint": "Premi A per alternare",
            "modLoaded": "Mod Better AutoClicker caricata!",
            "modLoadedDesc": "Con animazioni centrate sul biscotto",
            "autoClickerEnabled": "Better AutoClicker abilitato",
            "autoClickerDisabled": "Better AutoClicker disabilitato",
            "autoClickerDisabledDesc": "La modalità automatica è stata fermata",
            "backgroundEnabled": "Modalità background abilitata",
            "backgroundDisabled": "Modalità background disabilitata",
            "backgroundWill": "L'auto-clicker continuerà",
            "backgroundWont": "L'auto-clicker non continuerà",
            "backgroundWhenInactive": "quando la finestra è inattiva",
            "animationsEnabled": "Animazioni centrate abilitate",
            "animationsDisabled": "Animazioni centrate disabilitate",
            "animationsWill": "Le animazioni dei click appariranno",
            "animationsWont": "Le animazioni dei click non appariranno",
            "atCookieCenter": "al centro del biscotto",
            "clicksPerSecDisplay": "{0} click/sec, {1} in background",
            "languageOption": "Lingua della mod:",
            "languageChanged": "Lingua della mod cambiata",
            "languageInfo": "Puoi cambiare la lingua della mod nel menu Opzioni",
            "betterAutoClickerOptions": "Opzioni Better AutoClicker",
            "goldenCookieEnabled": "Auto-click biscotti dorati abilitato",
            "goldenCookieDisabled": "Auto-click biscotti dorati disabilitato",
            "goldenCookieClicked": "Cliccato automaticamente un biscotto dorato!",
            "goldenCookiesWill": "I biscotti dorati saranno cliccati automaticamente",
            "goldenCookiesWont": "I biscotti dorati non saranno cliccati automaticamente",
            "wrathCookieOption": "Auto-click biscotti dell'ira",
            "wrathCookieEnabled": "Auto-click biscotti dell'ira abilitato",
            "wrathCookieDisabled": "Auto-click biscotti dell'ira disabilitato",
            "wrathCookieClicked": "Cliccato automaticamente un biscotto dell'ira!",
            "wrathCookiesWill": "I biscotti dell'ira saranno cliccati automaticamente",
            "wrathCookiesWont": "I biscotti dell'ira non saranno cliccati automaticamente",
            "wrinklerOption": "Auto-pop Rugosi",
            "wrinklerClickEnabled": "Auto-pop Rugosi abilitato",
            "wrinklerClickDisabled": "Auto-pop Rugosi disabilitato",
            "wrinklersWill": "I Rugosi saranno scoppiati automaticamente",
            "wrinklersWont": "I Rugosi non saranno scoppiati automaticamente",
            "wrinklerPopped": "Scoppiato un Rugoso!",
            "wrinklerPoppedDesc": "Biscotti raccolti da un Rugoso",
            "wrinklerClickDelay": "Ritardo di clic:",
            "wrinklerDelayChanged": "Ritardo di clic dei Rugosi modificato",
            "wrinklerDelayChangedDesc": "Ritardo tra i clic impostato a {0} ms"
        },
        "ES": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Clics por segundo:",
            "backgroundOption": "Clic en segundo plano",
            "centerOption": "Animaciones centradas",
            "goldenCookieOption": "Auto-clic galletas doradas",
            "activate": "Activar",
            "deactivate": "Desactivar",
            "keyboardHint": "Presiona A para alternar",
            "modLoaded": "¡Mod Better AutoClicker cargado!",
            "modLoadedDesc": "Con animaciones centradas en la galleta",
            "autoClickerEnabled": "Better AutoClicker activado",
            "autoClickerDisabled": "Better AutoClicker desactivado",
            "autoClickerDisabledDesc": "El modo automático ha sido detenido",
            "backgroundEnabled": "Modo en segundo plano activado",
            "backgroundDisabled": "Modo en segundo plano desactivado",
            "backgroundWill": "El auto-clicker continuará",
            "backgroundWont": "El auto-clicker no continuará",
            "backgroundWhenInactive": "cuando la ventana esté inactiva",
            "animationsEnabled": "Animaciones centradas activadas",
            "animationsDisabled": "Animaciones centradas desactivadas",
            "animationsWill": "Las animaciones de clic aparecerán",
            "animationsWont": "Las animaciones de clic no aparecerán",
            "atCookieCenter": "en el centro de la galleta",
            "clicksPerSecDisplay": "{0} clics/seg, {1} en segundo plano",
            "languageOption": "Idioma del mod:",
            "languageChanged": "Idioma del mod cambiado",
            "languageInfo": "Puedes cambiar el idioma del mod en el menú Opciones",
            "betterAutoClickerOptions": "Opciones de Better AutoClicker",
            "goldenCookieEnabled": "Auto-clic de galletas doradas activado",
            "goldenCookieDisabled": "Auto-clic de galletas doradas desactivado",
            "goldenCookieClicked": "¡Galleta dorada clicada automáticamente!",
            "goldenCookiesWill": "Las galletas doradas serán clicadas automáticamente",
            "goldenCookiesWont": "Las galletas doradas no serán clicadas automáticamente",
            "wrathCookieOption": "Auto-clic galletas de ira",
            "wrathCookieEnabled": "Auto-clic de galletas de ira activado",
            "wrathCookieDisabled": "Auto-clic de galletas de ira desactivado",
            "wrathCookieClicked": "¡Galleta de ira clicada automáticamente!",
            "wrathCookiesWill": "Las galletas de ira serán clicadas automáticamente",
            "wrathCookiesWont": "Las galletas de ira no serán clicadas automáticamente",
            "wrinklerOption": "Auto-explotar Arrugadores",
            "wrinklerClickEnabled": "Auto-explotar Arrugadores activado",
            "wrinklerClickDisabled": "Auto-explotar Arrugadores desactivado",
            "wrinklersWill": "Los Arrugadores serán explotados automáticamente",
            "wrinklersWont": "Los Arrugadores no serán explotados automáticamente",
            "wrinklerPopped": "¡Explotado un Arrugador!",
            "wrinklerPoppedDesc": "Galletas recolectadas de un Arrugador",
            "wrinklerClickDelay": "Retardo de clic:",
            "wrinklerDelayChanged": "Retardo de clic de Arrugadores cambiado",
            "wrinklerDelayChangedDesc": "Retardo entre clics establecido en {0} ms"
        },
        "PT-BR": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Cliques por segundo:",
            "backgroundOption": "Clicar em segundo plano",
            "centerOption": "Animações centralizadas",
            "goldenCookieOption": "Auto-clicar cookies dourados",
            "activate": "Ativar",
            "deactivate": "Desativar",
            "keyboardHint": "Pressione A para alternar",
            "modLoaded": "Mod Better AutoClicker carregado!",
            "modLoadedDesc": "Com animações centralizadas no cookie",
            "autoClickerEnabled": "Better AutoClicker ativado",
            "autoClickerDisabled": "Better AutoClicker desativado",
            "autoClickerDisabledDesc": "O modo automático foi interrompido",
            "backgroundEnabled": "Modo em segundo plano ativado",
            "backgroundDisabled": "Modo em segundo plano desativado",
            "backgroundWill": "O auto-clicker continuará",
            "backgroundWont": "O auto-clicker não continuará",
            "backgroundWhenInactive": "quando a janela estiver inativa",
            "animationsEnabled": "Animações centralizadas ativadas",
            "animationsDisabled": "Animações centralizadas desativadas",
            "animationsWill": "As animações de clique aparecerão",
            "animationsWont": "As animações de clique não aparecerão",
            "atCookieCenter": "no centro do cookie",
            "clicksPerSecDisplay": "{0} cliques/seg, {1} em segundo plano",
            "languageOption": "Idioma do mod:",
            "languageChanged": "Idioma do mod alterado",
            "languageInfo": "Você pode alterar o idioma do mod no menu Opções",
            "betterAutoClickerOptions": "Opções do Better AutoClicker",
            "goldenCookieEnabled": "Auto-clique de cookies dourados ativado",
            "goldenCookieDisabled": "Auto-clique de cookies dourados desativado",
            "goldenCookieClicked": "Cookie dourado clicado automaticamente!",
            "goldenCookiesWill": "Os cookies dourados serão clicados automaticamente",
            "goldenCookiesWont": "Os cookies dourados não serão clicados automaticamente",
            "wrathCookieOption": "Auto-clicar cookies irados",
            "wrathCookieEnabled": "Auto-clique de cookies irados ativado",
            "wrathCookieDisabled": "Auto-clique de cookies irados desativado",
            "wrathCookieClicked": "Cookie irado clicado automaticamente!",
            "wrathCookiesWill": "Os cookies irados serão clicados automaticamente",
            "wrathCookiesWont": "Os cookies irados não serão clicados automaticamente",
            "wrinklerOption": "Auto-estourar Enrugadores",
            "wrinklerClickEnabled": "Auto-estourar Enrugadores ativado",
            "wrinklerClickDisabled": "Auto-estourar Enrugadores desativado",
            "wrinklersWill": "Os Enrugadores serão estourados automaticamente",
            "wrinklersWont": "Os Enrugadores não serão estourados automaticamente",
            "wrinklerPopped": "Estourou um Enrugador!",
            "wrinklerPoppedDesc": "Cookies coletados de um Enrugador",
            "wrinklerClickDelay": "Atraso de clique:",
            "wrinklerDelayChanged": "Atraso de clique de Enrugadores alterado",
            "wrinklerDelayChangedDesc": "Atraso entre cliques definido para {0} ms"
        },
        "ZH-CN": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "每秒点击次数：",
            "backgroundOption": "后台点击",
            "centerOption": "居中动画",
            "goldenCookieOption": "自动点击黄金饼干",
            "activate": "激活",
            "deactivate": "停用",
            "keyboardHint": "按A键切换",
            "modLoaded": "Better AutoClicker Mod已加载！",
            "modLoadedDesc": "带有饼干居中动画",
            "autoClickerEnabled": "Better AutoClicker已启用",
            "autoClickerDisabled": "Better AutoClicker已禁用",
            "autoClickerDisabledDesc": "自动模式已停止",
            "backgroundEnabled": "后台模式已启用",
            "backgroundDisabled": "后台模式已禁用",
            "backgroundWill": "自动点击器将继续",
            "backgroundWont": "自动点击器将不会继续",
            "backgroundWhenInactive": "当窗口处于非活动状态时",
            "animationsEnabled": "居中动画已启用",
            "animationsDisabled": "居中动画已禁用",
            "animationsWill": "点击动画将出现",
            "animationsWont": "点击动画将不会出现",
            "atCookieCenter": "在饼干中心",
            "clicksPerSecDisplay": "每秒{0}次点击，后台{1}",
            "languageOption": "模组语言：",
            "languageChanged": "模组语言已更改",
            "languageInfo": "您可以在选项菜单中更改模组语言",
            "betterAutoClickerOptions": "Better AutoClicker 选项",
            "goldenCookieEnabled": "自动点击黄金饼干已启用",
            "goldenCookieDisabled": "自动点击黄金饼干已禁用",
            "goldenCookieClicked": "自动点击了一个黄金饼干！",
            "goldenCookiesWill": "黄金饼干将被自动点击",
            "goldenCookiesWont": "黄金饼干将不会被自动点击",
            "wrathCookieOption": "自动点击愤怒饼干",
            "wrathCookieEnabled": "自动点击愤怒饼干已启用",
            "wrathCookieDisabled": "自动点击愤怒饼干已禁用",
            "wrathCookieClicked": "自动点击了一个愤怒饼干！",
            "wrathCookiesWill": "愤怒饼干将被自动点击",
            "wrathCookiesWont": "愤怒饼干将不会被自动点击",
            "wrinklerOption": "自动弹皱纹怪",
            "wrinklerClickEnabled": "皱纹怪自动弹起已启用",
            "wrinklerClickDisabled": "皱纹怪自动弹起已禁用",
            "wrinklersWill": "皱纹怪将被自动弹起",
            "wrinklersWont": "皱纹怪将不会被自动弹起",
            "wrinklerPopped": "弹起了一个皱纹怪！",
            "wrinklerPoppedDesc": "从皱纹怪收集了饼干",
            "wrinklerClickDelay": "点击延迟：",
            "wrinklerDelayChanged": "皱纹怪点击延迟已更改",
            "wrinklerDelayChangedDesc": "点击间隔设置为 {0} 毫秒"
        },
        "JA": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "毎秒クリック数：",
            "backgroundOption": "バックグラウンドでクリック",
            "centerOption": "中央寄せアニメーション",
            "goldenCookieOption": "ゴールデンクッキー自動クリック",
            "activate": "有効化",
            "deactivate": "無効化",
            "keyboardHint": "Aキーで切り替え",
            "modLoaded": "Better AutoClicker Mod読み込み完了！",
            "modLoadedDesc": "クッキー中央のアニメーション付き",
            "autoClickerEnabled": "Better AutoClicker有効",
            "autoClickerDisabled": "Better AutoClicker無効",
            "autoClickerDisabledDesc": "自動モードが停止しました",
            "backgroundEnabled": "バックグラウンドモード有効",
            "backgroundDisabled": "バックグラウンドモード無効",
            "backgroundWill": "オートクリッカーは継続します",
            "backgroundWont": "オートクリッカーは継続しません",
            "backgroundWhenInactive": "ウィンドウが非アクティブの時",
            "animationsEnabled": "中央寄せアニメーション有効",
            "animationsDisabled": "中央寄せアニメーション無効",
            "animationsWill": "クリックアニメーションは表示されます",
            "animationsWont": "クリックアニメーションは表示されません",
            "atCookieCenter": "クッキーの中央に",
            "clicksPerSecDisplay": "毎秒{0}クリック、バックグラウンドで{1}",
            "languageOption": "Mod言語：",
            "languageChanged": "Mod言語が変更されました",
            "languageInfo": "オプションメニューでMod言語を変更できます",
            "betterAutoClickerOptions": "Better AutoClicker オプション",
            "goldenCookieEnabled": "ゴールデンクッキー自動クリック有効",
            "goldenCookieDisabled": "ゴールデンクッキー自動クリック無効",
            "goldenCookieClicked": "ゴールデンクッキーを自動クリックしました！",
            "goldenCookiesWill": "ゴールデンクッキーは自動的にクリックされます",
            "goldenCookiesWont": "ゴールデンクッキーは自動的にクリックされません",
            "wrathCookieOption": "怒りのクッキー自動クリック",
            "wrathCookieEnabled": "怒りのクッキー自動クリック有効",
            "wrathCookieDisabled": "怒りのクッキー自動クリック無効",
            "wrathCookieClicked": "怒りのクッキーを自動クリックしました！",
            "wrathCookiesWill": "怒りのクッキーは自動的にクリックされます",
            "wrathCookiesWont": "怒りのクッキーは自動的にクリックされません",
            "wrinklerOption": "リンクラー自動破裂",
            "wrinklerClickEnabled": "リンクラー自動破裂が有効",
            "wrinklerClickDisabled": "リンクラー自動破裂が無効",
            "wrinklersWill": "リンクラーは自動的に破裂します",
            "wrinklersWont": "リンクラーは自動的に破裂しません",
            "wrinklerPopped": "リンクラーを破裂させました！",
            "wrinklerPoppedDesc": "リンクラーからクッキーを回収しました",
            "wrinklerClickDelay": "クリック遅延：",
            "wrinklerDelayChanged": "リンクラークリック遅延が変更されました",
            "wrinklerDelayChangedDesc": "クリック間の遅延が {0} ミリ秒に設定されました"
        },
        "KO": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "초당 클릭 수:",
            "backgroundOption": "백그라운드에서 클릭",
            "centerOption": "중앙 정렬 애니메이션",
            "goldenCookieOption": "황금 쿠키 자동 클릭",
            "activate": "활성화",
            "deactivate": "비활성화",
            "keyboardHint": "A키를 눌러 전환",
            "modLoaded": "Better AutoClicker 모드 로드됨!",
            "modLoadedDesc": "쿠키 중앙에 애니메이션 효과",
            "autoClickerEnabled": "Better AutoClicker 활성화됨",
            "autoClickerDisabled": "Better AutoClicker 비활성화됨",
            "autoClickerDisabledDesc": "자동 모드가 중지되었습니다",
            "backgroundEnabled": "백그라운드 모드 활성화됨",
            "backgroundDisabled": "백그라운드 모드 비활성화됨",
            "backgroundWill": "자동 클리커가 계속 작동합니다",
            "backgroundWont": "자동 클리커가 계속 작동하지 않습니다",
            "backgroundWhenInactive": "창이 비활성 상태일 때",
            "animationsEnabled": "중앙 정렬 애니메이션 활성화됨",
            "animationsDisabled": "중앙 정렬 애니메이션 비활성화됨",
            "animationsWill": "클릭 애니메이션이 나타납니다",
            "animationsWont": "클릭 애니메이션이 나타나지 않습니다",
            "atCookieCenter": "쿠키 중앙에",
            "clicksPerSecDisplay": "초당 {0}회 클릭, 백그라운드에서 {1}",
            "languageOption": "모드 언어:",
            "languageChanged": "모드 언어가 변경되었습니다",
            "languageInfo": "옵션 메뉴에서 모드 언어를 변경할 수 있습니다",
            "betterAutoClickerOptions": "Better AutoClicker 옵션",
            "goldenCookieEnabled": "황금 쿠키 자동 클릭 활성화됨",
            "goldenCookieDisabled": "황금 쿠키 자동 클릭 비활성화됨",
            "goldenCookieClicked": "황금 쿠키를 자동으로 클릭했습니다!",
            "goldenCookiesWill": "황금 쿠키가 자동으로 클릭됩니다",
            "goldenCookiesWont": "황금 쿠키가 자동으로 클릭되지 않습니다",
            "wrathCookieOption": "분노 쿠키 자동 클릭",
            "wrathCookieEnabled": "분노 쿠키 자동 클릭 활성화됨",
            "wrathCookieDisabled": "분노 쿠키 자동 클릭 비활성화됨",
            "wrathCookieClicked": "분노 쿠키를 자동으로 클릭했습니다!",
            "wrathCookiesWill": "분노 쿠키가 자동으로 클릭됩니다",
            "wrathCookiesWont": "분노 쿠키가 자동으로 클릭되지 않습니다",
            "wrinklerOption": "주름벌레 자동 터뜨리기",
            "wrinklerClickEnabled": "주름벌레 자동 터뜨리기 활성화됨",
            "wrinklerClickDisabled": "주름벌레 자동 터뜨리기 비활성화됨",
            "wrinklersWill": "주름벌레가 자동으로 터집니다",
            "wrinklersWont": "주름벌레가 자동으로 터지지 않습니다",
            "wrinklerPopped": "주름벌레를 터뜨렸습니다!",
            "wrinklerPoppedDesc": "주름벌레에서 쿠키를 수집했습니다",
            "wrinklerClickDelay": "클릭 지연:",
            "wrinklerDelayChanged": "주름벌레 클릭 지연이 변경되었습니다",
            "wrinklerDelayChangedDesc": "클릭 사이의 지연이 {0}ms로 설정되었습니다"
        },
        "RU": {
            "modTitle": "Better AutoClicker",
            "clicksPerSecond": "Кликов в секунду:",
            "backgroundOption": "Клик в фоновом режиме",
            "centerOption": "Центрированные анимации",
            "goldenCookieOption": "Авто-клик золотых печений",
            "activate": "Активировать",
            "deactivate": "Деактивировать",
            "keyboardHint": "Нажмите A для переключения",
            "modLoaded": "Мод Better AutoClicker загружен!",
            "modLoadedDesc": "С центрированными анимациями на печенье",
            "autoClickerEnabled": "Better AutoClicker включен",
            "autoClickerDisabled": "Better AutoClicker выключен",
            "autoClickerDisabledDesc": "Автоматический режим остановлен",
            "backgroundEnabled": "Фоновый режим включен",
            "backgroundDisabled": "Фоновый режим выключен",
            "backgroundWill": "Авто-кликер продолжит работу",
            "backgroundWont": "Авто-кликер не будет продолжать работу",
            "backgroundWhenInactive": "когда окно неактивно",
            "animationsEnabled": "Центрированные анимации включены",
            "animationsDisabled": "Центрированные анимации выключены",
            "animationsWill": "Анимации кликов будут появляться",
            "animationsWont": "Анимации кликов не будут появляться",
            "atCookieCenter": "в центре печенья",
            "clicksPerSecDisplay": "{0} кликов/сек, {1} в фоновом режиме",
            "languageOption": "Язык мода:",
            "languageChanged": "Язык мода изменен",
            "languageInfo": "Вы можете изменить язык мода в меню Настройки",
            "betterAutoClickerOptions": "Настройки Better AutoClicker",
            "goldenCookieEnabled": "Авто-клик золотых печений включен",
            "goldenCookieDisabled": "Авто-клик золотых печений выключен",
            "goldenCookieClicked": "Золотое печенье автоматически кликнуто!",
            "goldenCookiesWill": "Золотые печенья будут автоматически кликнуты",
            "goldenCookiesWont": "Золотые печенья не будут автоматически кликнуты",
            "wrathCookieOption": "Авто-клик печений гнева",
            "wrathCookieEnabled": "Авто-клик печений гнева включен",
            "wrathCookieDisabled": "Авто-клик печений гнева выключен",
            "wrathCookieClicked": "Печенье гнева автоматически кликнуто!",
            "wrathCookiesWill": "Печенья гнева будут автоматически кликнуты",
            "wrathCookiesWont": "Печенья гнева не будут автоматически кликнуты",
            "wrinklerOption": "Авто-лопание Морщунов",
            "wrinklerClickEnabled": "Авто-лопание Морщунов включено",
            "wrinklerClickDisabled": "Авто-лопание Морщунов выключено",
            "wrinklersWill": "Морщуны будут автоматически лопаться",
            "wrinklersWont": "Морщуны не будут автоматически лопаться",
            "wrinklerPopped": "Лопнул Морщун!",
            "wrinklerPoppedDesc": "Собраны печеньки из Морщуна",
            "wrinklerClickDelay": "Задержка клика:",
            "wrinklerDelayChanged": "Задержка клика по Морщунам изменена",
            "wrinklerDelayChangedDesc": "Задержка между кликами установлена на {0} мс"
        }
    },

    // List of available languages for the selector
    userLanguage: 'EN',
    availableLanguages: [
        {code: 'EN', name: 'English'},
        {code: 'FR', name: 'Français'},
        {code: 'DE', name: 'Deutsch'},
        {code: 'NL', name: 'Nederlands'},
        {code: 'CS', name: 'Česky'},
        {code: 'PL', name: 'Polski'},
        {code: 'IT', name: 'Italiano'},
        {code: 'ES', name: 'Español'},
        {code: 'PT-BR', name: 'Português'},
        {code: 'ZH-CN', name: '中文'},
        {code: 'JA', name: '日本語'},
        {code: 'KO', name: '한국어'},
        {code: 'RU', name: 'Русский'}
    ],

    /**
     * Mod initialization
     * This function is automatically called by the game when loading the mod
     */
    init: function() {
        // Track the actual mouse position
        let self = this;
        document.addEventListener('mousemove', function(e) {
            self.originalMouseX = e.clientX;
            self.originalMouseY = e.clientY;
        });

        // Create the mod's user interface (after a short delay to ensure everything is loaded)
        setTimeout(() => {
            this.createModUI();

            // Register keyboard shortcut
            this.registerKeyboardShortcut();

            // Initialization notification
            Game.Notify(
                this.getText('modLoaded'),
                this.getText('modLoadedDesc'),
                [16, 5]
            );

            // Add mod to the game's Options menu
            this.injectGameOptions();
        }, 1000);

        // Handle window events (focus/blur)
        window.addEventListener('blur', () => {
            // Continue clicking even when the window loses focus
            if (this.isActive && this.clicksInBackground) {
                console.log("Window in background, clicks continuing");
            }
        });
    },

    /**
     * Gets the current mod language based on preferences
     * @returns {string} Language code ('EN', 'FR', etc.)
     */
    getLanguage: function() {
        // If the user has chosen a specific language (different from 'auto')
        if (this.userLanguage !== 'auto' && this.localization && this.localization[this.userLanguage]) {
            return this.userLanguage;
        }

        // Otherwise, use the game language if available
        if (Game.language && this.localization && this.localization[Game.language]) {
            return Game.language;
        }

        // Fallback to English if no other option is viable
        return 'EN';
    },

    /**
     * Sets the user language and updates the interface
     * @param {string} langCode - Language code ('EN', 'FR', etc. or 'auto')
     */
    setLanguage: function(langCode) {
        console.log("Setting language to:", langCode);

        // Save the new language
        this.userLanguage = langCode;

        // Check that we have translations for this language
        if (this.localization && this.localization[langCode]) {
            console.log("Translations available for:", langCode);
        } else if (langCode !== 'auto') {
            console.warn("No translations found for:", langCode);
        }

        // Update interface elements
        this.updateUILanguage();

        // Notification of language change
        Game.Notify(
            this.getText('languageChanged'),
            this.getText('languageInfo'),
            [16, 5],
            3
        );
    },

    /**
     * Updates the user interface with the current language
     */
    updateUILanguage: function() {
        console.log("Updating UI to language: " + this.getLanguage());

        // Radical strategy: Remove and recreate the interface
        const oldMenu = document.getElementById('betterAutoClickerMenu');
        if (oldMenu) {
            oldMenu.remove();
        }

        // Recreate the interface with new translations
        this.createModUI();

        // Update options in the game menu
        if (Game.onMenu === 'prefs') {
            // Force an update of the Options menu
            Game.UpdateMenu();
        }
    },

    /**
     * Retrieves a translation by its key in the current language
     * @param {string} key - Translation key
     * @returns {string} Translated text
     */
    getText: function(key) {
        const lang = this.getLanguage();
        if (this.localization && this.localization[lang] && this.localization[lang][key]) {
            return this.localization[lang][key];
        }
        // Fallback to English if translation doesn't exist
        if (this.localization && this.localization['EN'] && this.localization['EN'][key]) {
            return this.localization['EN'][key];
        }
        return key; // Last resort: return the key itself
    },

    /**
     * Replaces parameters in a string
     * @param {string} str - String with placeholders {0}, {1}, etc.
     * @param {...*} args - Arguments to insert
     * @returns {string} Formatted string
     */
    formatString: function(str, ...args) {
        return str.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    },

    /**
     * Injects mod options into the game's Options menu
     */
    injectGameOptions: function() {
        // Ensure Game.customOptionsMenu exists
        if (!Game.customOptionsMenu) {
            Game.customOptionsMenu = [];
        }

        // Reference to our mod instance
        let self = this;

        // Add our options to the menu, following the example style
        Game.customOptionsMenu.push(() => {
            // Create a main container with style
            let box = document.createElement("div");
            box.className = "listing";
            box.style.border = "1px solid #333";
            box.style.padding = "10px";
            box.style.marginBottom = "15px";

            // Section title
            let title = document.createElement("div");
            title.className = "title";
            title.textContent = this.getText('betterAutoClickerOptions');
            box.appendChild(title);

            // Language options section
            let langBox = document.createElement("div");
            langBox.className = "listing";
            langBox.style.border = "1px solid #333";
            langBox.style.padding = "10px";
            langBox.style.marginBottom = "10px";

            // Create label and selector
            let langDiv = document.createElement("div");
            langDiv.className = "listing";

            let langLabel = document.createElement("span");
            langLabel.textContent = this.getText('languageOption') + " ";
            langDiv.appendChild(langLabel);

            // Language selector
            let langSelect = document.createElement("select");
            langSelect.style.marginLeft = "10px";
            langSelect.style.width = "200px";

            // Add options to the selector
            this.availableLanguages.forEach(lang => {
                let option = document.createElement("option");
                option.value = lang.code;
                option.textContent = lang.name;
                option.selected = this.userLanguage === lang.code;
                langSelect.appendChild(option);
            });

            // Listen for language changes
            langSelect.addEventListener("change", () => {
                this.setLanguage(langSelect.value);
            });

            langDiv.appendChild(langSelect);
            langBox.appendChild(langDiv);
            box.appendChild(langBox);

            // Add directly to the game menu
            l('menu').appendChild(box);
        });

        // Force update of Options menu if it's currently open
        if (Game.onMenu === 'prefs') {
            Game.UpdateMenu();
        }
    },

    /**
     * Creates the mod's user interface
     */
    createModUI: function() {
        // Create the mod control panel
        let modMenu = document.createElement('div');
        modMenu.id = 'betterAutoClickerMenu';
        modMenu.className = 'framed';
        modMenu.style.cssText = `
            position: absolute;
            left: ${this.panelX}px;
            ${this.panelY === 'bottom' ? 'bottom: ' + this.panelOffsetY + 'px' : 'top: ' + this.panelOffsetY + 'px'};
            padding: 10px;
            background: rgba(0, 0, 0, 0.7);
            border: 2px solid #C0B070;
            border-radius: 5px;
            z-index: 10000;
            font-family: 'Merriweather', serif;
        `;

        // Ajoute une poignée de déplacement en haut
        let dragHandle = document.createElement('div');
        dragHandle.id = 'betterAutoClickerDragHandle';
        dragHandle.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 20px;
            cursor: move;
        `;
        modMenu.appendChild(dragHandle);

        // Mod title
        let title = document.createElement('div');
        title.textContent = this.getText('modTitle');
        title.id = 'betterAutoClickerTitle';
        title.className = 'title';
        title.style.cssText = `
            font-size: 16px;
            margin-bottom: 5px;
            color: #FFF;
            text-align: center;
            cursor: move;
        `;
        modMenu.appendChild(title);

        // Speed control
        let speedControl = document.createElement('div');
        speedControl.style.marginTop = '5px';
        speedControl.style.marginBottom = '8px';

        // Label
        let speedLabel = document.createElement('span');
        speedLabel.id = 'betterAutoClickerSpeedLabel';
        speedLabel.textContent = this.getText('clicksPerSecond') + ' ';
        speedLabel.style.color = '#FFF';
        speedControl.appendChild(speedLabel);

        // Speed input
        let speedInput = document.createElement('input');
        speedInput.type = 'number';
        speedInput.id = 'autoClickerSpeed';
        speedInput.min = '1';
        speedInput.max = '100';
        speedInput.value = this.clicksPerSecond;
        speedInput.style.width = '40px';
        speedInput.style.marginLeft = '5px';
        speedInput.addEventListener('change', () => {
            const newSpeed = parseInt(speedInput.value, 10);
            if (newSpeed >= 1 && newSpeed <= 100) {
                this.clicksPerSecond = newSpeed;
                if (this.isActive) {
                    // Update currently running interval
                    this.stopAutoClicker();
                    this.startAutoClicker();
                }
            }
        });
        speedControl.appendChild(speedInput);
        modMenu.appendChild(speedControl);

        // Option for background clicking
        let backgroundOption = document.createElement('div');
        backgroundOption.style.marginTop = '8px';
        backgroundOption.style.marginBottom = '8px';

        // Create checkbox for background
        let backgroundCheck = document.createElement('input');
        backgroundCheck.type = 'checkbox';
        backgroundCheck.id = 'backgroundClicking';
        backgroundCheck.checked = this.clicksInBackground;
        backgroundCheck.addEventListener('change', () => {
            this.clicksInBackground = backgroundCheck.checked;
            Game.Notify(
                this.getText(this.clicksInBackground ? 'backgroundEnabled' : 'backgroundDisabled'),
                this.getText(this.clicksInBackground ? 'backgroundWill' : 'backgroundWont') + ' ' +
                this.getText('backgroundWhenInactive'),
                [0, this.clicksInBackground ? 2 : 3],
                2
            );
        });
        backgroundOption.appendChild(backgroundCheck);

        // Label for background checkbox
        let backgroundLabel = document.createElement('label');
        backgroundLabel.id = 'betterAutoClickerBackgroundLabel';
        backgroundLabel.htmlFor = 'backgroundClicking';
        backgroundLabel.textContent = ' ' + this.getText('backgroundOption');
        backgroundLabel.style.color = '#FFF';
        backgroundOption.appendChild(backgroundLabel);

        modMenu.appendChild(backgroundOption);

        // Option for centering animations
        let centerOption = document.createElement('div');
        centerOption.style.marginTop = '8px';
        centerOption.style.marginBottom = '8px';

        // Create checkbox for centering animations
        let centerCheck = document.createElement('input');
        centerCheck.type = 'checkbox';
        centerCheck.id = 'centerAnimations';
        centerCheck.checked = this.centerAnimations;
        centerCheck.addEventListener('change', () => {
            this.centerAnimations = centerCheck.checked;
            Game.Notify(
                this.getText(this.centerAnimations ? 'animationsEnabled' : 'animationsDisabled'),
                this.getText(this.centerAnimations ? 'animationsWill' : 'animationsWont') + ' ' +
                this.getText('atCookieCenter'),
                [0, this.centerAnimations ? 2 : 3],
                2
            );
        });
        centerOption.appendChild(centerCheck);

        // Label for centering checkbox
        let centerLabel = document.createElement('label');
        centerLabel.id = 'betterAutoClickerCenterLabel';
        centerLabel.htmlFor = 'centerAnimations';
        centerLabel.textContent = ' ' + this.getText('centerOption');
        centerLabel.style.color = '#FFF';
        centerOption.appendChild(centerLabel);

        modMenu.appendChild(centerOption);

        // Option for golden cookies
        let goldenOption = document.createElement('div');
        goldenOption.style.marginTop = '8px';
        goldenOption.style.marginBottom = '8px';

        // Create checkbox for golden cookies
        let goldenCheck = document.createElement('input');
        goldenCheck.type = 'checkbox';
        goldenCheck.id = 'goldenCookieClicking';
        goldenCheck.checked = this.clickGoldenCookies;
        goldenCheck.addEventListener('change', () => {
            this.clickGoldenCookies = goldenCheck.checked;
            Game.Notify(
                this.getText(this.clickGoldenCookies ? 'goldenCookieEnabled' : 'goldenCookieDisabled'),
                this.getText(this.clickGoldenCookies ? 'goldenCookiesWill' : 'goldenCookiesWont'),
                [0, this.clickGoldenCookies ? 2 : 3],
                2
            );

            // Start or stop golden cookie checking
            if (this.isActive) {
                if (this.clickGoldenCookies) {
                    this.startGoldenCookieChecker();
                } else {
                    this.stopGoldenCookieChecker();
                }
            }
        });
        goldenOption.appendChild(goldenCheck);

        // Label for golden cookie checkbox
        let goldenLabel = document.createElement('label');
        goldenLabel.id = 'betterAutoClickerGoldenLabel';
        goldenLabel.htmlFor = 'goldenCookieClicking';
        goldenLabel.textContent = ' ' + this.getText('goldenCookieOption');
        goldenLabel.style.color = '#FFF';
        goldenOption.appendChild(goldenLabel);

        modMenu.appendChild(goldenOption);

        // Option for wrath cookies
        let wrathOption = document.createElement('div');
        wrathOption.style.marginTop = '8px';
        wrathOption.style.marginBottom = '8px';

        // Create checkbox for wrath cookies
        let wrathCheck = document.createElement('input');
        wrathCheck.type = 'checkbox';
        wrathCheck.id = 'wrathCookieClicking';
        wrathCheck.checked = this.clickWrathCookies;
        wrathCheck.addEventListener('change', () => {
            this.clickWrathCookies = wrathCheck.checked;
            Game.Notify(
                this.getText(this.clickWrathCookies ? 'wrathCookieEnabled' : 'wrathCookieDisabled'),
                this.getText(this.clickWrathCookies ? 'wrathCookiesWill' : 'wrathCookiesWont'),
                [0, this.clickWrathCookies ? 2 : 3],
                2
            );
        });
        wrathOption.appendChild(wrathCheck);

        // Label for wrath cookie checkbox
        let wrathLabel = document.createElement('label');
        wrathLabel.id = 'betterAutoClickerWrathLabel';
        wrathLabel.htmlFor = 'wrathCookieClicking';
        wrathLabel.textContent = ' ' + this.getText('wrathCookieOption');
        wrathLabel.style.color = '#FFF';
        wrathOption.appendChild(wrathLabel);

        modMenu.appendChild(wrathOption);

        // Option for clicking Wrinklers
        let wrinklerOption = document.createElement('div');
        wrinklerOption.style.marginTop = '8px';
        wrinklerOption.style.marginBottom = '8px';

        // Create checkbox for Wrinklers
        let wrinklerCheck = document.createElement('input');
        wrinklerCheck.type = 'checkbox';
        wrinklerCheck.id = 'wrinklerClicking';
        wrinklerCheck.checked = this.clickWrinklers;
        wrinklerCheck.addEventListener('change', () => {
            this.clickWrinklers = wrinklerCheck.checked;
            Game.Notify(
                this.getText(this.clickWrinklers ? 'wrinklerClickEnabled' : 'wrinklerClickDisabled'),
                this.getText(this.clickWrinklers ? 'wrinklersWill' : 'wrinklersWont'),
                [0, this.clickWrinklers ? 2 : 3],
                2
            );

            // Start or stop Wrinkler checking
            if (this.isActive) {
                if (this.clickWrinklers) {
                    this.startWrinklerChecker();
                } else {
                    this.stopWrinklerChecker();
                }
            }
        });
        wrinklerOption.appendChild(wrinklerCheck);

        // Label for Wrinkler checkbox
        let wrinklerLabel = document.createElement('label');
        wrinklerLabel.id = 'betterAutoClickerWrinklerLabel';
        wrinklerLabel.htmlFor = 'wrinklerClicking';
        wrinklerLabel.textContent = ' ' + this.getText('wrinklerOption');
        wrinklerLabel.style.color = '#FFF';
        wrinklerOption.appendChild(wrinklerLabel);

        modMenu.appendChild(wrinklerOption);

        // Control for Wrinkler click delay
        let wrinklerDelayControl = document.createElement('div');
        wrinklerDelayControl.style.marginTop = '5px';
        wrinklerDelayControl.style.marginBottom = '8px';
        wrinklerDelayControl.style.display = this.clickWrinklers ? 'block' : 'none';

        // Label for delay
        let wrinklerDelayLabel = document.createElement('span');
        wrinklerDelayLabel.id = 'betterAutoClickerWrinklerDelayLabel';
        wrinklerDelayLabel.textContent = this.getText('wrinklerClickDelay') + ' ';
        wrinklerDelayLabel.style.color = '#FFF';
        wrinklerDelayControl.appendChild(wrinklerDelayLabel);

        // Input for delay
        let wrinklerDelayInput = document.createElement('input');
        wrinklerDelayInput.type = 'number';
        wrinklerDelayInput.id = 'wrinklerClickDelay';
        wrinklerDelayInput.min = '100';
        wrinklerDelayInput.max = '5000';
        wrinklerDelayInput.step = '100';
        wrinklerDelayInput.value = this.wrinklerClickDelay;
        wrinklerDelayInput.style.width = '60px';
        wrinklerDelayInput.style.marginLeft = '5px';
        wrinklerDelayInput.addEventListener('change', () => {
            const newDelay = parseInt(wrinklerDelayInput.value, 10);
            if (newDelay >= 100 && newDelay <= 5000) {
                this.wrinklerClickDelay = newDelay;
                Game.Notify(
                    this.getText('wrinklerDelayChanged'),
                    this.formatString(this.getText('wrinklerDelayChangedDesc'), this.wrinklerClickDelay),
                    [0, 2],
                    2
                );
            }
        });
        wrinklerDelayControl.appendChild(wrinklerDelayInput);
        wrinklerDelayControl.appendChild(document.createTextNode(' ms'));

        // Show/hide delay control based on checkbox state
        wrinklerCheck.addEventListener('change', () => {
            wrinklerDelayControl.style.display = wrinklerCheck.checked ? 'block' : 'none';
        });

        modMenu.appendChild(wrinklerDelayControl);

        // Toggle button for activation/deactivation
        let toggleButton = document.createElement('a');
        toggleButton.id = 'autoClickerToggle';
        toggleButton.className = 'option';
        toggleButton.textContent = this.getText('activate');
        toggleButton.style.cssText = `
            display: block;
            margin: 5px auto;
            padding: 4px 8px;
            background: #5C4317;
            color: #FFF;
            border-radius: 3px;
            cursor: pointer;
            text-align: center;
        `;
        toggleButton.addEventListener('click', () => this.toggleAutoClicker());
        modMenu.appendChild(toggleButton);

        // Add an explanatory note
        let note = document.createElement('div');
        note.id = 'betterAutoClickerNote';
        note.textContent = this.getText('keyboardHint');
        note.style.cssText = `
            font-size: 10px;
            margin-top: 5px;
            color: #C0B070;
            text-align: center;
        `;
        modMenu.appendChild(note);

        this.setupDragEvents(modMenu, title);
        this.setupDragEvents(modMenu, dragHandle);

        // Add menu to document body
        document.body.appendChild(modMenu);
    },

    /**
     * Configure les événements pour rendre un élément déplaçable
     * @param {HTMLElement} element - L'élément à rendre déplaçable
     * @param {HTMLElement} handle - La poignée/zone de déplacement
     */
    setupDragEvents: function(element, handle) {
        const self = this;

        // Fonction pour commencer le déplacement
        const startDrag = function(e) {
            e.preventDefault();
            self.isDragging = true;

            // Calcule le décalage entre la souris et le coin de l'élément
            const rect = element.getBoundingClientRect();
            self.dragOffsetX = e.clientX - rect.left;
            self.dragOffsetY = e.clientY - rect.top;

            // Ajoute les événements de déplacement et de fin
            document.addEventListener('mousemove', doDrag);
            document.addEventListener('mouseup', stopDrag);
        };

        // Fonction pour effectuer le déplacement
        const doDrag = function(e) {
            if (!self.isDragging) return;

            // Calcule les nouvelles coordonnées
            let newX = e.clientX - self.dragOffsetX;
            let newY = e.clientY - self.dragOffsetY;

            // Limite les coordonnées pour rester dans la fenêtre
            newX = Math.max(0, Math.min(window.innerWidth - element.offsetWidth, newX));
            newY = Math.max(0, Math.min(window.innerHeight - element.offsetHeight, newY));

            // Applique les nouvelles coordonnées
            element.style.left = newX + 'px';

            // Change le mode de position de bottom à top si déplacé
            element.style.bottom = 'auto';
            element.style.top = newY + 'px';

            // Sauvegarde les coordonnées
            self.panelX = newX;
            self.panelY = 'top';
            self.panelOffsetY = newY;
        };

        // Fonction pour arrêter le déplacement
        const stopDrag = function() {
            self.isDragging = false;
            document.removeEventListener('mousemove', doDrag);
            document.removeEventListener('mouseup', stopDrag);
        };

        // Attache l'événement de début de déplacement à la poignée
        handle.addEventListener('mousedown', startDrag);
    },

    /**
     * Register keyboard shortcut (A key)
     */
    registerKeyboardShortcut: function() {
        let self = this;
        window.addEventListener('keydown', function(e) {
            if (e.key.toLowerCase() === 'a') {
                self.toggleAutoClicker();
            }
        });
    },

    /**
     * Function to enable/disable the auto-clicker
     */
    toggleAutoClicker: function() {
        this.isActive = !this.isActive;
        const toggleButton = document.getElementById('autoClickerToggle');

        if (this.isActive) {
            this.startAutoClicker();
            // Also start the golden cookie checker if enabled
            if (this.clickGoldenCookies) {
                this.startGoldenCookieChecker();
            }

            // Also start the Wrinkler checker if enabled
            if (this.clickWrinklers) {
                this.startWrinklerChecker();
            }

            if (toggleButton) {
                toggleButton.textContent = this.getText('deactivate');
                toggleButton.style.background = '#CC0000';
            }

            // Notification with information on mode and state
            const backgroundState = this.clicksInBackground ? this.getText('backgroundWill') : this.getText('backgroundWont');
            Game.Notify(
                this.getText('autoClickerEnabled'),
                this.formatString(
                    this.getText('clicksPerSecDisplay'),
                    this.clicksPerSecond,
                    backgroundState.toLowerCase()
                ),
                [0, 2],
                3
            );
        } else {
            this.stopAutoClicker();
            // Also stop the golden cookie checker
            this.stopGoldenCookieChecker();

            // Also stop the Wrinkler checker
            this.stopWrinklerChecker();

            if (toggleButton) {
                toggleButton.textContent = this.getText('activate');
                toggleButton.style.background = '#5C4317';
            }
            Game.Notify(
                this.getText('autoClickerDisabled'),
                this.getText('autoClickerDisabledDesc'),
                [0, 3],
                2
            );
        }
    },

    /**
     * Start the auto-clicker
     */
    startAutoClicker: function() {
        if (this.clickInterval) {
            clearInterval(this.clickInterval);
        }

        const clickDelay = 1000 / this.clicksPerSecond;
        const self = this;

        this.clickInterval = setInterval(function() {
            self.performClick();
        }, clickDelay);

        console.log(`Auto-clicker started at ${this.clicksPerSecond} clicks/sec, centered animations: ${this.centerAnimations ? 'yes' : 'no'}`);
    },

    /**
     * Stop the auto-clicker
     */
    stopAutoClicker: function() {
        if (this.clickInterval) {
            clearInterval(this.clickInterval);
            this.clickInterval = null;
        }
        console.log("Auto-clicker stopped");
    },

    /**
     * Start periodic checking for golden cookies
     */
    startGoldenCookieChecker: function() {
        if (this.goldenCheckInterval) {
            clearInterval(this.goldenCheckInterval);
        }

        const self = this;
        // Check for golden cookies every 500 ms
        this.goldenCheckInterval = setInterval(function() {
            self.checkForGoldenCookies();
        }, 500);

        console.log("Golden cookie checker started");
    },

    /**
     * Stop checking for golden cookies
     */
    stopGoldenCookieChecker: function() {
        if (this.goldenCheckInterval) {
            clearInterval(this.goldenCheckInterval);
            this.goldenCheckInterval = null;
        }
        console.log("Golden cookie checker stopped");
    },

    /**
     * Check if there are golden cookies on screen and click them
     */
    checkForGoldenCookies: function() {
        // Special cookies are stored in Game.shimmers
        if (Game.shimmers && Game.shimmers.length > 0) {
            for (let i = 0; i < Game.shimmers.length; i++) {
                let shimmer = Game.shimmers[i];
                // Check if it's a golden or wrath cookie
                if (shimmer.type === 'golden') {
                    // If it's a wrath cookie
                    if (shimmer.wrath > 0) {
                        if (this.clickWrathCookies) {
                            shimmer.pop();
                            console.log("Auto-clicked a wrath cookie");
                            Game.Notify(
                                this.getText('wrathCookieClicked'),
                                '',
                                [15, 5], // Wrath cookie icon
                                1 // Short duration
                            );
                            break;
                        }
                    }
                    // If it's a normal golden cookie
                    else {
                        if (this.clickGoldenCookies) {
                            shimmer.pop();
                            console.log("Auto-clicked a golden cookie");
                            Game.Notify(
                                this.getText('goldenCookieClicked'),
                                '',
                                [10, 14], // Golden cookie icon
                                1 // Short duration
                            );
                            break;
                        }
                    }
                }
            }
        }
    },

    /**
     * Start periodic checking for Wrinklers
     */
    startWrinklerChecker: function() {
        if (this.wrinklerCheckInterval) {
            clearInterval(this.wrinklerCheckInterval);
        }

        const self = this;
        // Check for Wrinklers every 2 seconds
        this.wrinklerCheckInterval = setInterval(function() {
            self.checkForWrinklers();
        }, 2000);

        console.log("Wrinkler checker started with click delay of " + this.wrinklerClickDelay + "ms");
    },

    /**
     * Stop checking for Wrinklers
     */
    stopWrinklerChecker: function() {
        if (this.wrinklerCheckInterval) {
            clearInterval(this.wrinklerCheckInterval);
            this.wrinklerCheckInterval = null;
        }
        console.log("Wrinkler checker stopped");
    },

    /**
     * Check if there are Wrinklers on screen and directly pop them
     */
    checkForWrinklers: function() {
        // Check if in Grandmapocalypse mode (otherwise no Wrinklers)
        if (Game.elderWrath <= 0) return;

        // Wrinklers are stored in Game.wrinklers
        if (Game.wrinklers) {
            for (let i = 0; i < Game.wrinklers.length; i++) {
                let wrinkler = Game.wrinklers[i];
                // Check if the Wrinkler is fully appeared (phase 2) and has cookies
                if (wrinkler.phase === 2 && wrinkler.sucked > 0) {
                    // Instead of clicking on it, pop it directly
                    this.popWrinklerDirectly(i);
                    // Only process one Wrinkler at a time
                    break;
                }
            }
        }
    },

    /**
     * Pop a Wrinkler directly without clicking
     * @param {number} id - ID of the Wrinkler to pop
     */
    popWrinklerDirectly: function(id) {
        // Check that the Wrinkler exists and is active
        if (Game.wrinklers[id] && Game.wrinklers[id].phase === 2) {
            // Save how many cookies it sucked for the notification
            const sucked = Game.wrinklers[id].sucked;

            // Access Cookie Clicker's internal mechanism to pop the Wrinkler
            Game.wrinklers[id].hp = 0; // Setting HP to 0 automatically triggers the pop

            console.log("Popped Wrinkler #" + id + " directly, collected " + Beautify(sucked) + " cookies");

            // Notification
            const cookiesGained = sucked > 0 ? (": " + Beautify(sucked) + " cookies") : "";
            Game.Notify(
                this.getText('wrinklerPopped'),
                this.getText('wrinklerPoppedDesc') + cookiesGained,
                [19, 8], // Wrinkler icon
                2 // Medium duration
            );
        }
    },

    /**
     * Simulate a click on the cookie
     * Uses the appropriate method according to chosen options
     */
    performClick: function() {
        if (this.centerAnimations) {
            // Method with centered click simulations
            this.clickCookieAtCenter();
        } else {
            // Standard method that uses the internal function without specified position
            Game.ClickCookie();
        }
    },

    /**
     * Method to click at the center of the cookie
     * This method preserves mouse coordinates to avoid affecting other functionalities
     */
    clickCookieAtCenter: function() {
        // Get reference to the cookie
        const bigCookie = document.getElementById('bigCookie');

        if (!bigCookie) return; // Safety if cookie doesn't exist

        // Calculate coordinates of the cookie center
        const cookieRect = bigCookie.getBoundingClientRect();
        const centerX = Math.floor(cookieRect.left + cookieRect.width / 2);
        const centerY = Math.floor(cookieRect.top + cookieRect.height / 2);

        // IMPORTANT: Save real mouse coordinates before modifying them
        const realMouseX = Game.mouseX;
        const realMouseY = Game.mouseY;

        // Temporarily modify mouse coordinates for the click
        Game.mouseX = centerX;
        Game.mouseY = centerY;

        // Call the click function
        Game.ClickCookie();

        // IMPORTANT: Immediately restore real coordinates after clicking
        // to avoid interfering with other parts of the game (like tooltips)
        Game.mouseX = realMouseX;
        Game.mouseY = realMouseY;

        // Alternative approach for particle animation
        if (typeof Game.SpawnClickParticles === 'function') {
            // Special method to generate particles at the cookie center
            // without modifying global mouse coordinates
            this.spawnCenteredParticles(centerX, centerY);
        }
    },

    /**
     * Generate visual particles at the specified location
     * This function adds an additional visual effect to centered clicks
     * @param {number} x - X coordinate where to generate particles
     * @param {number} y - Y coordinate where to generate particles
     */
    spawnCenteredParticles: function(x, y) {
        // Add visual particles at the specified location
        for (let i = 0; i < 3; i++) { // Generate a few particles for visual effect
            Game.particleAdd(
                x + Math.random() * 8 - 4,  // Slightly random X position around center
                y + Math.random() * 8 - 4,  // Slightly random Y position around center
                Math.random() * 4 - 2,      // X velocity
                Math.random() * -2 - 2,     // Y velocity (upward)
                Math.random() * 0.5 + 0.2,  // Size
                1,                          // Lifespan
                2                           // Particle type
            );
        }
    },

    /**
     * Function to save mod parameters
     * This function is called by the game when saving state
     * @returns {string} Data serialized as JSON
     */
    save: function() {
        // Save parameters in JSON format
        return JSON.stringify({
            clicksPerSecond: this.clicksPerSecond,
            isActive: this.isActive,
            clicksInBackground: this.clicksInBackground,
            centerAnimations: this.centerAnimations,
            userLanguage: this.userLanguage,
            clickGoldenCookies: this.clickGoldenCookies,
            clickWrathCookies: this.clickWrathCookies,
            clickWrinklers: this.clickWrinklers,
            wrinklerClickDelay: this.wrinklerClickDelay,
            panelX: this.panelX,
            panelY: this.panelY,
            panelOffsetY: this.panelOffsetY
        });
    },

    /**
     * Function to load mod parameters
     * This function is called by the game when loading a save
     * @param {string} str - Serialized data to load
     */
    load: function(str) {
        try {
            if (str) {
                const config = JSON.parse(str);

                // Load options
                this.clicksPerSecond = config.clicksPerSecond || 10;

                if (config.hasOwnProperty('clicksInBackground')) {
                    this.clicksInBackground = config.clicksInBackground;
                }

                if (config.hasOwnProperty('centerAnimations')) {
                    this.centerAnimations = config.centerAnimations;
                }

                // Load language preference
                if (config.hasOwnProperty('userLanguage')) {
                    this.userLanguage = config.userLanguage;
                }

                // Load golden cookie preference
                if (config.hasOwnProperty('clickGoldenCookies')) {
                    this.clickGoldenCookies = config.clickGoldenCookies;
                }

                if (config.hasOwnProperty('clickWrathCookies')) {
                    this.clickWrathCookies = config.clickWrathCookies;
                }

                if (config.hasOwnProperty('clickWrinklers')) {
                    this.clickWrinklers = config.clickWrinklers;
                }

                if (config.hasOwnProperty('wrinklerClickDelay')) {
                    this.wrinklerClickDelay = config.wrinklerClickDelay;
                }

                if (config.hasOwnProperty('panelX')) {
                    this.panelX = config.panelX;
                }
                if (config.hasOwnProperty('panelY')) {
                    this.panelY = config.panelY;
                }
                if (config.hasOwnProperty('panelOffsetY')) {
                    this.panelOffsetY = config.panelOffsetY;
                }

                // Update user interface (if it already exists)
                const speedInput = document.getElementById('autoClickerSpeed');
                if (speedInput) {
                    speedInput.value = this.clicksPerSecond;
                }

                const backgroundCheck = document.getElementById('backgroundClicking');
                if (backgroundCheck) {
                    backgroundCheck.checked = this.clicksInBackground;
                }

                const centerCheck = document.getElementById('centerAnimations');
                if (centerCheck) {
                    centerCheck.checked = this.centerAnimations;
                }

                const goldenCheck = document.getElementById('goldenCookieClicking');
                if (goldenCheck) {
                    goldenCheck.checked = this.clickGoldenCookies;
                }

                const wrathCheck = document.getElementById('wrathCookieClicking');
                if (wrathCheck) {
                    wrathCheck.checked = this.clickWrathCookies;
                }

                const wrinklerCheck = document.getElementById('wrinklerClicking');
                if (wrinklerCheck) {
                    wrinklerCheck.checked = this.clickWrinklers;
                }

                const wrinklerDelayInput = document.getElementById('wrinklerClickDelay');
                if (wrinklerDelayInput) {
                    wrinklerDelayInput.value = this.wrinklerClickDelay;
                }

                // Activate auto-clicker if it was active before
                if (config.isActive) {
                    // Wait a bit to ensure the game is fully loaded
                    setTimeout(() => {
                        this.toggleAutoClicker();
                    }, 1000);
                }
            }
        } catch (e) {
            console.error("Error loading mod configuration:", e);
        }
    }
});
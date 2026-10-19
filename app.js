(() => {
  const KEY = "little-question-responses-v1";
  const NAME_KEY = "little-question-name-v1";
  const LANGUAGE_KEY = "little-question-language-v1";
  const copy = {
    en: {
      title: "A little something for you", heroEyebrow: "A tiny note from me to you", greeting: "Hey there,", heroSubtitle: "Mumbai to Bengaluru is a little far,<br>so I made you a little corner of the internet. ♡", heroScroll: "Open your little story", helloLabel: "hello, cutie",
      stepOneEyebrow: "a tiny question from Mumbai", stepOneTitle: "Wanna hang out<br><em>with me?</em>", stepOneCopy: "We can start with a call, then plan a Bengaluru day when it works for both of us. ♡", hangoutYes: "Yes, let’s hang out <span>♡</span>", needTime: "I need a little time",
      stepTwoEyebrow: "Bengaluru plans", stepTwoTitle: "Which place in BLR<br><em>should we go?</em>", stepTwoCopy: "Pick the vibe. We can decide the exact spot together.", placeCubbon: "a walk &amp; a long chat", placeLalbagh: "flowers &amp; a garden stroll", placePalace: "Bengaluru Palace", placePalaceCopy: "a little royal day out", placeChurch: "coffee &amp; cute cafés", customPlaceLabel: "Somewhere else?", customPlacePlaceholder: "Type a Bengaluru place", customPlaceSubmit: "Use this place →", back: "← back",
      chosenPlan: "your chosen plan:", stepThreeTitle: "It’s a date.<br><em>Are you in?</em>", stepThreeCopy: "A little call first, then your Bengaluru pick when we’re both free. No pressure, promise. ♡", dateYes: "Yes, I’m in! <span>♡</span>", noButton: "No 🙈", changePlace: "← change my place", realNo: "Actually, no thanks — that’s okay",
      printerName: "♡ LITTLE DATE PRINTER ♡", receiptBrand: "THE LITTLE DATE CO.", receiptTitle: "IT’S A DATE! <span>♥</span>", receiptSub: "MUMBAI × BENGALURU · GOOD VIBES ONLY", receiptPick: "YOUR PICK", receiptLocation: "LOCATION", bengaluruLocation: "Bengaluru, Karnataka", receiptFor: "FOR", receiptDate: "DATE", dateTogether: "We’ll pick it together", receiptTime: "TIME", timeTogether: "Whenever works for you", receiptPrinted: "PRINTED", yourPhoto: "Him", herPhoto: "Her", receiptThanks: "Bring your lovely self.<br>Everything else is negotiable ♡", receiptCode: "♡ 01 · ONE VERY HAPPY DATE · 01 ♡",
      photoRibbonCaption: "A little hello from Bengaluru", musicPlay: "play our little song", musicPause: "pause our little song", responseTime: "Of course. Take all the time you need. ♡", responseNo: "Thanks for being honest. No worries at all. ♡", responsePrinting: "Best answer ever. Printing your little date receipt… ♡", nameFallback: "cutie"
    },
    kn: {
      title: "ನಿನಗಾಗಿ ಒಂದು ಪುಟ್ಟ ಉಡುಗೊರೆ", heroEyebrow: "ನಿನಗಾಗಿ ನನ್ನಿಂದ ಒಂದು ಪುಟ್ಟ ಸಂದೇಶ", greeting: "ಹಾಯ್!", heroSubtitle: "ಮುಂಬೈಯಿಂದ ಬೆಂಗಳೂರು ಸ್ವಲ್ಪ ದೂರ,<br>ಆದ್ದರಿಂದ ನಿನಗಾಗಿ ಈ ಪುಟ್ಟ ಜಾಗ ಮಾಡಿದೆ. ♡", heroScroll: "ನಿನ್ನ ಪುಟ್ಟ ಕಥೆ ತೆರೆ", helloLabel: "ಹಲೋ, ಮುದ್ದೇ",
      stepOneEyebrow: "ಮುಂಬೈಯಿಂದ ಒಂದು ಪುಟ್ಟ ಪ್ರಶ್ನೆ", stepOneTitle: "ನನ್ನ ಜೊತೆ<br><em>ಹೊರಗೆ ಬರ್ತೀಯಾ?</em>", stepOneCopy: "ಮೊದಲು ಒಂದು ಕರೆ ಮಾಡೋಣ. ಇಬ್ಬರಿಗೂ ಅನುಕೂಲವಾದಾಗ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಭೇಟಿಯಾಗೋಣ. ♡", hangoutYes: "ಹೌದು, ಭೇಟಿಯಾಗೋಣ <span>♡</span>", needTime: "ನನಗೆ ಸ್ವಲ್ಪ ಸಮಯ ಬೇಕು",
      stepTwoEyebrow: "ಬೆಂಗಳೂರು ಪ್ಲಾನ್", stepTwoTitle: "ಬೆಂಗಳೂರಿನಲ್ಲಿ<br><em>ಎಲ್ಲಿ ಹೋಗೋಣ?</em>", stepTwoCopy: "ನಿನಗೆ ಇಷ್ಟವಾದದ್ದನ್ನು ಆರಿಸು. ನಿಖರವಾದ ಜಾಗವನ್ನು ಜೊತೆಯಾಗಿ ನಿರ್ಧರಿಸೋಣ.", placeCubbon: "ನಡಿಗೆ ಮತ್ತು ಒಳ್ಳೆಯ ಮಾತುಕತೆ", placeLalbagh: "ಹೂವುಗಳ ನಡುವೆ ಒಂದು ನಡಿಗೆ", placePalace: "ಬೆಂಗಳೂರು ಅರಮನೆ", placePalaceCopy: "ರಾಜಮನೆತನದಂತೊಂದು ದಿನ", placeChurch: "ಕಾಫಿ ಮತ್ತು ಮುದ್ದಾದ ಕೆಫೆಗಳು", customPlaceLabel: "ಬೇರೆ ಜಾಗವೇ?", customPlacePlaceholder: "ಬೆಂಗಳೂರಿನ ಜಾಗವನ್ನು ಬರೆಯಿರಿ", customPlaceSubmit: "ಈ ಜಾಗ ಆಯ್ಕೆ →", back: "← ಹಿಂದೆ",
      chosenPlan: "ನಿನ್ನ ಆಯ್ಕೆ:", stepThreeTitle: "ಇದು ನಮ್ಮ ಡೇಟ್.<br><em>ನೀನು ಬರ್ತೀಯಾ?</em>", stepThreeCopy: "ಮೊದಲು ಒಂದು ಕರೆ, ನಂತರ ಇಬ್ಬರಿಗೂ ಸಮಯವಾದಾಗ ಬೆಂಗಳೂರಿನಲ್ಲಿ ಭೇಟಿ. ಒತ್ತಡ ಏನೂ ಇಲ್ಲ. ♡", dateYes: "ಹೌದು, ನಾನು ಬರ್ತೀನಿ! <span>♡</span>", noButton: "ಬೇಡ 🙈", changePlace: "← ಜಾಗ ಬದಲಾಯಿಸು", realNo: "ಬೇಡ, ಧನ್ಯವಾದ — ಪರವಾಗಿಲ್ಲ",
      printerName: "♡ ಪುಟ್ಟ ಡೇಟ್ ಪ್ರಿಂಟರ್ ♡", receiptBrand: "ನಮ್ಮ ಪುಟ್ಟ ಡೇಟ್", receiptTitle: "ಡೇಟ್ ಫಿಕ್ಸ್ ಆಯ್ತು! <span>♥</span>", receiptSub: "ಮುಂಬೈ × ಬೆಂಗಳೂರು · ಒಳ್ಳೆಯ ಕ್ಷಣಗಳು", receiptPick: "ನಿನ್ನ ಆಯ್ಕೆ", receiptLocation: "ಸ್ಥಳ", bengaluruLocation: "ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ", receiptFor: "ಯಾರಿಗಾಗಿ", receiptDate: "ದಿನಾಂಕ", dateTogether: "ಜೊತೆಯಾಗಿ ನಿರ್ಧರಿಸೋಣ", receiptTime: "ಸಮಯ", timeTogether: "ನಿನಗೆ ಅನುಕೂಲವಾದಾಗ", receiptPrinted: "ಮುದ್ರಿಸಿದ ಸಮಯ", yourPhoto: "ಅವನು", herPhoto: "ಅವಳು", receiptThanks: "ನಿನ್ನ ಮುದ್ದಾದ ನಗುವನ್ನು ತರಲು ಮರೆಯಬೇಡ.<br>ಉಳಿದದ್ದನ್ನೆಲ್ಲಾ ಮಾತಾಡಿ ತೀರ್ಮಾನಿಸೋಣ ♡", receiptCode: "♡ 01 · ನಮ್ಮ ಪುಟ್ಟ ಡೇಟ್ · 01 ♡",
      photoRibbonCaption: "ಬೆಂಗಳೂರಿನಿಂದ ಒಂದು ಪುಟ್ಟ ಹಾಯ್", musicPlay: "ನಮ್ಮ ಪುಟ್ಟ ಹಾಡು ಕೇಳು", musicPause: "ಹಾಡನ್ನು ನಿಲ್ಲಿಸು", responseTime: "ಖಂಡಿತ. ನಿನಗೆ ಬೇಕಾದಷ್ಟು ಸಮಯ ತೆಗೆದುಕೋ. ♡", responseNo: "ನಿಜವಾಗಿ ಹೇಳಿದ್ದಕ್ಕೆ ಧನ್ಯವಾದ. ಪರವಾಗಿಲ್ಲ. ♡", responsePrinting: "ಅದ್ಭುತ ಉತ್ತರ! ನಿನ್ನ ಡೇಟ್ ರಸೀದಿ ಪ್ರಿಂಟ್ ಆಗುತ್ತಿದೆ… ♡", nameFallback: "ಮುದ್ದೇ"
    },
    hi: {
      title: "तुम्हारे लिए एक छोटी-सी बात", heroEyebrow: "मेरी तरफ़ से तुम्हारे लिए एक छोटा-सा नोट", greeting: "हाय!", heroSubtitle: "मुंबई से बेंगलुरु थोड़ा दूर है,<br>इसलिए तुम्हारे लिए यह छोटी-सी जगह बनाई। ♡", heroScroll: "अपनी छोटी-सी कहानी खोलो", helloLabel: "हेलो, प्यारी",
      stepOneEyebrow: "मुंबई से एक छोटा-सा सवाल", stepOneTitle: "क्या मेरे साथ<br><em>घूमने चलोगी?</em>", stepOneCopy: "पहले एक कॉल करते हैं, फिर जब हम दोनों के लिए सही हो तब बेंगलुरु में मिलेंगे। ♡", hangoutYes: "हाँ, मिलते हैं <span>♡</span>", needTime: "मुझे थोड़ा समय चाहिए",
      stepTwoEyebrow: "बेंगलुरु के प्लान", stepTwoTitle: "BLR में कहाँ<br><em>चलें?</em>", stepTwoCopy: "अपना मूड चुनो। सही जगह हम साथ में तय कर लेंगे।", placeCubbon: "टहलना और ढेर सारी बातें", placeLalbagh: "फूलों के बीच एक सैर", placePalace: "बेंगलुरु पैलेस", placePalaceCopy: "थोड़ा शाही-सा दिन", placeChurch: "कॉफ़ी और प्यारे कैफ़े", customPlaceLabel: "कोई और जगह?", customPlacePlaceholder: "बेंगलुरु की जगह लिखो", customPlaceSubmit: "यही जगह चुनो →", back: "← वापस",
      chosenPlan: "तुम्हारी चुनी जगह:", stepThreeTitle: "तो यह डेट है।<br><em>तुम आओगी?</em>", stepThreeCopy: "पहले एक छोटी-सी कॉल, फिर जब हम दोनों खाली हों तब बेंगलुरु में मिलेंगे। कोई दबाव नहीं। ♡", dateYes: "हाँ, मैं आऊँगी! <span>♡</span>", noButton: "नहीं 🙈", changePlace: "← जगह बदलो", realNo: "सच में नहीं, शुक्रिया — कोई बात नहीं",
      printerName: "♡ छोटी-सी डेट प्रिंटर ♡", receiptBrand: "हमारी छोटी-सी डेट", receiptTitle: "डेट पक्की! <span>♥</span>", receiptSub: "मुंबई × बेंगलुरु · बस अच्छी vibes", receiptPick: "तुम्हारी पसंद", receiptLocation: "जगह", bengaluruLocation: "बेंगलुरु, कर्नाटक", receiptFor: "किसके लिए", receiptDate: "तारीख़", dateTogether: "साथ में तय करेंगे", receiptTime: "समय", timeTogether: "जब तुम्हें ठीक लगे", receiptPrinted: "प्रिंट का समय", yourPhoto: "वह (लड़का)", herPhoto: "वह (लड़की)", receiptThanks: "अपनी प्यारी-सी मुस्कान लेकर आना।<br>बाकी सब मिलकर तय करेंगे ♡", receiptCode: "♡ 01 · हमारी प्यारी-सी डेट · 01 ♡",
      photoRibbonCaption: "बेंगलुरु से एक प्यारी-सी hello", musicPlay: "हमारा प्यारा गाना सुनें", musicPause: "गाना रोकें", responseTime: "बिल्कुल। जितना समय चाहिए ले लो। ♡", responseNo: "ईमानदारी से बताने के लिए शुक्रिया। कोई बात नहीं। ♡", responsePrinting: "सबसे प्यारा जवाब! तुम्हारी डेट की रसीद प्रिंट हो रही है… ♡", nameFallback: "प्यारी"
    }
  };
  let activeLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
  let responseMessageKey = "";
  let receiptTimestamp = null;
  const localeForLanguage = { en: "en-IN", kn: "kn-IN", hi: "hi-IN" };
  const applyLanguage = language => {
    activeLanguage = copy[language] ? language : "en";
    const strings = copy[activeLanguage];
    document.documentElement.lang = activeLanguage;
    document.title = strings.title;
    document.body.dataset.lang = activeLanguage;
    document.querySelectorAll("[data-i18n]").forEach(node => { node.textContent = strings[node.dataset.i18n] ?? ""; });
    document.querySelectorAll("[data-i18n-html]").forEach(node => { node.innerHTML = strings[node.dataset.i18nHtml] ?? ""; });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(node => { node.placeholder = strings[node.dataset.i18nPlaceholder] ?? ""; });
    document.querySelectorAll("[data-name]").forEach(node => { node.textContent = getName() || strings.nameFallback; });
    document.querySelectorAll("[data-language]").forEach(button => {
      const selected = button.dataset.language === activeLanguage;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    if (receiptTimestamp) {
      document.getElementById("receiptPrintedAt").textContent = new Intl.DateTimeFormat(localeForLanguage[activeLanguage], { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(receiptTimestamp) + " IST";
    }
    const note = document.getElementById("responseNote");
    if (note && responseMessageKey) note.textContent = strings[responseMessageKey] || "";
    localStorage.setItem(LANGUAGE_KEY, activeLanguage);
  };
  const getResponses = () => { try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; } };
  const getName = () => localStorage.getItem(NAME_KEY) || "Anu aka Jinke Marina";
  if (document.querySelector(".language-switch")) {
    document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => applyLanguage(button.dataset.language)));
    applyLanguage(activeLanguage);
  }
  const saveResponse = (answer, details = {}) => {
    const responses = getResponses();
    responses.unshift({ answer, ...details, at: new Date().toISOString(), id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) });
    localStorage.setItem(KEY, JSON.stringify(responses));
  };
  const name = getName();
  document.querySelectorAll("[data-name]").forEach(el => { el.textContent = name || copy[activeLanguage].nameFallback; });
  if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
    document.querySelectorAll("[data-tilt]").forEach(character => {
      character.addEventListener("pointermove", event => {
        const box = character.getBoundingClientRect();
        const x = (event.clientX - box.left) / box.width - 0.5;
        const y = (event.clientY - box.top) / box.height - 0.5;
        character.style.setProperty("--tilt-x", `${-y * 13}deg`);
        character.style.setProperty("--tilt-y", `${x * 15}deg`);
      });
      character.addEventListener("pointerleave", () => {
        character.style.setProperty("--tilt-x", "0deg");
        character.style.setProperty("--tilt-y", "0deg");
      });
    });
  }

  const revealItems = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.18 });
    revealItems.forEach(item => revealObserver.observe(item));
  } else revealItems.forEach(item => item.classList.add("is-visible"));
  const parallaxCards = document.querySelectorAll("[data-parallax]");
  let scrollQueued = false;
  const moveMemories = () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      parallaxCards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const speed = Number(card.dataset.parallax || 0);
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * speed;
        card.style.setProperty("--scroll-shift", `${Math.max(-26, Math.min(26, -offset))}px`);
      });
      scrollQueued = false;
    });
  };
  if (parallaxCards.length) { window.addEventListener("scroll", moveMemories, { passive: true }); moveMemories(); }

  const stepOne = document.getElementById("stepOne");
  if (stepOne) {
    const flow = document.getElementById("proposal-flow");
    const steps = [stepOne, document.getElementById("stepTwo"), document.getElementById("stepThree")];
    const progressLabel = document.getElementById("flowStepLabel");
    const progressDots = [...document.querySelectorAll(".flow-progress i")];
    const note = document.getElementById("responseNote");
    let selectedPlace = "";
    const goToStep = number => {
      const current = steps.find(step => !step.hidden);
      if (current) current.classList.add("step-leaving");
      note.textContent = "";
      setTimeout(() => {
        steps.forEach((step, index) => { step.hidden = index !== number - 1; step.classList.remove("step-leaving", "step-entering"); });
        steps[number - 1].classList.add("step-entering");
        progressLabel.textContent = `${String(number).padStart(2, "0")} / 03`;
        progressDots.forEach((dot, index) => { dot.classList.toggle("active", index < number); });
      }, 160);
    };
    const recordAnswer = (answer, message) => {
      saveResponse(answer, { place: selectedPlace || "", printedAt: new Date().toISOString() });
      responseMessageKey = answer === "no-thanks" ? "responseNo" : "responseTime";
      note.textContent = copy[activeLanguage][responseMessageKey] || message;
    };
    document.querySelectorAll("[data-next-step]").forEach(button => button.addEventListener("click", () => goToStep(Number(button.dataset.nextStep))));
    document.querySelectorAll("[data-back-step]").forEach(button => button.addEventListener("click", () => goToStep(Number(button.dataset.backStep))));
    document.querySelectorAll("[data-answer]").forEach(button => button.addEventListener("click", () => {
      document.querySelectorAll("[data-answer], [data-next-step]").forEach(choice => { choice.disabled = true; });
      recordAnswer(button.dataset.answer, "Of course. Take all the time you need. ♡");
    }));
    document.querySelectorAll("[data-place]").forEach(button => button.addEventListener("click", () => {
      selectedPlace = button.dataset.place;
      document.getElementById("chosenPlaceLabel").textContent = selectedPlace;
      goToStep(3);
    }));
    document.getElementById("customPlaceForm").addEventListener("submit", event => {
      event.preventDefault();
      const customPlace = document.getElementById("customPlaceInput").value.trim();
      if (!customPlace) { document.getElementById("customPlaceInput").focus(); return; }
      selectedPlace = customPlace;
      document.getElementById("chosenPlaceLabel").textContent = selectedPlace;
      goToStep(3);
    });

    const noButton = document.getElementById("noButton");
    const playground = document.getElementById("noPlayground");
    const dodgeNo = event => {
      event?.preventDefault();
      const zone = playground.getBoundingClientRect();
      const buttonBox = noButton.getBoundingClientRect();
      const maxLeft = Math.max(0, zone.width - buttonBox.width);
      const maxTop = Math.max(0, zone.height - buttonBox.height);
      noButton.style.left = `${Math.random() * maxLeft}px`;
      noButton.style.top = `${Math.random() * maxTop}px`;
      noButton.classList.add("has-dodged");
    };
    noButton.addEventListener("pointerenter", dodgeNo);
    noButton.addEventListener("pointerdown", dodgeNo);
    noButton.addEventListener("click", dodgeNo);
    document.getElementById("realNoButton").addEventListener("click", () => {
      recordAnswer("no-thanks", "Thanks for being honest. No worries at all. ♡");
    });

    document.getElementById("yesButton").addEventListener("click", event => {
      event.currentTarget.disabled = true;
      const printedAt = new Date();
      receiptTimestamp = printedAt;
      saveResponse("yes", { place: selectedPlace, printedAt: printedAt.toISOString() });
      document.getElementById("receiptPlace").textContent = selectedPlace;
      document.getElementById("receiptPrintedAt").textContent = new Intl.DateTimeFormat(localeForLanguage[activeLanguage], { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(printedAt) + " IST";
      noButton.disabled = true;
      document.getElementById("realNoButton").disabled = true;
      responseMessageKey = "responsePrinting";
      note.textContent = copy[activeLanguage][responseMessageKey];
      const printer = document.getElementById("receiptPrinter");
      printer.hidden = false;
      requestAnimationFrame(() => printer.classList.add("is-printing"));
      setTimeout(() => printer.scrollIntoView({ behavior: "smooth", block: "center" }), 250);
      burst();
    });
  }

  const passwordGate = document.getElementById("passwordGate");
  const passwordForm = document.getElementById("passwordForm");
  if (passwordGate && passwordForm) {
    const passwordInput = document.getElementById("passwordInput");
    const gateMessage = document.getElementById("gateMessage");
    const siteContent = document.getElementById("siteContent");
    passwordInput.focus();
    passwordForm.addEventListener("submit", event => {
      event.preventDefault();
      if (passwordInput.value.trim().toUpperCase() === "143ANU") {
        document.body.classList.remove("site-locked");
        siteContent.inert = false; siteContent.removeAttribute("aria-hidden");
        passwordGate.classList.add("gate-leaving");
        window.dispatchEvent(new Event("proposal:unlocked"));
        setTimeout(() => passwordGate.remove(), 420);
      } else {
        gateMessage.textContent = "That code doesn’t look right. Try again ♡";
        passwordGate.querySelector(".password-gate-card").classList.remove("has-error");
        void passwordGate.offsetWidth;
        passwordGate.querySelector(".password-gate-card").classList.add("has-error");
        passwordInput.select();
      }
    });
  }
  const musicToggle = document.getElementById("musicToggle");
  const AudioEngine = window.AudioContext || window.webkitAudioContext;
  if (musicToggle && AudioEngine) {
    let musicContext = null, musicGain = null, musicTimer = null, musicIndex = 0, wantsMusic = true, musicStarting = false;
    const melody = [392, 493.88, 587.33, 493.88, 440, 392, 329.63, 392, 440, 587.33, 659.25, 587.33, 493.88, 440, 392, 293.66];
    const playNote = frequency => {
      if (!musicContext || !musicGain) return;
      const now = musicContext.currentTime;
      const tone = musicContext.createOscillator(), volume = musicContext.createGain();
      tone.type = "triangle"; tone.frequency.value = frequency;
      volume.gain.setValueAtTime(0.0001, now);
      volume.gain.exponentialRampToValueAtTime(0.031, now + 0.055);
      volume.gain.exponentialRampToValueAtTime(0.0001, now + 0.92);
      tone.connect(volume); volume.connect(musicGain); tone.start(now); tone.stop(now + 0.95);
      if (musicIndex % 4 === 0) {
        const bass = musicContext.createOscillator(), bassGain = musicContext.createGain();
        bass.type = "sine"; bass.frequency.value = frequency / 2;
        bassGain.gain.setValueAtTime(0.0001, now);
        bassGain.gain.exponentialRampToValueAtTime(0.009, now + 0.12);
        bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.45);
        bass.connect(bassGain); bassGain.connect(musicGain); bass.start(now); bass.stop(now + 1.48);
      }
    };
    const setMusicButton = playing => {
      musicToggle.classList.toggle("is-playing", playing);
      musicToggle.setAttribute("aria-pressed", String(playing));
      musicToggle.setAttribute("aria-label", playing ? "Pause the romantic tune" : "Play a little romantic tune");
      document.getElementById("musicLabel").textContent = copy[activeLanguage][playing ? "musicPause" : "musicPlay"];
    };
    const stopMusic = () => {
      clearInterval(musicTimer); musicTimer = null;
      if (musicGain && musicContext) {
        const oldContext = musicContext;
        musicGain.gain.cancelScheduledValues(oldContext.currentTime);
        musicGain.gain.setTargetAtTime(0, oldContext.currentTime, 0.04);
        setTimeout(() => oldContext.close().catch(() => {}), 180);
      }
      musicContext = null; musicGain = null; setMusicButton(false);
    };
    const startMusic = async () => {
      if (musicTimer || musicStarting || !wantsMusic) return;
      musicStarting = true;
      try {
        musicContext = new AudioEngine();
        await musicContext.resume();
        if (musicContext.state !== "running") { await musicContext.close(); musicContext = null; musicStarting = false; return; }
        musicGain = musicContext.createGain(); musicGain.gain.value = 0.7; musicGain.connect(musicContext.destination);
        musicIndex = 0;
        const tick = () => { playNote(melody[musicIndex % melody.length]); musicIndex++; };
        tick(); musicTimer = setInterval(tick, 520); setMusicButton(true); musicStarting = false;
      } catch { if (musicContext) musicContext.close().catch(() => {}); musicContext = null; musicGain = null; musicStarting = false; }
    };
    const firstGesture = event => {
      if (document.body.classList.contains("site-locked") || event.target.closest?.("#musicToggle")) return;
      if (musicContext?.state === "suspended") musicContext.resume().then(() => { if (musicContext?.state === "running") setMusicButton(true); }).catch(() => {});
      else if (!musicTimer && wantsMusic) startMusic();
    };
    document.addEventListener("pointerdown", firstGesture);
    document.addEventListener("keydown", firstGesture);
    musicToggle.addEventListener("click", async () => {
      if (musicTimer || musicStarting || musicContext) { wantsMusic = false; musicStarting = false; stopMusic(); }
      else { wantsMusic = true; await startMusic(); }
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && musicTimer) stopMusic();
      else if (!document.hidden && wantsMusic && !musicTimer && !document.body.classList.contains("site-locked")) startMusic();
    });
    document.addEventListener("proposal:unlocked", () => { wantsMusic = true; startMusic(); }, { once: true });
    if (!document.body.classList.contains("site-locked")) startMusic();
  }
  function burst() {
    const layer = document.getElementById("confetti"); if (!layer) return;
    const colors = ["#db718d", "#e6ad70", "#b6a6d6", "#ed9aad"];
    for (let i = 0; i < 34; i++) {
      const piece = document.createElement("span"); piece.className = "confetti-piece";
      piece.textContent = i % 3 === 0 ? "♥" : "✦"; piece.style.left = `${Math.random() * 100}%`;
      piece.style.color = colors[i % colors.length]; piece.style.fontSize = `${12 + Math.random() * 13}px`;
      piece.style.animationDelay = `${Math.random() * .9}s`; layer.appendChild(piece);
      setTimeout(() => piece.remove(), 5000);
    }
  }

  const list = document.getElementById("responseList");
  if (list) {
    const render = () => {
      const responses = getResponses();
      document.getElementById("responseCount").textContent = String(responses.length);
      document.getElementById("emptyState").hidden = responses.length > 0;
      list.replaceChildren();
      for (const item of responses) {
        const article = document.createElement("article"); article.className = "response-item";
        const avatar = document.createElement("div"); avatar.className = "response-avatar"; avatar.textContent = item.answer === "yes" ? "♥" : "♡";
        const body = document.createElement("div"); body.className = "response-body";
        const top = document.createElement("div"); top.className = "response-top";
        const title = document.createElement("strong"); title.textContent = item.answer === "yes" ? "She said yes!" : item.answer === "no-thanks" ? "She said no thanks" : item.answer === "message-soon" ? "She’ll message you soon" : "She needs a little time";
        const time = document.createElement("time"); time.dateTime = item.at; time.textContent = formatDate(item.at);
        top.append(title, time); const message = document.createElement("p");
        message.textContent = item.answer === "yes" ? `She’d love to go on a date with you${item.place ? ` at ${item.place}` : ""}. Go say hi!` : item.answer === "no-thanks" ? "She declined. Thank her for being honest and respect her answer." : item.answer === "message-soon" ? "She’ll reach out soon. Give her space to message when she’s ready." : "She asked for a little time. Give her space and let her decide.";
        body.append(top, message); article.append(avatar, body); list.append(article);
      }
    };
    render(); window.addEventListener("storage", render);
    const form = document.getElementById("nameForm"), input = document.getElementById("nameInput"), msg = document.getElementById("savedMessage");
    input.value = getName();
    form.addEventListener("submit", e => { e.preventDefault(); const value = input.value.trim(); if (value) localStorage.setItem(NAME_KEY, value); else localStorage.removeItem(NAME_KEY); msg.textContent = "Saved — the proposal will use this name."; setTimeout(() => { msg.textContent = ""; }, 2600); });
  }

  function formatDate(value) {
    const date = new Date(value); if (Number.isNaN(date.valueOf())) return "Just now";
    return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
  }
})();

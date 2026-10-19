/**
 * A Little Book For You — book.js
 * Additions: progress dots, confetti on open, animal speech bubbles on hover,
 *            heart particles above book, tree sway (CSS-driven via class),
 *            animal ground shadows (CSS-driven)
 */
(function () {
  "use strict";

  /* ─── Page content ─────────────────────────── */
  var spreads = [
    {
      left: `
        <div class="pg-chapter">Chapter One</div>
        <h2 class="pg-heading">Happy Birthday, <em>Shane!</em></h2>
        <p class="pg-text">
          <span class="dropcap">O</span>ne thing i've really noticed about you is how much you give without even making a big deal out of it.
        </p>
        <p class="pg-text">
          You always make space for other people’s problems kahit ikaw na mismo may dala-dala rin. you listen, you care, and somehow you still manage to say the right things when someone needs it the most.
        </p>
        <div class="pg-quote">
          I've seen how hard you are on yourself sometimes. like you overthink, you doubt yourself, and you act like you're not doing enough when in reality, you're already doing a lot more than you think.
        </div>
      `,
      right: `
        <div class="pg-illus">
          🐾&nbsp;🐶&nbsp;🐱
          <p>Your little patients-in-waiting</p>
        </div>
        <p class="pg-text">
          I don't know if you realize it, but you've become one of those people that others feel safe with. 
          And that's a rare thing.
        </p>
        <p class="pg-text">
          So before anything else, I hope you know this: 
          <p class="pg-text">You are appreciated far more than you think.</p>
        </p>
        <div class="pg-paws">🐾 🐾 🐾 🐾 🐾</div>
      `
    },
    {
      left: `
        <div class="pg-chapter">Chapter Two</div>
        <h2 class="pg-heading">For the Future <em>Veterenarian</em></h2>
        <p class="pg-text">
          <span class="dropcap">I</span>'ve always thought that vet med suits you so well.
        </p>
        <div class="pg-quote">
          Not just because you're smart enough for it, even though you are. and not just because you're hardworking enough for it, because you definitely are. 
        </div>
        <p class="pg-text">
          It's because you care. <br><br>You care about living things. You care about doing things properly. You care even when it's difficult, stressful, inconvenient, or exhausting. 
        </p>
      `,
      right: `
        <div class="pg-deco">🐮&nbsp;&nbsp;🐰&nbsp;&nbsp;🐑</div>
        <p class="pg-text">
          There will probably be days when school makes you question yourself. days when you'll feel overwhelmed, lost, or just super tired.
        </p>
        <p class="pg-text">
          But whenever that happens, I hope you remember why you started. 
        </p>
        <p class="pg-text">
          The future animals you'll help don't know your mistakes or your bad days.
        </p>
        <p class="pg-text">
          They'll only know that someone chose to care for them.
        </p>
        <p class="pg-text">
          <strong>And that someone is you. Padayon!</strong>
        </p>
      `
    },
    {
      left: `
        <div class="pg-chapter">Chapter Three</div>
        <h2 class="pg-heading">What I <em>Admire</em> About You</h2>
        <p class="pg-text">
          <span class="dropcap">I</span>admire how strong<br> you are.
        </p>
        <p class="pg-text">
          • Not the loud kind of strong. <br>
          - The kind of strong that keeps going even when things are not okay. <br>
          • I admire how deeply you care about people. <br>
          • I admire how thoughtful you are. <br>
          • I admire how you can make someone feel heard with just a few messages.<br> 
          • I admire your heart.
        </p>
        <div class="pg-quote">
          Because despite all the stress, pressure, disappointments, and frustrations life throws at you, you still choose kindness.
        </div>
      `,
      right: `
        <div class="pg-illus">
          🩺&nbsp;🐾&nbsp;💉
          <p>Future Dr. of Veterinary Medicine</p>
        </div>
        <p class="pg-text">
          And honestly? That's probably my favorite thing about you.
        </p>
        <div class="pg-quote">
          "May every animal you heal remind you how much the world
          is brighter and better because you are in it."
        </div>
        <div class="pg-paws">🐾 🐾 🐾</div>
      `
    },
    {
      left: `
        <div class="pg-chapter">Chapter Four</div>
        <h2 class="pg-heading">A <em>Birthday</em> Wish</h2>
        <p class="pg-text">
          <span class="dropcap">F</span>or your birthday, I don't wish for perfection.
        </p>
        <p class="pg-text">
          I don’t wish for a year with no problems because life doesn’t really work that way naman.
        </p>
        <div class="pg-quote">
          What I do wish for is this:
        </div>
        <p class="pg-text">
          • More reasons for you to smile.<br>
          • More moments where you're proud of yourself.<br>
          • More people who appreciate you the way you deserve.<br>
          • More confidence on the days you doubt yourself.<br>
          • More peace on the days your mind feels too loud.<br>
          • And more happiness than sadness this year.<br>

          <strong>Because if anyone deserves a good year, it's you.</strong>
        </p>
      `,
      right: `
        <div class="pg-deco">🎂&nbsp;&nbsp;🎉&nbsp;&nbsp;🌟</div>
        <p style="text-align: justify;" class="pg-text">
          You said na depressing and chaotic kapag birthmonth mo na so I hope this year is gentler to you.
          I hope the days that make you question yourself become fewer, and the days that remind you how capable you are become more frequent.
          I hope your hard work pays off in ways that make all the sleepless nights, stressful deadlines, and moments of self doubt worth it.
          And when things become overwhelming, as they sometimes do, I hope you remember that it's okay to pause, rest, and ask for help. 
        </p>
        <div class="pg-quote">
          I hope this year is kinder to you than the last and that you're kinder to yourself too.
        </div>
        <div class="pg-paws">🐾 🐾 🐾 🐾 🐾</div>
      `
    },
    {
      left: `
        <div class="pg-chapter">A Final Note</div>
        <h2 class="pg-heading"><em>Thank you,</em><br/>Shane :3</h2>
        <p style="text-align: justify;" class="pg-text">
          <strong>Happy Birthday, Shane!.</strong> <br>
          Thank you for all the times you've listened, cared, worried, checked up on me, and stayed. 
          Thank you for being the kind of friend who makes people feel less alone. 
          So today, please be kind to yourself. <br> Celebrate yourself. 
        </p>
        <p style="text-align: justify;" class="pg-text">
          Give yourself the same patience, understanding, and kindness that you always give to everyone else. And whenever life gets overwhelming again, remember that you don't always have to carry everything by yourself. <br>
          You've always been there for the people you care about. <br>
          This time, let the people who care about you be there for you too. <br>
          Happy Birthday. <3 
        </p>
        <p class="pg-sig">— Your friend, rr&nbsp;🩵</p>
      `,
      right: `
        <div class="pg-illus" style="margin-top:1.6rem;font-size:1.6rem;">
          🐶&nbsp;🐱&nbsp;🐮&nbsp;🐰&nbsp;🐴
          <p>All your future patients say Happy Birthday!</p>
        </div>
        <div class="pg-center" style="margin-top:1.8rem;">
          <div style="font-size:2.6rem;margin-bottom:0.5rem;">🎂</div>
          <p style="font-family:var(--font-h);font-style:italic;font-size:1.05rem;color:var(--barn-red);">
            Happy Birthday!
          </p>
          <p style="font-size:0.76rem;color:var(--ink-faint);margin-top:0.4rem;font-family:var(--font-b);">
            Wishing you the most wonderful year ahead.
          </p>
        </div>
        <div class="pg-paws" style="justify-content:center;margin-top:1.1rem;">
          🐾 🐾 🐾 🐾 🐾
        </div>
      `
    }
  ];

  /* ─── State ────────────────────────────────── */
  var current   = 0;
  var total     = spreads.length;
  var animating = false;

  /* ─── Elements ─────────────────────────────── */
  var bookCover      = document.getElementById("bookCover");
  var bookOpen       = document.getElementById("bookOpen");
  var btnOpen        = document.getElementById("btnOpen");
  var btnClose       = document.getElementById("btnClose");
  var btnPrev        = document.getElementById("btnPrev");
  var btnNext        = document.getElementById("btnNext");
  var pageLeftInner  = document.getElementById("pageLeftInner");
  var pageRightInner = document.getElementById("pageRightInner");
  var pageNumLeft    = document.getElementById("pageNumLeft");
  var pageNumRight   = document.getElementById("pageNumRight");
  var pageLeft       = document.querySelector(".page-left");
  var pageRight      = document.querySelector(".page-right");
  var progressWrap   = document.getElementById("progressDots");

  /* Guard */
  if (!bookCover || !bookOpen || !btnOpen || !btnClose ||
      !btnPrev   || !btnNext  || !pageLeft || !pageRight) {
    return;
  }

  /* ══════════════════════════════════════════════
     PROGRESS DOTS
  ══════════════════════════════════════════════ */
  function buildDots() {
    if (!progressWrap) { return; }
    progressWrap.innerHTML = "";
    for (var i = 0; i < total; i++) {
      var dot = document.createElement("span");
      dot.className = "prog-dot" + (i === current ? " active" : "");
      (function(idx) {
        dot.addEventListener("click", function() {
          if (idx === current || animating) { return; }
          var dir = idx > current ? "next" : "prev";
          flip(dir, function() {
            current = idx;
            render(current);
            updateNav();
          });
        });
      })(i);
      progressWrap.appendChild(dot);
    }
  }

  function updateDots() {
    if (!progressWrap) { return; }
    var dots = progressWrap.querySelectorAll(".prog-dot");
    for (var i = 0; i < dots.length; i++) {
      dots[i].className = "prog-dot" + (i === current ? " active" : "");
    }
  }

  /* ══════════════════════════════════════════════
     CONFETTI ON OPEN
  ══════════════════════════════════════════════ */
  var CONFETTI_COLORS = [
    "#8B1A1A","#C9A84C","#4A7C3F","#87CEEB",
    "#E890C0","#F0C840","#78BBE0","#E8603A","#F5F0E8"
  ];

  function launchConfetti() {
    var container = document.getElementById("confettiContainer");
    if (!container) { return; }
    container.innerHTML = "";

    for (var i = 0; i < 80; i++) {
      (function(i) {
        var el = document.createElement("div");
        el.className = "confetti-piece";
        var color = CONFETTI_COLORS[Math.floor(Math.random() * CONFETTI_COLORS.length)];
        var left  = Math.random() * 100;
        var delay = Math.random() * 0.6;
        var size  = 6 + Math.random() * 8;
        var isCircle = Math.random() > 0.5;
        el.style.cssText = [
          "left:" + left + "%;",
          "width:" + size + "px;",
          "height:" + size + "px;",
          "background:" + color + ";",
          "border-radius:" + (isCircle ? "50%" : "2px") + ";",
          "animation-delay:" + delay + "s;",
          "animation-duration:" + (1.2 + Math.random() * 0.8) + "s;"
        ].join("");
        container.appendChild(el);
        /* remove after animation */
        setTimeout(function() {
          if (el.parentNode) { el.parentNode.removeChild(el); }
        }, (delay + 2.2) * 1000);
      })(i);
    }
  }

  /* ══════════════════════════════════════════════
     HEART PARTICLES above book (continuous)
  ══════════════════════════════════════════════ */
  var heartContainer = document.getElementById("heartContainer");
  var heartInterval  = null;

  function spawnHeart() {
    if (!heartContainer) { return; }
    var h = document.createElement("div");
    h.className = "heart-particle";
    h.textContent = Math.random() > 0.5 ? "♡" : "🐾";
    h.style.left = (30 + Math.random() * 40) + "%";
    h.style.animationDuration = (2.5 + Math.random() * 2) + "s";
    h.style.fontSize = (12 + Math.random() * 10) + "px";
    h.style.opacity  = (0.5 + Math.random() * 0.5).toString();
    heartContainer.appendChild(h);
    setTimeout(function() {
      if (h.parentNode) { h.parentNode.removeChild(h); }
    }, 5000);
  }

  function startHearts() {
    if (heartInterval) { return; }
    heartInterval = setInterval(spawnHeart, 700);
  }

  function stopHearts() {
    if (heartInterval) {
      clearInterval(heartInterval);
      heartInterval = null;
    }
    if (heartContainer) { heartContainer.innerHTML = ""; }
  }

  /* ══════════════════════════════════════════════
     ANIMAL SPEECH BUBBLES
  ══════════════════════════════════════════════ */
  var animalMessages = {
    "a-cow":    "Moo! Future Dr. detected! 🐮",
    "a-sheep":  "Baa! You're wool-derful! 🐑",
    "a-horse":  "Neigh! Gallop toward your dreams! 🐴",
    "a-goat":   "Meh-eh! You're the G.O.A.T! 🐐",
    "a-bird-l": "Tweet! Fly high, future vet! 🐦",
    "a-dog":    "Woof! Best human ever! 🐶",
    "a-rabbit": "Hop to it, Dr. to be! 🐰",
    "a-cat":    "Purr... I choose YOU! 😺",
    "a-duck":   "Quack! You make my heart float! 🦆",
    "a-bird-r": "Chirp! Happy Birthday! 🐦"
  };

  function setupBubbles() {
    Object.keys(animalMessages).forEach(function(cls) {
      var el = document.querySelector("." + cls);
      if (!el) { return; }
      /* make the .animal pointer-events active */
      el.style.pointerEvents = "auto";
      el.style.cursor = "pointer";

      var bubble = document.createElement("div");
      bubble.className = "speech-bubble";
      bubble.textContent = animalMessages[cls];
      el.appendChild(bubble);

      el.addEventListener("mouseenter", function() {
        bubble.classList.add("visible");
      });
      el.addEventListener("mouseleave", function() {
        bubble.classList.remove("visible");
      });
    });
  }

  /* ══════════════════════════════════════════════
     RENDER + NAV helpers
  ══════════════════════════════════════════════ */
  function render(index) {
    var s = spreads[index];
    pageLeftInner.innerHTML  = s.left;
    pageRightInner.innerHTML = s.right;
    pageNumLeft.textContent  = index * 2 + 1;
    pageNumRight.textContent = index * 2 + 2;
    updateDots();
  }

  function updateNav() {
    btnPrev.disabled = current === 0;
    btnNext.disabled = current === total - 1;
  }

  function addThenRemove(el, cls, ms) {
    el.classList.add(cls);
    setTimeout(function() { el.classList.remove(cls); }, ms);
  }

  function flip(dir, callback) {
    if (animating) { return; }
    animating = true;
    var HALF = 260;
    var outL = dir === "next" ? "flip-out-l" : "flip-out-r";
    var outR = dir === "next" ? "flip-out-r" : "flip-out-l";
    var inL  = dir === "next" ? "flip-in-l"  : "flip-in-r";
    var inR  = dir === "next" ? "flip-in-r"  : "flip-in-l";
    addThenRemove(pageLeft,  outL, HALF);
    addThenRemove(pageRight, outR, HALF);
    setTimeout(function() {
      callback();
      addThenRemove(pageLeft,  inL, HALF);
      addThenRemove(pageRight, inR, HALF);
      setTimeout(function() { animating = false; }, HALF);
    }, HALF);
  }

  /* ══════════════════════════════════════════════
     OPEN / CLOSE
  ══════════════════════════════════════════════ */
  function openBook() {
    bookCover.style.display = "none";
    bookOpen.classList.remove("hidden");
    current = 0;
    render(current);
    updateNav();
    buildDots();
    launchConfetti();
    startHearts();
  }

  function closeBook() {
    bookOpen.classList.add("hidden");
    bookCover.style.display = "";
    stopHearts();
  }

  /* ══════════════════════════════════════════════
     NAVIGATION
  ══════════════════════════════════════════════ */
  function goNext() {
    if (animating || current >= total - 1) { return; }
    flip("next", function() {
      current += 1;
      render(current);
      updateNav();
    });
  }

  function goPrev() {
    if (animating || current <= 0) { return; }
    flip("prev", function() {
      current -= 1;
      render(current);
      updateNav();
    });
  }

  /* ══════════════════════════════════════════════
     EVENTS
  ══════════════════════════════════════════════ */
  btnOpen.addEventListener("click",  openBook);
  btnClose.addEventListener("click", closeBook);
  btnNext.addEventListener("click",  goNext);
  btnPrev.addEventListener("click",  goPrev);

  document.addEventListener("keydown", function(e) {
    if (bookOpen.classList.contains("hidden")) { return; }
    if (e.key === "ArrowRight") { goNext(); }
    if (e.key === "ArrowLeft")  { goPrev(); }
    if (e.key === "Escape")     { closeBook(); }
  });

  var swipeX = 0;
  bookOpen.addEventListener("touchstart", function(e) {
    swipeX = e.changedTouches[0].clientX;
  }, { passive: true });
  bookOpen.addEventListener("touchend", function(e) {
    var diff = swipeX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 44) { diff > 0 ? goNext() : goPrev(); }
  }, { passive: true });

  /* ══════════════════════════════════════════════
     INIT
  ══════════════════════════════════════════════ */
  setupBubbles();

}());
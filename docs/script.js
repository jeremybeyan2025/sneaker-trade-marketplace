const initReveal = () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('on');
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
};

const initTilt = () => {
  document.querySelectorAll('.tilt').forEach((el) => {
    el.addEventListener('pointermove', (event) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `translate(-3px,-6px) rotateX(${y * -7}deg) rotateY(${x * 8}deg)`;
      if (el.dataset.unveilStage !== undefined) {
        el.style.setProperty('--rx', `${50 + x * 38}%`);
        el.style.setProperty('--ry', `${42 + y * 28}%`);
      }
    });
    el.addEventListener('pointerleave', () => {
      el.style.transform = '';
    });
  });
};

const initUnveil = () => {
  const stage = document.querySelector('[data-unveil-stage]');
  const button = document.querySelector('[data-unveil-button]');
  const reset = document.querySelector('[data-unveil-reset]');
  const pairName = document.querySelector('[data-pair-name]');
  const pairPrice = document.querySelector('[data-pair-price]');
  const pairHeat = document.querySelector('[data-pair-heat]');
  const pairImage = document.querySelector('[data-pair-image]');
  const pairDetails = document.querySelector('[data-pair-details]');
  const pairMeta = document.querySelector('[data-pair-meta]');
  const countOne = document.querySelector('[data-count-one]');
  const countTwo = document.querySelector('[data-count-two]');
  const countThree = document.querySelector('[data-count-three]');
  const status = document.querySelector('[data-unveil-status]');

  if (!stage || !button || !pairName || !pairPrice || !pairHeat || !pairImage) return;

  const pairs = [
    {
      name: 'Redline Retro High-Top',
      price: '$429 Ask',
      heat: 'Heat 96',
      meta: ['High-top', 'Red / White', 'Trade Ready'],
      details: 'Custom demo art: red-and-white retro high-top, thick black sneaker-market outline, lime graffiti background, studio-card framing. This visual and description are matched exactly.',
      image: 'assets/redline-retro.svg'
    },
    {
      name: 'Volt Sprint Runner',
      price: '$315 Ask',
      heat: 'Heat 89',
      meta: ['Runner', 'Volt / Cyan', 'Fast Sell'],
      details: 'Custom demo art: low-profile athletic runner with volt paneling, cyan wall energy, pink hit, and grid texture. The copy describes the image being shown.',
      image: 'assets/volt-runner.svg'
    },
    {
      name: 'Gum-Sole Street Low',
      price: '$690 Ask',
      heat: 'Heat 98',
      meta: ['Low-top', 'Neutral / Gum', 'Collector'],
      details: 'Custom demo art: neutral lifestyle low-top with gum sole, streetwear poster background, and purple/lime wall movement. The description is image-specific.',
      image: 'assets/gum-street-low.svg'
    },
    {
      name: 'White Court Trainer',
      price: '$382 Ask',
      heat: 'Heat 92',
      meta: ['Court', 'White / Lime', 'Verified'],
      details: 'Custom demo art: clean white court trainer, minimal upper, bright lime/cyan court-wall treatment, and crisp black linework.',
      image: 'assets/white-court.svg'
    },
    {
      name: 'Black-White Daily Low',
      price: '$118 Ask',
      heat: 'Heat 74',
      meta: ['Daily Low', 'Black / White', 'Pre-Owned'],
      details: 'Custom demo art: black-and-white everyday low-top with bold contrast panel and lime graffiti grid. Built as a pre-owned trade candidate.',
      image: 'assets/black-white-daily.svg'
    },
    {
      name: 'Mocha Suede Low',
      price: '$1,230 Ask',
      heat: 'Heat 99',
      meta: ['Suede Low', 'Mocha / Cream', 'Premium'],
      details: 'Custom demo art: mocha-toned suede low with cream sole, orange poster-wall field, and lime/cyan accent bursts. Exact image-matched listing copy.',
      image: 'assets/mocha-suede.svg'
    }
  ];

  const setCounter = (a, b, c) => {
    if (countOne) countOne.textContent = a;
    if (countTwo) countTwo.textContent = b;
    if (countThree) countThree.textContent = c;
  };

  const choosePair = () => {
    const pick = pairs[Math.floor(Math.random() * pairs.length)];
    pairName.textContent = pick.name;
    pairPrice.textContent = pick.price;
    pairHeat.textContent = pick.heat;
    pairImage.src = pick.image;
    pairImage.alt = pick.name;
    if (pairDetails) pairDetails.textContent = pick.details;
    if (pairMeta) pairMeta.innerHTML = pick.meta.map((item) => `<span>${item}</span>`).join('');
  };

  const revealPair = () => {
    stage.classList.remove('open');
    stage.classList.add('armed');
    button.disabled = true;
    if (status) status.textContent = 'Locking escrow preview...';
    setCounter('3', '2', '1');

    setTimeout(() => {
      if (status) status.textContent = 'Scanning authenticated demo asset...';
      setCounter('2', '1', '0');
    }, 700);

    setTimeout(() => {
      if (status) status.textContent = 'Curtains opening...';
      setCounter('1', '0', 'GO');
    }, 1400);

    setTimeout(() => {
      choosePair();
      stage.classList.remove('armed');
      stage.classList.add('open');
      button.disabled = false;
      if (status) status.textContent = 'Confirmed visual reveal complete.';
    }, 2150);
  };

  button.addEventListener('click', revealPair);

  if (reset) {
    reset.addEventListener('click', revealPair);
  }
};

initReveal();
initTilt();
initUnveil();

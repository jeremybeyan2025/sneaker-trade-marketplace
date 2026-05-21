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
      name: 'Red/White High-Top',
      price: '$429 Ask',
      heat: 'Heat 96',
      meta: ['High-top', 'Red / White', 'Trade Ready'],
      details: 'Photo reveal: red and white high-top sneaker in a clean studio-style crop. Strong hero card for buy-now or trade offer flow.',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Red Runner',
      price: '$315 Ask',
      heat: 'Heat 89',
      meta: ['Runner', 'Red', 'Fast Sell'],
      details: 'Photo reveal: bright red athletic sneaker with bold color impact. Strong fit for a fast-moving streetwear listing.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Neutral Street Low',
      price: '$690 Ask',
      heat: 'Heat 98',
      meta: ['Low-top', 'Neutral', 'Collector'],
      details: 'Photo reveal: neutral low-top lifestyle sneaker with boutique streetwear styling and premium resale-card presentation.',
      image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'White Court Sneaker',
      price: '$382 Ask',
      heat: 'Heat 92',
      meta: ['Court', 'White', 'Verified'],
      details: 'Photo reveal: clean white sneaker with a crisp product-shot feel. Simple, broad-market visual for seller onboarding.',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Black/White Daily Low',
      price: '$118 Ask',
      heat: 'Heat 74',
      meta: ['Daily Low', 'Black / White', 'Pre-Owned'],
      details: 'Photo reveal: black-and-white everyday low-top sneaker, positioned as a lower-priced trade candidate.',
      image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Brown Suede Low',
      price: '$1,230 Ask',
      heat: 'Heat 99',
      meta: ['Suede Low', 'Brown', 'Premium'],
      details: 'Photo reveal: brown suede-style low-top sneaker with premium collector-card framing and high-value trade positioning.',
      image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?q=80&w=1600&auto=format&fit=crop'
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
    if (status) status.textContent = 'Locking photo reveal stage...';
    setCounter('3', '2', '1');

    setTimeout(() => {
      if (status) status.textContent = 'Scanning product image...';
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
      if (status) status.textContent = 'Photo reveal complete.';
    }, 2150);
  };

  button.addEventListener('click', revealPair);
  if (reset) reset.addEventListener('click', revealPair);
};

initReveal();
initTilt();
initUnveil();

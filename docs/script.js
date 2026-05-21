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

  if (!stage || !button || !pairName || !pairPrice || !pairHeat || !pairImage) return;

  const pairs = [
    {
      name: 'Jordan 1 Lost & Found',
      price: '$429 Ask',
      heat: 'Heat 96',
      image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Nike SB Dunk Jarritos',
      price: '$690 Ask',
      heat: 'Heat 98',
      image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Jordan 4 Military Black',
      price: '$382 Ask',
      heat: 'Heat 92',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1600&auto=format&fit=crop'
    },
    {
      name: 'Yeezy Boost 350 V2 Zebra',
      price: '$315 Ask',
      heat: 'Heat 89',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop'
    }
  ];

  const revealPair = () => {
    const pick = pairs[Math.floor(Math.random() * pairs.length)];
    pairName.textContent = pick.name;
    pairPrice.textContent = pick.price;
    pairHeat.textContent = pick.heat;
    pairImage.src = pick.image;
    stage.classList.add('open');
  };

  button.addEventListener('click', revealPair);

  if (reset) {
    reset.addEventListener('click', () => {
      stage.classList.remove('open');
      setTimeout(revealPair, 450);
    });
  }
};

initReveal();
initTilt();
initUnveil();

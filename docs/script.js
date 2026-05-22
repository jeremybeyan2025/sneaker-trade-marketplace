const revealProducts = [
  {
    name: 'Neutral Street Low',
    price: '$690 Ask',
    heat: 'Heat 98',
    details: 'A clean low-top with boutique streetwear energy, premium resale-card framing, and strong collector appeal.',
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Red/White High-Top',
    price: '$429 Ask',
    heat: 'Heat 96',
    details: 'A bold red and white high-top with strong shelf presence, built for buy-now heat or premium trade offers.',
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Red Runner',
    price: '$315 Ask',
    heat: 'Heat 89',
    details: 'A bright athletic runner with instant color impact and fast-moving streetwear energy.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'White Court Sneaker',
    price: '$382 Ask',
    heat: 'Heat 92',
    details: 'A clean white court-style sneaker with broad appeal, crisp product-shot styling, and easy marketplace value.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=1600&auto=format&fit=crop'
  }
];

function pickProduct() {
  return revealProducts[Math.floor(Math.random() * revealProducts.length)];
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function setCounter(one, two, three) {
  setText('[data-count-one]', one);
  setText('[data-count-two]', two);
  setText('[data-count-three]', three);
}

function updateProduct(product) {
  const image = document.querySelector('[data-pair-image]');
  if (image) {
    image.src = product.image;
    image.alt = product.name;
  }
  setText('[data-pair-name]', product.name);
  setText('[data-pair-price]', product.price);
  setText('[data-pair-heat]', product.heat);
  setText('[data-pair-details]', product.details);
}

function runReveal() {
  const stage = document.querySelector('[data-unveil-stage]');
  if (!stage) return;

  stage.classList.remove('open');
  stage.classList.add('armed');
  setText('[data-unveil-status]', 'Stage locking...');
  setCounter('3', '2', '1');

  document.querySelectorAll('[data-unveil-button], [data-unveil-reset]').forEach((button) => {
    button.disabled = true;
  });

  window.setTimeout(() => {
    setText('[data-unveil-status]', 'Scanning pair...');
    setCounter('2', '1', '0');
  }, 650);

  window.setTimeout(() => {
    setText('[data-unveil-status]', 'Opening vault...');
    setCounter('1', '0', 'GO');
  }, 1300);

  window.setTimeout(() => {
    updateProduct(pickProduct());
    stage.classList.remove('armed');
    stage.classList.add('open');
    setText('[data-unveil-status]', 'Reveal complete');
    document.querySelectorAll('[data-unveil-button], [data-unveil-reset]').forEach((button) => {
      button.disabled = false;
    });
  }, 2050);
}

document.querySelectorAll('[data-unveil-button], [data-unveil-reset]').forEach((button) => {
  button.addEventListener('click', runReveal);
});

document.querySelectorAll('.tilt').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${y * -6}deg) rotateY(${x * 7}deg)`;
  });
  card.addEventListener('pointerleave', () => {
    card.style.transform = '';
  });
});

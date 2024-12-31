document.addEventListener('DOMContentLoaded', function () {
  gsap.set('h1', { y: 100 });
  gsap.set('.counter p', { y: 35 });

  const tl = gsap.timeline({ delay: 1.75 });
  const movements = [-100, 300, 150, -300, -90, 100, -200];

  tl.to('h1', {
    y: 0,
    duration: 1,
    ease: 'power3.out',
    stagger: 0.1,
  });

  tl.to(
    '.counter p',
    {
      y: 0,
      duration: 0.5,
      ease: 'power3.out',
    },
    '-=0.5'
  );

  tl.to('.counter p', { y: -35, duration: 0.5, ease: 'power3.out', delay: 0.5 });
  tl.to('.counter p', { y: -70, duration: 0.5, ease: 'power3.out', delay: 0.5 });
  tl.to('.counter p', { y: -105, duration: 0.5, ease: 'power3.out', delay: 0.75 });

  tl.from('.tagline', { y: 40, opacity: 0, stagger: 0.2 }, '-=4');

  tl.to('h1', { fontSize: '15vw', duration: 1, ease: 'power3.out' });

  tl.to(
    '.block',
    {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 0.5,
      stagger: { amount: 0.5, from: 'random', ease: 'power3.out' },
    },
    '<'
  );

  movements.forEach((move, index) => {
    tl.to(`.h-${index + 1}`, { y: move, duration: 1, ease: 'power3.out' }, '<');
  });

  tl.from('.logo, .link, footer p', { y: 40, opacity: 0, stagger: 0.2 });
});

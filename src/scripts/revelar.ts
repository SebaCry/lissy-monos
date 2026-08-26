/* Revelado al hacer scroll con animate.css.
   Cada elemento declara su animación en `data-reveal` y, si quiere,
   un retraso en la variable CSS `--retraso`. */

const CALMA = window.matchMedia('(prefers-reduced-motion: reduce)');

export function revelar(): void {
  const objetivos = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (CALMA.matches) {
    objetivos.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observador = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (!entrada.isIntersecting) return;
        const el = entrada.target as HTMLElement;
        const animacion = el.dataset.reveal || 'fadeInUp';
        const retraso = getComputedStyle(el).getPropertyValue('--retraso').trim();

        if (retraso) el.style.animationDelay = retraso;
        el.classList.add('is-visible', 'animate__animated', `animate__${animacion}`);
        observador.unobserve(el);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  objetivos.forEach((el) => observador.observe(el));
}

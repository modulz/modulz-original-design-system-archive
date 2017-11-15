const Classes = {
  ACTIVE: 'is-active',
  OVERLAY: 'js-Overlay'
}

const Sidedrawer = (() => {
  class Sidedrawer {
    constructor(trigger) {
      this.trigger = trigger;
      this.target = this.findTarget(this.trigger);
      this.overlay = this.findOverlay();
      this.hideAction = this.hide.bind(this);

      this.addEventListeners();
    }

    show() {
      this.target.classList.add(Classes.ACTIVE);
      this.overlay.classList.add(Classes.ACTIVE);
      this.overlay.addEventListener('click', this.hideAction);
    }

    hide() {
      this.target.classList.remove(Classes.ACTIVE);
      this.overlay.classList.remove(Classes.ACTIVE);
      this.overlay.removeEventListener('click', this.hideAction);
    }

    addEventListeners() {
      this.trigger.addEventListener('click', () => this.show());
    }

    findTarget(trigger) {
      const target = trigger.getAttribute('data-target');
      if (!target) throw new Error('Make sure you provided data-target attribute.');
      return document.querySelector(`#${target}`);
    }

    findOverlay() {
      const overlay = document.querySelector(`.${Classes.OVERLAY}`);
      if (!overlay) throw new Error(`Make sure that overlay element exist in the DOM and has ${Classes.OVERLAY} class.`);
      return overlay;
    }
  }

  const triggers = document.querySelectorAll('[data-toggle="sidedrawer"]');
  triggers.forEach((trigger) => {
    new Sidedrawer(trigger);
  });
})();

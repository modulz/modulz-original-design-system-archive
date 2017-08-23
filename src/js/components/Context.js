const Classes = {
    ACTIVE: 'is-active',
    CONTAINER: 'js-ContextContainer'
};

const Context = (() => {
    class Context {
        constructor(context, options = {}) {
            this.context = context;
            this.button = this.getToggleElement(context);
            this.menu = this.getMenuElement(context);
            this.options = options;

            this.addEventListeners();
        }

        addEventListeners() {
            this.button.onclick = ((event) => {
                event.preventDefault();
                this.toggle();
                this.detectClickOutside();
            });

            this.context.onkeyup = ((event) => {
                if (event.code === 'Escape') {
                    this.hide();
                    console.log('Hide on esc')
                }
            });

            this.toggle.onblur = ((event) => {
                console.log(event);
                this.hide();
            });
        }

        toggle() {
            this.context.classList.toggle(Classes.ACTIVE);
            this.button.setAttribute('aria-expanded', this.context.classList.contains(Classes.ACTIVE)
                ? 'true'
                : 'false');
        }

        show() {
            this.context.classList.add(Classes.ACTIVE);
            this.button.setAttribute('aria-expanded', 'true');
        }

        hide() {
            this.context.classList.remove(Classes.ACTIVE);
            this.button.setAttribute('aria-expanded', 'false');
        }

        detectClickOutside() {
            document.addEventListener('click', (event) => {
                const isClickInside = this.context.contains(event.target);
                if (!isClickInside || this.menu.contains(event.target)) {
                    this.hide();
                }
            });
        }

        getToggleElement(context) {
            return context.children[0];
        }

        getMenuElement(context) {
            return context.children[1];
        }

    }

    const contexts = Array.from(document.querySelectorAll(`.${Classes.CONTAINER}`));
    contexts.forEach((context) => {
        new Context(context);
    });
})();
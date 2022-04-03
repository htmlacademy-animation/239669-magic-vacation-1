class AccentTypographyBuild {
  constructor(element, duration, delay) {
    this._TIME_SPACE = 200;
    this._delay = delay;
    this._duration = duration;
    this._element = element;
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    span.style.animationDuration = `${this._duration}ms`;
    span.style.animationDelay = `${
      this._delay + this._TIME_SPACE * Math.random()
    }ms`;
    return span;
  }

  prepareAnimation() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent
      .trim()
      .split(` `)
      .filter((latter) => latter !== ``);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter) => {
        fragment.appendChild(this.createElement(latter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`accent-typography__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }
}

const animationIntroTitle1 = new AccentTypographyBuild(
    document.querySelector(`.intro__title-1`),
    500,
    100
);
const animationIntroTitle2 = new AccentTypographyBuild(
    document.querySelector(`.intro__title-2`),
    500,
    250
);

const animationIntroDate = new AccentTypographyBuild(
    document.querySelector(`.intro__date`),
    350,
    900
);

const animationPrizesTitle = new AccentTypographyBuild(
    document.querySelector(`.prizes__title`),
    600,
    100
);

const animationStoryTitle = new AccentTypographyBuild(
    document.querySelector(`.slider__item-title`),
    400,
    100
);

const animationRulesTitle = new AccentTypographyBuild(
    document.querySelector(`.rules__title`),
    400,
    100
);

const animationGameTitle = new AccentTypographyBuild(
    document.querySelector(`.game__title`),
    400,
    100
);

export default () => {
  animationIntroTitle1.prepareAnimation();
  animationIntroTitle2.prepareAnimation();
  animationIntroDate.prepareAnimation();
  animationPrizesTitle.prepareAnimation();
  animationRulesTitle.prepareAnimation();
  animationStoryTitle.prepareAnimation();
  animationGameTitle.prepareAnimation();
};

import { r as registerInstance, e as createEvent, h } from './index-6d464294.js';

const skyLoaderCss = ".sky-logo{width:150px;transition:all 0.5s ease;animation:logoAnimation 1s ease-in-out alternate infinite}.sky-logo.end{animation:logoAnimationEnd 1.5s ease-in-out}@keyframes logoAnimation{from{transform:scale(0.7)}to{transform:scale(1)}}@keyframes logoAnimationEnd{100%{transform:scale(20);opacity:0}}";

const SkyLoader = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.animationCompleted = createEvent(this, "animationCompleted", 7);
    this.isLoad = false;
    this.startEndAnination = false;
    this.iterationCount = 0;
  }
  startAnimation() {
    this.isLoad = !this.isLoad;
  }
  animationEndFn() {
    if (this.startEndAnination) {
      console.log('Animation Ended.');
      this.animationCompleted.emit(true);
    }
  }
  render() {
    return (h("img", { ref: (el) => this.logoImage = el, onAnimationEnd: () => this.animationEndFn(), class: 'sky-logo ' + (this.startEndAnination ? 'end ' : ''), src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sky_International_-_Logo_2020.svg/1200px-Sky_International_-_Logo_2020.svg.png", alt: "sky-logo" }));
  }
  componentDidLoad() {
    this.logoImage.addEventListener('animationiteration', () => {
      this.iterationCount++;
      if (this.isLoad && (this.iterationCount % 2)) {
        this.startEndAnination = true;
      }
    });
  }
};
SkyLoader.style = skyLoaderCss;

export { SkyLoader as sky_loader };

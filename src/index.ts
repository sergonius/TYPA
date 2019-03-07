interface Typa {
	id: number;
	opts: {
		strings: Array<string>;
		speed: number;
		delay: number;
		loop: boolean;
		containerSelector: string;
		typerClass: string;
		cursorClass: string;
	};
	container: HTMLElement;
	timeout: any;
	elem: Element;
	currentWord: number;
	currentLetter: number;
	reverse: boolean;
}
class Typa {
	constructor(opts) {
		const { containerSelector, typerClass, cursorClass } = opts;
		this.id = +new Date();
		this.opts = opts;
		this.container = document.querySelector(containerSelector);
		this.currentWord = 0;
		this.currentLetter = 0;

		if (this.container) {
			this.container.innerHTML = `<span class="${typerClass}"></span>${
				cursorClass ? `<span class="${cursorClass}" />` : ''
			}`;

			this.elem = document.querySelector(`.${typerClass}`);
		} else {
			console.error(`No matching element found for ${containerSelector}`);
		}
	}

	start() {
		this.typing();
	}

	stop() {
		clearTimeout(this.timeout);
	}

	typing() {
		const { strings, speed, delay, loop } = this.opts;
		let ms = speed;

		if (!this.reverse) {
			if (strings[this.currentWord]) {
				if (this.currentLetter < strings[this.currentWord].length) {
					this.elem.innerHTML = strings[this.currentWord].substring(
						0,
						this.currentLetter + 1,
					);
					this.currentLetter += 1;
				} else {
					this.reverse = true;
					ms = delay;
				}
			} else {
				this.currentWord = 0;
				ms = 0;
			}
		} else {
			if (this.currentLetter > 0) {
				if (loop) {
					this.elem.innerHTML = strings[this.currentWord].substring(
						0,
						this.currentLetter - 1,
					);
					this.currentLetter -= 1;
					this.reverse = true;
				} else {
					if (strings.length - 1 !== this.currentWord) {
						this.elem.innerHTML = strings[this.currentWord].substring(
							0,
							this.currentLetter - 1,
						);
						this.currentLetter -= 1;
						this.reverse = true;
					}
				}
			} else {
				this.currentWord += 1;
				this.reverse = false;
			}
		}

		this.timeout = setTimeout(() => {
			this.typing();
		}, ms);
	}
}

export default Typa;

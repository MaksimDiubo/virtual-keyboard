// document.querySelector('.keyboard').addEventListener('click', function(el) {

//   let x = el.clientX - el.target.offsetLeft;
//   let y = el.clientY - el.target.offsetTop;

//   let ripples = document.createElement('span');
//   ripples.classList.add('ripple')
//   ripples.style.left = x + 'px';
//   ripples.style.top = y + 'px';
//   el.target.append(ripples);

//   setTimeout(() => {
//       ripples.remove()
//   }, 500)
// })

import Key from './js/key';

class Keyboard {
  constructor() {
    this.elements = {
      wrapper: null,
      textarea: null,
      keysContainer: null,
      info: null,
    };

    this.properties = {
      value: '',
      capsLock: false,
      shift: false,
      ctrl: false,
      language: localStorage.getItem('lang') || 'en',
    };

    this.layout = [
      {
        value: { en: '`', ru: 'ё' }, altValue: { en: '~', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'Backquote',
      },
      {
        value: { en: '1', ru: '1' }, altValue: { en: '!', ru: '!' }, language: this.properties.language, width: '', newLine: false, code: 'Digit1',
      },
      {
        value: { en: '2', ru: '2' }, altValue: { en: '@', ru: '"' }, language: this.properties.language, width: '', newLine: false, code: 'Digit2',
      },
      {
        value: { en: '3', ru: '3' }, altValue: { en: '#', ru: '№' }, language: this.properties.language, width: '', newLine: false, code: 'Digit3',
      },
      {
        value: { en: '4', ru: '4' }, altValue: { en: '$', ru: ';' }, language: this.properties.language, width: '', newLine: false, code: 'Digit4',
      },
      {
        value: { en: '5', ru: '5' }, altValue: { en: '%', ru: '%' }, language: this.properties.language, width: '', newLine: false, code: 'Digit5',
      },
      {
        value: { en: '6', ru: '6' }, altValue: { en: '^', ru: ':' }, language: this.properties.language, width: '', newLine: false, code: 'Digit6',
      },
      {
        value: { en: '7', ru: '7' }, altValue: { en: '&', ru: '?' }, language: this.properties.language, width: '', newLine: false, code: 'Digit7',
      },
      {
        value: { en: '8', ru: '8' }, altValue: { en: '*', ru: '*' }, language: this.properties.language, width: '', newLine: false, code: 'Digit8',
      },
      {
        value: { en: '9', ru: '9' }, altValue: { en: '(', ru: '(' }, language: this.properties.language, width: '', newLine: false, code: 'Digit9',
      },
      {
        value: { en: '0', ru: '0' }, altValue: { en: ')', ru: ')' }, language: this.properties.language, width: '', newLine: false, code: 'Digit0',
      },
      {
        value: { en: '-', ru: '-' }, altValue: { en: '_', ru: '_' }, language: this.properties.language, width: '', newLine: false, code: 'Minus',
      },
      {
        value: { en: '=', ru: '=' }, altValue: { en: '+', ru: '+' }, language: this.properties.language, width: '', newLine: false, code: 'Equal',
      },
      {
        value: { en: 'Backspace', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'wide', newLine: true, code: 'Backspace',
      },
      {
        value: { en: 'Tab', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'wide', newLine: false, code: 'Tab',
      },
      {
        value: { en: 'q', ru: 'й' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyQ',
      },
      {
        value: { en: 'w', ru: 'ц' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyW',
      },
      {
        value: { en: 'e', ru: 'у' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyE',
      },
      {
        value: { en: 'r', ru: 'к' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyR',
      },
      {
        value: { en: 't', ru: 'к' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyT',
      },
      {
        value: { en: 'y', ru: 'н' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyY',
      },
      {
        value: { en: 'u', ru: 'г' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyU',
      },
      {
        value: { en: 'i', ru: 'ш' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyI',
      },
      {
        value: { en: 'o', ru: 'щ' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyO',
      },
      {
        value: { en: 'p', ru: 'з' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyP',
      },
      {
        value: { en: '[', ru: 'х' }, altValue: { en: '{', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'BracketLeft',
      },
      {
        value: { en: ']', ru: 'ъ' }, altValue: { en: '}', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'BracketRight',
      },
      {
        value: { en: '\\', ru: '\\' }, altValue: { en: '|', ru: '/' }, language: this.properties.language, width: '', newLine: false, code: 'Backslash',
      },
      {
        value: { en: 'Delete', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: true, code: 'Delete',
      },
      {
        value: { en: 'CapsLock', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'wide', newLine: false, code: 'CapsLock',
      },
      {
        value: { en: 'a', ru: 'ф' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyA',
      },
      {
        value: { en: 's', ru: 'ы' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyS',
      },
      {
        value: { en: 'd', ru: 'в' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyD',
      },
      {
        value: { en: 'f', ru: 'а' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyF',
      },
      {
        value: { en: 'g', ru: 'п' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyG',
      },
      {
        value: { en: 'h', ru: 'р' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyH',
      },
      {
        value: { en: 'j', ru: 'о' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyJ',
      },
      {
        value: { en: 'k', ru: 'л' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyK',
      },
      {
        value: { en: 'l', ru: 'д' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyL',
      },
      {
        value: { en: ';', ru: 'ж' }, altValue: { en: ':', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'Semicolon',
      },
      {
        value: { en: "'", ru: 'э' }, altValue: { en: '"', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'Quote',
      },
      {
        value: { en: 'Enter', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'wide', newLine: true, code: 'Enter',
      },
      {
        value: { en: 'ShiftLeft', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'wide', newLine: false, code: 'ShiftLeft',
      },
      {
        value: { en: 'z', ru: 'я' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyZ',
      },
      {
        value: { en: 'x', ru: 'ч' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyX',
      },
      {
        value: { en: 'c', ru: 'с' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyC',
      },
      {
        value: { en: 'v', ru: 'м' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyV',
      },
      {
        value: { en: 'b', ru: 'и' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyB',
      },
      {
        value: { en: 'n', ru: 'т' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyN',
      },
      {
        value: { en: 'm', ru: 'ь' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'KeyM',
      },
      {
        value: { en: ',', ru: 'б' }, altValue: { en: '<', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'Comma',
      },
      {
        value: { en: '.', ru: 'ю' }, altValue: { en: '>', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'Period',
      },
      {
        value: { en: '/', ru: '.' }, altValue: { en: '?', ru: ',' }, language: this.properties.language, width: '', newLine: false, code: 'Slash',
      },
      {
        value: { en: 'ShiftRight', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'ShiftRight',
      },
      {
        value: { en: 'ArrowUp', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: true, code: 'ArrowUp',
      },
      {
        value: { en: 'ControlLeft', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'wide', newLine: false, code: 'ControlLeft',
      },
      {
        value: { en: 'MetaLeft', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'MetaLeft',
      },
      {
        value: { en: 'AltLeft', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'AltLeft',
      },
      {
        value: { en: 'Space', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'extra-wide', newLine: false, code: 'Space',
      },
      {
        value: { en: 'AltRight', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'AltRight',
      },
      {
        value: { en: 'ControlRight', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: 'wide', newLine: false, code: 'ControlRight',
      },
      {
        value: { en: 'ArrowLeft', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'ArrowLeft',
      },
      {
        value: { en: 'ArrowDown', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'ArrowDown',
      },
      {
        value: { en: 'ArrowRight', ru: '' }, altValue: { en: '', ru: '' }, language: this.properties.language, width: '', newLine: false, code: 'ArrowRight',
      },
    ];

    this.keys = [];
  }

  init() {
    // create main elements
    this.elements.wrapper = document.createElement('div');
    this.elements.textarea = document.createElement('textarea');
    this.elements.keysContainer = document.createElement('div');
    this.elements.info = document.createElement('p');


    // Setup maim elements
    this.elements.wrapper.classList.add('wrapper');
    this.elements.textarea.classList.add('textarea');
    this.elements.textarea.setAttribute('cols', '70');
    this.elements.keysContainer.classList.add('keyboard');
    this.elements.info.innerHTML = 'Press <b>Shift + Ctrl</b> to change the language<br>Designed for MS Windows';
    this.elements.keysContainer.append(this.createElement());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');


    // add to DOM

    this.elements.wrapper.append(this.elements.info);
    this.elements.wrapper.append(this.elements.textarea);
    this.elements.wrapper.append(this.elements.keysContainer);
    document.body.append(this.elements.wrapper);
  }

  createElement() {
    const fragment = document.createDocumentFragment();
    // Create keys
    this.layout.forEach((el) => {
      const key = new Key(el);
      this.keys.push(key);
      key.generateKey();
      this.addKeysEventsHandlers(key);
      fragment.append(key.elements.key);
      if (key.newLine) {
        fragment.append(document.createElement('br'));
      }
    });
    return fragment;
  }

  addKeysEventsHandlers(button) {
    switch (button.value.en) {
      case 'Backspace':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          const val = this.properties.value;
          const start = this.elements.textarea.selectionStart;
          const end = this.elements.textarea.selectionEnd;
          if (start !== end) {
            this.properties.value = `${val.slice(0, start)}${val.slice(end)}`;
          } else {
            this.properties.value = `${val.slice(0, start - 1)}${val.slice(end)}`;
          }
          this.printText();
          this.setCaretPosition(start - 1);
        });
        break;
      case 'Tab':
        button.elements.key.addEventListener('click', () => {
          const val = this.properties.value;
          const start = this.elements.textarea.selectionStart;
          const end = this.elements.textarea.selectionEnd;
          this.properties.value = `${val.slice(0, start)}\t${val.slice(end)}`;
          this.printText();
          this.setCaretPosition(start + 1);
        });
        break;
      case 'Delete':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          const val = this.properties.value;
          const start = this.elements.textarea.selectionStart;
          const end = this.elements.textarea.selectionEnd;
          if (start !== end) {
            this.properties.value = `${val.slice(0, start)}${val.slice(end)}`;
          } else {
            this.properties.value = `${val.slice(0, start)}${val.slice(end + 1)}`;
          }
          this.printText();
          this.setCaretPosition(start);
        });
        break;
      case 'CapsLock':
        button.elements.key.addEventListener('click', () => {
          this.properties.capsLock = !this.properties.capsLock;
          button.elements.key.classList.toggle('keyboard__key--active');
          this.keys.forEach((key) => {
            key.changeCase(this.properties.capsLock);
          });
        });
        break;
      case 'Enter':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          this.properties.value += '\n';
          this.printText();
        });
        break;
      case 'ShiftLeft':
        button.elements.key.addEventListener('click', () => {
          this.properties.capsLock = !this.properties.capsLock;
          this.keys.forEach((key) => {
            key.changeCase(this.properties.capsLock);
            key.changeValue();
          });

          if (!this.properties.shift) {
            button.elements.key.classList.add('keyboard__key--pressed');
            this.properties.shift = !this.properties.shift;
            this.changeLanguage();
            if (this.properties.ctrl) {
              this.properties.shift = !this.properties.shift;
              this.properties.ctrl = !this.properties.ctrl;
              this.properties.capsLock = !this.properties.capsLock;
              this.keys.forEach((key) => {
                key.elements.key.classList.remove('keyboard__key--pressed');
                key.changeCase(this.properties.capsLock);
              });
            }
          } else {
            this.properties.shift = !this.properties.shift;
            button.elements.key.classList.remove('keyboard__key--pressed');
          }
        });
        break;
      case 'ShiftRight':
        button.elements.key.addEventListener('click', () => {
          this.properties.capsLock = !this.properties.capsLock;
          this.keys.forEach((key) => {
            key.changeCase(this.properties.capsLock);
            key.changeValue();
          });

          if (!this.properties.shift) {
            button.elements.key.classList.add('keyboard__key--pressed');
            this.properties.shift = !this.properties.shift;
            this.changeLanguage();
            if (this.properties.ctrl) {
              this.properties.shift = !this.properties.shift;
              this.properties.ctrl = !this.properties.ctrl;
              this.properties.capsLock = !this.properties.capsLock;
              this.keys.forEach((key) => {
                key.elements.key.classList.remove('keyboard__key--pressed');
                key.changeCase(this.properties.capsLock);
              });
            }
          } else {
            this.properties.shift = !this.properties.shift;
            button.elements.key.classList.remove('keyboard__key--pressed');
          }
        });
        break;
      case 'ArrowUp':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          const position = this.elements.textarea.selectionStart;
          this.setCaretPosition(position - 71);
        });
        break;
      case 'ControlLeft':
        button.elements.key.addEventListener('click', () => {
          if (!this.properties.ctrl) {
            button.elements.key.classList.add('keyboard__key--pressed');
            this.properties.ctrl = !this.properties.ctrl;
            this.changeLanguage();
            if (this.properties.shift) {
              this.properties.ctrl = !this.properties.ctrl;
              this.properties.shift = !this.properties.shift;
              this.properties.capsLock = !this.properties.capsLock;
              this.keys.forEach((key) => {
                key.elements.key.classList.remove('keyboard__key--pressed');
                key.changeCase(this.properties.capsLock);
              });
            }
          } else {
            button.elements.key.classList.remove('keyboard__key--pressed');
            this.properties.ctrl = !this.properties.ctrl;
          }
        });
        break;
      case 'MetaLeft':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
        });
        break;
      case 'AltLeft':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
        });
        break;
      case 'Space':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          this.properties.value += ' ';
          this.printText();
        });
        break;
      case 'AltRight':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
        });
        break;
      case 'ControlRight':
        button.elements.key.addEventListener('click', () => {
          if (!this.properties.ctrl) {
            button.elements.key.classList.add('keyboard__key--pressed');
            this.properties.ctrl = !this.properties.ctrl;
            this.changeLanguage();
            if (this.properties.shift) {
              this.properties.ctrl = !this.properties.ctrl;
              this.properties.shift = !this.properties.shift;
              this.properties.capsLock = !this.properties.capsLock;
              this.keys.forEach((key) => {
                key.elements.key.classList.remove('keyboard__key--pressed');
                key.changeCase(this.properties.capsLock);
              });
            }
          } else {
            button.elements.key.classList.remove('keyboard__key--pressed');
            this.properties.ctrl = !this.properties.ctrl;
          }
        });
        break;
      case 'ArrowLeft':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          const position = this.elements.textarea.selectionStart;
          this.setCaretPosition(position - 1);
        });
        break;
      case 'ArrowDown':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          const position = this.elements.textarea.selectionStart;
          this.setCaretPosition(position + 71);
        });
        break;
      case 'ArrowRight':
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          const position = this.elements.textarea.selectionStart;
          this.setCaretPosition(position + 1);
        });
        break;
      default:
        button.elements.key.addEventListener('click', (e) => {
          button.addRippleAnimation(e);
          if (this.properties.shift && button.elements.altValue.textContent) {
            this.properties.value += button.elements.altValue.textContent;
          } else {
            this.properties.value += button.elements.mainValue.textContent;
          }
          this.printText();
        });
    }
  }

  printText() {
    this.elements.textarea.value = this.properties.value;
    this.elements.textarea.focus();
  }

  addDocumentKeyboardEventHandler() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      if (e.repeat) {
        return;
      }
      this.elements.textarea.focus();
      this.keys.forEach((key) => {
        if (e.code === key.code) {
          const mouseEvent = new MouseEvent('click');
          key.elements.key.dispatchEvent(mouseEvent);
          key.addRippleAnimationForKeyboardEvent();
        }
      });
    }, false);
  }

  changeLanguage() {
    if (this.properties.shift && this.properties.ctrl) {
      this.properties.language = this.properties.language === 'en' ? 'ru' : 'en';
      localStorage.setItem('lang', this.properties.language);
      this.keys.forEach((key) => {
        key.changeLanguage(this.properties.language);
      });
    }
  }

  setCaretPosition(curetPosition) {
    this.elements.textarea.focus();
    this.elements.textarea.selectionStart = curetPosition;
    this.elements.textarea.selectionEnd = curetPosition;
  }
}

window.onload = () => {
  const keyboard = new Keyboard();
  keyboard.init();
  keyboard.addDocumentKeyboardEventHandler();
};

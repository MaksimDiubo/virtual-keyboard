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

import { Key } from './js/key'

class Keyboard {
  constructor() {
    this.elements = {
      wrapper: null,
      textarea: null,
      keysContainer: null,
      keys: [],
    };
  
    this.properties = {
      value: '',
      capsLock: false,
      shift: false,
      language: 'en',
    };

    this.layout = [
      {value: {en: '`', ru: 'ё'}, altValue: {en: '~', ru: ''}, width: '', newLine: false, code: 'Backquote'},
      {value: {en: '1', ru: ''}, altValue: {en: '!', ru: ''}, width: '', newLine: false, code: 'Digit1'},
      {value: {en: '2', ru: ''}, altValue: {en: '@', ru: '"'}, width: '', newLine: false, code: 'Digit2'},
      {value: {en: '3', ru: ''}, altValue: {en: '#', ru: '№'}, width: '', newLine: false, code: 'Digit3'},
      {value: {en: '4', ru: ''}, altValue: {en: '$', ru: ';'}, width: '', newLine: false, code: 'Digit4'},
      {value: {en: '5', ru: ''}, altValue: {en: '%', ru: ''}, width: '', newLine: false, code: 'Digit5'},
      {value: {en: '6', ru: ''}, altValue: {en: '^', ru: ':'}, width: '', newLine: false, code: 'Digit6'},
      {value: {en: '7', ru: ''}, altValue: {en: '&', ru: ''}, width: '', newLine: false, code: 'Digit7'},
      {value: {en: '8', ru: ''}, altValue: {en: '*', ru: ''}, width: '', newLine: false, code: 'Digit8'},
      {value: {en: '9', ru: ''}, altValue: {en: '(', ru: ''}, width: '', newLine: false, code: 'Digit9'},
      {value: {en: '0', ru: ''}, altValue: {en: ')', ru: ''}, width: '', newLine: false, code: 'Digit0'},
      {value: {en: '-', ru: ''}, altValue: {en: '_', ru: ''}, width: '', newLine: false, code: 'Minus'},
      {value: {en: '=', ru: ''}, altValue: {en: '+', ru: ''}, width: '', newLine: false, code: 'Equal'},
      {value: {en: 'Backspace', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: true, code: 'Backspace'},
      {value: {en: 'Tab', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false, code: 'Tab'},
      {value: {en: 'q', ru: 'й'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyQ'},
      {value: {en: 'w', ru: 'ц'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyW'},
      {value: {en: 'e', ru: 'у'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyE'},
      {value: {en: 'r', ru: 'к'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyR'},
      {value: {en: 't', ru: 'к'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyT'},
      {value: {en: 'y', ru: 'н'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyY'},
      {value: {en: 'u', ru: 'г'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyU'},
      {value: {en: 'i', ru: 'ш'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyI'},
      {value: {en: 'o', ru: 'щ'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyO'},
      {value: {en: 'p', ru: 'з'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyP'},
      {value: {en: '[', ru: 'х'}, altValue: {en: '{', ru: ''}, width: '', newLine: false, code: 'BracketLeft'},
      {value: {en: ']', ru: 'ъ'}, altValue: {en: '}', ru: ''}, width: '', newLine: false, code: 'BracketRight'},
      {value: {en: '\\', ru: ''}, altValue: {en: '|', ru: '/'}, width: '', newLine: true, code: 'Backslash'},
      {value: {en: 'CapsLock', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false, code: 'CapsLock'},
      {value: {en: 'a', ru: 'ф'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyA'},
      {value: {en: 's', ru: 'ы'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyS'},
      {value: {en: 'd', ru: 'в'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyD'},
      {value: {en: 'f', ru: 'а'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyF'},
      {value: {en: 'g', ru: 'п'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyG'},
      {value: {en: 'h', ru: 'р'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyH'},
      {value: {en: 'j', ru: 'о'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyJ'},
      {value: {en: 'k', ru: 'л'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyK'},
      {value: {en: 'l', ru: 'д'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyL'},
      {value: {en: ';', ru: 'ж'}, altValue: {en: ':', ru: ''}, width: '', newLine: false, code: 'Semicolon'},
      {value: {en: "'", ru: 'э'}, altValue: {en: '"', ru: ''}, width: '', newLine: false, code: 'Quote'},
      {value: {en: 'Enter', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: true, code: 'Enter'},
      {value: {en: 'ShiftLeft', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false, code: 'ShiftLeft'},
      {value: {en: 'z', ru: 'я'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyZ'},
      {value: {en: 'x', ru: 'ч'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyX'},
      {value: {en: 'c', ru: 'с'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyC'},
      {value: {en: 'v', ru: 'м'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyV'},
      {value: {en: 'b', ru: 'и'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyB'},
      {value: {en: 'n', ru: 'т'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyN'},
      {value: {en: 'm', ru: 'ь'}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'KeyM'},
      {value: {en: ',', ru: 'б'}, altValue: {en: '<', ru: ''}, width: '', newLine: false, code: 'Comma'},
      {value: {en: '.', ru: 'ю'}, altValue: {en: '>', ru: ''}, width: '', newLine: false, code: 'Period'},
      {value: {en: '/', ru: '.'}, altValue: {en: '?', ru: ','}, width: '', newLine: false, code: 'Slash'},
      {value: {en: 'ShiftRight', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'ShiftRight'},
      {value: {en: 'ArrowUp', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: true, code: 'ArrowUp'},
      {value: {en: 'ControlLeft', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false, code: 'ControlLeft'},
      {value: {en: 'MetaLeft', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'MetaLeft'},
      {value: {en: 'AltLeft', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'AltLeft'},
      {value: {en: 'Space', ru: ''}, altValue: {en: '', ru: ''}, width: 'extra-wide', newLine: false, code: 'Space'},
      {value: {en: 'AltRight', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'AltRight'},
      {value: {en: 'ControlRight', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false, code: 'ControlRight'},
      {value: {en: 'ArrowLeft', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'ArrowLeft'},
      {value: {en: 'ArrowDown', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'ArrowDown'},
      {value: {en: 'ArrowRight', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false, code: 'ArrowRight'},
    ]
    }

  init() {
    // create main elements
    this.elements.wrapper = document.createElement('div');
    this.elements.textarea = document.createElement('textarea');
    this.elements.keysContainer = document.createElement('div');    

    // Setup maim elements
    this.elements.wrapper.classList.add('wrapper');
    this.elements.textarea.classList.add('textarea');
    this.elements.textarea.focus();
    this.elements.keysContainer.classList.add('keyboard');    
    this.elements.keysContainer.append(this.createElement())

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');


    // add to DOM
    this.elements.wrapper.append(this.elements.textarea);
    this.elements.wrapper.append(this.elements.keysContainer);
    document.body.append(this.elements.wrapper);    
  }

  createElement() {
    const fragment = document.createDocumentFragment();  
    // Create keys    
    this.layout.forEach(el => {
      let key = new Key(el);
      fragment.append(key.generateKey());
      if (key.newLine) {
        fragment.append(document.createElement('br'))
      }
    })
     return fragment;    
  }
  
  addKeysEventsHandlers(value) {    
    switch(value) {
      case 'Backspace':
        this.elements.key.addEventListener('click', () => {
          this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
          this.printText();
        })          
        break
      case 'Tab':
        break
      case 'CapsLock':
        break
      case 'Enter':
        break
      case 'ShiftLeft':
        break
      case 'ShiftRight':
        break 
      case 'ArrowUp':
        break
      case 'ControlLeft':
        break
      case 'MetaLeft':
        break
      case 'AltLeft':
        break
      case 'Space':
        break
      case 'AltRight':
        break
      case 'ControlRight':
        break
      case 'ArrowLeft':
        break
      case 'ArrowDown':
        break
      case 'ArrowRight':
        break
      default:
        element.elements.key.addEventListener('click', () => {
          this.properties.value += element.elements.mainValue;
          this.printText();
        });
    }
  }

  printText() {
    this.elements.textarea.value = this.properties.value;
  }

  addDocumentKeyboardEventHandler() {    
    document.addEventListener('keydown', (e) => {
      this.elements.keys.forEach(el => {
        if (e.code === el.dataset.code) {          
          let x = el.clientLeft + (el.clientWidth * 0.5);
          let y = el.clientTop + (el.clientHeight * 0.5);

          let ripples = document.createElement('span');
          ripples.classList.add('ripple')
          ripples.style.left = x + 'px';
          ripples.style.top = y + 'px';
          el.append(ripples);

          setTimeout(() => {
              ripples.remove()
          }, 500)
        }
      })
    })
  }

}

window.onload = () => {
  const keyboard = new Keyboard();
  keyboard.init();
  keyboard.addDocumentKeyboardEventHandler();
}


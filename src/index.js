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
      {value: {en: '`', ru: 'ё'}, altValue: {en: '~', ru: ''}, width: '', newLine: false},
      {value: {en: '1', ru: ''}, altValue: {en: '!', ru: ''}, width: '', newLine: false},
      {value: {en: '2', ru: ''}, altValue: {en: '@', ru: '"'}, width: '', newLine: false},
      {value: {en: '3', ru: ''}, altValue: {en: '#', ru: '№'}, width: '', newLine: false},
      {value: {en: '4', ru: ''}, altValue: {en: '$', ru: ';'}, width: '', newLine: false},
      {value: {en: '5', ru: ''}, altValue: {en: '%', ru: ''}, width: '', newLine: false},
      {value: {en: '6', ru: ''}, altValue: {en: '^', ru: ':'}, width: '', newLine: false},
      {value: {en: '7', ru: ''}, altValue: {en: '&', ru: ''}, width: '', newLine: false},
      {value: {en: '8', ru: ''}, altValue: {en: '*', ru: ''}, width: '', newLine: false},
      {value: {en: '9', ru: ''}, altValue: {en: '(', ru: ''}, width: '', newLine: false},
      {value: {en: '0', ru: ''}, altValue: {en: ')', ru: ''}, width: '', newLine: false},
      {value: {en: '-', ru: ''}, altValue: {en: '_', ru: ''}, width: '', newLine: false},
      {value: {en: '=', ru: ''}, altValue: {en: '+', ru: ''}, width: '', newLine: false},
      {value: {en: 'Backspace', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: true},
      {value: {en: 'Tab', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false},
      {value: {en: 'q', ru: 'й'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'w', ru: 'ц'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'e', ru: 'у'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'r', ru: 'к'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 't', ru: 'к'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'y', ru: 'н'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'u', ru: 'г'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'i', ru: 'ш'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'o', ru: 'щ'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'p', ru: 'з'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: '[', ru: 'х'}, altValue: {en: '{', ru: ''}, width: '', newLine: false},
      {value: {en: ']', ru: 'ъ'}, altValue: {en: '}', ru: ''}, width: '', newLine: false},
      {value: {en: '\\', ru: ''}, altValue: {en: '|', ru: '/'}, width: '', newLine: true},
      {value: {en: 'CapsLock', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false},
      {value: {en: 'a', ru: 'ф'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 's', ru: 'ы'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'd', ru: 'в'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'f', ru: 'а'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'g', ru: 'п'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'h', ru: 'р'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'j', ru: 'о'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'k', ru: 'л'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'l', ru: 'д'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: ';', ru: 'ж'}, altValue: {en: ':', ru: ''}, width: '', newLine: false},
      {value: {en: "'", ru: 'э'}, altValue: {en: '"', ru: ''}, width: '', newLine: false},
      {value: {en: 'Enter', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: true},
      {value: {en: 'ShiftLeft', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false},
      {value: {en: 'z', ru: 'я'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'x', ru: 'ч'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'c', ru: 'с'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'v', ru: 'м'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'b', ru: 'и'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'n', ru: 'т'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'm', ru: 'ь'}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: ',', ru: 'б'}, altValue: {en: '<', ru: ''}, width: '', newLine: false},
      {value: {en: '.', ru: 'ю'}, altValue: {en: '>', ru: ''}, width: '', newLine: false},
      {value: {en: '/', ru: '.'}, altValue: {en: '?', ru: ','}, width: '', newLine: false},
      {value: {en: 'ShiftRight', ru: ''}, altValue: {en: '', ru: ''}, width: 'medium', newLine: false},
      {value: {en: 'ArrowUp', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: true},
      {value: {en: 'ControlLeft', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false},
      {value: {en: 'MetaLeft', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'AltLeft', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'Space', ru: ''}, altValue: {en: '', ru: ''}, width: 'extra-wide', newLine: false},
      {value: {en: 'AltRight', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'ControlRight', ru: ''}, altValue: {en: '', ru: ''}, width: 'wide', newLine: false},
      {value: {en: 'ArrowLeft', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'ArrowDown', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false},
      {value: {en: 'ArrowRight', ru: ''}, altValue: {en: '', ru: ''}, width: '', newLine: false},
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
    // Create HTML for an icon
    const createIconHTML = (iconName) => `<i class="material-icons">${iconName}</i>`;

    // Create keys    
    let keys = [];
    this.layout.forEach(el => {
      let key = new Key(el);      
      key.generateKey();
      fragment.append(key.elements.key);
      if (key.newLine) {
        fragment.append(document.createElement('br'))
      }
    })
     return fragment
    
  }
}

window.onload = () => {
  const keyboard = new Keyboard();
  keyboard.init();
}


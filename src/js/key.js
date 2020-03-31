export class Key {
    constructor({ value, altValue, width, newLine, code }) {
      this.elements = {
        key: null,
        mainValue: null,
        altValue: null,
      }
      this.value = value
      this.altValue = altValue
      this.language = 'en'
      this.width = width
      this.newLine = newLine
      this.code = code
    }
  
    generateKey() {
      this.elements.key = document.createElement('button');
  
      // Add attributes/classes
      this.elements.key.setAttribute('type', 'button');
      this.elements.key.classList.add('keyboard__key');
      if (this.width) {
        this.elements.key.classList.add(`keyboard__key--${this.width}`)
      }
      this.elements.key.dataset.code = this.code;    
       
      switch (this.value['en']) {
        case 'Backspace':
          this.elements.key.innerHTML = this.createIconHTML('backspace');
          break
        case 'Tab':
          this.elements.key.innerHTML = this.createIconHTML('keyboard_tab');  
          break
        case 'CapsLock':
          this.elements.key.innerHTML = this.createIconHTML('keyboard_capslock'); 
          break
        case 'Enter':
          this.elements.key.innerHTML = this.createIconHTML('keyboard_return');
          break
        case 'ShiftLeft':
          this.elements.key.innerText = 'Shift'; 
          break
        case 'ShiftRight':
          this.elements.key.innerText = 'Shift';
          break 
        case 'ArrowUp':
          this.elements.key.innerHTML = this.createIconHTML('keyboard_arrow_up');
          break
        case 'ControlLeft':
          this.elements.key.innerText = 'Ctrl'; 
          break
        case 'MetaLeft':
          this.elements.key.innerText = 'Win'; 
          break
        case 'AltLeft':
          this.elements.key.innerText = 'Alt';
          break
        case 'Space':
          this.elements.key.innerHTML = this.createIconHTML('space_bar');
          break
        case 'AltRight':
          this.elements.key.innerText = 'Alt';
          break
        case 'ControlRight':
          this.elements.key.innerText = 'Ctrl'; 
          break
        case 'ArrowLeft':
          this.elements.key.innerHTML = this.createIconHTML('keyboard_arrow_left');
          break
        case 'ArrowDown':
          this.elements.key.innerHTML = this.createIconHTML('keyboard_arrow_down');
          break
        case 'ArrowRight':
          this.elements.key.innerHTML = this.createIconHTML('keyboard_arrow_right');
          break
        default:
          this.elements.mainValue = document.createElement('span');
          this.elements.mainValue.innerText = this.value[this.language];
          this.elements.key.append(this.elements.mainValue);
          if (this.altValue[this.language]) {
            this.elements.altValue = document.createElement('span');
            this.elements.altValue.classList.add('alternative-value');
            this.elements.altValue.innerText = this.altValue[this.language];
            this.elements.key.append(this.elements.altValue);   
          }
      }
      
      return this.elements.key;
    }
  
    createIconHTML(iconName) {
      return `<i class="material-icons">${iconName}</i>`;  
    }

    
  }


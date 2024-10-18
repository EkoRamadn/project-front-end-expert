class Card extends HTMLElement {
    _data = {
      id: null,
      name: null,
      description: null,
      pictureId: null,
      city: null,
      rating: null,
    };
  
    constructor() {
      super();
      this.render(); 
    }
  
    get data() {
      return this._data; 
    }
  
    set data(value) {
      this._data = value; 
      this.render(); 
    }
  
    render() {
      
      this.innerHTML = `
        <div class="card-container">
          <div class="top-card">
            <img src="${this.data.pictureId || './images/heros/hero-image_3.jpg'}" alt="${this.data.name || 'Default Image'}">
            <span>Discount</span>
          </div>
          <article class="bottom-card">
            <h4>Rating: ${this.data.rating || 'N/A'}</h4>
            <h3>${name || 'Default Name'}</h3>
            <p>${this.data.description || 'No description available.'}</p>
            <p>City: ${this.data.city || 'Unknown'}</p>
          </article>
        </div>
      `;
    }
  }
  
  customElements.define('card-item', Card); // Ubah nama elemen jika perlu
  
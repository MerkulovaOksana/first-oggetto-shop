window.onload = function()  {
	var searchQuery = document.getElementById('searchInput');
	var productForm = document.getElementById('productForm');
  const colorList = document.getElementById('colorList');
  const sizeList = document.getElementById('sizeList');




	if (searchQuery) {
		searchQuery.addEventListener( 'keydown', function (event) {
			if(event.keyCode == 13)
      {
				alert('По запросу "' + searchQuery.value + '" ничего не найдено');
			}
		});
	}

	if (productForm) {
		productForm.addEventListener( 'submit', function (event) {
			event.preventDefault();
      if (window.localStorage.size && window.localStorage.color) {
        alert(productTitle + '\nЦена: ' + productPrice + '\nРазмер: ' + window.localStorage.size + '\nЦвет: ' + window.localStorage.color);
      } else if(window.localStorage.size && !window.localStorage.color) {
        alert("Выберите цвет");
      } else if(!window.localStorage.size && window.localStorage.color) {
        alert("Выберите размер");
      } else {
        alert("Выберите цвет и размер");
      }
		});
	}
}


let productTitle = document.getElementById('title-of-product').innerHTML;
let productPrice = document.getElementById('price-of-product').innerHTML;
let productSize = '';
let productColor = '';



const Dispatcher = document.getElementById('doc');

export default class PropertySelector {
    constructor(el) {
        this.el = el;

        this.el.addEventListener('click', ev => {
            const type = ev.target.dataset['type'];
            const value = ev.target.dataset['value'];

            this.dispatchEvent(type, value)
        });
    }

    dispatchEvent(type, value) {
        const event = new CustomEvent('property-selected', {
            detail: {
                type: type,
                value: value
            }
        });
        // Pub/Sub
        Dispatcher.dispatchEvent(event);
    }
}



new PropertySelector(document.getElementById('colorList'));
new PropertySelector(document.getElementById('sizeList'));

Dispatcher.addEventListener('property-selected', ev => {
    const data = ev.detail;

    if (data.type === 'color') {
        localStorage.setItem(data.type, data.value);
        productColor = data.value;
        changePicture(data.value);
    }

    if (data.type === 'size') {
        localStorage.setItem(data.type, data.value);
        productSize = data.value;
        changeSize(data.value);
    }
});

function changeSize(size) {
	var sizeList = document.getElementById('sizeList').querySelectorAll('[data-value]');

  for (var i = 0; i < sizeList.length; i++) {
    var tag = sizeList[i];
    if (tag.getAttribute('data-value') == size) {
      tag.classList.add('variant_active');
    } else {
      tag.classList.remove('variant_active');
    }
  }
}

function changePicture(color) {
  var colorList = document.getElementById('colorList').querySelectorAll('[data-value]');

  for (var i = 0; i < colorList.length; i++) {
    var tag = colorList[i];
    if (tag.getAttribute('data-value') == color) {
      tag.classList.add('variant_active');
    } else {
      tag.classList.remove('variant_active');
    }
  }

  document.getElementById('productPicture').src = './img/tshirts/tshirt_' + color + '.jpg';
}

const lastSize = localStorage.getItem('size');
const lastColor = localStorage.getItem('color');
  if (lastSize) {
    changeSize(lastSize);
  }
  if (lastColor) {
     changePicture(lastColor);
}

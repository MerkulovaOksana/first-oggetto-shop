window.onload = function()  {
	var searchQuery = document.getElementById('searchInput');
	var productForm = document.getElementById('productForm');


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
			var purchasedProduct = productTitle + '\nЦена: ' + productPrice + '\nРазмер: ' + productSize + '\nЦвет: ' + productColor;
			alert(purchasedProduct);
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
            console.log(type);
            const value = ev.target.dataset['value'];
            console.log(value);

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
        productColor = data.value;
        changePicture(data.value);
    }

    if (data.type === 'size') {
        productSize = data.value;
        // changeSize();
    }
});

function changeSize() {
	document.getElementById('sizeList');
}

function changePicture(color) {
	document.getElementById('productPicture').src = './img/tshirts/tshirt_' + color + '.jpg';
}

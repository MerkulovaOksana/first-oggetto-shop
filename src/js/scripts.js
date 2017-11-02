window.onload = function()  {
	var colorWhiteButton = document.getElementById('tshirt-white-variable-button');
	var colorGreenButton = document.getElementById('tshirt-green-variable-button');
	var colorYellowButton = document.getElementById('tshirt-yellow-variable-button');

	var sizeSButton = document.getElementById('tshirt-s-variable-button');
	var sizeMButton = document.getElementById('tshirt-m-variable-button');
	var sizeLButton = document.getElementById('tshirt-l-variable-button');

	var productForm = document.getElementById('product-form');

	var productTitle = document.getElementById('title-of-product').innerHTML;
	var productPrice = document.getElementById('price-of-product').innerHTML;
	var productSize = '';
	var productColor = '';

	var searchQuery = document.getElementById('searchInput');


	useMSize();
	useWhiteColor ();







	colorWhiteButton.addEventListener( 'click', function () {
		useWhiteColor ();
	});
	colorGreenButton.addEventListener( 'click', function () {
		useGreenColor ();
	});
	colorYellowButton.addEventListener( 'click', function () {
		useYellowColor ();
	});





	sizeSButton.addEventListener( 'click', function () {
		useSSize ();
	});
	sizeMButton.addEventListener( 'click', function () {
		useMSize ();
	});
	sizeLButton.addEventListener( 'click', function () {
		useLSize ();
	});







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





	function useWhiteColor() {
		productColor = document.getElementById('tshirt-white-variable-button').value;
		document.getElementById('tshirt-white').classList.remove('none');
		document.getElementById('tshirt-green').classList.add('none');
		document.getElementById('tshirt-yellow').classList.add('none');
		document.getElementById('tshirt-white-variable-button').classList.add('variant_active');
		document.getElementById('tshirt-green-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-yellow-variable-button').classList.remove('variant_active');
	}

	function useGreenColor() {
		productColor = document.getElementById('tshirt-green-variable-button').value;
		document.getElementById('tshirt-white').classList.add('none');
		document.getElementById('tshirt-green').classList.remove('none');
		document.getElementById('tshirt-yellow').classList.add('none');
		document.getElementById('tshirt-white-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-green-variable-button').classList.add('variant_active');
		document.getElementById('tshirt-yellow-variable-button').classList.remove('variant_active');
	}

	function useYellowColor() {
		productColor = document.getElementById('tshirt-yellow-variable-button').value;
		document.getElementById('tshirt-white').classList.add('none');
		document.getElementById('tshirt-green').classList.add('none');
		document.getElementById('tshirt-yellow').classList.remove('none');
		document.getElementById('tshirt-white-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-green-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-yellow-variable-button').classList.add('variant_active');
	}








	function useSSize() {
		productSize = document.getElementById('tshirt-s-variable-button').value;
		document.getElementById('tshirt-s-variable-button').classList.add('variant_active');
		document.getElementById('tshirt-m-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-l-variable-button').classList.remove('variant_active');
	}

	function useMSize() {
		productSize = document.getElementById('tshirt-m-variable-button').value;
		document.getElementById('tshirt-s-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-m-variable-button').classList.add('variant_active');
		document.getElementById('tshirt-l-variable-button').classList.remove('variant_active');
	}

	function useLSize() {
		productSize = document.getElementById('tshirt-l-variable-button').value;
		document.getElementById('tshirt-s-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-m-variable-button').classList.remove('variant_active');
		document.getElementById('tshirt-l-variable-button').classList.add('variant_active');
	}


};

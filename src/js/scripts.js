window.onload = function()  {
	useWhiteColor ();
};

addEventListener('onclick', useGreenColor);
addEventListener('onclick', useYellowColor);




function useWhiteColor() {
	document.getElementById('tshirt-white').classList.remove('none');
	document.getElementById('tshirt-green').classList.add('none');
	document.getElementById('tshirt-yellow').classList.add('none');

	document.getElementById('tshirt-white-variable-button').classList.add('variant_active');
	document.getElementById('tshirt-green-variable-button').classList.remove('variant_active');
	document.getElementById('tshirt-yellow-variable-button').classList.remove('variant_active');
}


function useGreenColor() {
	document.getElementById('tshirt-white').classList.add('none');
	document.getElementById('tshirt-green').classList.remove('none');
	document.getElementById('tshirt-yellow').classList.add('none');

	document.getElementById('tshirt-white-variable-button').classList.remove('variant_active');
	document.getElementById('tshirt-green-variable-button').classList.add('variant_active');
	document.getElementById('tshirt-yellow-variable-button').classList.remove('variant_active');
}



function useYellowColor() {
	document.getElementById('tshirt-white').classList.add('none');
	document.getElementById('tshirt-green').classList.add('none');
	document.getElementById('tshirt-yellow').classList.remove('none');

	document.getElementById('tshirt-white-variable-button').classList.remove('variant_active');
	document.getElementById('tshirt-green-variable-button').classList.remove('variant_active');
	document.getElementById('tshirt-yellow-variable-button').classList.add('variant_active');
}

//your JS code here. If required.

function selectAndRemoveColor(){
	const selectColor = document.getElementById('colorSelect');
	const selectedColor = selectColor.value;
	selectColor.remove(selectColor.selectedIndex);
}

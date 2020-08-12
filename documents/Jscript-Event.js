var div = document.getElementById("div");
div.attachEvent('onclick', handleClick);
function handleClick(e) {
    var target = e.srcElement;
    if (target.id == 'indeex') {
        alert('wahh...');
    }
}
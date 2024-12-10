var offcanvasElementList = [].slice.call(document.querySelectorAll('.offcanvas'))
var offcanvasList = offcanvasElementList.map(function (offcanvasEl) {
    return new bootstrap.Offcanvas(offcanvasEl)
})

function openToothModal(type, identifier, tooth, is_edit) {
    if(is_edit) { $('#addEventSidebarLabel').text('Izmena dijagnoze'); } else { $('#addEventSidebarLabel').text('Unos dijagnoze'); }
    var myOffcanvas = document.getElementById('addEventSidebar')
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    bsOffcanvas.show();

    $('#toothID').val(tooth);
    if(type == 'root') {
        $('#toothSection').val('koren br. ' + identifier);
    } else {
        $('#toothSection').val(identifier);
    }
}

function showOrthopan() {
    $('.ortopan-viewer').fadeIn(100);
}

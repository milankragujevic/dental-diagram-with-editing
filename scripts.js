$(function() {
    $('svg g polygon, svg g rect').click(function () {
        if($(this).attr('fill') == 'red') {
            $(this).attr('fill', $(this).attr('data-old-fill'));
            $(this).removeClass('clicked');
        } else {
            $(this).attr('data-old-fill', $(this).attr('fill'));
            $(this).attr('fill', 'red');
            $(this).addClass('clicked');
        }
        var zone = $(this).attr('id');
        var tooth = $(this).closest('.tooth').attr('data-tooth');
        console.log('Clicked zone ' + zone + ' of tooth ' + tooth);
        if(window.is_app) { openToothModal('zone', zone, tooth); }
    });
    $('.root').click(function () {
        if($(this).hasClass('clicked')) {
            $(this).css('background-color', 'rgba(255,255,255,0.6)');
            $(this).removeClass('clicked');
        } else {
            $(this).css('background-color', 'rgba(255,0,0,0.6)');
            $(this).addClass('clicked');
        }
        var root = $(this).attr('data-root');
        var tooth = $(this).attr('data-tooth');
        console.log('Clicked root ' + root + ' of tooth ' + tooth);
        if(window.is_app) { openToothModal('root', root, tooth); }
    });
});
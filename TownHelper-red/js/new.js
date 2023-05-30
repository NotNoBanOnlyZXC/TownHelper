$(document).ready(function () {
    let version = '0.018'

    function FootAppend(footer) {
        $(footer).append('<div class="app-version"><div class="TH-support">Связь с <a href="tg://resolve?domain=nobanonlyzxc" target="_blank">разработчиком</a> расширения тем</div></div>');
        console.log('Support appended')
    };

//    function noteAppend(topmenu) {
//        $(topmenu).append('')
//    }
//
    FootAppend($('footer'));
    console.log('Scripts v.'+version+' activated');
    console.log('Maksim pidoras');
//
//    var notepadAdd = document.querySelectorAll('div[class="top-menu"]');
//    notepadAdd.forEach(function(item) {
//        var div = document.createElement('div');
//        div.className = 'top-menu-button TH-notepad'
//    })

    $(document).on("DOMNodeInserted", function (e) {
        if($(e.target).is("footer"))
        {
            FootAppend(e.target);
        };
})});
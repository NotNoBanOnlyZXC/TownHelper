$(document).ready(function () {
    let version = '0.017'

    function FootAppend(footer) {
        $(footer).append('<div class="app-version"><div class="TH-support"><button class="TH-support">Support</button><p>Supports</div></div>');
        console.log('Support appended')
    };

    FootAppend($('footer'));
    console.log('Scripts v.'+version+' activated');

    $(document).on("DOMNodeInserted", function (e) {
        if($(e.target).is("footer"))
        {
            FootAppend(e.target);
        }
})})

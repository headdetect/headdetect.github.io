(function ($) {
    $(document).ready(function () {
        $("#navbar-collapse-under, #navbar-collapse-over").click(function () {
            $("#sidebar").toggleClass("opened");
        });
        $("#Grid").mixitup();
        
        $(".project .details").each(function() {
            var that = $(this);
            var newDetails = $("<div class='details'><a href='#'><i class='fa fa-chain'></i></a></div>");
            $("a", newDetails).click(function() {
                alert("this is where a popup would happen");
            });
            that.before(newDetails);
            that.addClass('details-modal-data').removeClass('details').hide();
        })



    });
})(jQuery);
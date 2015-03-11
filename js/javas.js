(function ($) {
    $(document).ready(function () {
        var modalBG = $(".modal-background");
        var currentModal = null;

        $("#navbar-button").click(function () {
            $("body").toggleClass("opened");
        });
        $("#Grid").mixitup();

        modalBG.click(function() {
            if (currentModal)
                currentModal.hide();
            modalBG.css({opacity: 0}).hide();
        });
        
        $(".project .details").each(function() {
            var that = $(this);
            var newDetails = $("<div class='details'><a href='#'><i class='fa fa-chain'></i></a></div>");
            var closeButton = $("<a href='#' class='close clearfix'>Close</a>");
            $("a", newDetails).click(function(e) {
                e.preventDefault();
                that.show();
                currentModal = that;
                modalBG.css({opacity:.5}).show();
            });
            closeButton.click(function(e) {
                e.preventDefault();
                that.hide();
                modalBG.css({opacity: 0}).hide();
            });
            that.before(newDetails);
            $(".links", that).append(closeButton);
            that.addClass('details-modal-data').removeClass('details').hide();
        });
    });
})(jQuery);
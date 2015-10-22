// Judge me not on this shitty code, judge me on how quickly I made it (In one night. Srsly)

(function ($) {
    $(document).ready(function () {
        var modalBG = $(".modal-background");
        var currentModal = null;

        $("#navbar-button").click(function () {
            $("body").toggleClass("opened");
        });

        modalBG.click(function() {
            if (currentModal)
                currentModal.hide();
            modalBG.css({opacity: 0}).hide();
        });
        
        $(".project .details").each(function() {
            var that = $(this);
            var title = that.find("h1").text();
            var newDetails = $("<div class='details'><a href='#'>" +title + "</a></div>");
            var closeButton = $("<a href='#' class='close-dialog clearfix'>Close</a>");
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

        $('#name').floatlabel();
        $('#from').floatlabel();
        $('#subject').floatlabel();
        $('#message').floatlabel();

        $("#send-email").click(function(e) {
            e.preventDefault();

            var name = $('#name').val();
            var from = $('#from').val();
            var subject = $('#subject').val();
            var message = $('#message').val();

            // Save me ECMAScript 6!!! //
            var payload = {
                name: name,
                from: from,
                subject: subject,
                text: message
            };

            $.get("http://email.mrlopez.me/email", payload)
                .done(function() {
                    $(".message-success").show();
                    $('form').find("input[type=text], textarea").val("");
                })
                .fail(function() {
                    $(".message-error").show();
                })
        })
    });
})(jQuery);
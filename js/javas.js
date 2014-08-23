(function ($) {
    $(document).ready(function () {
        $("#navbar-collapse-under, #navbar-collapse-over").click(function () {
            $("#sidebar").toggleClass("opened");
        });
        $("#Grid").mixitup();
        
        $('.not-ready').click(function(e) {
            e.preventDefault();
            var $this = $(this);
            $this.toggleClass("hover");
        });
    });
})(jQuery);
$(document).ready(function() {
  // Floating-Fixed table of contents
  setTimeout(function() {
    var tocWrapperHeight = 0; // Max height of ads.
    var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
    var socialHeight = 0; // Height of unloaded social media in footer.
    var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
    var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

    if ($('nav').length) {
      $('.toc-wrapper').pushpin({
        top: $('nav').outerHeight(),
        bottom: bottomOffset
      });
    }
    else if ($('#index-banner').length) {
      $('.toc-wrapper').pushpin({
        top: $('#index-banner').outerHeight(),
        bottom: bottomOffset
      });
    }
    else {
      $('.toc-wrapper').pushpin({
        top: 0,
        bottom: bottomOffset
      });
    }
  }, 100);

  $(".button-collapse").sideNav({'edge': 'left'});
  $('.collapsible').collapsible({});
  $('.scrollspy').scrollSpy();
});
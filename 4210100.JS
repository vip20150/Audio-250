(function($) {
  $.fn.feed = function(options) {
    
  }
})(jQuery);

$(function() {
  $('.feed').each(function(idx, el) {
    var $el = $(el);
    var id = $el.attr('id');
    
    if (typeof id == 'undefined' || id === false) {
       $el.attr('id', 'feed-' + idx);
    }
    
    $el.find('.btn-show-more').attr('aria-controls', $el.attr('id'));
  });
  
  $('.feed').attr({
    'role' : 'region',
    'aria-live' : 'polite',
    'aria-relevant' : 'additions'
  });
  
  $('.feed .btn-show-more').attr({
    'role' : 'button',
    'aria-disabled' : 'false'
  });
  
  $('.feed .btn-show-more').click(function(e) {
    e.preventDefault();
    var $this = $(this);
    
    $this.before('<div class="anim-container" />');
    $animContainer = $('.anim-container').hide();
    
    $newNewsItems = $('.feed .item:first').clone(); // Replace with AJAX request
    $($newNewsItems).appendTo($animContainer);
    
    $animContainer.slideDown(400, function() {
      $this.before($('.anim-container .item').detach());
      $animContainer.remove();
      // ARIA polite for update
    });
  });
});

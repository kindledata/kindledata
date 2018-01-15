$.featherlightGallery.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('img').attr('alt');
  this.$instance.find('.caption').remove();
  $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
}

.featherlight-image {
    width: auto !important;
    height: auto !important;
    max-width: 100%;
    max-height: 70vh;
};
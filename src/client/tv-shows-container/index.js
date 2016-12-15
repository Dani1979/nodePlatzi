/**
 * Module Dependencies
 */

import $ from 'jquery'

var $tvShowsContainer = $('#app-body').find('.tv-shows')

$tvShowsContainer.on('click', 'button.like', function (ev) {
  var $this = $(this);
  var $article =$this.closest('.tv-show')
  let id= $article.data('id')
  $.post('/api/vote/'+id,function(){
    $article.toggleClass('liked')
  })

})

export default $tvShowsContainer

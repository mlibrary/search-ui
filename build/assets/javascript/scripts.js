// self executing function to handle site message dismiss functionality
(function() {
  var dismiss = function() {
    var dismiss_elements = document.getElementsByClassName('dismiss');

    var dismissElement = function() {
      document.getElementById(this.getAttribute('data-dismiss').className += ' hide')
    }

    for (var i = 0; i < dismiss_elements.length; i++) {
      var element = dismiss_elements[i];
      element.addEventListener('click', dismissElement);
    }
  }

  document.addEventListener("DOMContentLoaded", function(event) {
    dismiss()
  })
})

var datastoreNavigation = new Vue({
  el: '#datastore-navigation',
  data: {
    datastores: [
      { name: 'Quick Search', isActive: true, url: '/quick-search' },
      { name: 'Catalog', url: '/catalog' },
      { name: 'Articles', url: '/articles' },
      { name: 'Online Journals', url: '/online-journals' },
      { name: 'Databases', url: '/databases' },
      { name: 'More', url: '/more' }
    ]
  }
})

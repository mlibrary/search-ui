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

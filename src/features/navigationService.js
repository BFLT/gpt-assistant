class NavigationService {
  constructor() {
    this.routes = {
      '#users': { label: 'Users', parent: null },
      '#users#todos': { label: 'Todos', parent: '#users' },
      '#users#posts': { label: 'Posts', parent: '#users' },
      '#users#posts#comments': { label: 'Comments', parent: '#users#posts' }
    };
    this.currentRoute = '#users';
  }

  setCurrentRoute(route) {
    this.currentRoute = route;
  }

  getCurrentRoute() {
    return this.currentRoute;
  }

  getBreadcrumbs() {
    const breadcrumbs = [];
    let current = this.currentRoute;

    while (current) {
      const route = this.routes[current];
      if (route) {
        breadcrumbs.unshift({ label: route.label, route: current });
        current = route.parent;
      } else {
        break;
      }
    }

    return breadcrumbs;
  }

  navigateTo(route) {
    if (this.routes[route]) {
      this.setCurrentRoute(route);
      window.location.hash = route;
      return true;
    }
    return false;
  }

  getRouteInfo(route) {
    return this.routes[route] || null;
  }
}

export default NavigationService;
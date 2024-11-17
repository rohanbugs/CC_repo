export const BREADCRUMBS: { [key: string]: { crumbs: string[]; description?: string } } = {
  '/settings': {
    crumbs: ['Settings'],
    description: 'Manage your account settings, including personal information, security preferences, and notification settings.',
  },
  '/settings/account': {
    crumbs: ['Settings', 'Account'],
    description: 'Manage your account settings, including personal information, security preferences, and notification settings.',
  },
  '/settings/security': {
    crumbs: ['Settings', 'Security'],
    description: 'The Insights page provides a comprehensive view of key metrics and trends derived from user interactions with your product with your product.',
  },
  '/claims': {
    crumbs: ['Claims'],
    description: 'View and manage all your claims and insights.',
  },
  '/claims/allinsights': {
    crumbs: ['Claims', 'All Insights'],
    description: 'The Insights page provides a comprehensive view of key metrics and trends derived from user interactions with your product with your product.',
  },
  '/claims/unassigned': {
    crumbs: ['Claims', 'Unassigned'],
    description: 'View claims that have not yet been assigned.',
  },
  '/claims/priority': {
    crumbs: ['Claims', 'Priority'],
    description: 'Manage high-priority claims effectively.',
  },
};

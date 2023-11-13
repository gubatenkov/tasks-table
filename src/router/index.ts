import {
  lazyRouteComponent,
  RootRoute,
  redirect,
  Router,
  Route,
} from '@tanstack/react-router'
import { useUserStore } from '@/stores/userStore.ts'

// Register router for maximum type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Create a root route
const rootRoute = new RootRoute({})

const DashboardRoute = new Route({
  beforeLoad: () => {
    document.title = "Welcome! What's new today?"
    const isAuthenticated = useUserStore.getState().isAuthenticated

    if (!isAuthenticated) {
      throw redirect({
        to: '/login',
      })
    }
  },
  component: lazyRouteComponent(() => import('./routes/Dashboard')),
  getParentRoute: () => rootRoute,
  path: '/',
})

const LoginRoute = new Route({
  beforeLoad: () => {
    document.title = 'Welcome to login page!'
    const isAuthenticated = useUserStore.getState().isAuthenticated

    if (isAuthenticated) {
      throw redirect({
        to: '/',
      })
    }
  },
  component: lazyRouteComponent(() => import('./routes/Login')),
  getParentRoute: () => rootRoute,
  path: '/login',
})

const NonExistingRoutes = new Route({
  beforeLoad: () => {
    throw redirect({
      to: '/',
    })
    // eslint-disable-next-line
    return
  },
  getParentRoute: () => rootRoute,
  path: '*',
})

// Create the route tree using your routes
const routeTree = rootRoute.addChildren([
  NonExistingRoutes,
  DashboardRoute,
  LoginRoute,
])

// Create the router using your route tree
export const router = new Router({ routeTree })

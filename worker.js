export const api = {
  icon: '🚀',
  name: 'cron.do',
  description: 'CRON Scheduler API',
  url: 'https://cron.do/api',
  type: 'https://apis.do/tools',
  endpoints: {
    listCategories: 'https://cron.do/api',
    getCategory: 'https://cron.do/:type',
  },
  site: 'https://cron.do',
  login: 'https://cron.do/login',
  signup: 'https://cron.do/signup',
  subscribe: 'https://cron.do/subscribe',
  repo: 'https://github.com/drivly/cron.do',
}

export const gettingStarted = [
  `If you don't already have a JSON Viewer Browser Extension, get that first:`,
  `https://extensions.do`,
]

export const examples = {
  listItems: 'https://cron.do/worker',
}

export default {
  fetch: async (req, env) => {
    const { user, hostname, pathname, rootPath, pathSegments, query } = await env.CTX.fetch(req).then(res => res.json())
    if (rootPath) return json({ api, gettingStarted, examples, user })
    
    // TODO: Implement this
    const [ resource, id ] = pathSegments
    const data = { resource, id, hello: user.city }
    
    return json({ api, data, user })
  }
}

const json = obj => new Response(JSON.stringify(obj, null, 2), { headers: { 'content-type': 'application/json; charset=utf-8' }})

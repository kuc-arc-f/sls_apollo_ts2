import { handlerPath } from '@libs/handlerResolver';

export const graphql = {
  handler: `${handlerPath(__dirname)}/handler.graphqlHandler`,
  events: [
    {
      http: {
        method: 'get',
        path: 'graphql',
        cors: true,
      }
    },
    {
      http: {
        method: 'post',
        path: 'graphql',
        cors: true,
      }
    }    
  ]      
}

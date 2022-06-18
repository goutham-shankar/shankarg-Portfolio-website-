import { request, gql } from 'graphql-request'
const graphqlAPI = 'https://api-ap-south-1.graphcms.com/v2/cl4jrzk5m524o01yr2o8r7ghi/master'
export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        post {
          id
          excerpt
          content {
            text
          }
          photo {
            url
          }

          title
          projectLink
        }
      }
      
      
      
    `
    const result = await request(graphqlAPI, query)
    return result.post
}
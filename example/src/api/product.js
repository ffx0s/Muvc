import request from './request'

const KEY = 'r4Q4OmGxFypj2jvIBlfFYFn4gxH2YKnDmsIoK5YpsCM'

export function getProducts(query) {
  return request({
    url: `https://api.unsplash.com/photos?client_id=${KEY}`,
    method: 'get',
    params: query
  })
}

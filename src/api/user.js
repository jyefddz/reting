import request from '@/utils/request'

export const login = (username, password) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}

// 用户信息
export const getUserInfo = () => {
  return request({
    url: '/user',
    method: 'GET'
  })
}

// 查看收藏
export const getUserCollect = () => {
  return request({
    url: '/user/favorites'
  })
}

// 查看出租
export const getUserRent = () => {
  return request({
    url: '/user/houses'
  })
}

// 房屋信息
export const getHouse = (id) => {
  return request({
    url: `/houses/${id}`
  })
}

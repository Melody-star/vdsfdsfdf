import request from '@/utils/request'

// 查询订单表列表
export function listOrder(query) {
  return request({
    url: '/yl/order/list',
    method: 'get',
    params: query
  })
}

// 查询订单表详细
export function getOrder(id) {
  return request({
    url: '/yl/order/' + id,
    method: 'get'
  })
}

// 新增订单表
export function addOrder(data) {
  return request({
    url: '/yl/order',
    method: 'post',
    data: data
  })
}

// 修改订单表
export function updateOrder(data) {
  return request({
    url: '/yl/order',
    method: 'put',
    data: data
  })
}

// 删除订单表
export function delOrder(id) {
  return request({
    url: '/yl/order/' + id,
    method: 'delete'
  })
}

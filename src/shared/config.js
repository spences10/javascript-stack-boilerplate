// @flow

export const WEB_PORT = process.env.PORT || 8080
export const STATIC_PATH = '/static'
export const APP_NAME = 'Just another hello world app!'

export const WDS_PORT = 8081

export const APP_CONTAINER_CLASS = 'js-app'
export const APP_CONTAINER_SELECTOR = `.${APP_CONTAINER_CLASS}`
export const JSS_SSR_CLASS = 'jss-ssr'
export const JSS_SSR_SELECTOR = `.${JSS_SSR_CLASS}`

export const IO_CONNECT = 'connect'
export const IO_DISCONNECT = 'disconnect'
export const IO_CLIENT_HELLO = 'IO_CLIENT_HELLO'
export const IO_CLIENT_JOIN_ROOM = 'IO_CLIENT_JOIN_ROOM'
export const IO_SERVER_HELLO = 'IO_SERVER_HELLO'

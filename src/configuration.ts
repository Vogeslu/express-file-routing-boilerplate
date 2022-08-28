type Configuration = {
  hostname: string
  port: number
}

export default {
  hostname: process.env.HOSTNAME || 'http://localhost',
  port: process.env.PORT || 8000
} as Configuration

import createClient from 'openapi-fetch'
import type { paths } from '@/types/schema'

const client = createClient<paths>({ baseUrl: `http://127.0.0.1:4010/api/v1` })
export default client;

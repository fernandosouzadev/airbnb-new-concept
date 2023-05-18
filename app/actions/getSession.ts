import { optionsAuth } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'

export default async function getSession() {
  return await getServerSession(optionsAuth)
}

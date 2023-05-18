import prisma from '@/app/libs/prismadb'
import getCurrentUser from './getCurrentUser'

export default async function getConversations() {
  const currentUser = await getCurrentUser()

  if (!currentUser?.id) {
    return []
  }

  try {
    const conversations = await prisma.conversation.findMany({
      orderBy: {
        lastMessageAt: 'desc',
      },
      where: {
        userIds: {
          has: currentUser.id,
        },
      },
      include: {
        users: true,
        listing: {
          include: {
            reservations: true,
          },
        },
        messages: {
          include: {
            sender: true,
          },
        },
      },
    })

    return conversations
  } catch (error: any) {
    return []
  }
}

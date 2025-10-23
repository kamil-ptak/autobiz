'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function syncUser() {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const user = await currentUser()
    if (!user) throw new Error('User not found')

    // Check if user exists in database
    const existingUser = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!existingUser) {
      // Create new user in database
      await prisma.user.create({
        data: {
          clerkId: userId,
          email: user.emailAddresses[0]?.emailAddress || '',
          name: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        },
      })
    }

    return { success: true }
  } catch (error) {
    console.error('Error syncing user:', error)
    return { success: false, error: 'Failed to sync user' }
  }
}

export async function getCurrentUser() {
  try {
    const { userId } = await auth()
    if (!userId) return null

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    return user
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

'use server'

import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getTransactions() {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) throw new Error('User not found')

    const transactions = await prisma.transaction.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    })

    return { success: true, data: transactions }
  } catch (error) {
    console.error('Error fetching transactions:', error)
    return { success: false, error: 'Failed to fetch transactions' }
  }
}

export async function createTransaction(data: {
  vehicleName: string
  purchasePrice: number
  sellingPrice: number
  taxType: string
  purchaseDate: Date
  saleDate?: Date
  notes?: string
}) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) throw new Error('User not found')

    const profit = data.sellingPrice - data.purchasePrice

    const transaction = await prisma.transaction.create({
      data: {
        ...data,
        profit,
        userId: user.id,
        status: data.saleDate ? 'sold' : 'active',
      },
    })

    revalidatePath('/transactions')
    revalidatePath('/dashboard')

    return { success: true, data: transaction }
  } catch (error) {
    console.error('Error creating transaction:', error)
    return { success: false, error: 'Failed to create transaction' }
  }
}

export async function deleteTransaction(id: string) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) throw new Error('User not found')

    await prisma.transaction.delete({
      where: { id, userId: user.id },
    })

    revalidatePath('/transactions')
    revalidatePath('/dashboard')

    return { success: true }
  } catch (error) {
    console.error('Error deleting transaction:', error)
    return { success: false, error: 'Failed to delete transaction' }
  }
}

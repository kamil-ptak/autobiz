'use server'

import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function getExpenses() {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) throw new Error('User not found')

    const expenses = await prisma.expense.findMany({
      where: { userId: user.id },
      orderBy: { date: 'desc' },
    })

    return { success: true, data: expenses }
  } catch (error) {
    console.error('Error fetching expenses:', error)
    return { success: false, error: 'Failed to fetch expenses' }
  }
}

export async function createExpense(data: {
  description: string
  amount: number
  category: string
  date: Date
  notes?: string
}) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) throw new Error('User not found')

    const expense = await prisma.expense.create({
      data: {
        ...data,
        userId: user.id,
      },
    })

    revalidatePath('/expenses')
    revalidatePath('/dashboard')

    return { success: true, data: expense }
  } catch (error) {
    console.error('Error creating expense:', error)
    return { success: false, error: 'Failed to create expense' }
  }
}

export async function deleteExpense(id: string) {
  try {
    const { userId } = await auth()
    if (!userId) throw new Error('Unauthorized')

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
    })

    if (!user) throw new Error('User not found')

    await prisma.expense.delete({
      where: { id, userId: user.id },
    })

    revalidatePath('/expenses')
    revalidatePath('/dashboard')

    return { success: true }
  } catch (error) {
    console.error('Error deleting expense:', error)
    return { success: false, error: 'Failed to delete expense' }
  }
}

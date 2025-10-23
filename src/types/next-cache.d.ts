declare module 'next/cache' {
  export function revalidatePath(path: string, type?: 'page' | 'layout'): void
  export function revalidateTag(tag: string): void
  export function unstable_cache<T>(
    fn: () => Promise<T>,
    keyParts?: string[],
    options?: {
      revalidate?: number | false
      tags?: string[]
    }
  ): () => Promise<T>
}

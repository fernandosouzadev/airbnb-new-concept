'use client'

import { useRouter } from 'next/navigation'
import { Button } from './Button'
import { Heading } from './Heding'

interface EmptyStateProps {
  title?: string
  subtitle?: string
  showReset?: boolean
  actionLabel?: string
}

export function EmptyState({
  title = 'No Exact matches',
  subtitle = 'Try changing or removing some of your filters',
  showReset,
  actionLabel,
}: EmptyStateProps) {
  const router = useRouter()
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label={actionLabel ? actionLabel : 'Remove  all filters'}
            onClick={() => router.push('/')}
          />
        )}
      </div>
    </div>
  )
}

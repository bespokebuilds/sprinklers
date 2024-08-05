import clsx from 'clsx'

export function Prose({ as, className, ...props }) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        className,
        'prose prose-orange max-w-none dark:prose-invert dark:text-orange-400',
        // headings
        'prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]',
        // lead
        'prose-lead:text-orange-500 dark:prose-lead:text-orange-400',
        // links
        'prose-a:font-semibold dark:prose-a:text-amber-400',
        // link underline
        'prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.amber.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.orange.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.amber.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px]',
        // pre and fence backgrounds
        'prose-pre:rounded-xl prose-pre:bg-red-950/90 prose-pre:shadow-lg dark:prose-pre:bg-red-800/10 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-orange-300/10',
        // hr
        'dark:prose-hr:border-orange-800',
      )}
      {...props}
    />
  )
}

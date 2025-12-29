
import { cn } from "@sglara/cn"
import Link from "next/link";

/**
 * Maps ordinary html tags to stylized containers
 */
export const MarkdownComponents = {
  h1: ({ className, ...props }: any) => (
    <h1
      className={cn(
        "font-mono text-3xl text-white mt-10 mb-6 pb-2 border-b border-ide-comment",
        "before:content-['#_'] before:text-ide-comment",
        className
      )}
      {...props}
    />
  ),

  h2: ({ className, ...props }: any) => (
    <h2
      className={cn(
        "font-mono text-2xl text-gray-200 mt-12 mb-4",
        "before:content-['##_'] before:text-ide-comment before:text-lg",
        className
      )}
      {...props}
    />
  ),

  h3: ({ className, ...props }: any) => (
    <h3
      className={cn(
        "font-mono text-xl text-gray-300 mt-8 mb-3",
        "before:content-['###_'] before:text-ide-comment before:text-base",
        className
      )}
      {...props}
    />
  ),

  p: ({ className, ...props }: any) => (
    <p
      className={cn(
        "font-sans text-ide-fg leading-relaxed my-3 text-lg",
        className
      )}
      {...props}
    />
  ),

  a: ({ className, href, ...props }: any) => (
    <Link
      href={href}
      className={cn(
        "text-ide-keyword hover:underline underline-offset-4 decoration-1 decoration-ide-keyword/50 transition-all",
        className
      )}
      {...props}
    />
  ),

  blockquote: ({ className, ...props }: any) => (
    <blockquote
      className={cn(
        "relative pl-6 my-3 px-6 py-3 border-l-2 border-ide-comment bg-ide-comment/5 rounded-r-md",
        "font-hand text-ide-comment italic text-lg",
        "before:absolute before:-top-3 before:left-2 before:text-xs before:font-mono before:not-italic before:opacity-50",
        className
      )}
      {...props}
    />
  ),

  pre: ({ className, ...props }: any) => (
    <pre
      className={cn(
        "bg-[#0a0a0a] border border-ide-border overflow-x-auto p-4 my-6 rounded-none", // 直角
        "font-mono text-sm leading-6 scrollbar-thin scrollbar-thumb-ide-border",
        className
      )}
      {...props}
    />
  ),

  code: ({ className, ...props }: any) => (
    <code
      className={cn(
        "font-mono text-ide-string bg-white/5 px-1 py-0.5 rounded text-sm",
        className
      )}
      {...props}
    />
  ),

  ul: ({ className, ...props }: any) => (
    <ul className={cn("list-none pl-4 mb-6 space-y-2 text-lg", className)} {...props} />
  ),

  li: ({ className, ...props }: any) => (
    <li
      className={cn(
        "font-sans text-ide-fg relative pl-6 text-lg",
        "before:content-['>'] before:absolute before:left-0 before:text-ide-comment before:font-mono",
        className
      )}
      {...props}
    />
  ),

  img: ({ className, alt, ...props }: any) => (
    <figure className="my-8">
      <img
        className={cn(
          "w-full h-auto border border-ide-border bg-black",
          className
        )}
        alt={alt}
        {...props}
      />
      {alt && (
        <figcaption className="text-center font-mono text-xs text-gray-500 mt-2">
          fig: {alt}
        </figcaption>
      )}
    </figure>
  ),

  hr: ({ className, ...props }: any) => (
    <hr className={cn("my-6 border-ide-comment border-2", className)} {...props} />
  ),
};

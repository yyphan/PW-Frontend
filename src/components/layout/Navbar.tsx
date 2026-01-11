"use client";

import { usePathname, useRouter } from "next/navigation";
import VarButton from "@/components/ui/VarButton";
import Link from "next/link";
import { getLangDict } from "@/lib/constants"
import { useParams } from 'next/navigation';


export default function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  const router = useRouter();

  const currentLang = params.lang as "en" | "cn" || "en";
  const langDict = getLangDict(currentLang);
  const NavLinks = [
    {
      label: `"${langDict.topic.techie}"`,
      href: `/${currentLang}/techie`
    },
    {
      label: `"${langDict.topic.reader}"`,
      href: `/${currentLang}/reader`
    }
  ];

  const switchLang = (newLang: string) => {
    if (newLang === currentLang) return;
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <header className="fixed top-0 left-0 w-full h-auto sm:h-[60px] bg-ide-bg border-b border-ide-border z-50 font-mono text-sm sm:text-base">
      <div className="w-full h-full px-4 py-3 sm:py-0 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-y-2 sm:gap-x-4">

        {/* Brand & Topics Group */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 w-full sm:w-auto">
          {/* Brand - Row 1 on mobile */}
          <div className="flex items-center gap-2 sm:gap-3 text-xl sm:text-3xl w-full sm:w-auto">
            <span className="text-ide-keyword">var</span>
            <Link
              href={`/${currentLang}/techie`}
              className="text-ide-var font-bold cursor-pointer"
            >
              YaoYifan
            </Link>
            <span className="text-ide-fg">=</span>
          </div>

          {/* Navigation Links - Row 2 on mobile */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-start">
            {NavLinks.map((item, index) => (
              <div key={item.href} className="flex items-center gap-2">

                <VarButton
                  label={item.label}
                  href={item.href}
                  isActive={pathname.includes(item.href)}
                  overrideClassName="text-lg sm:text-2xl"
                />

                {index < NavLinks.length - 1 && (
                  <span className="text-ide-keyword text-bold text-lg sm:text-2xl">|</span>
                )}

                {index === NavLinks.length - 1 && (
                  <div className="w-[0.4em] h-[1em] bg-ide-keyword animate-soft-blink translate-y-[1px]" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Language Toggle - Row 3 on mobile */}
        <div className="text-ide-fg flex items-center gap-1 text-xs sm:text-sm w-full sm:w-auto justify-end">
          <span className="text-zinc-500">[</span>

          <VarButton
            label="'EN'"
            isActive={currentLang === "en"}
            onClick={() => switchLang("en")}
            overrideClassName="text-sm"
          />

          <span className="text-zinc-600">,</span>

          <VarButton
            label="'中文'"
            isActive={currentLang === "cn"}
            onClick={() => switchLang("cn")}
            overrideClassName="text-sm"
          />

          <span className="text-zinc-500">]</span>
        </div>

      </div>
    </header>
  );
}
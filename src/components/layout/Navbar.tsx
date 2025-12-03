"use client";

import { usePathname } from "next/navigation";
import VarButton from "@/components/ui/VarButton";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const NavLinks = [
    {
      label: "\"Techie\"",
      href: "/",
    },
    {
      label: "\"Reader\"",
      href: "/reader",
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-[60px] bg-ide-bg border-b border-ide-border z-50 font-mono text-sm sm:text-base">
      <div className="w-full h-full px-6 flex items-center justify-between">
        
        <div className="flex items-center gap-2 sm:gap-3 text-3xl">
          <span className="text-ide-keyword">var</span>
          <Link
            href="/"
            className="text-ide-var font-bold cursor-pointer" 
          >
            YaoYifan
          </Link>
          <span className="text-ide-fg">=</span>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            {NavLinks.map((item, index) => (
              <div key={item.href} className="flex items-center gap-2">
                
                <VarButton 
                  label={item.label} 
                  href={item.href} 
                  isActive={pathname === item.href} 
                  overrideClassName="text-2xl"
                />
                
                {index < NavLinks.length - 1 && (
                  <span className="text-ide-keyword text-bold text-2xl">|</span>
                )}

                {index === NavLinks.length - 1 && (
                  <div className="w-[0.4em] h-[1em] bg-ide-keyword animate-soft-blink translate-y-[1px]" />                
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Language Toggle */}
        <div className="text-ide-fg flex items-center gap-1 text-xs sm:text-sm">
          <span className="text-zinc-500">[</span>
          
          <button className="text-ide-string font-bold hover:brightness-110">
            &apos;EN&apos;
          </button>
          
          <span className="text-zinc-600">,</span>
          
          <button className="text-zinc-500 hover:text-ide-string transition-colors">
            &apos;CN&apos;
          </button>
          
          <span className="text-zinc-500">]</span>
        </div>
        
      </div>
    </header>
  );
}
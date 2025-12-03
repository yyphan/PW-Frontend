import Link from "next/link";
import { cn } from "@sglara/cn";

interface VarButtonProps {
    label: string;
    isActive: boolean;
    href?: string;
    onClick?: () => void;
    overrideClassName?: string;
}

/**
 * A button that looks like a variable in a code editor
 **/
export default function VarButton({ label, isActive, href, onClick, overrideClassName }: VarButtonProps) {
    const baseContainer = "inline-flex items-center justify-center px-2 py-0.5 rounded-sm border text-sm transition-all duration-200 select-none cursor-pointer";
    const activeContainer = "border-ide-string bg-ide-string/10 text-ide-string font-medium shadow-[0_0_10px_rgba(206,145,120,0.1)]";
    const inactiveContainer = "border-transparent text-zinc-500 hover:bg-[#2d2d2d] hover:text-zinc-300 hover:border-zinc-700";

    const containerClass = cn(
        baseContainer,
        isActive ? activeContainer : inactiveContainer,
        overrideClassName
    );

    if (href) {
        return (
            <Link href={href} className={containerClass}>
                {label}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={containerClass}>
            {label}
        </button>
    );
}

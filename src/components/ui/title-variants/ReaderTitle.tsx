export default function ReaderTitle({ title }: { title: string }) {
    return (
        <div className="flex flex-col items-start gap-1 text-3xl font-medium sm:flex-row sm:items-center sm:gap-2">
            <span className="text-ide-func font-semibold">
                Read<span className="text-ide-func font-semibold">(</span>
            </span>
            <span className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-none decoration-clone shadow-none sm:pl-0 pl-4">
                "{title}"
            </span>
            <span className="text-ide-func font-semibold">)</span>
        </div>
    );
}

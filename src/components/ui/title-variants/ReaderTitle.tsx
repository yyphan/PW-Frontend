export default function ReaderTitle({ title }: { title: string }) {
    return (
        <div className="flex flex-wrap items-center gap-2 text-3xl font-medium">
            <span className="text-ide-func font-semibold">Read</span>
            <span className="text-ide-func font-semibold">(</span>
            <span className="font-sans font-bold text-2xl sm:text-3xl tracking-tight leading-none decoration-clone shadow-none">
                "{title}"
            </span>
            <span className="text-ide-func font-semibold">)</span>
        </div>
    );
}

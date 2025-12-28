export default function ReaderTitle({ title }: { title: string }) {
    return (
        <div className="flex flex-wrap items-center gap-2 text-3xl font-medium">
            <span style={{ color: '#dcdcaa' }}>read</span><span style={{ color: '#d4d4d4' }}>(</span>
            <span style={{ color: '#ce9178' }}>"{title}"</span>
            <span style={{ color: '#d4d4d4' }}>)</span>
        </div>
    );
}

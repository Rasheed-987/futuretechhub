export default function Container({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={`mx-auto  relative ${className}`}>
            {children}
        </div>
    );
}

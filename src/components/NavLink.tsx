import Link from "next/link";

type NavLinkProps = {
    text: string;
    href: string;
    visible: boolean;
    index: number;
};

export default function NavLink({
    text,
    href,
    index,
    visible
}: NavLinkProps) {
    return (
        <div className={`text-white mb-2 text-lg nav-link-${index} ${visible ? '' : 'nav-link-start'}`}>
            <Link href={href}>{text}</Link>    
        </div>
    )
};
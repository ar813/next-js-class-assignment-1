import Link from "next/link"

export default function Nav() {
    return (
        <div className="box">
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/aboutMenu">About</Link></li>
                <li><Link href="/contactMenu">Contact</Link></li>
                <li><Link href="/servicesMenu">Services</Link></li>
            </ul>
        </div>
    );
}

import css from "./servicesMenu.module.css"
import Link from "next/link"


export default function ServicesPage() {
    return (
        <div>
            <div className={css.div}>
                <h1 className={css.heading}>Our Services</h1>
                <div className={css.container}>
                    <h3 className={css.subHeading}><Link href="/servicesMenu/apiIntegration">API Integration</Link></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque voluptatem. Explicabo iusto consequatur quia! Excepturi quaerat amet voluptatibus animi iusto vel sint, iure possimus repellendus est incidunt ducimu.</p>
                </div>
                <div className={css.container}>
                    <h3 className={css.subHeading}><Link href="/servicesMenu/migrationServices">Migration Services</Link></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque voluptatem. Explicabo iusto consequatur quia! Excepturi quaerat amet voluptatibus animi iusto vel sint, iure possimus repellendus est incidunt ducimu.</p>
                </div>
                <div className={css.container}>
                    <h3 className={css.subHeading}><Link href="/servicesMenu/uiAndUxDesign">UI/UX Design</Link></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, neque voluptatem. Explicabo iusto consequatur quia! Excepturi quaerat amet voluptatibus animi iusto vel sint, iure possimus repellendus est incidunt ducimu.</p>
                </div>
            </div>
        </div>
    );
}

import styles from './Banner.module.css';
import Link from "@docusaurus/Link";

export default function Banner() {
    return (
        <div className={styles.erkenErisim}>
            Bu site henüz erken erişim aşamasındadır. Gördüğünüz hata veya eksiklikleri <Link href="mailto:imcanisik@gmail.com">imcanisik@gmail.com</Link> adresine mail olarak iletebilirseniz müteşekkür olurum.
        </div>
    );
}
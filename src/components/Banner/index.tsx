import React from "react";
import Link from "@docusaurus/Link";

export default function Banner() {
    return (
        <div className="bg-yellow-200 font-bold text-yellow-700 p-2 text-center w-full rounded">
            Bu site henüz erken erişim aşamasındadır. Gördüğünüz hata veya eksiklikleri <Link className="text-blue-800" href="mailto:imcanisik@gmail.com">imcanisik@gmail.com</Link> adresine mail olarak iletebilirseniz müteşekkür olurum.
        </div>
    );
}
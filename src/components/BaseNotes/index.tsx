import React from "react";
import Admonition from "@theme/Admonition";

interface NoteDetails {
    title: string;
    videoUrl: string;
    noteUrl: string;
    hideAlerts?: boolean;
}

// kariyer planlama ders notlarını otomatikleştir.
export default function BaseNotes({title, videoUrl, noteUrl, hideAlerts = false}: NoteDetails) {
    return (
        <>
            {
                hideAlerts === false &&
                <Admonition type="info" title="Bu hafta için özel bir ders notu alınmadı.">
                    <p>Aşağıdaki tablodan dersin videosu ve notlarına ulaşabilirsiniz.</p>
                </Admonition>
            }

            <table>
                <thead>
                <tr>
                    <th>Ders Videosu</th>
                    <th>Ders Notu</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                        <a href={videoUrl}
                           target="_blank">{title}, Ders Videosu</a>
                    </td>
                    <td>
                        <a href={noteUrl}
                           target="_blank">{title}, Ders Notu</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}
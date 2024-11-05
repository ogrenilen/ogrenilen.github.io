import React from 'react';
import Admonition from '@theme/Admonition';

interface LessonDetails {
    name: string;
}

export default function LessonIntro({ name }: LessonDetails) {
    return (
        <>
            <p>Harran Üniversitesi 2024 Güz Döneminde Web Tasarım ve Kodlama Bölümünün dersi olan <code>{name}</code> ders notları.
            </p>

            <Admonition type="warning" title="Erken Erişim">
                <p>Bu site henüz tamamlanmadı ve tamamlanması biraz süre alacaktır. Eğer bana destek olmak ister notlarınızı paylaşarak eğitim sıkıntısı çeken türk gençlerimize katkıda bulunmak isterseniz <a href="#">bu bağlantıyı</a> kullanınız.
                </p>
            </Admonition>
        </>
    );
}
import { classNames } from '@/lib/classNames';
import cls from './AboutUsContent.module.scss';
import {MainContainer} from "@/components/MainContainer";

interface AboutUsContentProps {
    className?: string;
}

export const AboutUsContent = (props: AboutUsContentProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.AboutUsContent, {}, [className])}>
            <MainContainer>
                <div className={cls.AboutUsInner}>
                    <p><span>Game Store</span> — место, где начинается ваше игровое приключение! Мы специализируемся на
                        продаже игр для
                        <span>PlayStation 4, PlayStation 5, Xbox, Nintendo Switch и PC</span>, предлагая вам только
                        лучшие новинки и культовые
                        хиты.</p>
                    <p>Наша миссия — объединять любителей игр, предоставляя широкий выбор продуктов, от захватывающих
                        экшенов до расслабляющих стратегий. Мы понимаем, насколько важна каждая деталь, поэтому
                        тщательно
                        отбираем каждую игру, чтобы вы получили максимум удовольствия от виртуальных миров.</p>
                    <p>Почему выбирают нас?</p>
                    <ul>
                        <li>Актуальный каталог: все популярные игры, свежие релизы и редкие шедевры в одном месте.</li>
                        <li>Качество и оригинальность: мы гарантируем официальные издания и комфортные условия
                            покупки.
                        </li>
                        <li>Поддержка и сервис: дружелюбная команда всегда готова помочь с выбором и ответить на ваши
                            вопросы.
                        </li>
                    </ul>
                    <p>Погрузитесь в уникальную атмосферу гейминга вместе с <span>Game Store</span>. У нас вы найдете
                        то, что
                        вдохновляет, увлекает и объединяет миллионы игроков по всему миру. Будьте с нами, чтобы всегда
                        оставаться в эпицентре игровой культуры!</p>
                </div>
            </MainContainer>
        </div>
    )
};

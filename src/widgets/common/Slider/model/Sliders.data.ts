import {SlidersData} from "@/widgets/common/Slider/model/Sliders.types";
import ActivityMagicBallImage from "@/assets/mainPage/activities/magic-ball.svg";
import ActivityTreesImage from "@/assets/mainPage/activities/trees.svg";
import ActivityTargetImage from "@/assets/mainPage/activities/target.svg";
import ActivityMinecraftImage from "@/assets/mainPage/activities/minecraft.svg";
import ActivityQuizImage from "@/assets/mainPage/activities/quiz.svg";

import GiftMagicBall from "@/assets/common/gift-shop/gift-magic-ball.png";
import GiftSocks from "@/assets/common/gift-shop/gift-socks.png";
import GiftCalendar from "@/assets/common/gift-shop/gift-calendar.png";
import GiftScreensaver from "@/assets/common/gift-shop/gift-screensaver.png";

export const slidersData: SlidersData = {
    activities: [
        {
            giftTitle: "Викторина/тест",
            giftDescription: "Желающие проверить себя на предмет познаний в сфере магии, волшебства, а также фэнтезийных миров, не мешкайте и проходите тематический тест. Каждый день вас ждут новые задания. Всего будет 4 викторины по 10 вопросов. За успешное прохождение вы получите призовые очки и звания. Смелее!",
            ImageSource: ActivityMagicBallImage,
            imageAltDescription: "magic-ball.svg",
            buttonText: "Пройти тест",
            hrefLink: "/quiz"
        },
        {
            giftTitle: "\"ДОМАШНЯ ЕЛКА\"",
            giftDescription: "Домашняя ёлка покажет, кто всерьёз подготовил свой дом и зелёную гостью торжества к встрече Нового года - года Кролика. Укрась ёлку дома и сфотографируй!",
            ImageSource: ActivityTreesImage,
            imageAltDescription: "trees.svg\"",
            buttonText: "Перейти",
            hrefLink: "/gallery/christmas-tree-home"
        },
        {
            giftTitle: "АДВЕНТ-КАЛЕНДАРЬ",
            giftDescription: "Новый год - праздник времени! Поэтому календарь является одним из самых важных символов этого события. День за днем мы приближаемся к важной дате. Так давайте же наполним этот путь созиданием и радостью! Выполняйте задания Адвент-календаря и делитесь результатами с коллегами в чате.",
            ImageSource: ActivityTargetImage,
            imageAltDescription: "trees.svg",
            buttonText: "Перейти",
            hrefLink: "/#advent-calendar"
        },
        {
            giftTitle: "Minecraft",
            giftDescription: "Любители созидать в виртуальных пространствах смогут принять участие в игре «Майнкрафт» на выделенном сервере. Полагаем, что во время рабочего дня, несмотря на непреодолимую тягу строить миры из кибер-кубиков, вы сможете дотерпеть до вчера. И никто не запрещает делегировать эту функцию детям!",
            ImageSource: ActivityMinecraftImage,
            imageAltDescription: "target.svg",
            buttonText: "Перейти",
            hrefLink: "/minecraft#broadcast"
        },
        {
            giftTitle: "Командный Quiz",
            giftDescription: "23 декабря в 13 часов стартует командный Квиз-турнир. Собирайтесь в команды по 4-8 человек, придумывайте магическое название и девиз-заклинание, регистрируйтесь и сражайтесь за звание самых умных. Но только без черной магии! Как говориться, на «Гугл» надейся, а сам не плошай! \n" +
                "Внимание: результаты игры и победителей мы объявим во время основного эфира, который состоится 23 декабря с 15 до 17 часов. Присоединяйтесь!",
            ImageSource: ActivityQuizImage,
            imageAltDescription: "Quiz.svg",
            buttonText: "Перейти",
            hrefLink: ""
        },

    ],
    giftsShop: [
        {
            giftTitle: "Магический\nшар",
            giftDescription: "Раскрутил вправо - к удаче, \n" +
                "влево - к любви",
            giftPrice: 600,
            ImageSource: GiftMagicBall,
            imageAltDescription: "gift-magic-ball.png",
            buttonText: "Купить в личном кабинете",
            buttonTextAlt: "У вас не хватает баллов",
            hrefLink: ""
        },
        {
            giftTitle: "Носки\nскороходы ",
            giftDescription: "Наделяют способностью быстро преодолевать все преграды",
            giftPrice: 600,
            ImageSource: GiftSocks,
            imageAltDescription: "gift-socks.png",
            buttonText: "Купить в личном кабинете",
            buttonTextAlt: "У вас не хватает баллов",
            hrefLink: ""
        },
        {
            giftTitle: "Колдовской\nкалендарь",
            giftDescription: "При правильном заклинании превращает время в деньги",
            giftPrice: 600,
            ImageSource: GiftCalendar,
            imageAltDescription: "gift-calendar.png",
            buttonText: "Купить в личном кабинете",
            buttonTextAlt: "У вас не хватает баллов",
            hrefLink: ""
        },
        {
            giftTitle: "Заставка на\nрабочий стол",
            giftDescription: "Призывает верить в магию",
            giftPrice: 600,
            ImageSource: GiftScreensaver,
            imageAltDescription: "gift-screensaver.png",
            buttonText: "Купить в личном кабинете",
            buttonTextAlt: "У вас не хватает баллов",
            hrefLink: ""
        },
    ]
};
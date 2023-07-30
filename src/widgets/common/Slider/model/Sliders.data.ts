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
            cardTitle: "Викторина/тест",
            cardDescription: "Желающие проверить себя на предмет познаний в сфере магии, волшебства, а также фэнтезийных миров, не мешкайте и проходите тематический тест. Каждый день вас ждут новые задания. Всего будет 4 викторины по 10 вопросов. За успешное прохождение вы получите призовые очки и звания. Смелее!",
            imageSource: ActivityMagicBallImage,
            imageAltDescription: "magic-ball.svg"
        },
        {
            cardTitle: "\"ДОМАШНЯ ЕЛКА\"",
            cardDescription: "Домашняя ёлка покажет, кто всерьёз подготовил свой дом и зелёную гостью торжества к встрече Нового года - года Кролика. Укрась ёлку дома и сфотографируй!",
            imageSource: ActivityTreesImage,
            imageAltDescription: "trees.svg\""
        },
        {
            cardTitle: "АДВЕНТ-КАЛЕНДАРЬ",
            cardDescription: "Новый год - праздник времени! Поэтому календарь является одним из самых важных символов этого события. День за днем мы приближаемся к важной дате. Так давайте же наполним этот путь созиданием и радостью! Выполняйте задания Адвент-календаря и делитесь результатами с коллегами в чате.",
            imageSource: ActivityTargetImage,
            imageAltDescription: "trees.svg"
        },
        {
            cardTitle: "",
            cardDescription: "Любители созидать в виртуальных пространствах смогут принять участие в игре «Майнкрафт» на выделенном сервере. Полагаем, что во время рабочего дня, несмотря на непреодолимую тягу строить миры из кибер-кубиков, вы сможете дотерпеть до вчера. И никто не запрещает делегировать эту функцию детям!",
            imageSource: ActivityMinecraftImage,
            imageAltDescription: "target.svg"
        },
        {
            cardTitle: "Командный\n" +
                "Quiz",
            cardDescription: "23 декабря в 13 часов стартует командный Квиз-турнир. Собирайтесь в команды по 4-8 человек, придумывайте магическое название и девиз-заклинание, регистрируйтесь и сражайтесь за звание самых умных. Но только без черной магии! Как говориться, на «Гугл» надейся, а сам не плошай! \n" +
                "Внимание: результаты игры и победителей мы объявим во время основного эфира, который состоится 23 декабря с 15 до 17 часов. Присоединяйтесь!",
            imageSource: ActivityQuizImage,
            imageAltDescription: "quiz.svg"
        },

    ],
    giftsShop: [
        {
            cardTitle: "Магический шар",
            cardDescription: "Раскрутил вправо - к удаче, \n" +
                "влево - к любви",
            price: 600,
            imageSource: GiftMagicBall.src,
            imageAltDescription: "gift-magic-ball.png"
        },
        {
            cardTitle: "Носки скороходы ",
            cardDescription: "Наделяют способностью быстро преодолевать все преграды",
            price: 600,
            imageSource: GiftSocks.src,
            imageAltDescription: "gift-socks.png"
        },
        {
            cardTitle: "Колдовской календарь",
            cardDescription: "При правильном заклинании превращает время в деньги",
            price: 600,
            imageSource: GiftCalendar.src,
            imageAltDescription: "gift-calendar.png"
        },
        {
            cardTitle: "Заставка на рабочий стол",
            cardDescription: "Призывает верить в магию",
            price: 600,
            imageSource: GiftScreensaver.src,
            imageAltDescription: "gift-screensaver.png"
        },
    ]
};
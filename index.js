const TelegramBot = require('node-telegram-bot-api');

const token = '5155035474:AAE64EADP7QnIL5vI5qy1kf9JFJNA7t3YTc'

const bot = new TelegramBot(token, {polling: true});

const answer ={
    variables: [
        'Работаю', 'Не могу сегодня', 'Давай потом', 
        'Аня на маникюре', 'Аня у косметолога', 'Аня с подругой',
        'Не, впадлу бухать', 'Та я ебал', 'Не, не хочу', 'Завтра концерт, не могу', 'Завтра на мазду еду, не могу',
        'Я на репе',  'Я к сестре укатил', 'Я на музыке', 'Я у сестры', 'Я на работе', 'Я в Козине', 'Я не бухаю', 'Я в барбершоп', 'Я бухаю на работе',
        'Мы в Винницу укатили', 'Мы не дома', 'Мы в городе тупим', 'Мы не бухаем',
        'Го завтра', 'Го на неделе', 'Го на выходных', 'Го после выходных', 'Го после праздников',
        'Ну его нахуй', 'Не хочу', 'Уже набухался','Времени нет', 'Совещание',
        'Заебал', 'Бухать - для петухов', 'Го, заебал', 'Го', 'хз', 'пока'
    ],

    getRandomPhrase() {
        return this.variables[Math.floor(Math.random()*this.variables.length)];
    }
} 

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(msg.chat.id, `${msg.chat.id}`+answer.getRandomPhrase());
});


bot.onText('', (msg) => {
    bot.sendMessage(msg.chat.id, `${msg.chat.id}`+answer.getRandomPhrase());
});

    
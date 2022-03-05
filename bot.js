const token = process.env.TOKEN;

const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.on('message', (msg) => {
  const name = msg.from.first_name;
  bot.sendMessage(msg.chat.id, 'Hello, ' + name + '!').then(() => {
  });
});


const answer ={
    variables: [
        'Работаю', 'Не могу сегодня','Не, лень', 'Давай потом',  'шо', 'ничо', 'а шо?', 
        'Аня на маникюре', 'Аня у косметолога', 'Аня с подругой',  'Аня работает', 'У Ани совещание в 6', 'Мы улетели', 'У меня масуд после вчера', 'У меня масуд', 'шото хуево, не хочу', 
        'Не, впадлу бухать', 'Та я ебал', 'Не, не хочу', 'Завтра концерт, не могу', 'Завтра на мазду еду, не могу',
        'Я в бассейне', 'Я на тренировке',  'Я на репе',  'Я к сестре укатил', 'Я на музыке', 'Я у сестры', 'Я на работе', 'Я в Козине', 'Я не бухаю',
        'Я в барбершоп', 'Я бухаю на работе', 'Бухаю с донецкими пацанами', 'Нихуя', 'В Виннице', 'В дороге', 'работаю, но могу выйти на пол часа', 'я пью кофе потому что это вкусно',
        'чо нет?', 'ну пока', 'та не, не хочу', 'в Козине', 'Аня на массаже', 'Аня в парикмахерской', 'Аня  у косметолога',
        'Мы в Винницу укатили', 'Мы не дома', 'Мы в городе тупим', 'Мы не бухаем', 'На музыке', 'На студии', 'На концерте', 
        'Го завтра', 'Го на неделе', 'Го на выходных', 'Го после выходных', 'Го после праздников',
        'Ну его нахуй', 'Не хочу', 'Уже набухался','Времени нет', 'Совещание','Работа', 'в магаз уехали', 'по магазинам ушли',
        'Заебал', 'Бухать - для петухов', 'Го, заебал', 'хз', 'пока', 'нам впадлу','Та не, впадлу',
        'В прянощах - говно', 'там дорого','Аня ногти делает', 'Официантка похожа на официантку из прянощей', 'да', 'нет', 'хер там', 'ничего', 'зачем?', 'нахуя?'
    ],

    getRandomPhrase() {
        return this.variables[Math.floor(Math.random()*this.variables.length)];
    }
} 

bot.on('inline_query', (msg) => {
    bot.answerInlineQuery(msg.id, [{
        type: 'article',
        id: 'answer',
        title: `Отмазаться от ${msg.from.first_name}`,
        input_message_content: {
            message_text: `${answer.getRandomPhrase()}`
        }
    }],{
        cache_time:0
    });
});





module.exports = bot;

'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Hello, <@${user_id}>`);
  });
  robot.hear(/bye>/i, (msg) => {
    const user_id = msg.message.user.id;
    msg.send(`Bye, <@${user_id}>`);
  });
  robot.hear(/おみくじ/i, (msg) => {
    const user_id = msg.message.user.id;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`${lot}, <@${user_id}>`);
  });
  robot.hear(/ごはん/i, (msg) => {
    const user_id = msg.message.user.id;
    const lots = ['カレー', '餃子', 'ラーメン', 'チャーハン', '焼き肉', 'うどん'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    msg.send(`今日のごはんは ${lot} です！ <@${user_id}>`);
  });
};
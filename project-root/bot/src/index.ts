import { Bot } from 'grammy';
import { config } from 'dotenv';
import { startCommand, helpCommand, chooseHeroCommand } from './commands';
import { dynamicKeyboard } from './keyboards/dynamicKeyboard';

config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command('start', startCommand);
bot.command('help', helpCommand);
bot.command('choosehero', chooseHeroCommand);

bot.start();

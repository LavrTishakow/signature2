import { Context } from 'grammy';
import { dynamicKeyboard } from '../keyboards/dynamicKeyboard';

export const chooseHeroCommand = (ctx: Context) => {
	ctx.reply('Choose your hero:', {
		reply_markup: dynamicKeyboard()
	});
};

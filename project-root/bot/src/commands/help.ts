import { Context } from 'grammy';

export const helpCommand = (ctx: Context) => {
	ctx.reply('Use /choosehero to select the best hero against your opponents.');
};

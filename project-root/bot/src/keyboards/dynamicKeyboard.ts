import { InlineKeyboard } from 'grammy';

export const dynamicKeyboard = () => {
	const keyboard = new InlineKeyboard();
	keyboard.text('Hero 1', 'hero_1').row();
	keyboard.text('Hero 2', 'hero_2').row();
	// Add more buttons dynamically
	return keyboard;
};

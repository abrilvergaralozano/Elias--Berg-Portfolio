import { messages } from '#lib/server/messages.js';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();

    const newMessage = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    messages.push(newMessage);
    console.log('New message:', newMessage);

    return { success: true };
  }
};
var fs = require('fs');

export async function POST(request) {
  const message = await request.json();

  const total_sides = message.total_sides;
  const result = message.result;

  const log_string = `${new Date()}: Total Sides: ${total_sides} Result: ${result}\n`;

  fs.appendFile('roll_history.log', log_string, (err) => {
    if (err) {
      console.log(err);
    }
  });

  return new Response('Log written...', { status: 200 });
}
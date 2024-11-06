export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const { name, email, message } = body;
  let messageLet = "";

  if (message.length === 0) {
    messageLet = 'Poruka nije uneta.'
  } else {
    messageLet = message
  }

  // Validate form data
  // if (!name || !email || !message) {
  //   return {
  //     statusCode: 400,
  //     message: 'Invalid form data',
  //   };
  // }

  const config = useRuntimeConfig();
  const mailgunApiKey = config.mailgunApiKey;
  const mailgunDomain = config.mailgunDomain;

  // Set your Mailgun API key and domain
  const MAILGUN_API_KEY = mailgunApiKey;
  const MAILGUN_DOMAIN = mailgunDomain;

  const mailgunUrl = `https://api.eu.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`;

  // Prepare the email data using URLSearchParams
  const emailData = new URLSearchParams();
  // emailData.append('from', `Contact Form <postmaster@${MAILGUN_DOMAIN}>`);
  emailData.append('from', `${name} ${email}`);
  emailData.append('to', 'info@panic-plast.rs');
  emailData.append('h:Reply-To', email);
  emailData.append('subject', `panic-plast.rs: ${name}`);
  emailData.append('text', messageLet);

  try {
    const response = await $fetch(mailgunUrl, {
      method: 'POST',
      body: emailData.toString(),
      headers: {
        'Authorization': `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return {
      statusCode: 200,
      message: 'Poruka je uspešno poslata.',
      data: response,
    };
  } catch (error) {
    console.error("Mailgun API error:", error);
    return {
      statusCode: 500,
      message: 'Failed to send email',
      error: error.data || error.message,
    };
  }
});
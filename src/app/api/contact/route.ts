import { type NextRequest, NextResponse } from 'next/server';
import Mail from 'nodemailer/lib/mailer';
import nodemailer from 'nodemailer';
import validate from 'deep-email-validator'

export async function POST(req: NextRequest) {
	const { a } = await req.json()
	const err = await validate({ email: a.email, validateTypo: false, validateDisposable: true, validateSMTP: false })
	if (err.valid) {
		const transport = nodemailer.createTransport({
			service: 'gmail',
			/* 
				setting service as 'gmail' is same as providing these setings:
		  
				host: "smtp.gmail.com",
				port: 465,
				secure: true
				
				If you want to use a different email provider other than gmail, you need to provide these manually.
				Or you can go use these well known services and their settings at
				https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
			*/
			auth: {
				user: process.env.MY_EMAIL,
				pass: process.env.MY_PASSWORD,
			},
		});

		const mailOptions: Mail.Options = {
			from: process.env.MY_EMAIL,
			to: process.env.TO_EMAIL,
			// cc: a.email, // (uncomment this line if you want to send a copy to the sender)
			subject: `Skilaboð frá ${a.name} (${a.email}) (${err.valid || err.reason})`,
			text: a.message,
		};
		const sendMailPromise = () =>
			new Promise<string>((resolve, reject) => {
				transport.sendMail(mailOptions, function (err) {
					if (!err) {
						resolve('Email sent');
					} else {
						reject(err.message);
					}
				});
			});
		try {
			await sendMailPromise();
			return NextResponse.json({ message: 'Email sent' });
		} catch (err) {
			return NextResponse.json({ error: err }, { status: 500 });
		}
	} else {
		// return NextResponse.json({ error: `Tölvupóstur ógildur ${err.reason}` }, { status: 400 });
		const myOptions = { status: 400, statusText: `${err.reason} villa: Skilabod ekki send, athugaðu netfangid eða sendu póst á contact@elli.vip` };
		return new Response(`${err.reason} villa`, myOptions)
	}
}

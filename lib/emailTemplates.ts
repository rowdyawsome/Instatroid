export function welcomeTemplate(name: string) {
  return `
  <div style="font-family: Arial, sans-serif; background:#FFF0F6; padding:40px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden;">
      <div style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); padding:30px; text-align:center;">
        <h1 style="color:#ffffff; margin:0; font-size:22px; letter-spacing:1px;">Welcome to Instatroid 🎉</h1>
      </div>
      <div style="width:100%; line-height:0; text-align:center; background:#FFF0F6; padding:20px 0;">
        <img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/unnamed_1.png?itok=C8Nl5DmI"
          alt="Instatroid" style="width:200px; display:block; margin:0 auto; border-radius:20px;" />
      </div>
      <div style="padding:30px; color:#333333; font-size:16px; line-height:1.6;">
        <p style="margin:0 0 16px 0;">Hi ${name},</p>
        <p style="margin:0 0 16px 0;">Thanks for signing up and creating your <strong>Instatroid</strong> profile — you're officially in.</p>
        <p style="margin:0 0 16px 0;">We're excited to have you on board. You've just taken the first step into a whole new experience.</p>
        <p style="margin:0 0 24px 0;">To get started, simply request your app download link and we'll send it right over to you.</p>
        <p style="margin:0;">Warm regards,<br/><strong>The Instatroid Team</strong></p>
      </div>
      <div style="background:#F8BBD0; padding:15px; text-align:center; font-size:12px; color:#555;">
        © ${new Date().getFullYear()} Instatroid Officials. All rights reserved.
      </div>
    </div>
  </div>
  `;
}

export function downloadTemplate(name: string, downloadLink: string) {
  return `
  <div style="font-family: Arial, sans-serif; background:#FFF0F6; padding:40px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden;">
      <div style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); padding:30px; text-align:center;">
        <h1 style="color:#ffffff; margin:0; font-size:22px; letter-spacing:1px;">Download Instatroid 📲</h1>
      </div>
      <div style="width:100%; line-height:0; text-align:center; background:#FFF0F6; padding:20px 0;">
        <img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/unnamed_1.png?itok=C8Nl5DmI"
          alt="Instatroid" style="width:200px; display:block; margin:0 auto; border-radius:20px;" />
      </div>
      <div style="padding:30px; color:#333333; font-size:16px; line-height:1.6;">
        <p style="margin:0 0 16px 0;">Hi ${name},</p>
        <p style="margin:0 0 16px 0;">Your Instatroid app is ready to download. Tap the button below to get started — it only takes a moment.</p>
        <p style="margin:0 0 28px 0;">Once installed, log in with your account and enjoy everything Instatroid has to offer.</p>
        <div style="text-align:center; margin-bottom:28px;">
          <a href="${downloadLink}"
            style="display:inline-block; background:linear-gradient(135deg,#e6683c,#dc2743,#cc2366,#bc1888); color:#ffffff; font-size:16px; font-weight:700; text-decoration:none; padding:14px 44px; border-radius:50px;">
            ⬇️ Download App
          </a>
        </div>
        <p style="margin:0;">Warm regards,<br/><strong>The Instatroid Team</strong></p>
      </div>
      <div style="background:#F8BBD0; padding:15px; text-align:center; font-size:12px; color:#555;">
        © ${new Date().getFullYear()} Instatroid Officials. All rights reserved.
      </div>
    </div>
  </div>
  `;
}

export function directDownloadTemplate(name: string) {
  const appUrl = 'https://instatroid-app1.vercel.app/';
  return `
  <div style="font-family: Arial, sans-serif; background:#FFF0F6; padding:40px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden;">
      <div style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); padding:30px; text-align:center;">
        <h1 style="color:#ffffff; margin:0; font-size:22px; letter-spacing:1px;">Your App Link is Ready 🚀</h1>
      </div>
      <div style="width:100%; line-height:0; text-align:center; background:#FFF0F6; padding:20px 0;">
        <img src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/unnamed_1.png?itok=C8Nl5DmI"
          alt="Instatroid" style="width:200px; display:block; margin:0 auto; border-radius:20px;" />
      </div>
      <div style="padding:30px; color:#333333; font-size:16px; line-height:1.6;">
        <p style="margin:0 0 16px 0;">Hi ${name},</p>
        <p style="margin:0 0 16px 0;">Here is your direct link to the <strong>Instatroid</strong> app. Tap the button below to open it instantly — no waiting required.</p>
        <p style="margin:0 0 28px 0;">Bookmark it for easy access anytime.</p>
        <div style="text-align:center; margin-bottom:28px;">
          <a href="${appUrl}"
            style="display:inline-block; background:linear-gradient(135deg,#e6683c,#dc2743,#cc2366,#bc1888); color:#ffffff; font-size:16px; font-weight:700; text-decoration:none; padding:14px 44px; border-radius:50px;">
            🚀 Open Instatroid App
          </a>
        </div>
        <p style="margin:0 0 8px 0; font-size:13px; color:#888;">Or copy this link manually:</p>
        <p style="margin:0 0 24px 0; font-size:13px; background:#f5f5f5; padding:10px 14px; border-radius:8px; word-break:break-all; color:#555;">
          ${appUrl}
        </p>
        <p style="margin:0;">Warm regards,<br/><strong>The Instatroid Team</strong></p>
      </div>
      <div style="background:#F8BBD0; padding:15px; text-align:center; font-size:12px; color:#555;">
        © ${new Date().getFullYear()} Instatroid Officials. All rights reserved.
      </div>
    </div>
  </div>
  `;
}
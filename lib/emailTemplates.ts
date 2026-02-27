export function welcomeTemplate(name: string) {
  return `
  <div style="font-family: Arial, sans-serif; background:#FFF0F6; padding:40px;">
    <div style="max-width:600px; margin:auto; background:#ffffff; border-radius:12px; overflow:hidden;">
      
      <!-- Header - Text Only -->
      <div style="background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); padding:30px; text-align:center;">
        <h1 style="color:#ffffff; margin:0; font-size:22px; letter-spacing:1px;">Welcome to Instatroid 🎉</h1>
      </div>

      <!-- Featured Image -->
      <div style="width:100%; line-height:0; text-align:center; background:#FFF0F6; padding:20px 0;">
        <img 
          src="https://www.drupal.org/files/styles/grid-3-2x/public/project-images/unnamed_1.png?itok=C8Nl5DmI"
          alt="Instatroid"
          style="width:200px; display:block; margin:0 auto; border-radius:20px;"
        />
      </div>

      <!-- Body -->
      <div style="padding:30px; color:#333333; font-size:16px; line-height:1.6;">
        
        <p style="margin:0 0 16px 0;">
          Hi ${name},
        </p>

        <p style="margin:0 0 16px 0;">
          Thanks for signing up and creating your <strong>Instatroid</strong> profile — you're officially in.
        </p>

        <p style="margin:0 0 16px 0;">
          We're excited to have you on board. You've just taken the first step into a whole new experience.
        </p>

        <p style="margin:0 0 24px 0;">
          To get started, simply request your app download link and we'll send it right over to you.
        </p>

        <!-- Sign-off -->
        <p style="margin:0;">
          Warm regards,<br/>
          <strong>The Instatroid Team</strong>
        </p>

      </div>

      <!-- Footer -->
      <div style="background:#F8BBD0; padding:15px; text-align:center; font-size:12px; color:#555;">
        © ${new Date().getFullYear()} Instatroid Officials. All rights reserved.
      </div>

    </div>
  </div>
  `;
}
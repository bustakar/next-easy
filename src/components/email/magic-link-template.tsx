import * as React from 'react';

interface MagicLinkEmailProps {
  url: string;
  userEmail: string;
}

export function MagicLinkEmail({ url, userEmail }: MagicLinkEmailProps) {
  return (
    <html>
      <head>
        <style>{`
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .container {
            background-color: #f9f9f9;
            border-radius: 8px;
            padding: 30px;
            margin: 20px 0;
          }
          .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #000;
            color: #fff !important;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 500;
            margin: 20px 0;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
            font-size: 14px;
            color: #666;
          }
          h1 {
            font-size: 24px;
            margin-bottom: 20px;
            color: #111;
          }
          p {
            margin: 10px 0;
          }
        `}</style>
      </head>
      <body>
        <div className="container">
          <h1>Sign in to your account</h1>
          <p>Hi there,</p>
          <p>
            You requested a magic link to sign in to your account at{' '}
            <strong>Next Easy</strong>.
          </p>
          <p>Click the button below to securely sign in:</p>
          <a href={url} className="button">
            Sign In
          </a>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '20px' }}>
            This link will expire in 15 minutes and can only be used once.
          </p>
          <div className="footer">
            <p>
              If you didn&apos;t request this email, you can safely ignore it.
            </p>
            <p style={{ fontSize: '12px', color: '#999' }}>
              This email was sent to {userEmail}
            </p>
          </div>
        </div>
      </body>
    </html>
  );
}

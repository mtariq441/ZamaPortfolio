# Web3Forms Email Setup Instructions

Your contact form is configured to use Web3Forms, a secure email service that protects your email address from spam bots.

## Setup Steps

1. **Create a Free Account**
   - Visit: https://web3forms.com
   - Sign up for a free account (no credit card required)
   - Free tier includes 250 submissions per month

2. **Get Your Access Key**
   - After signing up, you'll receive an access key
   - Your email `muhammadtariqw33@gmail.com` will be the recipient

3. **Update the Contact Form**
   - Open `client/src/components/ContactForm.tsx`
   - Find line 54: `formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from Web3Forms

4. **Test the Form**
   - Fill out the contact form on your website
   - You should receive an email at muhammadtariqw33@gmail.com

## Why Web3Forms?

- **Secure**: Your email address is never exposed in the website code
- **Free**: 250 submissions per month at no cost
- **Spam Protection**: Built-in spam filtering
- **Reliable**: Fast email delivery
- **No Backend Required**: Works with static sites

## Alternative: Use Environment Variables (Recommended)

For better security, store your access key as an environment variable:

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add: `VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here`
3. Update ContactForm.tsx line 54 to:
   ```typescript
   formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "");
   ```

## Support

If you have issues, visit: https://web3forms.com/docs

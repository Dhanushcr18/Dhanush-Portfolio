# EmailJS Setup Instructions

Follow these steps to enable email functionality in your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Select **Gmail** as your email service
4. Click **Connect Account** and authorize your Gmail (dhadhanush.234@gmail.com)
5. Copy the **Service ID** (looks like: service_xxxxxxx)

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   From: {{from_name}} <{{from_email}}>
   To: dhadhanush.234@gmail.com
   Subject: New Contact Form Message from {{from_name}}
   
   Message:
   {{message}}
   
   Reply to: {{from_email}}
   ```
4. Click **Save** and copy the **Template ID** (looks like: template_xxxxxxx)

## Step 4: Get Public Key
1. Go to **Account** > **General**
2. Find your **Public Key** (looks like: xxxxxxxxxxxxx)

## Step 5: Update Your Code
Open `components/sections/Contact.tsx` and replace:
```typescript
const serviceID = 'service_portfolio'; // Replace with your Service ID
const templateID = 'template_contact'; // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your Public Key
```

## Step 6: Test
1. Save the file
2. Go to your portfolio contact form
3. Fill out and submit the form
4. Check your Gmail inbox for the message!

## Free Tier Limits
- 200 emails per month
- Perfect for a portfolio contact form

## Need Help?
- EmailJS Documentation: https://www.emailjs.com/docs/
- If you have issues, check the browser console for error messages

---
**Your Email:** dhadhanush.234@gmail.com

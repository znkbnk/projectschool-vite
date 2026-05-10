import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/terms.css";

const Terms = () => {
  return (
    <div>
      <Navbar />
      <div className='terms-container'>
        <div className='terms-header'>
          <h1>Terms and Conditions</h1>
          <p>Last updated: 9-6-2025</p>
        </div>
        <div className='terms-content'>
          <p>
            Welcome to www.projectschool.dev ("Website"). This Website is owned
            and operated by Jevgenij Buracevskij www.projectschool.dev, based in
            the United Kingdom. By accessing and using our Website, you agree to
            comply with and be bound by the following terms and conditions
            ("Terms"). Please review these Terms carefully. If you do not agree
            to these Terms, you should not use this Website.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using this Website, you accept and agree to be
            bound by these Terms and all applicable laws and regulations. If you
            do not agree with any part of these Terms, you must not use our
            Website.
          </p>

          <h2>2. Subscriptions and Payments</h2>
          <p>
            We offer subscription services on our Website, which are processed
            through Stripe. By subscribing, you agree to pay the applicable
            subscription fees and any other charges incurred in connection with
            your use of the Website. All fees are non-refundable, except in
            cases of duplicated or double payments caused by user error. If you
            believe you have been charged in error, please contact us at
            support@projectschool.dev.
          </p>

          <h2>3. Refund Policy</h2>
          <p>
            We do not offer refunds for subscription fees, except in cases of
            duplicated or double payments made by mistake. If you encounter any
            issues with your subscription or believe you are entitled to a
            refund, please contact us immediately at support@projectschool.dev.
          </p>

          <h2>4. Data Storage and Security</h2>
          <p>
            We take the privacy and security of your data seriously. User data
            is stored securely in Firebase and MongoDB databases. We implement
            appropriate security measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2>5. Payment Processing</h2>
          <p>
            Payments are processed securely through Stripe. By using our
            subscription services, you agree to Stripe's terms and conditions
            and privacy policy. For more information on Stripe's policies,
            please visit https://stripe.com/gb/legal/consumer.
          </p>

          <h2>6. Website Hosting</h2>
          <p>
            Our Website is hosted on Netlify. By using our Website, you agree to
            Netlify's terms of service and privacy policy. For more information
            on Netlify's policies, please visit
            https://www.netlify.com/legal/terms-of-use/.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this Website, including but not limited to text,
            graphics, logos, images, and software, is the property of
            www.projectschool.dev and is protected by applicable intellectual
            property laws. You may not reproduce, distribute, or create
            derivative works from any content on this Website without our
            express written permission, except for tasks provided for
            educational purposes. Users are granted a non-exclusive,
            non-transferable license to use the tasks provided on this Website
            for personal educational purposes, including showcasing in personal
            portfolios or CVs for job interviews. This license does not permit
            commercial use, distribution, or modification of the tasks without
            explicit authorization from www.projectschool.dev.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, www.projectschool.dev shall
            not be liable for any indirect, incidental, special, consequential,
            or punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use, goodwill,
            or other intangible losses, resulting from (a) your use or inability
            to use the Website; (b) any unauthorized access to or use of our
            servers and/or any personal information stored therein; (c) any
            interruption or cessation of transmission to or from the Website;
            (d) any bugs, viruses, trojan horses, or the like that may be
            transmitted to or through our Website by any third party; or (e) any
            errors or omissions in any content or for any loss or damage
            incurred as a result of the use of any content posted, emailed,
            transmitted, or otherwise made available through the Website.
          </p>

          <h2>9. Governing Law</h2>
          <p>
            These Terms are governed by and construed in accordance with the
            laws of the United Kingdom. You agree to submit to the exclusive
            jurisdiction of the courts located in the United Kingdom to resolve
            any dispute arising out of these Terms or the use of the Website.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Any changes
            will be effective immediately upon posting on the Website. Your
            continued use of the Website following the posting of changes will
            constitute your acceptance of such changes.
          </p>

          <h2>11. Contact Information</h2>
          <p>
            If you have any questions about these Terms, please contact us at
            support@projectschool.dev.
          </p>
          <h2>12. Marketing Communications</h2>
          <p>
            By registering an account on www.projectschool.dev, you agree that
            we may use your email address to send you marketing communications,
            such as newsletters, promotional offers, and updates about our
            services, unless you explicitly opt out. You may opt out of
            receiving marketing emails at any time by clicking the unsubscribe
            link included in every marketing email or by contacting us at
            support@projectschool.dev. Opting out of marketing communications
            will not affect your receipt of transactional emails related to your
            account or subscriptions (e.g., payment confirmations or account
            updates).
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms;

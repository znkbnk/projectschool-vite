import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/privacy.css";

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className='privacy-container'>
        <div className='privacy-header'>
          <h1>Privacy Policy</h1>
          <p>Last updated: 10-12-2025</p>
        </div>
        <div className='privacy-content'>
          <p>
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you visit our Website. Please read
            this privacy policy carefully. If you do not agree with the terms of
            this privacy policy, please do not access the site.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The
            information we may collect on the Website includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable
              information, such as your name, shipping address, email address,
              and telephone number, and demographic information, such as your
              age, gender, hometown, and interests, that you voluntarily give to
              us when you register with the Website or when you choose to
              participate in various activities related to the Website, such as
              online chat and message boards.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers
              automatically collect when you access the Website, such as your IP
              address, your browser type, your operating system, your access
              times, and the pages you have viewed directly before and after
              accessing the Website. This may include data collected via cookies
              and similar technologies, as described in our Cookie Policy (see
              Section 9).
            </li>
          </ul>

          <h2>2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with
            a smooth, efficient, and customized experience. Specifically, we may
            use information collected about you via the Website to:
          </p>
          <ul>
            <li>Create and manage your account.</li>
            <li>Process your transactions and subscriptions.</li>
            <li>
              Send you marketing communications, such as newsletters,
              promotional offers, and updates about our services, where you have
              provided consent or as permitted under applicable law (see Section
              8: Marketing Communications).
            </li>
            <li>Email you regarding your account or order.</li>
            <li>
              Monitor and analyze usage and trends to improve your experience
              with the Website.
            </li>
            <li>Perform other business activities as needed.</li>
          </ul>

          <h2>3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain
            situations. Your information may be disclosed as follows:
          </p>
          <ul>
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the
              release of information about you is necessary to respond to legal
              process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of
              others, we may share your information as permitted or required by
              any applicable law, rule, or regulation.
            </li>
            <li>
              <strong>Business Transfers:</strong> We may share or transfer your
              information in connection with, or during negotiations of, any
              merger, sale of company assets, financing, or acquisition of all
              or a portion of our business to another company.
            </li>
          </ul>

          <h2>4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to
            help protect your personal information. While we have taken
            reasonable steps to secure the personal information you provide to
            us, please be aware that despite our efforts, no security measures
            are perfect or impenetrable, and no method of data transmission can
            be guaranteed against any interception or other type of misuse.
          </p>

          <h2>5. Policy for Children</h2>
          <p>
            We do not knowingly solicit information from or market to children
            under the age of 13. If we learn that we have collected personal
            information from a child under age 13 without verification of
            parental consent, we will delete that information as quickly as
            possible. If you become aware of any data we have collected from
            children under age 13, please contact us at support@projectschool.dev.
          </p>

          <h2>6. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time in order to
            reflect, for example, changes to our practices or for other
            operational, legal, or regulatory reasons. We will notify you of any
            changes by posting the new Privacy Policy on this page.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please
            contact us at:
          </p>
          <address>
            www.projectschool.dev
            <br />
            Birmingham
            <br />
            United Kingdom
            <br />
            support@projectschool.dev
          </address>

          <h2>8. Marketing Communications</h2>
          <p>
            When you register an account on www.projectschool.dev, we may use
            your email address to send you marketing communications, including
            newsletters, promotional offers, and updates about our services,
            unless you opt out. We rely on your consent or our legitimate
            interest (where permitted by law, such as for existing customers
            under the soft opt-in rule) to send these communications. You can
            opt out of marketing emails at any time by clicking the unsubscribe
            link in any marketing email or by contacting us at
            support@projectschool.dev. Opting out of marketing communications
            will not affect your receipt of transactional emails, such as those
            related to your account, subscriptions, or order confirmations. We
            use third-party services, such as MailerLite, to manage and send
            marketing communications, and your email address may be processed by
            these services in accordance with their privacy policies.
          </p>

          <h2>9. Cookie Policy</h2>
          <p>
            Our Website uses cookies and similar technologies to enhance your experience, provide services, and analyze usage. Cookies are small text files stored on your device when you visit our Website.
          </p>
          <p>Types of Cookies We Use:</p>
          <ul>
            <li>
              <strong>Essential Cookies:</strong> Necessary for the Website to function, such as for user authentication (via Firebase) and payment processing (via Stripe). These cookies do not require consent and are always enabled.
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Used to monitor Website performance and improve user experience, such as through Google Analytics. These cookies require your explicit consent, which you can provide or withdraw via our cookie consent popup.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Used to enhance user experience, such as through Google Fonts for typography. These cookies are typically essential and do not require consent, but may be managed via browser settings.
            </li>
            {/*
              Conditionally include Marketing Cookies if MailerLite sets cookies
              <li>
                <strong>Marketing Cookies:</strong> Used to provide personalized content, such as through MailerLite for marketing emails. These cookies require your explicit consent, which you can provide or withdraw via our cookie consent popup.
              </li>
            */}
          </ul>
          <p>Third-Party Cookies and Services:</p>
          <p>
            Some cookies are set by third-party services, including:
          </p>
          <ul>
            <li>Google Analytics (analytics): <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li>Firebase (authentication): <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
            <li>Stripe (payments): <a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer">https://stripe.com/gb/privacy</a></li>
            <li>Netlify (hosting): <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">https://www.netlify.com/privacy/</a></li>
            {/* Conditionally include MailerLite if it sets cookies */}
            {/* <li>MailerLite (marketing): <a href="https://www.mailerlite.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">https://www.mailerlite.com/legal/privacy-policy</a></li> */}
            <li>Google Fonts (typography): <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a></li>
          </ul>
          <p>Managing Cookies:</p>
          <p>
            You can control cookies through our cookie consent popup, which appears when you first visit the Website or when you click the “Manage Cookies” link in the Website footer. This popup allows you to accept all cookies, decline non-essential cookies, or customize your preferences (e.g., enable or disable analytics cookies). Clicking “Manage Cookies” reopens the popup instantly, allowing you to modify your preferences without refreshing the page. You may also manage or disable cookies via your browser settings, though this may affect Website functionality. For further assistance, contact us at support@projectschool.dev.
          </p>
          <p>Changes to This Cookie Policy:</p>
          <p>
            We may update this Cookie Policy to reflect changes in our practices or legal requirements. Updates will be posted on this page, and significant changes will be communicated via email or a Website notice.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
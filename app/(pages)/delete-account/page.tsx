import React from "react";

export const metadata = { title: "Delete your LegalX account" };

// Moved from the retired legal-x-temp.vercel.app site; contact updated to
// hello@legalxapp.com. Store listings should link here.
const content = "<div class=\"container\"> <h1>Delete Your Legal X Account</h1> <p> We're sorry to see you go. Before you proceed with deleting your account, please take a moment to understand what happens when you delete your Legal X account. </p> <div class=\"warning\"> <h3>\u26a0\ufe0f Important: Account deletion is permanent</h3> <p> Once your account is deleted, all your personal information, service history, and communications will be permanently removed from our system after a 30-day recovery period. This action cannot be undone. </p> </div> <div class=\"accordion\"> <div class=\"accordion-item\"> <div class=\"accordion-header\" onclick=\"toggleAccordion(this)\"> What happens when you delete your account? </div> <div class=\"accordion-content\"> <ul> <li> <strong>Personal Information:</strong> Your profile information, contact details, and payment information will be deleted. </li> <li> <strong>Communication History:</strong> All messages between you and legal professionals will be removed. </li> <li> <strong>Service Records:</strong> Your history of legal services used or provided will be deleted. </li> <li> <strong>Reviews and Ratings:</strong> Any reviews or ratings you've given or received will be removed. </li> <li> <strong>For Lawyers:</strong> Your service listings, credentials, and client history will be removed from our platform. </li> </ul> <p> Please note: We may retain certain information for legal, regulatory, or legitimate business purposes. For more information, please refer to our <a href=\"/privacy-policy\">Privacy Policy</a>. </p> </div> </div> <div class=\"accordion-item\"> <div class=\"accordion-header\" onclick=\"toggleAccordion(this)\"> Alternatives to account deletion </div> <div class=\"accordion-content\"> <p> If you're experiencing issues with our service, you might consider these alternatives: </p> <ul> <li> <strong>Deactivate temporarily:</strong> You can <a href=\"/account/deactivate\">deactivate your account</a> instead, which hides your profile but keeps your data intact should you wish to return. </li> <li> <strong>Update notification settings:</strong> <a href=\"/account/notifications\" >Manage your email preferences</a > if you're receiving too many communications. </li> <li> <strong>Contact support:</strong> <a href=\"/help\">Reach out to our support team</a> if you're having specific issues we can help resolve. </li> </ul> </div> </div> </div> <form id=\"deleteAccountForm\"> <div class=\"form-group\"> <label for=\"password\">Confirm your password:</label> <input type=\"password\" id=\"password\" name=\"password\" required /> </div> <div class=\"form-group\"> <label for=\"reason\" >Please tell us why you're leaving (optional):</label > <textarea id=\"reason\" name=\"reason\"></textarea> </div> <div class=\"checkbox-container\"> <input type=\"checkbox\" id=\"confirm\" name=\"confirm\" required /> <label for=\"confirm\" >I understand that deleting my account is permanent and cannot be undone.</label > </div> <div> <a href=\"/account\" class=\"btn btn-cancel\">Cancel</a> <button type=\"submit\" class=\"btn btn-delete\"> Delete My Account </button> </div> </form> </div> <div class=\"footer\"> <p>Need help? <a href=\"/contact\">Contact our support team</a></p> <p>\u00a9 2025 Legal X. All rights reserved.</p> </div>";

const page = () => (
  <section className="min-h-screen px-4 py-24">
    <div className="legal-doc max-w-3xl mx-auto text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />
    <style>{`
      .legal-doc h1 { font-size: 1.875rem; font-weight: 700; color: #111; margin-bottom: 1rem; }
      .legal-doc h2 { font-size: 1.25rem; font-weight: 700; color: #111; margin: 1.75rem 0 0.5rem; }
      .legal-doc h3 { font-size: 1.05rem; font-weight: 600; color: #111; margin: 1.25rem 0 0.5rem; }
      .legal-doc p { margin: 0.5rem 0; }
      .legal-doc ul, .legal-doc ol { margin: 0.5rem 0 0.5rem 1.25rem; list-style: disc; }
      .legal-doc li { margin: 0.25rem 0; }
      .legal-doc a { color: #b3872d; text-decoration: underline; }
      .legal-doc a.button, .legal-doc .btn { display: inline-block; padding: 0.6rem 1rem; background: #b3872d; color: #fff; border-radius: 6px; text-decoration: none; }
    `}</style>
  </section>
);

export default page;

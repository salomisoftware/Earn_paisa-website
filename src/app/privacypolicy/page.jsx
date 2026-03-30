export default function PrivacyPolicy() {
    return (
        <div className="max-w-4xl mx-auto px-5 py-10  ">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                This Privacy Policy describes how our app ("we", "our", or "us") collects,
                uses, and protects your information when you use our application.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                1. Information We Collect
            </h2>
            <p className="mb-4">
                When you use our app, we may collect the following information:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>Email address (via Google Sign-In)</li>
                <li>Firebase Authentication user data</li>
                <li>Device ID (for security and account restriction)</li>
                <li>IP Address (to detect country and region)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                2. How We Use Your Information
            </h2>
            <p className="mb-4">
                We use your information for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
                <li>To create and manage your account</li>
                <li>To prevent multiple accounts from the same device</li>
                <li>To calculate rewards and referral bonuses</li>
                <li>To show region-based offers and rewards</li>
                <li>To manage redemption options</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                3. Notifications
            </h2>
            <p className="mb-4">
                Our app may request permission to send notifications. You can choose to
                allow or deny notifications at any time. Notifications are used to inform
                users about updates, offers, and rewards.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                4. Data Storage
            </h2>
            <p className="mb-4">
                Your data is securely stored using Firebase services including Firebase
                Authentication and Firestore Database.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                5. Referral System
            </h2>
            <p className="mb-4">
                We use your account data and country information to manage referral rewards
                and bonus distribution based on your region.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                6. Coin & Reward System
            </h2>
            <p className="mb-4">
                Users can earn coins by completing offers and tasks. These coins can be
                redeemed for rewards. All transactions are tracked in coin history and
                redemption history.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                7. Third-Party Services
            </h2>
            <p className="mb-4">
                We use Firebase (Google services) for authentication, database, and backend
                processing. These services may collect and process data according to their
                own privacy policies.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                8. Data Security
            </h2>
            <p className="mb-4">
                We take appropriate security measures to protect your data. However, no
                system is 100% secure.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                9. User Control
            </h2>
            <p className="mb-4">
                Users can control notification permissions and may stop using the app at
                any time.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                10. Changes to This Policy
            </h2>
            <p className="mb-4">
                We may update this Privacy Policy from time to time. Changes will be updated
                on this page.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                11. Contact Us
            </h2>
            <p className="mb-4">
                If you have any questions, you can contact us at:
                <br />
                <strong>Email:</strong> support@sapadiyasoftware.com
            </p>
        </div>
    );
}
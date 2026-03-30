export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-10 ">
      <h1 className="text-3xl font-bold mb-6">About Us</h1>

      <p className="mb-4">
        Welcome to <strong>Earn Paisa</strong> 🎉 — a simple and user-friendly
        rewards platform where users can earn coins by completing tasks,
        offers, and referrals.
      </p>

      <p className="mb-4">
        Our goal is to provide an easy and transparent way for users to earn
        rewards in their free time. We focus on creating a smooth experience
        with fair reward distribution and secure systems.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        What We Offer
      </h2>

      <ul className="list-disc pl-6 mb-4">
        <li>Earn coins by completing simple tasks and offers</li>
        <li>Referral system to earn bonus rewards</li>
        <li>Multiple redemption options</li>
        <li>Real-time coin and redemption history tracking</li>
        <li>Secure login using Google Authentication</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Our Mission
      </h2>

      <p className="mb-4">
        Our mission is to make earning rewards simple, accessible, and enjoyable
        for everyone. We aim to build a trusted platform where users feel safe
        and rewarded for their engagement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Security & Transparency
      </h2>

      <p className="mb-4">
        We use secure technologies like Firebase Authentication and Firestore
        to protect user data. We also ensure fair usage by limiting one account
        per device and monitoring suspicious activities.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">
        Contact Us
      </h2>

      <p className="mb-4">
        If you have any questions, suggestions, or issues, feel free to contact us:
        <br />
        <strong>Email:</strong> support@sapadiyasoftware.com
      </p>
    </div>
  );
}
import React, { useEffect } from 'react';
import { X, Shield, Eye, Lock, Users } from 'lucide-react';

interface PrivacyPolicyOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyOverlay: React.FC<PrivacyPolicyOverlayProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const heading = 'display display-sm text-ink';

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-[3px] bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 bg-ink px-6 py-5 text-white md:px-10">
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-leaf" />
            <h2 id="privacy-title" className="display display-sm">Privacy Policy</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/25 transition-colors hover:bg-ember hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto px-6 py-8 md:px-10">
          <div className="space-y-10 text-ink">
            {/* Introduction */}
            <section>
              <p className="label mb-4 text-muted-foreground">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="lede">
                Blancosy Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="border-t border-ink/10 pt-8">
              <div className="mb-4 flex items-center gap-3">
                <Eye className="h-5 w-5 text-petrol" />
                <h3 className={heading}>Information We Collect</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p><strong className="text-ink">Personal Information:</strong> When you contact us or request our services, we may collect your name, email address, phone number, and business information.</p>
                <p><strong className="text-ink">Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, and pages visited.</p>
                <p><strong className="text-ink">Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience.</p>
              </div>
            </section>

            {/* How We Use Information */}
            <section className="border-t border-ink/10 pt-8">
              <div className="mb-4 flex items-center gap-3">
                <Users className="h-5 w-5 text-petrol" />
                <h3 className={heading}>How We Use Your Information</h3>
              </div>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground marker:text-ember">
                <li>To provide and maintain our waste recycling services</li>
                <li>To communicate with you about our services and sustainability initiatives</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To send you promotional materials (with your consent)</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section className="border-t border-ink/10 pt-8">
              <div className="mb-4 flex items-center gap-3">
                <Lock className="h-5 w-5 text-petrol" />
                <h3 className={heading}>Data Protection & Security</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>Your data is stored securely and we limit access to authorized personnel only.</p>
              </div>
            </section>

            {/* Information Sharing */}
            <section className="border-t border-ink/10 pt-8">
              <h3 className={`${heading} mb-4`}>Information Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            {/* Your Rights */}
            <section className="border-t border-ink/10 pt-8">
              <h3 className={`${heading} mb-4`}>Your Rights</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="ml-4 list-inside list-disc space-y-1 marker:text-ember">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with relevant authorities</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="border-t border-ink/10 pt-8">
              <h3 className={`${heading} mb-4`}>Contact Us</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="space-y-1 bg-bone p-5 font-mono text-sm">
                  <p><strong className="text-ink">Blancosy Ltd</strong></p>
                  <p>Email: privacy@blancosy.co.ke</p>
                  <p>Website: https://blancosy.co.ke</p>
                  <p>Address: Kenya</p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section className="border-t border-ink/10 pt-8">
              <h3 className={`${heading} mb-4`}>Policy Updates</h3>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-ink/10 bg-white px-6 py-4 md:px-10">
          <button onClick={onClose} className="btn btn-ink">
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyOverlay;

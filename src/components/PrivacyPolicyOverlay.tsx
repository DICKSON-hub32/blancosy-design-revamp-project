import React from 'react';
import { X, Shield, Eye, Lock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PrivacyPolicyOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyOverlay: React.FC<PrivacyPolicyOverlayProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-background rounded-2xl shadow-2xl mx-4">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Privacy Policy</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] px-6 py-6">
          <div className="space-y-6 text-foreground">
            {/* Introduction */}
            <section>
              <p className="text-muted-foreground mb-4">
                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
              </p>
              <p className="text-lg leading-relaxed">
                Blancosy Ltd ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Eye className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Information We Collect</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Personal Information:</strong> When you contact us or request our services, we may collect your name, email address, phone number, and business information.</p>
                <p><strong>Usage Data:</strong> We automatically collect certain information when you visit our website, including your IP address, browser type, and pages visited.</p>
                <p><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your browsing experience.</p>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">How We Use Your Information</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                <li>To provide and maintain our waste recycling services</li>
                <li>To communicate with you about our services and sustainability initiatives</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
                <li>To send you promotional materials (with your consent)</li>
              </ul>
            </section>

            {/* Data Protection */}
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Lock className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold">Data Protection & Security</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <p>Your data is stored securely and we limit access to authorized personnel only.</p>
              </div>
            </section>

            {/* Information Sharing */}
            <section>
              <h3 className="text-xl font-semibold mb-3">Information Sharing</h3>
              <p className="text-muted-foreground">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h3 className="text-xl font-semibold mb-3">Your Rights</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Lodge a complaint with relevant authorities</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>If you have any questions about this Privacy Policy, please contact us:</p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p><strong>Blancosy Ltd</strong></p>
                  <p>Email: privacy@blancosy.co.ke</p>
                  <p>Website: https://blancosy.co.ke</p>
                  <p>Address: Kenya</p>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h3 className="text-xl font-semibold mb-3">Policy Updates</h3>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
              </p>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border px-6 py-4">
          <div className="flex justify-end">
            <Button onClick={onClose} className="eco-button">
              I Understand
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyOverlay;
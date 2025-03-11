import { useLocation } from "wouter";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function Legal() {
  const [location] = useLocation();
  const hash = location.split("#")[1] || "privacy";

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Legal Information</h1>
            <p className="text-xl text-muted-foreground">
              Important information about our policies and terms
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue={hash} className="space-y-8">
              <TabsList className="w-full">
                <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                <TabsTrigger value="terms">Terms of Service</TabsTrigger>
                <TabsTrigger value="compliance">Compliance</TabsTrigger>
              </TabsList>

              <TabsContent value="privacy" className="space-y-6">
                <h2 className="text-2xl font-bold">Privacy Policy</h2>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="prose">
                  <h3>Information Collection</h3>
                  <p>
                    We collect information that you provide directly to us, including
                    when you create an account, make a purchase, or contact us for
                    support.
                  </p>

                  <h3>Use of Information</h3>
                  <p>
                    We use the information we collect to provide, maintain, and
                    improve our services, to develop new ones, and to protect our
                    company and our users.
                  </p>

                  <h3>Information Sharing</h3>
                  <p>
                    We do not share your personal information with third parties
                    except as described in this privacy policy.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="terms" className="space-y-6">
                <h2 className="text-2xl font-bold">Terms of Service</h2>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="prose">
                  <h3>Acceptance of Terms</h3>
                  <p>
                    By accessing and using our services, you accept and agree to be
                    bound by the terms and conditions of this agreement.
                  </p>

                  <h3>Use License</h3>
                  <p>
                    Permission is granted to temporarily download one copy of the
                    materials for personal, non-commercial transitory viewing only.
                  </p>

                  <h3>Disclaimer</h3>
                  <p>
                    The materials on our website are provided on an 'as is' basis.
                    We make no warranties, expressed or implied, and hereby disclaim
                    and negate all other warranties including, without limitation,
                    implied warranties or conditions of merchantability.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="compliance" className="space-y-6">
                <h2 className="text-2xl font-bold">Compliance</h2>
                <p className="text-muted-foreground">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                <div className="prose">
                  <h3>Data Protection</h3>
                  <p>
                    We comply with GDPR and other applicable data protection laws.
                    We implement appropriate technical and organizational measures
                    to ensure a level of security appropriate to the risk.
                  </p>

                  <h3>Industry Standards</h3>
                  <p>
                    Our services comply with industry standards and best practices
                    for security, reliability, and performance.
                  </p>

                  <h3>Certifications</h3>
                  <p>
                    We maintain various certifications and comply with regulatory
                    requirements applicable to our services.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
}

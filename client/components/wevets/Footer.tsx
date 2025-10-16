import { Mail, Instagram, Phone, ShieldCheck, Globe } from "lucide-react";

export function Footer() {
  return (
    <>
      <footer className="bg-wevets-navy py-12 px-32">
        <div className="flex gap-12">
          <div className="flex flex-col gap-12">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fad3b24e0eebc41a888274aae2381ca13%2F4135522efcdc438487a2dbd4d670810f?format=webp&width=800"
              alt="WeVets Logo"
              className="w-48 h-auto"
            />

            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/6 border border-white/12 text-white rounded-md px-3 py-2">
                <ShieldCheck className="w-5 h-5 text-white" />
                <span className="text-xs">SSL Secure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/6 border border-white/12 text-white rounded-md px-3 py-2">
                <Globe className="w-5 h-5 text-white" />
                <span className="text-xs">Google Safe Browsing</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white">
                <Mail className="w-6 h-6" />
                <span className="font-montserrat font-bold">
                  app.wevets.com.br
                </span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <Instagram className="w-6 h-6" />
                <span className="font-montserrat font-bold">@we.vets</span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <Phone className="w-6 h-6" />
                <span className="font-montserrat font-bold">
                  (11) 3336-0600
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="bg-wevets-navy border-t border-white/24 py-6 px-32"></div>
    </>
  );
}
